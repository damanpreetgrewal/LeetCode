/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  let alphaArr = [...alphabets];

  for (let i = 0; i < sentence.length; i++) {
    if (alphaArr.includes(sentence[i])) {
      alphaArr = alphaArr.filter((alphabet) => {
        return alphabet !== sentence[i];
      });
    }
  }

  return alphaArr.length === 0 ? true : false;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
