const toGoatLatin = sentence => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let output = [];
  let sentenceArr = sentence.split(' ');
  console.log('Sentence Arr: ', sentenceArr);

  for (let i = 0; i < sentenceArr.length; i++) {
    if (vowels.includes(sentenceArr[i][0])) {
      let arr = new Array(i + 1);
      arr.fill('a');
      output.push(sentenceArr[i] + 'ma' + arr.join(''));
    } else {
      let arr = new Array(i + 1);
      arr.fill('a');
      let modifiedWord = '';
      modifiedWord += sentenceArr[i].slice(1) + sentenceArr[i][0] + 'ma';
      output.push(modifiedWord + arr.join(''));
    }
  }

  return output.join(' ');
};

console.log(toGoatLatin('apple speak'));
