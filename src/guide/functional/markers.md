
# 节日、日期备注

<Badge type="warn" vertical="middle" text="v2.3.0+"/>

从2.3.0版本开始，可以通过**[Markers](../../api/markers.md)**类添加日期备注，可用于添加节日、备忘等。

lunisolar内置了中国的各类节日列表，全局加载后，可通过lunisolar().markers实例取得该天的节日。 你也可以自定义添加日期节日、备忘等。 通过以下几个列子，可快速上手。

:::tip
对于lunisolar来说，所有节日实际上都是marker。
:::

## 1 快速上手

**例: 全局添加内置的节日列表**

```typescript
import lunisolar from 'lunisolar'
// 载入节日列表
import festivals from 'lunisolar/markers/festivals.zh'  // 繁体版
// import festivals from 'lunisolar/markers/festivals.zh-cn' // 简体版

// 全局加载节日列表
lunisolar.Markers.add(festivals)

// lunisolar('2023-10-01')实例下
const markersList = lunisolar('2023-10-01').markers.list 
console.log(markersList.map(v => v.name).join(',')) // 國際音樂節,國慶節

```

**例：全局添加自定义的节日和日期备注**

```typescript
import lunisolar from 'lunisolar'
import type { MarkersSetting } from 'lunisolar'

// 编写自定义的节日列表
const markersSetting: MarkersSetting = [{
  format: 'MMDD',  // 将会使用lunisolar().format('MMDD')方法格式化日期
  markers: {
    '1019': { // 如果format方法返回值与此key匹配，则为当前日期会取得此marker
      tag: '生日',
      name: '我的生日'
    },
    '0919': {
      tag: ['生日', '吐槽'], // tag可以是数组
      name: '假的生日',
      data: { // 可以通过data，设定任何信息以便取用
        desc: '身份证是的生日写早了一个月, 所以公司都提早一个月给我庆生',
        color: '#aa0000'
      }
    }
  }
}, {
  format: 'lMn,lDn', // 农历月日
  markers: {
    '4,14': { // 农历四月十四
      tag: '生日',
      name: '吕洞宾诞辰',
      data: {
        desc: '西樵山大仙诞交通管制',
        color: '#00cccc'
      }
    }
  }
}]


// 再编写自定义的日期备注列表
const markersSetting2: MarkersSetting = [{
  format: 'MMDD',  // 将会使用lunisolar().format('MMDD')方法格式化日期
  markers: {
    '1003': [{ //同一日期可以设定多个marker
      tag: '任务',
      name: '带家人出去吃饭'
    }, {
      tag: ['任务', '保险'],
      name: '交汽车保险'
    }]
  }
}]

// 加载自定义的节日
// Markers类add静态方法支持链式操作，add方法的第二参数可为节日列表全补打一个标签
lunisolar.Markers.add(markersSetting, '自定义节日').add(markersSetting2, '自定义备忘')

// lunisolar()实例的markers实例，可以取得对应日期marker数据

const lsr1003 = lunisolar('2023-10-03').markers.list // markers.list 取得markers数据列表
console.log(lsr1003.map(v => v.name)) // ['带家人出去吃饭', '交汽车保险']

const lsr0919 = lunisolar('2023-09-19')
console.log(lsr0919.markers.toString()) // '假的生日'
console.log(lsr0919.markers.find({name:'假的生日'})?.data?.desc) // '身份证是的生日写早了一个月, 所以公司都提早一个月给我庆生'


// 全局删除指定tag的marker
lunisolar.Markers.removeByTag('吐槽')

console.log(lunisolar('2023-09-19').markers.toString()) // 没有marker，输出空字符串

// 但是原来已生成的实例并不会移除marker
console.log(lsr0919.markers.toString()) // '假的生日'
// 可在markers实例上使用reset方法重置该实例上的全局marker
lsr0919.markers.reset()
console.log(lsr0919.markers.toString()) // 没有marker，输出空字符串


```

**例：直接在lunisolar()实例上添加日期备注**

```typescript
import lunisolar from 'lunisolar'

// 可直接在指定的lunisolar().markers实例上添加该日的marker
const lsr = lunisolar('2023-10-30')
lsr.markers.add({name: '买电烙铁', tag: '买东西'})

// 多个markers可以以数组形式传入，或者以链式操作添加
lsr.markers.add([{name: '练习多宝塔碑'}, {name: '临摹经飞经'}], '学习').add({name: '补充lunisolar.Markers相关文档', tag: '任务'})


console.log(lsr.markers.toString()) // '买电烙铁,练习多宝塔碑,临摹经飞经,补充lunisolar.Markers相关文档'

// 因为不是全局添加，其它实例即使日期相同，也取不到上边设置的这些marker
console.log(lunisolar('2023-10-30').markers.list) // []

```

## 2 添加marker

### 2.1 全局添加节日marker

