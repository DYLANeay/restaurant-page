import "./style.css"; 

import {homeContent} from "./homeContent.js";
import {menuContent} from "./menuContent.js";
import {aboutContent} from "./aboutContent.js";

// Fonction pour effacer le contenu précédent
function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

//arrivée sur la page au début donc on charge home content
homeContent();

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");

homeBtn.addEventListener("click", () =>{
    clearContent()
    homeContent();
}) 

menuBtn.addEventListener("click", () =>{
    clearContent()
    menuContent();
})

aboutBtn.addEventListener("click", () =>{
    clearContent()
    aboutContent();
})