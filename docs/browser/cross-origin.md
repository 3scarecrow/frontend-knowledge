# 跨域

[[toc]]

跨域是由于浏览器的**同源策略**的安全机制引起的，也就是说一个源的文档或页面不能访问另一个源的文档或页面。

> 同源策略是一个重要的安全策略，它用于限制一个 origin 的文档或者它加载的脚本如何能与另一个源的资源进行交互。它能帮助阻隔恶意文档，减少可能被攻击的媒介。

:::tip 注意
**跨域时请求是已经发送出去，且服务端能收到请求并正常返回结果，只是结果被浏览器拦截了**
:::

同源指的是**协议**，**域名**和**端口**都相同的情况下才算同源，三者之一不同则被视为非同源

而浏览器的同源策略主要是为了限制以下三种非同源的情况：

- **网络请求**
- **脚本 API 访问**
- **数据存储**

而我们能够解决的是 **网络请求** 和 **脚本 API 访问**

## 跨域网络访问

跨域网络访问指的是与**网络请求**相关的，例如 XMLHttpRequest 和 Fetch API 会受到同源策略的限制

解决方案：

- **CORS**
- **JSONP**
- **Node 中间层**

### JSONP

由于通过 `<script>` 标签引入的 js 是不受同源策略的限制的，当需要通信时，可将 `<srcipt>` 的 src 属性指向一个需要访问的地址并提供一个回调函数来接收数据，该地址会将返回的数据作为该回调函数的参数并执行该函数，因此就可以在回调函数中获取数据了。

```js
function callback(data) {
  console.log(data)
}
function jsonp(url, data, callback) {
  var hasParam = url.indexOf('?')
  url += hasParam !== -1 ? '&' : '?' + 'callback=' + callback
  for(var key in data) {
    url += ('&' + key + '=' + data[key])
  }
  var script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'
  document.body.appendChild(script)
}
```

- **优点**：不受同源策略的限制，兼容性更好

- **缺点**：只支持 GET 请求而不支持 POST 等其他类型的请求

### CORS

CORS（全称为跨域资源共享）是一种机制，该机制使用附加的 HTTP 头来告诉浏览器，哪些域名可以访问该资源

与 CORS 相关的 HTTP 响应头字段

- **Access-Control-Allow-Origin**：告知浏览器哪些域名（Origin）可以访问
- **Access-Control-Expose-Headers**：在跨域请求时，一般只能拿到一些最基本的响应头，若需获取特定响应头，可通过该字段暴露给浏览器
- **Access-Control-Allow-Methods**：哪些请求方法可被接受
- **Access-Control-Max-Age**：预检的存活时间

浏览器将 CORS 请求分为**简单请求**和**复杂请求**

#### 简单请求

简单请求不会触发 **CORS 预检请求**，若请求满足所有下述条件可视为“简单请求”

- 使用下列方法之一
  - GET
  - HEAD
  - POST
- 部分首部
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type （需要注意额外的限制）
  - ...
- Content-Type 的值仅限于下列三者之一
  - text/plain（文本文件）
  - multipart/form-data（表单形式：二进制数据或数据较大）
  - application/x-www-form-urlencoded（表单形式：对载荷进行编码并序列化）

#### 复杂请求

复杂请求需要在正式发起请求前需要发送一个**预检请求**（OPTIONS 方法）到服务器，以获知服务器是否允许该实际请求，预检请求可以避免跨域请求对服务器产生未预期的影响（**因为跨域时请求会发送到服务端且服务端会处理该请求并响应，只是响应被浏览器拦截了而已，因此才需要先发送预检请求**）

### Node 中间层

原理：**跨域问题是浏览器的同源策略的安全机制引起的，而服务器之间的相互调用是不受同源限制的，当前端和 Node 中间层在同一个域时，Node 中间层将前端的请求转发到真实的服务器，然后将请求返回的数据再传到前端，就可实现跨域**

Node 作为中间层的作用：

- BFF（backend for frontend） 架构: 为前端提供统一规范的接口，并且可对后端返回的数据进行二次处理
- 控制路由逻辑

## 跨域脚本API访问

> JavaScript 的 API 中，如 `iframe.contentWindow`、`window.parent`、 `window.open` 和 `window.opener` 允许文档间直接相互引用。当两个文档的源不同时，这些引用将对 `Window` 和 `Location` 对象的访问添加限制。

也就是说非同源的**文档与文档（iframe）**、**文档与页面**以及**页面与页面**之间的访问也存在跨域的限制

解决方案：

- **window.postMessage**(推荐)
- **document.domain**
- **window.name**

### window.postMessage

[window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) 是 HTML5 中的API，该方法可以安全的实现跨域通信，能够处理以下问题：

- 页面和其打开的新窗口的通信
- 页面与嵌套的 iframe 的通信

```js
// 发送消息
otherWindow.postMessage(message, targetOrigin, [transfer])
// 接收消息
window.addEventListener('message', receiveMessage, false)
```

:::danger
接收消息时需要检查 origin 和 source 属性，否则会导致跨站点脚本攻击
:::

### document.domain

`document.domain` 可解决二级域名相同的情况下的跨域问题，例如 `a.example.com` 和 `b.example.com` 等域名可使用该方式，通常用于处理页面与嵌套的 iframe 的通信，需要两个页面都设置 `document.domain` 为相同二级域名即可实现跨域

### window.name

window.name 用来设置/获取窗口的名称，在页面设置的 name 属性，iframe 也可以访问，通过这个特性即可完成页面与 iframe 之间的跨域问题

```html
<!-- a.example.com -->
<iframe src="b.example.com"></iframe>
<script>
window.name = '稻草人'
</script>
```

```html
<!-- b.example.com -->
<script>
console.log(window.name) // 稻草人
</script>
```

## 跨域数据存储访问

> 访问存储在浏览器中的数据，是以源进行分割。每个源都拥有自己单独的存储空间，一个源中的 JavaScript 脚本不能对属于其他源的数据进行读写操作。

浏览器存储包括：

- **sessionStorage**
- **localStorage**
- **IndexedDB**
- **Cookies**

## 参考文章

- [浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)
- [不要再问我跨域的问题了](https://segmentfault.com/a/1190000015597029)
- [九种跨域方式实现原理（完整版）](https://github.com/ljianshu/Blog/issues/55)
- [application/x-www-form-urlencoded or multipart/form-data?](https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data)
- [跨域解决方案之Node中间层](https://juejin.im/post/6844903895030824974)
