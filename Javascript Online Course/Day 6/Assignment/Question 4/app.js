//  4.  Write a function that adds a new list item to an unordered list in an HTML document. The function should 
//      take a string argument that will be used as the text content of the new list item.


function addLi(li){
    let listItem = document.createElement("li");
    listItem.textContent = li;

    let ul = document.getElementById("u-list");
    ul.appendChild(listItem);
}



li = "Javascript Programming";
addLi(li);

addLi("Python Programming");
addLi("Computer Networks");