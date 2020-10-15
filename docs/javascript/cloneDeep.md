# :money_mouth_face: 深拷贝

测试代码与结果

```js
let obj = { name: '稻草人', age: 18 }
// obj 的 ref 属性指向本身
obj.ref = obj
let clonedObj = cloneDeep(obj)
console.log(clonedObj)
// {
//    name: "稻草人",
//    age: 18,
//    ref: {
//      name: "稻草人",
//      age: 18,
//      ref: {...}
//    }
// }
```

## JSON.parse 与 JSON.stringify

该方式是通过 `JSON.stringify` 先将要拷贝的对象转换为字符串，再通过 `JSON.parse` 解析字符串实现赋值，因此会受到 `JSON.stringify` 在转换时的一些限制

- > undefined、任意的函数以及 symbol 值，在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）
- > 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
- > 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。

```js
JSON.stringify({x: undefined, y: Object, z: Symbol("")})
// '{}'
JSON.stringify([undefined, Object, Symbol("")])
// '[null,null,null]'

JSON.stringify(obj)
// Uncaught TypeError: Converting circular structure to JSON

JSON.stringify({[Symbol("foo")]: "foo"})
// '{}'
```

对于可忽略或不存在 `JSON.stringify` 的问题的对象即可使用 `JSON.parse` 和 `JSON.stringify` 拷贝对象

```js
let obj = { name: '稻草人', age: 18, friend: ['1 号'] }
let cloneObj = JSON.parse(JSON.stringify(obj))
cloneObj.friend.push('3 号')
console.log(obj.friend) // ["1 号"]
```

后面的方法都可解决 **循环引用** 的问题

## 使用 Map

使用递归对属性值为引用类型进行拷贝，借助 **Map** 数据结构来存储已遍历过的引用类型。当属性值为引用类型时，判断是否存在于 **Map** 中，若存在，则直接返回 **Map** 中该属性值对应的引用类型。否则，继续进行递归拷贝（只考虑数组和对象）

```js
function isObject(val) {
  return val !== null && typeof val === 'object'
}
function cloneDeep(source, hash = new WeakMap()) {
  // 非引用类型，则返回原值
  if (!isObject(source)) return source
  // 若属性值对应的引用类型已存在与 Map 中，则直接返回对应的值
  if (hash.has(source)) return hash.get(source)
  // 判断引用类型的类型
  let target = Array.isArray(source) ? [] : {}
  // 将遍历过的引用类型存储于 Map
  hash.set(source, target)

  for(let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      // 若属性值为引用类型，则进行递归，否则直接拷贝属性值
      target[key] = isObject(source[key])
        ? cloneDeep(source[key], hash)
        : source[key]
    }
  }

  return target
}
```

:::tip
虽然 `hash.set(source, target)` 里 target 是空对象，但是对象是引用类型，后续对 `target[key]` 属性赋值时，hash 里的 target 也会被改变
:::

## 使用数组

同样，使用数组也能达到同样的效果

```js
function isObject(val) {
  return val !== null && typeof val === 'object'
}

function cloneDeep(source, list = []) {
  if (!isObject(source)) return source
  var data = list.find(item => item.source === source)
  if (data) return data.target

  var target = Array.isArray(source) ? [] : {}
  list.push({ source, target })

  for(let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = isObject(source[key])
        ? cloneDeep(source, list)
        : source[key]
    }
  }

  return target
}
```

## 使用堆栈

由于使用递归存在栈溢出的可能，因此可以使用堆栈结构实现

栈里存储着对象，该对象有三个属性：**parent** 保存着父节点；**key** 保存对象的属性名；**data** 保存属性值为引用类型的属性值

```js
function cloneDeep(source) {
  if (!isObject(source)) return source
  // 根对象，最终也是返回该对象
  const root = {}
  // 循环引用数组（同上面数组相同作用）
  let uniqueList = []
  // 栈
  let stack = [{
    parent: root, // 保存父节点引用
    key: undefined, // 对象的属性名
    data: source // 对象的属性对应的值
  }]

  while(stack.length) {
    const node = stack.pop()
    const { parent, key, data } = node
    // 当 key 等于 undefined 时，表示当前节点的 parent 是 root
    let target = parent
    // 当 key 不等于 undefined 时，表示当前节点是源对象的属性值
    if(key !== undefined) {
      target = parent[key] = {}
    }

    const uniqueData = uniqueList.find(item => item.source === data)
    if (uniqueData) {
      parent[key] = uniqueData.target
      continue
    }

    uniqueList.push({
      source: data,
      target: target
    })

    for(let k in data) {
      if (data.hasOwnProperty(k)) {
        if (isObject(data[k])) {
          stack.push({
            parent: target,
            key: k,
            data: data[k]
          })
        } else {
          target[k] = data[k]
        }
      }
    }
  }
  return root
}
```

## 参考文章

- [MDN-JSON.stringify()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [【进阶4-3期】面试题之如何实现一个深拷贝](https://github.com/yygmind/blog/issues/29)
- [深拷贝的终极探索（90%的人都不知道）](https://juejin.im/post/6844903692756336653)
