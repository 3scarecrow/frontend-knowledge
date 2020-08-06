const data = require('./testData')

function unique(arr) {
  return [...new Set(arr)]
}

console.time('test time')
unique(data.testTime) // 15.120ms
console.timeEnd('test time')
console.log('test type: ', unique(data.testType))
// [ 1, '1', 0, '0', undefined, null, NaN, {}, {}, [], [], /a/, /a/ ]