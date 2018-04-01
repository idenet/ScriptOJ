/**
 * 二分查找法
 * 1. 二分查找数组必然是有序的
 * 2. key值必然在数组之内
 */

/**
 *
 *
 * @author idenet(leimiliya@hotmail.com)
 * @param {[]int} array
 * @param {int} key
 * @returns {int}
 */
function binarySeach(array, key) {
  if (array.indexOf(key) === -1) return -1 // 注意负数返回的也是真，只有0返回假
  let low = 0,
    mid = 0,
    high = array.length - 1 // 12
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2) // 6
    if (key < array[mid]) high = mid - 1
    else if (key > array[mid]) low = mid + 1
    else return mid
  }
  return -1
}

function main() {
  let array = [3, 5, 6, 8, 9, 43, 23, 24, 46, 45, 47, 56, 78]
  let key = 9
  let arraySort = array.sort((a, b) => {
    return a - b // 使用 a > b 不行
  })
  console.log(binarySeach(arraySort, 9))
}

module.exports = binarySeach
