# :bell: 变量与类型

<!-- markdownlint-disable MD033 -->

## 1. 语言类型

- 原始类型
  - Undefined
  - Null
  - Boolean
  - String
  - BigInt: 是一种特殊的数字类型，能支持任意长度的整数
  - Number
  - Symbol
- 引用类型
  - Object

### Number

TODO

### Symbol

`Symbol` 类型创建的值表示是唯一的标识符，该值能作为对象属性的标识符，这是该类型仅有的目的

```js
// 1. name 作为 symbol 值的描述符，仅有调试作用
const age = Symbol('age')
// 2. symbol 值作为对象的属性
const obj = {
  name: 'scarecrow',
  [age]: '18'
}
console.log(obj) // { name: "scarecrow", Symbol(age): "18" }
// 3. 访问对象的 symbol 属性需通过动态属性方式访问
console.log(obj[age])
```

如果想创建或者访问全局或者跨域都可用的 symbol，可通过 `Symbol.for()` 方法和 `Symbol.keyFor()` 方法从 `全局的Symbol 注册表` 中注册或获取相应的 symbol

```js
const age = Symbol.for('age') // 如果全局注册表没有 age 描述符对应的symbol，则创建它
const symbol1 = Symbol.for('age') // 如果全局注册表存在 age 描述符对应的 symbol，则返回它
const symbol2 = Symbol.for('age')
console.log(symbol1 === symbol2)
```

#### Symbol 作用

##### 隐藏对象属性

当开发一个库或者组件时，可能一些内置的属性不希望被其他使用者访问，防止使用者改变其属性，此时对象的属性可使用 symbol 值作为唯一值。我们不可通过 `for...in` 或其他遍历对象的方法来遍历对象的 symbol 属性，因此可以隐藏对象的属性

```js
const age = Symbol('age')
const obj = {
  name: 'scarecrow',
  [age]: '18'
}
Object.keys(obj) // ["name"]
for (let key in obj) {
  console.log(key) // 仅打印 name
}
```

:::tip
虽然 Symbol 可以隐藏对象的属性，但是还是可以通过 `Object.getOwnPropertySymbols(obj)` 来获取对象的所有的 Symbol 属性集合
:::

```js
const age = Symbol('age')
const obj = {
  name: 'scarecrow',
  [age]: '18'
}
Object.getOwnPropertySymbols(obj) // [Symbol(age)]
// 即使不通过 obj[age] 也能获取 对象的 symbol 属性
obj[Object.getOwnPropertySymbols(obj)[0]] // "18"
```

### Object

JavaScript 中有一些 Object 派生出来的内置引用类型

- 基本包装类型
  - String
  - Number
  - Boolean
- 其他类型
  - Function
  - Array
  - Date
  - RegExp

## 2. 变量存储形式

原始类型和引用类型在内存空间中的存储是不一样的，原始类型的值被存储在**栈空间**里，而引用类型的值被分配到**堆空间**，而在**栈空间**里存储引用类型的值在**堆空间**的地址，当访问引用类型时，需要先在**栈空间**中找到其在**堆空间**的地址，再通过该地址去**堆空间**中找到引用类型的值

TODO

## 3. 数据类型判断

### 3.1 typeof

- 可判断原始类型（除 null 外）

```js
typeof null // 'object'
```

- 不可判断具体的引用类型（除 function 外）

```js
let arrow = () => {}
let array = []
let regexp = /\w/
typeof arrow // 'function'
typeof array // 'object'
typeof regexp // 'object'
```

### 3.2 instanceof

> instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。 -- MDN

```js
object instanceof constructor
```

`object` 表示实例对象，而 `constructor` 表示构造函数

- instanceof 能判断引用类型（包括通过基本包装类型创建的实例对象）
- 不能判断不是通过基本包装类型创建的原始类型值

```js
// instanceof 无法判断不是通过基本包装类型创建的原始类型值
let simplyStr = 'simplyStr'
let packageStr = new String('str')
simplyStr instanceof String // false
packageStr instanceof String // true
```

- 不能判断是否是普通对象

因为其他引用类型都是Object类型派生出来的，因此他们的创建的实例对象的原型链上都有 `Object.prototype` 属性

```js
let array = []
let object = {}
array instanceof Array // true
array instanceof Object // true
object instanceof Object // true
```

### 3.3 construcor

