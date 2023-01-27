# Pillar 四柱类

(char8ex插件)

四柱类是SB类的增强版,主要补充了十神和神煞等属性

| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| gods | 返回该柱所算出的所有神煞 | | [C8God](./c8God.md)[] |
| stem | 该柱天干  | | [Stem](./stem.md) |
| branch | 该柱地支  | | [Branch](./branch.md) |
| value | 该天干地支组合的索引值, 范围`[0, 59]` | number |
| name | 该天干地支组合的字符串, 如 `甲子` | string |
| takeSound | 取得五行纳音描述 | | string |
| takeSoundE5 | 取得五行纳音的五行对象 | | Element5 |
| stemTenGod | 取得天干十神 | | TenGod |
| branchTenGod | 取得地支十神, 因为是按地支藏干算的, 所以返回提一个列表 | | [TenGod](./tenGod.md)[] |
| missing | 返回旬空地支 | | [Branch, Branch] |
| toString() | 该天干地支组合的字符串, 等同于name属性 | | string |
