const input = document.querySelector("input");
const btns = document.querySelectorAll("button.selection");
const btn = document.querySelector("button");
const playerName = document.getElementById("playername");
const playButtons = document.querySelector(".play-buttons");
const score = document.querySelectorAll("span");
const h2 = document.querySelector("h2");
const winning = document.querySelectorAll("h5");
const h4 = document.querySelectorAll("h4");



btn.addEventListener("click", pName);
playButtons.addEventListener("click", function (event) {
  const mySelection = event.target.id;
  const compChoice = randomSelection();
  const h3 = document.querySelectorAll("h3");


  if (mySelection === compChoice) {
    h2.innerText = "Draw";
  }
  if (mySelection === "rock" && compChoice === "scissors") {
    h2.innerText = "You Win";
    score[0].innerText = parseInt(score[0].innerText) + 1;
  }
  if (mySelection === "rock" && compChoice === "paper") {
    h2.innerText = "Bot's wins";
    score[1].innerText = parseInt(score[1].innerText) + 1;
  }
  if (mySelection === "paper" && compChoice === "scissors") {
    h2.innerText = "Bot's wins";
    score[1].innerText = parseInt(score[1].innerText) + 1;
  }
  if (mySelection === "paper" && compChoice === "rock") {
    h2.innerText = "You Win";
    score[0].innerText = parseInt(score[0].innerText) + 1;
  }
  if (mySelection === "scissors" && compChoice === "paper") {
    h2.innerText = "You Win";
    score[0].innerText = parseInt(score[0].innerText) + 1;
  }
  if (mySelection === "scissors" && compChoice === "rock") {
    h2.innerText = "Bot's wins";
    score[1].innerText = parseInt(score[1].innerText) + 1;
  }

  h3[0].innerText = "Your Choice: " + mySelection;
  h3[1].innerText = "Bot's Choice: " + compChoice;

  if (score[0].innerText === "3") {
    alert("YOU WIN!");
    winning[0].innerText = parseInt(winning[0].innerText) + 1;
    score[0].innerText = "0";
    score[1].innerText = "0";
    

  }
  if (score[1].innerText === "3") {
    alert("YOU LOSE!");
    winning[1].innerText = parseInt(winning[1].innerText) + 1;
    score[1].innerText = "0";
    score[0].innerText = "0";
  }

  h4[0].innerText = "User's Winning Score: ";
  h4[1].innerText = "Bot's Winning Score: ";




});

function pName(e) {
  playername.innerText = "User's Name: " + input.value;
  input.value = "";
}

function randomSelection() {
  const random = Math.floor(Math.random() * 3);
  const rps = ["rock", "paper", "scissors"];
  //console.log(rps[0])
  return rps[random];
}

function addScore(score) {
  score.innerText = parseInt(score.innerText) + 1;
  console.log("in addScore", parseInt(score.innerText));
}

function totalScore(winning) {
  winning.innerText = parseInt(winner.innerText) + 1 ;
  console.log("in totalScore", parseInt(winning.innerText));
}