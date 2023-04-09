// Arrays in Javascript
// Array is used to store multiple values of same types in a single variable
// Javascript allows to store values of different types in same array but it is not recommended to do so

// Array can be declared by using two methods; Variable Method, Object Method

// Array by Variable Method;

        let years = [];                                // declaring and iniatilizing empty array;
        let months = ["January", "February", "March"]; // declaring and iniatilizing array with values;

    // View array in console
        console.log(months);

    // to view array values by index
        console.log(months[0]);                        // Arrays store values in index starting from 0 (zero) index 
        console.log(months[2]);                        // To view value of array at index 2;  Result: March

    // To view value of array at index which is not available in array will result: Undefined
        console.log(months[12]);

    // View array length
        console.log("Array lenght: " + months.length);  // Array lenght start from 1 and goes onward

    
// Array by Object Method;

        let myArray = new Array();                                  // empty Array by using object method;

        console.log("Empty array by Object method: " + myArray);    // view array in console;
        console.log("Empty Array Lenght : " + myArray.length);      // Varify length of empty; Zero length;
        console.log(myArray);                                       // Array is declared by empty; Zero Lenth;

        let myNewArray = new Array("Adil", "Ahmad", "Tahir");       // Array with values by object method;
        console.log(myNewArray);                                    // view array in console;

    // Problem using Object Method;
        let myNumArray = new Array(5);        // declared array with one number value i.e. 5;
        console.log(myNumArray);              // view array in console; result: [empty × 5];
        console.log("Number Array by Object Method : " + myNumArray);    // view array with one value i.e. 5;
        console.log("Number Array Lenth: " + myNumArray.length);       // View length of array;
        
        // conclusion: When declare array by object method with single number value; it treat the value as array lenth instead of value;


// Adding Values in Array;
// Data or values can be added in an existing arry by three methods; index number, push method, unshift method;

    // Adding data in array by index number;

        months[3] = "April";                    // Data can be stored in arry by using index number, but it is not recommended way;
        console.log(months);                    // Varify the result of adding data by using index number, Result: ['January', 'February', 'March', 'April']
        console.log(months[3]);                 // View data at index number 3, to varify the result; // April

    // Adding data in array by using push method;

        months.push("May");                     // push method add data in array at the end after last index of array;
        console.log(months);                    // varify result;
        console.log(months[4]);                 // variey result by index number i.e. 4 in this case;

        // multiple values can also be added through single push method;
        
        months.push("Jun", "July", "August");   // adding multiple values in single push;
        console.log(months);                    // varify multiple value added via single push;
        console.log(months[5]);                 // varify by index number
        console.log(months[6]);
        console.log(months[7]);

    // Adding data in array by using unshift method;

        months.unshift("September");            // unshift method add data in existing array at the start of array at index 0,
        console.log(months);                    // varify the data added by unshift;
        console.log(months[0]);                 // varify the data added by unshift at index 0;

        // multiple values can also be added through single unshift method;

        months.unshift("October", "November", "December");  // adding mulitple values via single unshift;
        console.log(months);                    // varify the multiple data added via single unshift;
        console.log(months[0]);                 // varify the data by index number
        console.log(months[1]);
        console.log(months[2]);


// Removing Data from Arrays;
// Data or values can be removed from array by three different methods; index number, pop method, shift method;

    // Removing data from array by index number;

        console.log("Data at index number 11 : " + months[11]);     // view data at index num 11;
        months[11] = [];                            // assign empty value at index 11;
        console.log(months[11]);                    // to varify result, view data at index number 11;
        months[11] = undefined;                     // removing data at index number 11 by assigning undefined;
        console.log(months[11]);                    // to varify result, view data at index number 11;
        console.log(months);                        // to varify result, view full array;
        console.log(months.length);                 // to varify result, check the lenght of array;

        // conculsion: removing data by index number does not delete data, Neither by assigning empty nor by assigning undefined;
        // this method doesnot reduce array length, therefore, not recommended;

    // Removing data from array by pop method;

        console.log(months);                        // first view array in console;
        // result: ['October', 'November', 'December', 'September', 'January', 'February', 'March', 'April', 'May', 'Jun', 'July', undefined];

        months.pop();                               // pop method delete data from array at last index, in this case undefined;
        console.log(months);                        // varify deletion by pop method;
        // result: ['October', 'November', 'December', 'September', 'January', 'February', 'March', 'April', 'May', 'Jun', 'July'];
        // undefined is removed from last;

        // Deleting multiple values in single pop;
        console.log("Value at index 10: " + months[10]);    // view value at index 10; result: July
        console.log("Array lenght before deletion: " + months.length);   // view lenght of array before deletion;
        months.pop(10);                                     // delete value at index 10 by pop;
        console.log(months);                                // varify deletion; July deleted from array;
        console.log("Array length after deletion: " + months.length); // array length after deletion;
        months.pop(7, 8, 9);                                // passing multiple arugments in pop for deleting index 7, 8 and 9;
        console.log(months);                                // deleted value only at last index;
        console.log(months.length);                         // view array length after deletion;

        //  Conclusion: Pop only delete value at last index. 
        //  For deleting multiple values call pop as many times as required


    // Removing data from array by shift metho;

        console.log("Array before deleting by shift : " + months);       // view array before deleting;
        console.log("Array length before deletion : " + months.length);  // array length before deletion;       
        months.shift();                             // shift method remove data from array at start;
        console.log("Array after deletion : " + months) // view array after deletion; October is deleted from start;
        console.log("Array length after deletion : " + months.length); // view lenght of array to varifiy deletion;

        


    
