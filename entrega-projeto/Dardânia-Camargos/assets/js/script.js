const usuarios = document.querySelector("input.input");
const nome = document.querySelector(".name");
const fotoPerfil = document.querySelector(".foto-perfil");
const botao = document.querySelector(".botao");
const nav = document.querySelector(".nav");
const bio = document.querySelector(".description");
const seguidores = document.querySelector(".seguidores");
const repositorios = document.querySelector(".repositorios");
const username = document.querySelector(".username");
const containerNotfound = document.querySelector(".container-notfound");
const cardIcons = document.querySelector(".card-icons");
const myHeaders = new Headers();
const myInit = {
    method: "GET",
    headers: myHeaders,
};

botao.addEventListener("click", function req() {
    // console.log(usuarios.value);
    fetch(`https://api.github.com/users/${usuarios.value}`)
        .then((response) => response.json())
        .then((item) => {
            console.log(item);
            fotoPerfil.src = item.avatar_url;
            nome.textContent = item.name;
            bio.textContent = item.bio;
            seguidores.textContent = item.followers;
            repositorios.textContent = item.public_repos;
            username.textContent = item.login;
            if (item.message == "Not Found") {
                containerNotfound.style.display = "flex";
                cardIcons.style.display = "none";
            }
        })
        .catch((err) => {
            console.log(err);
        });
});
