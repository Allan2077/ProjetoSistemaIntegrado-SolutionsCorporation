function user() {
    window.location.href = "../Login/index.html";
}

let modeChange = document.querySelector('.modeChange');
let containerNav= document.querySelector('.container-fluid');
let card = document.querySelector('.card');
let body = document.querySelector('body');
let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.logo');


function chngimg() {
    var img = document.getElementById('idlogo').src;
    if (img.indexOf('LogoSolution.png') != -1) {
        document.getElementById('idlogo').src  = "../Assets/Group7.png";
    }
     else {
       document.getElementById('idlogo').src = "../Assets/LogoSolution.png";
   }

}

modeChange.addEventListener('click', () => {
    containerNav.classList.toggle("darkMode");
    card.classList.toggle("darkModeCard");
    body.classList.toggle("darkMode");
    navbar.classList.toggle("darkMode");

    


    chngimg()


});