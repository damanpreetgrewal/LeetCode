const repeatedString = (s, n) => {
  // Write your code here to find the occurances of a in the first nth index elements of a repeating string

  let occurances = s.split('a').length - 1;

  let maxFullRepetitionsOfString = Math.floor(n / s.length);

  let total = occurances * maxFullRepetitionsOfString;

  let remainder = s.slice(0, n % s.length);

  total += remainder.split('a').length - 1;

  return total;
};

console.log(repeatedString('aba', 10));
