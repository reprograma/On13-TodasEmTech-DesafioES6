const formulario = document.getElementById("form");
const input = document.getElementById("search");

const cardUser = document.getElementById("card-user");
const imgUser = document.getElementById("img-user");
const nameUser = document.getElementById("name-user");
const nickName = document.getElementById("nick-name");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const projectss = document.getElementById("projects");
const noUser = document.getElementById("no-user");

const buttonRepo = document.getElementById("see-repos");
const allRepos = document.getElementById("all-repos");


const baseURL = 'https://api.github.com/'

// cardUser.setAttribute('style', 'display:none')


function getUser (e) {
    e.preventDefault()

    let currentUser = input.value;
    
    fetch(`${baseURL}users/${currentUser}`)
        .then(response => response.json())
        .then(result => {
            console.log(result.message)

            //Usuario exibindo

            imgUser.setAttribute("src", result.avatar_url);
            nameUser.textContent = result.name;
            nickName.innerText = result.login;
            bio.innerText = result.bio;
            followers.innerText = result.followers;
            projectss.innerText = result.public_repos;

            //Usuario nao encontrado

            if(result.message !== 'Not Found'){
                cardUser.setAttribute('style', 'display:flex')
                noUser.setAttribute('style', 'display:none')
            } else {
                noUser.setAttribute('style', 'display:flex')
                cardUser.setAttribute('style', 'display:none')
            }
            
        })
        .catch(error => {
            console.log(error)
        })

}

formulario.addEventListener("submit", getUser)

const userImg = document.getElementById("userImg");
const userName = document.getElementById("userName");
const nickName2 = document.getElementById("nickName");
const biografy = document.getElementById("biografy");
const follow = document.getElementById("follow");
const proj = document.getElementById("proj");
const reposWrapper = document.querySelector('.sec-box');


buttonRepo.addEventListener("click", (event) => {
    event.preventDefault()

    cardUser.setAttribute('style', 'display:none')
    noUser.setAttribute('style', 'display:none')
    
    allRepos.setAttribute('style', 'display:flex')

    let currentUser = input.value;
    
    fetch(`${baseURL}users/${currentUser}`)
        .then(response => response.json())
        .then(result => {
            console.log(result.message)

            //Usuario exibindo

            userImg.setAttribute("src", result.avatar_url);
            userName.textContent = result.name;
            nickName2.innerText = result.login;
            biografy.innerText = result.bio;
            follow.innerText = result.followers;
            proj.innerText = result.public_repos;

        })
    

    fetch(`${baseURL}users/${currentUser}/repos`)    
        .then(res => res.json())
        .then(data => {
            console.log(data)
        
            for(i = 0; i <= data.length; i++) {
                
               const cardRepos = document.createElement('div');
               const repoName = document.createElement('p');
               const description = document.createElement('p');


                repoName.innerText = data[i].name
                description.innerText = data[i].description

                cardRepos.classList.add('card-repos')
                repoName.classList.add('repo-name')
                description.classList.add('description')

                reposWrapper.appendChild(cardRepos)

                cardRepos.appendChild(repoName)
                cardRepos.appendChild(description)
                
           }
        })

   
    })


