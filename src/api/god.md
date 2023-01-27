# God 神煞类

（theGods插件）

通过theGods对象所取得的神煞，都是一个God对象，其包含以下属性：

| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| key | 取得神煞key，一般為其繁体中文名称 | | string |
| name | 取得神煞国际化翻译后的名称， | |string |
| good | 神煞所宜 | | string[] |
| bad | 神煞所忌 | | string[] |
| cate | 神煞分类 | | 'year' \| 'month' \| 'day' \| 'hour' \| null |
| luckLevel | 神煞吉凶, 大于0为吉，小于0为凶 | | number |
