function computerSelection() {
    const random123 = Math.floor(Math.random() * 3 + 1);
    
    if (random123 === 1) {
        return "Rock";
    }else if (random123 === 2) {
        return "Paper";
    }else {
        return "Scissors";
    };
};

function playRound(e) {
    announcement = document.querySelector('#announcement');
    playerScore = document.querySelector('#player-score');
    computerScore = document.querySelector('#computer-score');
    computer = computerSelection();
    player = e.target.classList.value;
    player = player.slice(8);
    if (computer === player) {
        announcement.textContent = "Draw!";
        playerScore.textContent = `${++playerScoreCal}`;
        computerScore.textContent = `${++computerScoreCal}`;
        return 2;
    }else if (computer === "Rock" && player === "Paper") {
        announcement.textContent = "You win!";
        playerScore.textContent = `${++playerScoreCal}`;
        return 1;
    }else if (computer === "Paper" && player === "Scissors") {
        announcement.textContent = "You win!";
        playerScore.textContent = `${++playerScoreCal}`;
        return 1;
    }else if (computer === "Scissors" && player === "Rock") {
        announcement.textContent = "You win!";
        playerScore.textContent = `${++playerScoreCal}`;
        return 1;
    }else if (computer === "Paper" && player === "Rock") {
        announcement.textContent = "You Lose!";
        computerScore.textContent = `${++computerScoreCal}`;
        return 0;
    }else if (computer === "Scissors" && player === "Paper") {
        announcement.textContent = "You Lose!";
        computerScore.textContent = `${++computerScoreCal}`;
        return 0;
    }else if (computer === "Rock" && player === "Scissors"){
        announcement.textContent = "You Lose!";
        computerScore.textContent = `${++computerScoreCal}`;
        return 0;
    }else {
        console.log("Please choose between Rock, Paper, or scissors.");
        return -1;
    };
};

function game(e) {
    const maxScore = Math.max(playerScoreCal, computerScoreCal);
        const winner = document.querySelector('#winner');
        playRound(e);
        if (playerScoreCal === 5 || computerScoreCal === 5) {
            gameOver.style.zIndex = "999";
            if (playerScoreCal > computerScoreCal) {
                winner.textContent = "YOU WIN! CONGRATULATION!!"
            }else if (playerScoreCal === computerScoreCal) {
                winner.textContent = "DRAW! BEGINNERS LUCK..."
            }else {
                winner.textContent = "YOU LOST! BETTER LUCK NEXT TIME..."
            };
            playerScoreCal = 0;
            computerScoreCal = 0;
        };
};

let announcement = "";
let playerScore = "";
let computerScore = "";
let computer = "";
let playerScoreCal = 0;
let computerScoreCal = 0;
const choices = document.querySelectorAll('.clicker');
const tryAgain = document.querySelector('#try-again');
const gameOver = document.querySelector('#gameover-container');

choices.forEach(choice => {
    choice.addEventListener('click', game);
});

tryAgain.addEventListener('click', (e) => {
    gameOver.style.zIndex = "-999";
    computerScore.textContent = "0";
    playerScore.textContent = "0";
    announcement.textContent = "Choose Your Weapon.";
});