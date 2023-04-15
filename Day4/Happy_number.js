// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (num) {
  let sum = 0;
  let visited = {};

  while (num !== 1 && !visited[num]) {
    visited[num] = true;
    let digits = num.toString().split('');
    sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += Math.pow(Number(digits[i]), 2);
    }
    num = sum;
  }
  console.log(sum);
  console.log(visited);
  return num === 1;
};

console.log(isHappy(19));
