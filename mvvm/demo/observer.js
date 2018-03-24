class Observer {
  constructor(data) {
    this.data = data
    this.walk(data)
  }
  observe(value) {
    if (value === null || typeof value !== 'object') {
      return
    }
    return new Observer(value)
  }
  // 将数据添加到响应式系统
  walk(data) {
    Object.keys(data).forEach(key => {
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive(data, key, val) {
    // 创建一个迎接data的Dep实例
    let dep = new Dep()
    // 嵌套观察
    let subval = this.observe(val)
    // 建立data和Dep之间的联系
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        // 无则加
        if (Dep.target != null) {
          // 添加订阅
          dep.addSub(Dep.target)
        }
        return val
      },
      set(newVal) {
        if (newVal == val) return
        // 有则改
        val = newVal
        dep.notify(newVal)
      }
    })
  }
}
