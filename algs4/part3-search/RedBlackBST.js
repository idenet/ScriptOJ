class Node {
  constructor(key, value, color, size) {
    this.key = key
    this.value = value
    this.color = color
    this.size = size
    this.left = null
    this.right = null
  }
}

const RED = true
const BLACK = false

class RedBlackBST {
  constructor() {
    this.root = null
  }
  size() {
    return this._size(this.root)
  }
  min() {
    return this._min(this.root).key
  }
  isEmpty() {
    return this.root === null
  }
  put(key, value) {
    this.root = this._put(this.root, key, value)
    this.root.color = BLACK
  }
  get(key) {
    return this._get(this.root, key)
  }
  delete(key) {
    if (!this._contains(key)) return -1
    if (!this._isRed(this.root.left) && !this._isRed(this.root.right)) {
      this.root.color = RED
    }
    this.root = this._delete(this.root, key)
    if (!this.isEmpty()) this.root.color = BLACK
  }
  _delete(h, key) {
    if (key < h.key) {
      if (!this._isRed(h.left) && !this._isRed(h.left.left))
        h = this._moveRedLeft(h)
      h.left = this._delete(h.left, key)
    } else {
      if (this._isRed(h.left)) h = this._rotateRight(h)
      if (key === h.key && h.right === null) return null
      if (!this._isRed(h.right) && !this._isRed(h.right.left))
        h = this._moveRedRight(h)
      if (key === h.key) {
        let x = this._min(h.right)
        h.key = x.key
        h.value = x.value
        h.right = this._deleteMin(h.right)
      } else {
        h.right = this._delete(h.right, key)
      }
    }
    return this._balance(h)
  }
  deleteMin() {
    if (!this._isRed(this.root.left) && !this._isRed(this.root.right)) {
      this.root.color = RED
    }
    this.root = this._deleteMin(this.root)
    if (!this.isEmpty()) this.root.color = BLACK
  }
  _get(x, key) {
    while (x !== null) {
      if (key < x.key) x = x.left
      else if (key > x.key) x = x.right
      else return x.value
    }
    return null
  }
  _contains(key) {
    return this.get(key) !== null
  }
  _deleteMin(h) {
    if (h.left === null) return null
    if (!this._isRed(h.left) && !this._isRed(h.left.left)) h._moveRedLeft(h)
    h.left = this._deleteMin(h.left)
    return this._balance(h)
  }
  _put(h, key, value) {
    if (h === null) {
      // 标准插入，和父节点用红连接相连
      return new Node(key, value, RED, 1)
    }
    // 找到key就更新，找不到创建
    if (key < h.key) h.left = this._put(h.left, key, value)
    else if (key > h.key) h.right = this._put(h.right, key, value)
    else h.value = value
    if (this._isRed(h.right) && !this._isRed(h.left)) h = this._rotateLeft(h)
    if (this._isRed(h.left) && this._isRed(h.left.left))
      h = this._rotateRight(h)
    if (this._isRed(h.left) && this._isRed(h.right)) this._flipColors(h)
    h.size = this._size(h.left) + this._size(h.right) + 1
    return h
  }
  _isRed(x) {
    if (x === null) return false
    return x.color === RED
  }
  _moveRedLeft(h) {
    this._flipColors(h)
    if (this._isRed(h.right.left)) {
      h.right = this._rotateRight(h.right)
      h = this._rotateLeft(h)
      this._flipColors(h)
    }
    return h
  }
  _moveRedRight(h) {
    this._flipColors(h)
    if (this._isRed(h.left.left)) {
      h = this._rotateRight(h)
      this._flipColors(h)
    }
    return h
  }
  _balance(h) {
    if (this._isRed(h.right)) h = this._rotateLeft(h)
    if (this._isRed(h.left) && this._isRed(h.left.left))
      h = this._rotateRight(h)
    if (this._isRed(h.left) && this._isRed(h.right)) this._flipColors(h)
    h.size = this._size(h.left) + this._size(h.right) + 1
    return h
  }
  _rotateRight(h) {
    let x = h.left
    h.left = x.right
    x.right = h
    x.color = h.color
    h.color = RED
    x.size = h.size
    h.size = this._size(h.left) + this._size(h.right) + 1
    return x
  }
  _rotateLeft(h) {
    let x = h.right
    h.right = x.left
    x.left = h
    x.color = h.color
    h.color = RED
    x.size = h.size
    h.size = this._size(h.left) + this._size(h.right) + 1
    return x
  }
  _flipColors(h) {
    h.color = !h.color
    h.left.color = !h.left.color
    h.right.color = !h.right.color
  }
  _size(x) {
    if (x === null) return 0
    return x.size
  }
  _min(x) {
    if (x.left === null) return x
    else return this._min(x.left)
  }
  print() {
    return this.root
  }
}

var RBTree = new RedBlackBST()
RBTree.put(4, 'test4')
RBTree.put(1, 'test1')
RBTree.put(10, 'test10')
RBTree.put(2, 'test2')
RBTree.put(3, 'test3')
RBTree.put(9, 'test9')
RBTree.put(8, 'test8')
RBTree.put(5, 'test5')
RBTree.put(7, 'test7')
RBTree.put(6, 'test6')

console.log(RBTree.print())
console.log(RBTree.min())
console.log(RBTree.delete(1))
console.log(RBTree.min())
