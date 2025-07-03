import { Parser } from 'expr-eval';
import { Rule } from './types';

/**
 * Generic rule evaluator for any product type, with optional helpers
 */
export function evaluateRules(
  product: any,
  rules: Rule[],
  helpers?: Record<string, Function>
): { [key: string]: number } {
  const parser = new Parser();
  const context: any = { ...product };
  // Add helpers if provided
  if (helpers) Object.assign(context, helpers);

  for (const rule of rules) {
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
  // Return all named results
  const results: { [key: string]: number } = {};
  for (const rule of rules) {
    results[rule.event.params.name] = context[rule.event.params.name];
  }
  return results;
}