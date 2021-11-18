const nomeGitHub = document.getElementById("nome-usuario");
const imgPerfil = document.getElementById("img-usuario");
const nomeP = document.getElementById("apelido-usuario");
const biografia = document.getElementById("bio-usuario");
const form = document.getElementById("formulario");
const input = document.getElementById("search");
const imgSegui =document.getElementById("img-seguidores");
const numeroDeSeguidores =document.getElementById("seguidores-usuario");
const imgRepositorio =document.getElementById("repositorio-img");
const numeroDeUsuarios =document.getElementById("repositorio-usuario");
const titleError = document.getElementById("title-error");
const textError = document.getElementById("text-error");
const imgError = document.getElementById("img-error");



const baseURL = "https://api.github.com/users"

 const eventoFormulario = async (evento) => {
    evento.preventDefault();
    let meuGit = input.value.trim().toLowerCase();

    const result = await fetch(`${baseURL}/${meuGit}`);
    const data = await result.json();
    console.log(data);

      const hubFetch = await fetch(`${baseURL}/${meuGit}`)
        .then(response => response.json())
        .then(dados => dados)
        .catch(err => meuErro())

        pegaUsuarioGitHub( hubFetch)
         validarInput();
  
       
 }

 const  pegaUsuarioGitHub = (giti) => {
    nomeGitHub.textContent= giti.name;
    nomeP.textContent = giti.login;
    imgPerfil.setAttribute("src", giti.avatar_url);
    biografia.textContent= giti.bio;
    imgSegui.src ='../img/people_outline.png'
    numeroDeSeguidores.textContent = giti.followers;
    numeroDeUsuarios.textContent = giti.following;
    imgRepositorio.src = '../img/Vector.png';
    
   
    // console.log(pegaUsuarioGitHub)
 }  
 

const validarInput = () => {
    input.value = ""

    
}
const meuErro = () => {
    const divErro = document.createElement("div");
    const textoErro = document.createElement("p")
    divErro.appendChild(textoErro)
    textoErro.textContent = "Página não encontrada"
    divContainer.appendChild(divErro) 
    document.body.appendChild(divErro);
}
    


    form.addEventListener("submit", eventoFormulario)


    


























    
    
// }

// const meuErro = () => {
//     const divErro = document.createElement("div"); 
//     divErro.innerHTML = `<p> Página não encontrada</p>`
//     document.body.appendChild(divErro);
// }




//console.log(eventoFormulario)





























//    form.addEventListener("submit", async function git(evento){
//      evento.preventDefault();
//      const myHeaders = new Headers();
//      let search = input.value.trim();
//      const baseURL = "https://api.github.com/users";

//      const response = await fetch(`${baseURL}/${search}`);

//      const data = await response.json()
//      console.log(data)

//      preencherDados(response)
//      validarInput();

    


//   });
 
//  function preencherDados() {
//     const baseURL = "https://api.github.com/users";
//     imgPerfil.setAttribute('src', baseURL.avatar_url);
//     console.log(imgPerfil)
    
//   }

//   const validarInput = () => {
//     input.value = ""
// }

 
  
  


























 
    // const baseURL = "https://api.github.com/users";

    // const pegaUsuario = (git) => {
    //     nomeGitHub.innerHTML = git.name;
    //     imgPerfil.setAttribute("src", git.avatar_url);
    //     biografia.textContent =git.bio

    //  const data = await response.json()
    //  console.log(data)

       
    // }    
    
    // const validarInput = () => {
    //     input.value = ""
    // }
    
    // const meuErro = () => {
    //     const divErro = document.createElement("div"); 
    //     divErro.innerHTML = `<p>Usuário não encontrado :( </p>`
            
    //     document.body.appendChild(divErro);
    // }
    

// const addImage = (baseURL) => {
//     imgPerfil.setAttribute(`${baseURL}/${imgPerfil} width="300"`)
    
//     console.log(addImage)
// }
// const imgsucesso = (result) => {
//     const {data:{ baseURL } } = result;
//     addImage(baseURL);
   
// }
 





























// function eventoFormulario(evento) {
//     evento.preventDefault();

//     let meuPerfil = input.value;

//     fetch("https://api.github.com")
//         .then((resposta1) => resposta1.json())
        
//         console.log(resposta1)
        
     

//fetch(`https://api.github.com ${meuPerfil}`)
