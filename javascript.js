function getComputerChoice() {
    let choice;
    let roll = Math.floor(Math.random() * 3);

    switch (roll) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
    }

    return choice;
}

function rpsRound(playerSelection, computerSelection) {
    let result;
    let win = `You Win! ${playerSelection} beats ${computerSelection}!`;
    let tie = "Tie!";
    let lose = `You Lose! ${computerSelection} beats ${playerSelection}!`;

    playerSelection = playerSelection.toLowerCase()
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    result = tie;
                    break;
                case "paper":
                    result = lose;
                    break;
                case "scissors":
                    result = win;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    result = win;
                    break;
                case "paper":
                    result = tie;
                    break;
                case "scissors":
                    result = lose;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    result = lose;
                    break;
                case "paper":
                    result = win;
                    break;
                case "scissors":
                    result = tie;
            }
            break;
    }

    return result
}

function playerPrompt() {
    let choice = prompt("Rock, paper, scissors?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
    else {
        alert("invalid choice! choose rock, paper or scissors!");
        return playerPrompt();
    }
}

function game() {

    for (let cnt = 0; cnt < 5 ; cnt++)
    {
        let playerChoice = playerPrompt();
        let cpuChoice = getComputerChoice();

        console.log(playerChoice)
        console.log(rpsRound(playerChoice, cpuChoice))
    }
}

let winCount;
game()