'use strict'
/**
 * 测试尾递归 js 。。v8是没有使用尾递归的，因为调试等原因。一个新的提案（显示的尾递归
 *
 * @author 香香鸡
 * @param {any} n
 * @param {number} [total=1]
 * @returns
 */
function factorial(n, total = 1) {
  if (n === 1) return total
  return factorial(n - 1, n * total)
}

factorial(5) // 120
