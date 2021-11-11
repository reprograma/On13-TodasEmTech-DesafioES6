const user = document.querySelector("input.input");
const usuarios = user;
const fotoPerfil = document.querySelector("img.foto-perfil");
const botao = document.querySelector(".botao");

const myHeaders = new Headers();
const myInit = {
  method: "GET",
  headers: myHeaders,
};

botao.addEventListener("click", function req() {
  console.log(usuarios.value);
  fetch(`https://api.github.com/users/${usuarios.value}`)
    .then((response) => response.json())
    .then((item) => {
      fotoPerfil.setAttribute = ("src", item.avatar_url);
    })
    .catch((err) => {
      console.log(err);
    });
});
