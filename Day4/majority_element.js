// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // sort the array and the middle is the majority
  nums.sort((a, b) => a - b);
  console.log(nums);
  return nums[Math.floor(nums.length / 2)];
};

console.log(majorityElement([4, 4, 2, 5, 3, 1, 1, 1, 1]));
