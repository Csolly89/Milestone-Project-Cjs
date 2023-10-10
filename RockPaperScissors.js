// alert("Skynet is moments away from going live and taking over the entire internet to begin launching Nukes across the world and bring upon Judgment Day. John Connor has installed a backdoor to prevent Skynet from going live, a game of Rock, Paper & Scissors. Best 2 or 3 wins and if it seems like you may lose, Don't be afraid to break the traditional rules and make sure that Skynet Doesn't Win!!")

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

document.getElementById("Lava").addEventListener('click', () => {
  document.querySelector("#Endgame").style.display='block'
  alert("Skynet has gone back in time to prevent their loss.. Follow them and prevent Judgement day again")
  EndGame()
})

// random number generator to put a int value to the 3 options the computer(skynet) has to choose from
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

// function to check the input from the player(via text on the button they chose) and the value of the computer(via random number generator)
// to see who will be the victor and increase their score value if they have won
function checkWinner(player,computerSelection){

  switch(player){
    case 'Rock': 
      if(computerSelection === "Scissors"){
        increaseScore(playerscore)
        return "VICTORY!!"

        }
          else if(computerSelection === "Paper"){
            increaseScore(compscore)
            return "Judgement Day is near!!!";
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
              return "Judgement Day is near!!!";
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
            return "Judgement Day is near!!!";
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

// function to track and change score from string into an integer and to also track when and if the player loses to trigger an
// easter egg event to create an Instant win.....cant let skynet win...
function increaseScore(element){
  let score =  parseInt(element.innerText)
  score++
  element.innerText = score

  if(element == playerscore) Ls.length = 0
  if(element == compscore) Ls.push(1)
  console.log(Ls)
  if (playerscore.innerText == 2){document.querySelector("#Endgame").style.display='block'
  alert("Skynet has gone back in time to prevent their loss.. Follow them and prevent Judgement day again")
  EndGame()}
  else {document.querySelector("#Endgame").style.display='none'};
}

//  empty array to fill and track loses
 let Ls = []

// function to track if player has lost at all by tracking how long the array is in the originally empty variable Ls"losses"
// if the array gets to a certain length, can risk losing to skynet.. brings forward an instant win option to throw skynet terminal into the lava
 function lavaEasterEgg (){
  if (Ls.length === 1){
  document.querySelector('#easterEgg').style.display = 'block';
 } else {document.querySelector('#easterEgg').style.display = 'none';}
  
 }
 
//  Best 2 of 3 win statement.. after player has won 2 of 3 games or won via lava(instawin) alert comes across
// that skynet has gone back in time and must be followed to be stopped once again (reload the page)

function EndGame(){
  let restartButton = document.querySelector("#Endgame")
  restartButton.addEventListener('click', () => {
    location.reload();
  })
}
