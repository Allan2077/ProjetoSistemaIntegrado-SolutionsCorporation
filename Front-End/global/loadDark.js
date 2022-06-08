let modeChange = document.querySelector('.modeChange');
let containerNav = document.querySelector('.container-fluid');
let card = document.querySelector('.card');
let body = document.querySelector('body');
let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.logo');
let container = document.querySelector('.container');
let main = document.querySelector('main');
let desc = document.querySelector('.desc');
let caixaTexto = document.querySelector('.caixaTexto');
let comentario = document.querySelector('.comentario');
let textarea = document.querySelector('textarea')

function chngimg() {
    var img = document.getElementById('idlogo').src;
    if (img.indexOf('LogoSolution.png') != -1) {
        document.getElementById('idlogo').src = "../Assets/Group7.png";
    } else {
        document.getElementById('idlogo').src = "../Assets/LogoSolution.png";
    }

}

let dark = window.localStorage.getItem("darkmode");
let darkCard = window.localStorage.getItem("darkmodeCard");


if (dark === "true") {
    container.classList.toggle("darkMode");
    desc.classList.toggle("darkModeCard");
    main.classList.toggle("darkModeCard");
    body.classList.toggle("darkMode");
    textarea.classList.toggle('darkModeCard')
    caixaTexto.classList.toggle("darkModeCard");
    comentario.classList.toggle('darkModeCard');
    
    //navbar.classList.toggle("darkMode");
    //card.classList.toggle("darkModeCard");
    
    chngimg();
}