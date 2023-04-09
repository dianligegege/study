/**
 * @param {string} s
 * @return {number}
 */
// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
var lengthOfLongestSubstring = function(s) {
  if (s === '') return 0;
  const hashMap = new Map();
  let left = 0;
  let length = 0;
  for (let index = 0; index < s.length; ++index) {
    const item = s[index];
    if (!hashMap.has(item)) {
      hashMap.set(item, index);
    } else if (hashMap.get(item) >= left) {
      left = hashMap.get(item) + 1;
    }
    length = Math.max(index - left + 1, length);
  }
  return length;
};

console.log(lengthOfLongestSubstring("tmmzuxt"));