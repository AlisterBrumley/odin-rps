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

function totalWinCheck(wins) {
    let winner = `you won ${wins} out of 5 rounds, and won the game!`;
    let loser = `you only won ${wins} out of 5 rounds, and lost the game!`;
    if (wins >= 3) {
        return winner;
    } else {
        return loser;
    }
}

function rpsRound(playerSelection, computerSelection) {
    let result;
    let countUp = 0;
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
                    countUp++;
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    result = win;
                    countUp++;
                    break;
                case "paper":
                    result = tie;
                    break;
                case "scissors":
                    result = lose;
                    break;
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    result = lose;
                    break;
                case "paper":
                    result = win;
                    countUp++;
                    break;
                case "scissors":
                    result = tie;
                    break;
            }
            break;
    }
    console.log(result);
    return countUp;
}

function game() {
    let winCount = 0;

    for (let cnt = 0; cnt < 5; cnt++) {
        let playerChoice = playerPrompt();
        let cpuChoice = getComputerChoice();

        //console.log(playerChoice)
        if (rpsRound(playerChoice, cpuChoice) === 1) {
            winCount++;
        }
        //console.log(winCount)
    }
    //console.log(winCount)
    let result = totalWinCheck(winCount);
    console.log(result)
    alert(result);
}

game()