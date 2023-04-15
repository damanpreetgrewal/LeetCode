/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }
  if (haystack === null || needle === null) {
    return -1;
  }
  for (var i = 0; i <= haystack.length; i++) {
    // Avoid looping needle if first letter doesn't match
    if (haystack.charAt(i) === needle.charAt(0)) {
      for (var j = 1; j < needle.length; j++) {
        if (haystack.charAt(i + j) !== needle.charAt(j)) {
          continue;
        }
      }
      return i;
    }
  }
  return -1;
};

console.log(strStr('sadbutsad', 'sad'));
