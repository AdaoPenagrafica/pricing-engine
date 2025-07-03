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
import { specialPrice } from './helpers/autoc.helper';
export declare const helperMap: {
    book: {};
    autoc: {
        specialPrice: typeof specialPrice;
    };
};
//# sourceMappingURL=index.d.ts.map