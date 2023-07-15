function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}
let playerScore = 0;
let computerScore = 0;
rock = document.querySelector('.rock');
paper = document.querySelector('.paper');
scissors = document.querySelector('.scissors');
score = document.querySelector('#score');



function compare(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    } else if (playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
    } else {
        playerScore++;
    }
}

//function game(playRound) {
//    for (let i = 0; i < 5; i++) {
//        const playerSelection = prompt("What is your choice? (Rock, Paper, Scissors): ");
//        playerSelection.toLowerCase();
//        const computerSelection = getComputerChoice();
//        playRound(playerSelection, computerSelection)
//        console.log(computerScore);
//        console.log(playerScore);
//    }
//}

let rockButton = () => {
    playerSelection = "rock";
    const computerSelection = getComputerChoice();
    compare(playerSelection, computerSelection);
    score.textContent = `Computer: ${computerScore} Player: ${playerScore}`
    console.log(computerSelection)
    console.log(playerSelection)
    console.log('Computer: ' + computerScore, 'Player: ' + playerScore)
}

let paperButton = () => {
    playerSelection = "paper";
    const computerSelection = getComputerChoice();
    compare(playerSelection, computerSelection);
    console.log(computerSelection)
    console.log(playerSelection)
    console.log('Computer: ' + computerScore, 'Player: ' + playerScore)
}

let scissorsButton = () => {
    playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    compare(playerSelection, computerSelection)
    console.log(computerSelection)
    console.log(playerSelection)
    console.log('Computer: ' + computerScore, 'Player: ' + playerScore)
}



function game() {
        rock.addEventListener("click", rockButton);
        paper.addEventListener("click", paperButton);
        scissors.addEventListener("click", scissorsButton);
        if (playerScore === 5 && playerScore > computerScore) {
            return console.log("You win!")
        } else if (playerScore < computerScore && computerScore === 5) {
            return console.log("You lose!")
        }
}
game()






