/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    nums.splice(nums.length, nums.length, ...nums);
    return nums;

};

console.log(getConcatenation([1, 2, 1]));
