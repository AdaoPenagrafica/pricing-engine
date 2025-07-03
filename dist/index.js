import bookRules from '../rules/book.rules.json';
import autocRules from '../rules/autoc.rules.json';
export const ruleMap = {
    book: bookRules,
    autoc: autocRules
};
import { specialPrice } from './helpers/autoc.helper';
export const helperMap = {
    book: {},
    autoc: { specialPrice },
};
