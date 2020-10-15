# 防抖和节流

一般在 `resize`，`scroll` 和 `keyup/keydown` 等事件中都会应用到**防抖**

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
