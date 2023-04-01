// https://leetcode.cn/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) return -1;
  const midSub = Math.floor((nums.length) / 2);
  const mid = nums[midSub];
  if (target === mid) {
    return midSub;
  } else if (target > mid) {
    const num = search(nums.slice(midSub + 1), target);
    if (num === -1) return -1;
    return midSub + num + 1;
  } else if (target < mid) {
    return search(nums.slice(0, midSub), target);
  }
};

// console.log(search([-1,0,3,5,9,12], 2));

var search2 = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
      const mid = Math.floor((right - left) / 2) + left;
      const num = nums[mid];
      if (num === target) {
          return mid;
      } else if (num > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }
  return -1;
};
