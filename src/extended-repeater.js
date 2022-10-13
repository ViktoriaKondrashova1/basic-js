const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let res = str;
  if(typeof(res) != 'string') res = String(res);
  
  if(options.addition || options.addition === false || options.addition === null) {
    let add = options.addition;
    if(typeof(add) != 'string') add = String(add);
  
  if(options.additionRepeatTimes) {
    add = add.concat('--');
    add = add.repeat(options.additionRepeatTimes);
    if(options.additionSeparator) {
      add = add.split('--', options.additionRepeatTimes);
      add = add.join(options.additionSeparator);
    } else {
      add = add.split('--', options.additionRepeatTimes);
      add = add.join('|');
    }
  }
  res = res.concat(add);
  }
  
  if(options.repeatTimes) {
    res = res.concat('--');
    res = res.repeat(options.repeatTimes);
    if(options.separator) {
      res = res.split('--', options.repeatTimes);
      res = res.join(options.separator);
    } else {
      res = res.split('--', options.repeatTimes);
      res = res.join('+');
    }
  }

  //console.log(res);

  return res
}

module.exports = {
  repeater
};
