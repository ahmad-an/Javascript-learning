

// Q4.  Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
//      will check if the current number is odd or even, and display a message to the screen.
//      Sample Output :
//          "0 is even"
//          "1 is odd"
//          "2 is even"

// ---------- **********  ----------


// Solution : -

for (let i=0; i<=15; i++){
    num = i;
    // i++;
    if(num % 2 === 0) {
        console.log(num + " is even")
    } else {
        console.log(num + " is odd")
    }
}
