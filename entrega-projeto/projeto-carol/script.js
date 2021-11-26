// const baseUrl = 'https://api.github.com/users'
// const profile = document.getElementById('profile')
// const userName = document.getElementById('inputUsuario')
// const buscaUsuario = document.getElementById('botao')

// const avatar = document.createElement('img')
// const title = document.createElement('h2')
// const username = document.createElement('p')
// const profileBio = document.createElement('p')
// const stats = document.createElement('div')
// const followersItem = [followersIcon, followersCount]
// const followersSpan = document.createElement('span')
// const followersIcon = document.createElement('i')
// const reposCount = document.createElement('span')
// const followersCount = document.createElement('span')
// const reposSpan = document.createElement('span')
// const reposIcon = document.createElement('i')
// const reposItem = [reposIcon, reposCount]
// const statsItem = [followersSpan, reposSpan]
// const elements = [avatar, title, username, profileBio, stats]

// const searchGitHub = () => {
//   const userName = document.getElementById('inputUsuario').value
  
//   fetch(`${baseUrl}/users/${userName}`)
//     .then(res => res.json())
//     .then(data => showGitHubProfile(data))
//     .catch(err => console.error(err))

//     searchGitHub(showGitHubProfile);
//     buscaUsuario(inputUsuario);
// }

// const showGithubProfile = profileData => {
//   const { avatar_url, name, login, bio, followers, public_repos } = profileData

//   avatar.setAttribute('src', avatar_url)
//   avatar.setAttribute('alt', name)

//   title.innerHTML = name

//   username.innerHTML = login
//   username.setAttribute('class', 'username')

//   profileBio.innerHTML = bio
//   profileBio.setAttribute('class', 'bio')

//   stats.setAttribute('class', 'stats')
  
//   followersIcon.setAttribute('class', 'fa fa-users')
  
//   followersCount.innerHTML = followers

//   followersItem.forEach(element => followersSpan.appendChild(element))

//   reposIcon.setAttribute('class', 'fa-book')

//   reposCount.innerHTML = public_repos

//   reposItem.forEach(element => reposSpan.appendChild(element))

//   statsItem.forEach(element => stats.appendChild(element))

//   elements.forEach(element => profile.appendChild(element))
// }

const baseURL = "https://api.github.com/users"

const nomeGitHub = document.getElementById("nome-usuario");
const imgPerfil = document.getElementById("img-usuario");
const nomeP = document.getElementById("apelido-usuario");
const biografia = document.getElementById("bio-usuario");
const form = document.getElementById("formulario");
const input = document.getElementById("search");
const imgSegui = document.getElementById("img-seguidores");
const numeroDeSeguidores = document.getElementById("seguidores-usuario");
const imgRepositorio = document.getElementById("repositorio-img");
const numeroDeUsuarios = document.getElementById("repositorio-usuario");

const eventoFormulario = async (evento) => {
  evento.preventDefault();
  let meuGit = input.value.trim().toLowerCase();

    const hubFetch = await fetch(`${baseURL}/${meuGit}`)
      .then(response => response.json())
      .then(dados => dados)
      .catch(err => meuErro())

      pegaUsuarioGitHub(hubFetch)
      validarInput();
}

const pegaUsuarioGitHub = (giti) => {

    nomeGitHub.textContent = giti.name;
    nomeP.textContent = giti.login;
    imgPerfil.setAttribute("src", giti.avatar_url);
    biografia.textContent= giti.bio;
    // imgSegui.setAttribute("src", giti.followers_url);
    numeroDeSeguidores.textContent = giti.followers;
    numeroDeUsuarios.textContent = giti.following;
    // imgRepositorio.setAttribute("src", giti.following_url);
     
    // console.log(pegaUsuarioGitHub)
}
   
  const validarInput = () => {
    input.value = "";
  }
  
  const meuErro = () => {
    const divErro = document.createElement("div"); 
    divErro.innerHTML = `<p> Página não encontrada</p>`
    document.body.appendChild(divErro);
  }
  
  form.addEventListener("submit", eventoFormulario)
  // console.log(eventoFormulario)
  
  
  