var letterCombinations = function (digits) {
  if (digits === '1') return [];
  var table = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  var result = [''],
    result_temp = [];

  if (digits == '') {
    return [];
  }

  for (var i = 0; i < digits.length; i++) {
    var number = digits.charAt(i);
    for (var elem of table[number]) {
      for (var line of result) {
        result_temp.push(line + elem);
      }
    }
    result = result_temp;
    result_temp = [];
  }
  return result;
};

console.log(letterCombinations('34'));
