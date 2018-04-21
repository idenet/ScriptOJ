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
  unshift(item) {
    this.queue && this.queue.unshift(item)
  }
}
