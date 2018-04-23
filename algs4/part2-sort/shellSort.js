const { exchange, less } = require('./util.js')

/**
 * 插入排序的优化版，希尔排序；现根据递增的序列排序，再根据递减的序列排序
 *
 * @author 香香鸡
 * @param {any} arr
 * @returns
 */
function sort(arr) {
  let n = arr.length
  let h = 1 // h个有序数组
  while (h < Math.floor(n / 3)) {
    h = 3 * h + 1
  }
  while (h >= 1) {
    // 将数组变为h有序
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && less(arr[j], arr[j - h]); j -= h)
        exchange(arr, j, j - h)
    }
    h = Math.floor(h / 3)
  }
  return arr
}

let arr = [7, 2, 1, 5, 4, 9, 8, 6, 3]

console.log(sort(arr))
