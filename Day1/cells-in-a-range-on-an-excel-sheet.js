/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let output = [];
  let range = s.split(':');
  let maxStartCol = range[0].charAt(0).charCodeAt();
  let maxStartRow = range[0].charAt(range[0].length - 1);

  console.log('maxStartRow', maxStartRow);
  console.log('maxStartCol', maxStartCol);

  let maxDestCol = range[1].charAt(0).charCodeAt();
  let maxDestRow = range[1].charAt(range[1].length - 1);

  for (let i = maxStartCol; i <= maxDestCol; i++) {
    for (let j = maxStartRow; j <= maxDestRow; j++) {
      output.push(String.fromCharCode(i) + j);
    }
  }
  return output;
};

console.log(cellsInRange('K1:L2'));
