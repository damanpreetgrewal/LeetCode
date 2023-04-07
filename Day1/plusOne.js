/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let lastIndex = digits.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      break;
    } else {
      if (digits[i] === 9) {
        digits[i] = 0;
      }
      if (i === 0) {
        digits.unshift(1);
      }
    }
  }
  return digits;
};

console.log(plusOne([9, 9, 9]));
