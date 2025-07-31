export { evaluateRules } from './ruleEngine';
import { specialPrice, specialSheets, specialSize } from './helpers/autoc.helper';
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
    envlp: {
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
        specialSheets: typeof specialSheets;
        specialSize: typeof specialSize;
    };
    envlp: {};
};
export { default as bookRules } from '../rules/book.rules.json';
export { default as autocRules } from '../rules/autoc.rules.json';
export { default as envlpRules } from '../rules/envlp.rules.json';
export * from './types';
//# sourceMappingURL=index.d.ts.map