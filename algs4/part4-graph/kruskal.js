const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0]
]

const INF = Number.MAX_SAFE_INTEGER
const find = (i, parent) => {
  while (parent[i]) {
    i = parent[i] // eslint-disable-line prefer-destructuring
  }
  return i
}
const union = (i, j, parent) => {
  if (i !== j) {
    parent[j] = i
    return true
  }
  return false
}
// 将邻接矩阵的值复制到cost数组 ，以方便修改且可以保留原始值行
const initializeCost = graph => {
  const cost = []
  const { length } = graph
  for (let i = 0; i < length; i++) {
    cost[i] = []
    for (let j = 0; j < length; j++) {
      if (graph[i][j] === 0) {
        cost[i][j] = INF
      } else {
        cost[i][j] = graph[i][j]
      }
    }
  }
  return cost
}
const kruskal = graph => {
  const { length } = graph
  const parent = []
  let ne = 0
  let a
  let b
  let u
  let v
  const cost = initializeCost(graph)
  // 当边数小于顶点数-1时，找出最小的边
  while (ne < length - 1) {
    for (let i = 0, min = INF; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j]
          a = u = i
          b = v = j
        }
      }
    }
    u = find(u, parent) // 检查是否存在这条边，避免环路
    v = find(v, parent)
    // u，v是不同的边，则加入
    if (union(u, v, parent)) {
      ne++
    }
    // ：从列表中移除这些边，以免重复计算
    cost[a][b] = cost[b][a] = INF
  }
  return parent
}

const parent = kruskal(graph)

console.log('Edge   Weight')
for (i = 1; i < graph.length; i++) {
  console.log(parent[i] + ' - ' + i + '   ' + graph[i][parent[i]])
}
