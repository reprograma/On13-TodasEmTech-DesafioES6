const card = document.getElementById("card-pokemon");
const imgPoke = document.getElementById("img-pokemon");
const nomePoke = document.getElementById("nome-pokemon");

const formulario = document.getElementById("form");
const input = document.getElementById("input-pokemon");




// function eventoFormulario(evento) {
//     evento.preventDefault();

//     let meuPokemon = input.value;

//     fetch(`https://pokeapi.co/api/v2/pokemon/${meuPokemon}`)
//         .then((resposta1) => resposta1.json())
//         .then(function (resposta2) {
//             console.log(resposta2)
//             nomePoke.textContent = resposta2.name;
//             imgPoke.setAttribute("src", resposta2.sprites.front_default)
//         }).catch((err) => console.log(`meu erro foi ${err}`))
// }

const baseURL = "https://pokeapi.co/api/v2/"

const eventoFormulario = async (evento) => {
    evento.preventDefault();
    let meuPoke = input.value

    const pokemonFetch = await fetch(`${baseURL}pokemon/${meuPoke}`)
        .then(response => response.json())
        .then(dados => dados)
        .catch(err => meuErro())

        pegaPokemon(pokemonFetch)
        validarInput();
}

const pegaPokemon = (poke) => {
    nomePoke.textContent = poke.name;
    imgPoke.setAttribute("src", poke.sprites.front_default);
    imgPoke.setAttribute("alt", poke.name);
}    

const validarInput = () => {
    input.value = ""
}

const meuErro = () => {
    const divErro = document.createElement("div"); 
    divErro.innerHTML = `<p> por favor digite o nome correto do pokemon </p>`
    document.body.appendChild(divErro);
}



formulario.addEventListener("submit", eventoFormulario)
//console.log( eventoFormulario)

