/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let sArr = s.split("");
  for (let i = 0; i < sArr.length; i++) {
    if (i % 2 !== 0) {
      sArr.splice(
        i,
        1,
        String.fromCharCode(sArr[i - 1].charCodeAt() + + sArr[i])
      );
    }
  }
  return sArr.join("");
};

console.log(replaceDigits("a1b2c3d4e"));
