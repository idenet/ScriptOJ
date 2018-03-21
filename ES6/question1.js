/**
 *  var a = ['item1', 'item2', 'item3', 'item4', 'item5']
 *  var b = [{ content: 'section1', index: 0 }, { content: 'section2', index: 2 }]
 *  将b按index下标插入a
 */

const injectSection = (items, sections) => {
  // 将需要插入的对应坐标的数组放到map里
  let sectionsMap = new Map(
    sections.map(({ index, content }) => [index, content])
  )
  // 新建一个数组，然后往里面push原来的数据
  return items.reduce((ret, item, index) => {
    // push的时候先检查里面有没有，有的话先push map的
    sectionsMap.has(index) && ret.push(sectionsMap.get(index))
    ret.push(item)
    return ret
  }, [])
}
