import { evaluateRules } from './index';
const facts = {
    "quantity": 1000,
    "flap": 0.008,
    "window": 0.025,
    "print": 0.055,
    "finish": 0,
    "profit": 1.2
};
const Results = evaluateRules(facts, 'envlp');
console.log(Results);
