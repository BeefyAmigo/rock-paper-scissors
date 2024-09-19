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
   console.log(choice)
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanSelection === 'rock') {
        console.log("You Win! Rock beats scissors");
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);