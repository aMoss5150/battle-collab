class Board {
  constructor() {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    // index     0      1     2    3     4
    //       0 [0,0] [1,0] [2,0] [3,0] [4,0]
    //       1 [0,1] [1,1] [2,1] [3,1] [4,1]
    //       2 [0,2] [1,2] [2,2] [3,2] [4,2]
    //       3 [0,3] [1,3] [2,3] [3,3] [4,3]
    //       4 [0,4] [1,4] [2,4] [3,4] [4,4]
    this.numRows = 10;
    this.numCols = 10;
    this.numShips = 20;
    this.grid = this.populateGrid()

  }

  populateGrid() {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let array = [];
    for (let i = 0; i < this.numRows; i++) {
      let array2 = [];

      for (let j = 0; j < this.numCols; j++) {
        array2.push(null)
      }
      array.push(array2)

    }
    // console.log('array:', array)
    return array;

  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    console.table(this.populateGrid())
  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack() {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

// console.table([[0, 45, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]]);
const board = new Board;
board.display()

module.exports = Board;
