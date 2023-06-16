# SolarTerm 节气类

| 属性或方法  | 描述 | 参数  | 返回类型 |
| --- | ---  | --- | --- |
| value | 取得节气索引值，从每个公历年的第一个节气（小寒）开始顺数  | | number |
| name | 取得节气名称  | | string |
| valueOf()      | 返回节气索引值 | | number |
| toString()     | 返回节气字符串, 即当前语言的节气名称 | | string |
| **静态方法** static method  | | --- | ---  |
| getNames()     | 返回节气字符串列表| | string[] |
| getYearTermDayList(year)   | 取得某年的节气日期列表| -  **year**: *number* <br> 指定某年 | number[] |
| getMonthTerms(year, month)   | 取得某年某月的两个节气的日期 | - **year**: *number* <br> 指定某年<br> - **month**: *number*<br> 某月 (1 ~ 12) | [number,number] |
| findDate(year, termValue, config)   | 取得某年指定节气的日期 | - **year**: number <br> 指定某年 <br> - **termValue**: number \| string \| SolarTerm  <br> 指定的节气 <br>  - **config**: {<br>  &nbsp;&nbsp; &nbsp;&nbsp;**lang**  <br>}| [number, number, number] 分别为[year, month, day] |
| findNode(date, config)   | 查出指定日期属于哪个节气之后，并返回该节气及该节气日期 | - **date**: *number* <br> 指定日期<br> - **config**: {<br>  &nbsp;&nbsp; &nbsp;&nbsp;**lang**?: *string*, <br>&nbsp;&nbsp; &nbsp;&nbsp;**returnValue**?: *boolean* 返回值的第一个元素是返回SolarTerm对象，还是返回节气索引，默认为`true`, 即返回节气索引。<br>&nbsp;&nbsp;  &nbsp;&nbsp;**nodeFlag**: *number* 0,1,2三个值可选，默认0，`0`返回`节`之后，`1`返回`气`之后，`2`返回最近的`节气`之后} | [`SolarTerm \| number`, `Date`] 分别为 [`节气或节气索引`，`该节气对应的日期`] |

