//  1. Write a function that creates a closure and returns a function that can add
//  a specific number to any number passed to it. For example, if the closure is
//  created with 5, the returned function should add 5 to any number passed
//  to it.

function myFunc(num1){

    return function(num2){
        console.log(num1 + num2);
    }
}

let sumResult= myFunc(5);

// console.log(result);

sumResult(4);