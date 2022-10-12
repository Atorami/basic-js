const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false){
    return false
  }
  let newArr = []
  members.forEach(element => {
    typeof element === 'string' ? newArr.push(element.trim()[0].toUpperCase()):null
  });
  return newArr.length != 0 ? newArr.sort().join('') : false

}

module.exports = {
  createDreamTeam
};
