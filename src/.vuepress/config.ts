import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";


export default defineUserConfig({
  base: "/lunisolar-docs/",
  title: "Lunisolar",

  theme,

  shouldPrefetch: false,
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // // 为分类和标签添加索引
      // customFields: [
      //   {
      //     getter: (page) => page.frontmatter.category as any,
      //     formatter: "分类：$content",
      //   },
      //   {
      //     getter: (page) => page.frontmatter.tag as any,
      //     formatter: "标签：$content",
      //   },
      // ],
    }),
    redirectPlugin({
      config: {
        '/zh/index.html': '/index.html',
        'zh/guide/': '/zh/guide/about.html',
        '/lunisolar-docs/zh/guide/': '/lunisolar-docs/zh/guide/about.html'
      }
    }),
  ],
});
