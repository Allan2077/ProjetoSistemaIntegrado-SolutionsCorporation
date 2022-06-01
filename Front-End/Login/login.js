const login = document.querySelector("#login");
const password = document.querySelector("#password");
const btLogin = document.querySelector(".btnLogin");

btLogin.addEventListener("click", () => {
    const data = JSON.stringify({
        usuario: login.value,
        matricula: md5(password.value)

    });
    console.log(data);

    fetch("http://10.87.207.25:3000/login", {
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
            if (data.length > 0) {
                window.localStorage.setItem("userData", JSON.stringify(data));
                window.location.href = "../Home/index.html";
            } else {
                alert("Usuário ou senha inválidos !");
            }
        });
})

function user() {
    window.location.href = "../Home/index.html";
}