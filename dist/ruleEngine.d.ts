import { ruleMap } from './index';
interface EvaluateOptions {
    decryptKey?: string;
}
export declare function evaluateRules(facts: any, key: keyof typeof ruleMap, options?: EvaluateOptions): {
    [key: string]: number;
};
export {};
//# sourceMappingURL=ruleEngine.d.ts.map