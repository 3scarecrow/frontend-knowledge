(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{418:function(t,a,r){"use strict";r.r(a);var s=r(42),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"http"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),r("p",[r("strong",[t._v("HTTP（HyperText Transfer Protocol）")]),t._v(" 全称是超文本传输协议，是一种在计算机里进行超文本数据传输的应用层协议。")]),t._v(" "),r("h2",{attrs:{id:"特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),r("h3",{attrs:{id:"灵活可扩展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#灵活可扩展"}},[t._v("#")]),t._v(" 灵活可扩展")]),t._v(" "),r("p",[t._v("HTTP 协议诞生时只规定了报文的基本格式，而报文里的各个组成部分都没有严格的语法语义控制，可由开发者任意定制，例如请求方法，URI、状态码、头字段等都可由开发者定义")]),t._v(" "),r("h3",{attrs:{id:"传输可靠"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传输可靠"}},[t._v("#")]),t._v(" 传输可靠")]),t._v(" "),r("p",[t._v('由于 HTTP 协议是基于 TCP/IP 的，而 TCP本身是一个 "可靠" 的传输协议，因此 HTTP 也能够可靠地传输数据')]),t._v(" "),r("h3",{attrs:{id:"请求-应答"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#请求-应答"}},[t._v("#")]),t._v(" 请求-应答")]),t._v(" "),r("p",[t._v('由于 HTTP 协议基于 TCP/IP，并且使用了 "请求-应答" 通信模式，即 "一发一收"，也属于 "半双工"（在一方传输报文过程中，另一方不可传输，需待一方传输完毕方可传输）。而这种模式会导致著名的 "'),r("strong",[t._v("队头阻塞")]),t._v('"，即当一个 TCP 长连接中顺序发送的请求序列中的一个请求被阻塞时，后面排队的所有请求也都会被阻塞，这导致客户端接收不到响应。')]),t._v(" "),r("h3",{attrs:{id:"无状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无状态"}},[t._v("#")]),t._v(" 无状态")]),t._v(" "),r("p",[t._v('"无状态" 是一把"双刃剑"，对于需要保存状态信息的传输中，每次都需要传输重复的信息，那它就是缺点。不过 HTTP 可以通过 Cookie 来记录通信过程的状态信息。')]),t._v(" "),r("p",[t._v('而对于不需要保存状态信息的传输，"无状态" 能够减少网络开销，容易实现集群和扩展性能，这就是优点。')]),t._v(" "),r("h3",{attrs:{id:"明文传输"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#明文传输"}},[t._v("#")]),t._v(" 明文传输")]),t._v(" "),r("p",[t._v('"明文" 指的是协议里的报文（主要指 header）不使用二级制数据，而是简单可读的文本形式。这对于开发调试是极大方便的。')]),t._v(" "),r("p",[t._v("但同时 HTTP 报文在传输过程是非常透明的，容易遭受攻击。")]),t._v(" "),r("h3",{attrs:{id:"不安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不安全"}},[t._v("#")]),t._v(" 不安全")]),t._v(" "),r("p",[t._v("HTTP 是不安全的，无法验证通信双方的身份，也不能判断报文是否哦被篡改。")])])}),[],!1,null,null,null);a.default=e.exports}}]);