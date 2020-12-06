# 浏览器缓存

正确的进行缓存能够节省宽带，减低服务器成本，并加快响应速度，是性能优化的一大利器。

那么浏览器中的缓存又是怎样的？

其实，我们发送一个请求时，该请求会先在浏览器缓存中找到其匹配的资源，该过程会经历四个缓存的地方

## 内存缓存

首先，它会在内存缓存（Memory Cache）中寻找。内存缓存有一个装满资源的容器。它包含当前文档获取并在文档生存期内保留的所有资源，如果请求寻找的资源已在当前文档的其他位置获取，则该资源将在内存缓存中找到。内存缓存的生存期是很短的，仅仅将资源保留到导航结束为止。

那么有哪些资源会被储存到内存缓存中呢？

- [预加载器](https://calendar.perfplanet.com/2013/big-bad-preloader/) 可能是占内存缓存的资源最大的部分。如果请求是由 HTML 解析器创建 DOM 节点而创建的，则很有可能在 HTML 标记化（"tokenization"）阶段就已经获取到所需的资源。常见会被预加载的资源一般包括脚本，外部 CSS 和 `<img>` 标签中的图像

- 通过显式的[预加载](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)指令（`<link rel=preload>`）占据了另一大部分，其中预加载的资源也存储在内存缓存中

## Service Worker 缓存

> Service Worker 是浏览器独立于网页在后台运行的脚本。这些脚本使您可以访问不需要网页或用户交互的功能，例如推送通知、后台同步和离线体验。

目前 Service Worker 已包括了推送通知和后台同步等功能，还可以拦截和处理网络请求，包括通过程序来管理缓存中的响应。

而 [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers) 能够实现缓存是由于其具有 [Cache API](https://developer.mozilla.org/zh-CN/docs/Web/API/Cache)，该 API 能够缓存请求的响应

## HTTP 缓存

HTTP 缓存也称为 "磁盘缓存"，其缓存的资源存储于硬盘中，读取速度较慢，与内存缓存相比，胜在存储容量和存储时效上。

浏览器命中的绝大部分缓存都来自 HTTP 缓存。

## 推送缓存

推送缓存（Push Cache）是存储 HTTP/2 服务端推送资源的地方，该容器是不可持久的，仅在会话（session）中存在，如果会话终止，所有未与请求匹配的资源都失效。最重要的是，资源仅在有限的时间内保留在推送缓存容器中。（在基于 Chromium 的浏览器中约为 5 分钟）。

推送缓存根据其 URL 以及其各种请求标签将请求与资源匹配，但并不严格遵守 HTTP 头的缓存指令

## 参考文章

- [A Tale of Four Caches](https://calendar.perfplanet.com/2016/a-tale-of-four-caches/)
