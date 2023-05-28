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
//move to landing page
githubIcon.addEventListener("click", () => {
  window.location = "index.html";
});

//compare btn
button.addEventListener("click", compare);

function compare() {
  //pasreint: convert string to number for comparison
  let repoCount1 = parseInt(repoNum1.textContent);
  let repoCount2 = parseInt(repoNum2.textContent);
  console.log(typeof repoCount2);
  let followersCount1 = parseInt(followersNum1.textContent);
  let followersCount2 = parseInt(followersNum2.textContent);
  result1.style.display = "block";
  result2.style.display = "block";
  console.log(repoCount1);
  console.log(repoCount2);
  //comparison if statement
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
    //if repo num are aquals compare bt followers num
  } else if (repoCount1 === repoCount2) {
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
      //when it is a tie!
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
//get user 1 func
async function getUser1() {
  const response = await fetch(`https://api.github.com/users/${input1.value}`);
  const data = await response.json();
  username1.textContent = `${data.login}`;
  document.getElementById(
    "user-profile-pic-compare1"
  ).src = `${data.avatar_url}`;
  followersNum1.textContent = `${data.followers}`;
  repoNum1.textContent = `${data.public_repos}`;
  console.log(data);
}

//get user 2 func
async function getUser2() {
  const response2 = await fetch(`https://api.github.com/users/${input2.value}`);
  const data = await response2.json();
  username2.textContent = `${data.login}`;
  document.getElementById(
    "user-profile-pic-compare2"
  ).src = `${data.avatar_url}`;
  followersNum2.textContent = `${data.followers}`;
  repoNum2.textContent = `${data.public_repos}`;
  console.log(data);
}
// search icons eventlistener for getting users
search1.addEventListener("click", () => {
  reset();
  getUser1();
  console.log("hi1");
});
search2.addEventListener("click", () => {
  reset();
  console.log("hi2");
  getUser2();
});
//reset comparison result when search have done
let reset = function () {
  username1.style.color = "white";
  username2.style.color = "white";
  result1.style.display = "none";
  result2.style.display = "none";
};
