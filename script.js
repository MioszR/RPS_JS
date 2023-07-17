function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * choice.length);
    return choice[random];
}


let playerScore = 0;
let computerScore = 0;
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let score = document.querySelector('#score');
let roundWinner = document.querySelector('#winner');
let reset = document.querySelector('.reset');
let compare = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return tie();
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
        return win();
        
    } else {
        return lose();
    }
}

let tie = () => {
    return winner.textContent = "We have tie, genntelman!"
}

let win = () => {
    playerScore++;
    return winner.textContent = "Oh yes! You win bro!"
}

let lose = () => {
    computerScore++;
    return winner.textContent = "Sorry man, you lose!"
}

let scoreBoard = (playerSelection) => {
    const computerSelection = getComputerChoice();
    compare(playerSelection, computerSelection);
    score.textContent = `Computer: ${computerScore} Player: ${playerScore}` 
}

let rockButton = () => {
    playerSelection = 'rock';
    scoreBoard(playerSelection);
}

let paperButton = () => {
    playerSelection = 'paper';
    scoreBoard(playerSelection);
}

let scissorsButton = () => {
    playerSelection = 'scissors';
    scoreBoard(playerSelection);
}

let resetButton = () => {
    computerScore = 0;
    playerScore = 0;
    winner.textContent = 'The winner will be show here.';
    score.textContent = `Computer: ${computerScore} Player: ${playerScore}`;
}



let main = () => {
    rock.addEventListener('click', rockButton);
    paper.addEventListener('click', paperButton);
    scissors.addEventListener('click', scissorsButton);
    reset.addEventListener('click', resetButton);
}

main();