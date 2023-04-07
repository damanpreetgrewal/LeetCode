/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
 let output = [];
 for(let i=0;i<s.length;i++){
  output[indices[i]] = s[i];
 }
 return output.join('');
};

console.log(restoreString("abc", [2, 1, 0]));
