# mvvm

mvvm的核心应该是数据的双向绑定了把，那么现在就实现一个最简单的vue

## 核心功能

1. Vue构造函数
2. 响应式数据更新系统：this实例和data进行了响应式关联

## 流程

1. 当一个Vue实例设置了若干data后，会被Observer加入到Dep中
2. Watcher既可以主动getDep的内容，也可以等Dep更新完后，notify它
3. Watcher获得Dep的内容后，可以update用户自己想要执行的回调函数，比如更新html
4. 