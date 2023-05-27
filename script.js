"use strict";
let bugerMenu = document.querySelector(".burger-menu");
bugerMenu.addEventListener("click", () => {});
let userImage = document.querySelector(".user-profile-pic");
let username = document.querySelector(".user-username");
let githubName = document.querySelector(".user-name");
let miniPicture = document.querySelector(".profile-mini-pic-img");
let input = document.querySelector(".search-input");
let followers = document.querySelector(".followers");
let following = document.querySelector(".following");
let search = document.querySelector(".search-icon");
let repoNum = document.querySelector(".repo-num");
let project = document.querySelectorAll(".repo-name");
let language = document.querySelectorAll(".repo-language");
let languageColor = document.querySelectorAll(".repo-language-color");
let editBtn = document.querySelector(".edit-profile-btn");
let image1 = userImage.getAttribute("src");

async function getUser() {
  const response = await fetch(`https://api.github.com/users/${input.value}`);
  const response2 = await fetch(
    `https://api.github.com/users/${input.value}/repos`
  );

  const data = await response.json();
  const repos = await response2.json();
  followers.innerText = `${data.followers}`;
  // image.innerHTML= ${data.avatar_url};
  document.getElementById("profile-mini-pic-img").src = `${data.avatar_url}`;
  following.textContent = `.${data.following}`;
  document.querySelector(".user-profile-pic").src = `${data.avatar_url}`;
  following.textContent = `.${data.following}`;
  githubName.textContent = `${data.name}`;
  username.textContent = `${data.login}`;
  repoNum.textContent = `${data.public_repos}`;

  for (let i = 0; i < 6; i++) {
    project[i].innerHTML = `${repos[i].name}`;
    language[i].innerHTML = `${repos[i].language}`;

    if (`${repos[i].language}` == "HTML") {
      languageColor[i].style.backgroundColor = "red";
    } else if (`${repos[i].language}` == "JavaScript") {
      languageColor[i].style.backgroundColor = "yellow";
    } else if (`${repos[i].language}` == "CSS") {
      languageColor[i].style.backgroundColor = "purple";
    } else {
      languageColor[i].style.backgroundColor = "inherit";
    }
    if (`${repos[i].language}` == "null") {
      language[i].innerHTML = ``;
    } else if (`${data.name}` == "null") {
      githubName.innerHTML = ``;
    }

    console.log(repos);
  }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> getUser()
search.addEventListener("click", () => {
  getUser();
  editBtn.textContent = `Follow`;

  console.log("hi");
});
