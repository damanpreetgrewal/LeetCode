/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let wordArr = word.split("");
  let indexOfTarget = wordArr.indexOf(ch);
  let output = [];
  if (indexOfTarget !== -1) {
    output.push(...wordArr.slice(0, indexOfTarget + 1).reverse());
    output.push(...wordArr.splice(indexOfTarget + 1));
  } else {
    return word;
  }
  return output.join("");
};

console.log(reversePrefix("abcdefd", "d"));
