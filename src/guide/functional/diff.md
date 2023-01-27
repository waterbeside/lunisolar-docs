
# 时间差 diff

`lunisolar(date).diff(date, unit)` 可计算两个日期的时间差。

diff 方法包含两个参数：`date` 和 `unit`

参数：

- **date**: *string | number | Date | Lunisolar* 为与当前实作比较的时间
- **unit**: *string* 时间单位，单位见下文表格，单位不区分大小写，支持复数和缩写形式。默认为 `ms`

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

## 示例

```javascript
const lsr1 = lunisolar('2020/01/01 00:00:00')
const lsr2 = lunisolar('2020/01/02 00:00:00')
lsr1.diff(lsr2, 'ms') // 86400000 
lsr1.diff(lsr2) // 86400000 默认以毫秒为单位
lsr1.diff(lsr2, 's') // 86400
lsr1.diff('2020/02/01 00:00:00', 'M') // 1 第一个参数可接受字符串

const lsr3 = lunisolar('2018/01/01')
const lsr4 = lunisolar('2022/02/02')
lsr3.diff(lsr4, 'lY') // 5 相差5个阴历年
lsr3.diff(lsr4, 'lM') // 51 相差51个阴历月
lunisolar('2018/02/10').diff('2022/02/02', 'lM', true) // 49.233333 相差约49.233个阴历月
lunisolar('2018/02/10 00:00:00').diff('2018/02/10 00:00:00', 'lM', true) // 49.233333 相差约49.233个阴历月

const a = '2020/01/02 00:00:00'
const b = '2020/01/01 00:00:00'
a.diff(b) // -86400000 a比b大的话将返回负数
```

> 阴历的时间差计算，如 2018/02/10 （二〇一七年十二月廿五）和 2018/02/16（二〇一八年正月初一）这两个日期，实际只相差五天，但因为两个所在的阴历年不同，所以`date1.diff(date1,'lY')` 计出的结果是1年，如果采用小数`date1.diff(date1,'lY', true)`，会算得 0.016 年。
>
> 而公历的diff会与`dayjs.diff`的计算方式一致，两个时间天数不足一年, 其取整数是不会按一年算的。如果你想农历也按此方式取整，可以先取浮点数再取整`parseInt(date1.diff(date1,'lY', true))`
