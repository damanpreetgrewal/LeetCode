/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, pref.length) === pref) {
      count++;
    }
  }
  return count;
};

console.log(prefixCount(["pay", "attention", "practice", "attend"], "at"));
