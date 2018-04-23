function less(arr, i, j) {
  return arr[i - 1] < arr[j - 1]
}

function exchange(arr, i, j) {
  let temp = arr[i - 1]
  arr[i - 1] = arr[j - 1]
  arr[j - 1] = temp
}
// 下沉
function sink(arr, k, n) {
  while (2 * k <= n) {
    let j = 2 * k
    if (j < n && less(arr, j, j + 1)) j++
    if (!less(arr, k, j)) break
    exchange(arr, k, j)
    k = j
  }
}

function sort(arr) {
  let n = arr.length
  // 4 --> 1
  for (let k = Math.floor(n / 2); k >= 1; k--) sink(arr, k, n)
  while (n > 1) {
    // 9 --> 0
    exchange(arr, 1, n--)
    sink(arr, 1, n)
  }
}

let arr = [7, 2, 1, 5, 4, 9, 8, 6, 3]

sort(arr)

console.log(arr)
