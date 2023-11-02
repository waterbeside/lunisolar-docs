# Lunisolar类

| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| lunar      | 阴历数据对象 | | [Lunar](./lunar.md) |
| char8      | 八字对象 | | [Char8](./char8.md) |
| markers  <Badge type="warn" vertical="middle" text="v2.3.0+"/>    | 日期备注对象（可用于节日、备忘等） | | [Markers](./markers.md) |
| solarTerm       | 返回当前日期的节气对象，如果不是节气，返回null | | [SolarTerm](./solarTerm.md) \| null |
| getSeason()  | 取得当前季节 | | string |
| getSeasonIndex()  | 以春夏秋冬为顺序取得当前季节索引 | | number |
| toDate()   | 返回Date对象 | | Date |
| clone()    | 克隆当前Lunisolar对象 | | Lunisolar |
| unix()     | 返回以秒为单位的时间戳 | | number |
| format(formatStr: string) | 按指定格式格式化时间 | **formatStr**: string 时间将以这字符串格式进行格式化，例 'YYYY-MM-DD HH:mm:ss' | string |
| diff(date, unit, float) | 时间差计算 | **date**: number \| string \| Date \| Lunisolar <br> 与当前实例的时间进行比较的时间<br> **unit**: string <br>单位，如 year, lunarYear, month, lunarMonth 等<br> **float**: boolean <br>是否返回浮点数 | number |
| add(value, unit)  | 时间加减 | **value**: number 时间加减的值，负数为减 <br/> **unit**: string 加减单位 | number |
| year     | 年份 | | number |
| month    | 月份 1 ~ 12 | | number |
| day      | 日期 1 ~ 31 | | number |
| dayOfWeek  | 周几，0 ~ 6， 0代表周日 | | number |
| hour      | 小时 0 ~ 23 | | number |
| minute    | 分 0 ~ 59 | | number |
| second    | 秒 0 ~ 59 | | number |
| millis    | 毫秒 0 ~ 999 | | number |
| utc()      | 转为utc模式 | | Lunisolar |
| isUTC()      | 检查是否为UTC模式的实例 | | boolean |
| utcOffset(offset) | 取得，或设置utc偏移值 | **offset**: number \| undefined <br/> · 当为undefined时，为取得utc偏移值, 返回单位为分钟的number值 <br /> · 当为number类型时，为设置utc偏移值，并把时间转为utc时间，返回一个新的Lunisolar实例。如果设置的offset范围在[-16, 16], 则单位为小时，其它情况为分钟 | Lunisolar \| number |
| local()      | 转为本地时间 | | Lunisolar |
| valueOf()  | 返回Date对象的valueOf(), 即时间戳 | | number |
| toISOString()  | 返回Date对象的toISOString() | | string |
| toUTCString()  | 返回Date对象的toUTCString() | | string |
| toString() | 返回当前 Date对象的toUTCString() + 阴历的格式化后的日期时间: 例“Wed, 24 Aug 2022 14:50:51 GMT (二〇二二年七月廿七亥時)” | | string |

**Lunisolar.format() 标识符参考**

| <div style="min-width: 100px">标识</div> | 示例 | 描述 |
| ---- | ---- | --- |
| lY  |  二〇二二 | 当年阴历正月初一所在的公历年 |
| lYn  |  2022 | 当年阴历正月初一所在的公历年, 数字形式开示 |
| lM  |  正月-十二月 | 阴历月 |
| lMn  |  1-12 | 阴历月, 以数字形式表示 |
| lD  | 初一 | 阴历日 |
| lDn  | 1 - 30 | 阴历日, 以数字形式表示 |
| lH  | 子 - 亥 | 时辰 |
| lHn  | 1 - 12 | 时辰序号，从1开始 |
| lDn  | 1 - 30 | 阴历日, 以数字形式表示 |
| lL  | 大 \| 小  | 阴历月是大月还是小月 |
| cY  | 甲子 | 八字年柱 |
| cYs  | 甲 | 八字年柱天干 |
| cYb  | 子 | 八字年柱地支 |
| cM  | 甲子 | 八字月柱 |
| cMs  | 甲 | 八字月柱天干 |
| cMb  | 子 | 八字月柱地支 |
| cD  | 甲子 | 八字日柱 |
| cDs  | 甲 | 八字日柱天干 |
| cDb  | 子 | 八字日柱地支 |
| cH | 甲子 | 八字日柱 |
| cHs  | 甲 | 八字日柱天干 |
| cHb  | 子 | 八字日柱地支 |
| cZ  | 鼠 | 生肖 （立春换岁，可通过config设置换岁时机） |
| t  | 1-24 | 节气，从小寒到冬至的序号，从1开始，如果该日不是节气，返回空字符串 |
| T  | 小寒-冬至 | 节气字符串，如果该日不是节气，返回空字符串 |
| YY  |  18 | 年，两位数 |
| YYYY | 2018 | 年，四位数 |
| M  | 1-12 | 月，从1开始  |
| MM | 01-12 | 月，两位数字 |
| MMM | Jan-Dec | 月，英文缩写 |
| D | 1-31 | 日 |
| DD | 01-31 | 日，两位数 |
| H | 0-23 | 24小时 |
| HH | 00-23 | 24小时，两位数 |
| h | 1-12 | 12小时 |
| hh | 01-12 | 12小时，两位数 |
| m | 0-59 | 分钟 |
| mm | 00-59 | 分钟，两位数 |
| s | 0-59 | 秒 |
| ss | 00-59 | 秒，两位数 |
| S | 0-9 | 毫秒（百），一位数 |
| SS | 00-99 | 毫秒（十），两位数 |
| SSS | 000-999 | 毫秒，三位数 |
| Z | -05:00 | UTC偏移 |
| ZZ | -0500 | UTC偏移，两位数 |
| A | AM / PM | 上/下午，大写 |
| a | am / pm | 上/下午，小写 |
| dR <Badge type="warn" vertical="middle" text="v2.3.0+"/>  | 1 ~ 5 | 该天的`星期几`在该月第 **多少** 次出现 |
| dRr <Badge type="warn" vertical="middle" text="v2.3.0+"/>  | 1 ~ 5 | 该天的`星期几`在该**月倒**数第 **多少** 次出现 |

**Lunisolar.diff() unit可选值参考**

| 单位 | 缩写 | 描述 |
| ----| --- | --- |
| lunarYear | lY | 阴历年 |
| lunarMonth | lM | 阴历月 |
| lunarDay | lD | 阴历日 |
| lunarHour | lH | 时辰 |
| day | d | 天 |
| month | M | 月份 |
| year | y | 年 |
| hour | h | 小时 |
| minute | m | 分钟 |
| second | s | 秒 |
| millisecond | ms | 毫秒 |

**Lunisolar.add() unit可选值参考**

| 单位 | 缩写 | 描述 |
| ----| --- | --- |
| day | d | 天 |
| month | M | 月份 |
| year | y | 年 |
| hour | h | 小时 |
| minute | m | 分钟 |
| second | s | 秒 |
| millisecond | ms | 毫秒 |
