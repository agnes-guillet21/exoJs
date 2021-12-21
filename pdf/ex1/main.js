// Ecrire une fonction en javascript ChangerTexte() qui permet de changer le contenu de la
// balise <p> par le texte « Salut iTeam ! ».
// 2. Ajouter un événement JavaScript pour que la fonction ChangerTexte() s’exécute en
// cliquant sur le bouton


/************************************************************************************/
/* ******************************** Datas **********************************/
/************************************************************************************/
let p;
let btn;

/************************************************************************************/
/* ******************************** Fonctions **********************************/
/************************************************************************************/

function onClickButton(){

}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/



function main(){
    p = document.querySelector('#p1');
    btn = document.querySelector("input");


  btn.addEventListener("click", onClickButton);

}
document.addEventListener("DOMContentLoaded", main);