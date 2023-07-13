function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

let playerScore = 0;
let computerScore = 0;

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

const container = document.querySelector('#container');

const rockButton = document.createElement('button');
rockButton.classList.add('rockButton');
rockButton.textContent = 'Rock';
rockButton.addEventListener('click', () => {
    playerSelection = "rock";
    alert(playerSelection)
})
const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissorsButton');
scissorsButton.textContent = 'scissors';
scissorsButton.addEventListener('click', () => {
    playerSelection = "scissors";
    alert(playerSelection)
})
const paperButton = document.createElement('button');
paperButton.classList.add('paperButton');
paperButton.textContent = 'Paper';
paperButton.addEventListener('click', () => {
    playerSelection = 'paper'
    alert(playerSelection)
})

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);









