class Vue {
  // 使用时传给vue的对象
  constructor(options) {
    // 挂载实例属性
    this.data = options.data
    this.methods = options.methods

    // 将data对象和实例对象建立代理关系
    this.initProxy()
    // 使用响应式系统更新数据
    new Observer(this.data).observe()

    // 将数据编译成html
    new Compile(options.el, this)
    // 调用生命钩子回调函数
    options.mounted.call(this)
  }
  initProxy() {
    Object.keys(this.data).forEach(key => {
      this.proxyKeys(key)
    })
  }
  // 将data对象的属性挂载到实例上
  proxyKeys(key) {
    Object.defineProperty(this, key, {
      enumerable: false,
      configurable: true,
      get() {
        return this.data[key]
      },
      set(val) {
        this.data[key] = val
      }
    })
  }
}
