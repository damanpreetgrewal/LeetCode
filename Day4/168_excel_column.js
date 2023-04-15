/**
 * @param {number} columnNumber
 * @return {string}
 */
var titleToNumber = function (s) {
  var res = 0;
  var num = 0;
  var len = s.length;
  for (var i = 0; i < len; i++) {
    num = getNum(s[len - 1 - i]);
    console.log('num', num);
    res += Math.pow(26, i) * num;
  }
  return res;
};

var getNum = function (char) {
  console.log('char', char);
  var start = 'A'.charCodeAt(0) - 1;
  return char.charCodeAt(0) - start;
};

console.log(titleToNumber('ABC'));
