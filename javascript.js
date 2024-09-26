function getComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 3);

   if (randomNumber === 0){
    return 'rock'
   }else if (randomNumber === 1){
    return 'paper'
   }else {
    return 'scissors';
   }
}

function getHumanChoice() {
   let choice = prompt("rock, paper, or scissors?");

   return (choice);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        return("You Win! Rock beats Scissors");
    } else if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
        return("You Lose! Paper beats Rock");
    }else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
        return("You Win! Paper beats Rock");
    }else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
        return("You Lose! Scissors beats Paper");
    }else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
        return("You Win! Scissors beats Paper");
    }else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        return("You Lose! Rock beats Scissors");
    }else {
        return("Its a Tie");
    }
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`player ${humanScore} VS Computer ${computerScore}`)
        if ((playRound(humanSelection, computerSelection) === ("You Win! Rock beats Scissors")) || (playRound(humanSelection, computerSelection) === ("You Win! Paper beats Rock")) || (playRound(humanSelection, computerSelection) === ("You Win! Scissors beats Paper"))) {
            humanScore++;
        }
        else if ((playRound(humanSelection, computerSelection) === ("You Lose! Paper beats rock")) || (playRound(humanSelection, computerSelection) === ("You Lose! Scissors beats Paper")) || (playRound(humanSelection, computerSelection) === ("You Lose! Rock beats Scissors"))) {
            computerScore++;
        }

    }
    console.log("Game Over")
    if (humanScore > computerScore) {
        console.log("Congrats you Win!")
    } else if (humanScore < computerScore) {
        console.log("You'll get them next time Champ!")
    } else {
        console.log("It's a Tie!")
    }
}





