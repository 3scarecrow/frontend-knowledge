# DNS

> DNS 用于描述将用户友好域名分配给唯一 IP 地址的系统的术语

简而言之 **DNS** 就是域名与 IP 关系的映射表，类似于电话簿是名称及其对应的电话号码的列表一样，因为 IP 地址是难以记忆的，所以我们只需要记住 URL 网站名称，然后让 DNS 通过将其映射到正确的 IP 就可以了

## DNS 解析过程

如果我们在浏览器地址栏输入 www.google.com 的话，那么 DNS 解析过程如下:

首先要查找 DNS 记录，浏览器会先检查四个缓存

1. **检查浏览器缓存**。浏览器会在固定期限内维护之前访问过的网站的 DNS 记录的存储库（chrome 可通过 chrome://net-internals/#dns 查看）。

2. **检查操作系统缓存**。如果它不在浏览器缓存中，则浏览器将对操作系统进行系统调用（Windows 上的 gethostname，不同操作系统，函数也不同）进行查询，该函数检查本地的 Hosts 是否存在 DNS 记录，因为该操作系统也维护 DNS 记录的缓存。

3. **检查路由器缓存**。如果不在计算机上， 则浏览器将与维护自己的 DNS 记录缓存的本地路由器通信。

4. **检查 ISP 缓存**。如果上面的所有步骤都失败了，浏览器将与 ISP（Internet Service Provider） 的缓存 DNS 服务器通信。

如果在缓存中找不到对应的 IP，则 ISP 的 DNS 服务器会发起 DNS 查询请求

先说下 DNS 的体系结构以便了解 DNS 的查询过程

> DNS 体系结构由**分层的分布式数据库和一组协议定义**。

其体系结构有基本对应的域名结构:

1. **根域名服务器（Root DNS Server）**: 管理顶级域名服务器，返回 com、net、cn 等顶级域名服务器的 IP 地址
2. **顶级域名服务器（Top-level DNS Server）**: 管理各自域名下的权威域名服务器，例如 com 顶级域名服务器可以返回 google.com 域名服务器的 IP 地址
3. **权威域名服务器（Authoritative DNS Server）**: 管理各自域名下主机的 IP 地址，例如 google.com 权威域名服务器可以返回 www.google.com 的 IP 地址

![DNS 体系结构](../images/structure2.png)

DNS 查询过程如下:

1. 我们将 ISP 的 DNS 服务器称为 **DNS 递归器**，它将先向根服务器查询 com 顶级域名，而根域名服务器返回 com 顶级域名服务器的 IP 地址。
2. 之后向 com 顶级域名服务器发送请求查询 google.com ， com 顶级域名服务器返回 google.com 的权威域名服务器的 IP 地址。
3. 最后向 google.com 的权威域名服务器发送请求查询 www.google.com 的 IP 地址，www.google.com 权威域名服务器返回匹配的 IP 地址。

至此，DNS 查询过程就结束了。

## 参考文章

- 透析 HTTP 协议-02 破冰篇-06 域名里有哪些门道？
- [What happens when you type a URL in the browser and press enter?](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
- [Domain Name System](https://webhostinggeeks.com/guides/dns/)
- [当···时发生了什么？](https://github.com/skyline75489/what-happens-when-zh_CN)
