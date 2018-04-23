const { exchange, less } = require('./util.js')

const aux = []

function merge(arr, lo, mid, hi) {
  let i = lo,
    j = mid + 1
  for (let k = lo; k <= hi; k++) {
    aux[k] = arr[k]
  }
  // 归并回到arr
  for (let k = lo; k <= hi; k++) {
    if (i > mid) arr[k] = aux[j++]
    else if (j > hi) arr[k] = aux[i++]
    else if (less(aux[j], aux[i])) arr[k] = aux[j++]
    else arr[k] = aux[i++]
  }
}
/**
 * 通过分治思想排序
 * @author 香香鸡
 * @param {any} arr
 * @param {any} lo
 * @param {any} hi
 */
function sort(arr, lo, hi) {
  // 讲述组[lo, hi]进行排序
  if (hi <= lo) return
  let mid = Math.floor(lo + (hi - lo) / 2)
  sort(arr, lo, mid)
  sort(arr, mid + 1, hi)
  merge(arr, lo, mid, hi)
}

function mergeSort(arr) {
  sort(arr, 0, arr.length - 1)
}

let arr = [7, 2, 1, 5, 4, 9, 8, 6, 3]

mergeSort(arr)

console.log(arr)
