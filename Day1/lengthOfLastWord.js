/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  let words = s.split(" ");
  console.log(words);
  console.log(words[words.length - 1]);
  return words[words.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
