/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
      if (i == j) {
        break;
      }
    }
  }

  for (let k = 0; k < n; k++) {
    matrix[k].reverse();
  }
  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

//output
//[[7,4,1],[8,5,2],[9,6,3]]
