const makeArrayConsecutive = arr => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let output = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    if (diff === 1) {
      continue;
    } else {
      let j = arr[i];
      console.log(j);
      console.log(diff);
      while (j < arr[i] + diff - 1) {
        output.push(j + 1);
        j++;
      }
    }
  }
  return output;
};

console.log(makeArrayConsecutive([6, 2, 3, 8]));
