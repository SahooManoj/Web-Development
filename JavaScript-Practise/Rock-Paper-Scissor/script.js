let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissor";
    }
}

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
    let computer = computerChoice;

    let resultMessage = "";

    if (human === computer){
        resultMessage = "It's a tie!";
    }
    else if (
        (human === "Rock" && computer === "Paper") ||
        (human === "Scissor" && computer === "Rock") ||
        (human === "Paper" && computer === "Scissor")
    ){
        resultMessage = `You Lose! ${computer} beats ${human}`;
        computerScore += 1;
    }
    else {
        resultMessage = `You Won! ${human} beats ${computer}`;
        humanScore += 1;
    }

    updateScore(resultMessage);

    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

function updateScore(resultMessage) {
    let scoreDisplay = document.querySelector('.score');
    if (!scoreDisplay) {
        scoreDisplay = document.createElement('div');
        scoreDisplay.classList.add('score');
        document.querySelector('#container').appendChild(scoreDisplay);
    }
    scoreDisplay.textContent = `Human: ${humanScore} Computer: ${computerScore}`;

    let messageDisplay = document.querySelector('.message');
    if (!messageDisplay) {
        messageDisplay = document.createElement('div');
        messageDisplay.classList.add('message');
        document.querySelector('#container').appendChild(messageDisplay);
    }
    messageDisplay.textContent = resultMessage;
}

function endGame() {
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("content");

    const header = document.createElement("h2");
    header.classList.add("header");
    header.textContent = "Game Over";

    const outcome = document.createElement("span");
    outcome.classList.add("outcome");
    outcome.textContent = humanScore > computerScore ? "Congratulations! You Won!" : "Unfortunately! You Lose!";

    resultContainer.append(header, outcome);

    const container = document.querySelector("#container");
    container.appendChild(resultContainer);

    document.querySelectorAll('button').forEach(button => button.disabled = true);
}

function initGame() {
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissor = document.querySelector("#scissor");

    rock.onclick = () => playRound("rock", getComputerChoice());
    paper.onclick = () => playRound("paper", getComputerChoice());
    scissor.onclick = () => playRound("scissor", getComputerChoice());
}

window.onload = initGame;
