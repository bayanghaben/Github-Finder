"use strict";
//DOM
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
let repoBox = document.querySelectorAll(".repo-item");
let image1 = userImage.getAttribute("src");
//get user function
async function getUser() {
  const response = await fetch(`https://api.github.com/users/${input.value}`);
  const response2 = await fetch(
    `https://api.github.com/users/${input.value}/repos`
  );

  const data = await response.json();
  const repos = await response2.json();

  // fill user info content in the page:
  followers.innerText = `${data.followers}`;
  document.getElementById("profile-mini-pic-img").src = `${data.avatar_url}`;
  following.textContent = `.${data.following}`;
  document.querySelector(".user-profile-pic").src = `${data.avatar_url}`;
  following.textContent = `.${data.following}`;
  githubName.textContent = `${data.name}`;
  username.textContent = `${data.login}`;
  repoNum.textContent = `${data.public_repos}`;

  //get repos names &there languages & languages colors
  for (let i = 0; i < 6; i++) {
    if (`${repos[i]}` === "undefined") {
      repoBox[i].style.display = "none";
    } else {
      repoBox[i].style.display = "block";

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
        console.log(data);
        console.log(repos);
      }
    }
  }
}

// search click eventlistener
search.addEventListener("click", () => {
  getUser();
  editBtn.textContent = `Follow`;

  console.log("hi");
});
let word = "stressed";
let newWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  newWord += word[i];
  console.log(newWord);
}
console.log(newWord);
