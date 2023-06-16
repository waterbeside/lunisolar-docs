# 节气

::: info

- 节气是农历的重要组成部分，依黄经度数划分，属于阳历范畴，是天干地支纪时法的换岁换月依据，是中国大多数传统术数的重要基础
- 自1645年起至今所使用的廿四节气是依据太阳黄经度数划分，把黄道360度圆周划分成24等份，每等份15度，每15度为一个节气，全年共二十四个节气。
- 节气是某一个时该点，而非某个时间段，但由于本库采用的转换数据只精确到天，所以本库的交节（更换八字月柱），也是以日为准。
  
:::

## 取得当前节气

返回当前日期的节气对象 [**SolarTerm**](../../api/solarTerm.md)，如果不是节气，返回null

```typescript
/**
 * @return {SolarTerm | null} 
 */
lunisolar().solarTerm
```

## 最近节气

取得当前日期之前的最近的节气

```typescript
/**
 * @param nodeFlag 取的节气点，0: 取节， 1: 取气, 2: 节或气都取
 * @return {SolarTerm | null} 
 */
lunisolar().recentSolarTerm(nodeFlag: 0 | 1 | 2)

// use
lunisolar().recentSolarTerm(0) // 取得当前日期在哪那个最近的节之后
lunisolar().recentSolarTerm(1) // 取得当前日期在哪那个最近的气之后
lunisolar().recentSolarTerm(2) // 取得当前日期在哪那个最近的节气之后
```

## 季节

> 季节是依节气来划分的

取当前日期所在季节的索引值，范围 [0, 3]

```typescript
/**
 * @return {number} 
 */
lunisolar().getSeasonIndex()
```

取当前日期所在季节名称

```typescript
/**
 * @return {string} 
 */
lunisolar().getSeason()
```

## 节气名称列表

通过调用 SolarTerm类的静态方法取得节气列表，

该列表从每年的第一个节气(小寒)开始按顺序列出所有节气名称

```typescript
/**
 * @return {string[]}
 */
lunisolar.SolarTerm.getNames()
```

## 指定年的节气日列表

取得指定年的节气日期列表，长度24，返回 `number[]`

该列表是从每年的第一个节气(小寒)开始按顺序列出的，只包含`日`

```typescript
/**
 * @param {number} year 指定的年份
 * @return {number[]}
 */
lunisolar.SolarTerm.getYearTermDayList(year: number)

// 示例： 返回2023年的节气日期列表
const termList = lunisolar.SolarTerm.getYearTermDayList(2023) // [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,24,8,22,7,22]

```

:::tip

节气列表从每年公历1月的第一个节气(小寒)开始按顺列出，因为公历每个月固定包含2个节气，知道是第几个节气，便能很易算是是第几个月份。所以列表只给出了**日**，不包含**月**

:::

示例：取得2023年所有节气名及其日期

```typescript
import lunisolar from 'lunisolar'

const termList = lunisolar.SolarTerm.getYearTermDayList(2023) // 取得节气日列表
const nameList = lunisolar.SolarTerm.getNames() // 取得节气名列表

for (let i = 0; i < 24; i++) {
  const name = names[i] // 节气名
  const m = (i >> 1) + 1 // 月份
  const d = yearTermList[i] // 日
  console.log(i, name, `2023年${m}月${d}日`)
}

/** result
0 小寒 2023年1月5日
1 大寒 2023年1月20日
2 立春 2023年2月4日
3 雨水 2023年2月19日
4 驚蟄 2023年3月6日
5 春分 2023年3月21日
6 清明 2023年4月5日
7 穀雨 2023年4月20日
8 立夏 2023年5月6日
9 小滿 2023年5月21日
10 芒種 2023年6月6日
11 夏至 2023年6月21日
12 小暑 2023年7月7日
13 大暑 2023年7月23日
14 立秋 2023年8月8日
15 處暑 2023年8月23日
16 白露 2023年9月8日
17 秋分 2023年9月23日
18 寒露 2023年10月8日
19 霜降 2023年10月24日
20 立冬 2023年11月8日
21 小雪 2023年11月22日
22 大雪 2023年12月7日
23 冬至 2023年12月22日
 */
```

## 指定年月的节和气

取得指定月的节和气日期，返回 [节, 气]

```typescript
/**
  * @param year 公历年
  * @param month 公历月份
  * @return {[number, number]} [节, 气]
  */
lunisolar.SolarTerm.getMonthTerms(year: number, month: number)

// 示例： 返回2023年2月的节和气的日期
const termList = lunisolar.SolarTerm.getYearTermDayList(2023, 2) // [4, 19]

```
