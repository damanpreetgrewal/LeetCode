/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let count = 0;
  for (let i = 0; i < items.length; i++) {
    switch (ruleKey) {
      case "type":
        if (items[i][0] === ruleValue) count++;
        break;
      case "color":
        if (items[i][1] === ruleValue) count++;
        break;
      default:
        if (items[i][2] === ruleValue) count++;
        break;
    }
  }
  return count;
};

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "phone"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "gold"
  )
);
