/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  return (
    s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase() ===
    s
      .replace(/[^a-zA-Z0-9]/g, '')
      .toLocaleLowerCase()
      .split('')
      .reverse()
      .join('')
  );
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
