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

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

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

    const btns = document.querySelectorAll("button");
    btns.forEach(button => {
        button.addEventListener("click", () => {
            
        const humanSelection = button.id;
        const results = document.querySelector('#results');
        const computer = document.querySelector('#computer');
        const score = document.querySelector('#score');
        const computerSelection = getComputerChoice();
        computer.textContent = 'Computer Selection: ' + computerSelection;
        results.textContent ='Results: ' + playRound(humanSelection, computerSelection);
        if (button.id === 'reset') {
            humanScore = 0;
            computerScore = 0;
        }
        if (humanScore === 5) {
            results.textContent = "Congrats You Win!!!";
        }
        else if (computerScore === 5) {
            results.textContent = 'You Lose!';
        }
        else if ((playRound(humanSelection, computerSelection) === ("You Win! Rock beats Scissors")) 
            || (playRound(humanSelection, computerSelection) === ("You Win! Paper beats Rock")) 
            || (playRound(humanSelection, computerSelection) === ("You Win! Scissors beats Paper"))) {
            humanScore++;
        }
        else if ((playRound(humanSelection, computerSelection) === ("You Lose! Paper beats Rock")) 
            || (playRound(humanSelection, computerSelection) === ("You Lose! Scissors beats Paper")) 
            || (playRound(humanSelection, computerSelection) === ("You Lose! Rock beats Scissors"))) {
            computerScore++;
        }
        score.textContent = 'Score: ' + `Player ${humanScore} VS Computer ${computerScore}`;
        });
    });
    
}
playGame();




