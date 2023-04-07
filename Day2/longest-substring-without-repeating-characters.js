/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let sArr = [...s];
  let testString = "";
  sArr.forEach((char, i) => {
    let dupIndex = testString.indexOf(char);
    if (dupIndex > -1) {
      testString = testString.substring(dupIndex + 1) + char;
      console.log(testString);
    } else {
      testString += char;
    }
    max = Math.max(testString.length, max);
  });
  return max;
};

console.log(lengthOfLongestSubstring("dvdf"));
