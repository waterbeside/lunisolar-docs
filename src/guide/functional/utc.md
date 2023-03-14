# UTC <Badge type="tip" text=">= v2.2.0" vertical="top" />

## UTC模式的Lunisolar实例

lunisolar默认使用本地时间进行运算和展示数据

如果你需要使用UTC模式，可通过以下方几种方式创建Lunisolar实例

### 1 把原来的 Lunisolar 实例转为utc模式的实例

```typescript
const lsr = lunisolar('2023-03-14 12:00').utc()
console.log(lsr.format('YYYY-MM-DD HH:mm')) // 如果当前为东八区，则格式化出来的结果为 '2023-03-14 04:00 '
```

### 2 通过 lunisolar.utc() 直接创建utc模式的实例

```typescript
const lsr = lunisolar.utc('2023-03-14 10:00') // 以2023-03-14 10:00作为utc时间创建实例
```

### 3 通过 lunisolar() 配置参数指定为utc模式的实例

```typescript
const lsr = lunisolar('2023-03-14 10:00', { isUTC }) // 以2023-03-14 10:00作为utc时间创建实例
```

## UTC时间偏移值(utcOffset)

### 取得 utcOffset

`lunisolar().utcOffset()` 返回以分钟的为单位的偏移值

```typescript
lunisolar('2023-03-14 14:44').utcOffset()　//如果当前为东八区，应返回 480
lunisolar('2023-03-14 14:44', { isUTC: true, offset: 60 }).utcOffset()　// 如果为UTC模式，则返回其设定的offset值，此处为 60, （offset值不设置时则为0）
```

### 设置 utcOffset

当`lunisolar().utcOffset(offset)` 方法传入参数时，则返回一个utc模式，并包含时间偏移的Lunisolar实例。

@参数 **offset**: number

- 当其范围为 [-16, 16]时，单位为`小时`，将自动乘以60转为分钟，其它情况单位为`分钟`

例1：

```typescript
// 以当前为东八区为例
const lsr = lunisolar('2023/03/14 09:32').utcOffset(-60)
console.log(lsr.format('YYYY/MM/DD HH:mm')) // '2023/03/14 00:32'

// 说明：
// 当前为+8区，'2023/03/14 09:32' 转为utc时间后为 '2023/03/14 01:32'
// 由于设置了偏移-60分钟，所以再减一小时为   '2023/03/14 00:32'
```

例2：

```typescript
const lsr = lunisolar.utc('2023/03/14 00:00').utcOffset(6)
console.log(lsr.format('YYYY/MM/DD HH:mm')) // '2023/03/14 06:00'

// 说明：
// 通过lunisolar.utc()把'2023/03/14 00:00' 指定为UTC时间, 
// 然后设置偏移值为6小时(绝对值小于16时单位为小时，于是加上6小时得 '2023/03/14 06:00'

```

例3：

有一新疆拉萨出生的小朋友，想要计算其八字，尽管当地使用的是北京时间，但由于按其经度实例应在东六区，我们可以使用UTC偏移的方式计算：

```typescript
// 北京时间为 '2023-03-14 20:28', 如果按本地时间模式计算八字，应为 '癸卯 乙卯 辛未 戊戌'
// 新疆拉萨地理位置为+6区，通过 utcOffset(6) 使其设为UTC模式，并偏移到东六区
// 设为UTC模式后，char8会按UTC模式的日期计算，得到结果为 '癸卯 乙卯 辛未 丁酉'
lunisolar('2023-03-14 20:28').utc().utcOffset(6).char8.toString() // 癸卯 乙卯 辛未 丁酉  

```

:::warning
使用`lunisolar().utcOffset(offset: number)`设置偏移时，即使不使用`UTC()`进行模式转换时，也会自动生成一个UTC模式的实例
:::

## isUTC()

`lunisolar().isUTC()` 方法模查是否使用UTC模式

```typescript
const lsr1 = lunisolar().utc()
const lsr2 = lunisolar()

console.log(lsr1.isUTC()) // true
console.log(lsr2.isUTC()) // false
```

## local()

`lunisolar().local()` 返回一个新的本地时区模式的实例

```typescript
const lsr1 = lunisolar.utc('2023/03/14 00:00')
const lsr2 = lsr1.local()
console.log(lsr2.format('YYYY-MM-DD HH:mm')) // 如果当前为东八区，则返回'2023-03-14 08:00'
```
