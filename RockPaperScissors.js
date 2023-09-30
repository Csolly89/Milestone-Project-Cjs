const playerText = document.querySelector("#player1");
const computerText = document.querySelector("#skynet");
const resultText = document.querySelector("#outcome");
const choiceBtns = document.querySelectorAll(".yourChoice");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Skynet: ${computer}`;
    resultText.textContent = checkWinner();
}));





// Save for easter egg selection
// let easterEggSelection = [
//   {
//     name: 'ROCK ',
//     beats: 'SCISSORS','ROCK':'PAPER'
//   }

// ]

function computerTurn(){

  const randNum = Math.floor(Math.random() * 3 ) + 1

  switch(randNum){
    case 1:
      computer = "ROCK";
      beats = "SCISSORS"
      break;
    case 2:
      computer = "PAPER"
      beats = "ROCK"
      break;
    case 3:
      computer = "SCISSORS"
      beats = "PAPER"
      break;
  }
}

function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER");    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS");    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK");    }
}