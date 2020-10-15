# Generator

**Generator** 是继 Promise 后的一种异步编程方案。Generator 函数是一个状态机，封装了多个内部状态，通过控制状态可以暂停和恢复函数的执行

调用 Generator 函数返回一个遍历器对象，调用该遍历器对象的 **`next`** 可以恢复函数的执行，而在 Generator 函数内部通过 **`yield`** 可暂停函数执行

## Generator 与 Promise 在异步应用的区别

在异步中常常下一个异步请求的参数是上一个请求的结果。在这种情况下看看

Promise 实现：

Generator 实现：

```js
function* generator(x) {
  const y = yield Promise.resolve(x)
  const z = yield Promise.resolve(y)
  yield Promise.resolve(z)
}
const gen = generator(1)
gen.next().value.then((val) => {
  console.log(val)
  gen.next(2).value.then((val) => {
    console.log(val)
    gen.next(3).value.then((val) => {
      console.log(val)
    })
  })
})
```

Generator 函数内部可能有多个 `yield` ，就需要调用多次 `next` 方法，因此我们需要让 Generator 函数自执行，而 Generator 函数常常与 [co](https://github.com/tj/co) 模块一起使用

```js
var co = require('co')
co(generator) // 1 2 3
```

##