constructor 用于判断实例对象的构造属性（constructor）是否等于其构造函数

- 可用于判断原始类型（除 null  和 undefined外）和引用类型

```js
let str = 'str'
let object = {}
let array = []
str.constructor === String // true
object.constructor === Object // true
array.constructor === Object // false
null.constructor === Null // Uncaught TypeError: Cannot read property 'constructor' of null
```

- 实例对象的 constructor 属性是可更改的，所以通过实例对象的constructor属性来判断并安全

```js
let object = {}
object.constructor = Function
object.constructor === Object // false
```

### 3.4 Object.prototype.toString.call

为了每个对象都能通过 `Object.prototype.toString.call` 来检测，需借助函数的 `call` 来调用

```js
let str = 'str'
let object= {}
str.toString() // str
Object.prototype.toString.call(str) // [object String]
Object.prototype.toString.call(object) === '[object Object]' // true

// 可进行字符截取
Object.prototype.toString.call(object).slice(8, -1) === 'Object' // true
```

- 该方式可用于判断任意类型

## 4. 数据类型转换

先看一小段代码

```js
var a
a = 1
```

可以看出 JavaScript 中变量的数据类型是可以随意改变的，而无需像 C 语言等需要在使用之前就确定好变量的类型，之后便不可在变更变量的类型咯。**像这种在使用之前就需要先确定其变量的数据类型的称为静态类型语言**，**而在编译阶段不能确定变量的数据类型的，需要在运行阶段才能确定的称为动态类型语言**

```js
var a = 1
a = '1' + 1
```

在上面代码中，可以将变量的数据类型隐式地从数字类型转换为字符串类型称为**隐式类型转换**，而**支持隐式类型转换的语言称为弱类型语言**，相反地，**不支持隐式类型转换的语言称为强类型语言**

由上述可知， JavaScript 是一种**弱类型的**，**动态的**的语言

### 4.1 抽象值操作

抽象值操作指的是在数据类型转换时的转换规则

#### 4.1.1 ToString

ToString 运算符根据下表将其参数转换为字符串类型的值：

