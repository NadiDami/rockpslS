describe("Rock-Paper-Scissors-Lizard-Spock", function() {

  beforeEach(function() {

    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);
  
  });

  describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function(){

        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      
      });

      it('should beat lizard', function(){

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);

      });

      it('should lose to paper', function(){

        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);

      });  

      it('should lose to Spock', function(){

        player1.picks('rock');
        player2.picks('Spock');
        expect(game.winner()).toBe(player2);

      });  

    });
  });
});
