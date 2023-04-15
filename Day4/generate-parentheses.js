/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // We'll store here all combiantions
  const combinations = [];

  /*
   * o stands for opened parenthesis count
   * c stands for closed parenthesis count
   * s is the current string of parenthesis
   */
  function buildCombination(o, c, s) {
    // if the closed count equals n then we have nothing left to close
    // so we store the combination and return
    if (c === n) {
      combinations.push(s);
      return;
    }

    // if the open count is less than n we can still create a combination
    // with an opened parenthesis
    if (o < n) buildCombination(o + 1, c, s + '(');
    // if the closed count is less than the opened count we can close a parenthesis
    if (c < o) buildCombination(o, c + 1, s + ')');
  }

  // We call the recursive function with s = '(' and o = 1
  //  because that's the only possible initial character
  buildCombination(1, 0, '(');

  return combinations;
};

console.log(generateParenthesis(3));

//Output
// ['((()))', '(()())', '(())()', '()(())', '()()()']
