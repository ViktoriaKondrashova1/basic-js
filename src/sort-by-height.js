const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let cleaned = arr.filter(elem => elem != -1).sort();
  cleaned = cleaned.sort(function(a, b) {
    return a - b;
  });
  
  let res = [];
  let index = 0;
  console.log(cleaned)

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] != -1) {
      res.push(cleaned[index]);
      index++
    } else {
      res.push(arr[i])
    }
  }
  return res;
}

module.exports = {
  sortByHeight
};
