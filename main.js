let gameArray = [];
let selectedType = "";

let GameObject = function (pTitle, pYear, pCreator) {
    this.title = pTitle;
    this.year = pYear;
    this.creator = pCreator;
}

document.addEventListener("DOMContentLoaded", function (event) {

   document.getElementById("buttonAdd").addEventListener("click", function () {

       gameArray.push(new GameObject(document.getElementById("title").value, document.getElementById("year").value, document.getElementById("creator")));
       console.log(gameArray);
       document.getElementById("title").value = "";
       document.getElementById("year").value = "";
       document.getElementById("creator").value = "";
   });

});