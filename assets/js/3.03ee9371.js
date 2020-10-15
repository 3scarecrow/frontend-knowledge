(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{357:function(s,t,a){s.exports=a.p+"assets/img/execution-stack.a283f45d.svg"},358:function(s,t,a){s.exports=a.p+"assets/img/global-execution-context-create.aaaffdb5.svg"},359:function(s,t,a){s.exports=a.p+"assets/img/global-execution-context-exec.452797cc.svg"},360:function(s,t,a){s.exports=a.p+"assets/img/func-execution-context-create.60c78927.svg"},361:function(s,t,a){s.exports=a.p+"assets/img/func-execution-context-exec.99bf7079.svg"},385:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"执行上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[s._v("#")]),s._v(" 🎭 执行上下文")]),s._v(" "),n("p",[s._v("执行上下文是指执行 JavaScript 代码的环境，其实就是 JavaScript 代码在执行期间可以访问的值，如 this、变量、对象和函数等")]),s._v(" "),n("h2",{attrs:{id:"_1-执行上下文的类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-执行上下文的类型"}},[s._v("#")]),s._v(" 1. 执行上下文的类型")]),s._v(" "),n("ul",[n("li",[s._v("全局执行上下文")])]),s._v(" "),n("p",[s._v("全局执行上下文在程序运行的整个过程中都是可访问的，而且在一个程序中仅有一个全局执行上下文")]),s._v(" "),n("ul",[n("li",[s._v("函数执行上下文")])]),s._v(" "),n("p",[s._v("当一个函数被调用时，JavaScript 引擎就会为这个函数创建一个新的执行上下文")]),s._v(" "),n("ul",[n("li",[s._v("eval 函数执行上下文")])]),s._v(" "),n("p",[s._v("在 eval 函数中执行的代码也会获得它的执行上下文，由于 eval 函数很少使用，因此在此就先不讨论咯")]),s._v(" "),n("h2",{attrs:{id:"_2-执行栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-执行栈"}},[s._v("#")]),s._v(" 2. 执行栈")]),s._v(" "),n("p",[s._v("我们知道在程序中仅有一个全局执行上下文，而函数执行上下文则可能有多个，那么 JavaScript 引擎是如何管理这些执行上下文的呢？")]),s._v(" "),n("p",[s._v("其实 JavaScript 引擎是借助"),n("strong",[s._v("执行栈")]),s._v("（也称为"),n("strong",[s._v("调用栈")]),s._v("）来管理执行上下文的，"),n("strong",[s._v("执行栈")]),s._v("是一种"),n("strong",[s._v("先进后出")]),s._v("的栈结构。具体如下工作可参照下面的代码和图：")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("B")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'B'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("img",{attrs:{src:a(357),alt:"执行栈"}})]),s._v(" "),n("ol",[n("li",[s._v("当 JavaScript 引擎遇到 script 脚本时，它将创建"),n("strong",[s._v("全局执行上下文")]),s._v("并将其推入"),n("strong",[s._v("执行栈")]),s._v("，然后执行"),n("strong",[s._v("全局执行上下文")]),s._v("的代码")]),s._v(" "),n("li",[s._v("当 JavaScript 引擎遇到函数（A）被调用时，它将为函数（A）创建新的执行上下文并将其推入"),n("strong",[s._v("执行栈")]),s._v("的栈顶，然后执行该函数执行上下文的代码")]),s._v(" "),n("li",[s._v("在执行函数（A）代码时，JavaScript 引擎又遇到函数（B）被调用，它又为函数（B）创建新的执行上下文将其他推入"),n("strong",[s._v("执行栈")]),s._v("的栈顶，然后执行该函数执行上下文的代码")]),s._v(" "),n("li",[s._v("之后函数（B）的执行上下文的代码执行完毕，JavaScript 引擎将该函数执行上下文推出"),n("strong",[s._v("执行栈")]),s._v("，然后 JavaScript 引擎继续执行函数（A）执行上下文的未执行的代码")]),s._v(" "),n("li",[s._v("当函数（A）执行上下文的代码也执行完毕，JavaScript 引擎也将其推出"),n("strong",[s._v("执行栈")]),s._v("，然后继续执行全局执行上下文的未执行的代码")]),s._v(" "),n("li",[s._v("当全局执行上下文的代码也执行完毕，最后 JavaScript 引擎将全局执行上下文也推出栈，JavaScript 代码执行结束")])]),s._v(" "),n("h2",{attrs:{id:"_3-执行上下文的创建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-执行上下文的创建"}},[s._v("#")]),s._v(" 3. 执行上下文的创建")]),s._v(" "),n("p",[s._v("那么执行上下文是如何创建的呢？")]),s._v(" "),n("p",[s._v("其实执行上下文分为两个阶段")]),s._v(" "),n("ul",[n("li",[s._v("创建阶段")]),s._v(" "),n("li",[s._v("执行阶段")])]),s._v(" "),n("p",[s._v("我们可以先通过一段简单代码和两张图来了解执行上下文是由什么组成的以及这两个阶段都干了什么？")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" c "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("f")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" d "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" e "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" c "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" e "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" f\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\na "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[n("img",{attrs:{src:a(358),alt:"全局执行上下文-创建阶段"}})]),s._v(" "),n("p",[n("img",{attrs:{src:a(359),alt:"全局执行上下文-执行阶段"}})]),s._v(" "),n("p",[s._v("在创建阶段，JavaScript 引擎会执行以下操作：")]),s._v(" "),n("ol",[n("li",[s._v("创建"),n("strong",[s._v("词法环境")]),s._v("和"),n("strong",[s._v("变量环境")]),s._v("，将标识符与变量的关联保存到"),n("strong",[s._v("词法环境")]),s._v("的"),n("strong",[s._v("环境记录")]),s._v("中")]),s._v(" "),n("li",[s._v("创建"),n("strong",[s._v("外部环境引用")]),s._v("，并确定其指向（与作用域链相关）\n")])]),s._v(" "),n("p",[s._v("在创建阶段，JavaScript 引擎处于编译阶段，它只执行以上操作，并不执行代码")]),s._v(" "),n("p",[s._v("而执行上下文的执行阶段则完成了变量的分配（赋值）并执行代码")]),s._v(" "),n("h3",{attrs:{id:"词法环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#词法环境"}},[s._v("#")]),s._v(" 词法环境")]),s._v(" "),n("p",[s._v("在 ES6 官方文档中对于"),n("a",{attrs:{href:"http://ecma-international.org/ecma-262/6.0/#sec-lexical-environments",target:"_blank",rel:"noopener noreferrer"}},[s._v("词法环境"),n("OutboundLink")],1),s._v("的定义如下：")]),s._v(" "),n("blockquote",[n("p",[s._v("A Lexical Environment is a specification type used to define the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code. A Lexical Environment consists of an Environment Record and a possibly null reference to an outer Lexical Environment")])]),s._v(" "),n("p",[s._v("中文意思大概如下：")]),s._v(" "),n("blockquote",[n("p",[s._v("词法环境时一种规范类型，用于根据 ECMAScript 代码的词法嵌套结构来定义标识符与特定变量和函数的关联。词法环境是由环境记录和对外部词法环境的可能为 null 的引用组成")])]),s._v(" "),n("p",[s._v("简而言之，词法环境就是保存标识符与变量映射的结构（此处的标识符指的是变量或函数名称，而变量指的是对象类型的引用或原始类型值）")]),s._v(" "),n("p",[s._v("词法环境由两部分组成:")]),s._v(" "),n("ol",[n("li",[s._v("环境记录")]),s._v(" "),n("li",[s._v("外部环境引用（outer）")])]),s._v(" "),n("h4",{attrs:{id:"环境记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境记录"}},[s._v("#")]),s._v(" 环境记录")]),s._v(" "),n("p",[s._v("环境记录是一个存储着词法环境里声明的变量和函数的对象（包括 this 绑定的值）")]),s._v(" "),n("p",[s._v("我们平常通过 "),n("code",[s._v("let")]),s._v(" 和 "),n("code",[s._v("const")]),s._v(" 以及 "),n("code",[s._v("function")]),s._v(" 定义的变量和函数就是存储在此。而"),n("code",[s._v("var")]),s._v(" 声明的变量将被存储于"),n("strong",[s._v("变量环境的环境记录")]),s._v("里。对于函数执行上下文来说，它的词法环境的环境记录还存储函数的参数 "),n("code",[s._v("arguments")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[n("code",[s._v("let")]),s._v(" 和 "),n("code",[s._v("const")]),s._v(" 声明的变量在创建阶段只是被创建，还未被初始化，所以变量的值为 "),n("code",[s._v("<uninitialized>")]),s._v("，因此在未初始化前访问 "),n("code",[s._v("let")]),s._v(" 或 "),n("code",[s._v("const")]),s._v(" 声明的变量则会报错 "),n("code",[s._v("Uncaught ReferenceError: Cannot access 'a' before initialization")]),s._v("。")]),s._v(" "),n("p",[s._v("而 "),n("code",[s._v("var")]),s._v(" 声明的变量在创建阶段会被创建并初始化为 "),n("code",[s._v("undefined")]),s._v("，因此可以在声明前访问")])]),s._v(" "),n("h4",{attrs:{id:"外部环境引用-outer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#外部环境引用-outer"}},[s._v("#")]),s._v(" 外部环境引用（outer）")]),s._v(" "),n("p",[s._v("当 JavaScript 引擎在查找变量时，若在当前的执行上下文中没有找到，则会通过外部环境引用来查找外部环境的词法环境的环境记录里的变量，外部环境引用与"),n("strong",[s._v("作用域链")]),s._v("相关")]),s._v(" "),n("p",[s._v("例如上述代码中的 add 函数执行上下文的词法环境的外部环境引用就指向全局环境 "),n("code",[s._v("<Global>")]),s._v("，若在 add 函数执行上下文中没有找到变量 c，则 JavaScript 引擎就会顺着外部环境引用来查找全局环境的词法环境的环境记录里的变量")]),s._v(" "),n("h4",{attrs:{id:"this-绑定"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#this-绑定"}},[s._v("#")]),s._v(" this 绑定")]),s._v(" "),n("p",[s._v("this 绑定指的是执行上下文中 "),n("strong",[s._v("this")]),s._v("的指向，"),n("strong",[s._v("this")]),s._v("的绑定总共有以下几种：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("浏览器中的全局执行上下文的 "),n("strong",[s._v("this")]),s._v(" 指向 window 对象，而 Node 环境中 "),n("strong",[s._v("this")]),s._v(" 指向 global 对象")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// window 对象")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("函数执行上下文的 "),n("strong",[s._v("this")]),s._v(" 指向函数的调用对象")])])]),s._v(" "),n("p",[s._v("顺便再此列举函数中 this 指向的可能性")]),s._v(" "),n("ul",[n("li",[s._v("this 指向调用对象")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认指向 window 对象")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// window")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 监听事件时指向触发事件的元素")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" btn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'btn'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nbtn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// btn html 元素")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对象方式调用方法执行调用哦对象")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// obj 对象")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nobj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("call、apply 和 bind 改变 this 指向")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认在全局环境中调用函数 this 指向 window")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过 call、apply 以及 bind 改变 this 指向")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" func "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("obj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("ul",[n("li",[s._v("构造函数的 this 指向其实例")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// person")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" person "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("箭头函数 this 指向其定义的环境")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// window")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nobj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"变量环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量环境"}},[s._v("#")]),s._v(" 变量环境")]),s._v(" "),n("p",[s._v("变量环境也是一个词法环境，也就是说变量环境具有和词法环境相同的结构（有环境记录、外部环境引用和 this 绑定），唯一和词法环境不同的是通过 "),n("code",[s._v("var")]),s._v(" 声明的变量和函数会被记录在变量环境中，而 "),n("code",[s._v("let")]),s._v(" 和 "),n("code",[s._v("const")]),s._v(" 声明的变量和函数会被记录在词法环境中")]),s._v(" "),n("p",[s._v("至此，必要的和不必要的名词解释都说明了，那么就继续上面那段代码的执行上下文的分析吧")]),s._v(" "),n("p",[s._v("再来回顾一下：")]),s._v(" "),n("p",[s._v("全局执行上下文经过创建阶段会在词法环境和变量环境中存储声明的变量和函数，后经过执行阶段完成了变量的分配，此时变量 a b c 都可以访问咯，但是此时变量 a 还是 "),n("code",[s._v("undefined")])]),s._v(" "),n("p",[s._v("之后 JavaScript 引擎遇到 "),n("code",[s._v("add()")]),s._v(" 函数调用，就为 add 函数创建执行上下文")]),s._v(" "),n("p",[n("img",{attrs:{src:a(360),alt:"全局执行上下文-执行阶段"}})]),s._v(" "),n("p",[s._v("函数执行上下文经过创建阶段完成了变量的绑定，外部环境引用指向了"),n("strong",[s._v("全局对象（window）")]),s._v("（为什么指向了全局对象，请听"),n("a",{attrs:{href:""}},[s._v("作用域链与闭包")]),s._v("），并且 this 也指向了它的调用者（全局对象）")]),s._v(" "),n("p",[n("img",{attrs:{src:a(361),alt:"全局执行上下文-执行阶段"}})]),s._v(" "),n("p",[s._v("函数执行上下文经过执行阶段完成了变量的分配并返回值，JavaScript 引擎将 "),n("strong",[s._v("add 函数执行上下文")]),s._v("推出执行栈，继续执行"),n("strong",[s._v("全局执行上下文")]),s._v("的代码，将函数 add 的返回值赋值给变量 a。至此，完成代码执行")]),s._v(" "),n("h2",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0",target:"_blank",rel:"noopener noreferrer"}},[s._v("Understanding Execution Context and Execution Stack in Javascript"),n("OutboundLink")],1)])]),s._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://time.geekbang.org/column/article/128427",target:"_blank",rel:"noopener noreferrer"}},[s._v("浏览器工作原理与实践"),n("OutboundLink")],1)])]),s._v(" "),n("li",[n("p",[n("a",{attrs:{href:"http://ecma-international.org/ecma-262/6.0/#sec-execution-contexts",target:"_blank",rel:"noopener noreferrer"}},[s._v("sec-execution-contexts"),n("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=e.exports}}]);