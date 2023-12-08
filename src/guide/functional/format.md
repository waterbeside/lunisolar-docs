# 时间格式化 format

lunisolar(date).format(formatStr)格式化数据

## 示例

```javascript
lunisolar('2022/07/18 14:40').format('YYYY/MM/DD HH:mm:ss SSS') // '2022/07/18 14:40:00 000'
lunisolar('2022/07/18 14:40').format('lY年 lMlD lH時') // '二〇二二年 六月二十 未時'
lunisolar('2022/07/18 14:40').format('lY年 lM(lL)lD lH時') // '二〇二二年 六月(大)二十 未時'
lunisolar('2022/07/18 14:40').format('lYn年 農歷lMn月lDn日 第lHn個時辰') // '2022年 農歷6月20日 第8個時辰'
lunisolar('2022/07/18 14:40').format('cY cM cD cH') // '壬寅 丁未 壬申 丁未'

lunisolar('2022/07/18 14:40').format('八字： cY cM cD cH') // '八字：壬寅 丁未 壬申 丁未'
lunisolar('2022/07/18 14:40').format('cYs-cYb cMs-cMb cDs-cDb cHs-cHb') // '壬-寅 丁-未 壬-申 丁-未'
lunisolar('2022/03/10').format('cZ年') // '虎年'

// 提示： 使用方括号[]可对里边的内容进行转义, 如要显示Year这个单词，要放在[]内才能正确显示。
lunisolar('2022/07/18 14:40').format('[Year:]YYYY') // 'Year:2022'

```

## 标识符

根据传入的标识字符串获取格式化的日期。

要对字符进行转义，请将它们括在方括号中(例如 `[cY YY]` )

| 标识 | 示例 | 描述 |
| ---- | ---- | --- |
| lY  |  二〇二二 | 当年阴历正月初一所在的公历年 (`lY` 为 `lunarYear`缩写, 其它类推) |
| lYn  |  2022 | 当年阴历正月初一所在的公历年, 数字形式开示 |
| lM  |  正月-十二月 | 阴历月 |
| lMn  |  1-12 | 阴历月, 以数字形式表示, 当为闰月时，数字会加上100，如闰二月，则结果为102 |
| lD  | 初一 | 阴历日 |
| lDn  | 1 - 30 | 阴历日, 以数字形式表示 |
| lH  | 子 - 亥 | 时辰 |
| lHn  | 1 - 12 | 时辰序号，从1开始 |
| lL  | 大 \| 小  | 阴历月是大月还是小月 |
| cY  | 甲子 | 八字年柱 (`cY` 为 `char8 Year` 缩写) |
| cYs  | 甲 | 八字年柱天干 (`cYs` 为 `char8 Year stem` 缩写) |
| cYb  | 子 | 八字年柱地支 (`cYb` 为 `char8 Year branch` 缩写) |
| cM  | 甲子 | 八字月柱 |
| cMs  | 甲 | 八字月柱天干 |
| cMb  | 子 | 八字月柱地支 |
| cD  | 甲子 | 八字日柱 |
| cDs  | 甲 | 八字日柱天干 |
| cDb  | 子 | 八字日柱地支 |
| cH | 甲子 | 八字日柱 |
| cHs  | 甲 | 八字日柱天干 |
| cHb  | 子 | 八字日柱地支 |
| cYn  <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 - 59 | 八字年柱干支序号 (比`cY` 多个 `n`，凡干支相关的，想取序号，在后补个`n`即可) |
| cYsn <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 - 9 | 八字年柱天干序号 (比`cYs` 多个 `n`) |
| cYbn <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 - 11 | 八字年柱地支序号 (比`cYb` 多个 `n`) |
| cMn <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 - 59 | 八字月柱干支序号 |
| cMsn <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 - 9 | 八字月柱天干序号 |
| cMbn <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 | 八字月柱地支序号 |
| cDn <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 - 59 | 八字日柱干支序号 |
| cDsn <Badge type="warn" vertical="middle" text="> v2.4.0"/>  | 0 - 9 | 八字日柱天干序号 |
| cDbn <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 | 八字日柱地支序号 |
| cHn <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 - 59 | 八字日柱序号 |
| cHsn <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 - 9 | 八字日柱天干序号 |
| cHbn <Badge type="warn" vertical="middle" text="> v2.4.0"/> | 0 | 八字日柱地支序号 |
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
| d |0-6 |一周中的一天，星期天是 0 |
| dd  | Su-Sa  （中文的話： 日、一 ~ 六 ）| 最简写的星期几 |
| ddd | Sun-Sat （中文的話： 週日、週一 ~ 週六） | 简写的星期几 |
| dddd | Sunday-Saturday （中文的話： 星期日、星期一 ~ 星期六）| 星期几 |
| A | AM / PM | 上/下午，大写 |
| a | am / pm | 上/下午，小写 |
| dR  <Badge type="warn" vertical="middle" text="> v2.3.0"/> | 1 ~ 5 | 该天的`星期几`在该月第 **多少** 次出现 |
| dRr <Badge type="warn" vertical="middle" text="> v2.3.0"/> | 1 ~ 5 | 该天的`星期几`在该**月倒**数第 **多少** 次出现 |

