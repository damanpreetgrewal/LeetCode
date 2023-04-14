const str = 'Linkin Park';

//Slice on Array gives the result as an Array
const result1 = str.split('').slice(1, 4);

//Slice to get the last element on an array with -1
const result2 = str.split('').slice(-1);

//Slice on string gives the result as an string
const result3 = str.slice(-1);

//Splice on Array gives the result as an array but the only different is the second params corresponds to the total items
const result4 = str.split('').splice(1 , 4);

//Slice to get the last Element with -1
const result5 = str.split('').splice(-1);


const result6 = str.split('').splice(1);

console.log(result1, result2, result3, result4, result5, result6);
