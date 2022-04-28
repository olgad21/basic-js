const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  if (arr.length === 0){return arr}
  let controlValues = arr.filter(element => element === '--discard-next' 
                                          || element === '--discard-prev'
                                          || element === '--double-next'
                                          || element === '--double-prev');
  
  if (controlValues.length === 0){return arr}

  let newArr = [...arr];

  controlValues.forEach(controlValue => {
    let controlIndex = arr.indexOf(controlValue);
  
    if (controlIndex === -1){return arr}
    
    if (!(newArr[controlIndex+1])){
      newArr.splice(controlIndex, 1);
      return newArr;
    }
    
    if (!(newArr[controlIndex-1])){
      newArr.splice(controlIndex, 1);
      return newArr;
    }
    
    switch (controlValue) {
      case '--discard-next': newArr.splice(controlIndex, 2);
      break;

      case '--discard-prev': newArr.splice(controlIndex-1, 2);
      break;

      case '--double-next': /*newArr.splice(controlIndex, 1, newArr[controlIndex+1]);*/ newArr[controlIndex] = newArr[controlIndex + 1];
      break;

      case '--double-prev': /*newArr.splice(controlIndex, 1, newArr[controlIndex-1]);*/ newArr[controlIndex] = newArr[controlIndex - 1];
      break;
  }
  })
  
  console.log(newArr);
  return newArr;
}

module.exports = {
  transform
};
