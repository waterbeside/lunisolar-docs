import { navbar } from 'vuepress-theme-hope'

export const zhNavbar = navbar([
  {
    text: '文档',
    icon: 'guide',
    activeMatch: '^/guide/*',
    link: '/guide/about.md'
  },
  {
    text: 'API',
    icon: 'api',
    activeMatch: '^/api/*',
    link: '/api/lunisolarFact.md'
  },
  {
    text: '参考',
    icon: 'reference',
    activeMatch: '^/reference/*',
    link: '/reference/stemBranch.md'
  }
])
