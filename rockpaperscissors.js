////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

   move = move || getInput(); {
   console.log(‘player chose’ + playerMove);
   return move; 
}

}

function getComputerMove(move) {
 
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
var computerMove;
  move = move || randomPlay(); {
  console.log(‘Computer chose’ + computerMove);
  return move; 
  
}
}

function getWinner(playerMove,computerMove) {
    var winner;


    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */

    if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer”;
        console.log("Computer wins!");
    }
    else if(playerMove === "paper" && computerMove === "rock") {
        winner = "player”;
        console.log("Player wins!");
    }
    else if(playerMove === "paper" && computerMove === "scissors") {
        winner = "computer”;
        console.log("Computer wins!");
    }
    else if(playerMove === "scissors" && computerMove === "paper") {
        winner = "player”;
        console.log("Player wins!");
    }
    else if(playerMove === "scissors" && computerMove === "rock") {
        winner = "computer”;
        console.log("Computer wins!");
    }
    else if(playerMove === "rock" && computerMove === "scissors") {
        winner = "player”;
        console.log("Player wins!");
    }
    else {
        winner = "tie”;
        console.log("It's a tie!");
    }
      return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

  if ((playerWins < 5) && (computerWins < 5)) }
     var playerMove = getPlayerMove();
     var computerMove = getComputerMove();
 console.log(‘Player chose ‘ + playerMove + ‘while computer chose ‘ +
computerMove);

  winner = getWinner();
  if (winner === ‘player’) {
      playerWins +=1;
} else if (winner === ‘computer’) {
      computerWins +=1;
} else if (winner === ‘tie’) {
      playerWins += 0;
      computerWins += 0;
 }
  console.log(‘the score is ‘ + playerWins + ‘ to ‘ + computerWins);
   }
   return [playerWins, computerWins];
}

playToFive();
  


