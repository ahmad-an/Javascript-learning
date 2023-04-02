// Step 1 : Write a code to create an array of integers having 100 values. 
var myArry = [];


function createArray() {
   
    for (let i = 0; i <= 100; i++) {
        myArry.push(i);
        // document.write(myArry[i]);
        document.getElementById("p1").innerHTML = myArry;
    }
}



// Step 2: Use the same array that you create in question one and create a Separate function
// in which you calculate the sum of array and return it back to function and display the output.

function arraySum() {

    var sumResult = 0;

    for (let i = 0; i<=100; i++) {

        // sum = sum + myArry[i];
        sumResult += myArry[i];
    }

    document.getElementById("p2").innerHTML = sumResult;
    // document.write(sumResult);
}

// arraySum();
