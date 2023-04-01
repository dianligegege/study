/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return nums.sort((a, b) => {
      return a - b;
  })
};

// 快速排序
var sortArray2 = function(nums) {
  let leftArr = [];
  let rightArr = [];
  const pivot = nums[0];
  const middleArr = [pivot];
  if (nums.length <= 1) return nums;
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] === pivot) {
      middleArr.push(nums[index]);
    } else if (nums[index] < pivot) {
      leftArr.push(nums[index]);
    } else if (nums[index] > pivot) {
      rightArr.push(nums[index]);
    }
  }
  leftArr = sortArray2(leftArr);
  rightArr = sortArray2(rightArr);
  return leftArr.concat(middleArr).concat(rightArr);
};

console.log(sortArray2([5,2,1,3]));