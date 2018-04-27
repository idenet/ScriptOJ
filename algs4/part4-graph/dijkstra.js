// 这是一个邻接矩阵 加权有向图
const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
]

/**
 * 找出dist数组中的最小值
 * @param {*} dist
 * @param {*} visited
 */
const minDistance = (dist, visited) => {
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

const INF = Number.MAX_SAFE_INTEGER // 最大正整数
// 最短路径算法
const dijkstra = src => {
  let dist = [],
    visited = [],
    parent = []
  length = graph.length
  // 初始化所有距离和visited
  for (let i = 0; i < length; i++) {
    dist[i] = INF
    visited[i] = false
  }
  dist[src] = 0 // 把源顶点到自己的距离设为0
  parent[0] = 0
  // 找出其余顶点的最短路径
  for (let i = 0; i < length - 1; i++) {
    let u = minDistance(dist, visited) // 从尚未处理的顶点中找出距离最小的点
    visited[u] = true // 将找出的顶点标记为 visited
    for (let v = 0; v < length; v++) {
      if (
        !visited[v] && // false
        graph[u][v] != 0 && // 有距离值
        dist[u] != INF && // 不为无限大
        dist[u] + graph[u][v] < dist[v] // 小于v的距离
      ) {
        parent[v] = u
        dist[v] = dist[u] + graph[u][v]
      }
    }
  }
  return { dist, parent }
}

let dist = dijkstra(0)

// for (let i = 0; i < dist.length; i++) {
//   console.log(i + '\t\t' + dist[i])
// }
console.log(dist)
