const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0]
]

const INF = Number.MAX_SAFE_INTEGER

const minKey = (dist, visited) => {
  let min = INF,
    minIndex = -1
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v]
      minIndex = v
    }
  }
  return minIndex
}
// 最小生成树算法
const prim = () => {
  let parent = [],
    key = [], // 顶点
    visited = [],
    length = graph.length
  // 初始化
  for (let i = 0; i < length; i++) {
    key[i] = INF
    visited[i] = false
  }
  key[0] = 0 // 第一个顶点
  parent[0] = -1 // 第一个顶点总为根结点
  for (i = 0; i < length - 1; i++) {
    let u = minKey(key, visited) // 显出最小顶点
    visited[u] = true
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && visited[v] == false && graph[u][v] < key[v]) {
        parent[v] = u
        key[v] = graph[u][v]
      }
    }
  }
  return parent
}

const parent = prim(graph)

console.log('Edge   Weight')
for (let i = 1; i < graph.length; i++) {
  console.log(parent[i] + ' - ' + i + '   ' + graph[i][parent[i]])
}
