let numbers = [65, 44, 12, 4];

numbers.forEach((item, index, arr) => (arr[index] = item * 10));

console.log(numbers);
