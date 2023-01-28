import{_ as t,V as i,W as p,X as a,Y as n,$ as e,a0 as l,Z as o,F as r}from"./framework-54e49b68.js";const c={},u=a("h1",{id:"lunisolar-工厂函数",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lunisolar-工厂函数","aria-hidden":"true"},"#"),n(" lunisolar 工厂函数")],-1),d=a("h2",{id:"lunisolar",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lunisolar","aria-hidden":"true"},"#"),n(" lunisolar()")],-1),k=a("strong",null,"Lunisolar",-1),h=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">lunisolar</span><span class="token punctuation">(</span>date<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> Date <span class="token operator">|</span> Lunisolar<span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> ConfigType<span class="token punctuation">)</span><span class="token operator">:</span> Lunisolar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="lunisolar-fromlunar" tabindex="-1"><a class="header-anchor" href="#lunisolar-fromlunar" aria-hidden="true">#</a> lunisolar.fromLunar()</h2><p>用于通过阴历创建一个<strong>Lunisolar</strong>实例对象：</p>`,3),m=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FromLunarData</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  year<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> 
  <span class="token comment">// 该年正月初一所在公历年的年份，可以是字符串，默认值为当前日期的年份</span>
  month<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> 
  <span class="token comment">// 阴历月份，可以是字符串，必填, 当月份数大于100时，表明时闰月，如闰4月，可输入104</span>
  day<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> 
  <span class="token comment">// 阴历日，可以是字符串，必填</span>
  hour<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> 
  <span class="token comment">// 时辰索引值或时辰名，默认为0, 即子时。设置时辰后，返回的小时为该时辰的中间时间，如寅时，会返回4点正的时间。</span>
  isLeapMonth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> 
  <span class="token comment">// 指明月份是否闰月，默认为false, 当month设为大于100的数时，会无视此设置</span>
<span class="token punctuation">}</span>

lunisolar<span class="token punctuation">.</span><span class="token function">fromLunar</span><span class="token punctuation">(</span>lunarData<span class="token operator">:</span> FromLunarData<span class="token punctuation">,</span> config<span class="token operator">:</span> ConfigType<span class="token punctuation">)</span><span class="token operator">:</span> Lunisolar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lunisolar-config" tabindex="-1"><a class="header-anchor" href="#lunisolar-config" aria-hidden="true">#</a> lunisolar.config()</h2><p>更改全局配置</p><p>方法会返回lunisolar以便链式操作</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ConfigType</span> <span class="token punctuation">{</span>
  changeAgeTerm<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token comment">// 换岁节气</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 使用语言包的名称</span>
<span class="token punctuation">}</span>
lunisolar<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>config<span class="token operator">:</span> ConfigType<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">typeof</span> lunisolar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lunisolar-extend" tabindex="-1"><a class="header-anchor" href="#lunisolar-extend" aria-hidden="true">#</a> lunisolar.extend()</h2><p>加载插件</p><p>方法会返回lunisolar以便链式操作</p>`,8),b=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>PluginFunc<span class="token punctuation">}</span> 按规则定义的插件
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>T<span class="token punctuation">}</span> 插件用于的参数
 */</span>
lunisolar<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">extend</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>plugin<span class="token operator">:</span> PluginFunc<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">typeof</span> lunisolar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lunisolar-locale" tabindex="-1"><a class="header-anchor" href="#lunisolar-locale" aria-hidden="true">#</a> lunisolar.locale()</h2><p>载入语言包</p><p>方法会返回lunisolar以便链式操作</p>`,4),v=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>LsrLocale | LsrLocale[]<span class="token punctuation">}</span> localeData 语言包
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> unChangeLang 是否使用原来正使用的语言包，默认加载新包时会使用新语言包，设置为true时则只加载而不使用
 */</span>
