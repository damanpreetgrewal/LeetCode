/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let pal = '';
  let startIndex = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(s.substring(startIndex, i));
    if (
      s.substring(startIndex, i) ===
      s.substring(startIndex, i).split('').reverse().join('')
    ) {
      console.log('entered if for i: ', i);

      pal = s.substring(startIndex, i);
    } else {
      console.log('entered else for i: ', i);
      startIndex = i;
    }
  }
  return pal;
};

console.log(longestPalindrome('cbbd'));
