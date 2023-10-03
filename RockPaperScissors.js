const playerText = document.querySelector("#player1");
const computerText = document.querySelector("#skynet");
const resultText = document.querySelector("#outcome");
const choiceBtns = document.querySelectorAll(".yourChoice");
const compscore = document.querySelector('.compscore')
const playerscore = document.querySelector('.yourscore')

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
        increaseScore(playerscore)
       return "VICTORY!!"

        }
          else if(computerSelection === "Paper"){
            increaseScore(compscore)
            return "DOOM TO YOU";
            }
              else {
                return "DRAW"
                }
        
    case 'Paper':
      if(computerSelection === "Rock"){
        increaseScore(playerscore)
        return "VICTORY!!"
          }
            else if(computerSelection === "Scissors"){
              increaseScore(compscore)
              return "DOOM TO YOU";
              }
                else {
                  return "DRAW"
                  }
              
    case 'Scissors':
      if(computerSelection === "Paper"){
        increaseScore(playerscore)
        return "VICTORY!!"
        }
          else if(computerSelection === "Rock"){
            increaseScore(compscore)
            return "DOOM TO YOU";
            }
              else {
                return "DRAW"
               }
  }
}

function increaseScore(element){
  console.log("Calling increase score")
  let score =  parseInt(element.innerText)
  console.log(score)
  score++
  element.innerText = score
  
 }


// if element = playerscore, erase array data...if compscore push 1 to array...
// when array.length = 3 trigger css code display none to visible snd auto win

// datastacks-arrays - dynamically expand array - delete array after each loss so it'll take when it gets to 3 and triggers lava function
