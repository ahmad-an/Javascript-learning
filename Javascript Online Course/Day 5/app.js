// Arrays in Javascript
// Array is used to store multiple values of same types in a single variable
// Javascript allows to store values of different types in same array but it is not recommended to do so

let months = ["January", "February", "March"];

// to view array in console
console.log(months);


// to view array values by index

console.log(months[0]);     // Arrays store values in index starting from 0 (zero) index 
console.log(months[2]);     // To view value of array at index 2;  Result: March

// To view value of array at index which is not available in array will result: Undefined
console.log(months[12]);


// Adding Values in Array;
// Data or values can be added in an existing arry by three methods; index number, push method, unshift method;

    // Adding data in array by index number;

        months[3] = "April";    // Data can be stored in arry by using index number, but it is not recommended way;
        console.log(months);    // Varify the result of adding data by using index number, Result: ['January', 'February', 'March', 'April']
        console.log(months[3]); // View data at index number 3, to varify the result; // April

    // Adding data in array by using push method;

        months.push("May");     // push method add data in array at the end after last index of array;
        console.log(months);    // varify result;
        console.log(months[4]); // variey result by index number i.e. 4 in this case;

        // multiple values can also be added through single push method;
        
        months.push("Jun", "July", "August");   // adding multiple values in single push;
        console.log(months);                    // varify multiple value added via single push;
        console.log(months[5]);                 // varify by index number
        console.log(months[6]);
        console.log(months[7]);

    // Adding data in array by using unshift metho

        months.unshift("September");            // unshift method add data in existing array at the start of array at index 0,
        console.log(months);                    // varify the data added by unshift;
        console.log(months[0]);                 // varify the data added by unshift at index 0;

        // multiple values can also be added through single unshift method;

        months.unshift("October", "November", "December");  // adding mulitple values via single unshift;
        console.log(months);                    // varify the multiple data added via single unshift;
        console.log(months[0]);                 // varify the data by index number
        console.log(months[1]);
        console.log(months[2]);