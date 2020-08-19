# :skull_and_crossbones: call apply bind

## call

> `call()` 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数

```js
Function.prototype._call = function(context = window) {
  if (typeof this !== 'function') throw new TypeError('Error')
  // 获取除第一个参数外的剩余参数列表
  const args = [...arguments].slice(1)
  // 将函数赋值给 context.fn（this 指向被调用函数）
  context.fn = this
  // 调用函数并获取可能的返回值
  const result = context.fn(...args)
  // 删除 context.fn
  delete context.fn
  // 返回函数调用的返回值
  return result
}

// 测试 call
const obj = {
  name: '稻草人',
  getStatus: function(status) {
    return this.name + status
  }
}
const getStatus = obj.getStatus
getStatus._call(obj, '很安静') // "稻草人很安静"
```

## apply

> `apply()` 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。

```js
Function.prototype._apply = function(context = window) {
  if (typeof this !== 'function') throw new TypeError('Error')
  // apply 的第二个参数是数组，所以其参数取 arguments[1]
  const args = arguments[1] || []
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

// 测试 apply
const obj = {
  name: '稻草人',
  getStatus: function(status) {
    return this.name + status
  }
}
const getStatus = obj.getStatus
getStatus._apply(obj, ['很安静']) // "稻草人很安静"
```

## bind

> `bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 this 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

```js
Function.prototype._bind = function(context = window) {
  if (typeof this !== 'function') throw new TypeError('Error')
  // 调用 bind 时传入的参数
  const args = [...arguments].slice(1)
  const _this = this
  return function F(){
    // new F()时，不会改变this值
    if(this instanceof F){
      console.log(true)
      return new _this(...args,...arguments);
    }
    // arguments是调用F()时传入的参数
    // 改变this指向，拼接参数
    return _this.apply(context, args.concat(...arguments));
  }
  // function fNOP() {}
  // function fBound() {
  //   return _this.apply(this instanceof fBound ? this : context, [...args, ...arguments])
  // }
  // fBound.prototype = Object.create(this.prototype)
  // return fBound
}

// 测试 bind
const obj = {
  name: '稻草人'
}
function getStatus(status) {
  console.log(this.name + status)
}
const get = getStatus._bind(obj)
get('很安静')
```

## 参考文章

- [JavaScript深入之bind的模拟实现](https://github.com/mqyqingfeng/Blog/issues/12)