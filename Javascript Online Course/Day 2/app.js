// console.log is used to print data on console. 
// Press F12 Key from keyboard in browser window to turn on developer mode and click on console tab.

console.log("Hi ! Ahmad");

// document.write is used to display data in browser window

document.write("Hi ! from Ahmad");

// Concatenation -- String Concatenation

let str1 = "Hello world";
let personName = "Ahmad";
console.log(str1 + " From " + personName);

let firstNum = "5";
let secondNum = 2;

console.log(firstNum + secondNum); // result 52 ... concate

// String Include method ... to find any character in a string (result in True or False);

let findChar = str1.includes("e");  // result true --   e is available in str1 i.e "Hello world";
let findChar2 = str1.includes("p"); // result false --  p is not available in str1 i.e "Hello world";

console.log(findChar); // true --  Character e is available in "Hello world" string
console.log(findChar2); // false --  Character p is not available in "Hello world" string

// Arithmatic Operators ( +  -  *  /  %)

let num1 = 6;
let num2 = 3;
let sumResult = console.log(num1 + num2); // 6 + 3 = 9;
let subtractionResult = console.log(num1 - num2); // 6 - 3 = 3;
let multiplicationResult = console.log(num1 * num2); // 6 * 3 = 18;
let divisionResult = console.log(num1 / num2); // 6 / 3 = 2;
let modulusResult = console.log(num1 % num2); //  6 % 3 = 0;

// prompt
let promptedValue = prompt("Please enter your age");
console.log(promptedValue);
console.log(typeof promptedValue); // prompt always retun string value
let convertedIntVal = parseInt(promptedValue);
console.log(convertedIntVal); 
console.log(typeof convertedIntVal); // number

// another way of get string value converted in number
let anyNum = +prompt("Please enter amount"); // + symbol can be used for conversion string into number
console.log(typeof anyNum);

let num3 = prompt("What is your age");
num3 = Number(num3);
console.log(num3);
console.log(typeof num3);
