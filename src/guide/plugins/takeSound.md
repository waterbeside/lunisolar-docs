# 五行纳音

查询胎神要先导入 takeSound 插件，
加载takeSound后，会在SB原型上添加两个属性`takeSound`和`takeSoundE5`

- `sb.takeSound` 属性返回纳音描述字符串
- `sb.takeSoundE5` 属性返回**纳音五行**的Element5实例

示例：

```typescript
import takeSound from 'lunisolar/plugins/takeSound'
import lunisolar from 'lunisolar'

lunisolar.extend(takeSound)

/**
  加载takeSound插件后，
  SB对象（天干地支对象）会添加一个takeSound属性，
 */
const lsr = lunisolar('2022-07-08')
lsr.char8.year.takeSound // 金箔金 （取得年干支的纳音）
lsr.char8.year.takeSoundE5.toString() // 金 （取得年干支的纳音五行）
// ...
lsr.char8.day.takeSound // 大海水 （取得日干支的纳音）
lsr.takeSound // 大海水 （取得日干支的纳音 等同于 lsr.char8.day.takeSound）

```
