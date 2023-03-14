import{_ as u,V as o,W as e,X as t,$ as n,a0 as r,Y as d,Z as s,F as a}from"./framework-d1125686.js";const i={},h=t("h1",{id:"lunisolar类",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#lunisolar类","aria-hidden":"true"},"#"),d(" Lunisolar类")],-1),_=t("thead",null,[t("tr",null,[t("th",null,"属性或方法"),t("th",null,"描述"),t("th",null,"参数"),t("th",null,"返回类型")])],-1),c=t("td",null,"lunar",-1),m=t("td",null,"阴历数据对象",-1),b=t("td",null,null,-1),f=t("td",null,"char8",-1),g=t("td",null,"八字对象",-1),D=t("td",null,null,-1),M=t("td",null,"solarTerm",-1),S=t("td",null,"返回当前日期的节气对象，如果不是节气，返回null",-1),Y=t("td",null,null,-1),y=t("tr",null,[t("td",null,"getSeason()"),t("td",null,"取得当前季节"),t("td"),t("td",null,"string")],-1),p=t("tr",null,[t("td",null,"getSeasonIndex()"),t("td",null,"以春夏秋冬为顺序取得当前季节索引"),t("td"),t("td",null,"number")],-1),L=t("tr",null,[t("td",null,"toDate()"),t("td",null,"返回Date对象"),t("td"),t("td",null,"Date")],-1),T=t("tr",null,[t("td",null,"clone()"),t("td",null,"克隆当前Lunisolar对象"),t("td"),t("td",null,"Lunisolar")],-1),C=t("tr",null,[t("td",null,"unix()"),t("td",null,"返回以秒为单位的时间戳"),t("td"),t("td",null,"number")],-1),H=t("tr",null,[t("td",null,"format(formatStr: string)"),t("td",null,"按指定格式格式化时间"),t("td",null,[t("strong",null,"formatStr"),d(": string 时间将以这字符串格式进行格式化，例 'YYYY-MM-DD HH:mm:ss'")]),t("td",null,"string")],-1),x=t("tr",null,[t("td",null,"diff(date, unit, float)"),t("td",null,"时间差计算"),t("td",null,[t("strong",null,"date"),d(": number | string | Date | Lunisolar "),t("br"),d(" 与当前实例的时间进行比较的时间"),t("br"),d(),t("strong",null,"unit"),d(": string "),t("br"),d("单位，如 year, lunarYear, month, lunarMonth 等"),t("br"),d(),t("strong",null,"float"),d(": boolean "),t("br"),d("是否返回浮点数")]),t("td",null,"number")],-1),v=t("tr",null,[t("td",null,"add(value, unit)"),t("td",null,"时间加减"),t("td",null,[t("strong",null,"value"),d(": number 时间加减的值，负数为减 "),t("br"),d(),t("strong",null,"unit"),d(": string 加减单位")]),t("td",null,"number")],-1),U=t("tr",null,[t("td",null,"year"),t("td",null,"年份"),t("td"),t("td",null,"number")],-1),O=t("tr",null,[t("td",null,"month"),t("td",null,"月份 1 ~ 12"),t("td"),t("td",null,"number")],-1),k=t("tr",null,[t("td",null,"day"),t("td",null,"日期 1 ~ 31"),t("td"),t("td",null,"number")],-1),V=t("tr",null,[t("td",null,"dayOfWeek"),t("td",null,"周几，0 ~ 6， 0代表周日"),t("td"),t("td",null,"number")],-1),Z=t("tr",null,[t("td",null,"hour"),t("td",null,"小时 0 ~ 23"),t("td"),t("td",null,"number")],-1),N=t("tr",null,[t("td",null,"minute"),t("td",null,"分 0 ~ 59"),t("td"),t("td",null,"number")],-1),A=t("tr",null,[t("td",null,"second"),t("td",null,"秒 0 ~ 59"),t("td"),t("td",null,"number")],-1),B=t("tr",null,[t("td",null,"millis"),t("td",null,"毫秒 0 ~ 999"),t("td"),t("td",null,"number")],-1),I=t("tr",null,[t("td",null,"utc()"),t("td",null,"转为utc模式"),t("td"),t("td",null,"Lunisolar")],-1),W=t("tr",null,[t("td",null,"isUTC()"),t("td",null,"检查是否为UTC模式的实例"),t("td"),t("td",null,"boolean")],-1),R=t("tr",null,[t("td",null,"utcOffset(offset)"),t("td",null,"取得，或设置utc偏移值"),t("td",null,[t("strong",null,"offset"),d(": number | undefined "),t("br"),d(" · 当为undefined时，为取得utc偏移值, 返回单位为分钟的number值 "),t("br"),d(" · 当为number类型时，为设置utc偏移值，并把时间转为utc时间，返回一个新的Lunisolar实例。如果设置的offset范围在[-16, 16], 则单位为小时，其它情况为分钟")]),t("td",null,"Lunisolar | number")],-1),w=t("tr",null,[t("td",null,"local()"),t("td",null,"转为本地时间"),t("td"),t("td",null,"Lunisolar")],-1),E=t("tr",null,[t("td",null,"valueOf()"),t("td",null,"返回Date对象的valueOf(), 即时间戳"),t("td"),t("td",null,"number")],-1),F=t("tr",null,[t("td",null,"toISOString()"),t("td",null,"返回Date对象的toISOString()"),t("td"),t("td",null,"string")],-1),G=t("tr",null,[t("td",null,"toUTCString()"),t("td",null,"返回Date对象的toUTCString()"),t("td"),t("td",null,"string")],-1),J=t("tr",null,[t("td",null,"toString()"),t("td",null,"返回当前 Date对象的toUTCString() + 阴历的格式化后的日期时间: 例“Wed, 24 Aug 2022 14:50:51 GMT (二〇二二年七月廿七亥時)”"),t("td"),t("td",null,"string")],-1),P=s("<p><strong>Lunisolar.format() 标识符参考</strong></p><table><thead><tr><th>标识</th><th>示例</th><th>描述</th></tr></thead><tbody><tr><td>lY</td><td>二〇二二</td><td>当年阴历正月初一所在的公历年</td></tr><tr><td>lYn</td><td>2022</td><td>当年阴历正月初一所在的公历年, 数字形式开示</td></tr><tr><td>lM</td><td>正月-十二月</td><td>阴历月</td></tr><tr><td>lMn</td><td>1-12</td><td>阴历月, 以数字形式表示</td></tr><tr><td>lD</td><td>初一</td><td>阴历日</td></tr><tr><td>lDn</td><td>1 - 30</td><td>阴历日, 以数字形式表示</td></tr><tr><td>lH</td><td>子 - 亥</td><td>时辰</td></tr><tr><td>lHn</td><td>1 - 12</td><td>时辰序号，从1开始</td></tr><tr><td>lDn</td><td>1 - 30</td><td>阴历日, 以数字形式表示</td></tr><tr><td>lL</td><td>大 | 小</td><td>阴历月是大月还是小月</td></tr><tr><td>cY</td><td>甲子</td><td>八字年柱</td></tr><tr><td>cYs</td><td>甲</td><td>八字年柱天干</td></tr><tr><td>cYb</td><td>子</td><td>八字年柱地支</td></tr><tr><td>cM</td><td>甲子</td><td>八字月柱</td></tr><tr><td>cMs</td><td>甲</td><td>八字月柱天干</td></tr><tr><td>cMb</td><td>子</td><td>八字月柱地支</td></tr><tr><td>cD</td><td>甲子</td><td>八字日柱</td></tr><tr><td>cDs</td><td>甲</td><td>八字日柱天干</td></tr><tr><td>cDb</td><td>子</td><td>八字日柱地支</td></tr><tr><td>cH</td><td>甲子</td><td>八字日柱</td></tr><tr><td>cHs</td><td>甲</td><td>八字日柱天干</td></tr><tr><td>cHb</td><td>子</td><td>八字日柱地支</td></tr><tr><td>cZ</td><td>鼠</td><td>生肖 （立春换岁，可通过config设置换岁时机）</td></tr><tr><td>t</td><td>1-24</td><td>节气，从小寒到冬至的序号，从1开始，如果该日不是节气，返回空字符串</td></tr><tr><td>T</td><td>小寒-冬至</td><td>节气字符串，如果该日不是节气，返回空字符串</td></tr><tr><td>YY</td><td>18</td><td>年，两位数</td></tr><tr><td>YYYY</td><td>2018</td><td>年，四位数</td></tr><tr><td>M</td><td>1-12</td><td>月，从1开始</td></tr><tr><td>MM</td><td>01-12</td><td>月，两位数字</td></tr><tr><td>MMM</td><td>Jan-Dec</td><td>月，英文缩写</td></tr><tr><td>D</td><td>1-31</td><td>日</td></tr><tr><td>DD</td><td>01-31</td><td>日，两位数</td></tr><tr><td>H</td><td>0-23</td><td>24小时</td></tr><tr><td>HH</td><td>00-23</td><td>24小时，两位数</td></tr><tr><td>h</td><td>1-12</td><td>12小时</td></tr><tr><td>hh</td><td>01-12</td><td>12小时，两位数</td></tr><tr><td>m</td><td>0-59</td><td>分钟</td></tr><tr><td>mm</td><td>00-59</td><td>分钟，两位数</td></tr><tr><td>s</td><td>0-59</td><td>秒</td></tr><tr><td>ss</td><td>00-59</td><td>秒，两位数</td></tr><tr><td>S</td><td>0-9</td><td>毫秒（百），一位数</td></tr><tr><td>SS</td><td>00-99</td><td>毫秒（十），两位数</td></tr><tr><td>SSS</td><td>000-999</td><td>毫秒，三位数</td></tr><tr><td>Z</td><td>-05:00</td><td>UTC偏移</td></tr><tr><td>ZZ</td><td>-0500</td><td>UTC偏移，两位数</td></tr><tr><td>A</td><td>AM / PM</td><td>上/下午，大写</td></tr><tr><td>a</td><td>am / pm</td><td>上/下午，小写</td></tr></tbody></table><p><strong>Lunisolar.diff() unit可选值参考</strong></p><table><thead><tr><th>单位</th><th>缩写</th><th>描述</th></tr></thead><tbody><tr><td>lunarYear</td><td>lY</td><td>阴历年</td></tr><tr><td>lunarMonth</td><td>lM</td><td>阴历月</td></tr><tr><td>lunarDay</td><td>lD</td><td>阴历日</td></tr><tr><td>lunarHour</td><td>lH</td><td>时辰</td></tr><tr><td>day</td><td>d</td><td>天</td></tr><tr><td>month</td><td>M</td><td>月份</td></tr><tr><td>year</td><td>y</td><td>年</td></tr><tr><td>hour</td><td>h</td><td>小时</td></tr><tr><td>minute</td><td>m</td><td>分钟</td></tr><tr><td>second</td><td>s</td><td>秒</td></tr><tr><td>millisecond</td><td>ms</td><td>毫秒</td></tr></tbody></table><p><strong>Lunisolar.add() unit可选值参考</strong></p><table><thead><tr><th>单位</th><th>缩写</th><th>描述</th></tr></thead><tbody><tr><td>day</td><td>d</td><td>天</td></tr><tr><td>month</td><td>M</td><td>月份</td></tr><tr><td>year</td><td>y</td><td>年</td></tr><tr><td>hour</td><td>h</td><td>小时</td></tr><tr><td>minute</td><td>m</td><td>分钟</td></tr><tr><td>second</td><td>s</td><td>秒</td></tr><tr><td>millisecond</td><td>ms</td><td>毫秒</td></tr></tbody></table>",6);function X($,j){const l=a("RouterLink");return o(),e("div",null,[h,t("table",null,[_,t("tbody",null,[t("tr",null,[c,m,b,t("td",null,[n(l,{to:"/api/lunar.html"},{default:r(()=>[d("Lunar")]),_:1})])]),t("tr",null,[f,g,D,t("td",null,[n(l,{to:"/api/char8.html"},{default:r(()=>[d("Char8")]),_:1})])]),t("tr",null,[M,S,Y,t("td",null,[n(l,{to:"/api/solarTerm.html"},{default:r(()=>[d("SolarTerm")]),_:1}),d(" | null")])]),y,p,L,T,C,H,x,v,U,O,k,V,Z,N,A,B,I,W,R,w,E,F,G,J])]),P])}const z=u(i,[["render",X],["__file","lunisolarClass.html.vue"]]);export{z as default};
