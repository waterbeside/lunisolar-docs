import { defineUserConfig } from '@vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import theme from './theme.js'
// import { searchProPlugin } from "vuepress-plugin-search-pro";
// import { redirectPlugin } from "vuepress-plugin-redirect";
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import fullTextSearchPlugin from 'vuepress-plugin-full-text-search2'
// import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineUserConfig({
  base: '/lunisolar-docs/',
  title: 'Lunisolar',
  theme,
  // bundler: viteBundler({
  //   viteOptions: {
  //     optimizeDeps: {
  //       include: ['three']
  //     }
  //   },
  //   // vuePluginOptions: {},
  // }),

  shouldPrefetch: false,
  plugins: [
    fullTextSearchPlugin() as Plugin,
    backToTopPlugin(),
    // registerComponentsPlugin({
    //   components: {
    //     Logo3D: path.resolve(__dirname, './components/Logo3D.vue')
    //   }
    // })
    // redirectPlugin({
    //   config: {
    //     '/zh/index.html': '/index.html',
    //     'zh/guide/': '/zh/guide/about.html',
    //     '/lunisolar-docs/zh/guide/': '/lunisolar-docs/zh/guide/about.html'
    //   }
    // }),
  ],
})
