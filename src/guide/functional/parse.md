
# 解释 (创建Lunisolar对象)

## lunisolar()

通过**lunisolar()** 函数创建一个 **Lunisolar**实例对象：

```typescript
lunisolar(date?: string | number | Date | Lunisolar, config?: ConfigType): Lunisolar
```

### 参数说明

- **date** {*string | number | Date | undefined*}

  要解析的时间
  - 当为string类型时，传入时间字符串，如 '2022-07-18'
  - 当为number类型时，传入以毫秒为单位的时间戳
  - 亦可传入一个Date对象
  - 当不传入参数，即为undefine时，即取当前时间

- **config** {*ConfigType*}
  
  设置, 为一个对像，其内容如下：

```typescript
type ConfigType = {
  lang: string, // 语言包名称，默认为zh，即使用繁体中文
  changeAgeTerm: number // 换岁时气的索引，默认值为2，即立春。（注：节气列表从小寒开始）
}
```

### 示例

```typescript
// 传入字符串
lunisolar('2022-07-18 14:40')
lunisolar('2022/07/18')
// 不传入参数时，为当前时间
lunisolar()
// 传入时间戳 (毫秒为单位)
lunisolar(1658289207143)
// 传入Date对象
lunisolar(new Date(2022, 6, 20))
// 传入Lunisolar对象时，将克隆一个Lunisolar对象
lunisolar(lunisolar())

//
const config = {
  lang: 'en' // 更改用语言，需先加载对应语言包，详见文档 【国际化】的说明
}
lunisolar('2022-07-18 14:40', config)

```

## lunisolar.fromLunar() 阴历反查

通过阴历数据创建一个Lunisolar实例对象，此法可用来阴历转公历:

```typescript
lunisolar.fromLunar(lunarData: FromLunarData, config: ConfigType): Lunisolar
```

### 参数说明

**lunarData**: FromLunarData

```typescript
type FromLunarData = {
  year?: number | string 
  // 该年正月初一所在公历年的年份，可以是字符串，默认值为当前日期的年份

  month: number | string 
  // 阴历月份，可以是字符串，必填, 当月份数大于100时，表明时闰月，如闰4月，可输入104
  
  day: number | string 
  // 阴历日，可以是字符串，必填

  hour?: number | string 
  // 时辰索引值或时辰名，默认为0, 即子时。设置时辰后，返回的小时为该时辰的中间时间，如寅时，会返回4点正的时间。

  isLeapMonth?: boolean 
  // 指明月份是否闰月，默认为false, 当month设为大于100的数时，会无视此设置

}
```

### 示例1

```typescript
const lunarData = {
  year: 2022,
  month: 10,
  day: 25
}
const lsr = lunisolar.fromLunar(lunarData) // 成功创建一个个Lunisolar实例对象

console.log(lsr.format('YYYY-MM-DD')) // 2022-11-18
```

### 示例2

你也可以使用汉字进行阴历反查

```typescript
// lunisolar默认使用繁体中文语言包，此语言包默认自动加载，可直接使用繁体中文
// 使用其它语言包参考示例3
const lunarData = {
    year: '二〇二〇',
    month: '閏四月', 
    day: '廿四'
  }
const lsr = lunisolar.fromLunar(lunarData) // 成功创建一个个Lunisolar实例对象
console.log(lsr.format('YYYY-MM-DD')) // 2020-06-15
```

### 示例3

使用简体中文进行阴历反查

```typescript
import lunisolar from 'lunisolar'
import zhCn from 'lunisolar/locale/zh-cn'
import ja from 'lunisolar/locale/ja'
lunisolar.locale(ja) // 加载日文语言包
lunisolar.locale(zhCn) // 加载简体中文语言包，最后加载者，会全局默认使用该语言包

const lunarData = {
    year: '二〇二〇',
    month: '闰四月',  // 此时，如果还是使用繁体的“閏”字会报错。
    day: '廿四'
  }
const lsr = lunisolar.fromLunar(lunarData) // 成功创建一个个Lunisolar实例对象

console.log(lsr.format('YYYY-MM-DD')) // 2020-06-15

// lunisolar.locale(zhCn) 加载简体中文语言名后，会全局使用zh-cn语言包
// 如果个别实例想使用其它语言包可通config进行临时更改，如使用日文，
const lsr2 = lunisolar.fromLunar({
    year: '二〇二〇',
    month: '睦月', 
    day: '一日'
  }, {
  lang: 'ja' // 指正要使用的语言包名
})

console.log(lsr.format('YYYY-MM-DD')) // 2020-01-25

```