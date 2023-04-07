/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let output = [];
  let sArr = s.split(" ");
  for (let str of sArr) {
    output.push(str.split("").reverse().join(""));
  }
  return output.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
