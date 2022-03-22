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

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let historic = [];
    while (playerScore < 3 && computerScore < 3) {
        let playerPlay = prompt("Enter rock paper or scissors").trim().toLocaleLowerCase();
        let result = round(playerPlay, computerPlay())
        if (result.trim().toLocaleLowerCase().includes('win')) {
            playerScore += 1;
        } else if (result.trim().toLocaleLowerCase().includes('loose')) {
            computerScore += 1;
        }
        historic.push(result);
        console.log(result);
    }
    if (playerScore >= 3) {
        console.log("**** YOU WON THE BEST OF 5 :D ****");
    } else if (computerScore >= 3) {
        console.log("**** YOU LOST THE BEST OF 5 :c ****")
    }
}

game()