# :japanese_goblin: 数组扁平化

<!-- markdownlint-disable MD033 -->

**数组扁平化**就是将多维数组转换为一维数组或者指定维度的数组

```js
// 测试数据
let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
```

## 2.1 Array.prototype.flat <Badge text="ECMAScript 2019" type="warning"/>

```js
arr.flat(Infinity) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

缺点：存在**兼容性**问题

## 2.2 reduce + concat + recursivity

```js
function flatDeep(arr, d = 1) {
    return d > 0
      ? arr.reduce((acc, val) => acc.concat(Array.isArray(val)
       ? flatDeep(val, d - 1)
       : val), [])
      : arr.slice()
}
flatDeep(arr, Infinity) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 2.3 forEach + push + recursivity

对于不支持 reduce 的环境可使用 forEach 代替

```js
function flatDeep(arr, depth) {
  const result = [];
  (function flat(arr, depth) {
    arr.forEach((val) => {
      if (Array.isArray(val) && depth > 0) {
        flat(val, depth -1)
      } else {
        result.push(val)
      }
    })
  })(arr, depth)
  return result
}
flatDeep(arr, Infinity)
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 2.4 stack

```js
// 无递归数组扁平化，使用堆栈
// 注意：深度的控制比较低效，因为需要检查每一个值的深度
// 可以使用 shift / unshift 代替 pop / push 对 stack 操作，但是末端的数组反转更快
function flatDeep(arr) {
  const stack = [...arr]
  const result = []
  while(stack.length) {
    // 从堆栈的末尾处开始遍历
    const next = stack.pop()
    if(Array.isArray(next)) {
      stack.push(...next)
    } else {
      result.push(next)
    }
  }
  return result.reverse()
}
flatDeep(arr)
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

注：使用堆栈来扁平化数组对控制深度较低效，它不像上面的方法可以直接判断整个数组项（例如：[7, 8, 9]）是否达到指定的深度，因为数组中的每个项（例如[7, 8, 9]）被拆解为 7 ,8, 9 三个项进入堆栈中，堆栈中的每个值都进行判断（例如7, 8, 9 就需要判断3次），所以对于深度的控制较低效。

## 2.5 Generator

```js
function* flatten(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) {
      yield* flatten(item)
    } else {
      yield item
    }
  }
}
[...flatten(arr)]
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

注：**`yield* flatten(item)`** 是 **`yield* 表达式`**，在 **Generator** 函数中若需调用另一个 **Generator** 函数，则可通过 **`yield* 表达式`** 来自动遍历 **Generator** 函数返回的遍历器对象；由于 **Generator** 函数执行后返回的是一个遍历器对象，对遍历器对象执行**扩展运算符**，就会将内部遍历得到的值转换为一个数组

## 参考文章

- [Array.prototype.flat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
