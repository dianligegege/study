/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const dp = new Array(nums.length).fill(1);
  let max = 1;
  for (let index = 1; index < nums.length; index++) {
    for (let i = index - 1; i >= 0; i--) {
      if (nums[index] > nums[i] && 1 + dp[i] > dp[index]) {
        dp[index] = 1 + dp[i];
        if (dp[index] > max) max = dp[index];
      }
    }
  }
  return max;
};

console.log(lengthOfLIS([1,2,5,7,3,4,5,6]));
// [1,2,5,7,3,4,5,6]
// [1,2,3,4,3,4,5,6]