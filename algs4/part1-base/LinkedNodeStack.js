class Node {
  constructor(item) {
    this.item = item
    this.next = null
  }
}

class LinkedStack {
  constructor() {
    this.first = null //栈顶
    this.count = 0
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  push(element) {
    let oldfirst = this.first
    let newNode = new Node(element)
    newNode.next = oldfirst
    this.first = newNode
    this.count++
  }
  pop() {
    let item = this.first.item
    this.first = this.first.next
    this.count--
    return item
  }
  iterator() {
    let first = this.first
    let count = this.count
    return {
      hasNext() {
        return count
      },
      next() {
        let item = first.item
        first = first.next
        count--
        return item
      }
    }
  }
}

let stack = new LinkedStack()
stack.push('to')
stack.push('be')
stack.push('or')
stack.push('not')
stack.push('to')
stack.push('be')
let iterator = stack.iterator()
while (iterator.hasNext()) {
  console.log(iterator.next())
}
