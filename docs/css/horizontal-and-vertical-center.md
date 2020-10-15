# 水平垂直居中

```html
<div class="parent">
  <div class="son size">稻草人</div>
  <style>
    .parent {
      width: 300px;
      height: 300px;
      border: 1px solid red;
    }
    .son {
      background: green;
    }
    .son.size {
      width: 100px;
      height: 100px;
    }
  </style>
</div>
```

## 居中元素固定宽高

### absolute + 负 margin

```css
.parent {
  position: relative;
}
.son {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px; /* 设置为自身元素的一半 */
  margin-top: -50px;  /* 设置为自身元素的一半 */
}
```

原理：绝对定义的百分比是相对于父元素的宽高的，设置为 50% 可以让父元素的中心点在子元素的左上角，通过设置 margin 为负值让子元素向左偏移自身宽高的一半即可达到水平垂直居中

### absolute + margin: auto

```css
.parent {
  position: relative;
}
.son {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

### absolute + calc

```css
.parent {
  position: relative;
}
.son {
  position: absolute;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
}
```

存在一定的[兼容性](https://caniuse.com/?search=calc)问题

## 居中元素不定宽高

### absolute + translate 原理

```css
.parent {
  position: relative;
}
.son {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

原理：translate 的百分比是相对于自身元素的，而无需知道自身元素的宽高

### lineheight + vertical

```css
.parent {
  text-align: center;
  line-height: 300px;
}
.son {
  display: inline-block;
  line-height: initial;
  vertical-align: middle;
}
```

### table-cell

```css
.parent {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.son {
  display: inline-block;
}
```

### flex

```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### grid

```css
.parent {
  display: grid;
  justify-items: center;
  align-items: center;
  /* OR */
  /* justify-content: center;
  align-content: center; */
}
```
