const data = require('./testData')

function unique(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

console.time('test time')
// unique(data.testTime) // 4926.268ms
console.timeEnd('test time')
console.log('test type: ', unique(data.testType))
// [ 1, '1', 0, '0', undefined, null, {}, {}, [], [], /a/, /a/ ]