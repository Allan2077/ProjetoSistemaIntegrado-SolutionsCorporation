const nome = document.querySelector("#nome");
const sobreNome = document.querySelector("#sobreNome");
const setor = document.querySelector("#setor");
const matricula = document.querySelector("#matricula");

const btnCadastro = document.querySelector(".btnCadastro");

btnCadastro.addEventListener("click", () => {
    const data = JSON.stringify({

        nome: nome.value,
        sobreNome: sobreNome.value,
        setor: setor.value,
        matricula: md5(matricula.value)

    });
    console.log(data);

    fetch("http://10.87.207.25:3000/cadastro", {
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
            // if (data.length > 0) {
            //     window.location.href = "../Home/index.html";
            // } else {
            //     alert("Usuário ou senha inválidos !");
            // }
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