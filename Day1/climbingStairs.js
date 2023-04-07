/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  let step = 2;
  let stepDouble = 1;
  let res;

  let i = 3;
  while (i <= n) {
    res = step + stepDouble;
    stepDouble = step;
    step = res;
    i++;
  }

  return step;
};

console.log(climbStairs(4));
