    const input = document.getElementById("input-usuario");
    const botao = document.getElementById("btn");
    const formulario = document.getElementById("form-busca");

    const card = document.getElementById("card-usuario");
    const imgUsuario = document.getElementById("img-usuario");
    const nomeUsuario = document.getElementById("nome-usuario");
    const loginUsuario = document.getElementById("username");
    const bioUsuario = document.getElementById("bio");
    const seguidoresUsuario = document.getElementById("seguidores");
    const repoUsuario = document.getElementById("repo");

    const baseURL = "https://api.github.com"
    //https://api.github.com/users/{user}"
    /* -Exibir o avatar.
    - Nome do usuário.
    - Username
    - Bio
    - Total de seguidores
    - Total de repositórios */

    const buscarUsuario = async (evento) => {
        evento.preventDefault();

        let usuario = input.value;

        const usuarioFetch = await fetch(`${baseURL}/users/${usuario}`)
            .then(response => response.json())
            .then(dados => dados)
            .catch(error => console.log(error))

        validarUsuario(usuarioFetch);
        validarInput();
    }

    validarUsuario = (user) => {
        imgUsuario.setAttribute("src", user.avatar_url);
        imgUsuario.setAttribute("alt", user.name)
        nomeUsuario.textContent = user.name;
        loginUsuario.textContent = user.login;
        bioUsuario.textContent = user.bio;
        seguidoresUsuario.textContent = user.followers;
        repoUsuario.textContent = user.repos_url;
    }

    const validarInput = () => {
        input.value = ""
    }

    formulario.addEventListener("submit", buscarUsuario);

    function teste () {
        location.replace("./usuarioRepo.html")
    }