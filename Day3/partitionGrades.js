const failingGrades = (arr) => {
  let arr1 = []; //passing array
  let arr2 = []; //failing array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }

  // console.log(arr1);
  // console.log(arr2);
  arr1.splice(arr1.length, arr2.length, ...arr2);
  return arr1;
};

console.log(failingGrades([80, 90, 4, 20, 70, 30, 50]));
