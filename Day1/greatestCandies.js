/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  let output = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      output.push(true);
    } else {
      output.push(false);
    }
  }
  return output;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
