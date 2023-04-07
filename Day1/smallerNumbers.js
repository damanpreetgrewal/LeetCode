/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let output = [];
  let count;
  for (let i = 0; i < nums.length; i++) {
    count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] > nums[j]) count++;
    }
    output.push(count);
  }
  return output;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