| 参数类型   | 转换结果              |
| ----------|:---------------------:|
| Undefined | 返回 **"undefined"**  |
| Null      | 返回 **"null"**       |
| Boolean   | 若参数为 **true**，返回 **"true"**; 若参数为 **false**，返回 **"false"**          |
| Number    | 返回相应的字符串        |
| String    | 返回原值（不转换）          |
| Symbol    | 抛出 **TypeError** 异常|
| Object    | 调用 [ToPrimitive](#_4-1-4-toprimitive) 方法  |

#### 4.1.2 ToNumber

ToNumber 运算符根据下表将其参数转换为数值类型的值：

| 参数类型   | 转换结果              |
| ----------|:---------------------:|
| Undefined | 返回 **"NaN"**  |
| Null      | 返回 **"+0"**       |
| Boolean   | 若参数为 **true**，返回 **1**; 若参数为 **false**，返回 **+0**          |
| Number    | 返回原值（不转换）           |
| String    | 字符串进行 `trim()`操作后，如果是纯数字，则返回**纯数字**；否则，如果是空字符串，则返回 **0**；否则返回 **NaN** |
| Symbol    | 抛出 **TypeError** 异常|
| Object    | 调用 [ToPrimitive](#_4-1-4-toprimitive) 方法  |

#### 4.1.3 ToBoolean

ToBoolean 运算符根据下表将其参数转换为布尔值类型的值：

| 参数类型   | 转换结果 |
| ----------|:---------------------:|
| Undefined | 返回 **false** |
| Null      | 返回 **false** |
| Boolean   | 返回原值（不转换）|
| Number    | 如果参数为 **+0**，**-0** 或者 **NaN**，返回 **false**；否则 **true** |
| String    | 如果参数为空字符，返回 **false**；否则返回 **true** |
| Symbol    | 返回 **true** |
| Object    | 返回 **true** |

:::tip
简记：undefined、null、''、+0、-0以及 NaN 都会被转换为 false，其他的值都是 true
:::

#### 4.1.4 ToPrimitive

当需要将对象转换为原始值时，JavaScript 就会调用对象的内置 `ToPrimitive` 方法进行转换，转换步骤如下：

1. 调用 `Symbol.toPrimitive(hint)` 方法，如果该方法存在的话
2. 否则，如果 hint 是 `"string"`，则先调用 `toString` 是否返回原始值，否则调用 `valueOf` 是否返回原始值，否则抛出 `TypeError` 异常
3. 否则，如果 hint 是 `"number"`，则先调用 `valueOf` 是否返回原始值，否则调用 `toString` 是否返回原始值，否则抛出 `TypeError` 异常

`hint` 表示要转换到的原始值的预期类型，有 “**变体**” 之意。`hint` 有三个值：`"string"`、`"number"` 和 `"default"`。其中 `"default"` 的行为基本和 `"number"` 类似

- 重写 `Symbol.toPrimitive(hint)`

```js
let obj1 = {}
// 显示类型转换
console.log(Number(obj1)) // NaN
console.log(String(obj1)) // [object Object]

let obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 3
    }
    if (hint === 'string') {
      return 'scarecrow'
    }
    return true
  },
  // 优先调用 Symbol.toPrimitive
  // toString 和 valueOf 将不会被调用
  toString() {
    return 'toString'
  },
  valueOf() {
    return 'valueOf'
  }
}
// 对象转换为数值型 hint 为 number
console.log(Number(obj2))     // 3
// 对象转换为字符串型 hint 为 string
console.log(String(obj2))     // scarecrow
// 对象不知要被转换为什么类型 hint 为 default
console.log(obj2 + '')        // true
```

- hint 值不同， `toString` 和 `valueOf` 被调用的顺序不同

```js
let obj = {
  toString() {
    return 'scarecrow'
  },
  valueOf() {
    return 3
  }
}
// 对象转换为数值型时 hint 为 number，优先调用 valueOf
console.log(+obj)      // 3
// 对象转换为字符串型时 hint 为 string，优先调用 toString
console.log(`${obj}`)  // scarecrow
// 对象不知被转换为什么类型时 hint 为 default，同 number 一样，优先调用 valueOf
console.log(obj + '')  // 3
```

- `toString` 和 `valueOf` 都没有返回原始值则抛出 `TypeError`

```js
let obj = {
  toString() {
    return {}
  },
  valueOf() {
    return {}
  }
}
// Uncaught TypeError: Cannot convert object to primitive value
console.log(+obj)
```

### 4.2 显式强制类型转换

> 显式强制类型转换是那些显而易见的类型转换

显示强制类型转换使得类型转换更清晰，代码可读性更高

#### 4.2.1 显示强制类型转换为字符串类型

显示强制类型转换为字符串类型遵循 [ToString](#_4-1-1-tostring) 规则，在以下情况会发生转换：

1. String(val)
2. val.toString()

#### 4.2.2 显示强制类型转换为数值类型

显示强制类型转换为字符串类型遵循 [ToNumber](#_4-1-2-tonumber) 规则，在以下情况会发生转换：

1. Number(val)
2. +val

#### 4.2.3 显示强制类型转换为布尔类型

显示强制类型转换为布尔类型遵循 [ToBoolean](#_4-1-3-toboolean) 规则，在以下情况会发生转换：

1. Boolean(val)
2. !!val

### 4.3 隐式强制类型转换

> 隐式强制类型转换指的是那些隐蔽的强制类型转换，副作用也不是很明显

隐式强制类型转换的作用是减少冗余，让代码更简洁，但存在一些副作用

#### 4.3.1 隐式强制类型转换为字符串类型

隐式强制类型转换为字符串类型遵循 [ToString](#_4-1-1-tostring) 规则，在以下情况会发生转换：

1. 加号运算符

```js
console.log('1' + 0) // "10"
console.log(1 + '') // "1"
```

#### 4.3.2 隐式强制类型转换为数值类型

隐式强制类型转换为数值类型遵循 [ToNumber](#_4-1-2-tonumber) 规则，在以下情况会发生转换：

1. 除加号外的其他运算符

除加号外的其他运算符只能进行数值的运算，所以会被转换为数值类型

```js
console.log('1' - 1) // 1
console.log('1' * 1) // 1
console.log('1' / 1) // 1
// 1. 首先两个数组根据 ToPrimitive 规则分别被转换为字符串类型 "2" 和 "1"
// 2. 减法运算操作将两个字符串类型转换为 2 和 1，结果就等于 1
console.log([2] - [1]) // 1
```

#### 4.3.3 隐式强制类型转换为布尔类型

隐式强制类型转换为布尔类型遵循 [ToBoolean](#_4-1-3-toboolean) 规则，在以下情况会发生转换：

1. if (..)
2. for (..;..;..) 语句中的条件判断表达式
3. whild (..) 和 do..whild(..) 循环中的条件判断表达式
4. ? : 三元表达式的条件判断
5. 逻辑运算法 || 和 && 左边的操作数

### 4.4 抽象相等比较算法

抽象相等比较指的是通过 '==' 来比较两个值，由于在比较过程会进行隐式强制类型转换，所以需要弄清楚在比较过程发生的转换规则，比较会按如下方式进行

比较 **x == y** 是否抽象相等

1. 若 **Type(x)** 与 **Type(y)** 相同
    - 若 **Type(x)** 为 **Undefined**，则返回 **true**
    - 若 **Type(x)** 为 **Null**，则返回 **true**
    - 若 **Type(x)** 为 **Number**，则
        - 若 **x** 为 **NaN**，则返回 **false**
        - 若 **y** 为 **NaN**，则返回 **false**
        - 若 **x** 与 **y** 为相等值，则返回 **true**
        - 若 **x** 为 **+0** 且 **y** 为 **-0**，则返回 **true**
        - 若 **x** 为 **-0** 且 **y** 为 **+0**，则返回 **true**
        - 返回 **false**
    - 若 **Type(x)** 为 **String**，则当 **x** 和 **y** 为完成相同的字符序列时返回 **true**，否则返回 **false**
    - 若 **Type(x)** 为 **Boolean**，则 **x** 和 **y** 同为 **true** 或同为 **false** 时返回 **true**，否则返回 **false**
    - 当 **x** 和 **y** 为引用同一对象时返回 **true**，否则返回 **false**
2. 若 **x** 为 **null** 且 **y** 为 **undefined**，返回 **true**
3. 若 **x** 为 **undefined** 且 **y** 为 **null**，返回 **true**
4. 若 **Type(x)** 为 **Number** 且 **Type(y)** 为 **String**，返回 **x == ToNumber(y)** 的结果
5. 若 **Type(x)** 为 **String** 且 **Type(y)** 为 **Number**，返回 **ToNumber(x) == y** 的结果
6. 若 **Type(x)** 为 **Boolean**，返回 **ToNumber(x) == y** 的结果
7. 若 **Type(y)** 为 **Boolean**，返回 **x == ToNumber(y)** 的结果
8. 若 **Type(x)** 为 **String** 或 **Number**，且 **Type(y)** 为 **Object**，返回 **x == ToPrimitive(y)** 的结果
9. 若 **Type(x)** 为 **Object** 且 **Type(y)** 为 **String** 或 **Number**，返回 **ToPrimitive(x) == y** 的结果
10. 返回 **false**

```js
true == [1] // true
// 1. 根据第6点，布尔类型 true 先被转换为数值类型，
// 2. 然后根据第8点对象类型被转换字符类型 "1"，
// 3. 最后根据第4点字符类型 "1" 被转换为 1，返回比较结果
```

还有比较有意思的题

[如何让a == 1 && a == 2 && a == 3 的值为 true?](https://github.com/YvetteLau/Step-By-Step/issues/9)

::: details 点击查看代码
1. 重写 Number 包装对象的 valueOf 方法

```JS
var i = 1
Number.prototype.valueOf = function() {
  return i++
}
var a = new Number(1)
console.log(a == 1 && a == 2 && a == 3)
```

2. 重写对象的 Symbol.toPrimitive 方法

```js

var a = {
  [Symbol.toPrimitive]: (function(i) {
    return function () {
      return ++i
    }
  })(0)
  // [Symbol.toPrimitive]: ((i) => () => ++i) (0)
}
console.log(a == 1 && a == 2 && a == 3) // true
```

:::

## 参考文章

- [浏览器工作原理与实践-栈空间和堆空间：数据是如何存储的？](https://time.geekbang.org/column/article/129596)
- [数据类型的转换](https://wangdoc.com/javascript/features/conversion.html)
- [对象 — 原始值转换](https://zh.javascript.info/object-toprimitive)
- [ECMA-toprimitive](http://www.ecma-international.org/ecma-262/7.0/#sec-toprimitive)
- [抽象相等比较算法](http://yanhaijing.com/es5/#201)
- 你不知道的JavaScript（中卷） 第四章 类型转换
