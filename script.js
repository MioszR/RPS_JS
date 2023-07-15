function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}
let playerSelection = ''
let playerScore = 0;
let computerScore = 0;
const computerSelection = getComputerChoice();
rock = document.querySelector('.rock');
paper = document.querySelector('.paper');
scissors = document.querySelector('.scissors');

function playRound(playerSelection, computerSelection) {
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
    console.log(playerSelection)
}

let paperButton = () => {
    playerSelection = "paper";
    console.log(playerSelection)
}

let scissorsButton = () => {
    playerSelection = "scissors";
    console.log(playerSelection)
}



function game(playerSelection, computerSelection) {
    for (let i = 0; i <=5; i++) {
        if (rockButton.click()) {
            playerSelection = 'rock'
        } else if (paperButton.onclick()) {
            playerSelection = 'paper'
        } else if (scissorsButton.onclick()) {
            playerSelection = 'scissors'
        }
        playRound(playerSelection, computerSelection);
        console.log(computerSelection, playerSelection);
        console.log(computerScore, playerScore);
    }
}
rock.addEventListener("click", rockButton);
paper.addEventListener("click", paperButton);
scissors.addEventListener("click", scissorsButton);




