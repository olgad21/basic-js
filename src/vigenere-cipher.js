const { NotImplementedError } = require('../extensions/index.js');
var crypto = require('crypto');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this._reverseFlag = !isDirect;
    // this.tabulaRecta = this.getTabulaRecta();
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
  } 

  //   let encrypted = '';
  //   const treatedKeyword = this.getTreatedKeyword(key, str.length);

  //   str.split('').forEach((letter, index) => {
  //     encrypted += this.tabulaRecta[treatedKeyword[index]][letter];
  //   });

  //   return encrypted;
  // } 

  decrypt(encrypted, key) {
    if (encrypted === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
  }  

  //   let str = '';
  //   const treatedKeyword = this.getTreatedKeyword(key, encrypted.length);

  //   encrypted.split('').forEach((letter, index) => {
  //     str += this.getOriginalAlphabetLetter(this.tabulaRecta[treatedKeyword[index]], letter);
  //   });

  //   return str;

  //                                
  // }

  // getTabulaRecta() {
  //   const tabulaRecta = this.getTabulaRectaSchema();

  //   alph.forEach((rowLetter, rowIndex) => {
  //     const shiftedAlphabet = this.shiftArray(alph, rowIndex);

  //     alph.forEach((columnLetter, columnIndex) => {
  //       tabulaRecta[rowLetter][columnLetter] = shiftedAlphabet[columnIndex];
  //     })
  //   });
  //   console.log(tabulaRecta);
  //   return tabulaRecta;
  // }

  // getTabulaRectaSchema() {
  //   const column = {};

  //   alph.forEach((letter) => {
  //     const row = {};

  //     alph.forEach((innerLetter) => {
  //       row[innerLetter] = '';
  //     });

  //     column[letter] = row;
  //   });

  //   return column;
  // }

  // shiftArray(array, times) {
  //   const arrayCopy = [...array];

  //   for (let i = 0; i < times; i += 1) {
  //     arrayCopy.push(arrayCopy.shift());
  //   }

  //   return arrayCopy;
  // }

  // getTreatedKeyword(key, limit) {
  //   let treatedKeyword = key;

  //   while (treatedKeyword.length < limit) {
  //     treatedKeyword += treatedKeyword;
  //   }

  //   if (treatedKeyword.length > limit) {
  //     treatedKeyword = treatedKeyword.substring(0, limit);
  //   }

  //   return treatedKeyword;
  // }

  // getOriginalAlphabetLetter(tabulaRectaRow, encryptedLetter) {
  //   return Object.keys(tabulaRectaRow).find(key => tabulaRectaRow[key] === encryptedLetter);
  // }
}

module.exports = {
  VigenereCipheringMachine
};
