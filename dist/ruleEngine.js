import { Parser } from 'expr-eval';
import { ruleMap, helperMap } from './index';
import dotenv from 'dotenv';
import { decrypt } from './helpers/decrypt';
dotenv.config();
const decryptKey = process.env.AES_KEY;
export function evaluateRules(facts, key) {
    var _a;
    const rules = ruleMap[key];
    const helpers = helperMap[key] || {};
    if (!rules) {
        throw new Error(`No rules defined for key: ${key}`);
    }
    const decryptedFacts = {};
    for (const [key, value] of Object.entries(facts)) {
        try {
            if (typeof value === 'string' && value.startsWith('U2FsdGVk')) {
                decryptedFacts[key] = decrypt(value, decryptKey);
            }
            else {
                decryptedFacts[key] = value;
            }
        }
        catch (e) {
            decryptedFacts[key] = value;
        }
    }
    const parser = new Parser();
    const context = { ...facts, ...helpers };
    for (const rule of rules) {
        if (!((_a = rule === null || rule === void 0 ? void 0 : rule.event) === null || _a === void 0 ? void 0 : _a.params)) {
            console.warn('Skipping invalid rule:', rule);
            continue;
        }
        const { name, expression } = rule.event.params;
        try {
            const value = parser.evaluate(expression, context);
            context[name] = value;
        }
        catch (e) {
            throw new Error(`Failed to evaluate "${name}" with formula "${expression}".\nAvailable variables: ${Object.keys(context).join(', ')}\nError: ${e.message}`);
        }
    }
    return {
        All: context,
        Unitario: context['finishCost'],
        Quantidade: context['quantity'],
        Total: context['finishCost'] * context['quantity']
    };
}
