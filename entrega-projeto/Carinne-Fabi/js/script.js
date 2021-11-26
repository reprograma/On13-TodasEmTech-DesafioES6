const campoDePesquisa = document.getElementById("campoDePesquisa");
const inputpesquisar = document.getElementsByClassName("botao");
const avatar = document.getElementById("avatar_url");
const Nome = document.getElementsByClassName("name");
const Username = document.getElementsByClassName("login");
const Bio = document.getElementsByClassName("Bio");
const TotalDeSeguidores = document.getElementsByClassName("TotalDeSeguidores");
const TotalDeRepositorios = document.getElementsByClassName("TotalDeRepositorios");
const TotalDeRepositorios = document.getElementsByClassName("TotalDeRepositorios");
const Nãoencontrado = document.getElementByQuarySelector("não-encontrado");




const formulario = asyc() => {
    const TotalDeSeguidores = "";


    const resposta = await fetch("https://api.github.com/users")

    const resultado = await resposta.json();

    console.log(resultado);

}
catch ((err) {
        const erro = document.createElement("p");
        erro.textContent = "suária não encontrada:("
        caixa.appendchild(err)
        console.log(error);
    }


    //ASYC WAIT TEM Q SER JUNTAS

    /*const myHeaders = new Headers;

    const myInit = {
        method: "GET",
        headers: myHeaders,
    }*/

    /*evento.preventDeFault();
    let input = inputpesquisar.value.trim().toLowerCase();*/