class Dep {
  constructor() {
    // 订阅者集合
    this.subs = []
  }
  // 添加订阅
  addSub(sub) {
    this.subs.push(sub)
  }
  // 通知订阅
  notify() {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}
// 初始化依赖
Dep.target = null
