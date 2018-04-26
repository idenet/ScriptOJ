class LinearProbingHashST {
  constructor() {
    this.size = 0
    this.M = 31 // 线性探测表大小
    this.keys = new Array(this.M)
    this.values = new Array(this.M)
  }
  size() {
    return this.size
  }
  isEmpty() {
    return this.size === 0
  }
  put(key, value) {
    // 将散列表加倍
    if (this.size > Number.parseInt(this.M / 2)) this._resize(this.M * 2)
    let i = 0
    for (
      i = this._hash(key);
      this.keys[i] !== undefined;
      i = (i + 1) % this.M
    ) {
      if (this.keys[i] === key) {
        this.values[i] = value
        return
      }
    }
    this.keys[i] = key
    this.values[i] = value
    this.size++
  }
  get(key) {
    for (
      let i = this._hash(key);
      this.keys[i] !== undefined;
      i = (i + 1) % this.M
    ) {
      if (this.keys[i] === key) {
        return this.values[i]
      }
    }
    return null
  }
  _resize(cap) {
    let keys = this.keys
    let values = this.values
    this.keys = new Array(cap)
    this.values = new ArrayBuffer(cap)
    this.keys = [...keys] // 将老数据放到新数组
    this.values = [...values]
  }
  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.codePointAt(i)
    }
    return (hash & 0x7fffffff) % this.M
  }
}

let hashST = new LinearProbingHashST()

hashST.put('jhon', 'test1')
hashST.put('marry', 'test2')
hashST.put('mom', 'test3')
hashST.put('mom', 'test23')

console.log(hashST.get('mom'))
console.log(hashST)
