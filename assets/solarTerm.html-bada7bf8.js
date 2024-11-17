import{_ as t,V as p,W as i,X as s,$ as n,Y as o,Z as c,a0 as a,F as l}from"./framework-c4e96bdb.js";const u={},r=a('<h1 id="节气" tabindex="-1"><a class="header-anchor" href="#节气" aria-hidden="true">#</a> 节气</h1><div class="hint-container info"><p class="hint-container-title">Info</p><ul><li>节气是农历的重要组成部分，依黄经度数划分，属于阳历范畴，是天干地支纪时法的换岁换月依据，是中国大多数传统术数的重要基础</li><li>自1645年起至今所使用的廿四节气是依据太阳黄经度数划分，把黄道360度圆周划分成24等份，每等份15度，每15度为一个节气，全年共二十四个节气。</li><li>节气是某一个时该点，而非某个时间段，但由于本库采用的转换数据只精确到天，所以本库的交节（更换八字月柱），也是以日为准。</li></ul></div><h2 id="取得当前节气" tabindex="-1"><a class="header-anchor" href="#取得当前节气" aria-hidden="true">#</a> 取得当前节气</h2>',3),d=s("strong",null,"SolarTerm",-1),m=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>SolarTerm | null<span class="token punctuation">}</span> 
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>solarTerm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最近节气" tabindex="-1"><a class="header-anchor" href="#最近节气" aria-hidden="true">#</a> 最近节气</h2><p>取得当前日期之前的最近的节气</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token parameter">nodeFlag</span> 取的节气点，0: 取节， 1: 取气, 2: 节或气都取
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>SolarTerm | null<span class="token punctuation">}</span> 
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">recentSolarTerm</span><span class="token punctuation">(</span>nodeFlag<span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">// use</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">recentSolarTerm</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 取得当前日期在哪那个最近的节之后</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">recentSolarTerm</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 取得当前日期在哪那个最近的气之后</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">recentSolarTerm</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 取得当前日期在哪那个最近的节气之后</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="季节" tabindex="-1"><a class="header-anchor" href="#季节" aria-hidden="true">#</a> 季节</h2><blockquote><p>季节是依节气来划分的</p></blockquote><p>取当前日期所在季节的索引值，范围 [0, 3]</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> 
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeasonIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取当前日期所在季节名称</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> 
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSeason</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节气名称列表" tabindex="-1"><a class="header-anchor" href="#节气名称列表" aria-hidden="true">#</a> 节气名称列表</h2><p>通过调用 SolarTerm类的静态方法取得节气列表，</p><p>该列表从每年的第一个节气(小寒)开始按顺序列出所有节气名称</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span>
 */</span>
lunisolar<span class="token punctuation">.</span>SolarTerm<span class="token punctuation">.</span><span class="token function">getNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定年的节气日列表" tabindex="-1"><a class="header-anchor" href="#指定年的节气日列表" aria-hidden="true">#</a> 指定年的节气日列表</h2><p>取得指定年的节气日期列表，长度24，返回 <code>number[]</code></p><p>该列表是从每年的第一个节气(小寒)开始按顺序列出的，只包含<code>日</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> year 指定的年份
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span>
 */</span>
lunisolar<span class="token punctuation">.</span>SolarTerm<span class="token punctuation">.</span><span class="token function">getYearTermDayList</span><span class="token punctuation">(</span>year<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span>

<span class="token comment">// 示例： 返回2023年的节气日期列表</span>
<span class="token keyword">const</span> termList <span class="token operator">=</span> lunisolar<span class="token punctuation">.</span>SolarTerm<span class="token punctuation">.</span><span class="token function">getYearTermDayList</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">)</span> <span class="token comment">// [5,20,4,19,6,21,5,20,6,21,6,21,7,23,8,23,8,23,8,24,8,22,7,22]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>节气列表从每年公历1月的第一个节气(小寒)开始按顺列出，因为公历每个月固定包含2个节气，知道是第几个节气，便能很易算是是第几个月份。所以列表只给出了<strong>日</strong>，不包含<strong>月</strong></p></div><p>示例：取得2023年所有节气名及其日期</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> lunisolar <span class="token keyword">from</span> <span class="token string">&#39;lunisolar&#39;</span>

<span class="token keyword">const</span> termList <span class="token operator">=</span> lunisolar<span class="token punctuation">.</span>SolarTerm<span class="token punctuation">.</span><span class="token function">getYearTermDayList</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">)</span> <span class="token comment">// 取得节气日列表</span>
<span class="token keyword">const</span> nameList <span class="token operator">=</span> lunisolar<span class="token punctuation">.</span>SolarTerm<span class="token punctuation">.</span><span class="token function">getNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 取得节气名列表</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">24</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> names<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">// 节气名</span>
  <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 月份</span>
  <span class="token keyword">const</span> d <span class="token operator">=</span> yearTermList<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token comment">// 日</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">2023年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>m<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">月</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>d<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">日</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** result
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
23 冬至 2023年12月22日
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定年月的节和气" tabindex="-1"><a class="header-anchor" href="#指定年月的节和气" aria-hidden="true">#</a> 指定年月的节和气</h2><p>取得指定月的节和气日期，返回 [节, 气]</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token parameter">year</span> 公历年
  * <span class="token keyword">@param</span> <span class="token parameter">month</span> 公历月份
  * <span class="token keyword">@return</span> <span class="token punctuation">{</span>[number, number]<span class="token punctuation">}</span> [节, 气]
  */</span>
lunisolar<span class="token punctuation">.</span>SolarTerm<span class="token punctuation">.</span><span class="token function">getMonthTerms</span><span class="token punctuation">(</span>year<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> month<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span>

<span class="token comment">// 示例： 返回2023年2月的节和气的日期</span>
<span class="token keyword">const</span> termList <span class="token operator">=</span> lunisolar<span class="token punctuation">.</span>SolarTerm<span class="token punctuation">.</span><span class="token function">getYearTermDayList</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// [4, 19]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function k(v,b){const e=l("RouterLink");return p(),i("div",null,[r,s("p",null,[n("返回当前日期的节气对象 "),o(e,{to:"/api/solarTerm.html"},{default:c(()=>[d]),_:1}),n("，如果不是节气，返回null")]),m])}const g=t(u,[["render",k],["__file","solarTerm.html.vue"]]);export{g as default};
