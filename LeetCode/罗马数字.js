/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const numMap = {
      'M': 1000,
      'D': 500,
      'C': 100,
      'L': 50,
      'X': 10,
      'V': 5,
      'I': 1
  };
  let sum = 0;
  for (let index = 0; index < s.length; ++index) {
    console.log(s[index], s[index + 1]);
    if (index === s.length - 1 || numMap[s[index]] >= numMap[s[index + 1]]) {
      sum += numMap[s[index]];
    } else {
      sum -= numMap[s[index]];
    }
    console.log('sum', sum);
  }
  return sum;
};

console.log(romanToInt('III'));