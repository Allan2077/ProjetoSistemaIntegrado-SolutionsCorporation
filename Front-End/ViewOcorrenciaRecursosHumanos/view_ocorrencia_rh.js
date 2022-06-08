let vstatus = document.querySelector("#status");

function back(){
    window.location.href = "../Home/index.html";
}

function adduser2(){
    window.location.href = "../CadastramentoTi/cadastro.html";
}

function clicado(idclicado) {

    vstatus.innerHTML = idclicado;

}
