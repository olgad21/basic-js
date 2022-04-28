const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 * turnsSpeed = turns/hour
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let res = {};
  res.turns = Math.pow(2, disksNumber) - 1;
  turnsSpeedInSeconds = turnsSpeed / 3600;
  res.seconds = Math.floor(res.turns / turnsSpeedInSeconds);
  return res;
}

// calculateHanoi(9, 4308);

module.exports = {
  calculateHanoi
};
