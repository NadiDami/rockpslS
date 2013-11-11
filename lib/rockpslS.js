var pairs = {};
pairs['rock'] = ['scissors', 'lizard']
pairs['paper'] = ['rock', 'Spock']
pairs['scissors'] = ['paper', 'lizard']
pairs['lizard'] = ['Spock', 'paper']
pairs['Spock'] = ['scissors', 'rock']

function Player(name){
  this.name = name
};

function Game(player1, player2){
  this.player1 = player1
  this.player2 = player2
};

Player.prototype.picks = function(pick){
  this.pick = pick
};

Game.prototype.winner = function(){
  if (pairs[player1.pick].indexOf(player2.pick )!= -1) {
    return this.player1
  }
  else {
    return this.player2
  }

};

