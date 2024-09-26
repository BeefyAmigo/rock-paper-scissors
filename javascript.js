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
        console.log("You Win! Rock beats Scissors");
    } else if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper') {
        console.log("You Lose! Paper beats Rock");
    }else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
        console.log("You Win! Paper beats Rock");
    }else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors') {
        console.log("You Lose! Scissors beats Paper");
    }else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
        console.log("You Win! Scissors beats Paper");
    }else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        console.log("You Lose! Rock beats Scissors");
    }else {
        console.log("Its a Tie");
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

    }

    
    playRound(humanSelection, computerSelection);
    if ((playRound(humanChoice, computerChoice) === ("You Win! Rock beats Scissors")) || (playRound(humanSelection, computerSelection) === ("You Win! Paper beats Rock")) || (playRound(humanSelection, computerSelection) === ("You Win! Scissors beats Paper"))) {
        humanScore++;
    }
    else if ((playRound(humanChoice, computerChoice) === ("You Lose! Paper beats rock")) || (playRound(humanSelection, computerSelection) === ("You Lose! Scissors beats Paper")) || (playRound(humanSelection, computerSelection) === ("You Lose! Rock beats Scissors"))) {
        computerScore++;
    }
}



