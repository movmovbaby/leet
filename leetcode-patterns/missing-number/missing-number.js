/**
 * @param {number[]} nums
 * @return {number}
 */
/* var missingNumber = function (nums) {
  let s = new Set();
  for (let i = 0; i <= nums.length; i++) {
    s.add(i);
  }
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) {
      s.delete(nums[i]);
    }
  }
  const iter = s.values();
  return iter.next().value;
}; */

var missingNumber = function (nums) {
  let n = nums.length;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return n * (n + 1) / 2 - sum;
};


let nums = [3, 0, 1];
let ans = missingNumber(nums);
console.log(ans);
