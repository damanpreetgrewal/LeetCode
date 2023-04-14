/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const mosreCode = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };

  const resultArr = [];
  for (let word of words) {
    const morseCodeTemp = word
      .split('')
      .reduce(
        (previousValue, currentValue) =>
          previousValue + mosreCode[currentValue],
        ''
      );
      console.log()
     if(resultArr.indexOf(morseCodeTemp) === -1){
      resultArr.push(morseCodeTemp);
     }
  }
  console.log(resultArr);
  return resultArr.length;
};

console.log(uniqueMorseRepresentations(['gin', 'abc']));
