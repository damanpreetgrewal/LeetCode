/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let firstLetter = coordinates[0]; //a
  let firstNumber = +coordinates[1]; //1
  let charCode = firstLetter.charCodeAt();
  let add = firstNumber + charCode;
  console.log(add);
  return add % 2 !== 0;
};

console.log(squareIsWhite("a2")); //black
