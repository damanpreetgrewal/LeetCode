// To solve for x, we can take the logarithm of both sides of the equation with base 3:

// log₃(n) = log₃(3^x)

// Using the logarithmic property that states logₐ(b^c) = c*logₐ(b), we can simplify the right-hand side of the equation to:

// log₃(n) = x*log₃(3)

// Since log₃(3) is equal to 1, we can simplify the right-hand side further to:

// log₃(n) = x

// Therefore, x is equal to the logarithm of n with base 3.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 1) return false;
  let base = 3;
  let x = Math.log10(n) / Math.log10(base);
  console.log(x);
  return x % 1 === 0 ? true : false;
};

console.log(isPowerOfThree(9));
