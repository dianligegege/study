/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let i = s.length / 2;
  while(i > 0 && s !=='') {
      s= s.replaceAll(/\{\}|\[\]|\(\)/ig, '');
      i--;
  }
  return s === '';
};

// 堆栈，存进去左括号，对应的右括号进来时删除这一对儿
var isValid2 = function(s) {
  const rightMap = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const stack = [];
  for (let index = 0; index < s.length; index++) {
    if (rightMap[stack[stack.length - 1]] === s[index]) {
      stack.pop();
    } else {
      stack.push(s[index]);
    }
  }
  return stack.length === 0;
};
