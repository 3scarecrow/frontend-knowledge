# webpack 优化

:::tip 注意
webpack 优化是基于 @vue/cli 脚手架的创建的项目的优化
:::

[[toc]]

## 减少包体积

### 路由和组件懒加载

> 结合 Vue 的异步组件和 webpack 的代码分割功能，轻松实现路由组件的懒加载

路由和组件懒加载可以加快首屏加载速度，因为可以仅请求当前路由所需的资源，并且对于浏览器缓存也有好处，若是仅改动某个路由的代码，浏览器无需重新下载其他路由的资源。

```js
const Foo = () => import('./Foo.vue')
```

### 组件库按需引入

Element，vxe-table 等外部组件库可以按需引入，一般在 `.babelrc` 中配置即可

### 按需打包 Lodash

webpack 在打包 Lodash 时默认是会将整个库都打包进去的（70.7KB），因此对于 Lodash 打包的优化可以从按需引入 Lodash 实现

- 单独引入

Lodash 中的每个函数在 NPM 中都有对应的模块，可以只引入所需模块

```js
import difference from 'lodash/difference'
// OR
import difference from 'lodash.difference'
```

适用于只引用 Lodash 少数模块的场景，对于引入的模块较多时显得繁琐

- **babel-plugin-lodash** 和 **lodash-webpack-plugin**

[babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash) 可以转换 Lodash 模块的引入路径，通过 ES6 模块的方式引入可以使得 webpack 进行 **tree-shaking**

```js
import _ from 'lodash'
import { add } from 'lodash/fp'
```

大致转换为

```js
import _add from 'lodash/fp/add'
import _map from 'lodash/map'
```

基本类似第一种方式，只是引入方式更加简便。

**babel-plugin-lodash** 结合 [lodash-webpack-plugin](https://github.com/lodash/lodash-webpack-plugin) 可以创建更小的 Lodash 包通过替换模块的功能集

具体的 webpack 配置可参考[官方配置](https://github.com/lodash/lodash-webpack-plugin#webpackconfigjs)

若是使用 @vue/cli 创建的项目，`vue.config.js` 配置如下：

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .use('babel-loader')
      .loader('babel-loader')
      .tap(() => ({
        plugins: ['lodash'], // babel-plugin-lodash
      }))
  },
  configureWebpack: (config) => {
    const LodashModulePlugin = require('lodash-webpack-plugin')
    config.plugins.push(
      new LodashModulePlugin({
        // feature set 选项
        collections: true
      })
    )
  }
}
```

### 提取基础库和组件库

使用 webpack 的代码分割将基础库或组件库提取为一个个单独的块，这对于浏览器缓存是有利的，因为一般基础库或组件库是稳定不变的，若是不进行提取，当我们改动了项目中的某些文件，将导致访问的用户需要重新下载它们，而提取后将无需重新下载。使用 **`optimization.splitChunks`** 进行代码分割

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.optimization.splitChunks({
      cacheGroups: {
        ...config.optimization.get('splitChunks').cacheGroups,
        vue: {
          test: /[\\/]node_modules[\\/](vue|vuex|vue-router)[\\/]/,
          name: 'vue-vendors',
          chunks: 'all',
          enforce: true,
        }
      },
    })
  }
}
```

### CDN

使用 [webpack-cdn-plugin](https://github.com/shirotech/webpack-cdn-plugin) 插件在生产环境时通过 CDN 引入基础库，例如 vue，vuex 和 vue-router 等，能够在部署时减少构建时间和提高页面加载性能。

## 减少构建时间

## 参考文章

- [Webpack 按需打包 Loadsh](https://juejin.im/entry/6844903812335927303)