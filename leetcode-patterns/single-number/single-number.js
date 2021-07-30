/**
 * @param {number[]} nums
 * @return {number}
 */


/*
через хэшмапу
var singleNumber = function (nums) {
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (m.has(nums[i])) {
      m.set(nums[i], 2);
    } else {
      m.set(nums[i], 1);
    }
  }
  console.log(m);

  for (let e of m) {
    if (e[1] === 1)
      return e[0];
  }
  return 0
}; */

/* использование побитовой операции XOR (a xor a = 0, a xor 0 = a, a xor b xor a = (a xor a) xor b = b) */
var singleNumber = function (nums) {
  let mask = 0;
  for (let i = 0; i < nums.length; i++) {
    mask ^= nums[i];
  }
  return mask;
};


nums = [4, 1, 2, 1, 2];
let ans = singleNumber(nums);
console.log(ans);
