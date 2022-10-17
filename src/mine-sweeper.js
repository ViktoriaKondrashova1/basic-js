const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = Array(matrix.length). fill(Array(matrix[0].length).fill(0));
  //console.log(res)
  
  for (let i = 0; i < matrix.length; i++) {
    for (let a = 0; a < matrix[i].length; a++) {
      if (matrix[i][a] === true) {
        if(res[i][a+1]) res[i][a+1] += 1;
        if(res[i+1][a+1]) res[i+1][a+1] += 1;
        if(res[i+1][a]) res[i+1][a] += 1;
        if(res[i][a-1]) res[i][a-1] += 1;
        if(res[i-1][a-1]) res[i-1][a-1] += 1;
        if(res[i][a-1]) res[i][a-1] += 1;
        console.log(res)
      }
    }
  }
}

module.exports = {
  minesweeper
};
