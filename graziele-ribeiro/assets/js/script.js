const card = document.getElementsByClassName("user-card");
const imgUser = document.getElementById("img-user");
const nameUser = document.getElementById("name-user");
const nicknameUser = document.getElementById("nickname-user");
const bioUser = document.getElementById("bio-user");
const followersUser = document.getElementById("followers-user");
const repoUser = document.getElementById("repository-user");
const followersImg = document.getElementById("followers-img");
const repositoryImg = document.getElementById("repository-img");
const sectionUser = document.getElementById("use-section");
const titleError = document.getElementById("title-error");
const textError = document.getElementById("text-error");
const imgError = document.getElementById("img-error");


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


    if (result.status == 200) {
        setUserInfo(data);
    } else {
       alert('Usuário não encontrado :(')
    
    titleError.textContent = "Usuário não encontrado :(";
    textError.textContent = "Pesquisar novamente";
    imgError.src = '/graziele-ribeiro/assets/images/Vector.png';
}
});

const setUserInfo = (info) => {
    nameUser.textContent = info.name;
    imgUser.setAttribute("src", info.avatar_url);
    nicknameUser.textContent = info.login;
    bioUser.textContent = info.bio;
    followersUser.textContent = info.followers;
    repoUser.textContent = info.public_repos;
    followersImg.src = '/graziele-ribeiro/assets/images/people_outline.png';
    repositoryImg.src = '/graziele-ribeiro/assets/images/Vector.png';
}

form.addEventListener('submit', async function getRepositories (e){
    const baseURL = "https://api.github.com/users";
    let userName = input.value.trim();
    const repositories = await fetch(`${baseURL}/${userName}/repos`)
    const dataRepositories = await repositories.json();
    console.log(dataRepositories)
    
    dataRepositories.forEach((element) => {
        
        let cardRepository = document.createElement('div');
        let cardRepositoryTitle = document.createElement('div');
        let cardRepositoryBody = document.createElement('div');
        let cardTech = document.createElement('img');
        let cardStar = document.createElement('img');
        let cardStarNumber = document.createElement('p');
        let cardTechName = document.createElement('p');


        cardRepository.setAttribute('class', 'cards-repo');
        cardRepositoryTitle.setAttribute('class', 'card-repo-title');
        cardRepositoryBody.setAttribute('class', 'card-repo-body');
        cardTech.setAttribute('class', 'card-tech');
        cardStar.setAttribute('class', 'card-star');
        cardStarNumber.setAttribute('class', 'card-star-number');
        cardTechName.setAttribute('class', 'card-tech-name');
        
        
        cardRepositoryTitle.textContent = element.name;
        cardRepositoryBody.textContent = element.description;
        cardTech.src ='/graziele-ribeiro/assets/images/Ellipse 1css.png'
        cardStar.src ='/graziele-ribeiro/assets/images/star_border.png'
        cardStarNumber.textContent = element.stargazers_count;
        cardTechName.textContent = element.language;



        const maintContainer = document.getElementById('public-repos');
        maintContainer.appendChild(cardRepository);
        cardRepository.appendChild(cardRepositoryTitle);
        cardRepository.appendChild(cardRepositoryBody);
        cardRepository.appendChild(cardTech);
        cardRepository.appendChild(cardTechName);
        cardRepository.appendChild(cardStarNumber);
        cardRepository.appendChild(cardStar);
        
        
    })
    



});

