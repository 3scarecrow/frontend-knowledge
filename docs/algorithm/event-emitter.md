# :zipper_mouth_face: EventEmitter

手写 EventEmitter 实现事件发布、订阅

```js
class EventEmitter {
  // 存储所有事件监听
  _event = Object.create(null)
  on(event, handler) {
    // 当 event 事件数组为 undefined 时，赋值为空数组
    !this._event[event] && (this._event[event] = [])
    // 添加事件处理函数
    this._event[event].push(handler)
  }
  emit(event, data) {
    // 逐个调用 event 事件的处理函数
    (this._event[event] || []).forEach(handler => handler(data))
  }
  off(event, handler) {
    // 从 event 事件数组中找到 handler 对应的处理函数
    const index = (this._event[event] || []).findIndex(h => h === handler)
    // 移除处理函数
    if (index > -1) this._event[event].splice(index, 1)
    // 当 event 对应的监听事件数组为空时，删除该事件
    if (!this._event[event]) delete this._event[event]
  }
}

const emitter = new EventEmitter()
const handler = (data) => console.log(data)
// 监听 message 事件
emitter.on('message', handler)
emitter.on('message', (data) => { console.log(data) })
emitter.emit('message', 'send message')
// 测试移除事件监听
emitter.off('message', handler)
emitter.emit('message', 'remove listener')
```

## 参考文章

- [30secondsofcode-createEventHub](https://www.30secondsofcode.org/js/s/create-event-hub)
- [EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget)
