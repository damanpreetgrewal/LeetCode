const binarySearch = (array, element) => {
  let start = 0;
  let end = array.length - 1;
  while (end >= start) {
    let mid = parseInt((start + end) / 2);
    if (array[mid] === element) {
      return mid;
    } else if (element > array[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 24, 32, 87, 90], 87));
