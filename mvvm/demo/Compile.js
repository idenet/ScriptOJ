class Compile {
  constructor(el, vm) {
    this.vm = vm
    this.el = document.querySelector(el)
    this.fragment = null
    this.init()
  }
  init() {
    if (this.el) {
      // 创建节点
      this.fragment = this.nodeToFragment(this.el)
      // 加工节点
      this.compileElement(this.fragment)
      // 使用节点
      this.el.appendChild(this.fragment)
    }
  }
  nodeToFragment(el) {
    let fragment = document.createDocumentFragment()

    // 将dom元素移入到fragment中
    let child = el.firstChild
    while (child) {
      fragment.appendChild(child)
      child = el.firstChild
    }
    return fragment
  }
  compileElement(el) {
    let childNodes = Array.from(el.childNodes)
    childNodes.forEach(node => {
      // 匹配插值表达式的正则
      let reg = /\{\{(.*)\}\}/
      let text = node.textContent

      // 细粒度绑定
      if (this.isElementNode(node)) {
        this.compile(node)
      } else if (this.isTextNode(node) && reg.test(text)) {
        this.compileText(node, reg.exec(text)[1])
      }

      // 递归处理子节点
      if (node.childNodes != null && node.childNodes.length) {
        this.compileElement(node)
      }
    })
  }
  compile(node) {
    let attrs = Array.from(node.attributes)
    attrs.forEach(attr => {
      let attrName = attr.name
      // 编译指令
      if (this.isDirective(attrName)) {
        let expression = attr.value
        let directive = attrName.substring(2)
        // v-on
        if (this.isEventDirective(directive)) {
          this.compileEvent(node, this.vm, expression, directive)
        } else {
          // v-model
          this.compileModel(node, this.vm, expression, directive)
        }
        node.removeAttribute(attrName)
      }
    })
  }

  compileEvent(node, vm, exp, dir) {
    // 获取事件名和回调函数
    let eventName = dir.split(':')[1]
    let cb = null
    if (vm.methods) {
      cb = vm.methods[exp]
    }
    // 添加事件监听
    if (eventName && cb) {
      node.addEventListener(eventName, cb.bind(vm), false)
    }
  }

  compileModel(node, vm, exp, dir) {
    // 数据->html
    let val = this.vm[exp]
    this.modelUpdater(node, val)
    new Watcher(this.vm, exp, value => {
      this.modelUpdater(node, value)
    })

    // html 事件->数据
    node.addEventListener('input', e => {
      let newValue = e.target.value
      if (val === newValue) {
        return
      }
      this.vm[exp] = newValue
      val = newValue
    })
  }

  modelUpdater(node, value, oldValue) {
    node.value = typeof value === 'undefined' ? '' : value
  }

  compileText(node, exp) {
    let text = this.vm[exp]
    // 先更新一次文本
    this.updateText(node, text)
    // 使用数据响应系统
    new Watcher(this.vm, exp, val => {
      this.updateText(node, val)
    })
  }
  updateText(node, value) {
    node.textContent = typeof value === 'undefined' ? '' : value
  }
  isDirective(attr) {
    return attr.indexOf('v-') === 0
  }

  isEventDirective(dir) {
    return dir.indexOf('on:') === 0
  }

  isElementNode(node) {
    return node.nodeType === 1
  }

  isTextNode(node) {
    return node.nodeType === 3
  }
}
