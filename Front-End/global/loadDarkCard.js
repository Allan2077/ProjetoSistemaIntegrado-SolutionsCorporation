let modeChange = document.querySelector('.modeChange');
let body = document.querySelector('body');
let tr = document.querySelector('tr');
let main = document.querySelector('main')

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
    body.classList.toggle("darkMode");
    tr.classList.toggle('darkModeCard');
    main.classList.toggle('darkMode')

    //card.classList.toggle("darkModeCard");
    
    chngimg();
}