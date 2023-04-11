//  7.  Write a function that retrieves an object from localStorage. The function should take one argument, 
//      which is a string representing the key used to store the object. The function should return the object.

//      ------------- Solution ------------

function getDataFromLocalStorage(key){

    let data = localStorage.getItem(key);
    let students = JSON.parse(data);
    
    console.log(students);              // full object
    
    console.log(students.name);         // object data by key;
    console.log(students.rollNo);
    console.log(students.city);
}

getDataFromLocalStorage("students");