const login = document.getElementById("username");
const botaoProcurar = document.getElementById("botao");
//const form = document.getElementById("search");
//const usuario_ = document.getElementById("sessao_usuario");

const imagemGit = document.getElementById("imagem");
const imagemUsuario = document.getElementById("imagem_usuario");
const nomeUsuario = document.getElementById("nome_usuario");
const loginUsuario = document.getElementById("login_usuario");
const infosUsuario = document.getElementById("infos");
const repositorioUsuario = document.getElementById("repositorio");
//const divContainer = document.querySelector(".sessao_usuario");
//const imagemErroUsuario = document.getElementById("imagem_erro");

const baseURL= "https://api.github.com/"

const trazUsuario = async(evento) => {
    evento.preventDefault();
    let usuario = login.value.trim().toLowerCase();

    const usuarioFetch = await fetch(`${baseURL}users/${usuario}`)
        .then(resposta => resposta.json())
        .then(dados => dados)
        .catch(error => console.log(`meu erro é: ${error}. Ajuda back :'C.`));

    estiloUsuario(usuarioFetch)
    validarInput()
    erroUsuario();

}
botaoProcurar.addEventListener("click", trazUsuario)

const estiloUsuario = (pessoa) =>{
    loginUsuario.textContent = pessoa.login;
    imagemUsuario.setAttribute("src", pessoa.avatar_url);
    nomeUsuario.textContent = pessoa.name;
    infosUsuario.textContent = pessoa.followers;
    infosUsuario.textContent = pessoa.bio;
    //repositorioUsuario.setAttribute = ("alt", pessoa.public_repos); //perguntar pra prof
    console.log(pessoa)
}

const validarInput = () => {
    username.value = ""
}

const erroUsuario = (erro_usuario) =>{
    const mensagemErro = document.createElement("div"); 
    //const textoErro = document.createElement("p");
    mensagemErro.appendChild(erro_usuario); 
    //textoErro.textContent = "Por favor digite o nome do usuário corretamente!"
    mensagemErro.innerHTML = `<p> Por favor digite o nome do usuário corretamente! </p>`
    //divContainer.appendChild(mensagemErro);
    document.body.appendChild(mensagemErro);
    //imagemErroUsuario.setAttribute("src", usuarioErro);
}


//trazUsuario()

/*function imgBotao() {

}*/