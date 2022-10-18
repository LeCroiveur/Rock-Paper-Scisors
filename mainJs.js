function getComputerChoice() {
    let choix = "";
    let randNumb = Math.random() * (3 - 1) + 1;
    let z = Math.round(randNumb);
    if (z === 1) {
        choix = "Rock";
    }
    else if (z === 2) {
        choix = "Paper";
    }
    else {
        choix = "Scissors";

    }
    console.log("Computer " + choix);
    return choix.toLowerCase();
}


function playRound(playerSelection, computerSelection) {

    console.log("Ordinateur: " + pointo, + "\t" + "Joueur : ", pointj);
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        if (playerSelection === "paper" && computerSelection === "rock") {
            return "Player wins Paper beats Rock";
        } else {
            return "Computer wins Paper beats Rock";
        }
    }

    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            return "Player wins Rock beats Scissors";
        } else {
            return "Computer wins Rock beats Scissors";
        }
    }

    if (playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors") {
        if (playerSelection === "scissors" && computerSelection === "paper") {
            return "Player wins Scissors beats Paper";
        } else {
            return "Computer wins Scissors beats Paper";
        }
    }

    if (playerSelection === computerSelection) {
        return "It's a Draw";
    } else {
        return "May be you didn't type the right things"
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        const choixJoueur = prompt("Enter rock paper or scissors");
        const choixOrdi = getComputerChoice();
        console.log(playRound(choixJoueur, choixOrdi));

    }
}


game();