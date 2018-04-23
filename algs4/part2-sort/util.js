function exchange(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function less(i, j) {
  return i < j
}

module.exports = {
  exchange,
  less
}
