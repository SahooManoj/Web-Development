function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
        case 0 : return "Rock";
        case 1 : return "Paper";
        case 2 : return "Scissor";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Tell your choice? Rock, Paper or Scissor");
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    let computer = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase();

    if (human === computer){
        console.log("It's a tie!");
    }
    else if (human === "Rock" && computer === "Paper"){
        console.log("You Lose! Paper Beats Rock");
        computerScore += 1;
    }
    else if (human === "Scissor" && computer === "Rock"){
        console.log("You Lose! Rock Beats Scissor");
        computerScore += 1;
    }
    else if (human === "Paper" && computer === "Scissor"){
        console.log("You Lose! Scissor Beats Paper");
        computerScore += 1;
    }
    else {
        console.log("You Won! " + human + " Beats " + computer);
        humanScore += 1;
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    }
}

playGame()

console.log("Final Score");
console.log("-----");
console.log("Human : " + humanScore + " Computer : " + computerScore)

if (humanScore > computerScore) {
    console.log("Congratulations! You Won!");
}
else if (humanScore < computerScore) {
    console.log("Unfortunately! You Lose!");
}
else {
    console.log("It's a tie");
}