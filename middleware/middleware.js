/**
 *  reduceRight 接收一个 回调，
 * fn (pre, cur ,index, array), initialValue 如果传入initalvalue 则 第一次执行回调pre = initialValue
 */
const app = {
  middleware: [],
  callback(ctx) {
    console.log(ctx)
  },
  use(fn) {
    this.middleware.push(fn)
  },
  go(ctx) {
    const reducer = (next, fn, index) => () => fn(ctx, next)
    this.middleware.reduceRight(reducer, this.callback.bind(this, ctx))()
  }
}

app.use((ctx, next) => {
  ctx.name = 'Lucy'
  next()
})

app.use((ctx, next) => {
  ctx.age = 12
  next()
})

app.use((ctx, next) => {
  console.log(`${ctx.name} is ${ctx.age} years old.`) // => Lucy is 12 years old.
  next()
})

// ... 任意调用 use 插入中间件

app.go({}) // => 启动执行，最后会调用 callback 打印 => { name: 'Lucy', age: 12  }
