export { evaluateRules } from './ruleEngine';
import bookRules from '../rules/book.rules.json';
import autocRules from '../rules/autoc.rules.json';
import envlpRules from '../rules/envlp.rules.json';
import { specialPrice, specialSheets, specialSize } from './helpers/autoc.helper';
export const ruleMap = {
    book: bookRules,
    autoc: autocRules,
    envlp: envlpRules
};
export const helperMap = {
    book: {},
    autoc: { specialPrice, specialSheets, specialSize },
    envlp: {}
};
export { default as bookRules } from '../rules/book.rules.json';
export { default as autocRules } from '../rules/autoc.rules.json';
export { default as envlpRules } from '../rules/envlp.rules.json';
export * from './types';
