const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {

  calculateDepth(arr) {
  
    let res = 1;
    
    for (let elem of arr) {
      let a = 0;
      if (Array.isArray(elem)) {
        a += this.calculateDepth(elem);
        res += a;
      }
    } 
    //console.log('res:' + res);
    return res
  }    
}

module.exports = {
  DepthCalculator
};
