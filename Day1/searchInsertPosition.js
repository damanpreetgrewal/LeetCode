/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < target) {
        continue;
      } else {
        return i;
      }
    }
    return nums.length;
  }
};

console.log(searchInsert([1, 3, 5, 6], 8));
