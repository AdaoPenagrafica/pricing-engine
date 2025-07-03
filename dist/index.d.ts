export { evaluateRules } from './ruleEngine';
export { default as bookRules } from '../rules/book.rules.json';
export { default as autocRules } from '../rules/autoc.rules.json';
import { specialPrice } from './helpers/autoc.helper';
export declare const ruleMap: {
    book: {
        _note: string;
        conditions: {
            all: never[];
        };
        event: {
            type: string;
            params: {
                name: string;
                expression: string;
            };
        };
    }[];
    autoc: {
        _note: string;
        conditions: {
            all: never[];
        };
        event: {
            type: string;
            params: {
                name: string;
                expression: string;
            };
        };
    }[];
};
export declare const helperMap: {
    book: {};
    autoc: {
        specialPrice: typeof specialPrice;
    };
};
//# sourceMappingURL=index.d.ts.map