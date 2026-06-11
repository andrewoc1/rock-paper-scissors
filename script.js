var humanScore = 0;
var computerScore = 0;


function getComputerChoice(){
	let choice = Math.floor(Math.random() * 3);

	let valueChosen = "";
	if (choice == 0){
		valueChosen = "rock";
	}else if(choice == 1){
		valueChosen = "paper";
	}else{
		valueChosen = "scissors";
	}

	return valueChosen;
}



function getHumanChoice(){
	let choice = prompt("Choose rock, paper, or scissors!");
	
	return choice;
}



function playRound(humanChoice, computerChoice){

	humanChoice = humanChoice.toLowerCase();
	
	if (humanChoice == computerChoice){
		console.log("Tie game. You both chose " + computerChoice + ".");
	}else if((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")){
		console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
		humanScore += 1;
	}else{
		console.log("You lose! " + humanChoice + " loses to " + computerChoice + "!");
		computerScore += 1;
	}

}



function playGame(){

	let round = 1;
	while (round <= 5){
		playRound(getHumanChoice(), getComputerChoice());
		console.log("Your score: " + humanScore + ". " + "Computer score: " + computerScore + ".");
		round++;	
	} 

}

playGame();












