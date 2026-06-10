
var humanScore = 0;
var computerScore = 0;





function getComputerChoice(){
	let choice = Math.floor(Math.random() * 3);

	let valueChosen = "";
	if (choice == 0){
		valueChosen = "rock";
	}else if(choice == 1){
		valueChosen = "scissors";
	}else{
		valueChosen = "paper";
	}

	return valueChosen;
}



console.log(getComputerChoice());

function getHumanChoice(){
	let choice = prompt("Choose 1 for Rock, 2 for Scissors, and 3 for Paper!");
	let valueChosen = "";
	
	if (choice == 1){
		valueChosen = "rock";
	}else if(choice == 2){
		valueChosen = "scissors";
	}else{
		valueChosen = "paper";
	}

	return valueChosen;
}


console.log((getHumanChoice()));


































