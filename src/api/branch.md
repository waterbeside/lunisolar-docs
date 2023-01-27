# Branch 地支类
 
| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| value | 地支索引值，范围[0, 11]  | | number |
| name | 地支名  | | string |
| e5 | 五行属性对象 | | [Element5](#56-element5五行类) |
| hiddenStems | 取得地支所藏的天干对象列表，长度最多3个，分别为 `[本气, 中 气, 余气]` | | Stem[] |
| triad | 三合地支, 返回当前地支的另外两个与之三合的地支 | | [Branch, Branch] |
| triadE5 | 三合的五行属性 | | Element5 |
| group6 | 六合地支 | | Branch |
| group6E5 | 六合五行属性 | | Element5 |
| punishing | 相刑地支 | | Branch |
| punishBy | 被什么地支所刑 | | Branch |
| conflict | 相冲的地支 | | Branch |
| destroying | 相破的地支 | | Branch |
| harming | 相害的地支 | | Branch |
| valueOf()      | 返回地支索引值 | | number |
| toString()     | 返回地支字符串| | string |
| **静态方法**   static method| | |  |
| getNames()     | 返回所有地支字符串列表| | string[] |