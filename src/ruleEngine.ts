import { Parser } from 'expr-eval';
import { ruleMap, helperMap } from './index';

export function evaluateRules(facts: any, key: keyof typeof ruleMap): { [key: string]: number } {
  const rules = ruleMap[key];
  const helpers = helperMap[key] || {};
  if (!rules) {
    throw new Error(`No rules defined for key: ${key}`);
  }

  const parser = new Parser();
  const context: any = { ...facts, ...helpers };

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