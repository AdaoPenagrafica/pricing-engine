export { evaluateRules } from './ruleEngine';
import bookRules from '../rules/book.rules.json';
import autocRules from '../rules/autoc.rules.json';
import { specialPrice } from './helpers/autoc.helper';
export const ruleMap = {
    book: bookRules,
    autoc: autocRules
};
export const helperMap = {
    book: {},
    autoc: { specialPrice },
};
export { default as bookRules } from '../rules/book.rules.json';
export { default as autocRules } from '../rules/autoc.rules.json';
export * from './types';
