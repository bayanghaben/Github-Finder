let repoNum1 = document.querySelector(".repo-number-compare1");
let repoNum2 = document.querySelector(".repo-number-compare2");
let followersNum1 = document.querySelector(".followers-num1");
let followersNum2 = document.querySelector(".followers-num2");
let username1 = document.querySelector(".user-username1");
let username2 = document.querySelector(".user-username2");
let search1 = document.querySelector(".search-icon1");
let search2 = document.querySelector(".search-icon2");
let input1 = document.querySelector(".compare-input1");
let input2 = document.querySelector(".compare-input2");
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let githubIcon = document.querySelector(".fa-github");

let button = document.querySelector(".compare");
githubIcon.addEventListener("click", () => {
  window.location = "index.html";
});
button.addEventListener("click", compare);

function compare() {
  let repoCount1 = repoNum1.textContent;
  let repoCount2 = repoNum2.textContent;
  let followersCount1 = followersNum1.textContent;
  let followersCount2 = followersNum2.textContent;
  result1.style.display = "block";
  result2.style.display = "block";

  if (repoCount1 > repoCount2) {
    username1.style.color = "yellowgreen";

    document.getElementById(
      "result1"
    ).src = `https://media.giphy.com/media/qNeX4mIaGbBfvq4oDh/giphy.gif`;
    username2.style.color = "red";
    document.getElementById(
      "result2"
    ).src = `https://media.giphy.com/media/Ix5Pk3cUofTLW/giphy.gif`;
  } else if (repoCount1 < repoCount2) {
    document.getElementById(
      "result2"
    ).src = `https://media.giphy.com/media/qNeX4mIaGbBfvq4oDh/giphy.gif`;
    document.getElementById(
      "result1"
    ).src = `https://media.giphy.com/media/Ix5Pk3cUofTLW/giphy.gif`;
    username1.style.color = "red";
    username2.style.color = "yellowgreen";
  } else if (repoCount1 == repoCount2) {
    if (followersCount1 > followersCount2) {
      username1.style.color = "yellowgreen";
      document.getElementById(
        "result1"
      ).src = `https://media.giphy.com/media/qNeX4mIaGbBfvq4oDh/giphy.gif`;
      document.getElementById(
        "result2"
      ).src = `https://media.giphy.com/media/Ix5Pk3cUofTLW/giphy.gif`;
      username2.style.color = "red";
    } else if (followersCount1 < followersCount2) {
      document.getElementById(
        "result2"
      ).src = `https://media.giphy.com/media/qNeX4mIaGbBfvq4oDh/giphy.gif`;
      document.getElementById(
        "result1"
      ).src = `https://media.giphy.com/media/Ix5Pk3cUofTLW/giphy.gif`;
      username1.style.color = "red";
      username2.style.color = "yellowgreen";
    } else {
      document.getElementById(
        "result1"
      ).src = `https://media.giphy.com/media/XEaawhrz3I4rEpQ8jf/giphy.gif`;
      document.getElementById(
        "result2"
      ).src = `https://media.giphy.com/media/XEaawhrz3I4rEpQ8jf/giphy.gif`;
      username1.style.color = "yellow";
      username2.style.color = "yellow";
    }
  }
}
async function getUser1() {
  const response = await fetch(`https://api.github.com/users/${input1.value}`);
  const data = await response.json();
  username1.textContent = `${data.login}`;
  document.getElementById(
    "user-profile-pic-compare1"
  ).src = `${data.avatar_url}`;
  followersNum1.textContent = `#Followers: ${data.followers}`;
  repoNum1.textContent = `#Repositories: ${data.public_repos}`;
  console.log(data);
}
async function getUser2() {
  const response2 = await fetch(`https://api.github.com/users/${input2.value}`);
  const data = await response2.json();

  username2.textContent = `${data.login}`;
  document.getElementById(
    "user-profile-pic-compare2"
  ).src = `${data.avatar_url}`;
  followersNum2.textContent = `#Followers: ${data.followers}`;
  repoNum2.textContent = `#Repositories: ${data.public_repos}`;
  console.log(data);
}

search1.addEventListener("click", () => {
  getUser1();
  console.log("hi1");
});
search2.addEventListener("click", () => {
  console.log("hi2");
  getUser2();
});
