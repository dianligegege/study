/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let val = [];
    nums.some((item, index) => {
        if (val.length > 1) return true;
        nums.slice(index + 1).some((el, i) => {
            if (el + item === target) {
                val = [index, index + 1 + i];
                return true;
            }
        })
    })
    console.log(val);
    return val;
};
// twoSum([-1,-2,-3,-4,-5], -8);

// 第二种写法
// 不进行第二次遍历，直接查找第二个数字的下标
var twoSum2 = function(nums, target) {
    let val = [];
    nums.some((item, index) => {
        const num2 = target - item;
        const sub = nums.slice(index + 1).indexOf(num2);
        if (sub !== -1) {
            val = [index, sub + index + 1];
            return true;
        }
        console.log(item);
    });
    console.log(val);
    return val;
};

// twoSum2([-1,-2,-3,-4,-5], -8);

// 第三种写法
// 遍历之后把遍历的数据都map化存起来，后边遍历的数据直接去map查找
let twoSum3 = function(nums, target) {
    const oldNum = {};
    let val = [];
    nums.some((item, index) => {
        const num2 = target - item;
        if (oldNum.hasOwnProperty(num2)) {
            val = [index, oldNum[num2]];
            return true;
        }
        oldNum[item] = index;
    });
    return val;
};
console.log(twoSum3([-1,-2,-3,-4,-5], -8));

