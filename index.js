let computerPlay = () => {
    let nb = Math.floor(Math.random() * 3)
    console.log(nb)
    if (nb == 0) {
        return "Rock"
    } else if (nb == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(computerPlay())
