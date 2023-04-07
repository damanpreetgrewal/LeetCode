/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let sub = arr.slice(i, j);
      if (sub.length % 2 !== 0) {
        console.log(sub);
        let sum = sub.reduce((s, el) => s + el);
        total += sum;
      }
    }
  }
  return total;
};

console.log(sumOddLengthSubarrays([1, 2, 3]));
