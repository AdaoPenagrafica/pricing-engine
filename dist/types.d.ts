export interface Rule {
    _note?: string;
    conditions: {
        all: any[];
    };
    event: {
        params: {
            name: string;
            expression: string;
        };
    };
}
export type RuleType = "" | "book" | "autoc";
export interface Pages {
    value: number;
    price_adjustment: number;
}
export interface Book {
    quantity: number;
    pagespb: Pages;
    pagesc: Pages;
    paper: number;
    cover: number;
    lamination: number;
    size: number;
    finish: number;
    profit: number;
}
export interface AutoC {
    quantity: number;
    size: number;
    sheets: number;
    print: number;
    finish: number;
    profit: number;
}
//# sourceMappingURL=types.d.ts.map