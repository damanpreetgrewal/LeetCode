/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
    output.splice(index[i], 0, nums[i]);
  }
  return output;
};

console.log(createTargetArray([0, 1, 0], [0, 1, 0]));


// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]