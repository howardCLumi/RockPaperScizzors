const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

function updatePlayerScore() {
    playerScore++;
    playerScoreElement.textContent = playerScore;
  }

function updateComputerScore() {
    computerScore++;
    computerScoreElement.textContent = computerScore;
}