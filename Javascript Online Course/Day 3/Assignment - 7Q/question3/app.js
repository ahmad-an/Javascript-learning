// 3.   Write a JavaScript program that accepts five numbers in five prompts and
//      displays the larger one in the console.

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");
let num4 = +prompt("Enter fourth number");
let num5 = +prompt("Enter fifth number");

let largestNum = Math.max(num1, num2, num3, num4, num5);
console.log("The largest Number : " + largestNum);