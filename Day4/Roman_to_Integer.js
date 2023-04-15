var romanToInt = function (s) {
  const numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (numbers[s[i + 1]] && numbers[s[i]] < numbers[s[i + 1]]) {
      result -= numbers[s[i]];
    } else {
      result += numbers[s[i]];
    }
  }

  return result;
};


//1767
console.log(romanToInt("MDCCLXVII"));