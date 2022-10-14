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
  let str = n.toString();
  let max = 0;
  for(let i = 0; i < str.length; i++) {
    str = str - str.slice(i, i+1);
    if(str > max) {
      max = Number(str);
    }
  }
  return max
}

module.exports = {
  deleteDigit
};
