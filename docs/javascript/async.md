# :nauseated_face: async

**async 函数的实际上就是对 Generator 函数和自动执行器的封装**，是一个语法糖，因此实现一个 **async** 就是实现一个 Generator 函数的执行器

基于 **Promise** 对象的 Generator 自动执行器如下：

```js
function run(gen) {
  var g = gen()

  function _next(data) {
    var result = g.next(data)
    // 若 Generator 函数执行完则直接返回最后值即可
    if (result.done) return result.value
    // result.value 都是 Promise 对象，调用 then 获取 yield 后面的返回值
    result.value.then(val => {
      // 当 Promise 返回值时即可进行下一次遍历
      _next(val)
    })
  }

  _next()
}

function* generator() {
  let x = yield Promise.resolve(1)
  console.log(x)
  let y = yield Promise.resolve(++x)
  console.log(y)
  let z = yield Promise.resolve(++y)
  console.log(z)
}
run(generator)
```

上面简单的实现了 Generator 函数自执行，但与 async 还有些许差别：

1. **兼容基本类型**：当 yield 后面跟着的不是 Promise ，而是基本类型值时，需要用 `Promise.resolve()` 包裹，保证返回的是 Promise
2. **错误处理**：若 Promise 执行失败，需通过 `Generator.prototype.throw()` 抛出错误，以便被外部函数 `try catch` 捕获
3. **返回值为 Promise**：`async` 函数的返回值是 Promsie

上面的执行器函数改造后如下：

```js
function run(gen) {
  // 3. 返回值为 Promise
  return new Promise((resolve, reject) => {
    var g = gen()

    function _next(data) {
      var result
      try {
        result = g.next(data)
      } catch(err) {
        return reject(err)
      }
      if (result.done) return resolve(result.value)
      // 1. 兼容基本类型
      Promise.resolve(result.value).then(
        val => _next(val),
        // 2. 错误处理
        err => g.throw(err)
      )
    }
    _next()
  })
}

function* generator() {
  try {
    console.log(yield Promise.resolve(1))
    console.log(yield 2)
    console.log(yield Promise.reject('error'))
  } catch (error) {
    console.log(error)
  }
}

run(generator)
```

## 参考文章

- [9k字 | Promise/async/Generator实现原理解析](https://juejin.im/post/6844904096525189128)
- [ES6-co 模块的原理](https://www.bookstack.cn/read/es6-3rd/spilt.5.docs-generator-async.md)
- [ES6-async 函数的实现原理](https://www.bookstack.cn/read/es6-3rd/spilt.4.docs-async.md)
