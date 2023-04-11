// 2.   Write a recursive function that searches an array for a specific value. The function should return true
//      if the value is found, and false if it is not. You can assume that the array is not nested.

//      --------------------- Solution -------------------

function searchArray(myArray, val) {
    
    if (myArray.length === 0) {
        return false;
    }

    if (myArray[0] === val) {
        return true;
    }

    return searchArray(myArray.slice(1), val);
}


// Array 
var myArray = [9, 15, 20, 30, 35];

// Value to be checked;
var val = 35;


let searchResult = searchArray(myArray, val);
console.log(searchResult);                          // Result : true

val = 99;
console.log(searchArray(myArray, val));             // Result: false
