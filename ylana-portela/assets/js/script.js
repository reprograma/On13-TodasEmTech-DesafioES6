const imageUser = document.querySelector(".user-image");
const titleUser = document.querySelector(".user-name");
const usernameUser = document.querySelector(".user-username");
const descriptionUser = document.querySelector(".user-description");
const input = document.querySelector("#input");



    


const eventInput = async (event) => {

    // const url = 

    let search = input.value;
    event.preventDefault();
    const result = await fetch(`https://api.github.com/users/${search}`)
    const response = await result.json()
    console.log(response)

    imageUser.setAttribute('src', response.avatar_url)
    titleUser.textContent = response.name
    usernameUser.textContent = response.login
    descriptionUser.textContent = response.bio
    
}

addEventListener("change", eventInput)    

