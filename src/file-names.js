const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  
for (let i = 0; i < names.length; i++) {
  let k = 0;
  for (let a = i + 1; a < names.length; a++) {
    if (names[i] === names[a]) {
      k++
      names.splice(a, 1, names[i] + '(' + k + ')')
      console.log(names)
    }
  }
}

return names

}

module.exports = {
  renameFiles
};
