# 实现一个简单的虚拟滚动列表

```vue
<template>
  <div ref="svsl" class="svsl">
    <div class="svsl__content" :style="getContentStyle">
      <div
        class="svsl__item"
        v-for="item in visibleList"
        :key="item.value"
        :style="{ height: size + 'px' }"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShinVirtualScrollList',

  props: {
    // 数据源
    source: { type: Array, default: () => [] },
    // 虚拟列表中真正渲染 DOM 的数量
    keeps: { type: Number, default: 30 },
    // 项高度
    size: { type: Number, default: 50 },
  },

  data() {
    return {
      // 真实渲染的列表的开始下标
      startIndex: 0,
      // 真实渲染的列表的结束下标
      endIndex: this.keeps,
      // 通过 paddingTop 和 paddingBottom 来撑开内容高度
      paddingTop: 0,
      paddingBottom: 0,
    }
  },

  computed: {
    getContentStyle() {
      return {
        'padding-top': this.paddingTop + 'px',
        'padding-bottom': this.paddingBottom + 'px',
      }
    },

    totalHeight() {
      return this.source.length * this.size
    },

    visibleList() {
      return this.source.slice(this.startIndex, this.endIndex)
    },
  },

  watch: {
    source: {
      async handler() {
        await this.$nextTick()
        this.scrollHandler()
      },
      immediate: true,
    },
  },

  async mounted() {
    await this.$nextTick()
    this.$refs.svsl.addEventListener('scroll', this.scrollHandler)
    this.$once('hook:beforeDestroy', () => {
      this.$refs.svsl.removeEventListener('scroll', this.scrollHandler)
    })
  },

  methods: {
    scrollHandler() {
      const svsl = this.$refs.svsl
      // 容器滚动距离顶部的距离
      const top = svsl.scrollTop
      // 容器高度
      const clientHeight = svsl.clientHeight
      const height = this.size
      const keeps = this.keeps
      // 开始下标等于 顶部距离 / 项高度
      this.startIndex = Math.floor(top / height)
      // 结束下标等于 （开始下标 + 保留项数量） 和 数据源数量长度最小值
      // 保证结束下标不超过数据源数量长度
      this.endIndex = Math.min(this.startIndex + keeps, this.source.length)
      this.paddingTop = top
      // 当 （滚动距离 + 容器高度） 大于等于 所有数据项的高度 时，表示已滚动到底部
      if (top + clientHeight >= this.totalHeight) {
        // 此时容器 paddingBottom 为 0
        this.paddingBottom = 0
      } else {
        // 否则 paddingBottom = 所有项高度 - 滚动距离 - （保留项 * 项高度）
        this.paddingBottom = this.totalHeight - top - keeps * height
      }
    },
  },
}
</script>
```

:::tip Note
完整代码&在线体验地址：[https://codesandbox.io/s/shin-virtual-scroll-list-hj9k8](https://codesandbox.io/s/shin-virtual-scroll-list-hj9k8)
:::
