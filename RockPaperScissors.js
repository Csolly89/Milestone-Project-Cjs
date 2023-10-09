const playerText = document.querySelector("#player1");
const computerText = document.querySelector("#skynet");
const resultText = document.querySelector("#outcome");
const choiceBtns = document.querySelectorAll(".yourChoice");

const compscore = document.querySelector('.compscore')
const playerscore = document.querySelector('.yourscore')

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerSlct = computerSelection();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Skynet: ${computerSlct}`;
    resultText.textContent = checkWinner(player, computerSlct);
    lavaEasterEgg()
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
            return "Judgement Day has come!!!";
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
              return "Judgement Day has come!!!";
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
            return "Judgement Day has come!!!";
            }
              else {
                return "DRAW"
               }

    case 'Lava':
        default:
        increaseScore(playerscore)
        return "Victory!!"
                
  }
}

function increaseScore(element){
  let score =  parseInt(element.innerText)
  score++
  element.innerText = score
  
  if(element == playerscore) Ls.length = 0
  if(element == compscore) Ls.push(1)
  console.log(Ls)
}

//  empty array to fill and track 
 let Ls = []

 function lavaEasterEgg (){
  if (Ls.length === 2){
  document.querySelector('#easterEgg').style.display = 'block';
 } else {document.querySelector('#easterEgg').style.display = 'none'}

 }
 
//  Best 2 of 3 win statement.. after player has won 2 of 3 games or won via lava(instawin) alert comes across
// that skynet has gone back in time and must be followed to be stopped once again (reload the page)

  let restartButton = document.querySelector("#Endgame")
  if (playerscore == 2){document.querySelector("#Endgame").style.display='block';
    alert("Skynet has gone back in time to prevent their loss.. Follow them and prevent Judgement day again")};
  restartButton.addEventListener('click', () => {
    location.reload();
  })
