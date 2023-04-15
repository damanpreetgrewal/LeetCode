/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  // Initialize a 2D table to store the lengths of palindromic substrings
  const table = Array(s.length)
    .fill()
    .map(() => Array(s.length).fill(0));

  // All substrings of length 1 are palindromic
  let maxLength = 1;
  for (let i = 0; i < s.length; i++) {
    table[i][i] = 1;
  }

  // Check for substrings of length 2
  let start = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      table[i][i + 1] = 1;
      start = i;
      maxLength = 2;
    }
  }

  // Check for substrings of length 3 or more
  for (let k = 3; k <= s.length; k++) {
    for (let i = 0; i < s.length - k + 1; i++) {
      let j = i + k - 1;
      if (table[i + 1][j - 1] && s[i] === s[j]) {
        table[i][j] = 1;
        if (k > maxLength) {
          start = i;
          maxLength = k;
        }
      }
    }
  }

  // Return the longest palindromic substring
  return s.substring(start, start + maxLength);
}

console.log(longestPalindrome('babad'));
