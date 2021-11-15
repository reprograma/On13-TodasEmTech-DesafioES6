const card = document.getElementById("card-pokemon");
const imgPoke = document.getElementById("img-pokemon");
const nomePoke = document.getElementById("nome-pokemon");
const formulario = document.getElementById("form");
const input = document.getElementById("input-pokemon");


// const pokemon1 = fetch("https://pokeapi.co/api/v2/pokemon/1")
//     .then(function(resposta){
//         return resposta.json();
//     })
//     .then (function(dados){
//         imgPoke.setAttribute("src", dados.sprites.front_default)
//         nomePoke.textContent = dados.name;
//     })

//arrow function com form:

// formulario.addEventListener("submit", (evento)=>{
//     evento.preventDefault();
    
//     let meuPoke = input.value;

//     const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${meuPoke}`)
//     // console.log(pokemon);
//         .then((resposta1)=> resposta1.json())
//         .then(function(resposta2){
//             console.log(resposta2)
//             imgPoke.setAttribute("src", resposta2.sprites.front_default)
//             nomePoke.textContent = resposta2.name;
    
//         }).catch((err)=> console.log(`meu erro foi ${err}`))
// })




    
    // .then (function(dados){
    //     imgPoke.setAttribute("src", dados.sprites.front_default)
    //     nomePoke.textContent = dados.name;
    // })

// formulario.addEventListener("submit", eventoFormulario)



//arrow function com await e fetch:


const baseURL = "https://pokeapi.co/api/v2/";
const eventoFormulario = async (evento) => {
    evento.preventDefault(); 
    let meuPoke = input.value;

const pokeFetch = await fetch(`${baseURL}pokemon/${meuPoke}`)
        .then(response => response.json())
        .then(dados => dados)
        .catch(err => console.log(`o meu erro é ${err}. ajuda backend`))
        // console.log(poke1)
        pegaPoke(pokeFetch)
}


const pegaPoke = (poke) => {
    imgPoke.setAttribute("src", poke.sprites.front_default)
    nomePoke.textContent = poke.name;
    
}

formulario.addEventListener("submit", eventoFormulario)
// console.log(eventoFormulario)