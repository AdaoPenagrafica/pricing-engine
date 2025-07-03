import { Parser } from 'expr-eval';
/**
 * Generic rule evaluator for any product type, with optional helpers
 */
export function evaluateRules(product, rules, helpers) {
    const parser = new Parser();
    const context = { ...product };
    // Add helpers if provided
    if (helpers)
        Object.assign(context, helpers);
    for (const rule of rules) {
        const { name, expression } = rule.event.params;
        try {
            const value = parser.evaluate(expression, context);
            context[name] = value;
        }
        catch (e) {
            throw new Error(`Failed to evaluate "${name}" with formula "${expression}".\nAvailable variables: ${Object.keys(context).join(', ')}\nError: ${e.message}`);
        }
    }
    // Return all named results
    const results = {};
    for (const rule of rules) {
        results[rule.event.params.name] = context[rule.event.params.name];
    }
    return results;
}
