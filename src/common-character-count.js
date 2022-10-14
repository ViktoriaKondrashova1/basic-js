const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('').sort();
  s2 = s2.split('').sort();
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let a = 0; a < s2.length; a++) {
      if(s1[i] === s2[a]) {
        count++
        i++
      }
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
