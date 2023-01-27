# 阴历

::: info 阴历小知识

- 月亮圆缺一周期为一个月，月即为太阴，所以叫阴历。
- 一个阴历月约为29.53天，12个月共 $12 * 29.53 = 354.36$ 天。而一个回归年为365.2422日。一年就相差10.88天，所以大概2.7年就要闰一个月来补回每年相差的时间。所以存在闰月

:::

Lunisolar实例上包含一个**lunar**属性，该属返回一个**Lunar**实例可以此取得各项阴历数据

```typescript
lunisolar().lunar: Lunar
```

## 取值

### 年

取得当年正月初一所在的公历年

```typescript
/**
 * @return {number}
 */
lunisolar().lunar.year
```

取得字符串形式的年份名，如'二〇二二'

```typescript

/**
 * @return {string}
 */
lunisolar().lunar.getYearName()
```

### 月

取得阴历月份，以数字形式返回，当为闰月时，月份数会加100, 如闰二月，则返回 102

```typescript
/**
 * @return {number} 
 */
lunisolar().lunar.month

```

取得字符串形式的月份名，如'闰二月'

```typescript
/**
 * @return {string}
 */
lunisolar().lunar.getMonthName()
```

### 是否大月

当前日期所在月份是否大月,

> 阴历大月为30天，小月为29天

```typescript
/**
 * @return {boolean} 
 */
lunisolar().lunar.isBigMonth
```

### 是否闰月

当前日期所在月份是否闰月

```typescript
/**
 * @return {boolean} 
 */
lunisolar().lunar.isLeapMonth
```

::: info
:::

### 日

取得月份里的日期

```typescript
/**
 * @return {number} 范围为 [1, 30]
 */
lunisolar().lunar.day
```

取得字符串形式的日期名，如'初一'

```typescript
/**
 * @return {string}
 */
lunisolar().lunar.getDayName()
```

### 时辰

取得时辰序号，从0开始，0 ~ 11 对应 子时 ~ 亥时

```typescript
/**
 * @return {number} 范围为 [0, 11]
 */
lunisolar().lunar.hour
```

取得时辰字符串, 如 '子'

```typescript
/**
 * @return {string}
 */
lunisolar().lunar.getHourName()
```

### 月相

取得当天月相，如朔、弦、望、晦等，不在上述其中之一者，返回空字符串

```typescript
/**
 * @return {string}
 */
lunisolar().lunar.phaseOfTheMoon
```

### 当年的闰月月份

当年农历的闰月，返回月份的数字， 如果没有闰月，返回0

可用于检查当年有没有闰年

```typescript
/**
 * @return {number}
 */
lunisolar().lunar.leapMonth
```

如果要看当年的闰月是否大月：

```typescript
/**
 * @return {boolean}
 */
lunisolar().lunar.leapMonthIsBig
```

### 正月初一所在日

取得当年正月初一对应的公历日期, 返回`Date`对象

```typescript
/**
 * @return {Date}
 */
lunisolar().lunar.getLunarNewYearDay()
```

