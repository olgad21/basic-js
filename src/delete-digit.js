const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayOfNumbers = Array.from(String(n), Number);

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < arrayOfNumbers[i+1]) {
      arrayOfNumbers.splice(i, 1);
      break;
    }
    if (arrayOfNumbers[i] > arrayOfNumbers[i+1] && i+1 === arrayOfNumbers.length - 1) {
      arrayOfNumbers.splice(i+1, 1);
    }
  }
  

  const number = Number(arrayOfNumbers.join(''));
  console.log(number);
  return number
}

deleteDigit(342);

module.exports = {
  deleteDigit
};
