# 基本说明

## 官方插件

lunisolar内置了一些插件，包括以下这些：
具体请参看对应插件的文档

|插件| 介绍 | 文档 | 项目仓库 |
|---|---|---| --- |
| fetalGod | 胎神占方 | [文档](./fetalGod.md) | [GitHub](https://github.com/lunisolar-js/plugin-fetalgod) |
| takeSound | 五行纳音 | [文档](./takeSound.md)  | [GitHub](https://github.com/lunisolar-js/plugin-takesound) |
| theGods | 神煞宜忌 | [文档](./theGods.md) | [GitHub](https://github.com/lunisolar-js/plugin-thegods) |
| char8ex | 八字增强 | [文档](./char8ex.md)  | [GitHub](https://github.com/lunisolar-js/plugin-char8ex) |

## 自定义插件

1 编写一个插件

```typescript
import { PluginFunc, Lunisolar } from 'lunisolar'

// 为新添的属性加上类型声明 ()
declare module 'lunisolar' {
  interface Lunisolar {
    showExample: string
    exampleMethod(): void
  }
}

interface LunisolarEx extends Lunisolar {
  showExample: string
  exampleMethod(): void
}

const pluginName: PluginFunc = async (options, lsClass, lsFactory) => {
  const lsProto = lsClass.prototype as unknown as LunisolarEx
  // 添加属性
  lsProto.showExample = 'hello'

  // 添加方法
  lsProto.exampleMethod = function () {
    console.log('hello')
  }  
}
export default pluginName
```

2 使用插件

```typescript
import plugin from 'your/plugin/path/pluginName'
import lunisolar from 'lunisolar'

lunisolar.extend(plugin)

lunisolar().showExample // 'hello'
```
