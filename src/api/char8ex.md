# Char8Ex 八字类（增强）

<Badge type="info" vertical="middle" text="char8ex插件"/>
<Badge type="warn" vertical="middle" text="v2.0.0+"/>

| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| me | 取得日主 | | [Stem](./stem.md) |
| sexValue | 取得性别值  | | 0 \| 1 |
| sex | 取得性别 如'乾造' 或 '坤造' | string |
| year | 取得年柱对象 | | [Pillar](./pillar.md) |
| month | 取得月柱对象 | | Pillar |
| day | 取得日柱对象 | | Pillar |
| hour | 取得时柱对象 | | Pillar |
| gods | 取得各柱所有神煞 | | {year: [C8God](./c8God.md)[], month: C8God[], day: C8God[], hour: C8God[]} |
| list | 四柱列表 | [Pillar, Pillar, Pillar, Pillar] |
| embryo() | 胎元, 返回一个天干地支对象 | [SB](./sb.md) |
| ownSign() | 命宫, 返回一个天干地支对象 | SB |
| bodySign() | 身宫, 返回一个天干地支对象 | SB |
| toString() | 返回八字的基本信息描述| SB |
