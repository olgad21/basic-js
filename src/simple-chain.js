const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
   return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this._validatePosition(position)){
      if (position < 1 || position > this.getLength()){
        this._deleteChain();
        throw new Error("You can't remove incorrect link!")
      }
      const index = position - 1;
      this.chain.splice(index, 1);
      return this;
    }
    this._deleteChain();
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const allChain = this.chain.join('~~');
    this._deleteChain();
    return allChain;
  },
  _deleteChain(){
    this.chain.length = 0;
  },
  _validatePosition(number){
    return typeof number === 'number' && (number ^ 0) === number
  }
};

module.exports = {
  chainMaker
};
