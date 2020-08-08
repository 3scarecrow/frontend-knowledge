module.exports = {
  title: '前端知识',
  base: '/frontend-knowledge/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'https://github.com/3scarecrow/frontend-knowledge',
    docsDir: 'docs',
    lastUpdated: '上次更新',
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
          '/javascript/execution-mechanism'
        ]
      },
      {
        title: '浏览器',
        children: [ /* ... */ ]
      },
      {
        title: '数据结构与算法',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/algorithm/coding-skill'
        ]
      },
    ]
  }
}