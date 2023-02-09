import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/guide/': [
    'about.md',
    'quickStart.md',
    {
      text: '功能与使用',
      prefix: 'functional/',
      children: [
        'parse.md',
        'gregorian.md',
        'lunar.md',
        'solarTerm.md',
        'char8.md',
        'stem.md',
        'branch.md',
        'element5.md',
        'format.md',
        'diff.md'
      ]
    },
    {
      text: '插件',
      prefix: 'plugins/',
      children: ['about.md', 'fetalGod.md', 'takeSound.md', 'theGods.md', 'char8ex.md']
    },
    'i18n.md'
  ],
  '/api/': [
    'lunisolarFact.md',
    'lunisolarClass.md',
    'lunar.md',
    'char8.md',
    'sb.md',
    'stem.md',
    'branch.md',
    'element5.md',
    'solarTerm.md',
    'trigram8.md',
    'direction24.md',
    'char8ex.md',
    'pillar.md',
    'tenGod.md',
    'c8God.md',
    'theGods.md',
    'god.md'
  ],
  '/reference/': [
    'stemBranch.md',
    'takeSound.md',
    'trigram8.md',
    'direction24.md',
    'fetalGod.md',
    {
      text: '吉凶神煞',
      prefix: 'gods/',
      children: [
        {
          text: '立成',
          prefix: 'godBuilder/',
          children: ['yearGods.md', 'monthGods.md', 'dayGods.md', 'hourGods.md']
        },
        {
          text: '神煞宜忌',
          prefix: 'godGoodBad/',
          children: ['good.md', 'bad.md']
        }
      ]
    },
    {
      text: '宜忌用事',
      prefix: 'acts/',
      children: ['actsLevel.md', 'actsCate.md']
    }
  ]
})
