let descricao = document.querySelector("#descricao");
let vcomentario = document.querySelector("#comentario")

function buttonFinalizar() {
    window.location.href = "../Home/index.html"
}

function carregarChamado() {
    let chamado = JSON.parse(localStorage.getItem("chamadoatual"));
    descricao.innerHTML = chamado.descricao;
    comentario.innerHTML = chamado.comentario;
}