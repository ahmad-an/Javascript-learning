//  Assignment # 02 : Write a code to hide and visible the div using a single button onclick function using one function.

//  --------------- Solution -------------



function showHide(fieldId){

    let div = document.getElementById(fieldId);
    if (div.style.display !== "none") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
}