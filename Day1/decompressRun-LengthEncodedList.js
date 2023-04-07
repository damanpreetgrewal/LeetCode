/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      let j = 1;
      while (j <= nums[i]) {
        output.push(nums[i + 1]);
        j++;
      }
    }
  }

  return output;
};

console.log(decompressRLElist([1, 2, 3, 4, 0, 6]));
