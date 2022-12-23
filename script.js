
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

// getPlayerChoice function works as expected.
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