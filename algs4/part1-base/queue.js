class Queue {
  constructor() {
    this.queue = []
  }
  isEmpty() {
    this.queue.length = 0
  }
  size() {
    return this.queue.length
  }
  enqueue(element) {
    this.queue.push(element)
  }
  dequeue() {
    return this.queue.shift()
  }
}
