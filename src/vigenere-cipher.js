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
    if (!message || !key) throw new Error("Incorrect arguments!");

    let res = [];
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    message = message.toString().toUpperCase();
    let cleanedMessage = (message.replace(/\W/gi, '').replace(/\d/gi, '')).toString().toUpperCase();
    key = key.toString().toUpperCase();
    let messageValues = message.split(''); 
    key = key.padEnd(cleanedMessage.length, key); 
    let keyValues = key.split(''); 

      for (let i = 0; i < messageValues.length; i++) {
        for (let a = 0; a < alphabet.length; a++) {
          if(alphabet[a] === messageValues[i]) {
            messageValues.splice(i, 1, alphabet.indexOf(alphabet[a]))
          }
        }
      }

      for (let i = 0; i < keyValues.length; i++) {
        for (let a = 0; a < alphabet.length; a++) {
          if(alphabet[a] === keyValues[i]) {
            keyValues.splice(i, 1, alphabet.indexOf(alphabet[a]))
          }
        }
      }

       let a = 0;
        for (let i = 0; i < messageValues.length; i++) {
            if(typeof(messageValues[i]) === 'number') {
             res.push((messageValues[i] + keyValues[a]) % 26);
             a++
           } else {
             res.push(messageValues[i])
           }
         }

        for (let i = 0; i < res.length; i++) {
           for (let a = 0; a < alphabet.length; a++) {
             if(alphabet.indexOf(alphabet[a]) === res[i]) {
               res.splice(i, 1, alphabet[a])
             }
           }
        }


       res = res.join('');

       if(this.isDirect === true || this.isDirect === undefined) {
         return res
       } else {
         return res.split('').reverse().join('');
       }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

     let res = [];
     const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    encryptedMessage = encryptedMessage.toString().toUpperCase();
     let cleanedMessage = (encryptedMessage.replace(/\W/gi, '').replace(/\d/gi, '')).toString().toUpperCase();
     key = key.toString().toUpperCase();
     let messageValues = encryptedMessage.split('');
     key = key.padEnd(cleanedMessage.length, key);
     let keyValues = key.split('');
      
     for (let i = 0; i < messageValues.length; i++) {
      for (let a = 0; a < alphabet.length; a++) {
        if(alphabet[a] === messageValues[i]) {
          messageValues.splice(i, 1, alphabet.indexOf(alphabet[a]))
        }
      }
    }

    for (let i = 0; i < keyValues.length; i++) {
      for (let a = 0; a < alphabet.length; a++) {
        if(alphabet[a] === keyValues[i]) {
          keyValues.splice(i, 1, alphabet.indexOf(alphabet[a]))
        }
      }
    }

     let a = 0;
      for (let i = 0; i < messageValues.length; i++) {
          if(typeof(messageValues[i]) === 'number') {
           let f = messageValues[i] - keyValues[a];
           if(f < 0) {
            res.push(f + 26);
           } else res.push(f % 26)
           a++
         } else {
           res.push(messageValues[i])
         }
       }

      for (let i = 0; i < res.length; i++) {
         for (let a = 0; a < alphabet.length; a++) {
           if(alphabet.indexOf(alphabet[a]) === res[i]) {
             res.splice(i, 1, alphabet[a])
           }
         }
      }

      res = res.join('');

      if(this.isDirect === true || this.isDirect === undefined) {
         return res
       } else {
         return res.split('').reverse().join('');
       }
  }
}

module.exports = {
  VigenereCipheringMachine
};
