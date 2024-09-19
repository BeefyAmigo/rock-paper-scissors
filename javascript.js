function getComputerChoice() {
    if (random(1, 3) < 2) {
        console.log('rock');
    } else if (random(1, 3) > 2) {
        console.log('paper');
    } else {
        console.log('scissors')
    }
}
function random(min, max) {
    return Math.floor(Math.random() * (3 - 1 +1)+1)
}

function getHumanChoice() {
   let choice = prompt("rock, paper, or scissors?");
   return (choice)
}
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You Win! Rock beats Scissors");
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You Lose! Paper beats Rock");
    }else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You Win! Paper beats Rock");
    }else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You Lose! Scissors beats Paper")
    }else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You Win! Scissors beats Paper")
    }else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You Lose! Rock beats Scissors")
    }else {
        console.log("Its a Tie")
    }
    
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);