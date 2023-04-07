/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  let counter = 0;
  let len = mat.length - 1;

  for (let i = 0; i < mat.length; i++) {
    if (counter !== len) {
      sum += mat[i][counter];
      sum += mat[i][len];
    } else {
      sum += mat[i][counter];
    }
    counter++;
    len--;
  }
  return sum;
};

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  diagonalSum([
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [7, 8, 9, 1],
    [7, 8, 9, 1],
  ])
);
