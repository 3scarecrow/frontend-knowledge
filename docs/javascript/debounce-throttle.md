# 防抖和节流

## 防抖

一般在 `resize`，`scroll` 和 `keyup/keydown` 等事件中都会应用到**防抖**

简化版

```js
function debounce(func, wait) {
  let timeout
  return function() {
    const context = this, args = arguments
    const later = function() {
      timeout = null
      func.apply(context, args)
    }
    // 当返回的函数被调用时，清除掉定时器可保证 func 函数不被执行。
    // 且 func 仅会在返回的函数在 wait 时间内不再调用时才会被执行
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
```

复杂版

```js
function debounce(func, wait, immediate) {
  let timeout
  return function() {
    const context = this, args = arguments
    const later = () => {
      timeout = null // 无论何种模式，timeout 都需要清空
      if (!immediate) func.apply(context, args)
    }
    // 判断是否 immediate 模式并且 timeout 已被清空
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    // 非 immediate 模式将执行 later 函数里的 func
    timeout = setTimeout(later, wait)
    // immediate 模式则执行下面的 func
    if (callNow) func.apply(context, args)
  }
}
```

demo

```html
<div id="box">0</div>
<style>
  #box {
    height: 300px;
    line-height: 300px;
    text-align: center;
    font-size: 50px;
    background-color: yellowgreen;
  }
</style>
<script>
  const box = document.querySelector('#box')
  const setText = () => box.innerText = Number(box.innerText) + 1
  box.addEventListener('mousemove', debounce(setText, 200, true))
</script>
```

## 节流

一般**无限滚动**时需要判断计算判断容器底部的距离，达到设置的距离后发送请求获取数据。而此时防抖就派不上用场了，防抖会在滚动结束后或开始前才执行回调，不符合需求。而节流会在滚动时有规律的执行回调来判断是否应该发送请求

```js
function throttle(func, wait) {
  let timeout
  return function() {
    const context = this, args = arguments
    const later = function() {
      timeout = null
      func.apply(context, args)
    }
    // 当上一个定时器执行完后再开启新的定时器
    if (!timeout) timeout = setTimeout(later, wait)
  }
}
```

## requestAnimationFrame

> `window.requestAnimationFrame()` 告诉浏览器 -- 你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。

**requestAnimationFrame** 的优势在于能充分利用显示器的刷新机制，比较节省系统资源。一般来说，显示器的固定刷新频率是 60Hz 或 75Hz，也就是说每秒最多只能重绘 60 或 75 次，重绘的时间间隔大约 1000/60 = 16.7 ms 或 1000 / 75 = 13.3 左右。而`requestAnimationFrame` 能与这个刷新频率保持同步，利用这个刷新频率进行页面重绘。同时为了提升性能和电池寿命，如果 `requestAnimationFrame` 运行在后台标签页或者隐藏的 `<iframe>` 里时会被暂停调用

`requestAnimationFrame` 一般用于**更新动画**

## 参考文章

- [Function Debouncing with Underscore.js](https://davidwalsh.name/function-debounce)
- [debouncing-throttling-explained-examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
- [Debounce in JavaScript — Improve Your Application’s Performance](https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086)
- [JavaScript专题之跟着 underscore 学节流](https://github.com/mqyqingfeng/Blog/issues/26)
