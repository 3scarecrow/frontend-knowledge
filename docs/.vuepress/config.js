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
          '/JavaScript/variable-and-type',
          '/JavaScript/execution-context',
          '/JavaScript/scope-chain-and-closure',
          '/JavaScript/prototype-chain',
          '/JavaScript/execution-mechanism'
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
          '/Algorithm/coding-skill'
        ]
      },
    ]
  }
}