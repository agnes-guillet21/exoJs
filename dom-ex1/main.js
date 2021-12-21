

/************************************************************************************/
/* ******************************** Datas **********************************/
/************************************************************************************/
let p;
let btn;
let rectangle;
/************************************************************************************/
/* ******************************** Fonctions **********************************/
/************************************************************************************/
function displayToggleRectangle(){
    console.log("arf");
    rectangle.classList.toggle('active');
}

function addColor(){
    rectangle.add("good");
}
function colorBackground(){
    rectangle.add("red");
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/



function main(){
    rectangle = document.querySelector('.rectangle');
    p = document.querySelector('#p1');
    btn = document.querySelector("#toggle-rectangle");

    btn.addEventListener("click", displayToggleRectangle);
    rectangle.addEventListener(" onmouseenter ", colorBackground);
}
document.addEventListener("DOMContentLoaded", main);