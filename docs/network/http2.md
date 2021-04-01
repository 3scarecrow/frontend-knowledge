# HTTP/2

**HTTP/1.x 的问题**:

虽然 HTTP/1.x 实现简单但也牺牲了应用程序的性能:

- 客户端需要使用多个连接来实现并发和减少延迟；
- 没有压缩请求和响应头，从而导致不必要的网络流量；
- 不允许有效的资源优先级排序，导致底层 TCP 连接使用不充分；
- 等等...

**HTTP/2 解决的问题**:

HTTP/2 主要针对的是 HTTP/1 的性能问题，其主要目标也是通过压缩 HTTP 标头字段减少网络延迟，同时增加对请求优先级和服务器推送的支持。

需要注意的是，HTTP/2 仍是对之前 HTTP 标准的扩展，这体现了 HTTP 灵活可扩展的特点。同时也没有改变 HTTP 的应用语义，提供的功能不变，HTTP 方法、状态码、URI 和标头字段等核心概念也不变。

HTTP/2 的主要变化有:

## 二进制分帧层

HTTP/ 1.x 使用的简单可读的文本格式，这对于开发调试带来极大的便利，但也限制了性能。而 HTTP/2 所有性能增加的核心在于新的二进制分帧层，该层指示如何在客户端和服务器之间封装和传输 HTTP 消息。虽然二级制分帧层需要工具（例如 Wireshark）来调试协议，却提升了性能。

![二进制分帧层](../images/binary_framing_layer.svg)

从上图可以看出，HTTP/2 将 Headers 标头放在 **HEADERS** frame，Body 数据放在 **DATA** frame。

HTTP/2 将所有传输的信息分割为更小的消息和帧，并采用二进制格式对她们进行编码。

在 HTTP/2 中有 "流"、"消息" 和 "帧" 的概念。

- **数据流**: 已建立的连接内的双向字节流，可以承载一条或多条消息。
- **消息**: 请求或响应消息对应的帧的完整序列。
- **帧**: HTTP/2 通信的**最小单位**，每个帧都包含帧头，该帧头至少标识了帧所属的流。

简而言之:

- 所有通信都在**一个 TCP 连接**上完成，此连接可以承载任意数量的双向数据流。
- 每个数据流都有一个**唯一的标识符**和**可选的优选级**信息（用于控制请求优先级），用于承载双向消息。
- 每条消息都是一个逻辑 HTTP 消息（例如请求或响应），包括一个或多个帧。
- 帧是最小的通信单位，承载着特定类型的数据，例如 HTTP 标头，消息载荷等等。来自不同数据流的帧可以交替发送，然后根据每个帧头的数据流标识符重新组装。

![数据流](../images/streams_messages_frames.svg)

总而言之，HTTP/2 将通信分解为二进制帧的交换，而且都是在一个 TCP 连接内部交替的。这是 HTTP/2 协议所有其他功能和性能优化的基础。

## 请求和响应多路复用

在 HTTP/1.x 中，如果客户端想发起多个并行请求以提高性能，则必须使用多个 TCP 连接。这是 HTTP/1.x 交付模型的直接结果，该模型可以保证每个连接每次只交付一个响应，而更糟糕的问题是，这种模型也会导致**队首阻塞**，从而造成底层 TCP 连接效率低下。

而 HTTP/2 引入的二进制分帧层能够使用请求和响应的**多路复用**: 客户端和服务器可以将 HTTP 消息分解为带有流标识的帧，然后交错发送，最后在另一端重组。

多路复用带来了巨大的性能提升，让我们可以:

- 并行交错地发送多个请求（或响应），请求（或响应）之间互不影响。
- 无需使用多个 TCP 连接，一个连接就可并行发送多个请求和响应。
- 不必再为绕过 HTTP/1.x 限制而做许多优化工作（例如级联文件、雪碧图和域名分片等）。
- 消除不必要的延迟和提高现有网络容量的利用率，从而减少页面加载时间。
- 等等...

总而言之，多路复用解决了 HTTP/1.x 中的队首阻塞问题，也消除了对多个连接的依赖，以实现请求和响应的并行处理，提高了连接的利用率。

## 数据流优先级

HTTP/2 允许每个数据流都有一个关联的权重和依赖关系，数据流依赖关系和权重的组合明确了资源优先级。对于客户端来说，这表明它倾向于如何接受响应。而对于服务器，可以用此信息通过控制 CPU、内存和其他资源的分配设定数据流处理的优先级，在资源数据可用之后，带宽分配可以确保将高优先级响应以最优方式传输至客户端。

:::tip Note
数据流优先级并不能保证特定的传输顺序，即客户端无法强制要求服务器通过数据流优先级以特定顺序处理数据流，这是为了避免高优先级资源受阻，还阻塞服务器处理优先级较低的资源。
:::

## 服务器推送

服务器推送是 HTTP/2 的一个强大功能，能够对一个客户端请求发送多个响应，即除了对最初请求的响应外，服务器还可以像客户端推送额外资源，而无需客户端明确地请求。

![服务器推送](../images/server-push.svg)

如果我们在 html 中内联过 CSS、JavaScript 或者data URI 内联图片等，其实这就属于服务器推送了。通过服务器提前推送，能够减少额外的延迟时间，而在 HTTP/2 中，可以实现内联资源的推送，推送的资源还可以:

- 由客户端缓存
- 在不同页面上重复使用
- 可以与其他资源复用
- 由服务器确定优先级
- 客户端可拒绝推送的资源

## 头部压缩

在 HTTP/1.x 中可以使用标头 "Content-Encoding" 指定 Body 的编码方式，例如用 gzip 压缩来节约带宽，而 Header 却没有进行优化。

每个 HTTP 传输都带有一组标头，在 HTTP/1 中，标头以纯文本形式发送，每次传输都会增加 500 - 800 字节的开销，而且大多数请求和响应报文的标头字段是重复的。如果使用 cookie 的话。则有时会增加数千字节的开销。为了减少此开销并提高性能，HTTP/2 使用 **HPACK** 算法压缩请求和响应标头，该算法使用两种技术:

- 通过**霍夫曼编码**来压缩请求和响应的标头，减小传输的大小
- 要求客户端和服务器各自都维护和更新之前发送过的标头的索引表，然后该表作为先前编码过的值的参考。

霍夫曼编码允许在传输时压缩各个值，而之前传输的值的索引表使我们可以通过传输索引值来编码重复值，该索引值可用于有效的查找和重建完整的标头键值对。

HPACK 压缩上下文由静态和动态表组成: 静态表在规范中定义，并提供所有连接都可能使用的公共 HTTP 标头字段的里列表。

![静态表](../images/hpack-static.png)

动态表最初是空的，并根据特定连接内交换的值进行更新。通过使用静态霍夫曼编码来处理以前从未见过的值，并用索引值代替每一侧的静态或动态表中已经存在的值，可以减少每个请求的大小。

## 参考文章

- [Chrome Dev-HTTP / 2简介](https://developers.google.cn/web/fundamentals/performance/http2)
- [高性能浏览器网络 - HTTP / 2](https://hpbn.co/http2/)
- 透视HTTP协议 - 时代之风（上）：HTTP/2特性概览
- 透视HTTP协议 - 时代之风（下）：HTTP/2内核剖析