//getComputerChoice function works as expected.
function getComputerChoice() {
   let random123 = Math.floor(Math.random()*3+1);
   if (random123 === 1) {
    return "Rock";
   } else if (random123 === 2) {
    return "Paper";
   } else {
    return "Scissors";
   }
}

//getPlayerChoice function works as expected.
function getPlayerChoice(string) {
    let strLower = string.toLowerCase();
    return strLower.charAt(0).toUpperCase() + strLower.slice(1);
}

//playRound function works as expected.
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return 2;
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        return 1;
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        return 1;
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        return 1;
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return 0;
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return 0;
    } else if (computerSelection === "Rock" && playerSelection === "Scissors"){
        return 0;
    } else {console.log("Please choose between Rock, Paper, or scissors.")}
}

//game function works as expected.
function game() {
    let playerInput;
    let playerSelection;
    let computerSelection;
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerInput = prompt("Type your rock, paper, or scissors: ");
        playerSelection = getPlayerChoice(playerInput);
        computerSelection = getComputerChoice();
        const round = playRound(computerSelection, playerSelection);
        if (round === 1) {
            ++playerScore;
            console.log("You win the round!");
        } else if (round === 0) {
            ++computerScore;
            console.log("You lose the round!");
        } else {
            ++playerScore;
            ++computerScore;
            console.log("It's a tie, this round!");
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    }else if (playerScore === computerScore) {
        console.log("It's a tie, this game!");
    }else {
        console.log("You lose the game!");
    }

    return `Player|${playerScore}:${computerScore}|Computer`;
}

console.log(game());