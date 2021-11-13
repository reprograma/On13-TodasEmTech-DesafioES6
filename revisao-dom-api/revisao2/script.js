const formulario = document.getElementById("form");
const input = document.getElementById("input-bb");

const card = document.getElementById("card-bb");
const imgBb = document.getElementById("img-bb");
const nomeBb = document.getElementById("nome-bb");
const apelidoBb = document.getElementById("apelido-bb");
const aniversarioBb = document.getElementById("aniversario-bb");
const listaOcupacaoBb = document.getElementById("ocupacao-bb");

const baseURL = "https://www.breakingbadapi.com/api/";

const pegarPersonagens = async () => {
       const personagens = 
       await fetch(`${baseURL}character/random`)
        .then(resposta => resposta.json())
        .catch(err => console.log(err))

    const {img, name, nickname, birthday, occupation} = personagens[0];

    criarCard(img,name, nickname, birthday, occupation)
    console.log(personagens)
}


const criarCard = (img, name, nickname, birthday, occupation) => {
    imgBb.setAttribute("src", img)
    imgBb.setAttribute("alt", name)
    nomeBb.textContent = name;
    apelidoBb.textContent = nickname;
    aniversarioBb.textContent = birthday;
    
    const listaOcupacao = occupation;
    listaOcupacao.forEach(element => {
        const itemOcupacao = document.createElement('li');
        itemOcupacao.textContent = element
        listaOcupacaoBb.appendChild(itemOcupacao);
    });
}

pegarPersonagens()