class Node {
  constructor(key, value, size) {
    this.key = key
    this.value = value
    this.size = size
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null // 根结点
  }
  size() {
    return this._size(this.root)
  }
  get(key) {
    return this._get(this.root, key)
  }
  put(key, value) {
    // 查找key，找到更新它的值，否则创建一个新的节点
    this.root = this._put(this.root, key, value)
  }
  _put(x, key, value) {
    // 如果key存在以x为根结点的子树中就更新它的值，否则创建新节点
    if (x === null) return new Node(key, value, 1)
    if (key < x.key) x.left = this._put(x.left, key, value)
    else if (key > x.key) x.right = this._put(x.right, key, value)
    else x.value = value
    x.size = this._size(x.left) + this._size(x.right) + 1
    return x
  }
  min() {
    return this._min(this.root).key
  }
  max() {
    return this._max(this.root).key
  }
  floor(key) {
    let x = this._floor(this.root, key)
    if (x === null) return null
    return x.key
  }
  ceiling(key) {
    let x = this._ceiling(this.root, key)
    if (x === null) return null
    return x.key
  }
  select(k) {
    return this._select(this.root, k).key
  }
  rank(key) {
    return this._rank(key, this.root)
  }
  deleteMin() {
    this.root = this._deleteMin(this.root)
  }
  delete(key) {
    this.root = this._delete(this.root, key)
  }
  _delete(x, key) {
    if (x === null) return null
    if (key < x.key) x.left = this._delete(x.left, key)
    else if (key > x.key) x.right = this._delete(x.right, key)
    else {
      if (x.right === null) return x.left
      if (x.left === null) return x.right
      let t = x
      x = this._min(t.right)
      x.right = this._deleteMin(t.right)
      x.left = t.left
    }
    x.size = this._size(x.left) + this._size(x.right) + 1
    return x
  }
  _deleteMin(x) {
    if (x.left === null) return x.right
    x.left = this._deleteMin(x.left)
    x.size = this._size(x.left) + this._size(x.right) + 1
    return x
  }
  _rank(key, x) {
    //返回以x为根结点的子树中小于x，key的健的数量
    if (x === null) return 0
    if (key < x.key) return this._rank(key, x.left)
    else if (key > x.key)
      return 1 + this._size(x.left) + this._rank(key, x.right)
    else return this._size(x) // 计算x节点的size
  }
  _select(x, k) {
    // 返回排名为k的节点
    if (x == null) return null
    let t = this._size(x) // 返回x的排名 这里书中不对
    if (t > k) return this._select(x.left, k)
    else if (t < k) return this._select(x.right, k - t - 1)
    else return x
  }
  _ceiling(x, key) {
    if (x === null) return null
    if (x.key === key) return x // 相等返回x
    if (key > x.key) return this._ceiling(x.right, key)
    let t = this._ceiling(x.left, key)
    if (t !== null) return t
    else return x
  }
  _floor(x, key) {
    if (x === null) return null
    if (x.key === key) return x // 相等返回x
    if (key < x.key) return this._floor(x.left, key)
    let t = this._floor(x.right, key)
    if (t !== null) return t
    else return x
  }
  // 右子树最低
  _max(x) {
    if (x.right === null) return x
    return this._max(x.right)
  }
  // 找到左子树的最低
  _min(x) {
    if (x.left === null) return x
    return this._min(x.left)
  }
  _get(x, key) {
    // 在以x为根结点的子树中查找并返回key所对应的值
    // 如果找不到返回null
    if (x === null) return null
    if (key < x.key) return this._get(x.left, key)
    else if (key > x.key) return this._get(x.right, key)
    else return x.value
  }
  _size(x) {
    if (x === null) return 0
    else return x.size
  }
  print(x = this.root) {
    if (x === null) return
    this.print(x.left)
    console.log(x.key, x.size)
    this.print(x.right)
  }
}

var BTree = new BST()
BTree.put(4, 'test4')
BTree.put(1, 'test1')
BTree.put(10, 'test10')
BTree.put(2, 'test2')
BTree.put(3, 'test3')
BTree.put(9, 'test9')
BTree.put(8, 'test8')
BTree.put(5, 'test5')
BTree.put(7, 'test7')
BTree.put(6, 'test6')

console.log(BTree.print())
// console.log(BTree.min())
// console.log(BTree.max())
// console.log(BTree.ceiling(1.5))
// console.log(BTree.select(10))
// console.log(BTree.rank(1))
console.log(BTree.deleteMin())
console.log(BTree.print())
// console.log(BTree.delete(3))
// console.log(BTree.size())

// console.log(BTree.get(4))
