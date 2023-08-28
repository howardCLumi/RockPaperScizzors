function ComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scizzors";
  }
}
function PlayerChoice() {
  var choice = prompt("Rock, Paper, or Scizzor?", "Choice");
  return choice.toLowerCase();
}
function PlayRound() {
  const userChoice = PlayerChoice();
  const aiChoice = ComputerChoice();
  const weapons = {
    rock: { weakTo: "paper", strongTo: "scizzors" },
    paper: { weakTo: "scizzors", strongTo: "rock" },
    scizzors: { weakTo: "rock", strongTo: "paper" },
  };

  if (weapons[userChoice].strongTo === aiChoice) {
    return "Win";
  } else if (weapons[userChoice].weakTo === aiChoice) {
    return "Lose";
  } else {
    return "Tie";
  }
}
function PlayGame() {
  var playerScore = 0;
  var computerScore = 0;
  var count = 0;

  while (count < 5) {
    var outcome = PlayRound();
    alert(outcome);
    if (outcome === "Tie") {
      continue;
    } else {
      count += 1;

      if (outcome === "Win") {
        playerScore += 1;
      } else {
        computerScore += 1;
      }
    }
  }

  if (playerScore === 3) {
    alert("You Won!");
  } else {
    alert("You suck");
  }
}

//PlayGame();
