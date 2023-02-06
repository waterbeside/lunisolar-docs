import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
// import { searchProPlugin } from "vuepress-plugin-search-pro";
// import { redirectPlugin } from "vuepress-plugin-redirect";
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import fullTextSearchPlugin from 'vuepress-plugin-full-text-search2'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineUserConfig({
  base: '/',
  title: 'Lunisolar',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { description: 'lunisolar.js 是一个以Typescript编写的专业的农历库， 农历库，支持阴历公历互转，支持各类黄历数据查询，如八字四柱、阴历、神煞宜忌、建除十二神、胎神占方、吉神方位、五行纳音等。支持自定义插件。'}]
  ],
  theme,

  shouldPrefetch: false,
  plugins: [
    fullTextSearchPlugin() as Plugin,
    backToTopPlugin(),
    registerComponentsPlugin({
      components: {
        DataTable: path.resolve(__dirname, './components/common/DataTable.vue'),
        StemBranch: path.resolve(__dirname, './components/pageView/StemBranch.vue'),
        BranchConflict: path.resolve(__dirname, './components/pageView/BranchConflict.vue'),
        BranchHideStem: path.resolve(__dirname, './components/pageView/BranchHideStem.vue'),
        TakeSound: path.resolve(__dirname, './components/pageView/TakeSound.vue'),
        FetalGod: path.resolve(__dirname, './components/pageView/FetalGod.vue'),
      }
    })
    // redirectPlugin({
    //   config: {
    //     '/zh/index.html': '/index.html',
    //     'zh/guide/': '/zh/guide/about.html',
    //     '/lunisolar-docs/zh/guide/': '/lunisolar-docs/zh/guide/about.html'
    //   }
    // }),
  ],
})
