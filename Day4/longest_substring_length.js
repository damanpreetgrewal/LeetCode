/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxSubstringLength = 0;
  let currentSubstring = '';

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const charIndex = currentSubstring.indexOf(char);
    if (charIndex !== -1) {
      currentSubstring = currentSubstring.slice(charIndex + 1);
    }
    currentSubstring += char;
    maxSubstringLength = Math.max(maxSubstringLength, currentSubstring.length);
  }

  return maxSubstringLength;
};

console.log(lengthOfLongestSubstring('pwwkew'));
