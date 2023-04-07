/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let sum = 0;
  let hashMap = {};
  for (let i in nums) {
    hashMap[nums[i]] = hashMap[nums[i]] + 1 || 1;
  }
  console.log(hashMap);
  for (let [key, value] in hashMap) {
    if (hashMap[key] < 2) {
      sum += +key;
    }
  }
  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
