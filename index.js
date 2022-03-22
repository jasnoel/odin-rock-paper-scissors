let computerPlay = () => {
    let nb = Math.floor(Math.random() * 3)
    if (nb == 0) {
        return "Rock"
    } else if (nb == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

let battle = (playerSelection, computerSelection) => {
    switch (playerSelection) {
        case 'rock': {
            if (computerSelection == 'rock') {
                return "Draw, you both chose rock"
            } else if (computerSelection == 'paper') {
                return "Lost, papers beats rock"
            } else {
                return "Win, rock beats scissors"
            }
        };
        case 'paper': {
            if (computerSelection == 'paper') {
                return "Draw, you both chose paper"
            } else if (computerSelection == 'scissors') {
                return "Lost, scissors beat paper"
            } else {
                return "Win, paper beats rock"
            }
        };
        case 'scissors': {
            if (computerSelection == 'scissors') {
                return "Draw, you both chose scissors"
            } else if (computerSelection == 'rock') {
                return "Lost, rock beats scissors"
            } else {
                return "Win, scissors beat paper"
            }
        };
        default: {
            return "Error: wrong playerSelection in switch case"
        }
    }
}

let round = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.trim().toLowerCase()
    computerSelection = computerSelection.trim().toLowerCase()
    let result = battle(playerSelection, computerSelection);
    
    return result
} 

console.log(round("SCISSRS", computerPlay()))
