// 双栈算是表达式求值算法

function evaluation(expression) {
  // :string
  let operators = []
  // :number
  let values = []
  let e = Array.from(expression)
  for (let v of e) {
    // 读取字符，如果是运算符则压入栈
    if (v === '(');
    else if (v === '+') operators.push(v)
    else if (v === '-') operators.push(v)
    else if (v === '*') operators.push(v)
    else if (v === '/') operators.push(v)
    else if (v === ')') {
      // 如果是右括号，则进行计算，并把计算结果入栈
      let op = operators.pop() // 操作符
      let val = values.pop() // 计算数
      if (op === '+') val = values.pop() + val
      else if (op === '-') val = values.pop() - val
      else if (op === '*') val = values.pop() * val
      else if (op === '/') val = values.pop() / val
      values.push(val)
    } else values.push(Number.parseInt(v))
  }
  return values.pop()
}

let value = evaluation('(1+((2+3)*(4*5)))')

console.log(value)
