/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let output = [];
  let i = 0;
  while (i < s.length) {
    if (s[i + 2] === "#") {
      output.push(alphabets[+s.substring(i, i + 2) - 1]);
      i = i + 3;
    } else {
      output.push(alphabets[+s.substring(i, i + 1) - 1]);
      i++;
    }
  }
  return output.join("");
};

console.log(freqAlphabets("10#11#12"));
