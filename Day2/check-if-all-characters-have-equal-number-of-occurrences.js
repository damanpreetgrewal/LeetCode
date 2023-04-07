/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let result = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    result[s[i]] = result[s[i]] + 1 || 1;
  }
  console.log(result);
  const set = new Set(Object.values(result));
  return set.size === 1 ? true : false;
};

console.log(areOccurrencesEqual("aabb"));
