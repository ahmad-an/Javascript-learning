//  6. Write a function that saves an object to localStorage. The function should take two arguments: the first 
//  argument is a string representing the key to use for storing the object, and the second argument is the object 
//  to store.

//  --------------- Solution --------------



function addDataToLocalStorage(obj, key){

obj_strigify = JSON.stringify(obj);


localStorage.setItem(key, obj_strigify);
}


let students = {name: "Ahmad", rollNo: "3301", city: "Rawalpindi"};
addDataToLocalStorage(students, "students");