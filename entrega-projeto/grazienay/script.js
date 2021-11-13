const card = document.getElementsByClassName("user-card");
const paragrafoErro1 = document.getElementById("paragrafo-erro1");
const paragrafoErro2 = document.getElementById("paragrafo-erro2");
const imgUser = document.getElementById("img-user");
const nameUser = document.getElementById("name-user");
const nicknameUser = document.getElementById("nickname-user");
const bioUser = document.getElementById("bio-user");
const infoNumbers = document.querySelector('followers-card');
const followersUser = document.getElementById("followers-user");
const repoUser = document.getElementById("repository-user");
const followersImg = document.getElementById("followers-img");
const repositoryImg = document.getElementById("repository-img");


const form = document.getElementById("form-git");
const input = document.getElementById("input-user");
form.addEventListener('submit', async function getUsers(event) {
   event.preventDefault();
   const myHeaders = new Headers();
   let userName = input.value.trim();
   const baseURL = "https://api.github.com/users";

   const result = await fetch(`${baseURL}/${userName}`);
   const data = await result.json();

   while (userName == data.login){

      nameUser.textContent = data.name;
      imgUser.setAttribute("src", data.avatar_url);
      nicknameUser.textContent = data.login;
      bioUser.textContent = data.bio;
      followersUser.textContent = data.followers;
      repoUser.textContent = data.public_repos;
      followersImg.src = './images/people_outline.png';
      repositoryImg.src = './images/Vector.png';

   }

   if (userName == data.login) {

     
   }
   if (data.message == "Not Found") {

      document.getElementById("paragrafo-erro1").innerHTML = "Usuário Não Encontrado :( ";
      document.getElementById("paragrafo-erro2").innerHTML = "pesquise novamente";
      imgUser.setAttribute('src', src = "../grazienay/images/Frame.png");


   } 
  

})