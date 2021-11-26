const login = document.getElementById("username");
const botaoEnviar = document.getElementById("botao");
const form = document.getElementById("search");
const usuario = document.getElementById("sessao_usuario");

botaoEnviar.addEventListener("click", function TextAreaValidation(event) {
  event.preventDefault();

  if (login.value.trim() === "") {
    alert("Campo Obrigatorio");
  } else {
    return getUsuario(login.value);
  }

  form.reset();
});

const getUsuario = async (username) => {
  try {
    const request = await fetch(`https://api.github.com/users/${username}`);
    if (request.status === 404) {
      throw new Error();
    }
    const userInfo = await request.json();
    usuario.innerHTML = createCardUser(userInfo);
    console.log(userInfo);
  } catch {
    usuario.innerHTML = userNotFound();
  }
};

const createCardUser = (username) => {
  const { login, name, bio, followers, public_repos, avatar_url } = username;
  form.reset();
  return ` <picture>
              <img class="imagem_usuario" src="${avatar_url}" alt="" />
          </picture>
          <div>
                <h2 class="nome_usuario spacing">${name}</h2>
                <p class="username_usuario paragraph spacing">${login}</p>
                <p class="biografia_usuario paragraph spacing">${bio}</p>
            <ul class="icones spacing">
              <li class="icone_usuario">
                  <img id="seguidores" src="people_outline.svg">
                  <p>${followers}</p>
              </li>
              <li class="icone_usuario">
                  <img id="repos" src="Vector.svg">
                  <p>${public_repos}</p>
              </li>
          </ul>
          </div> `;
};

const userNotFound = () => {
  form.reset();
  return ` <div class="erro">
              <picture>
              <img class="mensagem_de_erro" src="Group 7.svg" />
          </picture>
      </div> `;
};