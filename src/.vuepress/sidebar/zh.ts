import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/guide/":  [
    'about.md',
    'quickStart.md',
    {
      text: "功能与使用",
      prefix: "functional/",
      // children: "structure",
      children: [
        'parse.md',
        'gregorian.md',
        'lunar.md',
        'solarTerm.md',
        'char8.md',
        'stem.md',
        'branch.md',
        'element5.md',
      ],
    },
  ], 
});
