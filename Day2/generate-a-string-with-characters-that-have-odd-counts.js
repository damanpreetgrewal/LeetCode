/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (num) {
  if (num % 2 === 0) {
    let arr1 = new Array(num).fill("a");
    console.log("arr1", arr1);
    arr1.splice(arr1.length - 1, 1, "b");
    console.log("arrMod", arr1);
    return arr1.join("");
  } else {
    let arr2 = new Array(num).fill("a");
    return arr2.join("");
  }
};

console.log(generateTheString(3));
