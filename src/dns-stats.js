const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};

  for(let elem of domains) {
    //obj[elem] = 1;
    elem = elem.split('.').reverse();
    console.log(elem);
    for(let i = 0; i < elem.length; i++) {
      obj['.' + elem[i]] = '';
      obj['.' + elem[i] + '.' + elem[i+1]] = '';
    }
    console.log(obj);
  }
}

module.exports = {
  getDNSStats
};
