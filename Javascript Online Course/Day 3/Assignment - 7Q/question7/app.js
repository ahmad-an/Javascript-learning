// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// **
// *
// * * *
// * * * *
// * * * * *

// _________ **** __________

// Solution: -

for (let i = 0; i <= 8; i++) {
    let staric = " * ";
    for (let j = 1; j < i; j++) {
        staric += " * ";
    }
    console.log(staric);
}