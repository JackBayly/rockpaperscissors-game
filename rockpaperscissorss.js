//Random computer selection
function computerRandom() {
    let gameOp = ["rock", "paper", "scissors"];
    return gameOp[Math.floor(Math.random()*gameOp.length)];
    
}


//Scores and declaring player selection
let playerSelection;
let compScore=0;
let playerScore=0;

//One round of game
function round (playerSelection){
  
  let computerSelection = computerRandom();
  let result="";
 if ((playerSelection=="rock" && computerSelection=="scissors") || (playerSelection=="scissors" && computerSelection=="paper") || (playerSelection=="paper" && computerSelection=="rock")) {
  playerScore++;
  result =(`${playerSelection} beats ${computerSelection}. You win! Player Score= ${playerScore} and Computer Score =${compScore}`);
    
 } else if ((playerSelection=="rock" && computerSelection=="paper") || (playerSelection=="scissors" && computerSelection=="rock") || (playerSelection=="paper" && computerSelection=="scissors")) {
   compScore +=1;
   result= (`${computerSelection} beats ${playerSelection}. You lose! Player Score= ${playerScore} and Computer Score =${compScore}`);
   
} else if (playerSelection==computerSelection) {
  result= `It's a tie! Player Score= ${playerScore} and Computer Score =${compScore}`;
  
 }
 console.log(result);

}

//Plays game 5 times 
function game() {

    console.log(round(prompt("Rock, paper, or scissors?").toLowerCase()));
    console.log(round(prompt("Rock, paper, or scissors?").toLowerCase()));
    console.log(round(prompt("Rock, paper, or scissors?").toLowerCase()));
    console.log(round(prompt("Rock, paper, or scissors?").toLowerCase()));
    console.log(round(prompt("Rock, paper, or scissors?").toLowerCase()));
    if (compScore>playerScore) {
      console.log(`You lose, try again! Player Score= ${playerScore} and Computer Score =${compScore}`)
    } else if (playerScore>compScore) {
      console.log(`Congratulations! You win the game! Player Score= ${playerScore} and Computer Score =${compScore}`)
    } else (
      console.log(`Game over, it was a tie! Player Score= ${playerScore} and Computer Score =${compScore}`)
    )
  return;
  }
  
  //Starts Game
  game();