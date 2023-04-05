let table = +prompt("Enter a number to get the table of that number");
let tableSize = +prompt("Enter a number for Table Size");

for (let i = 1; i <=tableSize; i++){
    document.write(`${table} x ${i} = ${table * i} <br>`);
}