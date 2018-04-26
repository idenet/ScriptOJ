// 例子
let setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

let setB = new Set()
setB.add(2)
setB.add(3)
setB.add(4)
// 并集
function unionSet() {
  let unionAB = new Set()
  for (let x of setA) unionAB.add(x)
  for (let x of setB) unionAB.add(x)
  return unionAB
}
console.log(unionSet())

// 交集
function Intersection() {
  let Intersection = new Set()
  for (let x of setA) {
    if (setB.has(x)) {
      Intersection.add(x)
    }
  }
  return Intersection
}

console.log(Intersection())

// 差集
function differenceSet() {
  let differenceSet = new Set()
  for (let x of setA) {
    if (!setB.has(x)) {
      differenceSet.add(x)
    }
  }
  return differenceSet
}

console.log(differenceSet())
