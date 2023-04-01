/**
 * @param {string[]} strs
 * @return {string}
 */
var finSame = function(s1, s2) {
  let same = '';
  for(let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      same += s1[i];
    } else {
      break;
    }
  }
  return same;
};

var longestCommonPrefix = function(strs) {
  let commPre = '';
  for(let index = 0; index < strs.length; index++) {
    if (index === 0) {
      commPre = strs[index]
    } else {
      commPre = finSame(commPre, strs[index]);
      if (commPre === '') return '';
    }
  }
  return commPre;
};

console.log(longestCommonPrefix(["acir","car"]));