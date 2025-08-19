function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let userChoice = prompt("What do you wanna choose? (rock, paper or scissors):").toLowerCase();
    return userChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            console.log("It was a Tie");
            return;
        }

        if (userChoice === "rock" && computerChoice === "paper") {
            console.log("You lose, paper beats rock");
            computerScore++;
        } else if (userChoice === "rock" && computerChoice === "scissors") {
            console.log("You won, rock beats scissors");
            humanScore++;
        } else if (userChoice === "paper" && computerChoice === "rock") {
            console.log("You won, paper beats rock");
            humanScore++;
        } else if (userChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose, scissors beats paper");
            computerScore++;
        } else if (userChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose, rock beats scissors");
            computerScore++;
        } else if (userChoice === "scissors" && computerChoice === "paper") {
            console.log("You won, scissors beats paper");
            humanScore++;
        }
    }


    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    
    console.log("\nFinal Result:");
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It’s a tie overall!");
    }
}


playGame();
