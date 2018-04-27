const { Queue } = require('../part1-base/queue')
const { Stack } = require('../part1-base/stack')

class Graph {
  constructor() {
    this.E = 0 // 边的数量
    this.vertices = [] // 顶点数组
    this.adjList = new Map() // 邻接表
    this.time = 0 // 追踪发现时间和完成探索时间
  }
  addVertex(v) {
    this.vertices.push(v)
    this.adjList.set(v, []) //创建相对顶点的邻接表字典数组
  }
  getE() {
    return this.E
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
    this.E++
  }
  toString() {
    let s = ''
    for (let v of this.vertices) {
      s += `${v} --->`
      let neighbors = this.adjList.get(v)
      for (let w of neighbors) {
        s += `${w} `
      }
      s += '\n'
    }
    return s
  }
  // 广度优先搜索 改进 找到最短路径
  BFS(v) {
    let color = this._initializeColor() // 初始化颜色
    let queue = new Queue()
    let d = [] // 距离
    let pred = [] //前溯点
    queue.enqueue(v)
    // 初始化顶点的距离和前溯点
    for (let v of this.vertices) {
      d[v] = 0
      pred[v] = null
    }

    while (!queue.isEmpty()) {
      let u = queue.dequeue() // 拿到第一个
      let neighbors = this.adjList.get(u) // 获取它的邻接表
      color[u] = 'grey' // 将顶点标注为grey
      for (let w of neighbors) {
        if (color[w] === 'white') {
          color[w] = 'grey' // 表示发现了它
          d[w] = d[u] + 1 // w的距离为u+1
          pred[w] = u // w前溯点u
          queue.enqueue(w) // 入列
        }
      }
      color[u] = 'black' // 探索完成u
    }
    return {
      distances: d,
      predecessors: pred
    }
  }
  DFS() {
    let color = this._initializeColor()
    let d = [] // 发现时间
    let f = [] // 被标注为黑色时，完成探索的时间
    let p = [] // 前溯点
    this.time = 0
    // 为每一个顶点初始化
    for (let v of this.vertices) {
      d[v] = 0
      f[v] = 0
      p[v] = null
    }

    for (let v of this.vertices) {
      if (color[v] === 'white') {
        this._dfsVisit(v, color, d, f, p)
      }
    }
    return { discovery: d, finished: f, predecessors: p }
  }
  _dfsVisit(v, color, d, f, p) {
    console.log('discovered ' + v) // 发现顶点
    color[v] = 'grey'
    d[v] = ++this.time //追踪发现时间
    let neighbors = this.adjList.get(v)
    for (let w of neighbors) {
      if (color[w] === 'white') {
        p[w] = v // w的前溯点为v
        this._dfsVisit(w, color, d, f, p)
      }
    }
    color[v] = 'black'
    f[v] = ++this.time
    console.log('explored ' + v)
  }
  _initializeColor() {
    let color = []
    for (let v of this.vertices) {
      color[v] = 'white'
    }
    return color
  }
}

let graph = new Graph()

let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

for (let v of myVertices) {
  graph.addVertex(v)
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(`图的表示\n${graph.toString()}`)

function printNode(value) {
  console.log('探索 vertex: ' + value)
}
let shortestPathA = graph.BFS('A') // 获得前溯点和距离
let fromVertex = myVertices[0] // 源顶点

// 打印最短路径
function printShortPath() {
  for (let v of myVertices) {
    let path = new Stack()
    for (let w = v; w !== fromVertex; w = shortestPathA.predecessors[w]) {
      path.push(w)
    }
    path.push(fromVertex)
    let s = path.pop()
    while (!path.isEmpty()) {
      s += `-${path.pop()}`
    }
    console.log(s)
  }
}

printShortPath()

// 深度搜索
let shortDFS = graph.DFS()
console.log(shortDFS)
