// 1.   Write a JavaScript program that accepts two numbers in two prompts and
//      displays the larger one in the console.


let num1 = +prompt("Enter First Number");
let num2 = +prompt("Enter Second Number");

if(num1 === num2 && num1 !== 0) {
    console.log("both numbers are equal");
    
} else if(num1 === 0 && num2 === 0){
    console.log("both numbers are zero");
} else if(num1 > num2){
    console.log("First Number " + num1 + " is greater")
} else {
    console.log("Second Number " + num2 + " is greater" )
}


