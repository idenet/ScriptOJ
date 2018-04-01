/**
 * 给定一个整数数列，找出其中和为特定值的那两个数。

你可以假设每个输入都只会有一种答案，同样的元素不能被重用。

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i]
    let index = nums.lastIndexOf(num)
    if (index !== -1 && index !== i) {
      return [i, index]
    }
  }
}

function twosum2(nums, target) {
  let obj = {},
    attr = []
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] >= 0) {
      return [obj[nums[i]], i]
    }
    obj[target - nums[i]] = i
  }
}
let nums = [2, 7, 11, 15],
  target = 9

console.log(twosum2(nums, target))
