import{_ as s,V as h,W as c,X as d,Y as t,$ as r,Z as n,F as o}from"./framework-d1125686.js";const i={},l=n('<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> * 简介</h2><p><strong>lunisolar.js</strong>是一个专业的Javascript农历工具库。支持各类农历信息查询，如天干地支、五行纳音、神煞宜忌、建除十二神、八字十神、四柱神煞、胎神占方、每日吉时、每日吉神方等。使用Typescript编写，主体代码压缩后只有11.5KB左右。简单易上手。</p><h2 id="为何制作此库" tabindex="-1"><a class="header-anchor" href="#为何制作此库" aria-hidden="true">#</a> * 为何制作此库</h2><p>昔见不同版本日历（包括纸质日历和各类日历软件），其所示宜忌有所不同，更有相矛盾者，不知如何取用，故疑其推算依据是否误，本着宏扬传统文化之精神，查阅各资料文案，以制此库。</p><h2 id="阴历和阳历" tabindex="-1"><a class="header-anchor" href="#阴历和阳历" aria-hidden="true">#</a> * 阴历和阳历</h2><p>现所用的中国传统历法，我们常称为<strong>农历</strong>，农历是阴阳合历，即包含了<code>阴历</code>和<code>阳历</code>，所以此库取<code>lunar</code>+<code>solar</code>，命名为<strong>lunisolar</strong>。</p>',7),p=d("strong",null,"阴历",-1),u=d("code",null,"Lunar",-1),g={href:"https://github.com/sxwnl/sxwnl",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.hko.gov.hk/tc/gts/time/conversion1_text.htm#",target:"_blank",rel:"noopener noreferrer"},b=d("code",null,"[1901,2100]",-1),f={href:"https://github.com/waterbeside/lunar-crawler",target:"_blank",rel:"noopener noreferrer"},m=n('<p>属于阳历范畴的内容比较多，有二十四节气、天干地支等，传统很多术数多以阳历排盘，如八字、奇门遁甲...（也有少数以阴历排盘的，如紫微斗数）。其中二十四节气是阳历中十分重要的部分，其影响天干地支的<strong>换岁</strong>和<strong>换月</strong>。</p><h2 id="年和岁" tabindex="-1"><a class="header-anchor" href="#年和岁" aria-hidden="true">#</a> * 年和岁</h2><p>过去，年和岁是两个不同的概念。</p><p><strong>年</strong> 是指阴历正月初一到下一个正月初一的一个周期。</p><p><strong>岁</strong> 是指太阳连续两次通过春分点的时间间隔，古人一般用‘冬至点’来观测，现代称作<strong>回归年（tropical year）</strong>，也叫 <strong>太阳年（solar year）</strong>。一个周期结束而开始下一个周期，称为<code>换岁</code>。</p><blockquote><p>1回归年 = 365.2421990741日 = 365天5小時48分46秒</p></blockquote><h2 id="节和气" tabindex="-1"><a class="header-anchor" href="#节和气" aria-hidden="true">#</a> * 节和气</h2><p>我们常说的二十四节气，其实分为<strong>节</strong>和<strong>气</strong>，共十二节和十二气，节和气交替出现。天干地支纪月是以节换月的。</p><table><thead><tr><th></th><th></th><th></th><th>节</th><th>气</th></tr></thead><tbody><tr><td></td><td>孟春</td><td>寅月</td><td>立春</td><td>雨水</td></tr><tr><td><strong>春</strong></td><td>仲春</td><td>卯月</td><td>惊蛰</td><td>春分</td></tr><tr><td></td><td>季春</td><td>辰月</td><td>清明</td><td>谷雨</td></tr><tr><td></td><td>孟夏</td><td>巳月</td><td>立夏</td><td>小满</td></tr><tr><td><strong>夏</strong></td><td>仲夏</td><td>午月</td><td>芒种</td><td>夏至</td></tr><tr><td></td><td>季夏</td><td>未月</td><td>小暑</td><td>大暑</td></tr><tr><td></td><td>孟秋</td><td>申月</td><td>立秋</td><td>处暑</td></tr><tr><td><strong>秋</strong></td><td>仲秋</td><td>酉月</td><td>露水</td><td>秋分</td></tr><tr><td></td><td>季秋</td><td>戌月</td><td>寒露</td><td>霜降</td></tr><tr><td></td><td>孟冬</td><td>亥月</td><td>立冬</td><td>小雪</td></tr><tr><td><strong>冬</strong></td><td>仲冬</td><td>子月</td><td>大雪</td><td>冬至</td></tr><tr><td></td><td>季冬</td><td>丑月</td><td>小寒</td><td>大寒</td></tr></tbody></table><p>实际上，节气是某一个时刻，而这个时刻并不是固定在某天的某个时辰。但由于数据源只精确到日，所以本库的交节（更换八字月柱），也是以日为准。</p><h2 id="生肖和换岁" tabindex="-1"><a class="header-anchor" href="#生肖和换岁" aria-hidden="true">#</a> * 生肖和换岁</h2><p>我们知道天干地支是基于二十四节气来定的。对于一些术数，如八字命理，通常以<strong>立春</strong>换岁，即到了立春，便更换下一个天干地支纪年，例如今年为甲子年，则到下一个立春，则换成乙丑年。</p><p>但是，并不是所有术数都是以立春换岁，例如中医的五运六气，则以大寒日换岁。 而奇门遁甲则以冬至换岁，中气换月。</p><blockquote><p>lunisolar是为术数服务的， 所以<code>lunisolar</code>默认使用<strong>立春</strong>换岁, 当然你也可以自定义换岁的节气。</p></blockquote><p><strong>生肖</strong>：生肖与十二地支是对应的，所以实际上生肖也是按节气更换，所以生肖默认也是按立春更换。</p><p>另外，根据 中国大陆国家标准：编号<strong>GB/T 33661-2017</strong> 『<strong>农历的编算和颁行</strong>』规定,</p><blockquote><p>“干支纪年的循环参考时间：对应于北京时间公历1984年2月2日0时起到1985年2月19日24时截止的农历年为甲子年。”</p></blockquote><p>如按此标准的话，应该正月初一换岁，即生肖在正月初一更换。 这样的好处是方便大众记忆与使用，但与传统术数的计算方式有所冲突，对术数并无任何指导意义。 由于大部分术数系统并不以正月初一换岁，所以lunisolar默认并不跟随此标准进行换岁（虽然可以通过配置设置成与国标一致，但不建议）。</p><h2 id="换日" tabindex="-1"><a class="header-anchor" href="#换日" aria-hidden="true">#</a> * 换日</h2><p>子时是每一天的开始，子时对应的时间为 [23:00, 01:00), 为了方便一天的时辰吉凶计算，所以lunisolar会在23:00进行换日。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>子时作为一天的第一个时辰，究竟是以子时正中（0:00）换日，还是以23：00作为换日？这种争论从古时一直便有，八字也因此有 “<strong>区分早晚子时</strong>” 和 “<strong>不区分</strong>早晚子时” 的两派。lunisolar的八字工具暂时会以23:00换日，日后会考虑在新版本的八字增强插件中增加区分此两派的设置选项。</p></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> * 其它</h2>',22),x={href:"https://github.com/moment/moment",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/iamkun/dayjs",target:"_blank",rel:"noopener noreferrer"},V=d("code",null,"lunisolar",-1),w=d("code",null,"dayjs",-1),j=d("strong",null,"dayjs",-1),y=d("code",null,"Lunisolar",-1),q=d("code",null,"format",-1),v=d("code",null,"diff",-1),N=d("code",null,"dayjs",-1),W=d("h2",{id:"对象关系参考",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#对象关系参考","aria-hidden":"true"},"#"),t(" 对象关系参考")],-1),J=d("p",null,"lunisloar采用面向对象开发，下图可以帮助了解各个对象关系。",-1);function F(A,B){const e=o("ExternalLinkIcon"),a=o("Mermaid");return h(),c("div",null,[l,d("p",null,[t("农历中，通过月相圆缺纪月，此属于"),p,t("范畴，本库会以一个"),u,t("对象记录转换好的阴历数据。 而公历与阴历的转换规律性不大，使用"),d("a",g,[t("寿星天文历"),r(e)]),t("的计算方式又过于复杂也影响代码体积，故本库的核心采用查表法进行转换，其数据来自香港天文台【"),d("a",_,[t("公历与农历日期对照表"),r(e)]),t("】。其可查询年份范围为"),b,t("。数据抓取和压缩的代码见仓库 "),d("a",f,[t("lunar-crawler"),r(e)]),t("，此处不作详细介绍。")]),m,d("p",null,[d("a",x,[t("moment.js"),r(e)]),t(" 和 "),d("a",k,[t("dayjs"),r(e)]),t(" 是两个比较出名的时间工具库，为了符合大家的使用习惯，"),V,t("针对公历的部分操作将会尽量向"),w,t("看齐，并参考了其代码设计。针对公历部分，尽管lunisolar也有类似dayjs的方法，但并不会cover其所有功能，如果你仅仅是对公历进行操作，推荐使用"),j,t("。lunisolar重点在于农历部分，例如"),y,t("的"),q,t("方法和"),v,t("方法包含"),N,t("这两个方法的功能并与之保持一致，同时加入了对农历的处理，具体功能及使用请继续阅读文档。")]),W,J,r(a,{id:"mermaid-331",code:"eJx1kMtKw0AUhvd9ii7bxRAQBVcuasWNrtqduBja0QRzgUmKdCu0tlpMldAUUioFu5JeFekF2pfJJPEtPMn0YgVnMcz83zln/vmvZO02J2JqxLPpWByWXFAlXZMxTSQ2x2QSIVZx2Hx2tpZYv+0uHhE6knWauNjIl8kYn6JTaCm9s54NNcfwwOFW/25+sqcy6NCG6VYPHu68oQV6JhyVJVTZMr/b9ktt1m+xZU3wzBd3/gWFWZGcanl9d4TdFdjbPVs2oeAc0xtCdW4qsoFQkWAqKJpqiEIeFwVRK1BmNtjCZo7jvY7YYBqMOqGLVNSVSYVng3Az0S1FsZoT+R0AQu7MCjo1ICcyUYhqHPxi/uzDt8ahWSpdU6zwIPiI/zrXlLWGnjUIbJNNwwkbF2vuOxNWHod75Tnc6xW/V901uPo0pOJO5oAiVzyPVXrwjNng+QIH5Q+sVwF6jSnAtERJzpA0dW8/9gMZdeRG"})])}const Z=s(i,[["render",F],["__file","about.html.vue"]]);export{Z as default};
