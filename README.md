Pig game outline:

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.
If the player rolls any other number, it is added to their turn total and the player's turn continues.
If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.



Dice roll function
  Math.floor((Math.random()*6)+1);

turn constructor


take if statement {
  if result === 1 {
    score is reset %% change player turn
  } else {
    currentTurnScore += currentRoll
  }
}

if the player ends their turn {
  totalScore += currentTurnScore
  reset currentTurnScore
  change player turn
}
<!-- 
player object: {
  totalScore = 0;
  currentTurnScore = 0;
  isTurn = true;
} -->

function Dice(currentRoll) {
  this.currentRoll = currentRoll;
}

function Score(currentScore, totalScore) {
  this.diceRoll = diceRoll;
  this.totalScoreForP1 = totalScoreForP1;
  this.totalScoreForP2 = totalScoreForP2;
}

let turn = 1 or 2

1. Make die roller a random 1-6 and return a value
2. Create a constructor for keeping score
3. Create a prototype to switch between the player score constructor properties i.e. player1 and player2. Also reset diceRoll to 0.
4. Create a prototype to add the diceRoll value to a players score
5. Create a prototype for keeping the points you have and ending your turn
6. Create a prototype for ending the game if a player goes over 100 points. Further exploration: Reset the game if a player goes over 100.

Test: "make our die roller a random number between 1-6"
Code:
function die() {
  return Math.floor((Math.random()*6)+1);
}
console.log(die());
Expected outcome:
It should return a integer between 1-6

Test: "Create a object with our constructor with the correct values"
Code:
let scores = new Scores(true, 0, 0 , 0);
console.log(scores);
Expected outcome:
scores [playerTurnBoolean, currentScore, totalScoreForP1, totalScoreForP2];

Test: "It should end player turn and set currentScore to zero if the die equals 1 and if the die equals 2-6 it should add that value to currentScore"
Code:
Scores.playerTurn()
Expected outcome: 
CURRENT ROLL = 2

Test: "It should end the game and reset the scoreboard"
Code:
scores = new Score(true, 0, 0, 0)
Expected Outcome:
totalScoreForP1 is greater than 100: Player one wins!!

Test: "Our rewritten constructor function should return an object with a nested object for players"
Code:
let testScoreBoard = new Score(true, 0, {0, 0});
Expected Outcome:
Score {
  playerTurnBoolean: true,
  currentScore: 0,
  players: {
    totalScoreForP1: 0,
    totalScoreForP2: 0
  }
}

Test: "Update endTurn functions to have the correct pathway"
Code:
Score.prototype.endTurn = function() {
  this.currentScore = 40
  this.players.Liam.score += this.currentScore;
}
Expected outcome:
40





# _Pig Dice_

#### By _**Christopher Neal & Liam Eller**_

#### _Pig Dice_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _jQuery_

## Description

_This page creates a Pig Dice game to practice objects._

## Setup/Installation Requirements

* _Clone the repository from GitHub_
* _Open the webpage in your preferred browser_

## Known Bugs

_None_

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) _3 November 2021_ _Christopher Neal & Liam Eller_