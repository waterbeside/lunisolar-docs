# Lunisolar类

| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| lunar      | 阴历数据对象 | | [Lunar](./lunar.md) |
| char8      | 八字对象 | | [Char8](./char8.md) |
| solarTerm       | 返回当前日期的节气对象，如果不是节气，返回null | | [SolarTerm](./solarTerm.md) \| null |
| getSeason()  | 取得当前季节 | | string |
| getSeasonIndex()  | 以春夏秋冬为顺序取得当前季节索引 | | number |
| toDate()   | 返回Date对象 | | Date |
| clone()    | 克隆当前Lunisolar对象 | | Lunisolar |
| unix()     | 返回以秒为单位的时间戳 | | number |
| format(formatStr: string) | 按指定格式格式化时间 | **formatStr**: string 时间将以这字符串格式进行格式化，例 'YYYY-MM-DD HH:mm:ss' | string |
| diff(date, unit, float) | 时间差计算 | **date**: number \| string \| Date \| Lunisolar <br> 与当前实例的时间进行比较的时间<br> **unit**: string <br>单位，如 year, lunarYear, month, lunarMonth 等<br> **float**: boolean <br>是否返回浮点数 | number |
| year     | 年份 | | number |
| month    | 月份 1 ~ 12 | | number |
| day      | 日期 1 ~ 31 | | number |
| dayOfWeek  | 周几，0 ~ 6， 0代表周日 | | number |
| hour      | 小时 0 ~ 23 | | number |
| minute    | 分 0 ~ 59 | | number |
| second    | 秒 0 ~ 59 | | number |
| millis    | 毫秒 0 ~ 999 | | number |
| valueOf()  | 返回Date对象的valueOf(), 即时间戳 | | number |
| toString() | 返回当前 Date对象的toUTCString() + 阴历的格式化后的日期时间: 例“Wed, 24 Aug 2022 14:50:51 GMT (二〇二二年七月廿七亥時)” | | string |