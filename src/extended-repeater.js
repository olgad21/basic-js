const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  str = str + '^@4uJd';
 
  let { repeatTimes } = options;
  if(!repeatTimes) {
    repeatTimes = 1;
  }
  str = str.repeat(repeatTimes);
  let strArray = str.split('^@4uJd', repeatTimes);

  let { addition } = options;

  if(addition === undefined){
    addition = ''; 
  }

  addition = String(addition);

  addition = addition + '^@4uJd';

  let { additionRepeatTimes } = options;
  if(!additionRepeatTimes) {
    additionRepeatTimes = 1;
  }
  addition = addition.repeat(additionRepeatTimes);
  
  let additionArray = addition.split('^@4uJd', additionRepeatTimes);

  let { additionSeparator } = options;
  if(!additionSeparator) {
    additionSeparator = '|';
  }

  additionArray = additionArray.join(additionSeparator);

  strArray = strArray.map(el => el = el + additionArray);

  let { separator } = options;
  if(!separator) {
    separator = '+';
  }
  
  strArray = strArray.join(separator);

  return strArray;
}

repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' });

module.exports = {
  repeater
};
