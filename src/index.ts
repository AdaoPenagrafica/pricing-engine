export { evaluateRules } from './ruleEngine';

import bookRules from '../rules/book.rules.json';
import autocRules from '../rules/autoc.rules.json';
import { specialPrice, specialSheets } from './helpers/autoc.helper';

export const ruleMap = {
  book: bookRules,
  autoc: autocRules
};

export const helperMap = {
  book: {},
  autoc: { specialPrice, specialSheets },
};

export { default as bookRules } from '../rules/book.rules.json';
export { default as autocRules } from '../rules/autoc.rules.json';
export * from './types';