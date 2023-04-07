/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let leftCount = 0;
  let rightCount = 0;
  let output = "";
  let start = 0;

  for(let i=0;i<s.length;i++){
    if(s[i] === '(') leftCount++;
    if(s[i] === ')' && leftCount>0) rightCount++;
    if(leftCount === rightCount){
      output+= s.substring(start+1,i);
      start = i+1;
    }
  }
  return output;
};

console.log(removeOuterParentheses("((()()))"));
