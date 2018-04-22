class Node {
  constructor(item) {
    this.item = item
    this.next = null
  }
}

class LinkedQueue {
  constructor() {
    this.first = null
    this.last = null
    this.count = 0
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  enqueue(item) {
    let oldNode = this.last
    this.last = new Node(item)
    this.last.next = null
    if (this.isEmpty()) this.first = this.last
    // 为空则 first=last
    else oldNode.next = this.last
    this.count++
  }
  dequeue() {
    let item = this.first.item
    this.first = this.first.next
    // 如果为空则last设置为null
    if (this.isEmpty()) {
      this.last = null
    }
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
        let ele = first.item
        first = first.next
        count--
        return ele
      }
    }
  }
}

let queue = new LinkedQueue()
queue.enqueue('to')
queue.enqueue('be')
queue.enqueue('or')
queue.enqueue('not')
queue.enqueue('to')
queue.enqueue('be')
let iterator = queue.iterator()
while (iterator.hasNext()) {
  console.log(iterator.next())
}
