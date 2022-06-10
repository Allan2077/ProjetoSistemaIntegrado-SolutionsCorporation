function back() {
    window.location.href = "../Home/index.htm"
}


const nome = document.querySelector("#nome");
const usuario = document.querySelector("#usuario");
const setor = document.querySelector("#setor");
const matricula = document.querySelector("#matricula");

const btnCadastro = document.querySelector(".btnCadastro");

btnCadastro.addEventListener("click", () => {
    const data = JSON.stringify({

        usuario: usuario.value,
        nome: nome.value,
        setor: setor.value,
        matricula: md5(matricula.value)

    });
    console.log(data);

    fetch("http://10.87.207.18:3000/cadastro", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": data
        })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {

            if (data != undefined) {
                if (data.id != undefined) {
                    alert("Usuário cadastrado com sucesso !");
                }
            } else {
                alert("Falha ao cadastradar, ", data);
            }
        });
})

function user() {
    window.location.href = "../Home/index.html";
}