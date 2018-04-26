const { SequentialSearchST } = require('./SequentialSearchST.js')

const M = 31

class SeparateChainingHashST {
  constructor() {
    this.n = 0 // 键值对总数
    this.m = 0 // 散列表大小
    this.st = [] // 存放链表对象的数组
    this._SeparateChainingHashST(M) // 初始化散列表
  }
  put(key, value) {
    this.st[this._hash(key)].put(key, value)
  }
  get(key) {
    return this.st[this._hash(key)].get(key)
  }
  _SeparateChainingHashST(M) {
    this.m = M
    for (let i = 0; i < M; i++) {
      this.st[i] = new SequentialSearchST()
    }
  }
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.codePointAt(i)
    }
    return (hash & 0x7fffffff) % M
  }
  print() {
    return this.st
  }
}
// js实现有问题 .. SequentialSearchST中的put方法会更新相同key的value值
let hashST = new SeparateChainingHashST()

hashST.put('jhon', 'test1')
hashST.put('marry', 'test2')
hashST.put('mom', 'test3')
hashST.put('mom', 'test23')

console.log(hashST.get('mom'))
