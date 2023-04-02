/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const expectedNum = [nums[0]];
  for(let index = 1; index < nums.length; index++) {
      if (nums[index] !== expectedNum[expectedNum.length - 1]) {
          expectedNum.push(nums[index]);
      }
  }
  console.log('expectedNum', expectedNum);
  return expectedNum.length;
};

// removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

// 不能使用额外变量
var removeDuplicates2 = function(nums) {
  // const expectedNum = [nums[0]];
  let length = nums.length;
  let other = 0;
  for(let index = 1; index < length; index++) {
      if (nums[index] === nums[index - 1]) {
        nums.push(nums[index]);
        // console.log('nums', nums);
        // nums.splice(index, 1);
        // nums[index] = '';
        other += 1;
      }
  }
  nums = nums.filter((item) => {
    return item !== '';
  })
  // console.log('nums', nums);
  // console.log('nums', nums);
  return length - other;
};

// console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4]));

// 正确做法，双指针，复制快指针遇到的不同数字给慢指针

var removeDuplicates3 = function(nums) {
  let slow = 1;
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] !== nums[index - 1]) {
      nums[slow] = nums[index]
      ++slow;
    }
  }
  return slow;
}

console.log(removeDuplicates3([1,2]));

