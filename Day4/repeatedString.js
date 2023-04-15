const repeatedString = (s, n) => {
  // Write your code here

  let occurances = s.split('a').length - 1;
  console.log('occurances', occurances);
  let max = Math.floor(n / s.length);
  console.log('max', max);
  let totalAs = occurances * max;
  console.log('totalAs', totalAs);
  totalAs += s.slice(0, n % s.length).split('a').length - 1;
  console.log(s.slice(0, n % s.length));
  return totalAs;
};

console.log(repeatedString('aba', 11));
