var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userChoice;
var compChoice;
var rps = ["rock", "paper", "scissors"];
var randomNum = Math.floor(Math.random() * 3);


rock.addEventListener("click", function() {
  userChoice = this.id;
  // get comp choice
  compChoice = rps[randomNum];
  // display those choices to the browser
  
  // decide who wins
})

paper.addEventListener("click", function() {
  userChoice = this.id;
  // get comp choice
  compChoice = rps[randomNum];

  // display those choices to the browser
  // decide who wins
})

scissors.addEventListener("click", function() {
  userChoice = this.id;
  // get comp choice
  compChoice = rps[randomNum];

  // display those choices to the browser
  // decide who wins
})