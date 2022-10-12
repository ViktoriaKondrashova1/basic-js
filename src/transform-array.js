const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) return [];

  let res = [];

  for (let i = 0; i < arr.length; i++) {

    if((arr[i] === '--discard-next' && i != arr.length - 1 && arr[i+2] === '--discard-prev') ||
    (arr[i] === '--discard-next' && i != arr.length - 1 && arr[i+2] === '--double-prev')) {
      i = i+2;
    } else if (arr[i] === '--discard-next' && i != arr.length - 1) {
      i = i+1;
    } else if (arr[i] === '--discard-next' && i === arr.length - 1) {
      continue;
    } else if (arr[i] === '--discard-prev' && i != 0) {
      res.pop();
    } else if (arr[i] === '--discard-prev' && i === 0) {
      continue;
    } else if (arr[i] === '--double-next' && i != arr.length - 1) {
      res.push(arr[i+1]);
    } else if (arr[i] === '--double-next' && i === arr.length - 1) {
      continue;
    } else if (arr[i] === '--double-prev' && i != 0) {
      res.push(arr[i-1]);
    } else if (arr[i] === '--double-prev' && i === 0) {
      continue;
    } else {
      res.push(arr[i]);
    }

  };
  return res;
}

module.exports = {
  transform
};
