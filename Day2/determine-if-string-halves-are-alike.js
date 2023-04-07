/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let firstHalf = s.substring(0, s.length / 2);
  let secondHalf = s.substring(s.length / 2);
  let count1 = 0;
  let count2 = 0;

  for (let i in firstHalf) {
    if (vowels.includes(firstHalf[i])) count1++;
  }

  for (let i in secondHalf) {
    if (vowels.includes(secondHalf[i])) count2++;
  }

  if (count1 === count2) return true;
  else return false;
};

console.log(halvesAreAlike("book"));
