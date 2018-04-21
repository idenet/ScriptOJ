/**
 * 后进先出
 *
 * @author 香香鸡
 * @class Stack
 */
class Stack {
  constructor() {
    this.stack = []
  }
  size() {
    return this.stack.length
  }
  isEmpty() {
    this.stack.length = 0
  }
  push(data) {
    this.stack && this.stack.push(data)
  }
  pop() {
    return this.stack && this.stack.pop()
  }
}

const stack = new Stack()

stack.isEmpty()
stack.push(1)
stack.push(4)
stack.push(5)

console.log(stack.size())
console.log(stack.pop())
