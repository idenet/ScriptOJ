class Node {
  constructor(key, value, next) {
    this.key = key
    this.value = value
    this.next = next
  }
}

class SequentialSearchST {
  constructor() {
    this.first = null
    this.count = 0
  }
  size() {
    return this.count
  }
  isEmpty() {
    return this.count === 0
  }
  put(key, value) {
    for (let x = this.first; x !== null; x = x.next) {
      if (key === x.key) {
        x.value = value
        return
      }
    }
    this.first = new Node(key, value, this.first)
    this.count++
  }
  get(key) {
    for (let x = this.first; x !== null; x = x.next) {
      if (key === x.key) {
        return x.value
      }
    }
    return null
  }
  contain(key) {
    return this.get(key) !== null
  }
  delete(key) {
    this.first = this._delete(this.first, key)
  }
  _delete(x, key) {
    if (x === null) return null
    if (key === x.key) {
      this.count--
      return x.next
    }
    x.next = this._delete(x.next, key)
    return x
  }
  iterator() {
    let first = this.first
    let count = this.count
    return {
      hasNext() {
        return count
      },
      next() {
        let key = first.key
        let value = first.value
        first = first.next
        count--
        return {
          key,
          value
        }
      }
    }
  }
}

let sequentialSearchST = new SequentialSearchST()

sequentialSearchST.put('e', 4)
sequentialSearchST.put('e', 5)
sequentialSearchST.put('f', 2)
sequentialSearchST.put('g', 3)
sequentialSearchST.put('h', 6)

console.log(sequentialSearchST.delete('g'))

let iterator = sequentialSearchST.iterator()

while (iterator.hasNext()) {
  let { key, value } = iterator.next()
  console.log(key, value)
}
