/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  const set = new Set(nums);

  let count = 0;
  for (const val of nums) {
    if (set.has(val - diff) && set.has(val + diff)) {
      count++;
    }
  }
  return count;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
