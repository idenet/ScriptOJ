/**
 * 定义节点
 *
 * @author 香香鸡
 * @class Node
 */
class Node {
  constructor() {
    this.element = null
    this.next = null
  }
}

/**简单创建三个节点 */

let first = new Node()
let seconed = new Node()
let third = new Node()

/**赋值 */
first.element = 'to'
seconed.element = 'be'
third.element = 'or'

/**连接 */
first.next = seconed
seconed.next = third

console.log(first.next)
console.log('========')
console.log(seconed)
console.log('========')
console.log(third)

// 插入新节点

let oldNode = first
first = new Node()
first.element = 'not'
first.next = oldNode

console.log(first)

console.log('=======')
for (let i = first; i != null; i = i.next) {
  console.log(i.element)
}
