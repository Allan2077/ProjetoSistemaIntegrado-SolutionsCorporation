let descricao = document.querySelector("#descricao");

function buttonFinalizar() {
    window.location.href = "../Home/index.html"
}

function carregarChamado() {
    let chamado = JSON.parse(localStorage.getItem("chamadoatual"));
    descricao.innerHTML = chamado.descricao;
}