const profile = document.getElementById('profile')
const error = document.getElementById('error')

const searchGithubByUsername = async () => {
  const baseUrl = 'https://api.github.com'
  const githubUsername = validateSearchInput()

  try {
    clearError()

    const response = await fetch(`${baseUrl}/users/${githubUsername}`)
    const data = await response.json()

    if (data.message === 'Not Found') {
      clearProfile()
      clearSearchInput()
      userNotFound()
    } else {
      showGithubProfile(data)
      clearSearchInput()
    }
  } catch (error) {
    console.error(error)
  }
}

const clearProfile = () => {
  profile.replaceChildren()
}

const clearError = () => {
  error.replaceChildren()
}

const clearSearchInput = () => {
  const searchInput = document.getElementById('inputUsuario')
  searchInput.value = ''
}

const validateSearchInput = () => {
  const githubUsername = document
    .querySelector('#inputUsuario')
    .value.trim()
    .toLowerCase()
  return githubUsername
}

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

  const errorElements = [errorTitle, errorDescription, errorImage]
  errorElements.forEach(element => errorContainer.appendChild(element))

  error.appendChild(errorContainer)
}

const showGithubProfile = profileData => {
  clearProfile()
  const { avatar_url, name, login, bio, followers, public_repos } = profileData

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

  const elements = [avatar, title, username, profileBio, stats]
  elements.forEach(element => profile.appendChild(element))
}
