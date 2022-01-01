//Scores and declaring player selection
let playerSelection;
let compScore = 0;
let playerScore = 0;

//Computer selection
function computerRandom() {
  let gameOp = ["Rock", "Paper", "Scissors"];
  return gameOp[Math.floor(Math.random() * gameOp.length)];

}

//One round of game
function round(playerSelection) {
  let r = document.getElementById('results');
  let result = "";
  let computerSelection = computerRandom();

  if (compScore == 5) {

    result += (`You lose, try again!<br>Player Score= ${playerScore}<br>Computer Score =${compScore}`);
    r.innerHTML = result;

  } else if (playerScore == 5) {

    result += (`Congratulations! You win the game! 
    <br>Player Score= ${playerScore}<br>Computer Score =${compScore}`);
    r.innerHTML = result;

  } else {
    if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Rock")) {
      playerScore++;
      result = (`${playerSelection} beats ${computerSelection}. You win!<br>Player Score= ${playerScore}<br>Computer Score =${compScore}`);

    } else if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Scissors" && computerSelection == "Rock") || (playerSelection == "Paper" && computerSelection == "Scissors")) {
      compScore += 1;
      result = (`${computerSelection} beats ${playerSelection}. You lose!<br> Player Score= ${playerScore}<br>Computer Score =${compScore}`);

    } else if (playerSelection == computerSelection) {
      result = `You and the computer played ${playerSelection}. It's a tie!<br>Player Score= ${playerScore}<br>Computer Score =${compScore}`;

    }
  }

  r.innerHTML = result;

}

//Play again button
const again = document.getElementById("play-again");
function reset() {
  compScore = 0;
  playerScore = 0;
  let r = document.getElementById('results');
  let result = "";
  r.innerHTML = result;
}
again.addEventListener("click", reset);


//Makes images into buttons for game 

document.getElementById('Rock').addEventListener("click", function () {
  round('Rock');
});

document.getElementById('Paper').addEventListener("click", function () {
  round('Paper');
});
document.getElementById('Scissors').addEventListener("click", function () {
  round('Scissors');
});

