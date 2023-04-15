/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroes = [];
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      zeroes.push(nums[i]);
      nums.splice(i, 1);
    } else i++;
  }

  nums.push(...zeroes);
  return nums;
};

console.log(moveZeroes([0, 0, 1]));
