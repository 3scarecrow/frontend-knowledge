# 清除浮动

浮动影响：由于浮动元素会脱离文档流，导致其不占据页面空间，所以会对父元素高度带来一定的影响。如果一个元素的所有子元素都浮动，则该元素的高度将是 0（高度塌陷现象）

```html
<div class="container">
  <div class="float">1</div>
  <div class="float">2</div>
  <div class="float">3</div>
</div>
<style>
  .container {
    background-color: yellowgreen;
  }
  .float {
    float: left;
  }
</style>
```

![float](../images/float.png)

- clearfix

给父元素加上 clearfix 类

```html
<div class="container clearfix">
  <div class="float">1</div>
  <div class="float">2</div>
  <div class="float">3</div>
</div>
<style>
  .clearfix:after {
    display: block; /* 对于FF/chrome/opera/IE8不能缺少 */
    content: '';
    clear: both; /* 清除所有浮动 */
    visibility: hidden; /* 允许浏览器渲染它，但不显示出来 */
    height: 0;
  }
  .clearfix {
    zoom: 1; /* 引入了zoom以支持IE6/7 */
  }
</style>
```

- `clear: both`

给浮动元素后面增加一个空元素，其样式为 `clear: both`

```html
<div class="container">
  <div class="float">1</div>
  <div class="float">2</div>
  <div class="float">3</div>
  <div style="clear: both"></div>
</div>
```

优点： 简单，代码少，浏览器支持好
缺点：增加许多无用的空元素

- `overflow: hidden`

父元素增加 `overflow: hidden` 样式

```html
<div class="container" style="overflow: hidden;">
  <div class="float">1</div>
  <div class="float">2</div>
  <div class="float">3</div>
</div>
```

缺点：子元素超出部分将被隐藏
