import{a as H}from"./app-3b1f6a7f.js";import{r as y,h as T,w as P,c as E,a2 as U,B as O,_ as A,V as g,W as h,a3 as w,a4 as N,X as f,a5 as b,a6 as G,a7 as B,a8 as k,a9 as S,a1 as C,aa as _}from"./framework-d1125686.js";import"./preload-helper-101896b7.js";const I=[{path:"/",title:"项目主页",pathLocale:"/",contents:[]},{path:"/api/",title:"API",pathLocale:"/",contents:[{header:"API",slug:"api",content:"此处会进行各种类的说明"}]},{path:"/api/branch.html",title:"Branch 地支类",pathLocale:"/",contents:[{header:"Branch 地支类",slug:"branch-地支类",content:`属性或方法
描述
参数
返回类型 value
地支索引值，范围[0, 11] number name
地支名 string e5
五行属性对象 Element5 hiddenStems
取得地支所藏的天干对象列表，长度最多3个，分别为 [本气, 中 气, 余气] Stem[] triad
三合地支, 返回当前地支的另外两个与之三合的地支 [Branch, Branch] triadE5
三合的五行属性 Element5 group6
六合地支 Branch group6E5
六合五行属性 Element5 punishing
相刑地支 Branch punishBy
被什么地支所刑 Branch conflict
相冲的地支 Branch destroying
相破的地支 Branch harming
相害的地支 Branch valueOf()
返回地支索引值 number toString()
返回地支字符串 string ---
静态方法 static method
---
--- getNames()
返回所有地支字符串列表 string[]`}]},{path:"/api/c8God.html",title:"C8God 四柱神煞类",pathLocale:"/",contents:[{header:"C8God 四柱神煞类",slug:"c8god-四柱神煞类",content:`属性或方法
描述
参数
返回类型 luckLevel
吉凶等级, 1为吉, -1凶, 0不定 number key
该神煞的key(以繁体中文神煞名作为key) string name
该神煞名 string toString()
该天干地支组合的字符串, 等同于name属性 string`}]},{path:"/api/char8.html",title:"Char8 八字类",pathLocale:"/",contents:[{header:"Char8 八字类",slug:"char8-八字类",content:`属性或方法
描述
参数
返回类型 list
取得八字四柱的天干地支对象列表 [SB,SB,SB,SB] year
年柱的干支对象 SB month
月柱的干支对象 SB day
日柱的干支对象 SB hour
时柱的干支对象 SB me
日主，即日柱的天干对象 Stem valueOf()
返回一个8位10进程数字，每两位分别表时年月日时的天干地支序号 number toString()
返回格式化后的八字 如“壬寅 丁未 壬申 丁未” string`}]},{path:"/api/char8ex.html",title:"Char8Ex 八字类（增强）",pathLocale:"/",contents:[{header:"Char8Ex 八字类（增强）",slug:"char8ex-八字类-增强",content:`属性或方法
描述
参数
返回类型 me
取得日主 Stem sexValue
取得性别值 0 | 1 sex
取得性别 如'乾造' 或 '坤造'
string year
取得年柱对象 Pillar month
取得月柱对象 Pillar day
取得日柱对象 Pillar hour
取得时柱对象 Pillar gods
取得各柱所有神煞 {year: C8God[], month: C8God[], day: C8God[], hour: C8God[]} list
四柱列表
[Pillar, Pillar, Pillar, Pillar] embryo()
胎元, 返回一个天干地支对象
SB ownSign()
命宫, 返回一个天干地支对象
SB bodySign()
身宫, 返回一个天干地支对象
SB toString()
返回八字的基本信息描述
SB`}]},{path:"/api/direction24.html",title:"Direction24 二十四山类",pathLocale:"/",contents:[{header:"Direction24 二十四山类",slug:"direction24-二十四山类",content:`属性或方法
描述
参数
返回类型 value
value为二十四山顺序索引值，子山为0，顺时针而行，壬山23结束 number sign
所在山的对应对象 Stem | Branch | Trigram8 name
所在山的对应对象的名称 string type
所在山的对应对象的类名, 一般为'Branch' | 'Stem' | 'Trigram8' string angle
所在山的角度，360度均分为24份，从子山为0度开始，顺时针行走，每山15度，到壬山345度结束 string direction
方向名称，返回国际化翻译后的名称，即東南西北等八个方位的名称 string directionIndex
方向名索引, 其顺序为九宫数号，即子坎宫（正北）为1，离宫（正南）为9, ...参考上图，或见表九宫数 string 静态方法 static method create(value, config)
静态方法，用于创建实例
value: number | Branch | Stem | Trigram8 config:
Direction24 getNames(lang?:string)
取得“二十四山的所有名称”列表
lang? string 语言名，当未设置时，则使用当正在使用的语言包
string[]`},{header:"九宫数",slug:"九宫数",content:`4 东南
9 南
2 西南 3 东
5 中
7 西 8 东北
1 北
6 西北`}]},{path:"/api/element5.html",title:"Element5 五行类",pathLocale:"/",contents:[{header:"Element5 五行类",slug:"element5-五行类",content:`属性或方法
描述
参数
返回类型 value
五行属性索引值，其顺序为['木', '火', '土', '金', '水'] number name
五行名 string generating()
取得相生（我生者）的五行，如实例为木，则返回实例为火的Element5对象 Element5 overcoming()
取得相克（我克者）的五行，如实例为木，则返回实例为土的Element5对象 Element5 weakening()
取得相泄（生我者）的五行，如实例为木，则返回实例为水的Element5对象 Element5 counteracting()
取得相侮（克我者）的五行，如实例为木，则返回实例为金的Element5对象 Element5 valueOf()
返回五行属性索引值 number toString()
返回五行属性字符串 string ---
静态方法 static method
---
--- getNames()
返回天干字符串列表 string[]`}]},{path:"/api/god.html",title:"God 神煞类",pathLocale:"/",contents:[{header:"God 神煞类",slug:"god-神煞类",content:`通过theGods对象所取得的神煞，都是一个God对象，其包含以下属性： 属性或方法
描述
参数
返回类型 key
取得神煞key，一般為其繁体中文名称 string name
取得神煞国际化翻译后的名称， string good
神煞所宜 string[] bad
神煞所忌 string[] cate
神煞分类 'year' | 'month' | 'day' | 'hour' | null luckLevel
神煞吉凶, 大于0为吉，小于0为凶 number`}]},{path:"/api/lunar.html",title:"Lunar 阴历类",pathLocale:"/",contents:[{header:"Lunar 阴历类",slug:"lunar-阴历类",content:`属性或方法
描述
参数
返回类型 leapMonth
当年农历的闰月，返回月份的数字， 如果没有闰月，返回0 number leapMonthIsBig
当年农历闰月是否大月 如果有闰月并且为大月，返回true boolean year
取得该阴历年正月初一所在的公历年 number month
取得当前阴历月的月号数字 number day
取得当前阴历日号数字 number hour
取得当前时辰下标 0 ~ 11 number isLeapMonth
当前阴历月是否为闰月 boolean isBigMonth
当前所在阴历月是否为大月 boolean lunarNewYearDay
取得当年正月初一对应的公历日期 Date lastDayOfYear
取得当年的最后一天 Date getYearName()
取得该阴历年正月初一所在的公历年, 返回汉字字符串 string phaseOfTheMoon
取得当天月相，如朔、弦、望、晦等，不在上述其中之一者，返回空字符串 string getMonthName()
取得当前阴历月, 返回汉字字符串 string getDayName()
取得当前阴历日, 返回汉字字符串 string getHourName()
取得当前时辰 string valueOf()
返回Date对象的valueOf(), 即时间戳 number toString()
返回当前阴历的格式化后的日期时间 如“二〇二二年六月二十未時” string getLunarNewYearDay(year?: number)
取得当年正月初一对应的公历日期
year?: number year为指定的年份，为空时则为Lunisolar已设定的年份
Date`}]},{path:"/api/lunisolarClass.html",title:"Lunisolar类",pathLocale:"/",contents:[{header:"Lunisolar类",slug:"lunisolar类",content:`属性或方法
描述
参数
返回类型 lunar
阴历数据对象 Lunar char8
八字对象 Char8 solarTerm
返回当前日期的节气对象，如果不是节气，返回null SolarTerm | null getSeason()
取得当前季节 string getSeasonIndex()
以春夏秋冬为顺序取得当前季节索引 number toDate()
返回Date对象 Date clone()
克隆当前Lunisolar对象 Lunisolar unix()
返回以秒为单位的时间戳 number format(formatStr: string)
按指定格式格式化时间
formatStr: string 时间将以这字符串格式进行格式化，例 'YYYY-MM-DD HH:mm:ss'
string diff(date, unit, float)
时间差计算
date: number | string | Date | Lunisolar 与当前实例的时间进行比较的时间 unit: string 单位，如 year, lunarYear, month, lunarMonth 等 float: boolean 是否返回浮点数
number add(value, unit)
时间加减
value: number 时间加减的值，负数为减 unit: string 加减单位
number year
年份 number month
月份 1 ~ 12 number day
日期 1 ~ 31 number dayOfWeek
周几，0 ~ 6， 0代表周日 number hour
小时 0 ~ 23 number minute
分 0 ~ 59 number second
秒 0 ~ 59 number millis
毫秒 0 ~ 999 number utc()
转为utc模式 Lunisolar isUTC()
检查是否为UTC模式的实例 boolean utcOffset(offset)
取得，或设置utc偏移值
offset: number | undefined · 当为undefined时，为取得utc偏移值, 返回单位为分钟的number值 · 当为number类型时，为设置utc偏移值，并把时间转为utc时间，返回一个新的Lunisolar实例。如果设置的offset范围在[-16, 16], 则单位为小时，其它情况为分钟
Lunisolar | number local()
转为本地时间 Lunisolar valueOf()
返回Date对象的valueOf(), 即时间戳 number toISOString()
返回Date对象的toISOString() string toUTCString()
返回Date对象的toUTCString() string toString()
返回当前 Date对象的toUTCString() + 阴历的格式化后的日期时间: 例“Wed, 24 Aug 2022 14:50:51 GMT (二〇二二年七月廿七亥時)” string Lunisolar.format() 标识符参考 标识
示例
描述 lY
二〇二二
当年阴历正月初一所在的公历年 lYn
2022
当年阴历正月初一所在的公历年, 数字形式开示 lM
正月-十二月
阴历月 lMn
1-12
阴历月, 以数字形式表示 lD
初一
阴历日 lDn
1 - 30
阴历日, 以数字形式表示 lH
子 - 亥
时辰 lHn
1 - 12
时辰序号，从1开始 lDn
1 - 30
阴历日, 以数字形式表示 lL
大 | 小
阴历月是大月还是小月 cY
甲子
八字年柱 cYs
甲
八字年柱天干 cYb
子
八字年柱地支 cM
甲子
八字月柱 cMs
甲
八字月柱天干 cMb
子
八字月柱地支 cD
甲子
八字日柱 cDs
甲
八字日柱天干 cDb
子
八字日柱地支 cH
甲子
八字日柱 cHs
甲
八字日柱天干 cHb
子
八字日柱地支 cZ
鼠
生肖 （立春换岁，可通过config设置换岁时机） t
1-24
节气，从小寒到冬至的序号，从1开始，如果该日不是节气，返回空字符串 T
小寒-冬至
节气字符串，如果该日不是节气，返回空字符串 YY
18
年，两位数 YYYY
2018
年，四位数 M
1-12
月，从1开始 MM
01-12
月，两位数字 MMM
Jan-Dec
月，英文缩写 D
1-31
日 DD
01-31
日，两位数 H
0-23
24小时 HH
00-23
24小时，两位数 h
1-12
12小时 hh
01-12
12小时，两位数 m
0-59
分钟 mm
00-59
分钟，两位数 s
0-59
秒 ss
00-59
秒，两位数 S
0-9
毫秒（百），一位数 SS
00-99
毫秒（十），两位数 SSS
000-999
毫秒，三位数 Z
-05:00
UTC偏移 ZZ
-0500
UTC偏移，两位数 A
AM / PM
上/下午，大写 a
am / pm
上/下午，小写 Lunisolar.diff() unit可选值参考 单位
缩写
描述 lunarYear
lY
阴历年 lunarMonth
lM
阴历月 lunarDay
lD
阴历日 lunarHour
lH
时辰 day
d
天 month
M
月份 year
y
年 hour
h
小时 minute
m
分钟 second
s
秒 millisecond
ms
毫秒 Lunisolar.add() unit可选值参考 单位
缩写
描述 day
d
天 month
M
月份 year
y
年 hour
h
小时 minute
m
分钟 second
s
秒 millisecond
ms
毫秒`}]},{path:"/api/lunisolarFact.html",title:"lunisolar 工厂函数",pathLocale:"/",contents:[{header:"lunisolar 工厂函数",slug:"lunisolar-工厂函数",content:""},{header:"lunisolar()",slug:"lunisolar",content:`用于创建一个Lunisolar实例对象：
lunisolar(date?: string | number | Date | Lunisolar, config?: ConfigType): Lunisolar
interface ConfigType { isUTC: boolean // 是否使用UTC时间，为true时，lunisolar生成的所有时间都是UTC时间，需要用local转为本地时 offset: number // 时间偏移，以分钟为单位 changeAgeTerm: number | null // 换岁节气, 默认为2, 即立春，如果为null刚为正月初一换岁 lang: string // 默認語言
}`},{header:"lunisolar.fromLunar()",slug:"lunisolar-fromlunar",content:`用于通过阴历创建一个Lunisolar实例对象：
具体用法请参考文档：解析-阴历反查
type FromLunarData = { year?: number | string // 该年正月初一所在公历年的年份，可以是字符串，默认值为当前日期的年份 month: number | string // 阴历月份，可以是字符串，必填, 当月份数大于100时，表明时闰月，如闰4月，可输入104 day: number | string // 阴历日，可以是字符串，必填 hour?: number | string // 时辰索引值或时辰名，默认为0, 即子时。设置时辰后，返回的小时为该时辰的中间时间，如寅时，会返回4点正的时间。 isLeapMonth?: boolean // 指明月份是否闰月，默认为false, 当month设为大于100的数时，会无视此设置
} lunisolar.fromLunar(lunarData: FromLunarData, config: ConfigType): Lunisolar`},{header:"lunisolar.utc()",slug:"lunisolar-utc",content:`用于创建一个UTC时间
lunisolar.utc(date?: string | number | Date | Lunisolar, config?: ConfigType): Lunisolar
其参数与lunisolar()的参数一致，而config.isUTC会自动设为true
// 以下两种写法的效果一致
const lsr1 = lunisolar('2023-03-14 18:00', { isUTC: true })
const lsr2 = lunisolar.utc('2023-03-14 18:00')`},{header:"lunisolar.config()",slug:"lunisolar-config",content:`更改全局配置
方法会返回lunisolar以便链式操作
interface ConfigType { isUTC: boolean // 是否使用UTC时间，默认为false, 为true时，lunisolar生成的所有时间都是UTC时间，需要用local转为本地时 changeAgeTerm: number | null // 换岁节气 lang: string // 使用语言包的名称
}
lunisolar.config(config: ConfigType): typeof lunisolar`},{header:"lunisolar.extend()",slug:"lunisolar-extend",content:`加载插件
方法会返回lunisolar以便链式操作
具体用法请参考文档：插件-基本说明
/** * @param {PluginFunc} 按规则定义的插件 * @param {T} 插件用于的参数 */
lunisolar.extend<T = unknown>(plugin: PluginFunc<T>, options?: T): typeof lunisolar`},{header:"lunisolar.locale()",slug:"lunisolar-locale",content:`载入语言包
方法会返回lunisolar以便链式操作
具体用法请参考文档：国际化
/** * @param {LsrLocale | LsrLocale[]} localeData 语言包 * @param {boolean} unChangeLang 是否使用原来正使用的语言包，默认加载新包时会使用新语言包，设置为true时则只加载而不使用 */
lunisolar.locale( localeData: LsrLocale | LsrLocale[], unChangeLang: boolean = false
): typeof lunisolar`},{header:"lunisolar.Lunar",slug:"lunisolar-lunar",content:"返回Lunar构造函数"},{header:"lunisolar.Char8",slug:"lunisolar-char8",content:"返回Char8构造函数"},{header:"lunisolar.SB",slug:"lunisolar-sb",content:"返回SB构造函数"},{header:"lunisolar.Stem",slug:"lunisolar-stem",content:"返回Stem构造函数"},{header:"lunisolar.Branch",slug:"lunisolar-branch",content:"返回Branch构造函数"},{header:"lunisolar.Element5",slug:"lunisolar-element5",content:"返回Element5构造函数"},{header:"lunisolar.Lunisolar",slug:"lunisolar-lunisolar",content:"返回Lunisolar构造函数"},{header:"lunisolar.Trigram8",slug:"lunisolar-trigram8",content:"返回Trigram8构造函数"},{header:"lunisolar.Direction24",slug:"lunisolar-direction24",content:"返回Direction24构造函数"}]},{path:"/api/pillar.html",title:"Pillar 四柱类",pathLocale:"/",contents:[{header:"Pillar 四柱类",slug:"pillar-四柱类",content:`四柱类是SB类的增强版,主要补充了十神和神煞等属性 属性或方法
描述
参数
返回类型 gods
返回该柱所算出的所有神煞 C8God[] stem
该柱天干 Stem branch
该柱地支 Branch value
该天干地支组合的索引值, 范围[0, 59]
number name
该天干地支组合的字符串, 如 甲子
string takeSound
取得五行纳音描述 string takeSoundE5
取得五行纳音的五行对象 Element5 stemTenGod
取得天干十神 TenGod branchTenGod
取得地支十神, 因为是按地支藏干算的, 所以返回提一个列表 TenGod[] missing
返回旬空地支 [Branch, Branch] toString()
该天干地支组合的字符串, 等同于name属性 string`}]},{path:"/api/sb.html",title:"SB 天干地支类",pathLocale:"/",contents:[{header:"SB 天干地支类",slug:"sb-天干地支类",content:`属性或方法
描述
参数
返回类型 value
取得60干支顺序索引值 number name
天干地支组合名，如‘甲子’ string stem
天干对象 Stem branch
地支对象 Branch valueOf()
返回60干支顺序索引值 number toString()
返回格式化后天干地支字符串如 “壬寅” string missing
取得旬空的地支 [Branch, Branch] takeSound
五行纳音，需加载takeSound插件, 参考 纳音 string ---
静态方法 static method
---
--- getNames()
取得六十干支符串列表 string[]`}]},{path:"/api/solarTerm.html",title:"SolarTerm 节气类",pathLocale:"/",contents:[{header:"SolarTerm 节气类",slug:"solarterm-节气类",content:`属性或方法
描述
参数
返回类型 value
取得节气索引值，从每个公历年的第一个节气（小寒）开始顺数 number name
取得节气名称 string valueOf()
返回节气索引值 number toString()
返回节气字符串, 即当前语言的节气名称 string 静态方法 static method ---
--- getNames()
返回节气字符串列表 string[] getYearTermDayList(year)
取得某年的节气日期列表
- year: number 指定某年
number[] getMonthTerms(year, month)
取得某年某月的两个节气的日期
- year: number 指定某年 - month: number 某月 (1 ~ 12)
[number,number] findDate(year, termValue, config)
取得某年指定节气的日期
- year: number 指定某年 - termValue: number | string | SolarTerm 指定的节气 - config: { lang }
[number, number, number] 分别为[year, month, day] findNode(date, config)
查出指定日期属于哪个节气之后，并返回该节气及该节气日期
- date: number 指定日期 - config: { lang?: string, returnValue?: boolean 返回值的第一个元素是返回SolarTerm对象，还是返回节气索引，默认为true, 即返回节气索引。 nodeFlag: number 0,1,2三个值可选，默认0，0返回节之后，1返回气之后，2返回最近的节气之后}
[SolarTerm | number, Date] 分别为 [节气或节气索引，该节气对应的日期]`}]},{path:"/api/stem.html",title:"Stem 天干类",pathLocale:"/",contents:[{header:"Stem 天干类",slug:"stem-天干类",content:`属性或方法
描述
参数
返回类型 value
天干索引值，范围[0, 9] number name
天干名 string e5
五行属性对象 Element5 trigram8
纳甲配卦 Trigram8 valueOf()
返回天干索引值 number toString()
返回天干字符串 string ---
静态方法 static method
---
--- getNames()
返回所有天干字符串列表 string[]`}]},{path:"/api/tenGod.html",title:"TenGod 十神类",pathLocale:"/",contents:[{header:"TenGod 十神类",slug:"tengod-十神类",content:`属性或方法
描述
参数
返回类型 key
该十神的key(以繁体中文神煞名作为key) string name
该十神名称 string toString()
该天干地支组合的字符串, 等同于name属性 string`}]},{path:"/api/theGods.html",title:"TheGods 神煞宜忌类",pathLocale:"/",contents:[{header:"TheGods 神煞宜忌类",slug:"thegods-神煞宜忌类",content:`属性或方法
描述
参数
返回类型 lsr
当前Lunisolar对象实例 Lunisolar getGods(ymdh)
取得神煞
参数默认为"MD", 可以是 "Y","M": "D": "H"的任一个或多个字符的组合，返回其对应的年神、月神、日神、时神或其组合
God[] getGoodGods(ymdh)
取得吉神
参数默认为"MD", 参数同上
God[] getBadGods(ymdh)
取得凶神
参数默认为"MD", 参数同上
God[] getDuty12God()
取得当日建除十二神（建、除、满...) God getLife12God(ymdh)
取得长生十二神(长生、沐浴、冠帶...)
参数可以是 "year"、"month"、"day"、 "hour"的其中一个
God getActs(actType, returnKey, replacer)
取得当日宜忌
actType: 0 | 1 | 2 | 3 指返回宜忌的分类 returnKey: boolean 是否返回宜忌的key，默认为false, 即返回国际化翻译后的宜忌 replacer: { [key: string]: string } 用于替换宜忌词条的字典对象
{good: string[], bad: string[]} getGoodActs(actType, returnKey, replacer)
取得当日所宜
参数与 getActs 方法一致
string[] getBadActs(actType, returnKey, replacer)
取得当日所忌
参数与 getActs 方法一致
string[] getAllDayHourGods()
取得整日各时辰的神煞 God[][] getLuckHours(luckType)
取得整日各时辰的吉凶
luckeType: 0 | 1 0: 按黄黑道十二神（即青龙明堂等）决定吉凶 1：根据时辰的吉神凶神个数决定吉凶
number[] getAllLuckDirection()
取得当日所有神煞吉方,将会返回元素为 **[二十四山对象, 神煞对象]**元组的列表 [Direction24, God][] getLuckDirection(godKeyOrName)
取得指定吉神所在方位,将会返回 **[二十四山对象, 神煞对象]**元组
godKeyOrName: string吉方神煞名称，一般为 '喜神' | '福神' | '財神' | '陽貴' | '陰貴'
[Direction24, God] query(queryString)
通过输入查询语句进行通用查询
query: string
God | God[] | string[] | null queryString说明:
queryString 存入的字符串，对应返回的内容参见下表, 其中zh的中文字条取决于你是否使用zh语言名才能使用该字条。故建议使用key中的字条存入存数。 key
zh
说明
返回类型 year gods
年神
取得年神
God[] month gods
月神
取得月神
God[] day gods
日神
取得日神
God[] hour gods
時神
取得時神
God[] this day gods
本日神煞
取得本日神煞
God[] day of yellow-black god
本日黃黑十二神
取得本日的串宫十二神
God[] hour of yellow-black god
此時黃黑十二神
取得此时辰的串宫十二神
God[] duty god
建除十二神
取得建除
God year of long-life god
年長生十二神
取得年长生十二神
God month of long-life god
月長生十二神
取得月长生十二神
God day of long-life god
日長生十二神
取得日长生十二神
God hour of long-life god
時長生十二神
取得时辰长生十二神
God good act
宜
取得本日所宜
string[] good act 1
宜1
取得本日通书所宜
string[] good act 2
宜2
取得本日御用所宜
string[] good act 3
宜3
取得本日民用所宜
string[] bad act
忌
取得本日所忌
string[] bad act 1
忌1
取得本日通书所忌
string[] bad act 2
忌2
取得本日御用所忌
string[] bad act 3
忌3
取得本日民用所忌
string[]`}]},{path:"/api/trigram8.html",title:"Trigram8 八卦类",pathLocale:"/",contents:[{header:"Trigram8 八卦类",slug:"trigram8-八卦类",content:`属性或方法
描述
参数
返回类型 value
八卦数值 number name
八卦名 string valueOf()
返回八卦数值 number toString()
返回八卦字符串 string 静态方法 static method getNames()
返回八卦字符串列表 string[] 八卦中每卦都三爻，阴爻用0表示，阳爻用1表示。
所以每个卦可以用3位2进程表示： 卦名
符号
二进制
10进制 乾
☰
111
7 坤
☷
000
0 坎
☵
010
2 离
☲
101
5 震
☳
001
1 巽
☴
110
6 艮
☶
100
4 兑
☱
011
3`}]},{path:"/guide/",title:"文档",pathLocale:"/",contents:[{header:"",slug:"",content:`前言
快速上手
功能与使用 解析
公历
阴历
节气
八字
天干
地支
五行
时间格式化
时间差 插件 基本说明
胎神占方
五行纳音
神煞宜忌
八字增强 国际化`}]},{path:"/guide/about.html",title:"前言",pathLocale:"/",contents:[{header:"前言",slug:"前言",content:""},{header:"* 简介",slug:"简介",content:"lunisolar.js是一个专业的Javascript农历工具库。支持各类农历信息查询，如天干地支、五行纳音、神煞宜忌、建除十二神、八字十神、四柱神煞、胎神占方、每日吉时、每日吉神方等。使用Typescript编写，主体代码压缩后只有11.5KB左右。简单易上手。"},{header:"* 为何制作此库",slug:"为何制作此库",content:"昔见不同版本日历（包括纸质日历和各类日历软件），其所示宜忌有所不同，更有相矛盾者，不知如何取用，故疑其推算依据是否误，本着宏扬传统文化之精神，查阅各资料文案，以制此库。"},{header:"* 阴历和阳历",slug:"阴历和阳历",content:`现所用的中国传统历法，我们常称为农历，农历是阴阳合历，即包含了阴历和阳历，所以此库取lunar+solar，命名为lunisolar。
农历中，通过月相圆缺纪月，此属于阴历范畴，本库会以一个Lunar对象记录转换好的阴历数据。
而公历与阴历的转换规律性不大，使用寿星天文历的计算方式又过于复杂也影响代码体积，故本库的核心采用查表法进行转换，其数据来自香港天文台【公历与农历日期对照表】。其可查询年份范围为[1901,2100]。数据抓取和压缩的代码见仓库 lunar-crawler，此处不作详细介绍。
属于阳历范畴的内容比较多，有二十四节气、天干地支等，传统很多术数多以阳历排盘，如八字、奇门遁甲...（也有少数以阴历排盘的，如紫微斗数）。其中二十四节气是阳历中十分重要的部分，其影响天干地支的换岁和换月。`},{header:"* 年和岁",slug:"年和岁",content:`过去，年和岁是两个不同的概念。
年 是指阴历正月初一到下一个正月初一的一个周期。
岁 是指太阳连续两次通过春分点的时间间隔，古人一般用‘冬至点’来观测，现代称作回归年（tropical year），也叫 太阳年（solar year）。一个周期结束而开始下一个周期，称为换岁。 1回归年 = 365.2421990741日 = 365天5小時48分46秒`},{header:"* 节和气",slug:"节和气",content:`我们常说的二十四节气，其实分为节和气，共十二节和十二气，节和气交替出现。天干地支纪月是以节换月的。 节
气 孟春
寅月
立春
雨水 春
仲春
卯月
惊蛰
春分 季春
辰月
清明
谷雨 孟夏
巳月
立夏
小满 夏
仲夏
午月
芒种
夏至 季夏
未月
小暑
大暑 孟秋
申月
立秋
处暑 秋
仲秋
酉月
露水
秋分 季秋
戌月
寒露
霜降 孟冬
亥月
立冬
小雪 冬
仲冬
子月
大雪
冬至 季冬
丑月
小寒
大寒 实际上，节气是某一个时刻，而这个时刻并不是固定在某天的某个时辰。但由于数据源只精确到日，所以本库的交节（更换八字月柱），也是以日为准。`},{header:"* 生肖和换岁",slug:"生肖和换岁",content:`我们知道天干地支是基于二十四节气来定的。在民间，如八字命理这类术数，通常以立春换岁，即到了立春，便更换下一个天干地支纪年，例如今年为甲子年，则到下一个立春，则换成乙丑年。
但是，并不是所有术数都是以立春换岁，例如中医的五运六气，则以大寒日换岁。 而奇门遁甲则以冬至换岁，中气换月。 lunisolar默认使用立春换岁, 当然你也可以自定义换岁的节气。 生肖：生肖与十二地支是对应的，所以实际上生肖也是按节气更换，民间传统上是以立春换岁，所以生肖也是按立春更换。
另外，跟据 中国大陆国家标准：编号**GB/T 33661-2017 《农历的编算和颁行》**规定, “干支纪年的循环参考时间：对应于北京时间公历1984年2月2日0时起到1985年2月19日24时截止的农历年为甲子年。” 如按此标准的话，应该正月初一换岁，即生肖在正月初一更换。
这与传统术数的计算方式有所冲突，也许是为了方便大众记忆与使用。
由于大部分术数系统并不以正月初一换岁，所以lunisolar默认并不跟随此标准进行换岁（虽然可以通过配置设置成与国标一致，但不建议）。`},{header:"* 换日",slug:"换日",content:"传统子时是每一天的开始，子时对应的时间为 [23:00, 01:00), 所以lunisolar会在23:00进行换日。"},{header:"* 其它",slug:"其它",content:"moment.js 和 dayjs 是两个比较出名的时间工具库，为了符合大家的使用习惯，lunisolar针对公历的部分操作将会尽量向dayjs看齐，并参考了其代码设计。针对公历部分，尽管lunisolar也有类似dayjs的方法，但并不会cover其所有功能，如果你仅仅是对公历进行操作，推荐使用dayjs。lunisolar重点在于农历部分，例如Lunisolar的format方法和diff方法包含dayjs这两个方法的功能并与之保持一致，同时加入了对农历的处理，具体功能及使用请继续阅读文档。"},{header:"对象关系参考",slug:"对象关系参考",content:"lunisloar采用面向对象开发，下图可以帮助了解各个对象关系。"}]},{path:"/guide/i18n.html",title:"国际化",pathLocale:"/",contents:[{header:"国际化",slug:"国际化",content:`lunisolar返回数据默认用繁体中文，主要考虑到这类使用人群往往有繁体需求，而且繁体也易于直接翻译成简体（由于一简对多繁，繁体可直接转为简体，但简体不能直接转为繁体）。
尽管如此，lunisolar还是支持更改语言包。方法如下：
import lunisolar from 'lunisolar'
// 加载英文语言包
import en from 'lunisolar/locale/en' lunisolar.locale(en)
// 此时，lunisolar将全属使用en作为默认语言
lunisolar('2017-12-01').char8.month.toString() // Xin-Hai // 如果locale方法第二参数设为true，加载语言包时不会变更默认使用的语言包
lunisolar.locale(en, true) // --------------------------------------
// 如果不想使用en作为全局默认语言，可通以下方法更改全局配置
lunisolar.config({ lang: 'zh' // 设换默认语言为繁体中文
}) lunisolar('2017-12-01').char8.month.toString() // 辛亥 // 局部使用指定语言 （须已先以lunisolar.locale()方法加载对应语言包）
lunisolar('2017-12-01', { lang: 'en' }).char8.month.toString() // Xin-Hai lunisolar内置的语言包有：
// 繁体中文 (默认自动加载，请勿重复加载)
// 语言包名：zh import zh from 'lunisolar/locale/zh' // 简体中文
// 语言包名：zh-cn import zhCn from 'lunisolar/locale/zh-cn' // 英文
// 语言包名：en import en from 'lunisolar/locale/en' // 日文
// 语言包名：ja import ja from 'lunisolar/locale/ja'`},{header:"* 加载插件语言包",slug:"加载插件语言包",content:`使用内置插件时，需要另外加载插件的语言包 （默认使用的繁体中文无需手动加载）
import lunisolar from 'lunisolar'
import en from 'lunisolar/locale/en'
import takeSound from 'lunisolar/plugins/takeSound'
import takeSoundEn from 'lunisolar/plugins/takeSound/locale/en' lunisolar.locale(en).locale(takeSoundEn)`},{header:"* 对语言包进行自定义",slug:"对语言包进行自定义",content:`你可以对载入后的语言包进行修改，或者自定义一个语言包对原有的进行覆盖
例如:
import lunisolar from 'lunisolar'
const { defineLocale } = lunisolar // 自定义语言包
const myZh = defineLocale({ name: 'zh' // 此项必需设置，指定要自义的语言, 可设为任意字符串，如果设为已导入的语言名，后续设置的项将会覆盖原有项 numerals: '零一二三四五六七八九十'.split(''), stems: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'] branchs: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
}) // 载入语言包
lunisolar.locale(myZh) lunisolar('2022/07/18 14:40').format('lY年 lMlD lH時') // 返回内容变成'二零二二年 六月二十 H時' 原本为 '二〇二二年 六月二十 未時'
lunisolar('2022/07/18 14:40').format('cY') // 返回内容变成'iC' 原本为 '壬寅' 具体设置项可参考项目中的语言包， /src/locale/zh.ts
自定义语言包时，并非所有项都是必填的，未配置的项会默认使用zh语言包所设置的数据。`}]},{path:"/guide/quickStart.html",title:"快速上手",pathLocale:"/",contents:[{header:"快速上手",slug:"快速上手",content:""},{header:"安装",slug:"安装",content:`pnpm add lunisolar yarn add lunisolar npm install lunisolar <script src="path/to/lunisolar.js"><\/script>
// 或者使用cdn
<script src="https://unpkg.com/lunisolar@2.1.0/dist/lunisolar.js"><\/script>`},{header:"引入",slug:"引入",content:`import lunisolar from 'lunisolar' const lunisolar = require('lunisolar') Typescript:
在typescript中引入
import * as lunisolar from 'lunisolar'
如果你的tsconfig.json包含以下设置，则请使用 import lunisolar from 'lunisolar' 引入。
//tsconfig.json
{ "compilerOptions": { "esModuleInterop": true, "allowSyntheticDefaultImports": true, }
}
import lunisolar from 'lunisolar'`},{header:"使用",slug:"使用",content:`// 引入
import lunisolar from 'lunisolar' // 使用 const d = lunisolar('2022/07/18 14:40') // --- format --- d.format('lY年 lM(lL)lD lH時') // 可取得阴历日期 '二〇二二年 六月(大)二十 未時'
d.format('cY cM cD cH') // 可取得八字：'壬寅 丁未 壬申 丁未'
d.format('YYYY-MM-DD HH:mm:ss') // 2022-07-18 14:40:00 // --- 阴历--- d.lunar.toString() // 二〇二二年六月二十未時
\`\${d.lunar}\` // 二〇二二年六月二十未時
d.lunar.year // 2022
d.lunar.getYearName() // 二〇二二
d.lunar.month // 6 （如果是闰六月会返回106）
d.lunar.getMonthName() // 六月
d.lunar.day // 20
d.lunar.getDayName() // 二十
d.lunar.hour // 7 （返回从0开始算的时辰下标）
d.lunar.getHourName() // 未
d.lunar.isLeapMonth // false (是否闰月) // --- 八字 ---- \`\${d.char8}\` // 壬寅 丁未 壬申 丁未
d.char8.year.toString() // 壬寅 （取得年柱）
d.char8.month.toString() // 丁未 （取得月柱）
d.char8.day.toString() // 壬申 （取得日柱）
d.char8.hour.toString() // 丁未 （取得时柱）
d.char8.year.stem.toString() // 壬 (年柱天干)
d.char8.year.branch.toString() // 寅 (年柱地支)
d.char8.year.branch.hiddenStems // [甲, 丙, 戊] （地支藏干的天干对象列表，顺序为本气、中气、余气）
// ...其它柱类似 // 节气
lunisolar('2022-07-23').solarTerm?.toString() // 大暑 （返回当天的节气，如果不是节气则solarTerm().solarTerm返回null） // 阴历反查 （阴历转公历）
lunisolar.fromLunar({ year: 2022, month: 10, day: 25
}).fromat('YYYY-MM-DD') // 2022-11-18 使用神煞插件查宜忌
// 引入lunisolar
import lunisolar from 'lunisolar'
// 引入 theGods 插件
import theGods from 'lunisolar/plugins/theGods'
// 加载插件
lunisolar.extend(theGods) // --- 使用
const lsr = lunisolar('2018-10-04')
// 取神煞
lsr.theGods.getGods('month') // 取得当日的月神
lsr.theGods.getGods('day') // 取得当日的日神
lsr.theGods.getDuty12God() // 取得当日建除十二神（建、除、满....） // 查宜忌
lsr.theGods.getActs() // 取得当日宜忌 {good: string[], bad: string[]}
lsr.theGods.getGoodActs(1) // 取得当日所宜（通书六十事）
lsr.theGods.getGoodActs(2) // 取得当日所宜（御用六十七事）
lsr.theGods.getBadActs(1) // 取得当日所忌（通书六十事）
lsr.theGods.getBadActs(2) // 取得当日所忌（御用六十七事） // 取得当日所有时辰吉凶
lunisolar('2022-10-21').theGods.getLuckHours() // [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1] 大于0为吉，少于0为凶 // 取得当日指定吉神所在方位 (支持 '喜神' | '福神' | '財神' | '陽貴' | '陰貴' 查询)
const [d24, god] = lunisolar('2022-11-25').theGods.getLuckDirection('財神')
d24.direction // 南
d24.name // 午
d24.angle // 180`}]},{path:"/reference/",title:"参考",pathLocale:"/",contents:[{header:"参考",slug:"参考",content:""}]},{path:"/reference/acts.html",title:"宜忌用事",pathLocale:"/",contents:[{header:"宜忌用事",slug:"宜忌用事",content:"编写中..."}]},{path:"/reference/direction24.html",title:"二十四山与九宫数",pathLocale:"/",contents:[{header:"二十四山与九宫数",slug:"二十四山与九宫数",content:""},{header:"二十四山",slug:"二十四山",content:"二十四山图"},{header:"九宫数",slug:"九宫数",content:`4 东南
9 南
2 西南 3 东
5 中
7 西 8 东北
1 北
6 西北`}]},{path:"/reference/fetalGod.html",title:"胎神占方",pathLocale:"/",contents:[{header:"胎神占方",slug:"胎神占方",content:""},{header:"胎神逐日占游方定局",slug:"胎神逐日占游方定局",content:"《胎神逐日占游方定局》"},{header:"口诀",slug:"口诀",content:""},{header:"天干六甲胎神歌",slug:"天干六甲胎神歌",content:`甲己之日占在門，乙庚碓磨休移动。
丙辛廚灶莫相干，丁壬倉庫忌修弄。
戊癸房床若移整，犯之孕妇堕孩童。`},{header:"地支六甲胎神歌",slug:"地支六甲胎神歌",content:`子午二日碓须忌，丑未廁道莫修移。
寅申火爐休要动，卯酉大門修当避。
辰戌雞棲巳亥床，犯着六甲身堕胎。`}]},{path:"/reference/stemBranch.html",title:"天干地支",pathLocale:"/",contents:[{header:"天干地支",slug:"天干地支",content:""},{header:"天干",slug:"天干",content:""},{header:"地支",slug:"地支",content:"地支掌诀"},{header:"60甲子",slug:"_60甲子",content:""},{header:"冲、破、刑、害、合",slug:"冲、破、刑、害、合",content:""},{header:"地支三合",slug:"地支三合",content:`地支三合
五行 亥卯未
木 寅午戌
火 巳酉丑
金 申子辰
水`},{header:"天干合化",slug:"天干合化",content:`天干合化
五行 甲己
土 乙庚
金 丙辛
水 丁壬
木 戊癸
火`},{header:"地支藏干",slug:"地支藏干",content:""}]},{path:"/reference/takeSound.html",title:"五行纳音",pathLocale:"/",contents:[{header:"五行纳音",slug:"五行纳音",content:""}]},{path:"/reference/trigram8.html",title:"八卦",pathLocale:"/",contents:[{header:"八卦",slug:"八卦",content:`如果阳爻用1表示，阴爻用0表示，则八卦可用三位2进制来表示： 卦名(name)
符号
二进制
10进制（value） 乾
☰
111
7 坤
☷
000
0 坎
☵
010
2 离
☲
101
5 震
☳
001
1 巽
☴
110
6 艮
☶
100
4 兑
☱
011
3`},{header:"先天八卦与後天八卦",slug:"先天八卦与後天八卦",content:`Tips
先天八卦即伏羲八卦，後天八卦即文王八卦 先天八卦与後天八卦`}]},{path:"/guide/functional/",title:"功能与使用",pathLocale:"/",contents:[{header:"",slug:"",content:`解析
公历
阴历
节气
八字
天干
地支
五行
时间格式化
时间差`}]},{path:"/guide/functional/branch.html",title:"地支",pathLocale:"/",contents:[{header:"地支",slug:"地支",content:""},{header:"取得地支实例",slug:"取得地支实例",content:`通过SB实例的branch属性可取得天干对象Branch
// 例如，取得年柱的地支
const branch = lunisolar().char8.year.branch
或者可以直接创建地支实例
// 创建方法
lunisolar.Branch.create(value: number, config?: { lang: string}) // 例，创建地支为‘子’的实例，传入子的地支序号0即可
const branch = lunisolar.Branch.create(0)`},{header:"地支名",slug:"地支名",content:`/** * @return {string} */
branch.name`},{header:"地支索引",slug:"地支索引",content:`/** * @return {number} */
branch.value`},{header:"地支五行",slug:"地支五行",content:`返回五行对象实例 Element5
/** * @return {Element5} */
branch.e5`},{header:"地支藏干",slug:"地支藏干",content:`取得地支所藏的天干对象列表，长度最多3个，分别为 [本气, 中 气, 余气]
/** * @return {Stem[]} */
branch.hiddenStems`},{header:"三合地支",slug:"三合地支",content:`三合地支, 返回当前地支的另外两个与之三合的地支
/** * @return {[Branch, Branch]} */
branch.triad`},{header:"三合地支五行",slug:"三合地支五行",content:`三合的五行属性
/** * @return {Element5} */
branch.triadE5`},{header:"六合地支",slug:"六合地支",content:`/** * @return {Branch} */
branch.group6`},{header:"六合地支五行",slug:"六合地支五行",content:`/** * @return {Elment5} */
branch.group6E5`},{header:"相刑",slug:"相刑",content:`取得所刑的地支
/** * @return {Branch} */
branch.punishing
取得被什么地支所刑
/** * @return {Branch} */
branch.punishBy`},{header:"相冲",slug:"相冲",content:`/** * @return {Branch} */
branch.conflict`},{header:"相破",slug:"相破",content:`/** * @return {Branch} */
branch.destroying`},{header:"相害",slug:"相害",content:`/** * @return {Branch} */
branch.harming`},{header:"十二地支列表",slug:"十二地支列表",content:`此为静态方法， 取得十二地支名称列表
/** * @return {string[]} */
lunisolar.Branch.getNames()`}]},{path:"/guide/functional/char8.html",title:"八字",pathLocale:"/",contents:[{header:"八字",slug:"八字",content:`Info 八字实际上是用天干地支表示的历法
一个天干地支组合有两个字， 年月日时分别以天干地支表示，则共有八个字，
年、月、日、时用天干地支表示，分别称为年柱、月柱、日柱、时柱，所以八字又称为四柱 Lunisolar实例上包含char8属性，返回一个Char8实例，可取得相应天干支地支信息`},{header:"对象关系图",slug:"对象关系图",content:""},{header:"年柱",slug:"年柱",content:`取得年柱， 返回一个天干地支对象
/** * @return {SB} 返回一个天干地支对象，SB为StemBranch简写 */
lunisolar().char8.year`},{header:"月柱",slug:"月柱",content:`取得月柱， 返回一个天干地支对象
/** * @return {SB} */
lunisolar().char8.month`},{header:"日柱",slug:"日柱",content:`取得日柱， 返回一个天干地支对象
/** * @return {SB} */
lunisolar().char8.day`},{header:"时柱",slug:"时柱",content:`取得时柱， 返回一个天干地支对象
/** * @return {SB} */
lunisolar().char8.hour`},{header:"日主",slug:"日主",content:`取得日主，即日柱的天干，返回天干对象
/** * @return {Stem} */
lunisolar().char8.me`},{header:"天干地支",slug:"天干地支",content:`上述年月日时四柱返回的天干地支对象:SB
const sb = lunisolar().char8.day`},{header:"取得天干",slug:"取得天干",content:`SB实例对象包含stem属性，返回一个Stem实例，可取得天干信息
/** * @return {Stem} */
sb.stem`},{header:"取得地支",slug:"取得地支",content:`SB实例对象包含branch属性，返回一个Branch实例，可取得地支信息
/** * @return {Branch} */
sb.branch`},{header:"旬空",slug:"旬空",content:`取得旬空的两个地支
/** * @return {[Branch, Branch]} */
sb.missing`},{header:"天干地支字符串",slug:"天干地支字符串",content:`返回天干地支组合的字符串，如"甲子"
/** * @return {string} */
sb.name`},{header:"60天干地支索引",slug:"_60天干地支索引",content:`返回天干地支组合的索引值，范围为[0, 59], 从甲子开始，癸亥结束
/** * @return {number} */
sb.value`},{header:"60天干地支列表",slug:"_60天干地支列表",content:`此为静态方法，取得60甲子名称列表
/** * @return {string[]} */
lunisolar.SB.getNames()`}]},{path:"/guide/functional/diff.html",title:"时间差 diff",pathLocale:"/",contents:[{header:"时间差 diff",slug:"时间差-diff",content:`lunisolar(date).diff(date, unit) 可计算两个日期的时间差。
diff 方法包含两个参数：date 和 unit
参数： date: string | number | Date | Lunisolar 为与当前实作比较的时间
unit: string 时间单位，单位见下文表格，单位不区分大小写，支持复数和缩写形式。默认为 ms 单位
缩写
描述 lunarYear
lY
阴历年 lunarMonth
lM
阴历月 lunarDay
lD
阴历日 lunarHour
lH
时辰 day
d
天 month
M
月份 year
y
年 hour
h
小时 minute
m
分钟 second
s
秒 millisecond
ms
毫秒`},{header:"示例",slug:"示例",content:`const lsr1 = lunisolar('2020/01/01 00:00:00')
const lsr2 = lunisolar('2020/01/02 00:00:00')
lsr1.diff(lsr2, 'ms') // 86400000 lsr1.diff(lsr2) // 86400000 默认以毫秒为单位
lsr1.diff(lsr2, 's') // 86400
lsr1.diff('2020/02/01 00:00:00', 'M') // 1 第一个参数可接受字符串 const lsr3 = lunisolar('2018/01/01')
const lsr4 = lunisolar('2022/02/02')
lsr3.diff(lsr4, 'lY') // 5 相差5个阴历年
lsr3.diff(lsr4, 'lM') // 51 相差51个阴历月
lunisolar('2018/02/10').diff('2022/02/02', 'lM', true) // 49.233333 相差约49.233个阴历月
lunisolar('2018/02/10 00:00:00').diff('2018/02/10 00:00:00', 'lM', true) // 49.233333 相差约49.233个阴历月 const a = '2020/01/02 00:00:00'
const b = '2020/01/01 00:00:00'
a.diff(b) // -86400000 a比b大的话将返回负数 阴历的时间差计算，如 2018/02/10 （二〇一七年十二月廿五）和 2018/02/16（二〇一八年正月初一）这两个日期，实际只相差五天，但因为两个所在的阴历年不同，所以date1.diff(date1,'lY') 计出的结果是1年，如果采用小数date1.diff(date1,'lY', true)，会算得 0.016 年。
而公历的diff会与dayjs.diff的计算方式一致，两个时间天数不足一年, 其取整数是不会按一年算的。如果你想农历也按此方式取整，可以先取浮点数再取整parseInt(date1.diff(date1,'lY', true))`}]},{path:"/guide/functional/element5.html",title:"五行",pathLocale:"/",contents:[{header:"五行",slug:"五行",content:`天干对象或地支对象都有e5属性，返回一个五行实例: Element5
// 例如，取得日柱天干的五行
const e5 = lunisolar().char8.day.stem.e5`},{header:"五行名",slug:"五行名",content:`取得五行名称，如 '木'
/** * @return {string} */
e5.name`},{header:"五行索引",slug:"五行索引",content:`取得五行索引，范围[0, 4], 依次为'木、火、土、金、水',
/** * @return {number} */
e5.value`},{header:"相生",slug:"相生",content:`取得相生（我生者）的五行
/** * @return {Element5} */
e5.generating()`},{header:"相克",slug:"相克",content:`取得相克（我克者）的五行
/** * @return {Element5} */
e5.overcoming()`},{header:"相泄",slug:"相泄",content:`取得相泄（生我者）的五行
/** * @return {Element5} */
e5.weakening()`},{header:"相侮",slug:"相侮",content:`取得相侮（克我者）的五行
/** * @return {Element5} */
e5.counteracting()`}]},{path:"/guide/functional/format.html",title:"时间格式化 format",pathLocale:"/",contents:[{header:"时间格式化 format",slug:"时间格式化-format",content:"lunisolar(date).format(formatStr)格式化数据"},{header:"示例",slug:"示例",content:`lunisolar('2022/07/18 14:40').format('YYYY/MM/DD HH:mm:ss SSS') // '2022/07/18 14:40:00 000'
lunisolar('2022/07/18 14:40').format('lY年 lMlD lH時') // '二〇二二年 六月二十 未時'
lunisolar('2022/07/18 14:40').format('lY年 lM(lL)lD lH時') // '二〇二二年 六月(大)二十 未時'
lunisolar('2022/07/18 14:40').format('lYn年 農歷lMn月lDn日 第lHn個時辰') // '2022年 農歷6月20日 第8個時辰'
lunisolar('2022/07/18 14:40').format('cY cM cD cH') // '壬寅 丁未 壬申 丁未' lunisolar('2022/07/18 14:40').format('八字： cY cM cD cH') // '八字：壬寅 丁未 壬申 丁未'
lunisolar('2022/03/10').format('cZ年') // '虎年'
lunisolar('2022/03/10').format('cYs-cYb cMs-cMb cDs-cDb cHs-cHb') // '壬-寅 丁-未 壬-申 丁-未' // 提示： 使用方括号[]可对里边的内容进行转义, 如要显示Year这个单词，要放在[]内才能正确显示。
lunisolar('2022/07/18 14:40').format('[Year:]YYYY') // 'Year:2022'`},{header:"标识符",slug:"标识符",content:`根据传入的标识字符串获取格式化的日期。
要对字符进行转义，请将它们括在方括号中(例如 [cY YY] ) 标识
示例
描述 lY
二〇二二
当年阴历正月初一所在的公历年 (lY 为 lunarYear缩写, 其它类推) lYn
2022
当年阴历正月初一所在的公历年, 数字形式开示 lM
正月-十二月
阴历月 lMn
1-12
阴历月, 以数字形式表示, 当为闰月时，数字会加上100，如闰二月，则结果为102 lD
初一
阴历日 lDn
1 - 30
阴历日, 以数字形式表示 lH
子 - 亥
时辰 lHn
1 - 12
时辰序号，从1开始 lL
大 | 小
阴历月是大月还是小月 cY
甲子
八字年柱 (cY 为 char8 Year 缩写) cYs
甲
八字年柱天干 (cYs 为 char8 Year stem 缩写) cYb
子
八字年柱地支 (cYb 为 char8 Year branch 缩写) cM
甲子
八字月柱 cMs
甲
八字月柱天干 cMb
子
八字月柱地支 cD
甲子
八字日柱 cDs
甲
八字日柱天干 cDb
子
八字日柱地支 cH
甲子
八字日柱 cHs
甲
八字日柱天干 cHb
子
八字日柱地支 cZ
鼠
生肖 （立春换岁，可通过config设置换岁时机） t
1-24
节气，从小寒到冬至的序号，从1开始，如果该日不是节气，返回空字符串 T
小寒-冬至
节气字符串，如果该日不是节气，返回空字符串 YY
18
年，两位数 YYYY
2018
年，四位数 M
1-12
月，从1开始 MM
01-12
月，两位数字 MMM
Jan-Dec
月，英文缩写 D
1-31
日 DD
01-31
日，两位数 H
0-23
24小时 HH
00-23
24小时，两位数 h
1-12
12小时 hh
01-12
12小时，两位数 m
0-59
分钟 mm
00-59
分钟，两位数 s
0-59
秒 ss
00-59
秒，两位数 S
0-9
毫秒（百），一位数 SS
00-99
毫秒（十），两位数 SSS
000-999
毫秒，三位数 Z
-05:00
UTC偏移 ZZ
-0500
UTC偏移，两位数 d
0-6
一周中的一天，星期天是 0 dd
Su-Sa （中文的話： 日、一 ~ 六 ）
最简写的星期几 ddd
Sun-Sat （中文的話： 週日、週一 ~ 週六）
简写的星期几 dddd
Sunday-Saturday （中文的話： 星期日、星期一 ~ 星期六）
星期几 A
AM / PM
上/下午，大写 a
am / pm
上/下午，小写`}]},{path:"/guide/functional/gregorian.html",title:"公历",pathLocale:"/",contents:[{header:"公历",slug:"公历",content:"通过lunisolar()函数创建Lunisolar后，可以取得一些基本的公历时间相关值"},{header:"取值",slug:"取值",content:""},{header:"年",slug:"年",content:`/** * @return {number} */
lunisolar().year`},{header:"月",slug:"月",content:`/** * @return {number} 范围为 [1, 12] */
lunisolar().month 注意
lunisolar().month 取值范围是1 ~ 12， 对应1到12月， 与Date对象的getMonth()方法的0 ~ 11不同，请勿搞混。`},{header:"日",slug:"日",content:`取得月份里的日期
/** * @return {number} 范围为 [1, 31] */
lunisolar().day 注意
lunisolar().day 取值是某月的日期，对应Date对象的getDate()方法。而Date对像的getDay()方法为取得周几，注意区分。`},{header:"星期几",slug:"星期几",content:`取得星期几，0为星期日
/** * @return {number} 范围为 [0, 6] */
lunisolar().dayOfWeek 注意
lunisolar().dayOfWeek 的取值，0为周日，1 ~ 6 对应周一至周六，
lunisolar().dayOfWeek属性，对应Date对像的getDay()方法。`},{header:"时",slug:"时",content:`/** * @return {number} 范围为 [0, 23] */
lunisolar().hour`},{header:"分",slug:"分",content:`/** * @return {number} 范围为 [0, 59] */
lunisolar().minute`},{header:"秒",slug:"秒",content:`/** * @return {number} 范围为 [0, 59] */
lunisolar().second`},{header:"毫秒",slug:"毫秒",content:`/** * @return {number} 范围为 [0, 999] */
lunisolar().millis`},{header:"unix时间戳",slug:"unix时间戳",content:`返回以秒为单位的时间戳
/** * @return {number} 范围为 [0, 999] */
lunisolar().unix`},{header:"时间戳",slug:"时间戳",content:`返回以毫秒为单位的时间戳
/** * @return {number} 范围为 [0, 999] */
lunisolar().valueOf() Tips
lunisolar().valueOf() 与 new Date().valueOf() 一致`},{header:"取得Date对象",slug:"取得date对象",content:`/** * @return {Date} */
lunisolar().toDate()`},{header:"操作",slug:"操作",content:""},{header:"时间加减",slug:"时间加减",content:`/** * @param { number } value 要加减的值，当为负数时即为减 * @param { DateAddUnit } unit 单位，默认值为 millisecond，即毫秒 * @return { Lunisolar } 返回一个新的Lunisolar实例 */
lunisolar().add(value: number, unit?: DateAddUnit): Lunisolar lunisolar().add(1, 'd') // 加一天
lunisolar().add(-2, 'M') // 减两个月
lunisolar().add(-2, 'm') // 减两分钟
单位说明 type DateAddUnit = | 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'ms' | 's' | 'm' | 'h' | 'd' | 'M' | 'y' 单位
缩写
描述 day
d
天 month
M
月份 year
y
年 hour
h
小时 minute
m
分钟 second
s
秒 millisecond
ms
毫秒`}]},{path:"/guide/functional/lunar.html",title:"阴历",pathLocale:"/",contents:[{header:"阴历",slug:"阴历",content:`阴历小知识 月亮圆缺一周期为一个月，月即为太阴，所以叫阴历。
一个阴历月约为29.53天，12个月共 12∗29.53=354.3612 * 29.53 = 354.3612∗29.53=354.36 天。而一个回归年为365.2422日。一年就相差10.88天，所以大概2.7年就要闰一个月来补回每年相差的时间。所以存在闰月 Lunisolar实例上包含一个lunar属性，该属返回一个Lunar实例可以此取得各项阴历数据
lunisolar().lunar: Lunar`},{header:"取值",slug:"取值",content:""},{header:"年",slug:"年",content:`取得当年正月初一所在的公历年
/** * @return {number} */
lunisolar().lunar.year
取得字符串形式的年份名，如'二〇二二' /** * @return {string} */
lunisolar().lunar.getYearName()`},{header:"月",slug:"月",content:`取得阴历月份，以数字形式返回，当为闰月时，月份数会加100, 如闰二月，则返回 102
/** * @return {number} */
lunisolar().lunar.month 取得字符串形式的月份名，如'闰二月'
/** * @return {string} */
lunisolar().lunar.getMonthName()`},{header:"是否大月",slug:"是否大月",content:`当前日期所在月份是否大月, 阴历大月为30天，小月为29天 /** * @return {boolean} */
lunisolar().lunar.isBigMonth`},{header:"是否闰月",slug:"是否闰月",content:`当前日期所在月份是否闰月
/** * @return {boolean} */
lunisolar().lunar.isLeapMonth Info`},{header:"日",slug:"日",content:`取得月份里的日期
/** * @return {number} 范围为 [1, 30] */
lunisolar().lunar.day
取得字符串形式的日期名，如'初一'
/** * @return {string} */
lunisolar().lunar.getDayName()`},{header:"时辰",slug:"时辰",content:`取得时辰序号，从0开始，0 ~ 11 对应 子时 ~ 亥时
/** * @return {number} 范围为 [0, 11] */
lunisolar().lunar.hour
取得时辰字符串, 如 '子'
/** * @return {string} */
lunisolar().lunar.getHourName()`},{header:"月相",slug:"月相",content:`取得当天月相，如朔、弦、望、晦等，不在上述其中之一者，返回空字符串
/** * @return {string} */
lunisolar().lunar.phaseOfTheMoon`},{header:"当年的闰月月份",slug:"当年的闰月月份",content:`当年农历的闰月，返回月份的数字， 如果没有闰月，返回0
可用于检查当年有没有闰年
/** * @return {number} */
lunisolar().lunar.leapMonth
如果要看当年的闰月是否大月：
/** * @return {boolean} */
lunisolar().lunar.leapMonthIsBig`},{header:"正月初一所在日",slug:"正月初一所在日",content:`取得当年正月初一对应的公历日期, 返回Date对象
/** * @return {Date} */
lunisolar().lunar.getLunarNewYearDay()`}]},{path:"/guide/functional/parse.html",title:"解析 (创建Lunisolar对象)",pathLocale:"/",contents:[{header:"解析 (创建Lunisolar对象)",slug:"解析-创建lunisolar对象",content:""},{header:"lunisolar()",slug:"lunisolar",content:`通过lunisolar() 函数创建一个 Lunisolar实例对象：
lunisolar(date?: string | number | Date | Lunisolar, config?: ConfigType): Lunisolar`},{header:"参数说明",slug:"参数说明",content:`date {string | number | Date | undefined}
要解析的时间 当为string类型时，传入时间字符串，如 '2022-07-18'
当为number类型时，传入以毫秒为单位的时间戳
亦可传入一个Date对象
当不传入参数，即为undefine时，即取当前时间 config {ConfigType}
设置, 为一个对像，其内容如下： type ConfigType = { lang: string // 语言包名称，默认为zh，即使用繁体中文 changeAgeTerm: number // 换岁时气的索引，默认值为2，即立春。（注：节气列表从小寒开始） isUTC: boolean // 是否使用UTC时间，为true时，lunisolar生成的所有时间都是UTC时间，需要用local转为本地时 offset: number // 时间偏移，以分钟为单位, 默认为0
}`},{header:"示例",slug:"示例",content:`// 传入字符串
lunisolar('2022-07-18 14:40')
lunisolar('2022/07/18')
// 不传入参数时，为当前时间
lunisolar()
// 传入时间戳 (毫秒为单位)
lunisolar(1658289207143)
// 传入Date对象
lunisolar(new Date(2022, 6, 20))
// 传入Lunisolar对象时，将克隆一个Lunisolar对象
lunisolar(lunisolar()) //
const config = { lang: 'en' // 更改用语言，需先加载对应语言包，详见文档 【国际化】的说明
}
lunisolar('2022-07-18 14:40', config)`},{header:"lunisolar.fromLunar() 阴历反查",slug:"lunisolar-fromlunar-阴历反查",content:`通过阴历数据创建一个Lunisolar实例对象，此法可用来阴历转公历:
lunisolar.fromLunar(lunarData: FromLunarData, config: ConfigType): Lunisolar`},{header:"参数说明",slug:"参数说明-1",content:`lunarData: FromLunarData
type FromLunarData = { year?: number | string // 该年正月初一所在公历年的年份，可以是字符串，默认值为当前日期的年份 month: number | string // 阴历月份，可以是字符串，必填, 当月份数大于100时，表明时闰月，如闰4月，可输入104 day: number | string // 阴历日，可以是字符串，必填 hour?: number | string // 时辰索引值或时辰名，默认为0, 即子时。设置时辰后，返回的小时为该时辰的中间时间，如寅时，会返回4点正的时间。 isLeapMonth?: boolean // 指明月份是否闰月，默认为false, 当month设为大于100的数时，会无视此设置 }`},{header:"示例1",slug:"示例1",content:`const lunarData = { year: 2022, month: 10, day: 25
}
const lsr = lunisolar.fromLunar(lunarData) // 成功创建一个个Lunisolar实例对象 console.log(lsr.format('YYYY-MM-DD')) // 2022-11-18`},{header:"示例2",slug:"示例2",content:`你也可以使用汉字进行阴历反查
// lunisolar默认使用繁体中文语言包，此语言包默认自动加载，可直接使用繁体中文
// 使用其它语言包参考示例3
const lunarData = { year: '二〇二〇', month: '閏四月', day: '廿四' }
const lsr = lunisolar.fromLunar(lunarData) // 成功创建一个个Lunisolar实例对象
console.log(lsr.format('YYYY-MM-DD')) // 2020-06-15`},{header:"示例3",slug:"示例3",content:`使用简体中文进行阴历反查
import lunisolar from 'lunisolar'
import zhCn from 'lunisolar/locale/zh-cn'
import ja from 'lunisolar/locale/ja'
lunisolar.locale(ja) // 加载日文语言包
lunisolar.locale(zhCn) // 加载简体中文语言包，最后加载者，会全局默认使用该语言包 const lunarData = { year: '二〇二〇', month: '闰四月', // 此时，如果还是使用繁体的“閏”字会报错。 day: '廿四' }
const lsr = lunisolar.fromLunar(lunarData) // 成功创建一个个Lunisolar实例对象 console.log(lsr.format('YYYY-MM-DD')) // 2020-06-15 // lunisolar.locale(zhCn) 加载简体中文语言名后，会全局使用zh-cn语言包
// 如果个别实例想使用其它语言包可通config进行临时更改，如使用日文，
const lsr2 = lunisolar.fromLunar({ year: '二〇二〇', month: '睦月', day: '一日' }, { lang: 'ja' // 指正要使用的语言包名
}) console.log(lsr.format('YYYY-MM-DD')) // 2020-01-25`},{header:"lunisolar.utc()",slug:"lunisolar-utc",content:`用于创建一个UTC时间，返回一个 Lunisolar实例对象：
lunisolar.utc(date?: string | number | Date | Lunisolar, config?: ConfigType): Lunisolar
其参数与lunisolar()的参数一致，而config.isUTC会自动设为true
// 以下两种写法的效果一致
const lsr1 = lunisolar('2023-03-14 18:00', { isUTC: true })
const lsr2 = lunisolar.utc('2023-03-14 18:00')`}]},{path:"/guide/functional/solarTerm.html",title:"节气",pathLocale:"/",contents:[{header:"节气",slug:"节气",content:`Info 节气是农历的重要组成部分，依黄经度数划分，属于阳历范畴，是天干地支纪时法的换岁换月依据，是中国大多数传统术数的重要基础
自1645年起至今所使用的廿四节气是依据太阳黄经度数划分，把黄道360度圆周划分成24等份，每等份15度，每15度为一个节气，全年共二十四个节气。
节气是某一个时该点，而非某个时间段，但由于本库采用的转换数据只精确到天，所以本库的交节（更换八字月柱），也是以日为准。`},{header:"取得当前节气",slug:"取得当前节气",content:`返回当前日期的节气对象 SolarTerm，如果不是节气，返回null
/** * @return {SolarTerm | null} */
lunisolar().solarTerm`},{header:"最近节气",slug:"最近节气",content:`取得当前日期之前的最近的节气
/** * @param nodeFlag 取的节气点，0: 取节， 1: 取气, 2: 节或气都取 * @return {SolarTerm | null} */
lunisolar().recentSolarTerm(nodeFlag: 0 | 1 | 2) // use
lunisolar().recentSolarTerm(0) // 取得当前日期在哪那个最近的节之后
lunisolar().recentSolarTerm(1) // 取得当前日期在哪那个最近的气之后
lunisolar().recentSolarTerm(2) // 取得当前日期在哪那个最近的节气之后`},{header:"季节",slug:"季节",content:`季节是依节气来划分的 取当前日期所在季节的索引值，范围 [0, 3]
/** * @return {number} */
lunisolar().getSeasonIndex()
取当前日期所在季节名称
/** * @return {string} */
lunisolar().getSeason()`},{header:"节气名称列表",slug:"节气名称列表",content:`通过调用 SolarTerm类的静态方法取得节气列表，
该列表从每年的第一个节气(小寒)开始按顺序列出所有节气名称
/** * @return {string[]} */
lunisolar.SolarTerm.getNames()`},{header:"指定年的节气日列表",slug:"指定年的节气日列表",content:`取得指定年的节气日期列表，长度24，返回 number[]
该列表是从每年的第一个节气(小寒)开始按顺序列出的，只包含日
/** * @param {number} year 指定的年份 * @return {number[]} */
lunisolar.SolarTerm.getYearTermDayList(year: number) // 示例： 返回2023年的节气日期列表
const termList = lunisolar.SolarTerm.getYearTermDayList(2023) // [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,24,8,22,7,22] Tips
节气列表从每年公历1月的第一个节气(小寒)开始按顺列出，因为公历每个月固定包含2个节气，知道是第几个节气，便能很易算是是第几个月份。所以列表只给出了日，不包含月 示例：取得2023年所有节气名及其日期
import lunisolar from 'lunisolar' const termList = lunisolar.SolarTerm.getYearTermDayList(2023) // 取得节气日列表
const nameList = lunisolar.SolarTerm.getNames() // 取得节气名列表 for (let i = 0; i < 24; i++) { const name = names[i] // 节气名 const m = (i >> 1) + 1 // 月份 const d = yearTermList[i] // 日 console.log(i, name, \`2023年\${m}月\${d}日\`)
} /** result
0 小寒 2023年1月5日
1 大寒 2023年1月20日
2 立春 2023年2月4日
3 雨水 2023年2月19日
4 驚蟄 2023年3月6日
5 春分 2023年3月21日
6 清明 2023年4月5日
7 穀雨 2023年4月20日
8 立夏 2023年5月6日
9 小滿 2023年5月21日
10 芒種 2023年6月6日
11 夏至 2023年6月21日
12 小暑 2023年7月7日
13 大暑 2023年7月23日
14 立秋 2023年8月8日
15 處暑 2023年8月23日
16 白露 2023年9月8日
17 秋分 2023年9月23日
18 寒露 2023年10月8日
19 霜降 2023年10月24日
20 立冬 2023年11月8日
21 小雪 2023年11月22日
22 大雪 2023年12月7日
23 冬至 2023年12月22日 */`},{header:"指定年月的节和气",slug:"指定年月的节和气",content:`取得指定月的节和气日期，返回 [节, 气]
/** * @param year 公历年 * @param month 公历月份 * @return {[number, number]} [节, 气] */
lunisolar.SolarTerm.getMonthTerms(year: number, month: number) // 示例： 返回2023年2月的节和气的日期
const termList = lunisolar.SolarTerm.getYearTermDayList(2023, 2) // [4, 19]`}]},{path:"/guide/functional/stem.html",title:"天干",pathLocale:"/",contents:[{header:"天干",slug:"天干",content:""},{header:"取得天干实例",slug:"取得天干实例",content:`通过SB实例的stem属性可取得天干对象Stem
// 例如，取得年柱的天干
const stem = lunisolar().char8.year.stem
或者可以直接创建天干实例
// 创建方法
lunisolar.Stem.create(value: number, config?: { lang: string}) // 例，创建天干为‘乙’的实例，传入其序号1即可
const stem = lunisolar.Stem.create(1)`},{header:"天干名",slug:"天干名",content:`/** * @return {string} */
stem.name`},{header:"天干索引",slug:"天干索引",content:`/** * @return {string} */
stem.name`},{header:"天干五行",slug:"天干五行",content:`返回五行对象实例 Element5
/** * @return {Element5} */
stem.e5`},{header:"天干纳甲",slug:"天干纳甲",content:`取得天干所纳八卦，返回 Trigram8 八卦实例
/** * @return {Trigram8} */
stem.trigram8`},{header:"十天干列表",slug:"十天干列表",content:`此为静态方法， 取得十天干名称列表
/** * @return {string[]} */
lunisolar.Stem.getNames()`}]},{path:"/guide/functional/utc.html",title:"UTC",pathLocale:"/",contents:[{header:"UTC",slug:"utc",content:""},{header:"UTC模式的Lunisolar实例",slug:"utc模式的lunisolar实例",content:`lunisolar默认使用本地时间进行运算和展示数据
如果你需要使用UTC模式，可通过以下方几种方式创建Lunisolar实例`},{header:"1 把原来的 Lunisolar 实例转为utc模式的实例",slug:"_1-把原来的-lunisolar-实例转为utc模式的实例",content:`const lsr = lunisolar('2023-03-14 12:00').utc()
console.log(lsr.format('YYYY-MM-DD HH:mm')) // 如果当前为东八区，则格式化出来的结果为 '2023-03-14 04:00 '`},{header:"2 通过 lunisolar.utc() 直接创建utc模式的实例",slug:"_2-通过-lunisolar-utc-直接创建utc模式的实例",content:"const lsr = lunisolar.utc('2023-03-14 10:00') // 以2023-03-14 10:00作为utc时间创建实例"},{header:"3 通过 lunisolar() 配置参数指定为utc模式的实例",slug:"_3-通过-lunisolar-配置参数指定为utc模式的实例",content:"const lsr = lunisolar('2023-03-14 10:00', { isUTC }) // 以2023-03-14 10:00作为utc时间创建实例"},{header:"UTC时间偏移值(utcOffset)",slug:"utc时间偏移值-utcoffset",content:""},{header:"取得 utcOffset",slug:"取得-utcoffset",content:`lunisolar().utcOffset() 返回以分钟的为单位的偏移值
lunisolar('2023-03-14 14:44').utcOffset()　//如果当前为东八区，应返回 480
lunisolar('2023-03-14 14:44', { isUTC: true, offset: 60 }).utcOffset()　// 如果为UTC模式，则返回其设定的offset值，此处为 60, （offset值不设置时则为0）`},{header:"设置 utcOffset",slug:"设置-utcoffset",content:`当lunisolar().utcOffset(offset) 方法传入参数时，则返回一个utc模式，并包含时间偏移的Lunisolar实例。
@参数 offset: number 当其范围为 [-16, 16]时，单位为小时，将自动乘以60转为分钟，其它情况单位为分钟 例1：
// 以当前为东八区为例
const lsr = lunisolar('2023/03/14 09:32').utcOffset(-60)
console.log(lsr.format('YYYY/MM/DD HH:mm')) // '2023/03/14 00:32' // 说明：
// 当前为+8区，'2023/03/14 09:32' 转为utc时间后为 '2023/03/14 01:32'
// 由于设置了偏移-60分钟，所以再减一小时为 '2023/03/14 00:32'
例2：
const lsr = lunisolar.utc('2023/03/14 00:00').utcOffset(6)
console.log(lsr.format('YYYY/MM/DD HH:mm')) // '2023/03/14 06:00' // 说明：
// 通过lunisolar.utc()把'2023/03/14 00:00' 指定为UTC时间, // 然后设置偏移值为6小时(绝对值小于16时单位为小时，于是加上6小时得 '2023/03/14 06:00' 例3：
有一新疆拉萨出生的小朋友，想要计算其八字，尽管当地使用的是北京时间，但由于按其经度实例应在东六区，我们可以使用UTC偏移的方式计算：
// 北京时间为 '2023-03-14 20:28', 如果按本地时间模式计算八字，应为 '癸卯 乙卯 辛未 戊戌'
// 新疆拉萨地理位置为+6区，通过 utcOffset(6) 使其设为UTC模式，并偏移到东六区
// 设为UTC模式后，char8会按UTC模式的日期计算，得到结果为 '癸卯 乙卯 辛未 丁酉'
lunisolar('2023-03-14 20:28').utc().utcOffset(6).char8.toString() // 癸卯 乙卯 辛未 丁酉 Note
使用lunisolar().utcOffset(offset: number)设置偏移时，即使不使用UTC()进行模式转换时，也会自动生成一个UTC模式的实例`},{header:"isUTC()",slug:"isutc",content:`lunisolar().isUTC() 方法模查是否使用UTC模式
const lsr1 = lunisolar().utc()
const lsr2 = lunisolar() console.log(lsr1.isUTC()) // true
console.log(lsr2.isUTC()) // false`},{header:"local()",slug:"local",content:`lunisolar().local() 返回一个新的本地时区模式的实例
const lsr1 = lunisolar.utc('2023/03/14 00:00')
const lsr2 = lsr1.local()
console.log(lsr2.format('YYYY-MM-DD HH:mm')) // 如果当前为东八区，则返回'2023-03-14 08:00'`}]},{path:"/guide/plugins/",title:"插件 plugins",pathLocale:"/",contents:[{header:"插件 plugins",slug:"插件-plugins",content:`基本说明
胎神占方
五行纳音
神煞宜忌
八字增强`}]},{path:"/guide/plugins/about.html",title:"基本说明",pathLocale:"/",contents:[{header:"基本说明",slug:"基本说明",content:""},{header:"官方插件",slug:"官方插件",content:`lunisolar内置了一些插件，包括以下这些：
具体请参看对应插件的文档 插件
介绍
文档
项目仓库 fetalGod
胎神占方
文档
GitHub takeSound
五行纳音
文档
GitHub theGods
神煞宜忌
文档
GitHub char8ex
八字增强
文档
GitHub`},{header:"自定义插件",slug:"自定义插件",content:`1 编写一个插件
import { PluginFunc, Lunisolar } from 'lunisolar' // 如果你使用的是typescript, 为新添的属性加上类型声明
declare module 'lunisolar' { interface Lunisolar { showExample: string exampleMethod(): void }
} const pluginName: PluginFunc = async (options, lsClass, lsFactory) => { const lsProto = lsClass.prototype // 添加属性 lsProto.showExample = 'hello' // 添加方法 lsProto.exampleMethod = function () { console.log('hello') } }
export default pluginName
2 使用插件
import plugin from 'your/plugin/path/pluginName'
import lunisolar from 'lunisolar' lunisolar.extend(plugin) lunisolar().showExample // 'hello'`}]},{path:"/guide/plugins/char8ex.html",title:"八字增强",pathLocale:"/",contents:[{header:"八字增强",slug:"八字增强",content:""},{header:"简介",slug:"简介",content:`lunisolar.js本身可能过Lunisolar实例的char8属性实现基本的八字查询功能, 但未包括十神和神煞等功能。使用Char8Ex插件后，将会在Lunisolar实例上添加一个char8ex()方法, 除了包含原char8的功能外，还加入了十神和神煞的查询。
使用lunisolar().char8ex()创建一个Char8Ex实例
/** * @param sex 性别 0:坤造，1: 乾造 * @return 返回一个Char8Ex实例对象 */
lunisolar().char8ex(sex: 0 | 1): Char8Ex 注意
加载char8ex插件时，将自动加载takeSound插件（五行纳音插件），所以请不要再重复加takeSound`},{header:"快速上手",slug:"快速上手",content:""},{header:"安装",slug:"安装",content:`由于八字增强插件虽要用到五行纳音，所以须同时安装五行纳音插件 pnpm add @lunisolar/plugin-char8ex @lunisolar/plugin-takesound yarn add @lunisolar/plugin-char8ex @lunisolar/plugin-takesound npm install @lunisolar/plugin-char8ex @lunisolar/plugin-takesound 注意
使用lunisolar@2.x版本时，lunisolar包已内置有该插件，
可通过 import char8ex from 'lunisolar/plugins/char8ex' 直接导入使用，无需另外安装。
后续版本将 移除 所有内置的插件，用户请按需安装下载使用。`},{header:"加载",slug:"加载",content:`// 引入lunisolar
import lunisolar from 'lunisolar'
// 引入 theGods 插件
import { char8ex } from '@lunisolar/plugin-char8ex'
// lunisolar@v2.x可通下以下方式导入，后续版本会取消，不再推荐使用
// import char8ex from 'lunisolar/plugins/char8ex' // 加载插件
lunisolar.extend(char8ex)`},{header:"使用",slug:"使用",content:`// --- 使用
// 创建一个Char8Ex实例对象, 该八字为 2023-01-15 12:26出生的男孩
const c8ex = lunisolar('2023-01-15 12:26').char8ex(1) console.log(c8ex.toString()) // 乾造: 壬寅 癸丑 癸酉 戊午 // Char8Ex实例可通过year,month,day,hour属性取得四柱实例 Pillar
// 而每个四柱实例（Pillar）又包含纳音、天干、地支、天干十神、地支十神、四柱神煞等功能查询 // 取各柱天干十神, 十神和神煞都是以对象形式存在
console.log(c8ex.year.stemTenGod.name) // 劫財
console.log(c8ex.month.stemTenGod.name) // 比肩
// 注：日主实际并不是十神之一，它位于日柱天干，十神以此推算。
console.log(c8ex.day.stemTenGod.name) // 日主
console.log(c8ex.hour.stemTenGod.name) // 正官 // 取各柱地支藏干十神
// 地支十神通过地支所藏天干推算，所以各柱的地支十神可能存在的个数为1至3个，故以数组形式返回
console.log(c8ex.year.branchTenGod.map(i => i.name)) // [ '傷官', '正財', '正官' ]
console.log(c8ex.month.branchTenGod.map(i => i.name)) // ['七殺', '比肩', '梟神']
console.log(c8ex.day.branchTenGod.map(i => i.name)) // ['梟神']
console.log(c8ex.hour.branchTenGod.map(i => i.name)) // ['偏財', '七殺'] //取年柱纳音
console.log(c8ex.year.takeSound) // 金箔金 //空亡地支 missing属性返回一个元组，该元组包含两个地支实例： [Branch, Branch]
// c8ex.missing 等同于 c8ex.day.missing
console.log(c8ex.missing.map(i => i.name)) // [ '戌', '亥' ] // 取得年柱上的神煞,其它柱类似
console.log(c8ex.year.gods.map(item => item.name)) // ['文昌貴人', '金輿', '天廚貴人', '劫煞'] Tips
char8ex插件默认语言与lunisolar一样为繁体中文，如需要其它语言，须再另外加载`},{header:"八字对象",slug:"八字对象",content:`// 创建一个Char8Ex实例
const c8 = lunisolar().char8ex(1) // 参数0为坤造，1为乾造`},{header:"年柱",slug:"年柱",content:`取得年柱， 返回一个四柱对象 Pillar
/** * @return {Pillar} 返回一个四柱对对象，功能类似SB类，但扩展了更多方法 */
c8.year`},{header:"月柱",slug:"月柱",content:`取得月柱， 返回一个四柱对象
/** * @return {Pillar} */
c8.month`},{header:"日柱",slug:"日柱",content:`取得日柱， 返回一个四柱对象
/** * @return {Pillar} */
c8.day`},{header:"时柱",slug:"时柱",content:`取得时柱， 返回一个四柱对象
/** * @return {SB} */
c8.hour`},{header:"日主",slug:"日主",content:`取得日主，即日柱的天干，返回天干对象
/** * @return {Stem} */
c8.me`},{header:"四柱列表",slug:"四柱列表",content:`取得四柱列表
/** * @return {[Pillar, Pillar, Pillar, Pillar]} */
c8.list`},{header:"胎元",slug:"胎元",content:`取得胎元, 返回一个SB实例
/** * @return {SB} */
c8.embryo()`},{header:"命宫",slug:"命宫",content:`取得命宫, 返回一个SB实例
/** * @return {SB} */
c8.ownSign()`},{header:"身宫",slug:"身宫",content:`取得身宫, 返回一个SB实例
/** * @return {SB} */
c8.bodySign()`},{header:"性别",slug:"性别",content:`取得性别字符串，如'乾造' 或 '坤造'
/** * @return {string} */
c8.sex
取得性别值，返回 0 或 1， 0为'坤造'， 1为'乾造'
/** * @return {string} */
c8.sexValue`},{header:"空亡地支",slug:"空亡地支",content:`空亡地支, 返回元组 [Branch, Branch]
/** * @return {[Branch, Branch]} */
c8.missing // 其相当于
c8.day.missing`},{header:"取天干和地支",slug:"取天干和地支",content:`上述年月日时四柱返回的四柱实例对象: Pillar
Pillar包含了SB类的所有原型方法，天干地支的相关用法，可以参考SB类的用法，这处不详细论述
// 例如，从年柱取得 Pillar实例
const pillar = lunisolar().char8ex(1).year
// 取天干
pillar.stem
// 取地支
pillar.branch`},{header:"十神",slug:"十神",content:""},{header:"天干十神",slug:"天干十神",content:`可从四柱实例上取得天干十神，返回一个TenGod实例
/** * @return {TenGod} */
pillar.stemTenGod`},{header:"地支十神",slug:"地支十神",content:`取得地支十神, 因为是按地支藏干算的, 所以返回TenGod实例列表
/** * @return {TenGod[]} */
pillar.branchTenGod`},{header:"四柱神煞",slug:"四柱神煞",content:`四柱对象Pillar上包含一个gods属性，可取得该柱所有神煞，返回 C8God实例列表
/** * @return {C8God[]} */
pillar.gods`}]},{path:"/guide/plugins/fetalGod.html",title:"胎神占方",pathLocale:"/",contents:[{header:"胎神占方",slug:"胎神占方",content:`古人认为怀孕以及孕期胎儿的好坏都与胎神有关。所以民间传统习俗里，家里一旦有孕妇，便有各种禁忌，以免惊动胎神。
胎神每日都会出现在不同的位置，参考《胎神逐日所占游方定局》。
其中天干地支与胎神位置的规律可用以下口诀记忆： ----天干六甲胎神歌---- 甲己之日占在門，乙庚碓磨休移动。 丙辛廚灶莫相干，丁壬倉庫忌修弄。 戊癸房床若移整，犯之孕妇堕孩童。 ----地支六甲胎神歌---- 子午二日碓须忌，丑未廁道莫修移。 寅申火爐休要动，卯酉大門修当避。 辰戌雞棲巳亥床，犯着六甲身堕胎。`},{header:"安装",slug:"安装",content:`pnpm add @lunisolar/plugin-fetalgod yarn add @lunisolar/plugin-fetalgod npm install @lunisolar/plugin-fetalgod 注意
使用lunisolar@2.x版本时，lunisolar包已内置有该插件，
可通过 import fetalGod from 'lunisolar/plugins/fetalGod' 直接导入使用，无需另外安装。
后续版本将 移除 所有内置的插件，用户请按需安装下载使用。`},{header:"用法",slug:"用法",content:`查询胎神要先导入 fetalGod 插件，
之后可使用lunisolar().fetalGod 取得胎神描述，
也可以使用lunisolar().fetalGodData 取得胎神数据。
示例：
import lunisolar from 'lunisolar'
import { fetalGod } from '@lunisolar/plugin-fetalgod' // lunisolar@v2.x可通下以下方式导入，后续版本会取消，不再推荐使用
// import fetalGod from 'lunisolar/plugins/fetalGod' lunisolar.extend(fetalGod) const lsr = lunisolar('2022-07-08')
lsr.fetalGod // 倉庫棲外東南
lsr.fetalGodData.stemPlace // 倉庫
lsr.fetalGodData.branchPlace // 雞棲
lsr.fetalGodData.direction // 外東南
lsr.fetalGodData.description // 倉庫棲外東南`},{header:"fetalGodData 属性",slug:"fetalgoddata-属性",content:`属性
描述
返回类型 stemPlace
根据天干推算的胎神位置，有以下五种： ['門', '碓磨', '廚灶', '倉庫', '房床']
string branchPlace
根据地支推算的胎神位置，有以下六种：['碓', '廁', '爐', '門', '雞棲', '床']
string direction
胎神的方向，如'外东南'、'外西'、'内中' 等
string description
胎神占方的完整描述，如："占門碓外東南"
string`}]},{path:"/guide/plugins/takeSound.html",title:"五行纳音",pathLocale:"/",contents:[{header:"五行纳音",slug:"五行纳音",content:`查询胎神要先导入 takeSound 插件，
加载takeSound后，会在SB原型上添加两个属性takeSound和takeSoundE5 sb.takeSound 属性返回纳音描述字符串
sb.takeSoundE5 属性返回纳音五行的Element5实例`},{header:"安装",slug:"安装",content:`pnpm add @lunisolar/plugin-takesound yarn add @lunisolar/plugin-takesound npm install @lunisolar/plugin-takesound 注意
使用lunisolar@2.x版本时，lunisolar包已内置有该插件，
可通过 import takeSound from 'lunisolar/plugins/takeSound' 直接导入使用，无需另外安装。
后续版本将 移除 所有内置的插件，用户请按需安装下载使用`},{header:"使用",slug:"使用",content:`import lunisolar from 'lunisolar'
import { takeSound } from '@lunisolar/plugin-takesound' // lunisolar@v2.x可通下以下方式导入，后续版本会取消，不再推荐使用
// import takeSound from 'lunisolar/plugins/takeSound' lunisolar.extend(takeSound) /** 加载takeSound插件后， SB对象（天干地支对象）会添加一个takeSound属性， */
const lsr = lunisolar('2022-07-08')
lsr.char8.year.takeSound // 金箔金 （取得年干支的纳音）
lsr.char8.year.takeSoundE5.toString() // 金 （取得年干支的纳音五行）
// ...
lsr.char8.day.takeSound // 大海水 （取得日干支的纳音）
lsr.takeSound // 大海水 （取得日干支的纳音 等同于 lsr.char8.day.takeSound）`}]},{path:"/guide/plugins/theGods.html",title:"神煞宜忌",pathLocale:"/",contents:[{header:"神煞宜忌",slug:"神煞宜忌",content:""},{header:"1 简介",slug:"_1-简介",content:`theGods作为lunisolar的一个插件，其神煞、宜忌的内容主要参考中国古代典籍 《协纪纪辨方书》 。
本库中的所有宜忌词条，除特别说明的外，皆出于《协纪纪辨方书 * 卷十一》。
宜忌的推导，需要先查出当日的所有神煞（卷九），每个神煞都有各自的宜忌（卷十），然后通过宜忌等第表、铺注条例（卷十）对宜忌进行整理，最后跟据（卷十一）用事表格进行排序和筛选。
正因为神煞和宜忌的数据复杂烦琐，为了方便维护和以免影响lunisolar的打包体积，故TheGods作为一个lunisolar的插件开发。`},{header:"2 快速上手",slug:"_2-快速上手",content:""},{header:"安装",slug:"安装",content:`pnpm add @lunisolar/plugin-char8ex yarn add @lunisolar/plugin-char8ex npm install @lunisolar/plugin-char8ex 注意
使用lunisolar@2.x版本时，lunisolar包已内置有该插件，
可通过 import theGods from 'lunisolar/plugins/theGods' 直接导入使用，无需另外安装。
后续版本将 移除 所有内置的插件，用户请按需安装下载使用。`},{header:"加载",slug:"加载",content:`// 引入lunisolar
import lunisolar from 'lunisolar'
// 引入 theGods 插件
import { theGods } from '@lunisolar/plugin-thegods'
// lunisolar@v2.x可通下以下方式导入，后续版本会取消，不再推荐使用
// import theGods from 'lunisolar/plugins/theGods' // 加载插件
lunisolar.extend(theGods)`},{header:"使用",slug:"使用",content:`// --- 使用
const lsr = lunisolar('2018-10-04')
// 取神煞
lsr.theGods.getGods('M') // 取得当日的月神
lsr.theGods.getGods('D') // 取得当日的日神
lsr.theGods.getGods('MD') // 取得当日的月神和日神
lsr.theGods.getDuty12God() // 取得当日建除十二神（建、除、满....）
lsr.theGods.getLife12God('day') // 取得当日长生十二神 (长生、沐浴、冠帶...)
lsr.theGods.getBy12God('day') // 取得当日串宫十二神（青龍、明堂、天刑...） // 取宜忌
lsr.theGods.getActs(0) // 取得当日宜忌 {good: string[], bad: string[]}
lsr.theGods.query('this day gods') // 取得当日神煞 （用于取宜忌的神煞）
lsr.theGods.query('good act 1') // 取得当日所宜（通书六十事）
lsr.theGods.query('bad act 1') // 取得当日所忌（通书六十事）
lsr.theGods.query('good act 2') // 取得当日所宜（御用六十七事）
lsr.theGods.query('good act 2') // 取得当日所忌（御用六十七事）
lsr.theGods.query('good act 3') // 取得当日所宜（民三十七事）
lsr.theGods.query('good act 3') // 取得当日所忌（民用三十七事）
lsr.theGods.query('good act') // 取得当日所宜（卷十一的所有词条）
lsr.theGods.query('bad act') // 取得当日所忌（卷十一的所有词条） // 取得当日所有时辰吉凶
lunisolar('2022-10-21').theGods.getLuckHours() // [-1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1] 大于0为吉，少于0为凶 // 取得当日吉神所在方位
const [d24, god] = lunisolar('2022-11-25').theGods.getLuckDirection('財神')
d24.direction // 南
d24.sign.toString() // 午
d24.angle // 180 // 更多和详细用法请继续往下阅读`},{header:"3 建除十二神",slug:"_3-建除十二神",content:"建除十二神，又称十二值神。即 “建、除、满、平、定、执、破、危、成、收、开、闭”共十二位神，每日轮值，周而复始，观所值以定吉凶。 《历书》曰：“历家以建、除、满、平、定、执、破、危、成、收、开、闭，凡十二日，周而复始，观所值以定吉凶。每月交节则叠两值日。其法从月建上起，建与斗杓所指相应，如正月建寅则寅日起建，顺行十二辰也。” 方法 lunisolar().theGods.getDuty12God()"},{header:"4 长生十二神",slug:"_4-长生十二神",content:`长生十二神 分别为：长生、沐浴、冠带、临官、帝旺、衰、病、死、墓、绝、胎、养 甲
乙
丙
丁
戊
己
庚
辛
壬
癸 長生
亥
午
寅
酉
寅
酉
巳
子
申
卯 沐浴
子
巳
卯
申
卯
申
午
亥
酉
寅 冠帶
丑
辰
辰
未
辰
未
未
戌
戌
丑 臨官
寅
卯
巳
午
巳
午
申
酉
亥
子 帝旺
卯
寅
午
巳
午
巳
酉
申
子
亥 衰
辰
丑
未
辰
未
辰
戌
未
丑
戌 病
巳
子
申
卯
申
卯
亥
午
寅
酉 死
午
亥
酉
寅
酉
寅
子
巳
卯
申 墓
未
戌
戌
丑
戌
丑
丑
辰
辰
未 絕
申
酉
亥
子
亥
子
寅
卯
巳
午 胎
酉
申
子
亥
子
亥
卯
寅
午
巳 養
戌
未
丑
戌
丑
戌
辰
丑
未
辰 方法:
lunisolar().theGods.getDuty12God(ymdh: 'year' | 'month' | 'day' | 'hour'): God
参数:
ymdh: 'year' | 'month' | 'day' | 'hour'
指定year，或返回八字年柱的长生十二神，同理 'month'、'day'、'hour'其它各柱亦如是。`},{header:"5 串宫十二神 (黄道黑道十二神)",slug:"_5-串宫十二神-黄道黑道十二神",content:`青龙、明堂、天刑、朱雀、金匮、天德、白虎、玉堂、天牢、玄武、司命、勾陈
顺序口诀 青龙明堂与天刑，朱雀金匮天德神，
白虎玉堂天牢黑，玄武司命共勾陈。 黄黑道口诀 （有走之底的字为黄道，其它为黑道） 道远几时通达，路遥何日还乡。 方法:
lunisolar().theGods.getBy12God(dh: 'day' | 'hour'): God
方法名 getBy12God，b指black黑道，y指yellow黄道，故取此方法名。
参数:
按《辨方书》黄道黑道十二神分到日神和时神中，故以参数指定是日还是时
dh: 'day' | 'hour'`},{header:"6 其它神煞（年神，月神，日神，时神）",slug:"_6-其它神煞-年神-月神-日神-时神",content:"按《辨方书·卷九》把各类神煞划分为年神、月神、日神、时神"},{header:"6.1 getGods方法",slug:"_6-1-getgods方法",content:`取得指定年、月、日、时的神煞
lunisolar().theGods.getGods(ymdh: 'Y' | 'M' | 'D' | 'H' | string): God[]
参数：
ymdh?: 'Y' | 'M' | 'D' | 'H' | string
// 默认值为 "MD"
参数ymdh可以指定'Y' | 'M' | 'D' | 'H'其中一个，分别以取当时的年、月、日、时神。
此外可通过组合同时取得组合后的神煞, 例如:
lunisolar().theGods.getGods('YMD') // 同时取得年、月、日神
lunisolar().theGods.getGods('MD') // 同时取得月、日神`},{header:"6.2 getGoodGods方法",slug:"_6-2-getgoodgods方法",content:`取得指定指定年、月、日、时的吉神
lunisolar().theGods.getGoodGods(ymdh: 'Y' | 'M' | 'D' | 'H' | string): God[]
参数:
参数与getGods方法一致, 默认值为 "MD"`},{header:"6.3 getGoodGods方法",slug:"_6-3-getgoodgods方法",content:`取得指定指定年、月、日、时的凶神
lunisolar().theGods.getBadGods(ymdh: 'Y' | 'M' | 'D' | 'H' | string): God[]
参数:
参数与getGods方法一致, 默认值为 "MD"`},{header:"7 宜忌",slug:"_7-宜忌",content:`本库中的所有宜忌词条，除特别说明的外，皆出于《协纪纪辨方书 * 卷十一》。
按《协纪纪辨方书 * 卷十一》宜忌分为 通書六十事、御用六十七事、 民用三十七事。`},{header:"7.1 getActs() 方法",slug:"_7-1-getacts-方法",content:`lunisolar().theGods.getActs(actType?: 0 | 1 | 2 | 3, returnKey?: boolean, replacer?: {}): {good: string[], bad: string[]}
参数说明:
actType: 0 | 1 | 2 | 3
/** 宜忌类型 defalut: 0 0：所有词条，不会按通书、御用、民事里的词条进行筛选 1：按\`通书六十事\`的词条进行筛选，不在此60个词条内者，不会出现 2：按\`御用六十七事\`的词条进行筛选 3: 按\`民用三十七事\`的词条进行筛选
*/ returnKey：boolean
/** 是否返回宜忌key defalut: false false: 词条将按国际化翻译后返回 true: 返回宜忌key，（本库宜忌以繁体中文作为key）
*/ replacer?: { [key: string]: string }
/** 宜忌词条替换 default: undefined 例如要把“剃頭”替換成"理髮" 可設定為 {剃頭: "理髮"}
*/`},{header:"7.2 getGoodActs() 方法",slug:"_7-2-getgoodacts-方法",content:`取得本日所宜
lunisolar().theGods.getGoodActs(actType?: 0 | 1 | 2 | 3, returnKey?: boolean, replacer?: {}): string[] // 參數與getActs相同
// 此方法等同于:
lunisolar().theGods.getActs(actType, returnKey, replacer).good`},{header:"7.3 getBadActs() 方法",slug:"_7-3-getbadacts-方法",content:`取得本日所忌
lunisolar().theGods.getBadActs(actType?: 0 | 1 | 2 | 3, returnKey?: boolean, replacer?: {}): string[] // 參數與getActs相同
// 此方法等同于:
lunisolar().theGods.getActs(actType, returnKey, replacer).bad`},{header:"8 时辰吉凶",slug:"_8-时辰吉凶",content:""},{header:"8.1 getAllDayHourGods() 方法",slug:"_8-1-getalldayhourgods-方法",content:`取得整日各时辰的神煞
lunisolar().theGods.getAllDayHourGods(): God[][] // 返回结果为二维数组：
[ [God, God, ...], // 子时 [God, God, God, ...], // 丑时 [God, God, God, ...], // 寅时 [God, God, ...], // 卯时 [God, ...], // 辰时 [God, ...], // 巳时 ... ... [God, ...], //亥时
]`},{header:"8.2 getLuckHours() 方法",slug:"_8-2-getluckhours-方法",content:`取得整日各时辰的吉凶
lunisolar().theGods.getLuckHours(luckType: 0 | 1 = 1): number[]
// 返回数组表示各时辰，数组元素指示吉凶，大于0为吉，小于0为凶
[1, 1, -1, 1, -1, -1, -1, -1, 1, 1, -1, -1]
参数说明
luckeType: 0 | 1
/**
选择吉凶取法
default: 0
0: 按黄黑道十二神（即青龙明堂等）决定吉凶
1：按黄黑道十二神（即青龙明堂等）决定吉凶
*/`},{header:"9 吉神方",slug:"_9-吉神方",content:""},{header:"9.1 getAllLuckDirection() 方法",slug:"_9-1-getallluckdirection-方法",content:`// 示例：
const lsr = lunisolar('2022-11-25')
const allDirections = lsr.theGods.getAllLuckDirection()
for (let i = 0; i < allDirections.length; i++) { const [d24, god] = allDirections[i] console.log(d24.direction, god.name)
}
// 南 喜神
// 東南 福神
// 南 財神
// 東 陽貴
// 東南 陰貴
取得当日所有神煞吉方
将会返回元素为[二十四山对象, 神煞对象]元组的列表
二十四山对象说明参考本连接`},{header:"9.2 getLuckDirection(godKeyOrName) 方法",slug:"_9-2-getluckdirection-godkeyorname-方法",content:`取得指定吉神所在方位
将会返回[二十四山对象, 神煞对象]元组
// 示例：
const lsr = lunisolar('2022-11-25')
const [d24, god] = lsr.theGods.getLuckDirection('財神')
console.log(d24.direction) // 南
参数说明
godKeyOrName:string
/**
吉方神煞名称，一般为 '喜神' | '福神' | '財神' | '陽貴' | '陰貴'
可以是国际化翻译后的名称
不在此范围内者，将返回null
*/`},{header:"其它方法",slug:"其它方法",content:""},{header:"query() 方法",slug:"query-方法",content:`通过query方法，传入指定的字符串，可取得对应的神煞或宜忌
lunisolar().theGods.query(queryString): God | God[] | string[] | null
参数说明
queryString 存入的字符串，对应返回的内容参见下表, 其中zh的中文字条取决于你是否使用zh语言名才能使用该字条。故建议使用key中的字条存入存数。 key
zh
说明
返回类型 year gods
年神
取得年神
God[] month gods
月神
取得月神
God[] day gods
日神
取得日神
God[] hour gods
時神
取得時神
God[] this day gods
本日神煞
取得本日神煞
God[] day of yellow-black god
本日黃黑十二神
取得本日的串宫十二神
God[] hour of yellow-black god
此時黃黑十二神
取得此时辰的串宫十二神
God[] duty god
建除十二神
取得建除
God year of long-life god
年長生十二神
取得年长生十二神
God month of long-life god
月長生十二神
取得月长生十二神
God day of long-life god
日長生十二神
取得日长生十二神
God hour of long-life god
時長生十二神
取得时辰长生十二神
God good act
宜
取得本日所宜
string[] good act 1
宜1
取得本日通书所宜
string[] good act 2
宜2
取得本日御用所宜
string[] good act 3
宜3
取得本日民用所宜
string[] bad act
忌
取得本日所忌
string[] bad act 1
忌1
取得本日通书所忌
string[] bad act 2
忌2
取得本日御用所忌
string[] bad act 3
忌3
取得本日民用所忌
string[]`},{header:"对象API",slug:"对象api",content:`God
Direction24`}]},{path:"/reference/acts/",title:"宜忌用事",pathLocale:"/",contents:[{header:"宜忌用事",slug:"宜忌用事",content:""}]},{path:"/reference/acts/actsCate.html",title:"用事",pathLocale:"/",contents:[{header:"用事",slug:"用事",content:`参考
参考《钦定协纪辨方书》卷十一`},{header:"基本用事词条",slug:"基本用事词条",content:"以下是lunisolar.js中的所有基本用事词条，《御用六十七事》、《民用三十七事》、《通书选择六十事》都是在此筛选"},{header:"通书选择六十事",slug:"通书选择六十事",content:""},{header:"御用六十七事",slug:"御用六十七事",content:""},{header:"民用三十七事",slug:"民用三十七事",content:""},{header:"词条关系",slug:"词条关系",content:`在《御用六十七事》、《民用三十七事》、《通书选择六十事》的词条都是从“基本用事词条”里筛选的，但个别词条的意思虽然相同，表述用词却不一样，所以会做转换，如《民用三十七事》、《通书选择六十事》中的 ‘出行’，即是基本词条里的‘遣使’ 基本词条
转换后的词条 上冊進表章
上冊受封 興造動土
修造動土 宴會
會親友 遣使
出行 般移
移徒 製裁
裁衣 施恩封拜
襲爵受封' 補垣塞穴
補垣 襲爵受封
施恩封拜' 興造動土
修造動土 宴會
會親友 上官赴任
上官 製裁
裁衣'`}]},{path:"/reference/acts/actsLevel.html",title:"宜忌等第",pathLocale:"/",contents:[{header:"宜忌等第",slug:"宜忌等第",content:`参考
参考《钦定协纪辨方书》卷十 宜忌是通过神煞吉凶所定，但同一天内，有可能同时存在吉神和凶煞，其所示之宜忌很有可能相矛盾，此时应按《宜忌等第表》和《铺注条例》进行取舍。`},{header:"宜忌等第表",slug:"宜忌等第表",content:""},{header:"铺注条例",slug:"铺注条例",content:`凡铺注万年书通书先依用事次第察其所宜忌之日于某日下注宜某事某日下注忌某事次按宜忌较量其吉凶之轻重以定去取
凡宜宣政事布政事之日止注宜宣政事
凡宜营建宫室修宫室之日止注宜营建宫室
凡吉足胜凶从宜不从忌者如遇徳犹忌之事则仍注忌
凡吉凶相抵不注宜亦不注忌者如遇徳犹忌之事则仍注忌
凡徳合赦愿月恩四相时徳等日不注忌进人口安床经络醖酿开市立劵交易纳财开仓库出货财如遇徳犹忌及从忌不从宜之日则仍注忌
凡天狗寅日忌祭祀不注宜求福祈嗣
凡卯日忌穿井不注宜开渠壬日忌开渠不注宜穿井凡巳日忌出行不注宜出师遣使
凡酉日忌宴㑹亦不注宜庆赐赏贺
凡丁日忌剃头亦不注宜整容
凡吉凶相抵不注忌祈福亦不注忌求嗣
凡忌诏命公卿招贤不注宜施恩封拜举正直袭爵受封
凡忌施恩封拜举正直袭爵受封亦不注宜诏命公卿招贤
凡宜宣政事之日遇往亡则改宣为布
凡月厌忌行幸上官不注宜颁诏施恩封拜诏命公卿招贤举正直遇宜宣政事之日则改宣为布
凡吉凶相抵不注忌结婚姻亦不注忌冠带纳采问名嫁娶进人口如遇徳犹忌之日则仍注忌
凡吉凶相抵不注忌嫁娶亦不注忌冠带结婚姻纳采问名进人口般移安床如遇徳犹忌之日则仍注忌遇不将而不注忌嫁娶者亦仍注忌遇亥日厌对八专四忌四穷而仍注忌嫁娶者止注所忌之事其不忌者仍不注忌
凡吉凶相抵不注忌般移亦不注忌安床不注忌安床亦不注忌般移如遇徳犹忌之日则仍注忌
凡吉凶相抵不注忌解除亦不注忌整容剃头整手足甲如遇徳犹忌之日则仍注忌
凡吉凶相抵不注忌修造动土竖柱上梁亦不注忌修宫室缮城郭筑堤防修仓库鼓铸苫葢修置产室开渠穿井安碓硙补垣塞穴修饰垣墙平治道涂破屋壊垣如遇徳犹忌之日则仍注忌
凡吉凶相抵不注忌开市亦不注忌立劵交易纳财不注忌纳财亦不注忌开市立劵交易不注忌立劵交易亦不注忌开市纳财
凡吉凶相抵不注忌开市立劵交易亦不注忌开仓库出货财如遇专忌之日则仍注忌
凡吉凶相抵不注忌牧养亦不注忌纳畜不注忌纳畜亦不注忌牧养
凡吉凶相抵有宜安葬不注忌启攒有宜启攒不注忌安葬
凡土府土符地囊止注忌补垣亦不注宜塞穴
凡开日不注宜破土安葬启攒亦不注忌遇忌则注凡四忌四穷止忌安葬如遇鸣吠鸣吠对亦不注宜破土启攒
凡天吏大时不以死败论者遇四废岁薄逐阵仍以死败论
凡岁薄逐阵日所宜事照月厌所忌删所忌仍从本日二月甲戌四月丙申六月甲子七月戊申八月庚辰九月辛卯十月甲子十二月甲子徳合与赦愿所㑹之辰诸事不忌`},{header:"宜忌推算流程",slug:"宜忌推算流程",content:""}]},{path:"/reference/gods/",title:"吉凶神煞",pathLocale:"/",contents:[{header:"吉凶神煞",slug:"吉凶神煞",content:""}]},{path:"/reference/gods/godBuilder/",title:"神煞立成",pathLocale:"/",contents:[{header:"神煞立成",slug:"神煞立成",content:""}]},{path:"/reference/gods/godBuilder/dayGods.html",title:"日神",pathLocale:"/",contents:[{header:"日神",slug:"日神",content:`参考
参考《钦定协纪辨方书》卷九`},{header:"日神取一定干支者",slug:"日神取一定干支者",content:""},{header:"日神按年取干支者",slug:"日神按年取干支者",content:""},{header:"日神按月取日数者",slug:"日神按月取日数者",content:""},{header:"日神按朔取日数者",slug:"日神按朔取日数者",content:""},{header:"日神按节气取数者",slug:"日神按节气取数者",content:""}]},{path:"/reference/gods/godBuilder/hourGods.html",title:"时神",pathLocale:"/",contents:[{header:"时神",slug:"时神",content:`参考
参考《钦定协纪辨方书》卷九`},{header:"时神从日干起者",slug:"时神从日干起者",content:""},{header:"时神从日支起者",slug:"时神从日支起者",content:""},{header:"时神随月将及日干支者",slug:"时神随月将及日干支者",content:""},{header:"貴登天門",slug:"貴登天門",content:""},{header:"九醜",slug:"九醜",content:""},{header:"时神随日六旬者",slug:"时神随日六旬者",content:""}]},{path:"/reference/gods/godBuilder/monthGods.html",title:"月神",pathLocale:"/",contents:[{header:"月神",slug:"月神",content:`参考
参考《钦定协纪辨方书》卷九`},{header:"月神取月建三合者",slug:"月神取月建三合者",content:""},{header:"月神随四序者",slug:"月神随四序者",content:""},{header:"月神随月建顺行者",slug:"月神随月建顺行者",content:""},{header:"月神随建旺取墓辰者",slug:"月神随建旺取墓辰者",content:""},{header:"月神随月建三合逆行一方者",slug:"月神随月建三合逆行一方者",content:""},{header:"月神随四序行三合者",slug:"月神随四序行三合者",content:""},{header:"月神随四时行三合者纳甲者",slug:"月神随四时行三合者纳甲者",content:""},{header:"月神随月建行纳甲六辰者",slug:"月神随月建行纳甲六辰者",content:""},{header:"月神随月建逆行一方者",slug:"月神随月建逆行一方者",content:""},{header:"月神随月建三合顺行一方者",slug:"月神随月建三合顺行一方者",content:""},{header:"月神随孟仲季顺行三支者",slug:"月神随孟仲季顺行三支者",content:""},{header:"月神随月建阴阳顺行六辰者",slug:"月神随月建阴阳顺行六辰者",content:""},{header:"月神随月将逆行者",slug:"月神随月将逆行者",content:""},{header:"月神随月建行阴阳六辰者",slug:"月神随月建行阴阳六辰者",content:""},{header:"月神取月建生比者",slug:"月神取月建生比者",content:""},{header:"月神从厌建起者",slug:"月神从厌建起者",content:""}]},{path:"/reference/gods/godBuilder/yearGods.html",title:"年神",pathLocale:"/",contents:[{header:"年神",slug:"年神",content:`参考
参考《钦定协纪辨方书》卷九`},{header:"年神随岁干起者",slug:"年神随岁干起者",content:""},{header:"年神随岁干取纳甲卦变者",slug:"年神随岁干取纳甲卦变者",content:""},{header:"年神随岁支顺行者",slug:"年神随岁支顺行者",content:""},{header:"年神随岁支退行者",slug:"年神随岁支退行者",content:""},{header:"年神从岁支三合者",slug:"年神从岁支三合者",content:""},{header:"年神随岁支顺行一方者",slug:"年神随岁支顺行一方者",content:""}]},{path:"/reference/gods/godGoodBad/",title:"神煞宜忌",pathLocale:"/",contents:[{header:"神煞宜忌",slug:"神煞宜忌",content:""}]},{path:"/reference/gods/godGoodBad/bad.html",title:"所忌",pathLocale:"/",contents:[{header:"所忌",slug:"所忌",content:`参考
参考《钦定协纪辨方书》卷十`},{header:"月建〈小时 土府〉",slug:"月建〈小时-土府〉",content:`忌祈福求嗣上册进表章结婚姻纳采问名解除整容剃头整手足甲求医疗病营建宫室修宫室缮城郭兴造动土竖柱上梁修仓库开仓库出货财修置产室破屋坏垣伐木栽种破土安葬启攒正月建日又忌出师
又为土府专忌营建宫室修宫室缮城郭筑堤防兴造动土修仓库修置产室开渠穿井安碓硙补垣修饰垣墙平治道涂破屋坏垣栽种破土
与天德月德天德合月德合天赦月恩四相并〈天愿不得与月建并〉止忌营建宫室修宫室缮城郭筑堤防兴造动土修仓库修置产室开渠穿井安碓硙补垣修饰垣墙平治道涂破屋坏垣伐木栽种破土馀皆不忌未月己未日为阳错不作德合论子午月值月厌辰午酉亥月值月刑从刑厌论二月己卯三月戊辰四月己巳五月戊午八月己酉九月戊戌十月己亥十一月戊子为阴阳小㑹三月庚辰九月甲戌为阴位诸事皆忌
按选择宗镜曰建破平收俗之所忌惟破日最凶建日吉多可用又曰月建为吉凶众神之主叠吉星则吉叠凶星则凶葢月建本非凶日第以其为一月令气之主故又名小时如太岁之不敢犯耳若与德合天赦月恩四相并则益助吉神之力故动土伐木之外一切皆不忌遇刑厌则从刑厌论者刑厌之凶甚于月建故也旧忌颁诏宣政事与宜出行义相反忌上官赴任临政亲民与宜封拜义相反忌安抚边境选将训兵出师与其日兵福所宜自相抵牾故删阳错小㑹阴位详月厌条下`},{header:"月破〈大耗〉",slug:"月破〈大耗〉",content:`忌祈福求嗣上册进表章颁诏施恩封拜诏命公卿招贤举正直宣布政事庆赐赏贺宴㑹冠带行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移安床整容剃头整手足甲裁制营建宫室修宫室缮城郭筑堤防兴造动土竖柱上梁修仓库鼓铸经络酝酿开市立劵交易纳财开仓库出货财修置产室开渠穿井安碓硙补垣塞穴修饰垣墙伐木栽种牧养纳畜破土安葬启攒
又为大耗忌修仓库开市立劵交易纳财开仓库出货财
与天德月德天德合月德合并〈天赦天愿不得与月破并〉犹忌之止不忌祭祀覃恩肆赦施恩惠恤孤惸行惠爱雪冤枉缓刑狱入学解除沐浴求医疗病扫舍宇平治道涂破屋坏垣捕捉畋猎取鱼
子午月值灾煞未申月值月刑与月德天德合月德合并不忌祭祀覃恩肆赦等事仍忌解除求医疗病破屋坏垣不与德合并诸事皆忌卯酉月值灾煞又值月厌虽与德合并仍诸事皆忌四月癸亥十月丁巳为阴阳交破六月癸丑十二月丁未为阳破阴冲亦诸事皆忌
按月破为月建之冲又为月建气绝之地故所忌如此德神临此失力不能为福故与并犹忌若祭祀覃恩等事则不以冲绝为嫌故遇有宜用之神则不忌不待与德神并也若值灾煞或值月刑则其凶尤甚故必与德神并而后不忌祭祀覃恩等事否则诸事皆忌也若值灾煞又值月厌则阴气尤毒故虽与德神并而仍诸事皆忌也阴阳交破阳破阴冲详月厌条下旧本不忌嫁娶经络而忌沐浴葢嫁娶旧止宜不将日又忌章光无翘伏断归忌红沙若再忌月破等日恐致无日可用是不得已为权宜之术耳今按章光无翘等皆俗说拘于俗忌而不避大凶其所为权宜者殊为未当且按监本通书及各坊本皆云嫁娶宜不将天德月德天德合月德合上吉又云日辰全吉无不将亦可用则嫁娶吉日本自甚寛又无需乎权宜为也经络旧止宜满日原自不值破日今三合等日俱宜经络故值破日则忌若沐浴寻常细事则自无当忌之理也`},{header:"平日〈死神〉",slug:"平日〈死神〉",content:`忌祈福求嗣上册进表章颁诏施恩封拜诏命公卿招贤举正直宣布政事庆赐赏贺宴㑹冠带行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移安床解除求医疗病裁制营建宫室修宫室缮城郭筑堤防兴造动土竖柱上梁修仓库鼓铸经络酝酿开市立劵交易纳财开仓库出货财修置产室开渠穿井栽种牧养纳畜破土安葬启攒○止不忌祭祀覃恩肆赦施恩惠恤孤惸行惠爱雪冤枉缓刑狱入学沐浴整容剃头整手足甲安碓硙补垣塞穴扫舍宇修饰垣墙平治道涂破屋坏垣伐木捕捉畋猎取鱼
又为死神忌安抚边境选将训兵出师进人口解除求医疗病修置产室栽种牧养纳畜
寅申巳亥月值相日亥月又值时德六合止忌安抚边境选将训兵出师求医疗病馀皆不忌申月值月害与天德月德合并亦止忌安抚边境选将训兵出师求医疗病馀皆不忌不与德合并如常例寅巳月值月刑从月刑论子午卯酉月值天吏卯酉月与月德并午月与月德合并凡所忌者则不注宜所宜者亦不注忌不与徳合并如常例子月又值月刑从月刑论辰戌丑未月值月煞从月煞论
按平日为月建阴气既尽之地其凶次于月破惟其为气尽也故多忌解除求医疗病而不忌伐木惟其次于月破也故不忌整容剃头整手足甲安碓硙补垣塞穴修饰垣墙又按选择宗镜曰平收日与二德并可用又曰吉多可用葢平日为月建阴气既尽乃建除家之言而非四时三合之气之皆尽也亥月值相日又值时德六合即不与德愿并其吉已足胜凶故止忌军事疗病馀皆不忌与德愿并不待言矣申月虽亦为相日然值月害吉不抵凶而与徳神并则吉胜故亦从德神所宜止忌军事疗病馀皆不忌若不与德神并则如常例也巳月虽亦值六合然值月刑寅月既非六合又值月刑其凶甚于平日故从月刑论也子午卯酉月值天吏为三合死地平日又为死神乃是真死与德神并吉凶仅足相抵故忌则不宜宜则不忌若不与德神并则如常例也子月又值月刑辰戌丑未月值月煞其凶皆甚于平日故从刑煞论也以亥月之吉而犹忌军事疗病者慎战疾也又按旧本凡吉神遇凶煞皆从忌而不从宜不但吉凶无大小之分即凶煞所忌亦诸月皆同无轻重之别于理固属不合于事尤为不便夫即一凶煞而论各月之衰旺已有不同又况吉与吉并凶与凶并吉复与凶并其性情气力至赜不齐亦安得一例而概忌之乎今参互较量除建破等日条例简易及专忌之日无庸分别外馀分为六等其上吉足胜凶从宜不从忌上次吉足抵凶遇德从宜不从忌不遇从宜亦从忌中等吉不抵凶遇德则吉胜从宜不从忌不遇从忌不从宜中次凶胜于吉遇德始相抵从宜亦从忌不遇从忌不从宜其下凶又逢凶遇德从忌不从宜不遇诸事皆忌最下凶叠大凶遇德仍诸事皆忌然后吉凶轻重各有区分而用静用作趋避各当云表例并列于后`},{header:"收日",slug:"收日",content:`忌祈福求嗣上册进表章颁诏施恩封拜诏命公卿招贤举正直宣布政事庆赐赏贺宴㑹冠带行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶般移安床解除求医疗病裁制营建宫室修宫室缮城郭筑堤防兴造动土竖柱上梁鼓铸经络酝酿开市立劵交易开仓库出货财修置产室开渠穿井破土安葬启攒○止不忌祭祀覃恩肆赦施恩惠恤孤惸行惠爱雪冤枉缓刑狱入学进人口沐浴整容剃头整手足甲修仓库纳财安碓硙补垣塞穴扫舍宇修饰垣墙平治道涂破屋坏垣伐木补捉畋猎取鱼栽种牧养纳畜
寅申巳亥月值劫煞从劫煞论子午卯酉月值大时子午月与月德合并酉月与月德并凡所忌者则不注宜所宜者亦不注忌不与德合并如常例卯月丑戌月皆值月刑从月刑论辰未月与德合并止忌安抚边境选将训兵出师求医疗病馀皆不忌不与德合并如常例
按收日为月建阳气既尽之地故所忌与平日同不忌进人口修仓库纳财纳畜者收日之所宜也不忌栽种牧养者平在定前定为死气平为死神收在开前开为生气收已有生意故虽不宜而亦不忌也然收日阳气之尽其义亦与平日同故其宜忌取舍亦略如平日之例寅申巳亥月值劫煞故从劫煞论寅申月值六合己亥月值六害如亥申月平日之例子午卯酉月值大时为三合败地较平日值天吏者为稍轻然此四月之平日却是相气收日则是休气其凶仍相等故亦如子午卯酉月平日之例卯月又值月刑其凶甚于收日故从月刑论如平日子月从月刑之例丑戌月无他吉而值月刑故如平日寅月从月刑之例辰未月无他吉亦无他凶故如申月平日之例`},{header:"满日〈天狗〉",slug:"满日〈天狗〉",content:`忌施恩封拜诏命公卿招贤举正直上官赴任临政亲民结婚姻纳采问名求医疗病
寅申月值守日子午卯酉月值相日与月德天德合月德合月恩四相并〈天赦天愿不得与满日并〉则不忌辰戌丑未月值灾煞从灾煞论己亥月值月厌从月厌论申月又为天狗忌祭祀与德合并犹忌
按满为盈气故所忌如此寅申月值守日子午卯酉月值相日与德合月恩四相并则旺气发为德辉而盈非可恶也故不忌辰戌丑未月值民日然值灾煞为三合无气之辰月恩四相又复泄气不足为吉子午月值月厌转以相亢为凶故各从重论旧本并忌上册进表章与其日福德所宜自相矛盾故删天狗见义例`},{header:"闭日〈血支〉",slug:"闭日〈血支〉",content:`忌上册进表章颁诏施恩封拜诏命公卿招贤举正直宣布政事庆赐赏贺宴㑹行幸遣使出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移安床求医疗目营建宫室修宫室兴造动土竖柱上梁开市开仓库出货财修置产室开渠穿井
又为血支专忌针刺
子午卯酉月值王日辰戌丑未月值官日天吏与天德月德天德合月德合天赦天愿并凡所忌者则不注宜所宜者亦不注忌不与德合赦愿并如常例寅申巳亥月值月煞从月煞论
按闭日本不为凶第取建前敛息之义故所忌如此然敛息乃天地自然之用故子午卯酉月王日之吉亦与辰戌丑未月之值天吏者等与德合赦愿并虽不注忌亦不注宜否则如常例也寅申巳亥月闭日未交本令正当敛息之时且又值月煞故从月煞论也满日兼取月恩四相而闭日不取者方闭无取发生也旧本不忌出行出师今以义推之出行与赴任事同一例出师尤出行之大者故并忌之`},{header:"劫煞",slug:"劫煞",content:`忌祈福求嗣上册进表章颁诏施恩封拜诏命公卿招贤举正直宣布政事庆赐赏贺宴㑹冠带行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移安床解除整容剃头整手足甲求医疗病裁制营建宫室修宫室缮城郭筑堤防兴造动土竖柱上梁修仓库鼓铸经络酝酿开市立劵交易纳财开仓库出货财修置产室开渠穿井安碓硙补垣塞穴修饰垣墙破屋坏垣栽种牧养纳畜破土安葬启攒○止不忌祭祀覃恩肆赦施恩惠恤孤惸行惠爱雪冤枉缓刑狱入学沐浴扫舍宇平治道涂伐木捕捉畋猎取鱼
寅申巳亥月值收日为月令长生寅申月又值六合止忌安抚边境选将训兵出师求医疗病馀皆不忌己亥月值月害与月德天德合并亦止忌安抚边境选将训兵出师求医疗病馀皆不忌不与德神并如常例辰戌丑未月值除日相日与天德月德天德合月德合并止忌安抚边境选将训兵出师求医疗病馀皆不忌不与德神并凡所忌者则不注宜所宜者亦不注忌子午卯酉月值执日与月德月德合并凡所忌者则不注宜所宜者亦不注忌不与德合并如常例
按三煞为三合敌对劫煞为绝地灾煞为正冲月煞为尽地故忌同月破乂忌解除求医疗病破屋坏垣但三合缓于月建不若月破之不可解耳寅申巳亥月值收日然实为月令之长生寅申月又值六合生则不绝合则不劫即不与德愿并其吉已足胜凶故止忌军事疗病馀皆不忌而收日更不足言矣己亥月虽亦为长生然既非六合又值六害吉不抵凶而与德神并则吉胜故亦止忌军事疗病馀皆不忌否则如常例也辰戌丑未月值除日相日为本令旺相之辰其吉另有可取与德合并则又济以三合吉干不当复以绝论故亦止忌军事疗病馀皆不忌若不与德神并则吉凶仅足相抵故忌则不宜宜则不忌也子午卯酉月值执日正为本令绝地乃是真绝与德神并吉凶仅足相抵故忌则不宜宜则不忌不与德神并则止乎劫煞之凶故如常例也`},{header:"灾煞〈天火〉",slug:"灾煞〈天火〉",content:`忌同劫煞
又为天火忌苫葢
寅申巳亥月值开日辰戌丑未月值满日与天德月德天德合月德合并〈赦愿不得与灾煞并〉止忌安抚边境选将训兵出师求医疗病馀皆不忌寅申巳亥月不与德神并凡所忌者则不注宜所宜者亦不注忌辰戌丑未月不与德神并如常例子午卯酉月值破日从月破论
按灾煞为三合正冲其凶甚于劫煞故以寅申巳亥月开日之吉而非德无以解正冲之凶转不得与劫煞收日比辰戌丑未月值满日较劫煞之除日亦又次之子午卯酉月值月破更不可与劫煞之执日同语故比劫煞皆差一等是固灾煞之凶亦其地原无气无吉神助益故也`},{header:"月煞〈月虚〉",slug:"月煞〈月虚〉",content:`忌同劫煞
又为月虚忌修仓库开仓库出货财
卯酉月值六合与月德天愿并止忌安抚边境选将训兵出师求医疗病馀皆不忌不与德愿并凡所忌者则不注宜所宜者亦不注忌子午月值月害与月德合并凡所忌者则不注宜所宜者亦不注忌不与德合并如常例寅申巳亥月值闭日辰戌丑未月值平日与天德月德天德合月德合并如常例不与德合并诸事皆忌
按月煞之凶与劫煞同而所值之日则皆下一等卯酉月值危日虽亦值六合然非长生吉凶仅足相抵故与德愿并而后从德愿所宜否则不宜不忌是比劫煞寅申月之值六合者下一等也子午月既非六合又值六害与德合并吉凶仅足相抵故不宜不忌否则如常例是比劫煞己亥月之值月害者亦下一等也寅申巳亥月值闭日辰戌丑未月值平日闭日为月建之尽平日为月阴之尽月煞为三合之尽凶又逢凶是比劫煞子午卯酉月之正为本令绝辰者亦下一等葢劫煞之值令绝与平日之值天吏犹是一死一绝而月煞之值平闭则是两尽与灾煞遇月破等故与德神并而后如常例否则诸事皆忌也又按旧本劫煞止忌军事上官结婚姻出入兴贩灾煞止忌军事上表章上官月煞止忌宴㑹栽种牧养其义不伦且岁三煞与岁破同凶而可以吉制月三煞义本相通今为推类而区别之庶条理咸贯矣不忌伐木与危日同义`},{header:"月刑",slug:"月刑",content:`忌祈福求嗣上册进表章颁诏施恩封拜诏命公卿招贤举正直宣布政事庆赐赏贺宴㑹冠带行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移安床解除整容剃头整手足甲求医疗病裁制营建宫室修宫室缮城郭筑堤防兴造动土竖柱上梁修仓库鼓铸经络酝酿开市立劵交易纳财开仓库出货财修置产室开渠穿井安碓硙补垣塞穴修饰垣墙破屋坏垣栽种牧养纳畜破土安葬启攒○止不忌祭祀覃恩肆赦施恩惠恤孤惸行惠爱雪冤枉缓刑狱入学沐浴扫舍宇平治道涂伐木捕捉畋猎取鱼
巳月值平日相日六合与月德天德合天愿并止忌安抚边境选将训兵出师求医疗病馀皆不忌不与德愿并凡所忌者则不注宜所宜者亦不注忌寅月值平日相日六害辰酉亥月值建日丑戌月值收日与天德月德天德合月德合并凡所忌者则不注宜所宜者亦不注忌不与德合并如常例子月值平日天吏卯月值收日大时未申月值月破与德合并如常例不与德合并诸事皆忌午月值月厌从月厌论按月刑为月建刑伤之地故所忌与三煞同而其所值又皆建破平收之日惟巳月值相日六合吉凶足以相抵与德愿并则化凶为吉故从德愿所宜止忌军事疗病馀皆不忌不与德愿并则不宜不忌也寅月虽亦值相日然既非六合又值六害以及辰酉亥月之建日丑戌月之收日皆吉不胜凶助以德神然后吉凶相抵故与德神并而后不宜不忌否则皆如常例也若子月值平日天吏卯月值收日大时未申月值月破则皆凶又逢凶故与德神并而后如常例否则诸事皆忌也午月值月建月厌尤凶故从月厌论旧本止忌军事结婚姻牧养非是`},{header:"月害",slug:"月害",content:`忌祈福求嗣上册进表章庆赐赏贺宴㑹安抚边境选将训兵出师结婚姻纳采问名嫁娶进人口求医疗病修仓库经络酝酿开市立劵交易纳财开仓库出货财置产室牧养纳畜破土安葬启攒
卯酉月值除日守日丑未月值执日大时与天德月德并止忌安抚边境选将训兵出师求医疗病馀皆不忌不与二德并如常例辰戌月值闭日官日天吏与天德合月德合并凡所忌者则不注宜所宜者亦不注忌不与徳合并如常例子午月值月煞己亥月值劫煞寅月值月刑申月值平日各从重论
按月害为六合之冲故所忌仅与六合所宜同不与刑煞比庆赐赏贺则宴㑹之类也纳采问名则结婚姻之类也旧本并忌祈福上册出军疗病牧养等事亦恶相害之义修置产室重于牧养故并忌之然害虽不甚凶而非德不可解故卯酉月除日守日之吉亦止与丑未月之执日大时等必与德神并而后止忌军事疗病馀不忌否则如常例也辰戌月值天吏闭日其凶甚于大时故与德合并吉凶仅足相抵而不宜不忌否则亦如常例也子午月值月煞己亥月值劫煞寅月值月刑申月值平日其凶皆重于月害故从重论天吏之凶亦重于月害而不从天吏论者天吏不能该月害之所忌故也`},{header:"月厌〈地火〉",slug:"月厌〈地火〉",content:`忌祈福求嗣上册进表章颁诏施恩封拜诏命公卿招贤举正直宣布政事庆赐赏贺宴㑹冠带行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移远回安床解除整容剃头整手足甲求医疗病裁制营建宫室修宫室缮城郭筑堤防兴造动土竖柱上梁修仓库鼓铸经络酝酿开市立劵交易纳财开仓库出货财修置产室开渠穿井安碓硙补垣塞穴修饰垣墙平治道涂破屋坏垣伐木栽种牧养纳畜破土安葬启攒○止不忌祭祀覃恩肆赦施恩惠恤孤惸行惠爱雪冤枉缓刑狱入学沐浴扫舍宇捕捉畋猎取鱼
又为地火忌栽种修筑园圃
寅申月值成日丑未月值开日与月德天德合月德合并止忌行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶求医疗病般移远回栽种馀皆不忌不与德神并如常例辰戌月值定日己亥月值满日与天德月德月德合并凡所忌者则不注宜所宜者亦不注忌不与徳合并如常例子午月厌建㑹与天赦并如常例不与天赦并诸事皆忌卯酉月值月破灾煞虽与德合并仍诸事皆忌又正月甲戌二月乙酉五月丙午六月丁巳七月庚辰八月辛卯十一月壬子十二月癸亥为阴阳大㑹与月德并仍诸事皆忌又二月己卯三月戊辰四月己巳五月戊午八月己酉九月戊戌十月己亥十一月戊子为阴阳小㑹三月又为单阴四月又为纯阳九月又为孤阳十月又为纯阴亦诸事皆忌又三月庚辰九月甲戌为阴位四月癸亥十月丁巳为阴阳交破五月壬子十一月丙午为阴阳击冲六月癸丑十二月丁未为阳破阴冲二月己酉八月己卯为阴道冲阳亦诸事皆忌又四月丙午戊午十月壬子戊子为岁薄六月丙午戊午十二月壬子戊子为逐阵皆从月厌所忌四月丙午六月戊午亦不从德愿所宜正月辛酉七月乙卯为三阴诸事皆忌又正月甲寅二月乙卯三月甲辰四月丁巳己巳六月丁未己未七月庚申八月辛酉九月庚戌十月癸亥十二月癸丑为阳错除四月己巳为小㑹诸事皆忌外馀皆从建所忌六月己未亦不从德合所宜又正月庚戌二月辛酉三月庚申四月丁未己未六月丁巳己巳七月甲辰八月乙卯九月甲寅十月癸丑十二月癸亥为阴错除二月八月值月破六月十二月为大㑹诸事皆忌外馀俱从厌所忌六月己巳亦不从德合所宜五月丙午十一月壬子为阴阳俱错虽值月德仍诸事皆忌四月戊辰为绝阴十月戊戌为绝阳亦诸事皆忌
按月厌为阴建是阴之自旺而阳之对也故合建破所忌而兼忌之然阴不胜阳故其义虽自为一家而其凶亦不若月破之不可解寅申月为三合丑未月为生气再与德神并则吉胜矣故皆从德所宜而不从厌所忌犹忌行幸等事者恶阴盛也不与德神并则吉不抵凶故如常例也辰戌月虽亦为三合然阴阳始侵己亥月值满日又阴阳相逼行狠了戾孤辰殆无虚日故与德神并然后吉凶相抵而不宜不忌否则如常例也子午月厌建㑹则阴阳争五月丙午十一月壬子虽值月德然为阴阳大㑹丙壬只作建论不作德论惟天赦另有生意故与天赦并而后如常例否则诸事皆忌也卯酉月值灾破则显然冲击虽与德神并亦应诸事不宜矣又按旧历止忌出行嫁娶般移逺回于义固为未协淮南子历事明原谓厌日不可举百事则亦略举大义而未之深辨今逐月较量其轻重而区别之如此至大㑹小㑹阴位等日则皆从二建㑹合取义故皆与子午月例同阴阳交破阴阳击冲阳破阴冲阴道冲阳等日则皆从二建对冲取义故皆与卯酉月例同岁薄逐阵则取二建将合而先合始分而未分为义故与辰戌己亥月月厌例同德作建论不作德论故又与子午月例同三阴取厌破将并而先并为义故与卯酉月月厌例同阳建叠阳建为阳错阴建叠阴建为阴错故德作建论不作德论与厌建常例同子午月二建并又叠同建之干为阴阳俱错故德作建论不作德论与子午月月厌例同绝阴绝阳则从单阴孤阳更进一义又值月煞闭日所㑹之辰故三例皆诸事不宜馀详义例今通书惟四月己巳日凡事不宜馀日皆不载又四月辛巳癸巳日亦凡事不宜而乙巳丁巳如常例或系辛巳癸巳因己巳连及而误因丁巳阳错而讹或系四月五建亦如行狠了戾孤辰取义皆不可考然辛癸乙日既无义可推而辰戌亥月又无例可据考原所载确有精义故皆依考原订补近刻不足慿也`},{header:"厌对〈招摇〉",slug:"厌对〈招摇〉",content:`忌嫁娶
又为招摇忌取鱼乘船渡水
与天德月德天德合月德合天赦并则不忌〈天愿不得与厌对并〉子午月与月破并则尤忌
按厌对又为招摇皆以月厌之冲取义故所忌如此与德赦并则阴从阳故不忌与月破并则又为月建之冲故尤忌也`},{header:"大时〈大败 咸池〉",slug:"大时〈大败-咸池〉",content:`忌祈福求嗣上册进表章施恩封拜诏命公卿招贤举正直冠𢃄行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移安床解除求医疗病营建宫室修宫室缮城郭筑堤防兴造动土竖柱上梁修仓库开市立劵交易纳财开仓库出货财修置产室栽种牧养纳畜
又为咸池忌取鱼乘船渡水
寅申巳亥月值除日官日辰戌月值执日六合止忌安抚边境选将训兵出师馀皆不忌丑未月值执日六害与二德并亦止忌安抚边境选将训兵出师馀皆不忌不与二德并如常例子午卯酉月值收日子午月与月德合并酉月与月德并凡所忌者则不注宜所宜者亦不注忌不与德合并如常例卯月又值月刑从月刑论
按大时又名大败为三合败地故所忌如此寅申巳亥月值除日官日为月建旺辰辰戌月值执日六合太阳合月建不应以三合败气论故即不与德合赦愿并亦止忌军事馀皆不忌也丑未月值执日六害吉不抵凶与德神并则吉胜亦不应以败论故亦止忌军事否则如常例也子午卯酉月正为四时败气又值收日卯月又值月刑其凶甚于大时故同刑收论也`},{header:"游祸",slug:"游祸",content:`忌祈福求嗣解除求医疗病
与德合天赦并犹忌〈天愿不得与游祸并〉
按游祸日本不为凶第为三合临官故以过旺为祸而忌祈解医药之事与德赦并其旺如故故犹忌也`},{header:"天吏〈致死〉",slug:"天吏〈致死〉",content:`忌祈福求嗣上册进表章施恩封拜诏命公卿招贤举正直冠带行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移安床解除求医疗病营建宫室修宫室缮城郭筑堤防兴造动土竖柱上梁修仓库开市立劵交易纳财开仓库出货财修置产室栽种牧养纳畜
寅申巳亥月值危日与天德月德天德合月德合并止忌安抚边境选将训兵出师求医疗病馀皆不忌不与德合并如常例辰戌丑未月值闭日与德合赦愿并凡所忌者则不注宜所宜者亦不注忌不与德合赦愿并如常例午卯酉月值平日从平日论子月又值月刑从月刑论
按天吏又名致死为三合死地故所忌如此寅申巳亥月值危日吉不抵凶而与德合并则吉胜故止忌军事疗病馀皆不忌否则如常例也辰戌丑未月值闭日正当敛息之时与德神并吉凶仅足相抵故不宜不忌否则亦如常例也子午卯酉月值平日为真死子月又值月刑故从重者论也又按天吏之凶甚于大时第不为三合全局之冲故次于三煞非谓死之转轻于绝也旧本止忌上表章上官疗病失之逺矣`},{header:"死气",slug:"死气",content:`忌安抚边境选将训兵出师解除求医疗病修置产室栽种
与天德月德天德合月德合并〈天赦天愿不得与死气并〉止忌安抚边境选将训兵出师求医疗病馀不忌辰戌月值月厌虽与德合并犹忌
按死气为月建一阴始生而阳气始衰之地故所忌如此然皆与月建为三合再与德合并则益助其旺气故不忌与月厌并则阴盛实甚故犹忌也死神忌进人口牧养纳畜而死气不忌者其日为三合又为时阴故也`},{header:"小耗",slug:"小耗",content:`忌修仓库开市立劵交易纳财开仓库出货财与天德月德天德合月德合天愿并则不忌子午卯酉月值劫煞虽与德合并犹忌
按小耗为旧月破又为本月闭日之冲故所忌如此与德合天愿并则贪合忘冲故不忌与劫煞并则既耗而又逢绝故犹忌也`},{header:"天贼",slug:"天贼",content:`忌行幸遣使修仓库开仓库出货财
与德合并犹忌〈赦愿不得与天贼并〉
按天贼为月厌之收日故所忌如此与德合义不相属故与并犹忌`},{header:"四击",slug:"四击",content:`忌安抚边境选将训兵出师
与德合天愿并犹忌〈天赦不得与四击并〉
按四击为四时旺土之冲故所忌如此与德合天愿并而犹忌者慎战也`},{header:"四耗",slug:"四耗",content:`忌安抚边境选将训兵出师修仓库开市立劵交易纳财开仓库出货财
辰月与天德月德并寅申月与天德合并巳月与月德合并辰戌丑未月与三合并止忌安抚边境选将训兵出师馀不忌
按四耗日干支皆四时休气故所忌如此与德合三合并则干与支必有一遇生旺者矣故不忌也犹忌军事与四击同义`},{header:"四废",slug:"四废",content:`忌祈福求嗣上册进表章颁诏施恩封拜诏命公卿招贤举正直宣布政事庆赐赏贺宴㑹冠带行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移安床解除求医疗病裁制营建宫室修宫室缮城郭筑堤防兴造动土竖柱上梁修仓库鼓铸经络酝酿开市立劵交易纳财开仓库出货财修置产室开渠穿井安碓硙补垣塞穴修饰垣墙栽种牧养纳畜破土安葬启攒○止不忌祭祀覃恩肆赦施恩惠恤孤惸行惠爱雪冤枉缓刑狱入学沐浴整容剃头整手足甲扫舍宇平治道涂破屋坏垣伐木捕捉畋猎取鱼
与德合并犹忌与月破并诸事皆忌
按四废干支皆死气故所忌如此与德合并则德亦无气故犹忌与月破并则既废而又逢冲故诸事皆忌也旧忌无上官出行结婚姻疗病等事今补之于义始备`},{header:"四忌 四穷〈八龙 七鸟 九虎 六蛇〉",slug:"四忌-四穷〈八龙-七鸟-九虎-六蛇〉",content:`忌安抚边境选将训兵出师结婚姻纳采问名嫁娶安葬
四穷又忌进人口修仓库开市立劵交易纳财开仓库出货财
与月德天德合月德合并犹忌惟正月乙亥与天愿并止忌安抚边境选将训兵出师馀皆不忌
按四忌四穷合为八龙七鸟九虎六蛇义例谓阴阳首尾全数尽在于是夫兵凶器也非所以始万物终万物也婚嫁为人事之始葬埋为人事之终故并忌之四穷以令干居辰尾故又忌进人口等事此八日皆以旺极为凶故德神不能化解惟正月乙亥为天愿与月建为六合辰虽居终而日躔实始不可以尾论故止忌军事馀皆不忌旧本无四忌今依起例补之其义始备`},{header:"五虚",slug:"五虚",content:`忌修仓库开仓库出货财
与天德月德天德合月德合六合并则不忌〈天赦不得与五虚并天愿必是六合故不言而已在其中〉
按五虚乃四时五行绝气三合之日三合之绝气则凶绝气之三合未为凶也故第名之曰五虚而所忌如此与德合六合并则与旺气为合而并不可以绝气三合论矣故不忌也`},{header:"八风",slug:"八风",content:`忌取鱼乘船渡水
与天德月德天德合月德合六合并则不忌〈天赦不得与八风并〉
按八风所忌见义例与德合六合并则风以合而定矣故不忌也`},{header:"五墓",slug:"五墓",content:`忌冠带行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移安床解除求医疗病营建宫室修宫室缮城郭兴造动土竖柱上梁开市立劵交易修置产室栽种牧养纳畜破土安葬启攒
五月十一月与月德并则不忌
按五墓乃五行旺干临于墓库故所忌如此与月德并则为三合旺气发于天干而不可以墓论矣故不忌也不取德合者不同行也旧忌无冠带行幸上官疗病安葬等事今补之其义始备`},{header:"九空",slug:"九空",content:`忌进人口修仓库开市立劵交易纳财开仓库出货财
寅申月值满日子午卯酉月值开日与月德天德合月德合并则不忌己亥月值月厌从月厌论辰戌丑未月值破日从月破论
按九空为三合库地之冲故所忌如此与德合并则支以干合而忘冲故不忌也若值月厌月破其凶甚于九空故从重论`},{header:"九坎〈九焦〉",slug:"九坎〈九焦〉",content:`忌补垣塞穴取鱼乘船渡水
又为九焦忌鼓铸栽种修筑园圃
与德合并犹忌〈赦愿不得与九坎并〉
按九坎九焦忌见义例与德合义不相属故与并犹忌非谓其日之凶德神不能化解也土符地囊归忌血忌仿此`},{header:"土符 地囊",slug:"土符-地囊",content:`忌营建宫室修宫室缮城郭筑堤防兴造动土修仓库修置产室开渠穿井安碓硙补垣修饰垣墙平治道涂破屋坏垣栽种破土
与德合赦愿并犹忌`},{header:"兵禁",slug:"兵禁",content:`忌安抚边境选将训兵出师
与德合赦愿并犹忌
按兵禁取逆义故忌军事虽与德合赦愿并无解于其逆也故犹忌大煞仿此`},{header:"大煞",slug:"大煞",content:`忌安抚边境选将训兵出师
与德合并犹忌〈赦愿不得与大煞并〉
按旧本并忌进人口纳财竖柱上梁其义不伦故删`},{header:"归忌",slug:"归忌",content:`忌般移逺回
与德合赦愿并犹忌`},{header:"血忌",slug:"血忌",content:`忌针刺
与德合赦愿并犹忌`},{header:"往亡 气往亡",slug:"往亡-气往亡",content:`忌上册进表章颁诏诏命公卿招贤宣政事行幸遣使安抚边境选将训兵出师上官赴任临政亲民嫁娶进人口般移求医疗病捕捉畋猎取鱼
与德合赦愿并犹忌
按往亡本不为凶第取三合溺于所生而无克制之义有往而不返之象故所忌如此然世俗避之惟谨虽值德合赦愿不能无疑故与并犹忌旧本并忌施恩封拜而不忌招贤宣政事今按往亡与封拜无涉应不忌凡宜出行之日方宜招贤宣政事往亡既忌出行自应并忌之也`},{header:"复日 重日",slug:"复日-重日",content:`忌破土安葬启攒
与天德月德天德合月德合天赦六合并〈天愿必是六合故不言而已在其中〉则不忌亦不注宜
复日又宜裁制
按旧本重复日忌为凶事利为吉事故忌破土安葬启攒然其义亦泛矣夫葬乘生气经有明文今选择家亦以无禄四废为凶日若复日则皆令星孟仲月又皆建禄其吉自无可疑己亥为阴阳尽日亦大率云然而推以十二月参以三合此二日无皆凶之理乃惟此之忌而不避刑厌三煞之凶且所宜又止于鸣吠日而舍德赦六合之吉而不知用是与嫁娶之仅取不将而不取德合惟忌章光无翘而不忌刑冲破害等也婚葬为人事之始终而俗论拘忌若此深为不便顾相传已久遽去之转不足以牖世故遇鸣吠则忌遇德赦六合则不忌识者自能辨之亦不注宜聊以从俗云尔并详利用卷`},{header:"五离",slug:"五离",content:`忌庆赐赏贺宴㑹结婚姻纳采问名立劵交易与天德月德天德合月德合天赦三合六合并则不忌
按五离为五合之冲故所忌如此与德合天赦三合六合并则其吉大于五合而非五离所能离矣故不忌也五合不宜庆赐赏贺纳采问名而五离则并忌之者盖庆赐赏贺之事大于宴㑹纳采问名之事大于结婚姻五合之吉可小事不可大事五离不宜其小则大者可知也若嫁娶之事则原不取五合自亦不忌五离矣`},{header:"八专",slug:"八专",content:`忌安抚边境选将训兵出师结婚姻纳采问名嫁娶与德合并犹忌与天愿并止忌安抚边境选将训兵出师馀不忌
按八专自以干支取义与德合义不相属故与并犹忌触水龙专日伐日仿此又按八专之忌婚嫁取阴阳同居而无别为义天愿五月丁未十一月癸丑丁乃午也非未也癸乃子也非丑也是相合而有别矣故不忌婚嫁也`},{header:"触水龙",slug:"触水龙",content:`忌取鱼乘船渡水
与德合天愿并犹忌〈触水龙无天赦日〉`},{header:"专日 伐日",slug:"专日-伐日",content:`忌安抚边境选将训兵出师
与德合赦愿并犹忌`},{header:"天刑 朱雀 白虎 天牢 元武 勾陈",slug:"天刑-朱雀-白虎-天牢-元武-勾陈",content:`与凶神并则从所忌与吉神并则从所宜
按旧本六黑道忌兴众务而仍从吉神所宜并无专忌之事若选时则诸事皆忌也并详六黄道`},{header:"无禄日",slug:"无禄日",content:`止注祭祀解除沐浴整容剃头整手足甲扫舍宇修饰垣墙平治道涂破屋坏垣伐木馀事不注
与天德月德并则不以无禄论寅年月甲辰日卯年月乙巳日巳年月丙申戊戌日午年月丁亥己丑日申年月庚辰日酉年月辛巳日亥年月壬申日岁月填实禄空亦不以无禄论雨水后壬申日榖雨后辛巳日小满后庚辰日大暑后丁亥己丑日处暑后丙申戊戌日霜降后乙巳日小雪后甲辰日太阳填实禄空亦不以无禄论甲巳年亥卯未月己丑日乙庚年己酉丑月乙巳日丙辛年寅午戌月辛巳日丁壬年申子辰月丁亥日岁德合月德合所㑹之辰亦不以无禄论乙庚年亥月庚辰日丙辛年巳月丙申日丁壬年寅月壬申日戊癸年申月戊戌日天徳合歳徳所㑹之辰亦不以无禄论甲年月甲辰日乙年月乙巳日丙年月丙申日丁年月丁亥日戊年月戊戌日巳年月己丑日庚年月庚辰日辛年月辛巳日壬年月壬申日歳徳岁徳合天干三朋亦不以无禄论惟癸亥为干支俱尽日虽值天月二徳歳月太阳填实歳徳㑹合仍以无禄论
按无禄日以干禄落旬空故诸事不宜惟祭祀解除等事不嫌其空故遇有所宜之神则不忌与天徳月徳并则三合成禄旺之局月建太阳填实则一月皆禄旺之宫至于岁建填实岁徳㑹合尤以岁君为主而旬空不足道矣故不以无禄论也癸亥干支俱尽与上朔晦日同义又交中气日岁徳岁徳合日每年不同故月表与万年书俱不论无禄日临时选用详万年书铺注条例`},{header:"反支",slug:"反支",content:`忌上册进表章陈词讼
与徳合赦愿并犹忌
见义例以下诸日皆毎年不同亦月表万年书所不能载临时选用详万年书铺注条例`},{header:"上朔 四离 四绝 晦日",slug:"上朔-四离-四绝-晦日",content:`止不忌祭祀解除沐浴整容剃头整手足甲补垣塞穴扫舍宇修饰垣墙平治道涂破屋壊垣伐木馀事皆忌与徳合赦愿并犹忌以下并同
按上朔为阴阳与岁徳俱尽之日四离四绝为二气五行分判之日晦为月尽之日故诸事不宜惟祭祀解除等事或以事神而不敢禁或以除旧而不为嫌故遇有所宜之神则不忌晦日虽不与上朔同凶然亦止宜祭祀等事馀事虽不忌亦不注宜也又上朔以年干取义晦日反支以月朔取义四离四绝以节气取义皆与徳合赦愿义不相属故与并犹忌也下仿此`},{header:"冬至 夏至 春分 秋分",slug:"冬至-夏至-春分-秋分",content:`不注上册进表章庆赐赏贺宴㑹行幸遣使安抚边境选将训兵出师上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移开市立劵交易捕捉畋猎取鱼冬至日又不注伐木
按二至之日阴阳争二分之日厌建对故虽吉日亦不注此数事冬至又不注伐木与开日同义`},{header:"土王用事",slug:"土王用事",content:`忌营建宫室修宫室缮城郭筑堤防兴造动土修仓库修置产室开渠穿井安碓硙补垣修饰垣墙平治道涂破屋壊垣栽种破土
义同土府`},{header:"伏社",slug:"伏社",content:`忌沐浴
按沐浴宜申酉亥子日伏为金伏是申酉之反也社为土旺是亥子之反也故忌沐浴`},{header:"朔弦望",slug:"朔弦望",content:`忌求医疗病
按朔为日月同度弦为近一逺三望为日月相对犹建破平收之义也故忌疗病`},{header:"月忌日",slug:"月忌日",content:"止注祭祀宴㑹沐浴整容剃头整手足甲求医疗病补垣扫舍宇修饰垣墙平治道涂馀事不注"},{header:"十五日",slug:"十五日",content:`忌求医疗病
义同望日`},{header:"人神所在日",slug:"人神所在日",content:"十二日在发际 十五日在遍身忌剃头 一日在足大指 六日在手 十五日在遍身 十九日在足 二十一日在手小指 二十三日在肝及足忌整手足甲"},{header:"长星 短星",slug:"长星-短星",content:"忌进人口裁制经络开市立劵交易纳财纳畜见附录"},{header:"百忌日",slug:"百忌日",content:`甲日忌开仓库出货财
乙日忌栽种
丁日忌剃头
庚日忌经络
辛日忌醖酿
壬日忌开渠
丑日忌冠带
寅日忌祭祀
卯日忌穿井
巳日忌出行
午日忌苫葢
未日忌求医疗病
申日忌安床
酉日忌宴㑹
亥日忌嫁娶
以上所忌`}]},{path:"/reference/gods/godGoodBad/good.html",title:"所宜",pathLocale:"/",contents:[{header:"所宜",slug:"所宜",content:`参考
参考《钦定协纪辨方书》卷十`},{header:"天德 月德 天德合 月德合",slug:"天德-月德-天德合-月德合",content:`宜祭祀 祈福 求嗣 上册进表章〈上册受封上表章同〉颁诏 覃恩 肆赦 施恩封拜〈袭爵受封同后仿此〉诏命公卿 招贤 举正直 施恩惠 恤孤惸 宣政事 行惠爱 雪冤枉 缓刑狱 庆赐 赏贺 宴㑹 行幸 遣使 安抚边境 选将训兵 出师 上官赴任 临政亲民 结婚姻 纳采问名 嫁娶 般移 解除 求医疗病 裁制 营建宫室 缮城郭 兴造动土 竖柱上梁 修仓库 栽种 牧养 纳畜 安葬
忌畋猎取鱼
按天德月德乃月建三合旺气天德合月德合与旺气作五合皆上吉之日故所宜应如此忌畋猎取鱼者恐伤生气也旧本天德止宜兴土工营宫室缮城郭月德并宜上官宴乐天德合宜祭祀祈福覃恩肆赦缓刑狱选将训兵月德合并宜上册进表章营建宫室殊于名义不合明原引五行论则曰月德合日百福并集又不及天月二德及天德合可见其为略举大意而非有义例也夫王者事神行政庆赏刑威与夫分职设官体国经野以及宫室城郭衣服居处所以谋室家之安而锡兆庶之福者无非体天心而行时令故因义起例罄无不宜庶名与事允协矣`},{header:"月空",slug:"月空",content:"宜上表章"},{header:"天恩",slug:"天恩",content:`宜覃恩肆赦施恩惠恤孤惸布政事行惠爱雪冤枉缓刑狱庆赐赏贺宴㑹
与驿马天马建日并宜颁诏宣政事与修造吉神并尤宜兴作
按旧本以天恩为上吉日而所宜止于覃恩庆赏等事葢其日止取一定之干支而不参诸月令其力轻㣲不得与德合赦愿比也又按旧本谓天德岁德月德天德合岁德合月德合天恩天赦母仓所㑹之辰并宜修营㑹之云者则非专指天恩故曰与修造吉神并尤宜兴作`},{header:"天赦",slug:"天赦",content:`宜祭祀祈福求嗣上册进表章颁诏覃恩肆赦施恩封拜诏命公卿招贤举正直施恩惠恤孤惸宣政事行惠爱雪冤枉缓刑狱庆赐赏贺宴㑹行幸遣使安抚边境选将训兵上官赴任临政亲民结婚姻纳采问名嫁娶般移解除求医疗病裁制营建宫室缮城郭兴造动土竖柱上梁修仓库栽种牧养纳畜安葬忌畋猎取鱼
按天赦为天地合德又为四时旺辰其力甚大故所宜与二德同旧本止宜覃恩肆赦缓刑狱特顾名而未思义耳不用以出师与忌畋猎取鱼同意`},{header:"母仓",slug:"母仓",content:`宜纳财栽种牧养纳畜
与月恩四相开日并宜修仓库
按旧本以母仓为上吉日而所宜止于纳财栽种牧养纳畜葢其日系四时休气又不得与天恩比也又按母仓春月亥日吉子日次之夏月寅日吉卯日次之冬月申日吉酉日次之葢亥寅申皆令星之长生而子卯酉为令星之败地也至秋月之辰戌丑未日土王后之己午日则衰旺各有不同是又不可以不辨`},{header:"天愿",slug:"天愿",content:`宜祭祀祈福求嗣上册进表章颁诏覃恩肆赦施恩封拜诏命公卿招贤举正直施恩惠恤孤惸宣政事行惠爱雪冤枉缓刑狱庆赐赏贺宴㑹行幸遣使安抚边境选将训兵上官赴任临政亲民结婚姻纳采问名嫁娶进人口般移裁制营建宫室缮城郭兴造动土竖柱上梁修仓库经络酝酿开市立劵交易纳财栽种牧养纳畜安葬
按天愿为太阳加令星其吉最大故所宜与二德同不用以出师者兵阴象兵吉在太阳后四辰不用太阳日也宜葬事则专取太阳日也不用以解除疗病者疗解无取合义也何以取二德合彼乃德之合气非两相合也又按二德乃三合之全气发于天干德合为其合气天赦天愿皆合干支取义其气纯其力大乃日之最吉者能解诸凶故特表之旧本谓天愿宜纳财敦睦亲族葢其例二十四字已误十三宜乎失其义也`},{header:"月恩 四相 时德",slug:"月恩-四相-时德",content:`宜祭祀祈福求嗣施恩封拜举正直庆赐赏贺宴㑹行幸遣使上官赴任临政亲民结婚姻纳采问名般移解除求医疗病裁制修宫室缮城郭兴造动土竖柱上梁纳财开仓库出货财栽种牧养
与驿马天马并宜诏命公卿招贤
按月恩四相时德皆月建所生之日所宜应同旧本月恩宜祭祀上官赴任结婚姻般移修造动土纳财四相宜行幸遣使般移缮城郭修造动土栽种牧养时德宜施恩封拜庆赐赏贺宴㑹其义不伦今按月建所生为相气其吉大于母仓我生为子孙其吉显于福德观其㑹通而推其义例故所宜应如此`},{header:"阳德 阴德",slug:"阳德-阴德",content:`宜施恩惠恤孤惸行惠爱雪冤枉缓刑狱
按阳德阴德为乾坤纳甲取天地生成之义而以月配爻义不甚切旧本谓阳德宜结婚姻开市交易阴德宜举正直行惠爱雪冤枉缓刑狱亦无义例可推今按天地之大德曰生则施恩行惠等事庶与名义相称`},{header:"王日",slug:"王日",content:"宜颁诏覃恩肆赦施恩封拜诏命公卿招贤举正直施恩惠恤孤惸宣政事行惠爱雪冤枉缓刑狱庆赐赏贺宴㑹行幸遣使安抚边境选将训兵上官赴任临政亲民裁制"},{header:"官日 守日 相日",slug:"官日-守日-相日",content:`宜袭爵受封上官赴任临政亲民
守日又宜安抚边境`},{header:"民日",slug:"民日",content:`宜宴㑹结婚姻纳采问名进人口般移开市立劵交易纳财栽种牧养纳畜
按坛经专以此五日为命将登坛拜爵上官之吉日通书止宜施恩封拜上官赴任临政亲民今以义推之则五日所宜应各不同王日为临官之辰其吉大于月建又居四时之首其吉不减天恩故所宜应如此不用以出师者不欲从我始也官日守日相日旧说可从袭爵受封义同封拜在臣下宜云尔也守日为四时旺土安抚边境则守土所宜急者民日为令星所生所宜应同时德然既以民日名则上官等事义当另有取也`},{header:"三合",slug:"三合",content:`宜庆赐赏贺宴㑹结婚姻纳采问名嫁娶进人口裁制修宫室缮城郭兴造动土竖柱上梁修仓库经络酝酿立劵交易纳财安碓硙纳畜
又辰戌丑未日为三合墓库所宜如前寅申巳亥日为三合长生所宜并同母仓子午卯酉日为三合帝旺所宜并同王日
按日之吉者莫如三合天月二德皆从三合取义成定之吉亦由三合生也然三合皆吉而大小不同建为局始定为局中成为局终三合从建取故三合止有二日建在四生日者则三合一为旺一为墓建在四旺日者则三合一为墓一为生建在四墓日者则三合一为生一为旺其为墓日者则取三合之吉足矣其为生旺日者则土旺之吉当并取也故区而别之又三合即成定日而取义各有不同故分属各条之下若义有兼取者则又不嫌其并见也`},{header:"临日",slug:"临日",content:"宜上册进表章上官赴任临政亲民陈词讼"},{header:"驿马〈天后〉",slug:"驿马〈天后〉",content:`宜行幸遣使般移
与天恩并宜颁诏宣政事与月恩四相时德并宜诏命公卿招贤
又为天后宜求医疗病
按驿马天马皆第取行远之义旧本谓驿马宜封拜官爵诏命公卿出行赴任移徙天马宜颁诏封拜招贤宣政事远行出征则失其义矣今以其日止宜行幸遣使般移与覃恩吉日并而后宜颁诏与封拜举正直吉日并而后宜诏命公卿招贤与布政事吉日并而后宜宣政事庶为允协天后见义例`},{header:"天马",slug:"天马",content:`宜行幸遣使般移
与天恩并宜颁诏宣政事与月恩四相时德并宜诏命公卿招贤
义见驿马`},{header:"建日〈兵福〉",slug:"建日〈兵福〉",content:`宜施恩封拜诏命公卿招贤举正直行幸遣使上官赴任临政亲民
与天恩并宜颁诏宣政事
又为兵福宜安抚边境选将训兵出师
按建日与王官同义旧本止宜施恩封拜出行夫举正直之与封拜遣使之与行幸事同一例故增之诏命公卿招贤颁诏宣政事义见驿马上施则下受故并宜上官赴任临政亲民兵福见义例`},{header:"除日〈吉期 兵宝〉",slug:"除日〈吉期-兵宝〉",content:`宜解除沐浴整容剃头整手足甲求医疗病扫舍宇又为吉期宜施恩封拜举正直行幸遣使上官赴任临政亲民
十月与天马并宜诏命公卿招贤〈驿马不得与吉期并〉
又为兵宝宜安抚边境选将训兵出师
按旧本除日宜解除求医疗病扫舍宇取除义也沐浴等事亦除旧取新之义故并宜之吉期兵宝义取旺辰故所宜同建日旧谓吉期宜兵事葢兵宝之误又谓宜结婚姻于义无取故删`},{header:"满日〈天巫 福德〉",slug:"满日〈天巫-福德〉",content:`宜进人口裁制修仓库经络开市立劵交易纳财开仓库出货财补垣塞穴
又为天巫宜祭祀祈福
又为福德宜上册进表章庆赐赏贺宴㑹修宫室缮城郭
按满取丰豫之义故所宜如此天巫见义例福德义同时德具体而微故止宜上册数事旧本无宴㑹然未有宜庆赏而不宜宴㑹者又谓天巫宜疗病与满日所忌自相抵牾故删`},{header:"平日",slug:"平日",content:`宜修饰垣墙平治道涂
义取诸平`},{header:"定日〈时阴〉",slug:"定日〈时阴〉",content:`宜冠带
又为时阴宜运谋算画计策
按定日为三合之中宜冠带者既取其成局又取其方中而未昃之义也时阴旧宜睦子孙㑹亲友于义不合故删`},{header:"执日",slug:"执日",content:`宜捕捉
霜降后立春前宜畋猎雨水后立夏前宜取鱼义取诸执且顺时也`},{header:"破日",slug:"破日",content:`宜求医疗病破屋坏垣
义取诸破`},{header:"危日",slug:"危日",content:`宜安抚边境选将训兵安床
立冬后立春前宜伐木霜降后立春前宜畋猎雨水后立夏前宜取鱼
按危日取安为义故宜安床然安不忘危则莫大于安抚训练之事伐木畋猎取鱼则以阴过盛而物当杀也各以其节气者顺时也`},{header:"成日〈天喜 天医〉",slug:"成日〈天喜-天医〉",content:`宜入学安抚边境般移筑堤防开市
又为天喜宜施恩封拜举正直庆赐赏贺宴㑹行幸遣使上官赴任临政亲民结婚姻纳采问名嫁娶五月与天马并宜诏命公卿招贤〈驿马不得与天喜并〉
乂为天医宜求医疗病
按成为合局之终开为生气之始故其日宜入学原始要终之义也宜安抚边境者功成而永奠也般移筑堤防开市皆取成义天喜旧宜封拜自宜上官义同建日`},{header:"收日",slug:"收日",content:`宜进人口纳财捕捉纳畜
霜降后立春前宜畋猎雨水后立夏前宜取鱼与月恩四相时德并宜修仓库
义取诸收无修造义故必与月恩四相时德并而后宜修仓库若开日则虽宜修造不得与收日并若德合赦愿则自宜修仓库又不待与收日并也
母仓义亦如此`},{header:"开日〈时阳 生气〉",slug:"开日〈时阳-生气〉",content:`宜祭祀祈福求嗣上册进表章颁诏覃恩肆赦施恩封拜诏命公卿招贤举正直施恩惠恤孤惸宣政事行惠爱雪冤枉缓刑狱庆赐赏贺宴㑹入学行幸遣使上官赴任临政亲民般移解除求医疗病裁制修宫室缮城郭兴造动土竖柱上梁开市修置产室开渠穿井安碓硙栽种牧养
忌伐木畋猎取鱼破土安葬启攒
按开日一阳始生故又为时阳又为生气其日最吉旧本所宜无祭祀祈福求嗣覃恩拜官等事于义未偹故补之不及婚事者无合义也忌伐木渔猎者恐伤生气也忌葬事从俗也`},{header:"闭日",slug:"闭日",content:`宜筑堤防补垣塞穴
义取诸闭`},{header:"兵吉",slug:"兵吉",content:"宜安抚边境选将训兵出师"},{header:"六合",slug:"六合",content:`宜宴㑹结婚姻嫁娶进人口经络酝酿立劵交易纳财纳畜安葬
与月恩四相时德并宜修仓库
按六合之吉不减三合旧本止宜宴㑹结婚姻立劵交易今以义推之所宜当如此宜葬事见天愿宜修仓库见收日`},{header:"六仪",slug:"六仪",content:"宜临政亲民"},{header:"五富",slug:"五富",content:`宜经络酝酿开市立劵交易纳财开仓库出货财栽种牧养纳畜
与月恩四相时德并宜修仓库
旧本止宜开市开仓库纳财今按其日有生义又有合义故所宜当如此`},{header:"天仓",slug:"天仓",content:`宜进人口纳财纳畜
与月恩四相开日并宜修仓库〈时德不得与天仓并〉
义同收日然因合而名仓故不用以捕捉`},{header:"不将",slug:"不将",content:"宜嫁娶"},{header:"要安 敬安",slug:"要安-敬安",content:"宜安神"},{header:"玉宇 金堂",slug:"玉宇-金堂",content:"宜修祠宇"},{header:"普䕶 福生 圣心",slug:"普䕶-福生-圣心",content:"宜祭祀祈福"},{header:"益后 续世",slug:"益后-续世",content:`宜祭祀祈福求嗣
九神所宜见义例`},{header:"解神",slug:"解神",content:`宜上表章陈词讼解除沐浴整容剃头整手足甲求医疗病
旧本止宜上表章陈词讼解除今按沐浴以下等事皆解除类也况破日宜疗病而解神吉于月破故并宜之`},{header:"除神",slug:"除神",content:`宜解除沐浴整容剃头整手足甲求医疗病扫舍宇
义同除日`},{header:"五合",slug:"五合",content:"宜宴㑹结婚姻立劵交易"},{header:"宝日 义日 制日",slug:"宝日-义日-制日",content:`与吉神并宜安抚边境选将训兵出师
按旧本谓其日宜军事然至用事则皆不从葢其义太泛故必与所宜吉神并而后宜之若专日伐日则不宜矣与驿马天马之与吉神并而后宜颁诏者同意`},{header:"青龙 明堂 金匮 宝光 玉堂 司命",slug:"青龙-明堂-金匮-宝光-玉堂-司命",content:`与吉神并则从所宜与凶神并则从所忌
按六黄道以位置得宜为吉犹秩叙典礼无往不宜也旧本谓宜修宫室缮城郭结婚姻进人口则无义例可推今选时之法谓诸事皆宜而无专宜之事六黑道亦无专忌之事当以时例为断`},{header:"鸣吠",slug:"鸣吠",content:"宜破土安葬"},{header:"鸣吠对",slug:"鸣吠对",content:"宜破土启攒"},{header:"亥子日",slug:"亥子日",content:`宜沐浴
取水旺也`},{header:"午申日",slug:"午申日",content:`立冬后立春前宜伐木
午木死申木绝也
以上所宜`}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],j="update-vuepress-plugin-full-text-search2-search-index";var M=y(I),z=T(()=>{const n=new Map;for(const e of M.value)n.set(e.path,e);return n});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[j]=n=>{M.value=n});function q(n){const e=y([]);let o=null;return P(n,()=>{o&&clearTimeout(o),o=setTimeout(a,100)}),e;function a(){const i=n.value.toLowerCase().trim();if(!i){e.value=[];return}const l=new Map,t=new Set;for(const r of M.value)for(const s of K(r,i)){t.add(s.parentPageTitle);let u=l.get(s.parentPageTitle);u||(u=[],l.set(s.parentPageTitle,u)),u.push(s)}const c=[...t].sort((r,s)=>{const u=l.get(r);return l.get(s).length-u.length});e.value=[...l].flatMap(([,r])=>r).sort((r,s)=>r.parentPagePriority-s.parentPagePriority||c.indexOf(r.parentPageTitle)-c.indexOf(s.parentPageTitle)||r.priority-s.priority)}}function*K(n,e){const o=D(n.title,e);if(o){yield{path:n.path,parentPageTitle:L(n),title:n.title,display:o,page:n,content:null,parentPagePriority:1,priority:1};return}for(const a of n.contents){const i=D(a.header,e);if(i){yield{path:n.path+(a.slug?`#${a.slug}`:""),parentPageTitle:L(n),title:n.title,display:i,page:n,content:null,parentPagePriority:10,priority:2};continue}const l=D(a.content,e);l&&(yield{path:n.path+(a.slug?`#${a.slug}`:""),parentPageTitle:L(n),title:n.title,display:[{type:"header",str:`${a.header}
`},...l],page:n,content:null,parentPagePriority:10,priority:10})}}function L(n){const e=n.path.split("/");let o="/";return e[1]&&(o=`/${e[1]}/`),(z.value.get(o)||n).title}function D(n,e){const o=[];let a=0;const i=n.toLowerCase().replace(/\s/gu," ");let l=0,t=i.indexOf(e,l);if(t<0)return null;for(;t>=0;){const r=t+e.length;if(c(n.slice(l,t),"normal"),c(n.slice(t,r),"highlight"),l=r,t=i.indexOf(e,l),a>100)break}return c(n.slice(l),"normal"),o.filter(r=>r.str);function c(r,s){let u=r;s==="normal"&&u.length>100&&a===0&&(u=`… ${u.slice(-10)}`);let m=!1;if(a+u.length>100){if(o.some(p=>p.type==="ellipsis"))return;u=u.slice(0,Math.max(100-a,1)),m=!0}o.push({type:s,str:u}),a+=u.length,m&&(o.push({type:"ellipsis",str:" …"}),a+=2)}}const F={},$=E({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>F}},setup(n){const{locales:e}=U(n),o=y(""),a=y(!1),i=y(-1),l=q(o),t=T(()=>o.value&&a.value&&l.value.length),c=O(),r=H(),s=T(()=>e.value[r.value]??{});function u(){if(!t.value)return;let d=i.value-1;d<0&&(d=l.value.length-1),p(d)}function m(){if(!t.value)return;let d=i.value+1;d>=l.value.length&&(d=0),p(d)}function p(d){i.value=d}function v(){i.value=-1}function x(d){if(!t.value)return;const Y=l.value[d];Y&&c.push(Y.path)}return{query:o,focused:a,focusIndex:i,suggestions:l,activeSuggestion:t,onUp:u,onDown:m,focus:p,unfocus:v,go:x,locale:s}}});const Z={class:"search-box",role:"search"},V=["placeholder"],R=["onMousedown","onMouseenter"],W=["href"],J={key:0,class:"parent-page-title"},X={class:"suggestion-row"},Q={class:"page-title"},nn={class:"suggestion-content"};function en(n,e,o,a,i,l){return g(),h("div",Z,[w(f("input",{ref:"input","onUpdate:modelValue":e[0]||(e[0]=t=>n.query=t),"aria-label":"Search",class:b({focused:n.focused}),placeholder:n.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:e[1]||(e[1]=()=>n.focused=!0),onBlur:e[2]||(e[2]=()=>n.focused=!1),onKeyup:[e[3]||(e[3]=G(t=>n.go(n.focusIndex),["enter"])),e[4]||(e[4]=G((...t)=>n.onUp&&n.onUp(...t),["up"])),e[5]||(e[5]=G((...t)=>n.onDown&&n.onDown(...t),["down"]))]},null,42,V),[[N,n.query]]),n.activeSuggestion?(g(),h("ul",{key:0,class:"suggestions",onMouseleave:e[7]||(e[7]=(...t)=>n.unfocus&&n.unfocus(...t))},[(g(!0),h(B,null,k(n.suggestions,(t,c)=>(g(),h("li",{key:c,class:b(["suggestion",{focused:c===n.focusIndex}]),onMousedown:r=>n.go(c),onMouseenter:r=>n.focus(c)},[f("a",{href:t.path,onClick:e[6]||(e[6]=_(()=>{},["prevent"]))},[t.parentPageTitle&&(!n.suggestions[c-1]||n.suggestions[c-1].parentPageTitle!==t.parentPageTitle)?(g(),h("div",J,S(t.parentPageTitle),1)):C("v-if",!0),f("div",X,[f("div",Q,S(t.title||t.path),1),f("div",nn,[(g(!0),h(B,null,k(t.display,(r,s)=>(g(),h("span",{key:s,class:b(r.type)},S(r.str),3))),128))])])],8,W)],42,R))),128))],32)):C("v-if",!0)])}const ln=A($,[["render",en],["__scopeId","data-v-c13c90dc"],["__file","SearchBox.vue"]]);export{ln as default};
