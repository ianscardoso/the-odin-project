/*
function game() {
    let rounds = 5;
    let winner;
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let result;

    for (let i = 0; i < rounds; i++) {
        console.log(`ROUND ${i + 1}`)

        playerSelection = prompt("Choose rock, paper or scissors: ").toUpperCase();
        winner = playRound(playerSelection, computerPlay())

        if (winner == "player")
            playerScore++;
        else if (winner == "computer")
            computerScore++;

        console.log(`Round Winner: ${winner}`);
        console.log(`Player Score: ${playerScore} || Computer Score: ${computerScore}\n####################################`);
    }

    if (playerScore > computerScore)
        result = `YOU WIN! ${playerScore} VS ${computerScore}`;
    else if (computerScore > playerScore)
        result = `YOU LOSE! ${computerScore} VS ${playerScore}`;
    else
        result = `IT'S A TIE! ${playerScore} VS ${computerScore}`;

    return result;
}
*/

function playRound(playerSelection, computerSelection) {
    let playerWins;
    let draw;
    let result;
    let winner;


    if (playerSelection != computerSelection) {
        switch (playerSelection) {
            case "ROCK":
                if (computerSelection == "SCISSORS")
                    playerWins = true;
                break;
            case "PAPER":
                if (computerSelection == "ROCK")
                    playerWins = true;
                break;
            case "SCISSORS":
                if (computerSelection == "PAPER")
                    playerWins = true;
                break;
        }
    }
    else {
        draw = true;
    }

    if (playerWins) {
        result = `YOU WIN! ${playerSelection} beats ${computerSelection}`;
        winner = "player";
    }
    else if (draw) {
        result = `IT'S A TIE! ${playerSelection} equals ${computerSelection}`;
        winner = "draw";
    }
    else {
        result = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
        winner = "computer";
    }

    console.log(`Player selection: ${playerSelection} \nComputer selection: ${computerSelection}\n`);
    console.log(`${result}\n`);

    return winner;
}

function computerPlay() {
    let methodValue1 = Math.random() * 3;
    let random = Math.floor(methodValue1);
    let choice = '';

    switch (random) {
        case 0:
            choice = "ROCK";
            break;
        case 1:
            choice = "PAPER";
            break;
        case 2:
            choice = "SCISSORS";
            break;
    }

    return choice;
}

console.log(game());
