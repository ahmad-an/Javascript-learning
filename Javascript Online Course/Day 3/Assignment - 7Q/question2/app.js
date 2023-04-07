//      2. Write a JavaScript conditional statement to find the sign of a number. Display
//      an alert box with the specified sign.
//      Sample: 3
//      Output : The sign is +
//      Sample: -5
//      Output : The sign is -


let num3 = +prompt("Enter a number");
if(num3 > 0){
    alert("The sign is +")
} else if(num3 <0){
    alert("The sign is -")
} else if(num3 === 0){
    alert("Zero")
}