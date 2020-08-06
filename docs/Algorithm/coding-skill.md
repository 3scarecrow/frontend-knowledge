# :beetle: JavaScript 编码能力

<!-- markdownlint-disable MD033 -->

## 1. 数组去重

以下代码基于 **Node** <Badge text="v10.15.0"/> 测试

```js
// 测试代码
const testType = [1, 1, '1', '1', 0, 0, '0', '0', undefined,
undefined, null, null, NaN, NaN, {}, {}, [], [], /a/, /a/]
const testTime = []
for(let i = 0;i < 100000;i++) {
  testTime.push(Math.floor(Math.random() * 100000))
}
// 测试时间
console.time('test time')
unique(testTime)
console.timeEnd('test time')
// 测试数据类型
console.log('test type: ', unique(testType))
```

### 1.1 双层 for 循环

最基本的去重的方式，通过设置 isRepeat 标志能减少循环次数

```js
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
// test time: 3710.689ms
// test type: [ 1, '1', 0, '0', undefined, null, NaN, NaN, {}, {}, [], [], /a/, /a/ ]
```

**缺点**：

- 无法去除重复 **`NaN`**，因为在第六行的全等比较中， **`NaN === NaN`** 等于 **`false`**

### 1.2 indexOf

```js
function unique(arr) {
  const res = []
  for(let i = 0,len = arr.length;i < len;i++) {
    if (arr.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res
}
// test time: 4081.878ms
// [ 1, '1', 0, '0', undefined, null, NaN, NaN, {}, {}, [], [], /a/, /a/ ]
```

**缺点**：

- 同样无法去除重复的 **`NaN`**，因为 **`indexOf`** 内部使用严格相等操作来判断数组内是否有对应值。可使用 **`findIndex`** 或 **`includes`** 代替 **`indexOf`**

### 1.3 filter 和 indexOf

通过 filter 方法过滤掉在数组中不是第一次出现的元素，也就是元素在数组中的位置下标等于它在数组中正向遍历的下标则表示该元素不重复

```js
function unique(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}
// test time: 4772.341ms
// [ 1, '1', 0, '0', undefined, null, {}, {}, [], [], /a/, /a/ ]
```

**缺点**：

- 删除 **`NaN`**，因为对于 `arr.indexOf(NaN) === index` 永远都是 **`false`**，所以会被过滤掉

### 1.4 sort

```js
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
// test time: 142.803ms
// [ [], [], /a/, /a/, 0, '0', 0, '1', 1, '1', 1, NaN, NaN, {}, {}, null ]
```

### 1.6 Object

```js
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
// test time: 151.584ms
// [ 1, '1', 0, '0', undefined, null, NaN, {}, [] ]
```

### 1.7 Map

```js
function unique(arr) {
  const map = new Map()
  return arr.filter(item => {
    return !map.has(item) && map.set(item, 1)
  })
}
// test time: 16.802ms
// [ 1, '1', 0, '0', undefined, null, NaN, {}, {}, [], [], /a/, /a/ ]
```

### 1.8 Set

```js
function unique(arr) {
  return [...new Set(arr)]
}
// test time: // 15.120ms
// [ 1, '1', 0, '0', undefined, null, NaN, {}, {}, [], [], /a/, /a/ ]
```
