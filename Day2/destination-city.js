/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let startCity = [];
  for (let i = 0; i < paths.length; i++) {
    startCity.push(paths[i][0]);
  }
  for (let i = 0; i < startCity.length; i++) {
    if (!startCity.includes(paths[i][1])) {
      return paths[i][1];
    }
  }
};

console.log(
  destCity([
    ["B", "C"],
    ["D", "B"],
    ["C", "A"],
  ])
);
