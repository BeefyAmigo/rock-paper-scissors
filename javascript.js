function getComputerChoice(min, max) {
    let rndInt = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (rndInt < 2) {
        console.log('rock');
    } else if (rndInt > 2) {
        console.log('paper');
    } else {
        console.log('scissors')
    }
}

function getHumanChoice() {
   let choice = prompt("rock, paper, or scissors?");
   console.log(choice)
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
   //humanChoice = humanChoice.toLowerCase();
    if (humanSelection === 'rock') {
        console.log("You Win! Rock beats scissors");
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);