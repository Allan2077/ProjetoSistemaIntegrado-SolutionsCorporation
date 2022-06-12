const comentarioInput = document.querySelector("#comentario");
const descricao = document.querySelector("#descricao");



function clicado(idclicado) {

    descricao.innerHTML = idclicado;

}





const btnEnviar = document.querySelector("#btnEnviar");

btnEnviar.addEventListener("click", () => {
    console.log("cliquei enviar");

    const objBody = {
        descricao: descricao.innerHTML,
        ocorrencia: "PC2",
        status: 1,
        comentario: comentarioInput.value,
        data: "2022-01-10, 09:00",
        setor: 'TI'
    }

    let bb = ''

    const keyys = ['descricao', 'ocorrencia', 'status', 'comentario', 'data', 'setor']

    keyys.forEach(elm => {
        const att = objBody[elm]
        if (att === undefined || !att || att === null) {
            bb = elm
        }
    })

    if (bb !== '') {
        alert(bb + ' Não foi definido')
        return
    }

    const data = JSON.stringify(objBody);
    console.log(data);

    fetch("http://192.168.17.6:3000/chamado", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
            },
            "body": data
        })
        .then(async(resp) => {
            const data = await resp.json();
            return data
        })
        .then((data) => {
            console.log(data)
            if (data != undefined) {
                if (data.id != undefined) {
                    alert("Enviado com sucesso !");
                }
            } else {
                alert("Falha ao cadastradar, ", data);
            }
        });
})