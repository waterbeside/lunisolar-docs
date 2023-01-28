# 八字增强

## 简介

`lunisolar.js`本身可能过`Lunisolar`实例的`char8`属性实现基本的八字查询功能, 但未包括十神和神煞等功能。使用**Char8Ex**插件后，将会在`Lunisolar``实例上添加一个char8ex()`方法, 除了包含原char8的功能外，还加入了十神和神煞的查询。

使用`lunisolar().char8ex()`创建一个[**Char8Ex**](../../api/char8ex.md)实例

```typescript
/**
 * @param sex 性别 0:坤造，1: 乾造
 * @return 返回一个Char8Ex实例对象
 */
lunisolar().char8ex(sex: 0 | 1): Char8Ex
```

> 注意：加载`char8ex`插件时，将自动加载`takeSound`插件（五行纳音插件），所以请不要再重复加`takeSound`

## 快速上手

```typescript
// ---  安装
// 引入lunisolar
import lunisolar from 'lunisolar'
// 引入 theGods 插件
import char8ex from 'lunisolar/plugins/char8ex'
// 加载插件
lunisolar.extend(char8ex)


// ---  使用
// 创建一个Char8Ex实例对象, 该八字为 2023-01-15 12:26出生的男孩
const c8ex =  lunisolar('2023-01-15 12:26').char8ex(1)

console.log(c8ex.toString()) // 乾造: 壬寅 癸丑 癸酉 戊午

// Char8Ex实例可通过year,month,day,hour属性取得四柱实例 Pillar
// 而每个四柱实例（Pillar）又包含纳音、天干、地支、天干十神、地支十神、四柱神煞等功能查询

// 取各柱天干十神, 十神和神煞都是以对象形式存在
console.log(c8ex.year.stemTenGod.name) // 劫財
console.log(c8ex.month.stemTenGod.name) // 比肩
// 注：日主实际并不是十神之一，它位于日柱天干，十神以此推算。
console.log(c8ex.day.stemTenGod.name) // 日主
console.log(c8ex.hour.stemTenGod.name) // 正官

// 取各柱地支藏干十神
// 地支十神通过地支所藏天干推算，所以各柱的地支十神可能存在的个数为1至3个，故以数组形式返回
console.log(c8ex.year.branchTenGod.map(i => i.name)) // [ '傷官', '正財', '正官' ]
console.log(c8ex.month.branchTenGod.map(i => i.name)) // ['七殺', '比肩', '梟神']
console.log(c8ex.day.branchTenGod.map(i => i.name)) // ['梟神']
console.log(c8ex.hour.branchTenGod.map(i => i.name)) // ['偏財', '七殺']

//取年柱纳音
console.log(c8ex.year.takeSound) // 金箔金

//空亡地支 missing属性返回一个元组，该元组包含两个地支实例： [Branch, Branch]
// c8ex.missing 等同于 c8ex.day.missing
console.log(c8ex.missing.map(i => i.name)) //  [ '戌', '亥' ]

// 取得年柱上的神煞,其它柱类似
console.log(c8ex.year.gods.map(item => item.name)) // ['文昌貴人', '金輿', '天廚貴人', '劫煞']
```

:::tip
char8ex插件默认语言与lunisolar一样为繁体中文，如需要其它语言，须再另外加载
:::

## 加载

```typescript
// 引入lunisolar
import lunisolar from 'lunisolar'
// 引入 theGods 插件
import char8ex from 'lunisolar/plugins/char8ex'
// 加载插件
lunisolar.extend(char8ex)
```

## 使用

```typescript
// 创建一个Char8Ex实例
const c8 = lunisolar().char8ex(1) // 参数0为坤造，1为乾造
```

### 年柱

取得年柱， 返回一个四柱对象 [**Pillar**](../../api/pillar.md)

```typescript
/**
 * @return {Pillar} 返回一个四柱对对象，功能类似SB类，但扩展了更多方法
 */
c8.year
```

### 月柱

取得月柱， 返回一个四柱对象

```typescript
/**
 * @return {Pillar}
 */
c8.month
```

### 日柱

取得日柱， 返回一个四柱对象

```typescript
/**
 * @return {Pillar}
 */
c8.day
```

### 时柱

取得时柱， 返回一个四柱对象

```typescript
/**
 * @return {SB}
 */
c8.hour
```

### 日主

取得日主，即日柱的天干，返回天干对象

```typescript
/**
 * @return {Stem}
 */
c8.me
```

### 四柱列表

取得四柱列表

```typescript
/**
 * @return {[Pillar, Pillar, Pillar, Pillar]}
 */
c8.list
```

### 胎元

取得胎元, 返回一个[SB](../../api/sb.md)实例

```typescript
/**
 * @return {SB}
 */
c8.embryo()
```

### 命宫

取得命宫, 返回一个SB实例

```typescript
/**
 * @return {SB}
 */
c8.ownSign()
```

### 身宫

取得身宫, 返回一个SB实例

```typescript
/**
 * @return {SB}
 */
c8.bodySign()
```

### 性别

取得性别字符串，如'乾造' 或 '坤造'

```typescript
/**
 * @return {string}
 */
c8.sex
```

取得性别值，返回 0 或 1， 0为'坤造'， 1为'乾造'

```typescript
/**
 * @return {string}
 */
c8.sexValue
```

### 空亡地支

空亡地支, 返回元组 [[Branch](../../api/branch.md), Branch]

```typescript
/**
 * @return {[Branch, Branch]}
 */
c8.missing

// 其相当于
c8.day.missing
```

## 取天干和地支

上述年月日时四柱返回的四柱实例对象: [**Pillar**](../../api/pillar.md)

**Pillar**包含了[**SB**](../../api/sb.md)类的所有原型方法，天干地支的相关用法，可以参考SB类的用法，这处不详细论述

```typescript
// 例如，从年柱取得 Pillar实例
const pillar = lunisolar().char8ex(1).year
// 取天干
pillar.stem
// 取地支
pillar.branch
```

## 十神

### 天干十神

可从四柱实例上取得天干十神，返回一个TenGod实例

```typescript
/**
 * @return {TenGod}
 */
pillar.stemTenGod
```

### 地支十神

取得地支十神, 因为是按地支藏干算的, 所以返回[**TenGod**](../../api/tenGod.md)实例列表

```typescript
/**
 * @return {TenGod[]}
 */
pillar.branchTenGod
```

### 四柱神煞

四柱对象[**Pillar**](../../api/pillar.md)上包含一个gods属性，可取得该柱所有神煞，返回 [**C8God**](../../api/c8God.md)实例列表

```typescript
/**
 * @return {C8God[]}
 */
pillar.gods
```
