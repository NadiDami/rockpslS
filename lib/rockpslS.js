// var pairs = {};
// pairs['rock'] = ['scissors', 'lizard']
// pairs['paper'] = ['rock', 'Spock']
// pairs['scissors'] = ['paper', 'lizard']
// pairs['lizard'] = ['Spock', 'paper']
// pairs['Spock'] = ['scissors', 'rock']




function Player(name){
  this.name = name
};

function Game(player1, player2){
  this.player1 = player1
  this.player2 = player2

this.pairs = {'rock': {'beats': ['scissors', 'lizard'], 'verb': ['smashes', 'crushes']},
                'scissors': {'beats': ['paper', 'lizard'], 'verb': ['cuts', 'decapitate']}, 
                'paper': {'beats': ['rock', 'Spock'], 'verb': ['suffocates', 'papercuts']},
                'Spock': {'beats': ['scissors', 'rock'], 'verb': ['smashes', 'vaporizes']},
                'lizard': {'beats': ['paper', 'Spock'], 'verb': ['eats', 'poisons']}
                };
};

Player.prototype.picks = function(pick){
  this.pick = pick
};

Game.prototype.samePick = function() {
  return this.player1.pick == this.player2.pick;
}

Game.prototype.winner = function(){
  if (this.samePick()) {
    return null;
  }

  if (this.pairs[player1.pick]['beats'].indexOf(player2.pick)!= -1) {
    return this.player1
  }
  else {
    return this.player2
  }

};

Game.prototype.result = function() {
    if (this.winner() == this.player1){
      return this.player1.pick + " " + this.pairs[player1.pick]['verb'][this.pairs[player1.pick]['beats'].indexOf(player2.pick)] + " " + this.player2.pick + "." + " " + this.player1.name + " wins"
    }
    else if (this.winner() == this.player2){
      return this.player2.pick + " " + this.pairs[player2.pick]['verb'][this.pairs[player2.pick]['beats'].indexOf(player1.pick)] + " " + this.player1.pick + "." + " " + this.player2.name + " wins"
    }
    else {
      return "It's a draw"
    }
  };

