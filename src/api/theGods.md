
# TheGods 神煞宜忌类

<Badge type="info" vertical="middle" text="theGods插件"/>

| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| lsr | 当前Lunisolar对象实例  | | [Lunisolar](./lunisolarClass.md) |
| getGods(ymdh) | 取得神煞 | 参数默认为"MD", 可以是 "Y","M": "D": "H"的任一个或多个字符的组合，返回其对应的年神、月神、日神、时神或其组合 | [God[]](./god.md) |
| getGoodGods(ymdh) | 取得吉神 | 参数默认为"MD", 参数同上 | [God[]](./god.md) |
| getBadGods(ymdh) | 取得凶神 | 参数默认为"MD", 参数同上 | [God[]](./god.md) |
| getDuty12God() | 取得当日建除十二神（建、除、满...) | | [God](./god.md) |
| getLife12God(ymdh) | 取得长生十二神(长生、沐浴、冠帶...) | 参数可以是 "year"、"month"、"day"、 "hour"的其中一个 | [God](./god.md) |
| getActs(actType, returnKey, replacer) | 取得当日宜忌 | **actType**: 0 \| 1 \| 2 \| 3 <br> 指返回宜忌的分类<br> **returnKey**: boolean<br> 是否返回宜忌的key，默认为false, 即返回国际化翻译后的宜忌<br> **replacer**: { [key: string]\: string } <br> 用于替换宜忌词条的字典对象| {good\: string[], bad\: string[]} |
| getGoodActs(actType, returnKey, replacer) | 取得当日所宜 | 参数与 getActs 方法一致 | string[] |
| getBadActs(actType, returnKey, replacer) | 取得当日所忌 | 参数与 getActs 方法一致 | string[] |
| getAllDayHourGods() | 取得整日各时辰的神煞 |  | God[][] |
| getLuckHours(luckType) | 取得整日各时辰的吉凶 | luckeType: 0 \| 1 <br> 0: 按黄黑道十二神（即青龙明堂等）决定吉凶<br> 1：根据时辰的吉神凶神个数决定吉凶 | number[] |
|getAllLuckDirection() | 取得当日所有神煞吉方,将会返回元素为 **[[二十四山对象](./direction24.md), 神煞对象]**元组的列表 || **[[Direction24](./direction24.md), God][]** |
|getLuckDirection(godKeyOrName) | 取得指定吉神所在方位,将会返回 **[[二十四山对象](./direction24.md), 神煞对象]**元组 | godKeyOrName: string<br>吉方神煞名称，一般为 '喜神' \| '福神' \| '財神' \| '陽貴' \| '陰貴' | **[Direction24, God]** |
| query(queryString) | 通过输入查询语句进行通用查询 | query: string | God \| God[] \| string[] \| null |

**queryString说明**:

queryString 存入的字符串，对应返回的内容参见下表, 其中zh的中文字条取决于你是否使用zh语言名才能使用该字条。故建议使用key中的字条存入存数。

| key | zh | 说明 | 返回类型 |
|---| ---  | --- | ---- |
| year gods  | 年神 | 取得年神 | God[] |
| month gods  | 月神 | 取得月神 | God[] |
| day gods  | 日神 | 取得日神 | God[] |
| hour gods  | 時神 | 取得時神 | God[] |
| this day gods  | 本日神煞 | 取得本日神煞 | God[] |
| day of yellow-black god  | 本日黃黑十二神 | 取得本日的串宫十二神 | God[] |
| hour of yellow-black god  | 此時黃黑十二神 | 取得此时辰的串宫十二神 | God[] |
| duty god | 建除十二神 | 取得建除 | God |
| year of long-life god | 年長生十二神 | 取得年长生十二神 | God |
| month of long-life god | 月長生十二神 | 取得月长生十二神 | God |
| day of long-life god | 日長生十二神 | 取得日长生十二神 | God |
| hour of long-life god | 時長生十二神 | 取得时辰长生十二神 | God |
| good act | 宜 | 取得本日所宜 | string[] |
| good act 1 | 宜1 | 取得本日通书所宜 | string[] |
| good act 2 | 宜2 | 取得本日御用所宜 | string[] |
| good act 3 | 宜3 | 取得本日民用所宜 | string[] |
| bad act | 忌 | 取得本日所忌 | string[] |
| bad act 1 | 忌1 | 取得本日通书所忌  | string[] |
| bad act 2 | 忌2 | 取得本日御用所忌 | string[] |
| bad act 3 | 忌3 | 取得本日民用所忌 | string[] |