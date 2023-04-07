/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let diff = nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
  return diff;
};

console.log(maxProductDifference([1, 6, 7, 5, 2, 4, 10, 6, 4]));
