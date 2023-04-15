/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i, j);
        break;
      }
    }
  }
  return output;
};

console.log(twoSum([3, 2, 4], 6));
