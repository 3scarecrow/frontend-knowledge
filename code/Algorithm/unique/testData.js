const testType = [1, 1, '1', '1', 0, 0, '0', '0', undefined, undefined, null, null, NaN, NaN, {}, {}, [], [], /a/, /a/]
const testTime = []
for(let i = 0;i < 100000;i++) {
  testTime.push(Math.floor(Math.random() * 100000))
}

module.exports = {
  testType,
  testTime
}