const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (message === undefined || message === null || key === undefined || key === null) {
      throw new Error("Incorrect arguments!");
    }

    let res = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if(this.isDirect === true || this.isDirect === undefined) {
      res = key.padEnd(message.length, key);
      console.log(res)
    } else {
      return message.split('').reverse().join('');
    }
    
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || encryptedMessage === null || key === undefined || key === null) {
      throw new Error("Incorrect arguments!");
    }

    let res = '';

    if(this.isDirect === true || this.isDirect === undefined) {

    } else {
      return message.split('').reverse().join('');
    }
    
  }
}

module.exports = {
  VigenereCipheringMachine
};
