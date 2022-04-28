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
 * createDreamTeam(['Matt', '   Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let validMembers = [];
  let unsortedCodeName = [];
  let codeName;
  if (Array.isArray(members)) {
    let validUneditedMembers = members.filter(member => typeof member == 'string');
    validUneditedMembers.forEach(validUneditedMember => {
      let validMember;
      validMember = validUneditedMember.trim().toUpperCase();
      validMembers.push(validMember);
    });
    validMembers.forEach(validMember => unsortedCodeName.push(validMember[0]));
    codeName = unsortedCodeName.sort().join('');
  } else {return false}
  console.log(codeName);
  return codeName;
}

// createDreamTeam(['Matt', '   Ann', 'Dmitry', 000000, 'Max']);

module.exports = {
  createDreamTeam
};
