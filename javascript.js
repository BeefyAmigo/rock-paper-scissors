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
//function getHumanChoice() {
   //let choice = prompt("rock, paper, or scissors?");

   //return (choice);
//}

//Remove logic that plays exactly 5 rounds

//create 3 buttons, one for each selection

//Add an event listener to the buttons that call your playRound function with the
//correct playerSelection every time a button is clicked

//Add div for displaying results and change all of your console.logs in DOM methods


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    //const scissorBtn = document.querySelector('#scissors');
    //const paperBtn = document.querySelector('#paper');
    //const rockBtn = document.querySelector('#rock');
    
    //let container = document.querySelector('#container');

    //container.addEventListener('click', (event) => {
        //let target = event.target;

        //switch(target.id) {
            //case 'rock':
                //alert(rockBtn.id);
                //break;
            //case 'paper':
                //alert(paperBtn.id);
                //break;
            //case 'scissors':
                //alert(scissorBtn.id);
                //break;
        //}
    //});
    console.log()

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

    //for (let i = 0; i < 5; i++){
    const btns = document.querySelectorAll("button");
    btns.forEach(button => {
        button.addEventListener("click", () => {
            
        const humanSelection = button.id;
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(humanSelection, computerSelection));
        if ((playRound(humanSelection, computerSelection) === ("You Win! Rock beats Scissors")) 
            || (playRound(humanSelection, computerSelection) === ("You Win! Paper beats Rock")) 
            || (playRound(humanSelection, computerSelection) === ("You Win! Scissors beats Paper"))) {
            humanScore++;
        }
        else if ((playRound(humanSelection, computerSelection) === ("You Lose! Paper beats Rock")) 
            || (playRound(humanSelection, computerSelection) === ("You Lose! Scissors beats Paper")) 
            || (playRound(humanSelection, computerSelection) === ("You Lose! Rock beats Scissors"))) {
            computerScore++;
        }
        console.log(`Player ${humanScore} VS Computer ${computerScore}`)
        });
    });
    //}
    console.log("Game Over")
    console.log(`Player ${humanScore} VS Computer ${computerScore}`)
    if (humanScore > computerScore) {
       console.log("Congrats you Win!");
    } else if (humanScore < computerScore) {
        console.log("You'll get them next time Champ!");
    } else {
       console.log("It's a Tie!");
    }
}
playGame();




