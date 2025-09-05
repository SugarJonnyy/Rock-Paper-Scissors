function getComputerChoice() {
    let rockPaperScissors = ["rock", "paper", "scissors"]
    return rockPaperScissors[Math.floor(Math.random() * (rockPaperScissors.length))]
}

let humanScore = 0
let computerScore = 0

const resultsDiv = document.getElementById('results')




function playRound(userChoice, computerChoice) {

    

    if (userChoice === computerChoice) {
        return "It was a tie, nobody won this round!"
    }

    if (userChoice === "rock" && computerChoice === "paper") {
        computerScore++
        return "You lost this round! paper beats rock"

    }

    if (userChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        return "You won this round! rock beats scissors"

    }

    if (userChoice === "paper" && computerChoice === "rock") {
        humanScore++
        return "You won this round! paper beats rock "

    }

    if (userChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        return "You lost this round! scissors beats paper"
    }

    if (userChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        return "You lost this round! rock beats scissors"
    }

    if (userChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        return "You won this round! scissors beats paper"
    }




}



const rockClicked = document.getElementById('rock');
const paperClicked = document.getElementById('paper');
const scissorsClicked = document.getElementById('scissors');

rockClicked.addEventListener('click', () => {

    let computerSelection = getComputerChoice()
    let result = playRound('rock', computerSelection)
    resultsDiv.textContent = result +
        ` | Human: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5) {
        resultsDiv.textContent = "🎉 Congrats! You won the Game. Final Score: Human " + humanScore + " - Computer " + computerScore;
        rockClicked.disabled = true;
        paperClicked.disabled = true;
        scissorsClicked.disabled = true;
    }

    if (computerScore === 5) {
        resultsDiv.textContent = "💻 Computer won the Game! Final Score: Human " + humanScore + " - Computer " + computerScore;
        rockClicked.disabled = true;
        paperClicked.disabled = true;
        scissorsClicked.disabled = true;
    }




});

paperClicked.addEventListener('click', () => {

    let computerSelection = getComputerChoice()
    let result = playRound('paper', computerSelection)
    resultsDiv.textContent = result +
        ` | Human: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5) {
        resultsDiv.textContent = "🎉 Congrats! You won the Game. Final Score: Human " + humanScore + " - Computer " + computerScore;
        rockClicked.disabled = true;
        paperClicked.disabled = true;
        scissorsClicked.disabled = true;
    }

    if (computerScore === 5) {
        resultsDiv.textContent = "💻 Computer won the Game! Final Score: Human " + humanScore + " - Computer " + computerScore;
        rockClicked.disabled = true;
        paperClicked.disabled = true;
        scissorsClicked.disabled = true;
    }



});

scissorsClicked.addEventListener('click', () => {

    let computerSelection = getComputerChoice()
    let result = playRound('scissors', computerSelection)
    resultsDiv.textContent = result +
        ` | Human: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5) {
        resultsDiv.textContent = "🎉 Congrats! You won the Game. Final Score: Human " + humanScore + " - Computer " + computerScore;
        rockClicked.disabled = true;
        paperClicked.disabled = true;
        scissorsClicked.disabled = true;
    }

    if (computerScore === 5) {
        resultsDiv.textContent = "💻 Computer won the Game! Final Score: Human " + humanScore + " - Computer " + computerScore;
        rockClicked.disabled = true;
        paperClicked.disabled = true;
        scissorsClicked.disabled = true;
    }


});



