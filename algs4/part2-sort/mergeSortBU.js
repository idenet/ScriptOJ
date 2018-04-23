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
 * 自底向上的归并排序
 *
 * @author 香香鸡
 * @param {any} arr
 */
function sort(arr) {
  let n = arr.length
  // sz 子数组大小
  for (let sz = 1; sz < n; sz = sz + sz) {
    // lo 子数组索引
    for (let lo = 0; lo < n - sz; lo += sz + sz) {
      merge(arr, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, n - 1))
    }
  }
}

let arr = [7, 2, 1, 5, 4, 9, 8, 6, 3]

sort(arr)

console.log(arr)
