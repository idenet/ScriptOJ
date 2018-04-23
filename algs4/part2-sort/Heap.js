class Heap {
  constructor() {
    this.pq = []
    this.count = 0
  }
  less(i, j) {
    return this.pq[i - 1] < this.pq[j - 1]
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  insert(item) {
    this.pq[++this.count] = item
    this._swim(this.count)
  }
  delMax() {
    let max = this.pq[1] // 获取根结点
    this.exchange(1, this.count--) // 将其和最后一个节点交换
    this.pq[this.count + 1] = null // 防止越界
    this._sink(1) // 恢复有序
    return max
  }
  exchange(i, j) {
    let temp = this.pq[i - 1]
    this.pq[i - 1] = this.pq[j - 1]
    this.pq[j - 1] = temp
  }
  // 私有方法
  // 当k的父节点小于k 上浮
  _swim(k) {
    while (k > 1 && this.less(Number.parseInt(k / 2), k)) {
      this.exchange(k, Number.parseInt(k / 2))
      k = Number.parseInt(k / 2)
    }
  }
  // 父节点小，下沉
  _sink(k) {
    while (2 * k <= this.count) {
      let j = 2 * k
      if (j < this.count && this.less(j, j + 1)) j++
      if (!this.less(k, j)) break
      this.exchange(k, j)
      k = j
    }
  }
  print() {
    return this.pq
  }
}

let heap = new Heap()
heap.insert(4)
heap.insert(6)
heap.insert(9)
heap.insert(2)
heap.insert(3)
heap.insert(1)
heap.insert(8)
heap.insert(5)
heap.insert(7)

console.log(heap.print())
