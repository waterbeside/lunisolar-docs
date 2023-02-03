import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  {
    text: '文档',
    icon: 'creative',
    // prefix: "/zh/guide/",
    activeMatch: '^/guide/*',
    link: '/guide/about.md'
  },
  {
    text: 'API',
    icon: 'discover',
    activeMatch: '^/api/*',
    link: '/api/lunisolarFact.md'
  }
])
