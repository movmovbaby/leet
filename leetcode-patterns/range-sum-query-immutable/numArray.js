/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.prefixSum = [];
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
    this.prefixSum[i] = s;
  }

  return this;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) {
    return this.prefixSum[right]
  } else {
    return this.prefixSum[right] - this.prefixSum[left - 1];
  }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */


let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
let ans = numArray.sumRange(0, 5);
console.log(ans);
