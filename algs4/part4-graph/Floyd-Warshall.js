// 这是一个邻接矩阵 加权无向图

const INF = Number.MAX_SAFE_INTEGER
const graph = [
  [INF, 2, 4, INF, INF, INF],
  [INF, INF, 2, 4, 2, INF],
  [INF, INF, INF, INF, 3, INF],
  [INF, INF, INF, INF, INF, 2],
  [INF, INF, INF, 3, INF, 2],
  [INF, INF, INF, INF, INF, INF]
]

const floydWarshall = () => {
  let dist = [],
    length = graph.length
  // 将dist初始化为每个顶点之间的权值
  for (let i = 0; i < length; i++) {
    dist[i] = []
    for (let j = 0; j < length; j++) {
      dist[i][j] = graph[i][j]
    }
  }
  // i->k->j < i->j 则更新路径
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]
        }
      }
    }
  }
  return dist
}

let dist = floydWarshall(graph)

let s = ''
for (let i = 0; i < dist.length; ++i) {
  s = ''
  for (let j = 0; j < dist.length; ++j) {
    if (dist[i][j] === INF) s += 'INF '
    else s += dist[i][j] + '   '
  }
  console.log(s)
}
