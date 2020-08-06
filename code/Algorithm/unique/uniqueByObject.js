const data = require('./testData')

function unique(arr) {
  const res = [], obj = {}
  for(let i = 0, len = arr.length;i < len;i++) {
    if (!obj[typeof arr[i] + JSON.stringify(arr[i])]) {
      obj[typeof arr[i] + JSON.stringify(arr[i])] = true
      res.push(arr[i])
    }
  }
  return res
}

console.time('test time')
unique(data.testTime) // 151.584ms
console.timeEnd('test time')
console.log('test type: ', unique(data.testType))
// [ 1, '1', 0, '0', undefined, null, NaN, {}, [] ]