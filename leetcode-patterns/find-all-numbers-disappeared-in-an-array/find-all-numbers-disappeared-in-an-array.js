/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* var findDisappearedNumbers = function (nums) {
  let s = new Set();
  for (let i = 1; i <= nums.length; i++) {
    s.add(i);
  }
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) {
      s.delete(nums[i]);
    }
  }
  let arr = Array.from(s);
  return arr;
}; */

var findDisappearedNumbers = function (nums) {
  let i = 0;
  let pos = 0;
  let dump = 0;
  while (i < nums.length) {
    pos = nums[i] - 1;
    if (nums[i] != nums[pos]) {
      dump = nums[i];
      nums[i] = nums[pos];
      nums[pos] = dump;
    } else {
      i++;
    }
  }

  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      arr.push(i + 1);
    }
  }
  return arr;
};


let nums = [4, 3, 2, 7, 8, 2, 3, 1];
// 1:  [4, 3, 2, 7, 8, 2, 3, 1] -> [7, 3, 2, 4, 8, 2, 3, 1] i=0
// 2:  [7, 3, 2, 4, 8, 2, 3, 1] -> [3, 3, 2, 4, 8, 2, 7, 1] i=0
// 3:  [3, 3, 2, 4, 8, 2, 7, 1] -> [4, 3, 2, 3, 8, 2, 7, 1] i=0
// 4:  [4, 3, 2, 3, 8, 2, 7, 1] -> [3, 3, 2, 4, 8, 2, 7, 1] i=0
// 5:  [3, 3, 2, 4, 8, 2, 7, 1] -> [2, 3, 3, 4, 8, 2, 7, 1] i=0
// 6:  [2, 3, 3, 4, 8, 2, 7, 1] -> [3, 2, 3, 4, 8, 2, 7, 1] i=1
// 7:  [2, 3, 3, 4, 8, 2, 7, 1] i=2
// 8:  [2, 3, 3, 4, 8, 2, 7, 1] i=3
// 9:  [2, 3, 3, 4, 8, 2, 7, 1] -> [2, 3, 3, 4, 1, 2, 7, 8] i=4
// 10: [2, 3, 3, 4, 1, 2, 7, 8] -> [1, 3, 3, 4, 2, 2, 7, 8] i=4
// 11: [1, 3, 3, 4, 2, 2, 7, 8] -> [1, 2, 3, 4, 3, 2, 7, 8] i=4
// 12: [1, 2, 3, 4, 3, 2, 7, 8] i=5
// 13: [1, 2, 3, 4, 3, 2, 7, 8] i=6
// 14: [1, 2, 3, 4, 3, 2, 7, 8] i=7

let ans = findDisappearedNumbers(nums);
console.log(ans);
