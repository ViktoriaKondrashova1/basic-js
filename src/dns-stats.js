const { NotImplementedError } = require("../extensions/index.js");

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
  const res = {};
  let resArr = [];

  domains.forEach((domain) => {
    let arr = [];
    let dot = domain.indexOf(".");
    while (dot > -1) {
      arr.push(domain);
      domain = domain.slice(dot + 1, domain.length);
      dot = domain.indexOf(".");
    }
    arr.push(domain);
    resArr.push(arr.reverse());
    resArr = resArr.flat();
  });
  resArr.forEach((domain) => {
    const filtered = resArr.filter((elem) => elem === domain);
    if (!res[domain]) {
      const key = `.${domain.split(".").reverse().join(".")}`;
      res[key] = filtered.length;
    }
  });
  return res;
}

module.exports = {
  getDNSStats,
};
