const rotateLeft = (arr, d) => {
  let output = [];
  for (let i = 0; i < d; i++) {
    let temp = arr.shift();
    output.push(temp);
  }
  return [...arr, ...output];
};

console.log(rotateLeft([1, 2, 3 , 4, 5], 4));
