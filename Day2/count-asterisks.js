/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let count = 0;
  var inputArr = s.split("|");
  console.log(inputArr);
  let i = 0;
  while (i < inputArr.length) {
    if (i % 2 === 0) {
      for (let j = 0; j < inputArr[i].length; j++) {
        if (inputArr[i][j] === "*") {
          count++;
        }
      }
    }
    i++;
  }
  return count;
};

console.log(countAsterisks("*|*e*et|c**o|*de|"));
