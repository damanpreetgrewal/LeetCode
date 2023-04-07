/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let stack = [];

  for (let letter of s) {
    if (stack.includes(letter)) return letter;
    stack.push(letter);
  }
};

console.log(repeatedCharacter("abcbaaccz"));
