const infor = document.getElementById("containerInf");
const imgUsuario = document.getElementById("imgUsuario");
const nomeUsuario = document.getElementById("nomeUsuario");
const userUsuario = document.getElementById("userUsuario");
const listaFuncaoUsuario = document.getElementById("funcaoUsuario");

const seguidorGit = document.getElementById("seguidorGit");
const repoGit = document.getElementById("repoGit");

//const iconSeguidor = document.getElementById("iconSeguidor");
//const iconRepo = document.getElementById("iconRepo");

const form = document.getElementById("navbarSearch");
const input = document.getElementById("navbarSearchInput");
const button = document.getElementById("buttonSearch")

button.addEventListener("click", function(event){
    event.preventDefault()
   // console.log("clicou");
   getUsuarios();
})
const baseURL = "https://api.github.com"

const getUsuarios = async () => {
    
    let user = input.value.trim().toLowerCase();
    
    const usuariosFetch =
    await fetch (`${baseURL}/users/${user}`)
        .then(response => response.json())
        .then(dados => dados)
        .catch(err =>{
            meuErro(err)
        })

    pegaUsuarios(usuariosFetch)
    validarInput();
    meuErro();

 console.log(usuariosFetch)
}


const pegaUsuarios = (usuario) => {
    imgUsuario.setAttribute("src", usuario.avatar_url);
    nomeUsuario.textContent = usuario.name;
    userUsuario.textContent = usuario.login;
    seguidorGit.textContent = usuario.followers;
    repoGit.textContent = usuario.public_repos;
    listaFuncaoUsuario.textContent = usuario.bio;

}

const validarInput = () => {
    input.value = ""
}

const meuErro = () => {
    const divErro = document.createElement("div"); 
    const textoErro = document.createElement("p")
    divErro.appendChild(textoErro)
        textoErro.textContent = "Página não encontrada"
    infor.appendChild(divErro)  
    //divErro.innerHTML = `<p> usuário não encontra</p>`
    document.body.appendChild(divErro);
}



form.addEventListener("submit", getUsuarios)