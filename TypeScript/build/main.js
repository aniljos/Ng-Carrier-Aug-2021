console.log("in main.ts");
import compute, { sum, add, squareIt } from './compute.js';
console.log("sum", compute.sum(2, 3));
console.log("multiply", compute.multiply(2, 3));
console.log("squareIt", compute.squareIt(11));
console.log("sum", sum(2, 3));
console.log("multiply", add(2, 3));
console.log("squareIt", squareIt(11));
