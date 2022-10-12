const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let sum = 0
  matrix.forEach(element => {
    element.forEach(value =>{
      value == '^^' ? sum = sum + 1 : null
    })
  });
  return sum = 0 ? 0 : sum
}

module.exports = {
  countCats
};
