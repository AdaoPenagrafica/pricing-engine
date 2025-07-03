import { Rule } from './types';
/**
 * Generic rule evaluator for any product type, with optional helpers
 */
export declare function evaluateRules(product: any, rules: Rule[], helpers?: Record<string, Function>): {
    [key: string]: number;
};
//# sourceMappingURL=ruleEngine.d.ts.map