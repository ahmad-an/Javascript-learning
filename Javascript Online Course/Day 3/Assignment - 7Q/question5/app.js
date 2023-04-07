// Q5.  Write a JavaScript program which computes the average marks of the
//      following students ??
//      Then, this average is used to determine the corresponding grade.
//      The grades are computed as follows :
//      Range Grade
//      <60 F
//      <70 D
//      <80 C
//      <90 B
//      <100 A
// ___________ *** __________

// Following Students ... ?????

// Solution

var students = [['Ahmad', 68], ['Ali', 67], ['Zahid', 92], ['Khan', 83], ['Mujahid', 71]];

var AvgMarks = 0;

for (var i=0; i < students.length; i++) {
        AvgMarks += students[i][1];
        var avg = (AvgMarks/students.length);
}

console.log("Average grade: " + (AvgMarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}