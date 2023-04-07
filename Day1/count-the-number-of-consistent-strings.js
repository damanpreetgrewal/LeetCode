/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let counter = words.length;
  const allowedLetters = new Set(allowed.split(""));
  console.log(allowedLetters);
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    for (let k = 0; k < currentWord.length; k++) {
      if (!allowedLetters.has(currentWord[k])) {
        counter -= 1;
        break;
      }
    }
  }
  return counter;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
