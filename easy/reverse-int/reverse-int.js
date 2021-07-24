/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
  let str = (x).toString();
  let ans = '';
  let sign = '';
  if (Number.isNaN(parseInt(str[0]))) {
    sign = str[0];
    str = str.slice(1);
  }
  str = str.split('').reverse().join('');
  ans = sign + str;
  return ans;
};

let reverse2 = function (x) {
  let reversed = 0;
  let sign = x < 0;
  x = Math.abs(x);
  while (x) {
    reversed = reversed * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return reversed > 0x7FFFFFFF ? 0 : sign ? -reversed : reversed;

}

const ret = reverse2(-2147483412);
console.log(ret);
