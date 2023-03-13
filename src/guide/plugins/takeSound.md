# 五行纳音

查询胎神要先导入 takeSound 插件，
加载takeSound后，会在SB原型上添加两个属性`takeSound`和`takeSoundE5`

- `sb.takeSound` 属性返回纳音描述字符串
- `sb.takeSoundE5` 属性返回**纳音五行**的Element5实例

## 安装

::: code-tabs#installation

@tab:active pnpm

```sh
pnpm add @lunisolar/plubin-takesound
```

@tab yarn

```sh
yarn add @lunisolar/plubin-takesound
```

@tab npm

```sh
npm install @lunisolar/plubin-takesound
```

:::

:::warning 注意

使用lunisolar@2.x版本时，lunisolar包已内置有该插件，

可通过 `import takeSound from 'lunisolar/plugins/takeSound'` 直接导入使用，无需另外安装。

后续版本将 **移除** 所有内置的插件，用户请按需安装下载使用

:::

## 使用

```typescript

import lunisolar from 'lunisolar'
import { takeSound } from '@lunisolar/plugin-takesound'

// lunisolar@v2.x可通下以下方式导入，后续版本会取消，不再推荐使用
// import takeSound from 'lunisolar/plugins/takeSound' 

lunisolar.extend(takeSound)

/**
  加载takeSound插件后，
  SB对象（天干地支对象）会添加一个takeSound属性，
 */
const lsr = lunisolar('2022-07-08')
lsr.char8.year.takeSound // 金箔金 （取得年干支的纳音）
lsr.char8.year.takeSoundE5.toString() // 金 （取得年干支的纳音五行）
// ...
lsr.char8.day.takeSound // 大海水 （取得日干支的纳音）
lsr.takeSound // 大海水 （取得日干支的纳音 等同于 lsr.char8.day.takeSound）

```
