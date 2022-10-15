function computerSelection() {
    const hand = ['Rock', 'Paper', 'Scissors'];
    return hand[Math.floor(Math.random() * hand.length )];
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(`Computer Selection: ${computerSelection}`);
    
    if (playerSelection == computerSelection) {
        return "Draw!!";
    }
    else if ( (playerSelection == "rock" && computerSelection == "scissors") ) {
        playerPoints++;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    
    else if ( (playerSelection == "scissors" && computerSelection == "paper") ) {
        playerPoints++;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }

    else if ( (playerSelection == "paper" && computerSelection == "rock") ) {
        playerPoints++;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    }

    else {
        computerPoints++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {

    for (let turn = 0; turn < 5; turn++) {
        let userSelection = prompt("Please Select: Rock, Paper, Scissors")
        console.log( `Winner: ${ playRound( userSelection, computerSelection() ) }` );
    }

    console.log(`Player Points: ${playerPoints}`);
    console.log(`Computer Points: ${computerPoints}`);

}

let playerPoints = 0;
let computerPoints = 0;

game();