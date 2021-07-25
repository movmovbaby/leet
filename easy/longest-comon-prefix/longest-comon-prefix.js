/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

  let prefix = '';
  let noPrefix = false;
  for (let i = 0; i < strs[0].length; i++) {
    let letter = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] === letter) {
        continue;
      } else {
        noPrefix = !noPrefix;
        break;
      }
    }
    if (noPrefix) {
      return prefix;
    }
    prefix += strs[0][i];
  }
  return prefix
};

//"dog","racecar","car"
strs = ["flower", "flow", "flight", "floor", "deer"];

const answer = longestCommonPrefix(strs);
console.log(answer);
