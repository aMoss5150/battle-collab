
const Board = require('./board')
const HumanPlayer = require('./humanPlayer')

class BattleshipGame {
  constructor(player1, numRows, numCols, numShips) {
    // TODO: Set up constructor to store reference to the humanPlayer and
    // instantiate a new instance of the Board class and set it to this.board.
    // Remember to import your Board class.
    this.turns = 0;
    this.player1 = player1
    this.board = new Board(numRows, numCols, numShips)

  }

  playTurn() {
    // TODO: Display the state of the game and ask for the users input.
    this.displayStatus();
    this.player1.getMove(this.processMove);
  }

  displayStatus() {
    // TODO: Display the current state of the game to the player.
    this.board.display();
  }

  processMove(pos) {
    // TODO: Detemerine if the move is valid. If so, invoke the attack method on
    //     the board instance and increment this.turns by 1. If the game is over,
    //     display the final status of the game and end the game. If not, play
    //     another turn. If the move is invalid, ask the player to input a valid
    //     position and play another turn.
    console.log(Board);
    if (this.board.isValidMove(pos)) {
      this.board.attack(pos);
      this.turns++;
      if (this.board.isGameOver()) {
        this.displayStatus();
        this.player1.processGameOver(true);
      }
    } else {
      console.log('Please pick a valid position')
    }
    this.playTurn()
  }

}


module.exports = BattleshipGame;
