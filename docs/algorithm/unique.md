# 1. 数组去重

<!-- markdownlint-disable MD033 -->

以下代码基于 **Node** <Badge text="v10.15.0"/> 环境测试

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

## 1.1 双层 for 循环

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

## 1.2 indexOf

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

## 1.3 filter

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

- 删除 **`NaN`**，因为对于 **`arr.indexOf(NaN) === index`** 永远都是 **`false`**，所以会被过滤掉

## 1.4 sort

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

**缺点**：

- 无法对多种数据类型去重，因为对多种数据类型排序后可能是非预料的结果，如上排序后的数据是 `[ [], [], /a/, /a/, 0, '0', '0', 0, '1',1, '1', 1, NaN, NaN, {}, {}, null, null, undefined, undefined]`

## 1.5 Object

借助对象的属性不能重复来进行数组去重，其中有两个地方需要注意

- 对于数据项为数字类型的作为对象的属性会被转换为字符串，`1` 和 `'1'` 会被当做同一个属性，因此需要 **`typeof`** 来判断数据类型
- 对于数据项为对象的使用 **`JSON.stringify`** 来将其转换为字符串作为对象的属性。若不进行字符串化，对象作为属性是 **`[object Object]`**。而其他引用类型会调用自己的 `toString()` 方法转换为字符串以此作为对象的属性

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

**优点**：

- 能处理多种数据类型的去重

**缺点**：

- 利用对象去重是将数据项字符串化来作为对象的属性，再进行判断是否存在于对象的属性中，所以如果两个引用类型的数据项被转换为字符串是相等的，则会被认为是同一个数据项，会被删除，即使他们的引用不同

## 1.6 Map

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

## 1.7 Set

```js
function unique(arr) {
  return [...new Set(arr)]
}
// test time: // 15.120ms
// [ 1, '1', 0, '0', undefined, null, NaN, {}, {}, [], [], /a/, /a/ ]
```

## 总结

| 方法 | 去重时间（100000） | 能否对复杂类型去重 |
| ------------- |:-------------:| :-----: |
| 双层 for 循环 | 3710.689ms | 没有去除重复的 **NaN** |
| indexOf | 4081.878ms | 同上 |
| filter | 4772.341ms | 同上 |
| sort | 142.803ms | 不能 |
| Object | 151.584ms | 能（注：数据项字符串化后若相等，则视为相同的项） |
| Map | 16.802ms | 能 |
| Set | 15.120ms | 能 |

根据上面表格，可看出 **Map** 和 **Set** 时间复杂度最小，且能对数据项的多种数据类型进行去重，因此可优先选择 **Map** 和 **Set**。

## 参考文章

- [解锁多种JavaScript数组去重姿势](https://juejin.im/post/6844903608467587085#heading-0)
