class EventEmitter {
  constructor() {
    this.events = new Map()
  }
  on(type, fn) {
    let callbacks = this.events.get(type) || []
    callbacks.push(fn)
    this.events.set(type, callbacks)
  }
  emit(type, ...args) {
    let callbacks = this.events.get(type) || []
    callbacks.forEach(callback => callback(...args))
  }
  off(type, fn) {
    let callbacks = this.events.get[type] || []
    let index = callbacks.indexOf(fn)
    index !== -1 && callbacks.splice(index, 1)
  }
}
