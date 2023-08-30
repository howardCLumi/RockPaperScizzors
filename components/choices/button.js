let y = 50;
let x = 50;

const reset = (element) => {
  y = 50;
  x = 50;
  console.log(reset);
  element.setAttribute("data-x", x);
  element.setAttribute("data-y", y);
  element.style.setProperty("--x", x);
  element.style.setProperty("--y", y);
};
const shineItUp = (element) => {
  const rect = element.getBoundingClientRect();
  const data = {
    top: rect.top,
    left: rect.left,
    bottom: rect.top + rect.height,
    right: rect.left + rect.width,
    width: rect.width,
    height: rect.height
  };

  element.addEventListener("mouseout", () => {
    reset(element);
  });
  element.addEventListener("mousemove", (e) => {
    if (
      e.clientX + 20 >= data.left &&
      e.clientX - 20 <= data.right &&
      e.clientY + 20 >= data.top &&
      e.clientY - 20 <= data.bottom
    ) {
      x = Math.round((100 / data.width) * (e.clientX - data.left));
      y = Math.round((100 / data.height) * (e.clientY - data.top));
      element.setAttribute("data-x", x);
      element.setAttribute("data-y", y);
      element.style.setProperty("--x", x);
      element.style.setProperty("--y", y);
    } else {
      reset(element);
    }
  });
};

const shiners = document.querySelectorAll(".shine");
shiners.forEach((shiner) => {
  shineItUp(shiner);
});

const rock = document.getElementById("Rockbutton");
const paper = document.getElementById("Paperbutton");
const scissor = document.getElementById("Scissorbutton");

rock.addEventListener("click", function() {
    PlayGame("rock");
})
paper.addEventListener("click", function() {
    PlayGame("paper");
})
scissor.addEventListener("click", function() {
    PlayGame("scissor");
})

//scoreboard javascript

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

//gaming logic

function ComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
  
    if (choice === 0) {
      return "rock";
    } else if (choice === 1) {
      return "paper";
    } else {
      return "scissor";
    }
  }
  function PlayRound(playerChoice) {
    const aiChoice = ComputerChoice();
    const weapons = {
      rock: { weakTo: "paper", strongTo: "scissor" },
      paper: { weakTo: "scissor", strongTo: "rock" },
      scissor: { weakTo: "rock", strongTo: "paper" },
    };
  
    if (weapons[playerChoice].strongTo === aiChoice) {
      return "Win";
    } else if (weapons[playerChoice].weakTo === aiChoice) {
      return "Lose";
    } else {
      return "Tie";
    }
  }
  function PlayGame(PlayerChoice) {
  
      var outcome = PlayRound(PlayerChoice);
      if (outcome === "Tie") {
        alert("ze tie!");
      } else {
        if (outcome === "Win") {
          alert("ze W!");
          updatePlayerScore();
        } else {
          alert("ze L!");
          updateComputerScore();
        }
      }
  }
  
  
