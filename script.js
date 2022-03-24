let result = game();

console.log(result);

// THE COMPUTER SELECT ROCK, PAPER or SCISSORS RANDOMLY
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 4);

    if (randomNumber <= 1) {
        return 'rock';
    } else if (randomNumber > 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//THIS FUNCTION RETURNS THE WINNER IN ONE ROUND
function playRound(playerSelection, computerSelection) {
    

    switch (playerSelection) {
        case "rock":
            if (computerSelection === 'rock') {
                return 'Draw';
            } else if (computerSelection === 'paper') {
                return 'You lose! Paper beats Rock';
            } else {
                return 'You win! Rock beats scissors';
            }
        
        case ('paper'):
            if (computerSelection === 'paper') {
                return 'Draw';
            } else if (computerSelection === 'scissors') {
                return 'You lose! scissors beats paper';
            } else {
                return 'You win! paper beats rock';
            }
        
        case ('scissors'):
            if (computerSelection === 'scissors') {
                return 'Draw';
            } else if (computerSelection === 'rock') {
                return 'You lose! rock beats scissors';
            } else {
                return 'You win! scissors beats paper';
            }
        default :
            console.log('invalid user play!')
    }        
}

// THIS FUNCTION RETURNS THE WINNER EACH ROUND FOR FIVE ROUNDS
function game() {
    let playerInput;
    let playerSelection;
    let computerSelection;
    let result;
    for (let i = 0; i < 5; i++) {
        playerInput = prompt('Choose rock, paper or scissors: ');
        playerSelection = playerInput.toLocaleLowerCase();
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);

        console.log(result);
    }
    console.log('Game Over!');
}