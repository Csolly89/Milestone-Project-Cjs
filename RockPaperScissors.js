const playerText = document.querySelector("#player1");
const computerText = document.querySelector("#skynet");
const resultText = document.querySelector("#outcome");
const choiceBtns = document.querySelectorAll(".yourChoice");
let player;
let computer;
let result;

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
      return "ROCK"
    } else if (randNum === 1){
      return "PAPER"
      } else {
          return "SCISSORS"
        }
}

function checkWinner(player,computerSelection){

  switch(player){
    //rock
    case 'ROCK': 
      if(computerSelection === "SCISSORS"){
        //score++;
          return "VICTORY!!"
        }
          else if(computerSelection === "PAPER"){
            //score--;
            return "DOOM TO YOU";
            }
              else {
                return "DRAW"
                }
        
    // paper
    case 'PAPER':
      if(computerSelection === "ROCK"){
        //score++;
          return "VICTORY!!"
          }
            else if(computerSelection === "SCISSORS"){
             //score--;
                return "DOOM TO YOU";
              }
                else {
                  return "DRAW"
                  }
              
    // scissors
    case 'SCISSORS':
      if(computerSelection === "PAPER"){
        //score++;
          return "VICTORY!!"
        }
          else if(computerSelection === "ROCK"){
            //score--;
            return "DOOM TO YOU";
            }
              else {
                return "DRAW"
               }
              
  }
}


// datastacks-arrays - dynamically expand array - delete array after each loss so it'll take when it gets to 3 and triggers lava function
// import-export js scripts from to another for lava function at the end
