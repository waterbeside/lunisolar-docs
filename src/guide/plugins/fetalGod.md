# 胎神占方

古人认为怀孕以及孕期胎儿的好坏都与胎神有关。所以民间传统习俗里，家里一旦有孕妇，便有各种禁忌，以免惊动胎神。

胎神每日都会出现在不同的位置，参考《胎神逐日所占游方定局》。

其中天干地支与胎神位置的规律可用以下口诀记忆：

```text
  ----天干六甲胎神歌----
  甲己之日占在門，乙庚碓磨休移动。
  丙辛廚灶莫相干，丁壬倉庫忌修弄。
  戊癸房床若移整，犯之孕妇堕孩童。

  ----地支六甲胎神歌----
  子午二日碓须忌，丑未廁道莫修移。
  寅申火爐休要动，卯酉大門修当避。
  辰戌雞棲巳亥床，犯着六甲身堕胎。
```


## 安装

::: code-tabs#installation

@tab:active pnpm

```sh
pnpm add @lunisolar/plugin-fetalgod
```

@tab yarn

```sh
yarn add @lunisolar/plugin-fetalgod
```

@tab npm

```sh
npm install @lunisolar/plugin-fetalgod
```

:::

:::warning 注意

使用lunisolar@2.x版本时，lunisolar包已内置有该插件，

可通过 `import fetalGod from 'lunisolar/plugins/fetalGod'` 直接导入使用，无需另外安装。

后续版本将 **移除** 所有内置的插件，用户请按需安装下载使用。

:::

## 用法

查询胎神要先导入 fetalGod 插件，

之后可使用lunisolar().fetalGod 取得胎神描述，

也可以使用lunisolar().fetalGodData 取得胎神数据。

示例：

```typescript
import lunisolar from 'lunisolar'
import { fetalGod } from '@lunisolar/plugin-fetalgod'

// lunisolar@v2.x可通下以下方式导入，后续版本会取消，不再推荐使用
// import fetalGod from 'lunisolar/plugins/fetalGod' 

lunisolar.extend(fetalGod)

const lsr = lunisolar('2022-07-08')
lsr.fetalGod // 倉庫棲外東南
lsr.fetalGodData.stemPlace // 倉庫
lsr.fetalGodData.branchPlace // 雞棲
lsr.fetalGodData.direction // 外東南
lsr.fetalGodData.description // 倉庫棲外東南
```

## fetalGodData 属性

| 属性  | 描述   | 返回类型 |
| --- | ---  | --- |
| stemPlace | 根据天干推算的胎神位置，有以下五种： ['門', '碓磨', '廚灶', '倉庫', '房床'] | string |
| branchPlace  | 根据地支推算的胎神位置，有以下六种：['碓', '廁', '爐', '門', '雞棲', '床']| string |
| direction | 胎神的方向，如'外东南'、'外西'、'内中' 等 | string |
| description | 胎神占方的完整描述，如："占門碓外東南" | string |