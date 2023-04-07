/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // let start = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] != nums[i + 1]) {
  //     nums[start] = nums[i];
  //     start++;
  //   }
  // }
  // return start;

  let uniqueNumbers = [...new Set(nums)];
  return uniqueNumbers.length;
};

console.log(removeDuplicates([1, 2, 3, 4, 4]));
