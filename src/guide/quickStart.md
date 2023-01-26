
# 快速上手

## 安装

::: code-tabs#installation

@tab:active pnpm

```bash
pnpm add lunisolar
```

@tab yarn

```bash
yarn add lunisolar
```

@tab npm

```bash
npm install lunisolar
```

@tab browser

```html
<script src="path/to/lunisolar.js"></script>
// 或者使用cdn
<script src="https://unpkg.com/lunisolar@2.1.0/dist/lunisolar.js"></script>
```

:::

## 引入

::: code-tabs#import

@tab:active ES Module

```javascript
import lunisolar from 'lunisolar'
```

@tab CommonJS

```javascript
const lunisolar = require('lunisolar')
```

:::

**Typescript**:

在typescript中引入

```typescript
import * as lunisolar from 'lunisolar'
```

如果你的tsconfig.json包含以下设置，则请使用 `import lunisolar from 'lunisolar'` 引入。

```json5
//tsconfig.json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
  }
}
```

```typescript
import lunisolar from 'lunisolar'
```

## 使用

```typescript
// 引入
import lunisolar from 'lunisolar'

// 使用

const d = lunisolar('2022/07/18 14:40')

// --- format ---

d.format('lY年 lM(lL)lD lH時')  // 可取得阴历日期 '二〇二二年 六月(大)二十 未時'
d.format('cY cM cD cH')  // 可取得八字：'壬寅 丁未 壬申 丁未'
d.format('YYYY-MM-DD HH:mm:ss') // 2022-07-18 14:40:00

// --- 阴历--- 

d.lunar.toString() // 二〇二二年六月二十未時
`${d.lunar}` // 二〇二二年六月二十未時
d.lunar.year // 2022
d.lunar.getYearName() // 二〇二二
d.lunar.month // 6 （如果是闰六月会返回106）
d.lunar.getMonthName() // 六月
d.lunar.day // 20
d.lunar.getDayName() // 二十
d.lunar.hour // 7 （返回从0开始算的时辰下标）
d.lunar.getHourName() // 未
d.lunar.isLeapMonth // false (是否闰月)

// --- 八字 ----

`${d.char8}` // 壬寅 丁未 壬申 丁未
d.char8.year.toString() // 壬寅  （取得年柱）
d.char8.month.toString() // 丁未  （取得月柱）
d.char8.day.toString() // 壬申 （取得日柱）
d.char8.hour.toString() // 丁未  （取得时柱）
d.char8.year.stem.toString() // 壬 (年柱天干)
d.char8.year.branch.toString() // 寅  (年柱地支)
d.char8.year.branch.hiddenStems // [甲, 丙, 戊]  （地支藏干的天干对象列表，顺序为本气、中气、余气）
// ...其它柱类似

// 节气
lunisolar('2022-07-23').solarTerm?.toString() // 大暑 （返回当天的节气，如果不是节气则solarTerm().solarTerm返回null）

// 阴历反查 （阴历转公历）
lunisolar.fromLunar({
  year: 2022,
  month: 10,
  day: 25
}).fromat('YYYY-MM-DD') // 2022-11-18

```

使用神煞插件查宜忌

```typescript
// 引入lunisolar
import lunisolar from 'lunisolar'
// 引入 theGods 插件
import theGods from 'lunisolar/plugins/theGods'
// 加载插件
lunisolar.extend(theGods)

// ---  使用
const lsr = lunisolar('2018-10-04')
// 取神煞
lsr.theGods.getGods('month') // 取得当日的月神
lsr.theGods.getGods('day') // 取得当日的日神
lsr.theGods.getDuty12God() // 取得当日建除十二神（建、除、满....）

// 查宜忌
lsr.theGods.getActs() // 取得当日宜忌 {good: string[], bad: string[]}
lsr.theGods.getGoodActs(1) // 取得当日所宜（通书六十事）
lsr.theGods.getGoodActs(2) // 取得当日所宜（御用六十七事）
lsr.theGods.getBadActs(1) // 取得当日所忌（通书六十事）
lsr.theGods.getBadActs(2) // 取得当日所忌（御用六十七事）


// 取得当日所有时辰吉凶
lunisolar('2022-10-21').theGods.getLuckHours() // [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1] 大于0为吉，少于0为凶

// 取得当日指定吉神所在方位  (支持 '喜神' | '福神' | '財神' | '陽貴' | '陰貴' 查询)
const [d24, god] = lunisolar('2022-11-25').theGods.getLuckDirection('財神')
d24.direction // 南
d24.name // 午
d24.angle // 180

```
