const { exchange, less } = require('./util.js')

function partition(arr, lo, hi) {
  // 将数组切分为a[lo..i-1] a[i] a[i...hi]
  let i = lo
  let j = hi + 1
  let item = arr[lo] // 切分元素
  while (true) {
    // 扫描左右，检查扫描是否结束并交换元素
    while (less(arr[++i], item)) if (i === hi) break
    while (less(item, arr[--j])) if (j === lo) break
    if (i >= j) break
    exchange(arr, i, j)
  }
  exchange(arr, lo, j) // 将item = arr[j] 放入正确的位置
  return j
}

function sort(arr, lo, hi) {
  if (hi <= lo) return // if(hi<=lo +5) {insertSort.sort(arr, lo, hi); return }
  let j = partition(arr, lo, hi)
  sort(arr, lo, j - 1)
  sort(arr, j + 1, hi)
}

let arr = [7, 2, 1, 5, 4, 9, 8, 6, 3]

sort(arr, 0, arr.length - 1)

console.log(arr)
