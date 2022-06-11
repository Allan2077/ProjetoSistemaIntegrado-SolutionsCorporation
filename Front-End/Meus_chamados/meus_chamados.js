let tbody = document.querySelector('tbody');

function buttonAberto(chamado) {
    console.log(chamado);
    //window.location.href = "../ViewOcorrenciaFinalizar/view_ocorrencia_finalizar.html"
};



function listarChamados() {
    fetch("http://10.2.0.111:3000/chamado")
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            data.forEach((chamado) => {
                let ocorrencia = JSON.stringify(chamado);
                let status;

                if (chamado.status === 1) status = "Aberto";
                else if (chamado.status === 2) status = "Andamento";
                else if (chamado.status === 3) status = "Finalizado";

                let linha = document.createElement("tr");

                let colOcorrencia = document.createElement("td");
                colOcorrencia.innerHTML = chamado.ocorrencia;

                let colSetor = document.createElement("td");
                colSetor.innerHTML = chamado.setor;

                let colDescricao = document.createElement("td");
                colDescricao.innerHTML = chamado.descricao;

                let colStatus = document.createElement("td");

                let buttonStatus = document.createElement("button");
                buttonStatus.innerHTML = status;
                buttonStatus.addEventListener("click", () => {
                    localStorage.setItem("chamadoatual", ocorrencia)
                    window.location.href = "../ViewOcorrenciaFinalizar/view_ocorrencia_finalizar.html"
                })

                colStatus.appendChild(buttonStatus);

                linha.appendChild(colOcorrencia);
                linha.appendChild(colSetor);
                linha.appendChild(colDescricao);
                linha.appendChild(colStatus);

                tbody.appendChild(linha);
                console.log(chamado.lenght);
            })
        })
}