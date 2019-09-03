var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var output = document.getElementById("output")
var userChoice;
var compChoice;

var rps = ["rock", "paper", "scissors"];
var array = Math.floor(Math.random() * rps.length);


rock.addEventListener("click", function()  {
  
  userChoice = this.id;
  // get comp choice
  compChoice = rps[array];
  
  // display those choices to the browser
  console.log(userChoice, compChoice)

  // decide who wins
  winLose(userChoice, compChoice)
})

paper.addEventListener("click", function() {
  userChoice = this.id;
  // get comp choice
  compChoice = rps[array];

  // display those choices to the browser
  console.log(userChoice, compChoice)

  // decide who wins
  winLose(userChoice, compChoice)
})

scissors.addEventListener("click", function() {
  userChoice = this.id;
  // get comp choice
  compChoice = rps[array];

  // display those choices to the broconsole.log(userChoice, compChoice)
  
  // decide who wins
  winLose(userChoice, compChoice)
})

function winLose(userChoice, compChoice)  {
  if (userChoice === compChoice){
  console.log("Tie!");
  }else if (userChoice === 'paper' && compChoice === 'rock'){
  console.log("You win!");
  }else if (userChoice === 'rock' && compChoice === 'scissors'){
  console.log("You win!");
  }else if (userChoice === 'scissors' && compChoice === 'rock'){
  console.log("You lose!");
  }else if (userChoice === 'rock' && compChoice === 'paper'){
  console.log("You lose!");
  }else if (userChoice === 'paper' && compChoice === 'scissors'){
  console.log("You lose!");
  }else if (userChoice === 'scissors' || compChoice === 'paper'){
  console.log("You win!");
  }

}