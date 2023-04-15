const sumOddLengthSubarrays = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr.length; j++) {
      let subArr = arr.slice(i, j);
      if (subArr.length % 2 !== 0) {
        let sum = subArr.reduce((s, el, i) => s + el, 0);
        total += sum;
      }
    }
  }
  return total;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
