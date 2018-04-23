const { exchange, less } = require('./util.js')

function sort(arr) {
  let n = arr.length
  for (let i = 0; i < n; i++) {
    for (let j = i; j > 0 && less(arr[j], arr[j - 1]); j--) {
      exchange(arr, j, j - 1) // 对j进行比较 1+2+3+4.。n次 n(n-1)/2
    }
  }
  return arr
}

let arr = [7, 2, 1, 5, 4, 9, 8, 6, 3]

console.log(sort(arr))
