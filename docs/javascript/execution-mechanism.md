# :balance_scale: 执行机制

## Event Loop

众所周知，JavaScript 是**单线程**的，只有一个主线程，因此主线程一次只能执行一个任务，那么假设有一个任务执行需要花费 20 秒，那么其他的任务就得在 20 秒后才会被执行（例如 更新 UI），因此 UI 就会被阻塞，迟迟得不到更新。由此这些会阻塞主线程的任务就会通过异步，非阻塞的方式被调用，而 JavaScript 的异步需要通过事件循环来实现的（**该事件循环并非 JavaScript 的事件循环，而是浏览器的事件循环或者 JavaScript 运行环境的事件循环（node）**）

事件循环是用来协调事件、用户交互、脚本、渲染和网络等，例如鼠标点击、事件回调、执行脚本或者网络请求等等都由事件循环在背后进行协调。那事件循环是如何协调这些的呢？答案是 task queue。

### task

每个事件循环有一个或者多个 **task queue**。当用户代理安排一个新的 task 时将被插入到对应的 task queue。task 也被称为 **macrotask**， 区分于 **microtask**。task 是由指定的**任务源**来提供任务的。

在 WHATWG 规范中指定了[通用的任务源](https://html.spec.whatwg.org/multipage/webappapis.html#generic-task-sources)包括四种:

> 在本规范和其他规范中，许多几乎不相关的功能都使用以下任务源。

- **The DOM manipulation task source**
  该任务源用于响应 DOM 操作的功能，例如在将元素插入文档中时以非阻塞方式发生的事情。
- **The user interaction task source**
  此任务源用于响应用户交互的功能，例如键盘或鼠标输入。 必须使用与用户交互任务源一起排队的任务来触发响应用户输入而发送的事件。
- **The networking task source**
  此任务源用于响应网络活动而触发的功能。
- **history traversal task source**
  此任务源用于将对history.back（）和类似API的调用排队。

具体常见的任务（宏任务）有以下几种：

- 脚本执行
- setTimeout、setInterval、setImmediate
- I/O
- UI rendering

那么先来看看事件循环是如何工作的（**暂不包含微任务的**）

例如下面的代码片段

```html
<div id="app">app</div>
<script>
  setTimeout(function firstTimeout() {
    console.log('first timeout')
  }, 100)
  setTimeout(function secondTimeout() {
    console.log('second timeout')
  })
  app.addEventListener('click', function click() {
    console.log('click')
  })
  function foo() { console.log('foo')}
  foo()
</script>
```

```sh
# console
foo
second timeout
first timeout
click
```

### microtask

在讲事件循环是如何工作之前，还需要了解 microtask

那么事件循环是如何协调任务的呢？

在 [WHATWG 规范](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model) 中定义了事件循环的处理模型，总的来讲就是以下几个步骤：

## 参考文章

- [从event loop规范探究javaScript异步及浏览器更新渲染时机](https://github.com/aooy/blog/issues/5)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [whatwg event-loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
- [JavaScript Visualized: Event Loop](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
- [宏任务和微任务：不是所有任务都是一个待遇](https://time.geekbang.org/column/article/135624)
