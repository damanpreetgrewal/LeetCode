/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  if (set.size !== nums.length) {
    return true;
  }
  return false;
};

console.log(containsDuplicate([1,2,3]));
