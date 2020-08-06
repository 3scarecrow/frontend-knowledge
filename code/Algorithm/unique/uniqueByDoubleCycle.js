const data = require('./testData')

function unique(arr) {
  const res = []
  for(let i = 0, len = arr.length;i < arr.length;i++) {
    let isRepeat = false
    for(let j = i + 1;j < len;j++) {
      if (arr[i] === arr[j]) {
        isRepeat = true
        break
      }
    }
    if(!isRepeat) res.push(arr[i])
  }
  return res
}

console.time('test time')
unique(data.testTime) // 3710.689ms
console.timeEnd('test time')
console.log('test type: ', unique(data.testType))
// [ 1, '1', 0, '0', undefined, null, NaN, NaN, {}, {}, [], [], /a/, /a/ ]