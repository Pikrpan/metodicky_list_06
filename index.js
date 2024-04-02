/*
Pomocí příkazů getElementById a querySelector uprav text, 
který se bude zobrazovat v jednotlivých elementech
*/

var podnadpis1 = document.getElementById("podnadpis1");
podnadpis1.textContent = "Mé jméno:";

var odstavec1 = document.querySelector("p");
odstavec1.textContent = "František Peiker";

var podnadpis2 = document.getElementById("podnadpis2");
podnadpis2.textContent = "Můj věk:"

var odstavec2 = document.getElementById("odstavec2");
odstavec2.textContent = "25";

var podnadpis3 = document.getElementById("podnadpis3");
podnadpis3.textContent = "Moje bydliště:"

var odstavec3 = document.querySelector("h3");
odstavec3.textContent = "Stěbořice";
