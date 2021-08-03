function computerRandom() {
  let gameOp = ["Rock", "Paper", "Scissors"];
  return gameOp[Math.floor(Math.random()*gameOp.length)];
  
}


//Scores and declaring player selection
let playerSelection;
let compScore=0;
let playerScore=0;

//Play again button
const j=document.getElementById("play-again");
function reload() {
  reload = location.reload();
}
j.addEventListener("click", reload, false);


//One round of game
function round (playerSelection){
let f= document.getElementById('results');
let computerSelection = computerRandom();
let result="";


if (compScore==5) {
  
  result+=(`You lose, try again! Player Score= ${playerScore} and Computer Score =${compScore}`);
    f.innerHTML=result;


  } else if (playerScore==5) {
   
    result+=(`Congratulations! You win the game! Player Score= ${playerScore} and Computer Score =${compScore}`);
    f.innerHTML=result;


  } else {
if ((playerSelection=="Rock" && computerSelection=="Scissors") || (playerSelection=="Scissors" && computerSelection=="Paper") || (playerSelection=="Paper" && computerSelection=="Rock")) {
playerScore++;
result =(`${playerSelection} beats ${computerSelection}. You win! Player Score= ${playerScore} and Computer Score =${compScore}`);
  
} else if ((playerSelection=="Rock" && computerSelection=="Paper") || (playerSelection=="Scissors" && computerSelection=="Rock") || (playerSelection=="Paper" && computerSelection=="Scissors")) {
 compScore +=1;
 result= (`${computerSelection} beats ${playerSelection}. You lose! Player Score= ${playerScore} and Computer Score =${compScore}`);
 
} else if (playerSelection==computerSelection) {
result= `It's a tie! Player Score= ${playerScore} and Computer Score =${compScore}`;

}}

f.innerHTML=result;

}



//makes buttons 

document.getElementById('Rock').addEventListener("click", function() {
round('Rock');
});

document.getElementById('Paper').addEventListener("click", function() {
round('Paper');
});
document.getElementById('Scissors').addEventListener("click", function() {
round('Scissors');
});

 