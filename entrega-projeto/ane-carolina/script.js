const divInformations = document.querySelector('.informations')
const divError = document.querySelector('.error')
const imageUser = document.querySelector(".user-image");
const titleUser = document.querySelector(".user-name");
const usernameUser = document.querySelector(".user-username");
const descriptionUser = document.querySelector(".user-description");
const input = document.querySelector("#input");  
const followers = document.querySelector(".followers-text");
const repositorios = document.querySelector(".repositories-text") 

const eventInput = async (event) => {

    let search = input.value;
 
    const response = await fetch(`https://api.github.com/users/${search}`)
    const result = await response.json()

    // console.log(result);

    if (response.status == 200){

        divInformations.style.display = "block"
        imageUser.setAttribute('src', result.avatar_url)
        titleUser.textContent = result.name
        titleUser.setAttribute('href', result.html_url)
        // console.log(titleUser)
        usernameUser.textContent = result.login
        descriptionUser.textContent = result.bio
        followers.textContent = result.followers
        repositorios.textContent = result.public_repos
    }
    else{
        divInformations.style.display = "none"
        divError.style.display = "flex"
    }

}

addEventListener("change", eventInput) 