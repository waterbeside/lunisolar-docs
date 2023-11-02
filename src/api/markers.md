# Markers 日期备注类

<Badge type="warn" vertical="middle" text="v2.3.0+"/>

通过`lunisolar.Markers`取得`Markers`类

通过`lunisolar().markers`取得`markers`实例


## 1 静态方法

| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| **静态方法**      |  | |  |
| add(markersSetting, tag)      | 全局添加markers | **markersSetting**: [MarkersSetting](#31-markerssetting) <br/> 节日、备注设置列表。<br/> <br>**tag**?: string \| string[] <br> 对markers补充一个或多个标签，非必填   | Markers类 |
| clean()      | 清除所有全局添加markers || Markers类 |
| cleanFnList()      | markers全局设置时，分为formatList,和fnList两种， 此方法清除所有以fnList方式添加markers || Markers类 |
| remove(format, matcher, names) | 移除指定的markers | **format**: string <br> 日期的格式化方式，如'MMDD' <br><br> **matcher**?: string <br> 指定的日期，如'0101'， 非必填 <br><br> **names**?: string \| string[] <br> 指定的名称，非必填。 <br><br> * 如果只填format参数，所有与format一致的markers会全部删除，如果format与matcher参数都填上，如format: 'MMDD', matcher: '0303', 则会把lunisolar().format('MMDD')为0303的所有markers删除， 如果 name参数也指定，指会只删除指定name的marker | Markers类  |
| removeByTag(tag) | 移除指定标签的marker | **tag**: string \| string[] <br> 指定标签名，可以以字符串形式指定一个，或以数组形式指定多个 | Markers类  |
| removeByName(name) | 移除指定标签的marker | **name**: string \| string[] <br> 指定的marker名称，可以以字符串形式指定一个，或以数组形式指定多个 | Markers类  |


## 2 实例方法

| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| constructor(lsr)      | 构造方法， 构建实例时，会从全局设置的markers里找到匹配的marker添加到本实例 | **lsr**: Lunisolar <br/> 存入一个lunisolar实例。 | Markers实例 |
| **实例方法**      |  | |  |
| add(marker, tag)      | 为当前实例添加一个或多个marker | **marker**: [MarkersSettingItem](#32-markerssettingitem) \| MarkersSettingItem[] <br> 一个或多个的marker设置<br><br> **tag**:? string \| string[] <br> 补充的标签 | 返回当前markers实例 |
| remove(name, isTag, flag)   | 为当前实例移除一个或多个marker | **name**: string \| string[] <br>要移除的marker名称或该marker的标签名称,可以以数组形式输入多个名称 <br><br> **isTag**?: boolean <br> 参数name是否指定为marker的标签名称，默认为false，即指定为marker名称。<br><br> **flag**?: 0 \| 1 \| 2 <br>1: 只移除从全局设定进本实例的markers, 2： 只移除通过本实例add方法加进来的markers, 0: 包括1和2。默认为0 | 返回当前markers实例 |
| clean(flag)   | 清除当前实例的markers  | **flag**:? 0 \| 1 \| 2 <br> 1: 只清除从全局设定进本实例的markers，2： 只清除通过本实例add方法加进来的markers, 0：包括1和2, 默认为0 | 返回当前markers实例 |
| reset()   | 重置本实例， 执行此方法时，将清除所有在本实例单独添加的markers, 并重新在全局设置的markers里找到匹配的marker添加到本实例 | | 返回当前markers实例 |
| list  | 取得当前实例的marker列表 | | [StoreMarker](#34-storemarker)[] |
| filter(fn)  | 对当前实例的marker列表进行筛选 | **fn**:  [MarkerFilterDict](#35-markerfilterdict) \| [MarkersFilterFn](#36-markerfilterfn) | StoreMarker[] |
| find(fn)  | 对当前实例的marker列表进行查找，并返回一个marker | **fn**:  MarkerFilterDict \| MarkersFilterFn | StoreMarker \| undefined |
| toString()  | 返回当前实例的marker列表并接成的字符串 || string |


## 3 类型参考

### 3.1 MarkersSetting

全局markers设置列表类型

```typescript
type MarkersSetting = {
  format: string | MarkerFormatFn // 参考类型 3.3
  markers: {
    [key: string]: MarkersSettingItem | MarkersSettingItem[] // 参考类型 3.2
  }
}[]
```

### 3.2 MarkersSettingItem

单个marker设置类型

```typescript
type MarkersSettingItem = {
  name: string
  tag?: string | string[]
  data?: {
    [key: string]: any
  }
}
```

### 3.3 MarkerFormatFn

全局设置时，可通过函数代替format，以更灵活的进行日期匹配。

```typescript
type MarkerFormatFn = (lsr: Lunisolar) => string | null
```

### 3.4 StoreMarker

取得marker时的单个marker对象

```typescript
type MarkersSettingItem = {
    name: string
    tag: string[]
    data?: {
      [key: string]: any
    }
}
```

### 3.5 MarkerFilterDict

是markers.find和markers.filter的第一个参数的其中一种类型，是一个用于筛选的markers对象

```typescript
type MarkerFilterDict = Partial<MarkersSettingItem>

// 即
type MarkerFilterDict = {
  name?: string
  tag?: string | string[]
  data?: {
    [key: string]: any
  }
}
```

### 3.6 MarkerFilterFn

是markers.find和markers.filter的第一个参数的其中一种类型，是一个用于筛选的函数，其函数与筛选数组时所用到的filter方法一致。

```typescript
  type MarkersFilterFn = (item: StoreMarker, index?: number, arr?: StoreMarker[]) => boolean

```



