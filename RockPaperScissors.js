const playerText = document.querySelector("#player1");
const computerText = document.querySelector("#skynet");
const resultText = document.querySelector("#outcome");
const choiceBtns = document.querySelectorAll(".yourChoice");


let player;
let computer;
let result;

let humanWon = false;
let compWon = false;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerSlct = computerSelection();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Skynet: ${computerSlct}`;
    resultText.textContent = checkWinner(player, computerSlct);
}));

function computerSelection(){
  const randNum = Math.floor(Math.random() * 3 )
    if (randNum === 0) {
      return "Rock"
    } else if (randNum === 1){
      return "Paper"
      } else {
          return "Scissors"
        }
}

function checkWinner(player,computerSelection){

  switch(player){
    case 'Rock': 
      if(computerSelection === "Scissors"){
       humanWon = true;
          return "VICTORY!!"
        }
          else if(computerSelection === "Paper"){
            compWon = true;
            return "DOOM TO YOU";
            }
              else {
                return "DRAW"
                }
        
    case 'Paper':
      if(computerSelection === "Rock"){
        humanWon = true;
          return "VICTORY!!"
          }
            else if(computerSelection === "Scissors"){
              compWon = true;
                return "DOOM TO YOU";
              }
                else {
                  return "DRAW"
                  }
              
    case 'Scissors':
      if(computerSelection === "Paper"){
        humanWon = true;
          return "VICTORY!!"
        }
          else if(computerSelection === "Rock"){
            compWon = true;
            return "DOOM TO YOU";
            }
              else {
                return "DRAW"
               }
  }

if (humanWon) increaseScore(playerscore)
if (compWon) increaseScore(compscore)
}

function increaseScore(compscore,playerscore){
 compscore.innerText = parseInt(compscore.innerText) ++
 playerscore.innerText = parseInt(playerscore.innerText) ++
}

const compscore = document.querySelector('.compscore')
console.log(compscore)
const playerscore = document.querySelector('.yourscore')
console.log(playerscore)

// datastacks-arrays - dynamically expand array - delete array after each loss so it'll take when it gets to 3 and triggers lava function
