# 节气

::: info

- 节气是农历的重要组成部分，依黄经度数划分，属于阳历范畴，是天干地支纪时法的换岁换月依据，是中国大多数传统术数的重要基础
- 自1645年起至今所使用的廿四节气是依据太阳黄经度数划分，把黄道360度圆周划分成24等份，每等份15度，每15度为一个节气，全年共二十四个节气。
- 节气是某一个时该点，而非某个时间段，但由于本库采用的转换数据只精确到天，所以本库的交节（更换八字月柱），也是以日为准。
  
:::

## 取得当前节气

返回当前日期的节气对象，如果不是节气，返回null

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

## 节气列表

通过调用 SolarTerm类的静态方法取得节气列表

```typescript
/**
 * @return {string[]}
 */
lunisolar.SolarTerm.getNames()
```

## 指定年的节气列表

取得指定年的节气日期列表，长度24，[d, d, d, d, ....d]

```typescript
/**
 * @param {number} year 指定的年
 * @return {number[]}
 */
lunisolar.SolarTerm.getYearTermDayList(year: number)

// 示例： 返回2023年的节气日期列表
const termList = lunisolar.SolarTerm.getYearTermDayList(2023) // [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,24,8,22,7,22]

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
