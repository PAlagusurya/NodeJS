const { calculateSum, calculateMul } = require("./calculate");

let a = 100;
let b = 400;

let sum = calculateSum(a, b);
let mul = calculateMul(a, b);
console.log("RESULT OF SUM:", sum);
console.log("RESULT OF MUL:", mul);
