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
  const resArray = [];
  let count = 0;
  for (i in words) {
    const word = words[i];
    console.log(word);
    const temp = word
      .split('')
      .reduce(
        (previousValue, currentValue, i) =>
          previousValue + mosreCode[currentValue],
        ''
      );
    console.log('temp', temp);

    if (resArray.indexOf(temp) === -1) {
      resArray.push(temp);
      count++;
    }
  }
  return count;
};

console.log(uniqueMorseRepresentations(['gin', 'abc']));
