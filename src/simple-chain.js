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
    // this.chain.push(`( ${value} )`);
    // return value
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  },
  removeLink(position) {
    // if (this._validatePosition(position)){
    //   if (position < 1 || position > this.getLength()){
    //     this._deleteChain();
    //     throw new Error("You can't remove incorrect link!")
    //   }
    //   const index = position - 1;
    //   this.chain.splice(index, 1);
    //   return this
    // }
    // this._deleteChain();
    // throw new Error("You can't remove incorrect link!")
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  },
  reverseChain() {
    // this.chain.reverse();
    // return this
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  },
  finishChain() {
    // const allChain = this._getChain();
    // this._deleteChain();
    // return allChain
    throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  },
  // _getChain() {
  //   return this.chain.join('~~')
  // },
  // _deleteChain(){
  //   this.chain.length = 0;
  // },
  // _validatePosition(number){
  //   return typeof number === 'number' && (number ^ 0) === number
  // }
};

module.exports = {
  chainMaker
};
