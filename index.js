var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var output = document.getElementById("output");
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
    return output.innerHTML = "Tie!";
  }else if (userChoice === 'paper' && compChoice === 'rock'){
    return output.innerHTML = "You win! Paper beats Rock";
  }else if (userChoice === 'rock' && compChoice === 'scissors'){
    return output.innerHTML = "You win! Rock beats Scissors";
  }else if (userChoice === 'scissors' && compChoice === 'rock'){
    return output.innerHTML = "You lose! ";
  }else if (userChoice === 'rock' && compChoice === 'paper'){
    return output.innerHTML = "You lose!";
  }else if (userChoice === 'paper' && compChoice === 'scissors'){
    return output.innerHTML = "You lose!";
  }else if (userChoice === 'scissors' || compChoice === 'paper'){
    return output.innerHTML = "You win!";
  }

}