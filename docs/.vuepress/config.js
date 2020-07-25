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
        title: 'javascript',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/javascript/variable-and-type',
          '/javascript/execution-context',
          '/javascript/scope-chain-and-closure',
          '/javascript/prototype-chain'
        ]
      },
      {
        title: '浏览器',
        children: [ /* ... */ ]
      }
    ]
  }
}