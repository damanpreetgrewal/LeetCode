/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let mag = {};
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "U":
        mag["y"] = mag["y"] + 1 || 1;
        break;
      case "D":
        if (mag["-y"]) mag["-y"] -= 1;
        else mag["-y"] = -1;
        break;
      case "L":
        if (mag["-x"]) mag["-x"] -= 1;
        else mag["-x"] = -1;
        break;
      case "R":
        if (mag["x"]) mag["x"] += 1;
        else mag["x"] = 1;
        break;
      default:
        console.log("error String");
        break;
    }
  }
  console.log(mag);
  return (mag["x"] || 0) + (mag["-x"] || 0) === 0 &&
    (mag["y"] || 0) + (mag["-y"] || 0) === 0
    ? true
    : false;
};

console.log(judgeCircle("RLUURDDDLU"));
