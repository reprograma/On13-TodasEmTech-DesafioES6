const main = document.querySelector("main");
const input = document.getElementsByClassName("input");
const formulario = document.getElementsByClassName("input-header");

async function getInfos() {
  const myHeaders = new Headers();

  const myInit = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const result = await fetch(`https://api.github.com/users/natalia-lavarda`, myInit);
    const response = await result.json();
    const avatarUrl = `${response.avatar_url}.png`;
    const container = document.createElement("div");
    const card = document.createElement("article");
    const userAvatar = document.createElement("img");
    const title = document.createElement("h1");
    const subtitle = document.createElement("h3");
    const bio = document.createElement("p");

    main.appendChild(container);
    container.appendChild(card);
    card.appendChild(userAvatar);
    card.appendChild(title);
    card.appendChild(subtitle);
    card.appendChild(bio);

    userAvatar.src = avatarUrl;
    title.innerText = response.name;
    subtitle.innerText = response.login;
    bio.innerText = response.bio;

    card.classList.add("user-info");
    userAvatar.classList.add("user-avatar");
    title.classList.add("title");

    console.log(avatarUrl);
    console.log(response);
  } catch (error) {
    console.log("Something is not working :(");
  }
}
