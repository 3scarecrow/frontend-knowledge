(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{375:function(_,v,t){_.exports=t.p+"assets/img/request-header.1fe4c112.png"},376:function(_,v,t){_.exports=t.p+"assets/img/response-header.cb0d1d2c.png"},419:function(_,v,t){"use strict";t.r(v);var s=t(42),r=Object(s.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("h1",{attrs:{id:"报文结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#报文结构"}},[_._v("#")]),_._v(" 报文结构")]),_._v(" "),s("p",[_._v("HTTP 协议的请求和响应报文的结构很类似，由三大部分组成:")]),_._v(" "),s("ol",[s("li",[_._v("起始行（start line）")]),_._v(" "),s("li",[_._v("头部字段（header）")]),_._v(" "),s("li",[_._v("消息正文（entity）")])]),_._v(" "),s("p",[_._v('起始行和头部字段常合称为 "'),s("strong",[_._v("请求头")]),_._v('" 或 "'),s("strong",[_._v("响应头")]),_._v('"，即 '),s("strong",[_._v("header")]),_._v('。消息正文称为 "'),s("strong",[_._v("实体")]),_._v('"，即 '),s("strong",[_._v("body")])]),_._v(" "),s("h2",{attrs:{id:"请求行-状态行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求行-状态行"}},[_._v("#")]),_._v(" 请求行 + 状态行")]),_._v(" "),s("p",[_._v("请求头结构如下:")]),_._v(" "),s("p",[s("img",{attrs:{src:t(375),alt:"请求头结构"}})]),_._v(" "),s("p",[_._v("由上图可知：")]),_._v(" "),s("p",[s("strong",[_._v("请求行")]),_._v("由三个部分组成:")]),_._v(" "),s("ol",[s("li",[_._v("请求方法: GET/POST/PUT 等")]),_._v(" "),s("li",[_._v("请求目标: URI（唯一资源表示符），表示请求要操作的资源")]),_._v(" "),s("li",[_._v("版本号: 报文使用的 HTTP 协议版本")])]),_._v(" "),s("p",[_._v("例如:")]),_._v(" "),s("p",[s("code",[_._v("GET / HTTP/1.1")])]),_._v(" "),s("p",[_._v("该请求的请求方法为 "),s("code",[_._v("GET")]),_._v(" ，请求目标为 "),s("code",[_._v("/")]),_._v("，请求的 HTTP 协议版本号为 "),s("code",[_._v("1.1")])]),_._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[_._v("注意")]),_._v(" "),s("p",[_._v("请求头（header）和请求体（body）之间用换行（CRLF）分隔，换行上面表示请求头，下面表示请求体的内容")])]),_._v(" "),s("p",[_._v("响应头结构如下:")]),_._v(" "),s("p",[s("img",{attrs:{src:t(376),alt:"响应头结构"}})]),_._v(" "),s("p",[_._v("其中 "),s("strong",[_._v("状态行")]),_._v(" 也是由三部分组成:")]),_._v(" "),s("ol",[s("li",[_._v("版本号: 报文使用功能的 HTTP 协议版本")]),_._v(" "),s("li",[_._v("状态码: 用三位数字码表示请求的处理结果")]),_._v(" "),s("li",[_._v("原因: 作为数字码的解析文字")])]),_._v(" "),s("p",[_._v("例如:")]),_._v(" "),s("p",[s("code",[_._v("HTTP/1.1 200 OK")])]),_._v(" "),s("p",[_._v("表示 HTTP 协议版本为 "),s("code",[_._v("1.1")]),_._v("，且服务器返回的状态码为 "),s("code",[_._v("200")]),_._v("（服务器成功处理了请求）")]),_._v(" "),s("p",[_._v("在响应报文中响应头和响应体之间也是用换行分隔的。")]),_._v(" "),s("h2",{attrs:{id:"请求方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[_._v("#")]),_._v(" 请求方法")]),_._v(" "),s("p",[_._v("请求方法指的是要求服务器对 URI 资源执行某个动作")]),_._v(" "),s("p",[_._v("HTTP/1.1 中有8种请求方法:")]),_._v(" "),s("ol",[s("li",[_._v("GET: 获取资源")]),_._v(" "),s("li",[_._v("HEAD: 获取资源的元信息")]),_._v(" "),s("li",[_._v("POST: 提交数据")]),_._v(" "),s("li",[_._v("PUT: 修改数据")]),_._v(" "),s("li",[_._v("DELETE: 删除资源")]),_._v(" "),s("li",[_._v("CONNECT: 建立连接隧道")]),_._v(" "),s("li",[_._v("OPTIONS: 列出可对资源实行的方法（常用作 CORS 预检请求）")]),_._v(" "),s("li",[_._v("TRACE: 追踪请求-响应的传输路径")])]),_._v(" "),s("h3",{attrs:{id:"get"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[_._v("#")]),_._v(" GET")]),_._v(" "),s("p",[s("strong",[_._v("GET")]),_._v(" 表示从服务器获取资源，最为常用功能的请求方法")]),_._v(" "),s("h3",{attrs:{id:"head"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[_._v("#")]),_._v(" HEAD")]),_._v(" "),s("p",[s("strong",[_._v("HEAD")]),_._v(" 与 "),s("strong",[_._v("GET")]),_._v(' 方法类似，也是从服务器获取资源，但不同之处在于服务器不会返回请求的实体数据，只返回响应头，也就是资源的"'),s("strong",[_._v("元信息")]),_._v('"')]),_._v(" "),s("p",[_._v("主要用于不需要实体数据的请求，可以避免传输 body 数据的浪费，例如检查文件是否存在等")]),_._v(" "),s("h3",{attrs:{id:"post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post"}},[_._v("#")]),_._v(" POST")]),_._v(" "),s("p",[s("strong",[_._v("POST")]),_._v(" 表示向指定的 URI 提交数据")]),_._v(" "),s("h3",{attrs:{id:"put"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#put"}},[_._v("#")]),_._v(" PUT")]),_._v(" "),s("p",[s("strong",[_._v("PUT")]),_._v(' 的作用与 POST 类似，也可以向服务器提交数据，但 PUT 表示 "修改" 之意，而 POST 表示 "新增" 之意')]),_._v(" "),s("h3",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[_._v("#")]),_._v(" OPTIONS")]),_._v(" "),s("p",[s("strong",[_._v("OPTIONS")]),_._v(" 要求服务器列出可对资源实行的操作方法，在响应头 Allow 字段里返回，常用于 CORS 的预检请求")]),_._v(" "),s("p",[_._v("对于请求方法还有 "),s("strong",[_._v("安全与幂等")]),_._v(" 的概念")]),_._v(" "),s("p",[_._v('在 HTTP 协议里的 "'),s("strong",[_._v("安全")]),_._v('" 是指请求方法不会对服务器的资源造成实质的修改，一般来说 GET 和 HEAD 方法是安全的，语义上它们是 "只读" 操作，无论请求多少次，服务器上的资源都是不变的')]),_._v(" "),s("p",[_._v('而 POST/PUT/DELETE 方法会修改服务器的资源，所以是 "不安全" 的')]),_._v(" "),s("p",[_._v('而所谓 "'),s("strong",[_._v("幂等")]),_._v('" 的意思是指多次执行所产生的影响与一次执行产生的影响相同')]),_._v(" "),s("p",[_._v('GET/POST 方法显然是幂等的，DELETE 多次删除同一个资源，结果都是 "资源不存在"，所以也是幂等的')]),_._v(" "),s("p",[_._v("而 POST 是新增数据，多次新增会创建多个资源，所以不是幂等的，而 PUT 是更新数据，多次更新资源与一次更新资源所产生的效果一样（不会创建多个资源），所以是幂等的")]),_._v(" "),s("h2",{attrs:{id:"状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[_._v("#")]),_._v(" 状态码")]),_._v(" "),s("p",[_._v("状态码在状态行中表示请求的处理结果，状态码有五类:")]),_._v(" "),s("ul",[s("li",[s("p",[_._v("1xx: 提示信息，表示目前是协议处理的中间状态，还需要后续的操作")])]),_._v(" "),s("li",[s("p",[_._v("2xx: 成功，报文已经收到并且被正确处理")])]),_._v(" "),s("li",[s("p",[_._v("3xx: 重定向，资源位置发生变动，需要客户端重新发送请求")])]),_._v(" "),s("li",[s("p",[_._v("4xx: 客户端错误，请求报文有误，服务器无法处理")])]),_._v(" "),s("li",[s("p",[_._v("5xx: 服务器错误，服务器在处理请求时内部发生了错误")])])]),_._v(" "),s("p",[_._v("常用的状态码:")]),_._v(" "),s("h3",{attrs:{id:"_1xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1xx"}},[_._v("#")]),_._v(" 1xx")]),_._v(" "),s("p",[s("strong",[_._v("101 Switching Protocols")]),_._v(": 切换协议，表示客户端使用 "),s("strong",[_._v("Upgrade")]),_._v(" 头字段，要求在 HTTP 协议的基础上改成其他的协议继续通信，例如 WebSocket。如果服务器同意变更协议，就会返回状态码 101，之后的数据传输便不会再使用 HTTP了")]),_._v(" "),s("h3",{attrs:{id:"_2xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2xx"}},[_._v("#")]),_._v(" 2xx")]),_._v(" "),s("ul",[s("li",[s("p",[s("strong",[_._v("200 OK")]),_._v(": 最常见的成功状态码，表示服务器成功处理了请求")])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("204 No Content")]),_._v(": 同 200 基本相同，但响应头后没有 body 数据")])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("206 Partical Content")]),_._v(' 是 HTTP 分块下载或断点续传的基础，在客户端发送 "范围请求" 获取资源的部分数据时出现，此时的响应的 body 的数据只是资源的一部分')])])]),_._v(" "),s("h3",{attrs:{id:"_3xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3xx"}},[_._v("#")]),_._v(" 3xx")]),_._v(" "),s("ul",[s("li",[s("p",[s("strong",[_._v("301 Moved Permanently")]),_._v(": 永久重定向，表示此次请求的资源已经不存在，需要改用新的 URI 再次访问")])]),_._v(" "),s("li",[s("p",[s("strong",[_._v("302 Moved Temporarily")]),_._v(": 临时重定向，表示请求的资源还在，只是暂时需要用另一个 URI 来访问")])])]),_._v(" "),s("p",[_._v("301 和 302 都会在响应头里使用字段 "),s("strong",[_._v("Location（标记了服务器要求重定向的 URI）")]),_._v(" 来指明将要跳转的 URI，浏览器都会重定向到新的 URI。")]),_._v(" "),s("p",[_._v("例如启用新域名，服务器切换到新机器等，都应该返回 301，此时浏览器会做适当的优化，例如历史记录、更新书签等，下次就会直接用新的 URI 访问，省去了再次跳转的成本")]),_._v(" "),s("p",[_._v("而如果是暂时的系统维护，只是暂时跳转到临时 URI，则应该返回 302，浏览器不会做缓存优化，下次访问还是用原 URI")]),_._v(" "),s("ul",[s("li",[s("strong",[_._v("304 Not Modified")]),_._v(": 用于 If-Modified-Since、If-None-Match等条件请求，当命中协商缓存时，返回该状态码，表示资源未修改")])]),_._v(" "),s("h3",{attrs:{id:"_4xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4xx"}},[_._v("#")]),_._v(" 4xx")]),_._v(" "),s("p",[s("strong",[_._v("403 Forbidden")]),_._v(": 服务器禁止访问资源")]),_._v(" "),s("p",[s("strong",[_._v("404 Not Found")]),_._v(": 表示请求的资源在服务器上没有找到，，一般是请求的 URI 不存在")]),_._v(" "),s("p",[s("strong",[_._v("405 Method Not Allowed")]),_._v(": 不允许使用某些请求方法操作资源，例如不允许 GET 只能 POST")]),_._v(" "),s("h3",{attrs:{id:"_5xx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5xx"}},[_._v("#")]),_._v(" 5xx")]),_._v(" "),s("p",[s("strong",[_._v("500 Internal Server Error")]),_._v(": 服务器内部发生了错误，但具体什么错误无从得知")]),_._v(" "),s("p",[s("strong",[_._v("501 Not Implemented")]),_._v(": 表示客户端请求的功能，服务器还未支持")]),_._v(" "),s("p",[s("strong",[_._v("502 Bad Gateway")]),_._v(": 通常是服务器作为网关或者代理时返回的错误码，表示服务器自身工作正常，但访问后端服务器时发生了错误")]),_._v(" "),s("p",[s("strong",[_._v("503 Service Unavailable")]),_._v(": 表示服务器当前繁忙，暂时无法响应服务")])])}),[],!1,null,null,null);v.default=r.exports}}]);