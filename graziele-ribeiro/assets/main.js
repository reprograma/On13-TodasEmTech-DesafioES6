const card = document.getElementsByClassName("user-card");
const imgUser = document.getElementById("img-user");
const nameUser = document.getElementById("name-user");

const form = document.getElementById("form-git");
const input = document.getElementById("input-user");
form.addEventListener('submit', async function getUsers(event) {
    event.preventDefault();
    const myHeaders = new Headers();
    let userName = input.value.trim();
    const baseURL = "https://api.github.com/users";

    const result = await fetch(`${baseURL}/${userName}`);
    const data = await result.json();
    console.log(data);
    setUserInfo(data);

});

const setUserInfo = (info) => {
    nameUser.textContent = info.name;
    imgUser.setAttribute("src", info.avatar_url);
}