class Queue {
  constructor() {
    this.items = []
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  enqueue(element) {
    this.items.push(element)
  }
  dequeue() {
    let item = this.items.shift()
    return item
  }
}

module.exports = {
  Queue
}
