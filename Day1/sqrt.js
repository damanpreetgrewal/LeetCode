/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let mySqrt = 1;
  if (x === 0) {
    return 0;
  }
  // for(let i=1;i*i<=x;i++){
  //     sqrt = i;
  // }
  let i = 1;
  while (i * i <= x) {
    sqrt = i;
    i++;
  }
  return sqrt;
};

console.log(mySqrt(64));
