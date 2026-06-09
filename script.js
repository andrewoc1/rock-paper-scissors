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










