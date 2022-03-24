const MAX_SCORE = 5;

const computerPlay = () => {
    let nb = Math.floor(Math.random() * 3)
    if (nb == 0) {
        return "Rock"
    } else if (nb == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

const battle = (playerSelection, computerSelection) => {
    switch (playerSelection) {
        case 'rock': {
            if (computerSelection == 'rock') {
                return "Draw, you both chose rock"
            } else if (computerSelection == 'paper') {
                return "Loose, papers beats rock"
            } else {
                return "Win, rock beats scissors"
            }
        };
        case 'paper': {
            if (computerSelection == 'paper') {
                return "Draw, you both chose paper"
            } else if (computerSelection == 'scissors') {
                return "Loose, scissors beat paper"
            } else {
                return "Win, paper beats rock"
            }
        };
        case 'scissors': {
            if (computerSelection == 'scissors') {
                return "Draw, you both chose scissors"
            } else if (computerSelection == 'rock') {
                return "Loose, rock beats scissors"
            } else {
                return "Win, scissors beat paper"
            }
        };
        default: {
            return "Error: wrong playerSelection in switch case"
        }
    }
}

const round = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.trim().toLowerCase()
    computerSelection = computerSelection.trim().toLowerCase()
    let result = battle(playerSelection, computerSelection);
  
    return result
}

const updateScores = (result) => {
    if (result.trim().toLocaleLowerCase().includes('win')) {
        playerScore += 1;
    } else if (result.trim().toLocaleLowerCase().includes('loose')) {
        computerScore += 1;
    }
}

const checkVictory = () => {
    if (playerScore >= MAX_SCORE || computerScore >= MAX_SCORE) {
        return true;
    } else {
        return false;
    }
}

let playerScore = 0;
let computerScore = 0;

const output = document.querySelector(".output h3");
const scores = document.querySelector(".output h2");
const controls = document.querySelector(".controls");

const playAgain = document.querySelector(".play-again");
playAgain.addEventListener('click', () => {
    controls.classList.remove("inactive");
    playAgain.classList.add("inactive");
    playerScore = 0;
    computerScore = 0;
    output.textContent = "Pick your play !"
    scores.textContent = `${playerScore} | ${computerScore}`
})

const buttons = document.getElementsByClassName('btn');
Array.from(buttons).forEach(btn => {
    btn.addEventListener('click', (e) => {
        let result = round(e.target.classList[1], computerPlay());
        updateScores(result);
        if (checkVictory()) {
            result = playerScore > computerScore ? "You won !" : "You lost :/"
            controls.classList.add("inactive");
            playAgain.classList.remove("inactive");
        }
        output.textContent = result;
        scores.textContent = `${playerScore} | ${computerScore}`
    })
});
