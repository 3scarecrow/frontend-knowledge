const data = require('./testData')

function unique(arr) {
  const map = new Map()
  return arr.filter(item => {
    return !map.has(item) && map.set(item, 1)
  })
}

console.time('test time')
unique(data.testTime) // 16.802ms
console.timeEnd('test time')
console.log('test type: ', unique(data.testType))
// [ 1, '1', 0, '0', undefined, null, NaN, {}, {}, [], [], /a/, /a/ ]