function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}

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

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What is your choice? (Rock, Paper, Scissors): ");
        playerSelection.toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
        console.log(computerScore);
        console.log(playerScore);
    }
}