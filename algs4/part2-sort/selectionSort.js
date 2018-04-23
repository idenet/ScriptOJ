const { exchange, less } = require('./util.js')
function sort(arr) {
  let n = arr.length
  for (let i = 0; i < n; i++) {
    let min = i // 假设最小值为i
    for (j = i + 1; j < n; j++) {
      if (less(arr[j], arr[min])) {
        min = j
      }
      exchange(arr, i, min) // 会进行多次重复的交换 n^2
    }
  }
  return arr
}

let arr = [7, 2, 1, 5, 4, 9, 8, 6, 3]

console.log(sort(arr))
