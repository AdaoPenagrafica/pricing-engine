import { Parser } from 'expr-eval';
import { ruleMap, helperMap } from './index';
import { decrypt } from './helpers/decrypt';

interface EvaluateOptions { decryptKey?: string; }

export function evaluateRules(facts: any, key: keyof typeof ruleMap, options: EvaluateOptions = {}): { [key: string]: number } {
  const rules = ruleMap[key];
  const helpers = helperMap[key] || {};
  if (!rules) {
    throw new Error(`No rules defined for key: ${key}`);
  }

  const decryptedFacts: Record<string, any> = {};
  for (const [key, value] of Object.entries(facts)) {
    try {
      if (options && typeof value === 'string' && value.startsWith('U2FsdGVk')) {
        decryptedFacts[key] = decrypt(value, options.decryptKey ?? '');
      } else {
        decryptedFacts[key] = value;
      }
    } catch (e) {
      decryptedFacts[key] = value;
    }
  }

  const parser = new Parser();
  const context: any = { ...decryptedFacts, ...helpers };

  for (const rule of rules) {
    if (!rule?.event?.params) {
      console.warn('Skipping invalid rule:', rule);
      continue;
    }
    const { name, expression } = rule.event.params;
    try {
      const value = parser.evaluate(expression, context);
      context[name] = value;
    } catch (e: any) {
      throw new Error(
        `Failed to evaluate "${name}" with formula "${expression}".\nAvailable variables: ${Object.keys(context).join(', ')}\nError: ${e.message}`
      );
    }
  }

  return {
    All: context,
    Unitario: context['finishCost'],
    Quantidade: context['quantity'],
    Total: context['finishCost'] * context['quantity']
  };
}