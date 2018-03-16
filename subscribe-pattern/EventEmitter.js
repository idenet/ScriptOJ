class EventEmitter {
  constructor() {
    this.events = {}
  }
  // 监听type事件，触发的时候调用fn
  on(type, fn) {
    let callbacks = this.events[type] || [] // 取出type类型事件的回调列表
    callbacks.push(fn) // 将回调添加到数组尾部
    this.events[type] = callbacks // 将对应的回调赋值给对应的type事件
  }
  emit(type, ...args) {
    let callbacks = this.events[type] || [] // 取出type类型的事件回调列表
    callbacks.forEach(callback => callback(...args)) // 循环回调列表
  }
  off(type, fn) {
    let callbacks = this.events[type] || [] // 取出type类型的事件回调列表
    let index = callbacks.indexOf(fn) // 返回该回调的下标，如果没有返回-1
    index !== -1 && callbacks.splice(index, 1)
  }
}
