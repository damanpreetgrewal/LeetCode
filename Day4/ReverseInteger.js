/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const invert = Math.abs(x).toString().split('').reverse().join('');
  const polar = x < 0 ? -1 : 1;
  const t = Number(invert) * polar;

  return t;
};

console.log(reverse(-321));
