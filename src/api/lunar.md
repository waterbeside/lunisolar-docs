# Lunar 阴历类

| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| leapMonth      | 当年农历的闰月，返回月份的数字， 如果没有闰月，返回0 | | number |
| leapMonthIsBig | 当年农历闰月是否大月 如果有闰月并且为大月，返回true || boolean |
| year           | 取得该阴历年正月初一所在的公历年 || number |
| month          | 取得当前阴历月的月号数字 | | number |
| day            | 取得当前阴历日号数字 | | number |
| hour           | 取得当前时辰下标 0 ~ 11 | | number |
| isLeapMonth    | 当前阴历月是否为闰月 |  | boolean |
| isBigMonth     | 当前所在阴历月是否为大月 | | boolean |
| lunarNewYearDay | 取得当年正月初一对应的公历日期 |  | Date |
| lastDayOfYear | 取得当年的最后一天 |  | Date |
| getYearName()  | 取得该阴历年正月初一所在的公历年, 返回汉字字符串 | | string |
| phaseOfTheMoon | 取得当天月相，如朔、弦、望、晦等，不在上述其中之一者，返回空字符串 || string |
| getMonthName() | 取得当前阴历月, 返回汉字字符串 | | string |
| getDayName()   | 取得当前阴历日, 返回汉字字符串 | | string |
| getHourName()  | 取得当前时辰 | | string |
| valueOf()      | 返回Date对象的valueOf(), 即时间戳 | | number |
| toString()     | 返回当前阴历的格式化后的日期时间 如“二〇二二年六月二十未時” | | string |
| getLunarNewYearDay(year?: number) | 取得当年正月初一对应的公历日期 | year?: number<br> year为指定的年份，为空时则为Lunisolar已设定的年份 | Date |
