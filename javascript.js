function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}
    const rndInt = getComputerChoice(1, 3);
    
    let num = rndInt
    if (num < 2) {
        console.log('rock');
    } else if (num > 2) {
        console.log('paper');
    } else {
        console.log('scissors')
    }

let getHumanChoice = prompt("rock, paper, or scissors?")

if ( getHumanChoice === "rock" ) {
    console.log ('rock');
} else if ( getHumanChoice === "paper" ) {
    console.log ('paper');
} else if ( getHumanChoice === "scissors") {
    console.log('scissors')
}

let humanScore = 0
let computerScore = 0