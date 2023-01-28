import{a as E}from"./app-1709fb4e.js";import{r as y,h as T,w as C,c as H,a1 as w,B as A,_ as N,V as g,W as h,a2 as O,a3 as _,X as f,a4 as G,a5 as b,a6 as k,a7 as v,a8 as Y,a9 as S,aa as I}from"./framework-54e49b68.js";const z=[{path:"/",title:"项目主页",pathLocale:"/",contents:[]},{path:"/api/",title:"API",pathLocale:"/",contents:[{header:"API",slug:"api",content:"此处会进行各种类的说明"}]},{path:"/api/branch.html",title:"Branch 地支类",pathLocale:"/",contents:[{header:"Branch 地支类",slug:"branch-地支类",content:`属性或方法
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
返回地支字符串 string 静态方法 static method getNames()
返回所有地支字符串列表 string[]`}]},{path:"/api/c8God.html",title:"C8God 四柱神煞类",pathLocale:"/",contents:[{header:"C8God 四柱神煞类",slug:"c8god-四柱神煞类",content:`(char8ex插件) 属性或方法
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
返回五行属性字符串 string 静态方法 static method getNames()
返回天干字符串列表 string[]`}]},{path:"/api/god.html",title:"God 神煞类",pathLocale:"/",contents:[{header:"God 神煞类",slug:"god-神煞类",content:`（theGods插件）
通过theGods对象所取得的神煞，都是一个God对象，其包含以下属性： 属性或方法
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
number year
年份 number month
月份 1 ~ 12 number day
日期 1 ~ 31 number dayOfWeek
周几，0 ~ 6， 0代表周日 number hour
小时 0 ~ 23 number minute
分 0 ~ 59 number second
秒 0 ~ 59 number millis
毫秒 0 ~ 999 number valueOf()
返回Date对象的valueOf(), 即时间戳 number toString()
返回当前 Date对象的toUTCString() + 阴历的格式化后的日期时间: 例“Wed, 24 Aug 2022 14:50:51 GMT (二〇二二年七月廿七亥時)” string`}]},{path:"/api/lunisolarFact.html",title:"lunisolar 工厂函数",pathLocale:"/",contents:[{header:"lunisolar 工厂函数",slug:"lunisolar-工厂函数",content:""},{header:"lunisolar()",slug:"lunisolar",content:`用于创建一个Lunisolar实例对象：
lunisolar(date?: string | number | Date | Lunisolar, config?: ConfigType): Lunisolar`},{header:"lunisolar.fromLunar()",slug:"lunisolar-fromlunar",content:`用于通过阴历创建一个Lunisolar实例对象：
具体用法请参考文档：解析-阴历反查
type FromLunarData = { year?: number | string // 该年正月初一所在公历年的年份，可以是字符串，默认值为当前日期的年份 month: number | string // 阴历月份，可以是字符串，必填, 当月份数大于100时，表明时闰月，如闰4月，可输入104 day: number | string // 阴历日，可以是字符串，必填 hour?: number | string // 时辰索引值或时辰名，默认为0, 即子时。设置时辰后，返回的小时为该时辰的中间时间，如寅时，会返回4点正的时间。 isLeapMonth?: boolean // 指明月份是否闰月，默认为false, 当month设为大于100的数时，会无视此设置
} lunisolar.fromLunar(lunarData: FromLunarData, config: ConfigType): Lunisolar`},{header:"lunisolar.config()",slug:"lunisolar-config",content:`更改全局配置
方法会返回lunisolar以便链式操作
interface ConfigType { changeAgeTerm: number | null // 换岁节气 lang: string // 使用语言包的名称
}
lunisolar.config(config: ConfigType): typeof lunisolar`},{header:"lunisolar.extend()",slug:"lunisolar-extend",content:`加载插件
方法会返回lunisolar以便链式操作
具体用法请参考文档：插件-基本说明
/** * @param {PluginFunc} 按规则定义的插件 * @param {T} 插件用于的参数 */
lunisolar.extend<T = unknown>(plugin: PluginFunc<T>, options?: T): typeof lunisolar`},{header:"lunisolar.locale()",slug:"lunisolar-locale",content:`载入语言包
方法会返回lunisolar以便链式操作
具体用法请参考文档：国际化
/** * @param {LsrLocale | LsrLocale[]} localeData 语言包 * @param {boolean} unChangeLang 是否使用原来正使用的语言包，默认加载新包时会使用新语言包，设置为true时则只加载而不使用 */
lunisolar.localeData( localeData: LsrLocale | LsrLocale[], unChangeLang: boolean = false
): typeof lunisolar`},{header:"lunisolar.Lunar",slug:"lunisolar-lunar",content:"返回Lunar构造函数"},{header:"lunisolar.Char8",slug:"lunisolar-char8",content:"返回Char8构造函数"},{header:"lunisolar.SB",slug:"lunisolar-sb",content:"返回SB构造函数"},{header:"lunisolar.Stem",slug:"lunisolar-stem",content:"返回Stem构造函数"},{header:"lunisolar.Branch",slug:"lunisolar-branch",content:"返回Branch构造函数"},{header:"lunisolar.Element5",slug:"lunisolar-element5",content:"返回Element5构造函数"},{header:"lunisolar.Lunisolar",slug:"lunisolar-lunisolar",content:"返回Lunisolar构造函数"},{header:"lunisolar.Trigram8",slug:"lunisolar-trigram8",content:"返回Trigram8构造函数"},{header:"lunisolar.Direction24",slug:"lunisolar-direction24",content:"返回Direction24构造函数"}]},{path:"/api/pillar.html",title:"Pillar 四柱类",pathLocale:"/",contents:[{header:"Pillar 四柱类",slug:"pillar-四柱类",content:`(char8ex插件)
四柱类是SB类的增强版,主要补充了十神和神煞等属性 属性或方法
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
五行纳音，需加载takeSound插件, 参考 纳音 string 静态方法 static method getNames()
取得六十干支符串列表 string[]`}]},{path:"/api/solarTerm.html",title:"SolarTerm 节气类",pathLocale:"/",contents:[{header:"SolarTerm 节气类",slug:"solarterm-节气类",content:`属性或方法
描述
参数
返回类型 value
取得节气索引值 number name
取得节气名称 string valueOf()
返回节气索引值 number toString()
返回节气字符串 string 静态方法 static method getNames()
返回节气字符串列表 string[] getYearTermDayList(year)
取得某年的节气日期列表
- year: number 指定某年
number[] getMonthTerms(year, month)
取得某年某月的两个节气的日期
- year: number 指定某年 - month: number 某月 (1 ~ 12)
[number,number] findDate(year)
取得某年指定节气的日期
year: number 指定某年
[number, number, number] 分别为[year, month, day] findNode(date, config)
查出指定日期属于哪个节气之后，并返回该节气及该节气日期
- year: number 指定日期 - config: { lang?: string, returnValue?: boolean 返回值的第一个元素是返回SolarTerm对象，还是返回节气索引，默认为ture, 即返回节气索引。 nodeFlag: number 0,1,2三个值可选，默认0，0返回节之后，1返回气之后，2返回最近的节气之后}
[SolarTerm | number, Date] 分别为 [节气或节气索引，该节气对应的日期]`}]},{path:"/api/stem.html",title:"Stem 天干类",pathLocale:"/",contents:[{header:"Stem 天干类",slug:"stem-天干类",content:`属性或方法
描述
参数
返回类型 value
天干索引值，范围[0, 9] number name
天干名 string e5
五行属性对象 Element5 trigram8
纳甲配卦 Trigram8 valueOf()
返回天干索引值 number toString()
返回天干字符串 string 静态方法 static method getNames()
返回所有天干字符串列表 string[]`}]},{path:"/api/tenGod.html",title:"TenGod 十神类",pathLocale:"/",contents:[{header:"TenGod 十神类",slug:"tengod-十神类",content:`(char8ex插件) 属性或方法
描述
参数
返回类型 key
该十神的key(以繁体中文神煞名作为key) string name
该十神名称 string toString()
该天干地支组合的字符串, 等同于name属性 string`}]},{path:"/api/theGods.html",title:"TheGods 神煞宜忌类",pathLocale:"/",contents:[{header:"TheGods 神煞宜忌类",slug:"thegods-神煞宜忌类",content:`（theGods插件） 属性或方法
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
3`}]},{path:"/guide/",title:"文档",pathLocale:"/",contents:[]},{path:"/guide/about.html",title:"前言",pathLocale:"/",contents:[{header:"前言",slug:"前言",content:""},{header:"* 简介",slug:"简介",content:"lunisolar.js是一个专业的农历js工具库。支持各类农历信息查询，如天干地支、五行纳音、神煞宜忌、建除十二神、八字十神、四柱神煞、胎神占方、每日吉时、每日吉神方等。使用Typescript编写，主体代码压缩后只有11.5KB左右。简单易上手。"},{header:"* 为何制作此库",slug:"为何制作此库",content:"昔见不同版本日历（包括纸质日历和各类日历软件），其所示宜忌有所不同，更有相矛盾者，不知如何取用，故疑其推算依据是否误，本着宏扬传统文化之精神，查阅各资料文案，以制此库。"},{header:"* 阴历和阳历",slug:"阴历和阳历",content:`现所用的中国传统历法，我们常称为农历，农历是阴阳合历，即包含了阴历和阳历，所以此库取lunar+solar，命名为lunisolar。
农历中，通过月相圆缺纪月，此属于阴历范畴，本库会以一个Lunar对象记录转换好的阴历数据。
而公历与阴历的转换规律性不大，使用寿星天文历的计算方式又过于复杂也影响代码体积，故本库的核心采用查表法进行转换，其数据来自香港天文台【公历与农历日期对照表】。其可查询年份范围为[1901,2100]。数据抓取和压缩的代码见仓库 lunar-crawler，此处不作详细介绍。
属于阳历范畴的内容比较多，有二十四节气、天干地支等，传统很多术数多以阳历排盘，如八字、奇门遁甲...（也有少数以阴历排盘的，如紫微斗数）。其中二十四节气是阳历中十分重要的部分，其影响天干地支的换岁和换月。`},{header:"* 年和岁",slug:"年和岁",content:`在传统上，年和岁是两个不同的概念。
年 是指阴历正月初一到下一个正月初一的一个周期。
岁 是指太阳连续两次通过春分点的时间间隔，古人一般用‘冬至点’来观测，现代称作回归年（tropical year），也叫 太阳年（solar year）。一个周期结束而开始下一个周期，称为换岁。 1回归年 = 365.2421990741日 = 365天5小時48分46秒`},{header:"* 节和气",slug:"节和气",content:`我们常说的二十四节气，其实分为节和气两种，共十二节和十二气，节和气交替出现。天干地支纪月是以节换月的。 节
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
由于大部分术数系统并不以正月初一换岁，所以lunisolar默认并不跟随此标准进行换岁（虽然可以通过配置设置成与国标一致，但不建议）。`},{header:"* 换日",slug:"换日",content:"传统子时是每一天的开始，子时对应的时间为 [23:00, 01:00), 所以lunisolar会在23:00进行换日。"},{header:"* 其它",slug:"其它",content:"moment.js 和 dayjs 是两个比较出名的时间工具库，为了符合大家的使用习惯，lunisolar针对公历（格里历）的部分操作将会尽量向dayjs看齐，并参考了其代码设计，但并不会cover它们的所有功能，如果你仅仅是对公历进行操作，推荐使用dayjs。lunisolar重点在于农历部分，例如Lunisolar的format方法和diff方法包含dayjs这两个方法的功能并与之保持一致，同时加入了对农历的处理，具体功能及使用请继续阅读文档。"},{header:"对象关系参考",slug:"对象关系参考",content:"lunisloar采用面向对象开发，下图可以帮助了解各个对象关系。"}]},{path:"/guide/i18n.html",title:"国际化",pathLocale:"/",contents:[{header:"国际化",slug:"国际化",content:`lunisolar返回数据默认用繁体中文，主要考虑到这类使用人群往往有繁体需求，而且繁体也易于直接翻译成简体（由于一简对多繁，繁体可直接转为简体，但简体不能直接转为繁体）。
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
d24.angle // 180`}]},{path:"/guide/functional/",title:"功能与使用",pathLocale:"/",contents:[]},{path:"/guide/functional/branch.html",title:"地支",pathLocale:"/",contents:[{header:"地支",slug:"地支",content:`通过SB实例的branch属性可取得天干对象Branch
// 例如，取得年柱的地支
const branch = lunisolar().char8.year.branch`},{header:"地支名",slug:"地支名",content:`/** * @return {string} */
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
lunisolar('2022/07/18 14:40').format('cY cM cD cH') // '壬寅 丁未 壬申 丁未'
lunisolar('2022/07/18 14:40').format('[八字：] cY cM cD cH') // '八字：壬寅 丁未 壬申 丁未'
lunisolar('2022/03/10').format('cZ年') // '虎年'
lunisolar('2022/03/10').format('cYs-cYb cMs-cMb cDs-cDb cHs-cHb') // ''壬-寅 丁-未 壬-申 丁-未''`},{header:"标识符",slug:"标识符",content:`根据传入的标识字符串获取格式化的日期。
要对字符进行转义，请将它们括在方括号中(例如 [cY YY] ) 标识
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
设置, 为一个对像，其内容如下： type ConfigType = { lang: string, // 语言包名称，默认为zh，即使用繁体中文 changeAgeTerm: number // 换岁时气的索引，默认值为2，即立春。（注：节气列表从小寒开始）
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
}) console.log(lsr.format('YYYY-MM-DD')) // 2020-01-25`}]},{path:"/guide/functional/solarTerm.html",title:"节气",pathLocale:"/",contents:[{header:"节气",slug:"节气",content:`Info 节气是农历的重要组成部分，依黄经度数划分，属于阳历范畴，是天干地支纪时法的换岁换月依据，是中国大多数传统术数的重要基础
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
lunisolar().getSeason()`},{header:"节气列表",slug:"节气列表",content:`通过调用 SolarTerm类的静态方法取得节气列表
/** * @return {string[]} */
lunisolar.SolarTerm.getNames()`},{header:"指定年的节气列表",slug:"指定年的节气列表",content:`取得指定年的节气日期列表，长度24，[d, d, d, d, ....d]
/** * @param {number} year 指定的年 * @return {number[]} */
lunisolar.SolarTerm.getYearTermDayList(year: number) // 示例： 返回2023年的节气日期列表
const termList = lunisolar.SolarTerm.getYearTermDayList(2023) // [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,24,8,22,7,22]`},{header:"指定年月的节和气",slug:"指定年月的节和气",content:`取得指定月的节和气日期，返回 [节, 气]
/** * @param year 公历年 * @param month 公历月份 * @return {[number, number]} [节, 气] */
lunisolar.SolarTerm.getMonthTerms(year: number, month: number) // 示例： 返回2023年2月的节和气的日期
const termList = lunisolar.SolarTerm.getYearTermDayList(2023, 2) // [4, 19]`}]},{path:"/guide/functional/stem.html",title:"天干",pathLocale:"/",contents:[{header:"天干",slug:"天干",content:`通过SB实例的stem属性可取得天干对象Stem
// 例如，取得年柱的天干
const stem = lunisolar().char8.year.stem`},{header:"天干名",slug:"天干名",content:`/** * @return {string} */
stem.name`},{header:"天干索引",slug:"天干索引",content:`/** * @return {string} */
stem.name`},{header:"天干五行",slug:"天干五行",content:`返回五行对象实例 Element5
/** * @return {Element5} */
stem.e5`},{header:"天干纳甲",slug:"天干纳甲",content:`取得天干所纳八卦，返回 Trigram8 八卦实例
/** * @return {Trigram8} */
stem.trigram8`},{header:"十天干列表",slug:"十天干列表",content:`此为静态方法， 取得十天干名称列表
/** * @return {string[]} */
lunisolar.Stem.getNames()`}]},{path:"/guide/plugins/",title:"插件 plugins",pathLocale:"/",contents:[{header:"插件 plugins",slug:"插件-plugins",content:""}]},{path:"/guide/plugins/about.html",title:"基本说明",pathLocale:"/",contents:[{header:"基本说明",slug:"基本说明",content:""},{header:"官方插件",slug:"官方插件",content:`lunisolar内置了一些插件，包括以下这些：
具体请参看对应插件的文档 插件
介绍
- fetalGod
胎神占方
文档 takeSound
五行纳音
文档 theGods
神煞宜忌
文档 char8ex
八字增强
文档`},{header:"自定义插件",slug:"自定义插件",content:`1 编写一个插件
import { PluginFunc, Lunisolar } from 'lunisolar' // 为新添的属性加上类型声明 ()
declare module 'lunisolar' { interface Lunisolar { showExample: string exampleMethod(): void }
} interface LunisolarEx extends Lunisolar { showExample: string exampleMethod(): void
} const pluginName: PluginFunc = async (options, lsClass, lsFactory) => { const lsProto = lsClass.prototype as unknown as LunisolarEx // 添加属性 lsProto.showExample = 'hello' // 添加方法 lsProto.exampleMethod = function () { console.log('hello') } }
export default pluginName
2 使用插件
import plugin from 'your/plugin/path/pluginName'
import lunisolar from 'lunisolar' lunisolar.extend(plugin) lunisolar().showExample // 'hello'`}]},{path:"/guide/plugins/char8ex.html",title:"八字增强",pathLocale:"/",contents:[{header:"八字增强",slug:"八字增强",content:""},{header:"简介",slug:"简介",content:`lunisolar.js本身可能过Lunisolar实例的char8属性实现基本的八字查询功能, 但未包括十神和神煞等功能。使用Char8Ex插件后，将会在Lunisolar\`\`实例上添加一个char8ex()方法, 除了包含原char8的功能外，还加入了十神和神煞的查询。
使用lunisolar().char8ex()创建一个Char8Ex实例
/** * @param sex 性别 0:坤造，1: 乾造 * @return 返回一个Char8Ex实例对象 */
lunisolar().char8ex(sex: 0 | 1): Char8Ex 注意：加载char8ex插件时，将自动加载takeSound插件（五行纳音插件），所以请不要再重复加takeSound`},{header:"快速上手",slug:"快速上手",content:`// --- 安装
// 引入lunisolar
import lunisolar from 'lunisolar'
// 引入 theGods 插件
import char8ex from 'lunisolar/plugins/char8ex'
// 加载插件
lunisolar.extend(char8ex) // --- 使用
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
char8ex插件默认语言与lunisolar一样为繁体中文，如需要其它语言，须再另外加载`},{header:"加载",slug:"加载",content:`// 引入lunisolar
import lunisolar from 'lunisolar'
// 引入 theGods 插件
import char8ex from 'lunisolar/plugins/char8ex'
// 加载插件
lunisolar.extend(char8ex)`},{header:"使用",slug:"使用",content:`// 创建一个Char8Ex实例
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
其中天干地支与胎神位置的规律可用以下口诀记忆： ----天干六甲胎神歌---- 甲己之日占在門，乙庚碓磨休移动。 丙辛廚灶莫相干，丁壬倉庫忌修弄。 戊癸房床若移整，犯之孕妇堕孩童。 ----地支六甲胎神歌---- 子午二日碓须忌，丑未廁道莫修移。 寅申火爐休要动，卯酉大門修当避。 辰戌雞棲巳亥床，犯着六甲身堕胎。`},{header:"用法",slug:"用法",content:`查询胎神要先导入 fetalGod 插件，
之后可使用lunisolar().fetalGod 取得胎神描述，
也可以使用lunisolar().fetalGodData 取得胎神数据。
示例：
import fetalGod from 'lunisolar/plugins/fetalGod'
import lunisolar from 'lunisolar' lunisolar.extend(fetalGod) const lsr = lunisolar('2022-07-08')
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
sb.takeSoundE5 属性返回纳音五行的Element5实例 示例：
import takeSound from 'lunisolar/plugins/takeSound'
import lunisolar from 'lunisolar' lunisolar.extend(takeSound) /** 加载advance插件后， SB对象（天干地支对象）会添加一个takeSound属性， */
const lsr = lunisolar('2022-07-08')
lsr.char8.year.takeSound // 金箔金 （取得年干支的纳音）
lsr.char8.year.takeSoundE5.toString() // 金 （取得年干支的纳音五行）
// ...
lsr.char8.day.takeSound // 大海水 （取得日干支的纳音）
lsr.takeSound // 大海水 （取得日干支的纳音 等同于 lsr.char8.day.takeSound）`}]},{path:"/guide/plugins/theGods.html",title:"神煞宜忌",pathLocale:"/",contents:[{header:"神煞宜忌",slug:"神煞宜忌",content:""},{header:"1 简介",slug:"_1-简介",content:`theGods作为lunisolar的一个插件，其神煞、宜忌的内容主要参考中国古代典籍 《协纪纪辨方书》 。
本库中的所有宜忌词条，除特别说明的外，皆出于《协纪纪辨方书 * 卷十一》。
宜忌的推导，需要先查出当日的所有神煞（卷九），每个神煞都有各自的宜忌（卷十），然后通过宜忌等第表、铺注条例（卷十）对宜忌进行整理，最后跟据（卷十一）用事表格进行排序和筛选。
正因为神煞和宜忌的数据复杂烦琐，为了方便维护和以免影响lunisolar的打包体积，故TheGods作为一个lunisolar的插件开发。`},{header:"2 快速上手",slug:"_2-快速上手",content:`// --- 安装
// 引入lunisolar
import lunisolar from 'lunisolar'
// 引入 theGods 插件
import theGods from 'lunisolar/plugins/theGods'
// 加载插件
lunisolar.extend(theGods) // --- 使用
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
d24.angle // 180 // 更多和详细用法请继续往下阅读`},{header:"3 建除十二神",slug:"_3-建除十二神",content:"建除十二神，又称十二值神。即 “建、除、满、平、定、执、破、危、成、收、开、闭”共十二位神，每日轮值，周而复始，观所值以定吉凶。 《历书》曰：“历家以建、除、满、平、定、执、破、危、成、收、开、闭，凡十二日，周而复始，观所值以定吉凶。每月交节则叠两值日。其法从月建上起，建与斗杓所指相应，如正月建寅则寅日起建，顺行十二辰也。” 方法 lunisolar().theGods.getDuty12God()"},{header:"4 长生十二神",slug:"_4-长生十二神",content:`建除十二神 分别为：长生、沐浴、冠带、临官、帝旺、衰、病、死、墓、绝、胎、养 甲
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
Direction24`}]},{path:"/404.html",title:"",pathLocale:"/",contents:[]}],j="update-vuepress-plugin-full-text-search2-search-index";var B=y(z),q=T(()=>{const n=new Map;for(const e of B.value)n.set(e.path,e);return n});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[j]=n=>{B.value=n});function K(n){const e=y([]);let l=null;return C(n,()=>{l&&clearTimeout(l),l=setTimeout(a,100)}),e;function a(){const i=n.value.toLowerCase().trim();if(!i){e.value=[];return}const o=new Map,t=new Set;for(const r of B.value)for(const s of F(r,i)){t.add(s.parentPageTitle);let u=o.get(s.parentPageTitle);u||(u=[],o.set(s.parentPageTitle,u)),u.push(s)}const c=[...t].sort((r,s)=>{const u=o.get(r);return o.get(s).length-u.length});e.value=[...o].flatMap(([,r])=>r).sort((r,s)=>r.parentPagePriority-s.parentPagePriority||c.indexOf(r.parentPageTitle)-c.indexOf(s.parentPageTitle)||r.priority-s.priority)}}function*F(n,e){const l=L(n.title,e);if(l){yield{path:n.path,parentPageTitle:D(n),title:n.title,display:l,page:n,content:null,parentPagePriority:1,priority:1};return}for(const a of n.contents){const i=L(a.header,e);if(i){yield{path:n.path+(a.slug?`#${a.slug}`:""),parentPageTitle:D(n),title:n.title,display:i,page:n,content:null,parentPagePriority:10,priority:2};continue}const o=L(a.content,e);o&&(yield{path:n.path+(a.slug?`#${a.slug}`:""),parentPageTitle:D(n),title:n.title,display:[{type:"header",str:`${a.header}
`},...o],page:n,content:null,parentPagePriority:10,priority:10})}}function D(n){const e=n.path.split("/");let l="/";return e[1]&&(l=`/${e[1]}/`),(q.value.get(l)||n).title}function L(n,e){const l=[];let a=0;const i=n.toLowerCase().replace(/\s/gu," ");let o=0,t=i.indexOf(e,o);if(t<0)return null;for(;t>=0;){const r=t+e.length;if(c(n.slice(o,t),"normal"),c(n.slice(t,r),"highlight"),o=r,t=i.indexOf(e,o),a>100)break}return c(n.slice(o),"normal"),l.filter(r=>r.str);function c(r,s){let u=r;s==="normal"&&u.length>100&&a===0&&(u=`… ${u.slice(-10)}`);let m=!1;if(a+u.length>100){if(l.some(p=>p.type==="ellipsis"))return;u=u.slice(0,Math.max(100-a,1)),m=!0}l.push({type:s,str:u}),a+=u.length,m&&(l.push({type:"ellipsis",str:" …"}),a+=2)}}const $={},U=H({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>$}},setup(n){const{locales:e}=w(n),l=y(""),a=y(!1),i=y(-1),o=K(l),t=T(()=>l.value&&a.value&&o.value.length),c=A(),r=E(),s=T(()=>e.value[r.value]??{});function u(){if(!t.value)return;let d=i.value-1;d<0&&(d=o.value.length-1),p(d)}function m(){if(!t.value)return;let d=i.value+1;d>=o.value.length&&(d=0),p(d)}function p(d){i.value=d}function x(){i.value=-1}function P(d){if(!t.value)return;const M=o.value[d];M&&c.push(M.path)}return{query:l,focused:a,focusIndex:i,suggestions:o,activeSuggestion:t,onUp:u,onDown:m,focus:p,unfocus:x,go:P,locale:s}}});const V={class:"search-box",role:"search"},Z=["placeholder"],R=["onMousedown","onMouseenter"],W=["href"],X={key:0,class:"parent-page-title"},J={class:"suggestion-row"},Q={class:"page-title"},nn={class:"suggestion-content"};function en(n,e,l,a,i,o){return g(),h("div",V,[O(f("input",{ref:"input","onUpdate:modelValue":e[0]||(e[0]=t=>n.query=t),"aria-label":"Search",class:G({focused:n.focused}),placeholder:n.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:e[1]||(e[1]=()=>n.focused=!0),onBlur:e[2]||(e[2]=()=>n.focused=!1),onKeyup:[e[3]||(e[3]=b(t=>n.go(n.focusIndex),["enter"])),e[4]||(e[4]=b((...t)=>n.onUp&&n.onUp(...t),["up"])),e[5]||(e[5]=b((...t)=>n.onDown&&n.onDown(...t),["down"]))]},null,42,Z),[[_,n.query]]),n.activeSuggestion?(g(),h("ul",{key:0,class:"suggestions",onMouseleave:e[7]||(e[7]=(...t)=>n.unfocus&&n.unfocus(...t))},[(g(!0),h(k,null,v(n.suggestions,(t,c)=>(g(),h("li",{key:c,class:G(["suggestion",{focused:c===n.focusIndex}]),onMousedown:r=>n.go(c),onMouseenter:r=>n.focus(c)},[f("a",{href:t.path,onClick:e[6]||(e[6]=I(()=>{},["prevent"]))},[t.parentPageTitle&&(!n.suggestions[c-1]||n.suggestions[c-1].parentPageTitle!==t.parentPageTitle)?(g(),h("div",X,S(t.parentPageTitle),1)):Y("v-if",!0),f("div",J,[f("div",Q,S(t.title||t.path),1),f("div",nn,[(g(!0),h(k,null,v(t.display,(r,s)=>(g(),h("span",{key:s,class:G(r.type)},S(r.str),3))),128))])])],8,W)],42,R))),128))],32)):Y("v-if",!0)])}const an=N(U,[["render",en],["__scopeId","data-v-c13c90dc"],["__file","SearchBox.vue"]]);export{an as default};
