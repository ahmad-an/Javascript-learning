//  3.  Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument 
//      that will be used as the text content of the new paragraph element.

//      -------------- Solution ------------

function changePara(fieldId){
    para = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, at. Atque mollitia illo enim aspernatur, quo eligendi fugit architecto. Alias aliquid quaerat eaque qui possimus porro atque, aliquam vel quibusdam."
    document.getElementById("para").innerText = para;
    document.getElementById("para").style.position = "bottom";
}



function addParagraph(para) {
    let parag = document.createElement("p");
    parag.textContent = para;
    document.body.appendChild(parag);
}


let para = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, at. Atque mollitia illo enim aspernatur, quo eligendi fugit architecto. Alias aliquid quaerat eaque qui possimus porro atque, aliquam vel quibusdam.";
addParagraph(para);


