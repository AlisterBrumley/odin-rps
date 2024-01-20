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

function totalWinCheck(scores) {
    let winner = `you won 5 rounds, and won the game!`;
    let loser = `the computer won 5 rounds, you lost the game!`;
    if (scores[0] == 5) {
        return winner
    } else if (scores[1] == 5) {
        return loser
    }
}

function rpsRound(playerSelection, computerSelection) {
    let result;
    let win = "w";
    let tie = "t";
    let lose = "l";

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
                    break;
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
                    break;
                case "scissors":
                    result = tie;
                    break;
            }
            break;
    }
    return result;
}

const playerButtons = document.querySelectorAll(".playerButton");
const playerScore = document.querySelector(".playerScore")
const computerScore = document.querySelector(".computerScore")
const wBoxPlayerChoice = document.querySelector(".playerChoice")
const wBoxComputerChoice = document.querySelector(".computerChoice")
const wBoxResult = document.querySelector(".result")
const totalWinBox = document.querySelector(".totalWinBox")
const resetButton = document.querySelector(".resetButton")

playerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (playerScore.textContent == 5 || computerScore.textContent == 5) {
            return;
        }

        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = rpsRound(playerChoice, computerChoice);

        wBoxPlayerChoice.textContent = "You played " + playerChoice
        wBoxComputerChoice.textContent = "Computer played " + computerChoice;

        if (result === "w") {
            playerScore.textContent++;
            wBoxResult.textContent = "You win!";
        } else if (result === "l") {
            computerScore.textContent++;
            wBoxResult.textContent = "You lose!";
        } else {
            wBoxResult.textContent = "Tie!";
        };

        const scores = [playerScore.textContent, computerScore.textContent]
        totalWinBox.textContent = totalWinCheck(scores)
    });
});

resetButton.addEventListener("click", () => {
    location.reload();
})