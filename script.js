var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  let valueChosen = "";
  if (choice == 0) {
    valueChosen = "rock";
  } else if (choice == 1) {
    valueChosen = "paper";
  } else {
    valueChosen = "scissors";
  }

  return valueChosen;
}

function getHumanChoice() {
  let choice = prompt("Choose rock, paper, or scissors!");

  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  const decision = document.querySelector(".winner");
  const humanScoreTxt = document.querySelector(".yourScore");
  const computerScoreTxt = document.querySelector(".computerScore");

  if (humanChoice == computerChoice) {
    decision.textContent =
      "Tie game. " + humanChoice + " ties with " + humanChoice + ".";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    decision.textContent =
      "You win! " + humanChoice + " beats " + computerChoice + "!";
    humanScore += 1;
    humanScoreTxt.textContent = "Your Score: " + humanScore;
  } else {
    decision.textContent =
      "You lose! " + humanChoice + " loses to " + computerChoice + ".";

    computerScore += 1;
    computerScoreTxt.textContent = "Computer Score: " + computerScore;
  }
  if (humanScore == 5) {
    decision.textContent = "Congratulations, you have won the match!";
    decision.style.color = "green";
    humanScore = 0;
    computerScore = 0;
    humanScoreTxt.textContent = "Your Score: 0";
    computerScoreTxt.textContent = "Computer Score: 0";
  } else if (computerScore == 5) {
    decision.textContent = "Oh no, the computa has won.";
    decision.style.color = "red";
    humanScore = 0;
    computerScore = 0;
    humanScoreTxt.textContent = "Your Score: 0";
    computerScoreTxt.textContent = "Computer Score: 0";
  }
}

function handleClick(event) {
  playRound(event.target.textContent, getComputerChoice());
}

const buttons = document.querySelectorAll(".buttons");

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
