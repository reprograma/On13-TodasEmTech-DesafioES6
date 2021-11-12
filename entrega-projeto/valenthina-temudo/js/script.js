    const input = document.getElementById("input-usuario");
    const botao = document.getElementById("btn");
    const formulario = document.getElementById("form-usuario");

    const card = document.getElementById("card-usuario");
    const imgUsuario = document.getElementById("img-usuario");
    const nomeUsuario = document.getElementById("nome-usuario");
    const loginUsuario = document.getElementById("username");
    const bioUsuario = document.getElementById("bio");
    const seguidoresUsuario = document.getElementById("seguidores");
    const repoUsuario = document.getElementById("repo");
    

    const baseURL = "https://api.github.com"
    //https://api.github.com/users/{user}"
    /* -Exibir o avatar.
    - Nome do usuário.
    - Username
    - Bio
    - Total de seguidores
    - Total de repositórios */

    const buscarUsuario = async (evento) => {
        evento.preventDefault();

        let usuario = input.value.trim()

        if (!!usuario) {
            const usuarioFetch = await fetch(`${baseURL}/users/${usuario}`)
                .then(response => response.json())
                .then(dados => dados)
                .catch(error => console.log(error))

            if (usuarioFetch && usuarioFetch.login) { //se tem resultado
                preeencherDadosUsuario(usuarioFetch)
                buscarRepoUsuario(usuarioFetch.repos_url, usuarioFetch.login)
            } else {
                error()
            }
        } else {
            alert("Nome de usuário inválido");
        }
    }

    function preeencherDadosUsuario(user) {
        imgUsuario.setAttribute("src", user.avatar_url);
        imgUsuario.setAttribute("alt", "imagem usuário")
        nomeUsuario.textContent = user.name;
        loginUsuario.textContent = user.login;
        bioUsuario.textContent = user.bio;
        seguidoresUsuario.textContent = user.followers;
        repoUsuario.textContent = user.public_repos;
    }

   async function buscarRepoUsuario(urlApiRepo, nomeUsuario) {
        const dadosRepo = await fetch(urlApiRepo)
            .then(response => response.json())
            .then(dados => dados)
            .catch(error => console.log(error))

        const cardsRepo = document.querySelector("#cards-repos")
        cardsRepo.innerHTML = "";

        if (dadosRepo && dadosRepo.length == 0) {
            //criar a mensagem de repositório vazio e exibir aqui
            const mensagem = nomeUsuario + " não tem repositórios públicos ainda";
            const paragrafoMensagem = document.createElement('p');
            paragrafoMensagem.className = 'mensagem';
            let mensagemP = document.createTextNode(mensagem);
            paragrafoMensagem.appendChild(mensagemP);
            

            //colocando o parragrafo na div da tela
            cardsRepo.appendChild(paragrafoMensagem);

        } else {
            // fazer um map, criar os cards e popular aqui
            dadosRepo.map((item) => {

                // //criando a divCard
                const divCard = document.createElement('div')
                divCard.className = 'card';

                //criando a div container
                const divContainer = document.createElement('div');
                divContainer.className = 'container'


                //criando h1
                const tituloRepo = document.createElement('h1')
                tituloRepo.className = 'titulo-repo';
                let titulo = document.createTextNode(item.name);
                tituloRepo.appendChild(titulo);
                divContainer.appendChild(tituloRepo);

                //criando paragrafo descrição
                const pDescricao = document.createElement('p');
                pDescricao.className = 'pDescricao';
                let descricao = document.createTextNode(item.description);
                pDescricao.appendChild(descricao);
                divContainer.appendChild(pDescricao);

                // criando div linguagem e estrela
                const divP = document.createElement('div')
                divP.className = 'div-linguagem-estrela'

                // criando div bolinha linguagem
                // const divBolinha = document.createElement('div');
                // divBolinha.className = 'divB';

                // criando paragrafo linguagem
                const pLinguage = document.createElement('p');
                pLinguage.className = 'pLinguagem';
                let linguagem = document.createTextNode(item.language);
                pLinguage.appendChild(linguagem);
                divContainer.appendChild(pLinguage);
                divP.appendChild(pLinguage);
                // divBolinha.appendChild(pLinguage);


                //criando paragrafo estrela
                const pEstrela = document.createElement('p');
                pEstrela.className = 'pEstrela';
                let estrela = document.createTextNode(item.stargazers_count);
                pEstrela.appendChild(estrela);
                divContainer.appendChild(pEstrela);
                divP.appendChild(pEstrela);

                // adicionar container ao card
                // divContainer.appendChild(divBolinha);
                divContainer.appendChild(divP);
                divCard.appendChild(divContainer);
                cardsRepo.appendChild(divCard)
            })
        }
    }

    function error() {
        if (error) {
            location.replace("./erroUsuario.html")
        }
    }

    formulario.addEventListener("submit", buscarUsuario);