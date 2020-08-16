# :triumph: 柯里化

> curry 的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

当传入的所有参数（多次调用柯里化函数所传入的参数总数）等于被柯里化函数 `fn` 定义的参数（可通过 **`fn.length`** 获取）时，才调用函数，否则返回一个接受剩余参数的柯里化函数

```js
function curry(fn, ...args) {
  return fn.length <= args.length
    ? fn(...args)
    : curry.bind(null, fn, ...args)
}
function add(a, b, c) {
  return a + b + c
}
const addTen = curry(add)(10)
const sum = addTen(20, 30)
console.log(sum) // 60
```

## 使用场景

- 通过传入部分参数返回一个记住了这些参数的新函数，若需在部分参数相同，多次调用的情况下，可减少传入的参数并能够大量减少样板文件代码

ToDo

## 参考文章

- [函数式编程指北-柯里化](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch4.html)
- [30secondsofcode-curry](https://www.30secondsofcode.org/js/s/curry)