lunisolar<span class="token punctuation">.</span><span class="token function">localeData</span><span class="token punctuation">(</span>
  localeData<span class="token operator">:</span> LsrLocale <span class="token operator">|</span> LsrLocale<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  unChangeLang<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">typeof</span> lunisolar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lunisolar-lunar" tabindex="-1"><a class="header-anchor" href="#lunisolar-lunar" aria-hidden="true">#</a> lunisolar.Lunar</h2>`,2),f=a("h2",{id:"lunisolar-char8",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lunisolar-char8","aria-hidden":"true"},"#"),n(" lunisolar.Char8")],-1),g=a("h2",{id:"lunisolar-sb",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lunisolar-sb","aria-hidden":"true"},"#"),n(" lunisolar.SB")],-1),_=a("h2",{id:"lunisolar-stem",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lunisolar-stem","aria-hidden":"true"},"#"),n(" lunisolar.Stem")],-1),y=a("h2",{id:"lunisolar-branch",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lunisolar-branch","aria-hidden":"true"},"#"),n(" lunisolar.Branch")],-1),x=a("h2",{id:"lunisolar-element5",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lunisolar-element5","aria-hidden":"true"},"#"),n(" lunisolar.Element5")],-1),L=a("h2",{id:"lunisolar-lunisolar",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lunisolar-lunisolar","aria-hidden":"true"},"#"),n(" lunisolar.Lunisolar")],-1),w=a("h2",{id:"lunisolar-trigram8",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lunisolar-trigram8","aria-hidden":"true"},"#"),n(" lunisolar.Trigram8")],-1),C=a("h2",{id:"lunisolar-direction24",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lunisolar-direction24","aria-hidden":"true"},"#"),n(" lunisolar.Direction24")],-1);function T(D,F){const s=r("RouterLink");return i(),p("div",null,[u,d,a("p",null,[n("用于创建一个"),e(s,{to:"/api/lunisolarClass.html"},{default:l(()=>[k]),_:1}),n("实例对象：")]),h,a("p",null,[n("具体用法请参考文档："),e(s,{to:"/guide/functional/parse.html#lunisolar-fromlunar-%E9%98%B4%E5%8E%86%E5%8F%8D%E6%9F%A5"},{default:l(()=>[n("解析-阴历反查")]),_:1})]),m,a("p",null,[n("具体用法请参考文档："),e(s,{to:"/guide/plugins/about.html"},{default:l(()=>[n("插件-基本说明")]),_:1})]),b,a("p",null,[n("具体用法请参考文档："),e(s,{to:"/guide/i18n.html"},{default:l(()=>[n("国际化")]),_:1})]),v,a("p",null,[n("返回"),e(s,{to:"/api/lunar.html"},{default:l(()=>[n("Lunar")]),_:1}),n("构造函数")]),f,a("p",null,[n("返回"),e(s,{to:"/api/char8.html"},{default:l(()=>[n("Char8")]),_:1}),n("构造函数")]),g,a("p",null,[n("返回"),e(s,{to:"/api/sb.html"},{default:l(()=>[n("SB")]),_:1}),n("构造函数")]),_,a("p",null,[n("返回"),e(s,{to:"/api/stem.html"},{default:l(()=>[n("Stem")]),_:1}),n("构造函数")]),y,a("p",null,[n("返回"),e(s,{to:"/api/branch.html"},{default:l(()=>[n("Branch")]),_:1}),n("构造函数")]),x,a("p",null,[n("返回"),e(s,{to:"/api/element5.html"},{default:l(()=>[n("Element5")]),_:1}),n("构造函数")]),L,a("p",null,[n("返回"),e(s,{to:"/api/lunisolarClass.html"},{default:l(()=>[n("Lunisolar")]),_:1}),n("构造函数")]),w,a("p",null,[n("返回"),e(s,{to:"/api/trigram8.html"},{default:l(()=>[n("Trigram8")]),_:1}),n("构造函数")]),C,a("p",null,[n("返回"),e(s,{to:"/api/direction24.html"},{default:l(()=>[n("Direction24")]),_:1}),n("构造函数")])])}const E=t(c,[["render",T],["__file","lunisolarFact.html.vue"]]);export{E as default};