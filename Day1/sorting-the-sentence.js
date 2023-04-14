/**
 * @param {string} s
 * @return {string}
 */
// var sortSentence = function (s) {
//   let output = [];
//   let wordsArr = s.split(" ");
//   //   console.log(wordsArr);
//   for (let i = 0; i < wordsArr.length; i++) {
//     switch (wordsArr[i].charAt(wordsArr[i].length - 1)) {
//       case "1":
//         output.unshift(wordsArr[i].substring(0, wordsArr[i].length - 1));
//         break;
//       case "2":
//         output.splice(1, 0, wordsArr[i].substring(0, wordsArr[i].length - 1));
//         break;
//       case "3":
//         console.log("issue");
//         output.splice(2, 0, wordsArr[i].substring(0, wordsArr[i].length - 1));
//         break;
//       case "4":
//         output.splice(3, 0, wordsArr[i].substring(0, wordsArr[i].length - 1));
//         break;
//     }

//     console.log("output", output);
//   }
//   console.log(output.join(" "));
//   return output.join(" ") === "bwKhelcNiyNBpjGUN l lGaWqAkfVIFhqBzRs";
// };

var sortSentence = function (s) {
  let sorted = [];
  for (let str of s.split(' ')) {
    let index = str[str.length - 1] - 1;
    sorted[index] = str.slice(0, str.length - 1);
  }
  return sorted.join(' ');
};

console.log(sortSentence('is2 sentence4 This1 a3'));
