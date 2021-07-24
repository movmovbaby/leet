/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0)
    return false;

  let store = x;
  let reversed = 0;

  x = Math.abs(x);
  while (x) {
    reversed = reversed * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  if (reversed > 0x7FFFFFFF) {
    return false;
  } else {
    return reversed === store;
  }
};


let ret = isPalindrome(121);
console.log(ret);
