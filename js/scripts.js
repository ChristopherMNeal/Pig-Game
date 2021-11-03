function die() {
  return Math.floor((Math.random()*6)+1);
}

function Score(playerTurnBoolean, currentScore) {
  this.playerTurnBoolean = playerTurnBoolean;
  this.currentScore = currentScore;
  this.players = {}
}

function Player(score, playerName) {
  this.score = score
  this.playerName = playerName
}

Score.prototype.addPlayers = function(player) {
  this.players[player.playerName] = player;
};

let testScoreBoard = new Score(true, 0);
let player1 = new Player(0, "Liam");
testScoreBoard.addPlayers(player1);
let player2 = new Player(0, "Chris");
testScoreBoard.addPlayers(player2);

Score.prototype.playerTurn = function() {
  let currentRoll = die(); 
  console.log("CURRENT ROLL = " + currentRoll)
  this.currentScore;
  if (currentRoll === 1) {
    this.endTurn();
  }
  else {
    this.currentScore = this.currentScore + currentRoll;
  }
};

Score.prototype.endTurn = function() {
  console.log("-----END TURN-----")
  if (this.playerTurnBoolean === true) {
    this.players.Liam.score += this.currentScore;
    this.playerTurnBoolean = false;
    this.winner();
    this.currentScore = 0;
  } else {
    this.players.Chris.score += this.currentScore;
    this.playerTurnBoolean = true;
    this.winner();
    this.currentScore = 0;
  }
  // console.log("CAN YOU SEE THIS????")
};

Score.prototype.winner = function() {
  Object.keys(testScoreBoard).forEach(function(key) {
    if (testScoreBoard[key] >= 100) {
      console.log(testScoreBoard[key] + " is >= 100!" + "\n" + key + " wins!");
      testScoreBoard = new Score(true, 0, 0, 0);
    }
  });
};

console.log(testScoreBoard.playerTurn());
console.log(testScoreBoard);



function Score(playerTurnBoolean, currentScore) {
  this.playerTurnBoolean = playerTurnBoolean;
  this.currentScore = currentScore;
  this.players = {}
}

function Player(score, playerName) {
  this.score = score
  this.playerName = playerName
}

Score.prototype.addPlayers = function(player) {
  this.players[player.playerName] = player;
};

let testScoreBoard = new Score(true, 0);
let player1 = new Player(0, "Liam");
testScoreBoard.addPlayers(player1);
let player2 = new Player(0, "Chris");
testScoreBoard.addPlayers(player2);

Score.prototype.endTurn = function() {
  this.currentScore = 40
  this.players.Liam.score += this.currentScore;
}

testScoreBoard.endTurn();
console.log(testScoreBoard.players.Liam.score);