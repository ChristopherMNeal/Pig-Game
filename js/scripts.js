function die() {
  return Math.floor((Math.random()*6)+1);
}

function Score(playerTurnBoolean, currentScore, totalScoreForP1, totalScoreForP2) {
  this.playerTurnBoolean = playerTurnBoolean;
  this.currentScore = currentScore;
  this.totalScoreForP1 = totalScoreForP1;
  this.totalScoreForP2 = totalScoreForP2;
}

let testScoreBoard = new Score(true, 0, 0, 0);

Score.prototype.playerTurn = function() {
  let currentRoll = die(); //change back to die() after troubleshooting
  console.log("CURRENT ROLL = " + currentRoll)
  this.currentScore;
  if (currentRoll === 1) {
    // this.currentScore = 0;
    this.endTurn();
  }
  else {
    this.currentScore = this.currentScore + currentRoll;
  }
};

Score.prototype.endTurn = function() {
  console.log("-----END TURN-----")
  if (this.playerTurnBoolean === true) {
    this.totalScoreForP1 += this.currentScore;
    this.playerTurnBoolean = false;
    this.winner();
    this.currentScore = 0;
  } else {
    this.totalScoreForP2 += this.currentScore
    this.playerTurnBoolean = true;
    this.winner();
    this.currentScore = 0;
  }
}

Score.prototype.winner = function() {
  Object.keys(testScoreBoard).forEach(function(key) {
    if (testScoreBoard[key] >= 100) {
      console.log(testScoreBoard[key] + " is >= 100!");
      testScoreBoard = new Score(true, 0, 0, 0);
    }
  });
};

// + "\n" + key + " wins!"

console.log(testScoreBoard.playerTurn());
console.log(testScoreBoard);

// const adaKeys = Object.keys(mathematician);
// let adaString = "";
// adaKeys.forEach(function(key) {
//   adaString = adaString.concat(key + ": " + mathematician[key] + "\n");
// });


// Score.prototype.endTurn = function() {
//   if (this.playerTurnBoolean === true) {
//     this.totalScoreForP1 += this.currentScore;
//     this.playerTurnBoolean = false;
//     if (this.totalScoreForP1 >= 100) {
//       console.log("Player One Wins!")
//       this.winner();
//     }
//   } else {
//     this.totalScoreForP2 += this.currentScore
//     this.playerTurnBoolean = true;
//     if (this.totalScoreForP2 >= 100) {
//       console.log("Player Two Wins!")
//       this.winner();
//     }
//   }
// }

// Score.prototype.winner = function() {
//  scores = new Score(true, 0, 0, 0);
// };



