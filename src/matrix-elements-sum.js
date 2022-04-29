const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let validElements = [];
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++) {
      if (i == 0) {
        validElements.push(matrix[i][j]); 
      } 
      if (i > 0 && matrix[i-1][j] !== 0) {
        validElements.push(matrix[i][j]); 
      } 
    }
  }
  console.log(validElements);
  let sum = 0;
  for (let k = 0; k < validElements.length; k++){
    sum += validElements[k];
  }
  console.log(sum);
  return sum;
}

matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
   ]


getMatrixElementsSum(matrix)

module.exports = {
  getMatrixElementsSum
};
