const pigLatinize = str => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = '';
  let strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    if (vowels.indexOf(strArr[i][0].toLowerCase()) !== -1) {
      strArr[i] = strArr[i] + '-way';
    } else {
      strArr[i] = strArr[i].substring(1) + '-' + strArr[i][0] + 'ay';
    }
  }
  return strArr.join(' ');
};

console.log(pigLatinize('pig'));
