/**
 * KMP算法，降低模式匹配时间复杂度
 * 获取字串字符相似度 数组
 */

function getNext(t) {
  let i = 1,
    j = 0,
    next = []
  next[0] = 0
  while (i < t.length + 1) {
    if (j == 0 || t[i] === t[j]) {
      ++i
      ++j
      next[i - 1] = j
      console.log(i, j, next)
    } else {
      j = next[j - 1]
    }
  }
}

var a = Array.from('abcaca')

console.log(getNext(a))
