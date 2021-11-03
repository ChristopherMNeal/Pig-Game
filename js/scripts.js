function die() {
  return Math.floor((Math.random()*6)+1);
}

function Score(playerTurnBoolean, currentScore, totalScoreForP1, totalScoreForP2) {
  this.playerTurnBoolean = playerTurnBoolean;
  this.currentScore = currentScore;
  this.totalScoreForP1 = totalScoreForP1;
  this.totalScoreForP2 = totalScoreForP2;
}

let scores = new Score(true, 0, 0, 0);

Score.prototype.playerTurn = function() {
  let currentRoll = die(); //change back to die() after troubleshooting
  console.log("CURRENT ROLL = " + currentRoll)
  this.currentScore;
  if (currentRoll === 1) {
    this.currentScore = 0;
    this.endTurn();
  }
  else {
    this.currentScore = this.currentScore + currentRoll;
  }
};

Score.prototype.endTurn = function() {
  if (this.playerTurnBoolean === true) {
    this.totalScoreForP1 += this.currentScore;
    this.playerTurnBoolean = false;
  } else {
    this.totalScoreForP2 += this.currentScore
    this.playerTurnBoolean = true;
  }
};

// Score.prototype.hold = function() {
//   this.endTurn();
// }

console.log(scores.playerTurn());
console.log(scores);




