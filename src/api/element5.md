# Element5 五行类
 
| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| value | 五行属性索引值，其顺序为`['木', '火', '土', '金', '水']`  | | number |
| name | 五行名  | | string |
| generating() | 取得**相生**（我生者）的五行，如实例为`木`，则返回实例为`火`的Element5对象 | |Element5 |
| overcoming() | 取得**相克**（我克者）的五行，如实例为`木`，则返回实例为`土`的Element5对象 | |Element5 |
| weakening() | 取得**相泄**（生我者）的五行，如实例为`木`，则返回实例为`水`的Element5对象 | |Element5 |
| counteracting() | 取得**相侮**（克我者）的五行，如实例为`木`，则返回实例为`金`的Element5对象 | |Element5 |
| valueOf()      | 返回五行属性索引值 | | number |
| toString()     | 返回五行属性字符串| | string |
| **静态方法**   static method| | |  |
| getNames()     | 返回天干字符串列表| | string[] |