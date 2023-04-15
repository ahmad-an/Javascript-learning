//  8.  Write a function that takes an object and saves each property to localStorage using the property name
//      as the key and the property value as the value. The function should also retrieve the object from 
//      localStorage and return it as a new object.

//      --------- solution --------


function addDataToLocalStorage(obj, key){

    obj_strigify = JSON.stringify(obj);
    
    
    localStorage.setItem(key, obj_strigify);
    }
    
    
    let students = {name: "Ahmad", rollNo: "3301", city: "Rawalpindi"};
    addDataToLocalStorage(students, "students");






function getDataFromLocalStorage(key){

    let data = localStorage.getItem(key);
    let students = JSON.parse(data);
    
    console.log(students);              // full object
    
    console.log(students.name);         // object data by key;
    console.log(students.rollNo);
    console.log(students.city);
}

getDataFromLocalStorage("students");