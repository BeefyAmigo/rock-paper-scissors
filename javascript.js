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



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

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

    playRound(humanSelection, computerSelection);

    if ((playRound(humanChoice, computerChoice) === "You Win! Rock beats Scissors" || "You Win! Paper beats Rock" || "You Win! Scissors beats Paper")) {
        return humanScore++;
    }
    else if ((playRound(humanChoice, computerChoice) === "You Lose! Paper beats rock" || "You Lose! Scissors beats Paper" || "You Lose! Rock beats Scissors")) {
        return computerScore++;
    }

    function finalScore() {
        if (humanScore = 1){
            console.log("Congrats you Win!");
        } else if (computerScore = 1) {
            console.log("Oh No you Lose!");
        }
    }
    return finalScore();
    
}



