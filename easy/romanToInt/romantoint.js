/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let acc = 0;
  let i = 0;
  for (; i < s.length;) {
    switch (s[i]) {
      case 'I':
        if (s[i + 1] === 'V') {
          acc += 4;
          i += 2;
          break;
        } else if (s[i + 1] === 'X') {
          acc += 9;
          i += 2;
          break;
        }
        acc += 1;
        i++;
        break;

      case 'V':
        acc += 5;
        i++;
        break;

      case 'X':
        if (s[i + 1] === 'L') {
          acc += 40;
          i += 2;
          break;
        } else if (s[i + 1] === 'C') {
          acc += 90;
          i += 2;
          break;
        }
        acc += 10;
        i++
        break;

      case 'L':
        acc += 50;
        i++;
        break;

      case 'C':
        if (s[i + 1] === 'D') {
          acc += 400;
          i += 2;
          break;
        } else if (s[i + 1] === 'M') {
          acc += 900;
          i += 2;
          break;
        }
        acc += 100;
        i++
        break;

      case 'D':
        acc += 500;
        i++;
        break;

      case 'M':
        acc += 1000;
        i++;
        break;
    }
  }
  return acc
};

let answer = romanToInt('LVIII');
console.log(answer);
answer = romanToInt('MCMXCIV');
console.log(answer);
