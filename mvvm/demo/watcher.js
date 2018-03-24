class Watcher {
  constructor(vm, exp, cb) {
    this.cb = cb
    this.vm = vm
    this.exp = exp
    this.value = this.get()
  }

  // 订阅后才能 get
  get() {
    // enter
    Dep.target = this
    let value = this.vm[this.exp]
    // leave
    Dep.target = null
    return value
  }
  // 更新自己的行为
  update() {
    let value = this.vm[this.exp]
    let oldValue = this.value
    // 更新
    if (value !== oldValue) {
      this.value = value
      // 给回调函数绑定作用域
      this.cb.call(this.vm, value, oldValue)
    }
  }
}
