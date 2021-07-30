/**
 * @param {number} n
 * @return {number}
 */
/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


на i шаг можно перейти за количество шагов на i-1 шаге (1 шаг до i) и i-2 шаге (2 шага до i)
получается последовательность Фибоначчи
*/
var climbStairs = function (n) {
  if (n == 1) {
    return 1;
  }

  let n1 = 1;
  let n2 = 2;
  let nn = 0;
  for (let i = 3; i <= n; i++) {
    nn = n2;
    n2 = n1 + n2;
    n1 = nn;
  }
  return n2;
};

let ans = climbStairs(5);
console.log(ans);
