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
    return this.stack.length === 0
  }
  push(data) {
    this.stack && this.stack.push(data)
  }
  pop() {
    return this.stack && this.stack.pop()
  }
}

module.exports = {
  Stack
}
