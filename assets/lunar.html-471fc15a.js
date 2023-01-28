import{_ as a,V as e,W as t,X as n,Y as s,Z as i}from"./framework-54e49b68.js";const p={},c=n("h1",{id:"阴历",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#阴历","aria-hidden":"true"},"#"),s(" 阴历")],-1),l=n("div",{class:"hint-container info"},[n("p",{class:"hint-container-title"},"阴历小知识"),n("ul",null,[n("li",null,"月亮圆缺一周期为一个月，月即为太阴，所以叫阴历。"),n("li",null,[s("一个阴历月约为29.53天，12个月共 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"12"),n("mo",null,"∗"),n("mn",null,"29.53"),n("mo",null,"="),n("mn",null,"354.36")]),n("annotation",{encoding:"application/x-tex"},"12 * 29.53 = 354.36")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"12"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"∗"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"29.53"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"354.36")])])]),s(" 天。而一个回归年为365.2422日。一年就相差10.88天，所以大概2.7年就要闰一个月来补回每年相差的时间。所以存在闰月")])])],-1),o=i(`<p>Lunisolar实例上包含一个<strong>lunar</strong>属性，该属返回一个<strong>Lunar</strong>实例可以此取得各项阴历数据</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token operator">:</span> Lunar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="取值" tabindex="-1"><a class="header-anchor" href="#取值" aria-hidden="true">#</a> 取值</h2><h3 id="年" tabindex="-1"><a class="header-anchor" href="#年" aria-hidden="true">#</a> 年</h3><p>取得当年正月初一所在的公历年</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span>year
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取得字符串形式的年份名，如&#39;二〇二二&#39;</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span><span class="token function">getYearName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="月" tabindex="-1"><a class="header-anchor" href="#月" aria-hidden="true">#</a> 月</h3><p>取得阴历月份，以数字形式返回，当为闰月时，月份数会加100, 如闰二月，则返回 102</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> 
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span>month

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取得字符串形式的月份名，如&#39;闰二月&#39;</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span><span class="token function">getMonthName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否大月" tabindex="-1"><a class="header-anchor" href="#是否大月" aria-hidden="true">#</a> 是否大月</h3><p>当前日期所在月份是否大月,</p><blockquote><p>阴历大月为30天，小月为29天</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> 
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span>isBigMonth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否闰月" tabindex="-1"><a class="header-anchor" href="#是否闰月" aria-hidden="true">#</a> 是否闰月</h3><p>当前日期所在月份是否闰月</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> 
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span>isLeapMonth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Info</p></div><h3 id="日" tabindex="-1"><a class="header-anchor" href="#日" aria-hidden="true">#</a> 日</h3><p>取得月份里的日期</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> 范围为 [1, 30]
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span>day
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取得字符串形式的日期名，如&#39;初一&#39;</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span><span class="token function">getDayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时辰" tabindex="-1"><a class="header-anchor" href="#时辰" aria-hidden="true">#</a> 时辰</h3><p>取得时辰序号，从0开始，0 ~ 11 对应 子时 ~ 亥时</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span> 范围为 [0, 11]
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span>hour
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取得时辰字符串, 如 &#39;子&#39;</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span><span class="token function">getHourName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="月相" tabindex="-1"><a class="header-anchor" href="#月相" aria-hidden="true">#</a> 月相</h3><p>取得当天月相，如朔、弦、望、晦等，不在上述其中之一者，返回空字符串</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span>phaseOfTheMoon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="当年的闰月月份" tabindex="-1"><a class="header-anchor" href="#当年的闰月月份" aria-hidden="true">#</a> 当年的闰月月份</h3><p>当年农历的闰月，返回月份的数字， 如果没有闰月，返回0</p><p>可用于检查当年有没有闰年</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span>leapMonth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要看当年的闰月是否大月：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span>
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span>leapMonthIsBig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正月初一所在日" tabindex="-1"><a class="header-anchor" href="#正月初一所在日" aria-hidden="true">#</a> 正月初一所在日</h3><p>取得当年正月初一对应的公历日期, 返回<code>Date</code>对象</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Date<span class="token punctuation">}</span>
 */</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lunar<span class="token punctuation">.</span><span class="token function">getLunarNewYearDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),u=[c,l,o];function d(r,m){return e(),t("div",null,u)}const k=a(p,[["render",d],["__file","lunar.html.vue"]]);export{k as default};
