// const usuario = document.querySelector("");
// const usuario = "daniszcode";
const myHeaders = new Headers();

const myInit = {
  method: "GET",
  headers: myHeaders,
};

function req(user) {
  fetch(`https://api.github.com/users/octocat`, myInit)
    .then((response) => {
      console.log(response.json());
    })
    .then((response) => {
      response.forEach((element) => {
        console.log(element);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

req();
