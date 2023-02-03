# SB 天干地支类
 
| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| value | 取得60干支顺序索引值  | | number |
| name | 天干地支组合名，如‘甲子’  | | string |
| stem | 天干对象 | | [Stem](./stem.md) |
| branch | 地支对象 | | [Branch](./branch.md)   |
| valueOf()      | 返回60干支顺序索引值 | | number |
| toString()     | 返回格式化后天干地支字符串如 “壬寅” | | string |
| missing | 取得旬空的地支 | | [Branch, Branch] |
| takeSound | 五行纳音，需加载`takeSound`插件, 参考 [纳音](../guide/plugins/takeSound.md) | | string |
| --- | **静态方法** static method | --- | ---  |
| getNames()     | 取得六十干支符串列表 | | string[] |
