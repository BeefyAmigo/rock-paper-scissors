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

function getHumanChoice() {
   let choice = prompt("rock, paper, or scissors?");
   console.log(choice)
}

getHumanChoice(console.log)

//let humanScore = 0
//et computerScore = 0

//unction playRound(humanChoice, computerChoice) {
   //humanChoice = humanChoice.toLowerCase();
    //if (getHumanChoice === 'rock' && num === 'scissors') {
    //    console.log("You Win! Rock beats scissors")
    //}
//}

//const humanSelection = getHumanChoice;
//const computerSelection = num;

//layRound(humanSelection, computerSelection);