const data = require('./testData')

function unique(arr){
  const res = []
  arr.sort()
  for(var i = 0, len = arr.length;i < len;i++){
    if(arr[i] !== arr[i+1]){
      res.push(arr[i])
    }
  }
  return res
}

console.time('test time')
unique(data.testTime) // 136.992ms
console.timeEnd('test time')
console.log('test type: ', unique(data.testType))
// [ [], [], /a/, /a/, 0, '0', 0, '1', 1, '1', 1, NaN, NaN, {}, {}, null ]