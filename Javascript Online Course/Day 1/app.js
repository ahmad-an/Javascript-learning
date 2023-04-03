let firstName = "Ahmad";

let myName; // Variable Initialization 
myName = "Qadir";  // Value assingment

// Variable Naming Rules
    // Legal and Illegal Names
    // Use camelCase for long names 
    // Don't use number at start of variable names
    // special characters dollor sign ($) and underscore ( _ ) can be use at start of variable name
    // spaces can't be used in varialbe names like, rather use under (_) or use camelCasing for long names
    // Reserved key word of Javascript can't be used in variable names

let lastName = "Nawaz"; // Variable declared and initilized in one line

// Illegal Name
// let last name = "Nawaz"; // This will generate error (Uncaught SyntaxError: Unexpected identifier 'name'); spaces are not allowed in variable names;
// let 1lastname = "Nawaz"; // This will generate error (Uncaught SyntaxError: Invalid or unexpected token) Variable name can't be started with number, 

// Special Character Allowed in Variable Names underscore (_) and Doller Sign ($)
let _firstName = "Ahmad";  // Variable name can be started with special character underscore ( _ ) 
let $lastName = "Nawaz";  // Variable name can be started with special character underscore ( $ ) 

alert(firstName);

// Data types

    // String Data type
        let newString = "String Data Type"; // anycharacter within single or double quotation mark is string datatype

    // Number Data type
        let num1 = 8; // Number Examples: 8, 8.83, -8, 0

    // boolean Data type : True and False
        let isTodayMonday = true;