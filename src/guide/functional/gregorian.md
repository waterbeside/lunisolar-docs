# 公历

通过lunisolar()函数创建Lunisolar后，可以取得一些基本的公历时间相关值

## 取值

### 年

```typescript
/**
 * @return {number}
 */
lunisolar().year
```

### 月

```typescript
/**
 * @return {number} 范围为 [1, 12]
 */
lunisolar().month
```

::: warning 注意
lunisolar().month 取值范围是1 ~ 12， 对应1到12月， 与Date对象的getMonth()方法的0 ~ 11不同，请勿搞混。
:::

### 日

取得月份里的日期

```typescript
/**
 * @return {number} 范围为 [1, 31]
 */
lunisolar().day
```

::: warning 注意
lunisolar().day 取值是某月的日期，对应Date对象的getDate()方法。而Date对像的getDay()方法为取得周几，注意区分。
:::

### 星期几

取得星期几，0为星期日

```typescript
/**
 * @return {number} 范围为 [0, 6]
 */
lunisolar().dayOfWeek
```

::: warning 注意
lunisolar().dayOfWeek 的取值，0为周日，1 ~ 6 对应周一至周六，
lunisolar().dayOfWeek属性，对应Date对像的getDay()方法。
:::

### 时

```typescript
/**
 * @return {number} 范围为 [0, 23]
 */
lunisolar().hour
```

### 分

```typescript
/**
 * @return {number} 范围为 [0, 59]
 */
lunisolar().minute
```

### 秒

```typescript
/**
 * @return {number} 范围为 [0, 59]
 */
lunisolar().second
```

### 毫秒

```typescript
/**
 * @return {number} 范围为 [0, 999]
 */
lunisolar().millis
```

### unix时间戳

返回以秒为单位的时间戳

```typescript
/**
 * @return {number} 范围为 [0, 999]
 */
lunisolar().unix
```

### 时间戳

返回以毫秒为单位的时间戳

```typescript
/**
 * @return {number} 范围为 [0, 999]
 */
lunisolar().valueOf()
```

::: tip
lunisolar().valueOf() 与 new Date().valueOf() 一致
:::

## 取得Date对象

```typescript
/**
 * @return {Date}
 */
lunisolar().toDate()
```

## 操作

### 时间加减

```typescript
/**
 * @param { number } value 要加减的值，当为负数时即为减
 * @param { DateAddUnit } unit 单位，默认值为 millisecond，即毫秒
 * @return { Lunisolar } 返回一个新的Lunisolar实例
 */
lunisolar().add(value: number, unit?: DateAddUnit): Lunisolar

```

```typescript
lunisolar().add(1, 'd') // 加一天
lunisolar().add(-2, 'M') // 减两个月
lunisolar().add(-2, 'm') // 减两分钟
```

单位说明

```typescript

type DateAddUnit = 
  | 'millisecond'
  | 'second' 
  | 'minute' 
  | 'hour' 
  | 'day' 
  | 'month' 
  | 'year' 
  | 'ms' 
  | 's' 
  | 'm' 
  | 'h' 
  | 'd'
  | 'M' 
  | 'y'
```

| 单位 | 缩写 | 描述 |
| ----| --- | --- |
| day | d | 天 |
| month | M | 月份 |
| year | y | 年 |
| hour | h | 小时 |
| minute | m | 分钟 |
| second | s | 秒 |
| millisecond | ms | 毫秒 |

