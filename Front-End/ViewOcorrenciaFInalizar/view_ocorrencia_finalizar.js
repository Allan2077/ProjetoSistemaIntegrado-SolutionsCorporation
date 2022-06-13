let descricao = document.querySelector("#descricao");
let vcomentario = document.querySelector("#comentario")

function buttonFinalizar() {
    let chamado = JSON.parse(localStorage.getItem("chamadoatual"));
    window.location.href = "../Home/index.html"
    fetch(`http://localhost:3000/chamado/remove/${chamado.id}`);
}

function carregarChamado() {
    let chamado = JSON.parse(localStorage.getItem("chamadoatual"));
    descricao.innerHTML = chamado.descricao;
    comentario.innerHTML = chamado.comentario;
}