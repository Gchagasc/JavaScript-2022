let num1 = 1;
let num2 = 2.5;

num1 = num1 + num2;
num1 = Number(num1.toFixed(2));

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));