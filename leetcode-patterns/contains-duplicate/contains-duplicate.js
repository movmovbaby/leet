/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let dups = new Set();
  dups.add(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    if (dups.has(nums[i])) {
      return true;
    } else {
      dups.add(nums[i]);
    }
  }
  return false;
};


let nums = [1, 2, 3, 4];
let ans = containsDuplicate(nums);
console.log(ans);
