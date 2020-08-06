const data = require('./testData')

function unique(arr) {
  const res = []
  for(let i = 0,len = arr.length;i < len;i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res
}

console.time('test time')
unique(data.testTime) // 3605.650ms
console.timeEnd('test time')
console.log('test type: ', unique(data.testType))
// [ 1, '1', 0, '0', undefined, null, NaN, NaN, {}, {}, [], [], /a/, /a/ ]