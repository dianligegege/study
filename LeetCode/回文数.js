/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  const xString = x.toString();
  const xLength = xString.length;
  const leftX = xString.substring(0, Math.floor(xLength / 2));
  const rightX = xString.substring(Math.ceil(xLength / 2));

  const leftXRe = leftX.split('').reverse().join('');
  return leftXRe === rightX;
};

isPalindrome(121);