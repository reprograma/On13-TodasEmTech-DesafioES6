
const name = document.gerEelementeByid("user-name");
const imgUser = document.gerEelementeByid("user-img");
const userName = document.gerEelementeByid("user-username");
const bio = document.gerEelementeByid("user-bio");
const form = document.gerEelementeByid("forms");
const submit = document.gerEelementeByid("search");
const followers = document.gerEelementeByid("followers-cards");
const imgFollowers = document.gerEelementeByid("followers-img");
const followersNumber = document.gerEelementeByid("followers-user");
const imgRep = document.gerEelementeByid("rep-img");
const nuserNumber = document.gerEelementeByid("rep-user");
const notFound = document.getElementById("img-not-found");
const button = document.getElementById('submit');

const baseURL = "https://api.github.com/users"

const myHeader = new Headers();

const myInit = {
    method: 'GET',
    headers: 'myHeaders',
    };

/*const eventoFormulario = async (evento) =>{
    evento.preventDeFaul();
    let meuGit = input.value.trim().tolowercase(); 
} */

button.addEventListener('click', function TextAreaValidation(event){
    event.preventDefault();

    if (username.value.trim() === '') {
        alert('Campo Obrigatorio')
    } else {
        return getUsuario(username.value)
    }

    form.reset()
})

const hubFetch = await fetch(`${baseURL}/${meuGit}`)
.then(response => response.json())
.then(dados => dados)
.catch (err => meuErro())

pegaUsuarioGitHub( hubFetch)
validarInput();

const pegaUsuarioGitHub = (giti)  => {
nomeGitHub.textcontent= giti.name;
nomeP.textContent = giti.login;
imgPerfil.setAttribute("src", giti.avatar_url);
}

const validarInput = () => {
    input.value = ""

const meuErro = () => {
    const divErro = document.createElement("div");
    divErro.innerHTML = `<p> Página não encontrada</p>`
    document.body.appendChild(divErro); 


