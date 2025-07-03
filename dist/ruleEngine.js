import { Parser } from 'expr-eval';
import { ruleMap, helperMap } from './index';
export function evaluateRules(facts, key) {
    const rules = ruleMap[key];
    const helpers = helperMap[key] || {};
    if (!rules) {
        throw new Error(`No rules defined for key: ${key}`);
    }
    const parser = new Parser();
    const context = { ...facts, ...helpers };
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
    const results = {};
    for (const rule of rules) {
        results[rule.event.params.name] = context[rule.event.params.name];
    }
    return results;
}
