/**
 * 简单的模式匹配算法
 * 这个算法，最小事件复杂度 O(n+m) 最大复杂度 (O(n-m+1)*m)
 */
function patternMatch(s, t) {
  let pos = 0, // t字符串下标
    i = 0 // s字符串下标
  while (pos <= t.length) {
    // 如果pos小于t的长度则循环
    if (s[i] === t[pos]) {
      ++i
      ++pos // 相等则下标自增
    } else {
      i = i - pos + 1 // 将i移到上一次开始比对的前一个
      pos = 0 // t串下表直接置零
    }
  }
  if (pos >= t.length) {
    return i - t.length - 1 // 返回结果 符合子串的，父串开始的第一个下标
  } else {
    return 0
  }
}

const S = 'gooqqdgoogle'
const T = 'google'
let a = patternMatch(S, T)
console.log(a)