lunisolar內置了一系列的节日，但需要另外加载，其包含了简体版和繁体版

```typescript

import festivals from 'lunisolar/markers/festivals.zh'  // 繁体版
// import festivals from 'lunisolar/markers/festivals.zh-cn' // 简体版

lunisolar.Markers.add(festivals, '补充的标签名称')

// 尽管节日设定列表已都有标签tag属性， 但Marker类的add静态方法的第二个参数可再为所有节日再补充标签，此参数为选填。
```

### 2.2 全局添加自定义的marker

除内置的节日外，你也可以自定义Marker, 自定义时，请参考类型 [MarkersSetting](../../api/markers.md#31-markerssetting) 的规则

```typescript
lunisolar.Markers.add(markersSetting: MarkersSetting, tag?: string|string[])
```

参数：

- **markersSetting**: [MarkersSetting](../../api/markers.md#31-markerssetting) 自定义的节日设置，必填
- **tag**?: string | string[] 补充的标签，可以是一个或多个，多个时为数组形式

例：

```typescript

import lunisolar from 'lunisolar'
import type { MarkersSetting } from 'lunisolar'

// 编写写自定义的日期备注列表
const markersSetting: MarkersSetting = [{
  format: 'MMDD',  // 将会使用lunisolar().format('MMDD')方法格式化日期
  markers: {
    // 以日期为key
    '1103': {
      tag: '纪念日',
      name: '结婚纪念日'
    }
    //同一日期可以设定多个marker
    '1104': [{
      tag: '抄经',
      name: '临写灵飞经'
    }, {
      tag: ['车保'], // tag也可以是数组
      name: '买汽车保险'
      data: { // data字段可以设置任何补充数据
        desc: '每年不得不买'
      }
    }],
  }
}]

// 加载自定义的节日
// Markers类add静态方法支持链式操作，add方法的第二参数可为节日列表全补打一个标签
lunisolar.Markers.add(markersSetting, '自定义节日').
```

### 2.3 添加lunisolar实例上的marker

除了可以全局添加marker外，还可以单独在实例上添加ｍarker

```typescript
const lsr = lunisolar()
lsr.markers.add(marker: MarkersSettingItem | MarkersSettingItem[], tag?: string | string[])
```

参数：

- **marker**: [MarkersSettingItem](../../api/markers.md#32-markerssettingitem) | [MarkersSettingItem](../../api/markers.md#32-markerssettingitem)[]  
  - 一个或多个的marker设置
  
- **tag**?: string | string[] 
  - 补充的标签，可以是一个或多个，多个时为数组形式

返回:

- 返回当前markers实例

例：

```typescript

const lsr = lunisolar('2023-11-02')
lsr.markers.add({name: '今天下班要去加油'， tag: '备忘'})

// 第二个参数和静态方法Markers.add方法一样，可补充一个或多个标签，可以是字符串形式，也可以是数组
lsr.markers.add({name: '今天下班要去加油'}, '再强调')

```

## 3 取得markers

通过`lunisolar().markers`取得markers实例。
lunisolar会根据当前日期匹配对应marker自动注入到markers实例中。

```typescript
// 取得当前lunisolar实例上的markers实例
const markers = lunisolar().markers
```

### 3.1 取得markers列表

通过`lunisolar().markers.list`属性，可取得一个marker列表，其返回的数据类型为 [StoreMarker](../../api/markers.md#34-storemarker)[]

```typescript
const list:StoreMarker[] = lunisolar().markers.list
```

使用`lunisolar().markers.toString()`方法，可取得当前实例的所有marker名称

```typescript
lunisolar().markers.toString(): string
```

例

```typescript
import festivals from 'lunisolar/markers/festivals.zh'  // 繁体版

lunisolar.Markers.add(festivals, '节日')

const lsr = lunisolar('2023-10-23')
lsr.markers.add({ name: '测试', tag: 'test' })

lsr.markers.list.map(v => v.name)  // ['重陽節', '测试']

// toString 方法相当于 lsr.markers.list.map(v => v.name).join(',')
lsr.markers.toString() // '重陽節,测试
```

### 3.2 筛选和查找markers

- 使用 `lunisolar().markers.filter(fn)` 进行列表筛选

  - 参数fn类型为 [MarkerFilterFn](../../api/markers.md#36-markerfilterfn) | [MarkerFilterDict](../../api/markers.md#35-markerfilterdict)

  - 返回的数据类型为 [StoreMarker](../../api/markers.md#34-storemarker)[]


- 使用 `lunisolar().markers.find(fn)` 查找一个合条件的marker,

  - 参数**fn**类型为 [MarkerFilterFn](../../api/markers.md#36-markerfilterfn) | [MarkerFilterDict](../../api/markers.md#35-markerfilterdict)

  - 返回数据类型为[StoreMarker](../../api/markers.md#34-storemarker)

例

```typescript
import lunisolar from 'lunisolar'
// 载入节日列表
import festivals from 'lunisolar/markers/festivals.zh-cn' // 简体版

// 全局加载节日列表
lunisolar.Markers.add(festivals, '节日')

const lsr = lunisolar('2023-03-03')
lsr.markers.add({ name: '抄经', tag: 'work', data: { desc: '临写一次经飞经' } })

lsr.markers.toString() // '世界野生动植物日,全国爱耳日,国际爱耳日,抄经'

lsr.markers.find({ name: '世界野生动植物日' }) 
/** 
return:
{
  tag: ['国际主题', 'environment', '节日']
  name: '世界野生动植物日'
}
 */


lsr.markers.find(v => v.name === '抄经')?.data?.desc ?? '' // '临写一次经飞经'

lsr.markers
    .filter({ tag: 'health' })
    .map(v => v.name)
    .join(',') // '全国爱耳日,国际爱耳日'
```

## 4 删除marker

### 4.1 全局删除marker

有些内置节日你是不想要的，可全局手动删除。

#### 4.1.1 通过标签删除marker

```typescript
lunisolar.Markers.removeByTag(tag: string | string[]): typeof lunisolar.Markers
```

#### 4.1.2 通过marker名称删除marker

```typescript
lunisolar.Markers.removeByName(name: string | string[]): typeof lunisolar.Markers
```

#### 4.1.3 删除指定日期的marker

```typescript
lunisolar.Markers.remove(format: string, matcher?: string, name?: string | string[]): typeof lunisolar.Markers
```

参数：

- **format**: string
  - 日期的格式化方式，如'MMDD'
  
- **matcher**?: string
  - 指定的日期，如'0101'， 非必填

- **names**?: string | string[]
  - 指定的名称，非必填。

::: warning 注意
 如果只填format参数，所有与format一致的markers会全部删除，如果format与matcher参数都填上，如format: 'MMDD', matcher: '0303', 则会把lunisolar().format('MMDD')为0303的所有markers删除， 如果 name参数也指定，指会只删除指定name的marker
:::

例

```typescript

import festivals from 'lunisolar/markers/festivals.zh'  // 繁体版

// 添加marker
lunisolar.Markers.add(festivals)

// 删除所有包含“傳統節日” 标签的节日
lunisolar.Markers.removeByTag('傳統節日') // 所有加进来的传统节日将被删除


// 删除指定名称的节日
lunisolar.Markers.removeByName('元旦')

// 删除所有format为'MMDD'， 日期为 '0512' 的所有节日
lunisolar.Markers.remove('MMDD', '0512') // 國際護士節 和 全國防災減災日 都删除了

// 删除所有format为 'lMn,lDn'的节日
lunisolar.Markers.remove('lMn,lDn') // 所有内置的农历节日都删除了

```

### 4.2 删除实例上的marker

删除当前markers实例上的marker，并不会影响其它实例。每个lunisolar实例是安全隔离的。

```typescript
markers.remove(name: string | string[], isTag: boolean, flag: 0  | 1 | 2): Markers
```

参数：

- **name**: string | string[] 
  - 要移除的marker名称或该marker的标签名称,可以以数组形式输入多个名称 

- **isTag**?: boolean
  - 参数name是否指定为marker的标签名称，默认为false，即指定为marker名称。

- **flag**?: 0 | 1 | 2
  - 1：只移除从全局设定进本实例的markers
  - 2：只移除通过本实例add方法加进来的markers
  - 0：包括1和2。默认为0


例

```typescript
const lsr = lunisolar('2023-01-01')

// 传入指定的marker名称即可
lsr.markers.remove('元旦') // 即使是以全局方式注入本实例的节日，删除了只影响本实例，不影响其它实例

// 第二个参数为true时，第一个参数为标签名
lsr.markers.remove('备忘', true)

// 第三个参数可填入0或1或2，
// 1: 只移除以全局方式注入本实例的markers, 2： 只移除通过本实例add方法加进来的markers, 0: 包括1和2。默认为0
lsr.markers.remove('傳統節日', true, 2)


```

## 5 清除marker

### 5.1 全局清除marker

::: warning 注意
此方法可以清除全局markers，但已生成实例的markers并不会被清除
:::

```typescript
lunisolar.Markers.clean() // 所有全局添加的marker都被清除
```

### 5.2 清除实例上的marker

清除当前实例上的marker并不会影响其它实例

```typescript
const lsr = lunisolar('2023-01-01')
lsr.markers.clean()
```

## 6 重置实例marker

重置当前实例，执行此方法时，将清除所有在本实例单独添加的markers, 并重新在全局设置的markers里找到匹配的marker添加到本实例

```typescript
const lsr = lunisolar('2023-01-01')
lsr.markers.reset()
```
