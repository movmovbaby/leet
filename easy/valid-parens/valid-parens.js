/**
 * @param {string} s
 * @return {boolean}
 */
/* const isValid = function (s) {
  if (s.length == 1) {
    return false;
  }
  let stack = [];
  let left = new Map([['('], ['['], ['{']]);
  let right = new Map([[')', '('], [']', '['], ['}', '{']]);
  let ret = true;
  for (let i = 0; i < s.length; i++) {
    if (left.has(s[i])) {
      stack.push(s[i])
    } else {
      if (right.get(s[i]) !== stack[stack.length - 1]) {
        return !ret;
      }
      stack.pop();
    }
  }
  if (stack.length !== 0) {
    return false;
  }

  return ret;
}; */

const isValid = function (s) {
  if (s.length == 1) {
    return false;
  }
  let stack = [];
  let right = new Map([[')', '('], [']', '['], ['}', '{']]);

  for (let i = 0; i < s.length; i++) {
    if (right.has(s[i])) {
      let top = stack.pop();
      if (top !== right.get(s[i])) {
        return false;
      }
    }
    else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}

const s = "()[]{}";
const s1 = '(]';
const s2 = '([)];'
const s3 = "{[]}";
const s4 = "(";
const s5 = '[[';

let answer = isValid(s);
console.log(answer);

/* answer = isValid(s1);
console.log(answer);


answer = isValid(s2);
console.log(answer);

answer = isValid(s5);
console.log(answer);
 */
