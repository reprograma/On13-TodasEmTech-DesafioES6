const profile = document.getElementById('profile')
const errorSection = document.getElementById('error')

// Armazenamos as duas sections em variáveis para podermos usar para manipular o DOM

const searchGithubByUsername = async () => {  

  const baseUrl = 'https://api.github.com' // variável que armazena o endereço da API
  const githubUsername = validateSearchInput() // variável que armazena o resultado da função de validação o termo procurado no input

  try {
    clearError() // limpamos o erro antes de fazer uma nova requisição

    const response = await fetch(`${baseUrl}/users/${githubUsername}`) // requisição usando o try/catch e async/await para buscar os dados do perfil do Github
    const data = await response.json() // transforma a respota em json para um objeto js

    if (data.message === 'Not Found') { //verifica se o objeto tem uma propriedade de erro
      clearProfile()
      userNotFound()
    } else {
      showGithubProfile(data) //sucesso, mostrar o perfil no Github, usando os dados da resposta (const data)
    }

    clearSearchInput() // limpa o input de busca em caso de uma nova busca

  } catch (error) {
    console.error(error) // em caso de erro, faz um log do erro no console
  }
}

// a função limpa o perfil em caso de uma nova busca
const clearProfile = () => { 
  profile.replaceChildren() // repõe os filhos 
}

// em caso de uma nova pesquisa, se o erro estiver na tela, ele será substituído por um resultado caso positivo
const clearError = () => {
  errorSection.replaceChildren()
}

// essa função limpa o input logo após o click
const clearSearchInput = () => {
  const searchInput = document.getElementById('inputUsuario')
  searchInput.value = ''
}

// valida o campo, caso ele tenha espaços em branco e letras maiúsculas
const validateSearchInput = () => {
  const githubUsername = document
    .querySelector('#inputUsuario')
    .value.trim()
    .toLowerCase()
  return githubUsername
}

// essa função cria os elementos HTML e Estilos da página de erro e insere esses elementos no DOM
const userNotFound = () => {
  const errorContainer = document.createElement('div')
  errorContainer.setAttribute('class', 'errorContainer')

  const errorTitle = document.createElement('h1')
  errorTitle.setAttribute('class', 'errorTitle')
  errorTitle.innerHTML = 'Usuário não encontrade! =('

  const errorDescription = document.createElement('h3')
  errorDescription.setAttribute('class', 'errorDescription')
  errorDescription.innerHTML = 'Pesquise novamente'

  const errorImage = document.createElement('img')
  errorImage.setAttribute('src', './img/notfound.png')

  const errorElements = [errorTitle, errorDescription, errorImage] // agrupa todas variáveis criadas num array
  errorElements.forEach(element => errorContainer.appendChild(element)) // executa a função appendChild em cada elemento da array

  errorSection.appendChild(errorContainer) // transforma em filhas todas as variáveis, dentro da section em caso de erro
}

const showGithubProfile = profileData => {
  clearProfile()
  const { avatar_url, name, login, bio, followers, public_repos } = profileData // usando a desestruturação para selecionar apenas as propriedades que vamos usar 

  const avatar = document.createElement('img')
  avatar.setAttribute('src', avatar_url)
  avatar.setAttribute('alt', name)

  const title = document.createElement('h2')
  title.innerHTML = name

  const username = document.createElement('p')
  username.innerHTML = login
  username.setAttribute('class', 'username')

  const profileBio = document.createElement('p')
  profileBio.innerHTML = bio
  profileBio.setAttribute('class', 'bio')

  const stats = document.createElement('div')
  stats.setAttribute('class', 'stats')

  const followersSpan = document.createElement('span')
  const followersIcon = document.createElement('i')
  followersIcon.setAttribute('class', 'fa fa-users')
  const followersCount = document.createElement('span')
  followersCount.innerHTML = followers
  const followersItem = [followersIcon, followersCount]
  followersItem.forEach(element => followersSpan.appendChild(element))  

  const reposSpan = document.createElement('span')
  const reposIcon = document.createElement('i')
  reposIcon.setAttribute('class', 'fa fa-book')
  const reposCount = document.createElement('span')
  reposCount.innerHTML = public_repos
  const reposItem = [reposIcon, reposCount]
  reposItem.forEach(element => reposSpan.appendChild(element))

  const statsItem = [followersSpan, reposSpan]
  statsItem.forEach(element => stats.appendChild(element))

  const profileElements = [avatar, title, username, profileBio, stats]
  profileElements.forEach(element => profile.appendChild(element))
}
