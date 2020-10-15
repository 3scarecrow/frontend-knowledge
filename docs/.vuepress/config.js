module.exports = {
  title: '前端知识',
  base: '/frontend-knowledge/',
  markdown: {
    lineNumbers: true
  },

  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ],


  themeConfig: {
    repo: 'https://github.com/3scarecrow/frontend-knowledge',
    docsDir: 'docs',
    lastUpdated: '上次更新',
    // sidebar: {
    //   '/': [
    //     '/',
    //     {
    //       title: 'JavaScript',
    //       collapsable: false,
    //       sidebarDepth: 1,
    //       children: [
    //         {
    //           title: '变量与类型',
    //           collapsable: false,
    //           children: [
    //             '/javascript/variable-and-type',
    //           ]
    //         },
    //         '/javascript/execution-context',
    //         '/javascript/scope-chain-and-closure',
    //         '/javascript/prototype-chain',
    //         '/javascript/execution-mechanism'
    //       ]
    //     },
    //   ]
    // }
    sidebar: [
      {
        title: 'Home',
        children: [
          '/'
        ]
      },
      {
        title: 'JavaScript',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/javascript/variable-and-type',
          '/javascript/execution-context',
          '/javascript/scope-chain-and-closure',
          '/javascript/prototype-chain',
          {
            title: '执行机制',
            collapsable: false,
            children: [
              '/javascript/event-loop',
              // '/javascript/carbage-collection',
            ]
          },
          {
            title: '手写系列',
            collapsable: true,
            children: [
              '/javascript/unique',
              '/javascript/flatten',
              '/javascript/cloneDeep',
              '/javascript/curry',
              '/javascript/call-apply-bind',
              '/javascript/event-emitter',
              '/javascript/debounce-throttle',
              // '/algorithm/generator',
              '/javascript/async',
            ]
          },
        ]
      },
      {
        title: 'CSS',
        children: [ 
          '/css/horizontal-and-vertical-center',
          '/css/box-model',
          '/css/element-hidden',
          '/css/clear-float'
        ]
      },
      {
        title: '浏览器',
        children: [ /* ... */ ]
      },
      {
        title: '算法',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/algorithm/tree-traverse',
        ]
      },
    ]
  }
}