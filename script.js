function getComputerChoice() {
    let rockPaperScissors = ["rock", "paper", "scissors"]
    return rockPaperScissors[Math.floor(Math.random() * (rockPaperScissors.length))]
}



function getHumanChoice() {
    let humanChoice = prompt("what's you wanna choose? (rock or paper or scissors)")
    return humanChoice
}



let humanScore = 0
let computerScore = 0


function playGame() {

    function playRound(userChoice, computerChoice) {

        console.log(`\nYou chose ${userChoice} and computer chose ${computerChoice}!!`)

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


    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        const winner = (playRound(humanSelection, computerSelection))

        console.log(winner)
        console.log(`Human score: ${humanScore} and Computer score: ${computerScore}`)

        if(i===4){
            if(humanScore > computerScore){
                console.log("\nCONGRATS! You won the game")
            }else{
                console.log("\nComputer won the game, you lost!")
            }

            if(humanScore == computerScore){
                console.log("\nNobody won the game, score is same at the end.")
            }
        }

    }

}

console.log(playGame())
