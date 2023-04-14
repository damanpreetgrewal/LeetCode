const bracketValidator = s => {
  let stack = [];

  for (let char of s) {
    if (char === '{' || char === '(' || char === '[') {
      stack.push(char);
      console.log(stack);
    } else if (
      (char === '}' && stack[stack.length - 1] === '{') ||
      (char === ')' && stack[stack.length - 1] === '(') ||
      (char === ']' && stack[stack.length - 1] === '[')
    ) {
      stack.pop();
    } else return false;
  }

  return stack.length ? false : true;
};

console.log(bracketValidator('{[()]}'));
