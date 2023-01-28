import{_ as n,V as s,W as a,Z as t}from"./framework-54e49b68.js";const p={},o=t(`<h1 id="时间差-diff" tabindex="-1"><a class="header-anchor" href="#时间差-diff" aria-hidden="true">#</a> 时间差 diff</h1><p><code>lunisolar(date).diff(date, unit)</code> 可计算两个日期的时间差。</p><p>diff 方法包含两个参数：<code>date</code> 和 <code>unit</code></p><p>参数：</p><ul><li><strong>date</strong>: <em>string | number | Date | Lunisolar</em> 为与当前实作比较的时间</li><li><strong>unit</strong>: <em>string</em> 时间单位，单位见下文表格，单位不区分大小写，支持复数和缩写形式。默认为 <code>ms</code></li></ul><table><thead><tr><th>单位</th><th>缩写</th><th>描述</th></tr></thead><tbody><tr><td>lunarYear</td><td>lY</td><td>阴历年</td></tr><tr><td>lunarMonth</td><td>lM</td><td>阴历月</td></tr><tr><td>lunarDay</td><td>lD</td><td>阴历日</td></tr><tr><td>lunarHour</td><td>lH</td><td>时辰</td></tr><tr><td>day</td><td>d</td><td>天</td></tr><tr><td>month</td><td>M</td><td>月份</td></tr><tr><td>year</td><td>y</td><td>年</td></tr><tr><td>hour</td><td>h</td><td>小时</td></tr><tr><td>minute</td><td>m</td><td>分钟</td></tr><tr><td>second</td><td>s</td><td>秒</td></tr><tr><td>millisecond</td><td>ms</td><td>毫秒</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> lsr1 <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token string">&#39;2020/01/01 00:00:00&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> lsr2 <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token string">&#39;2020/01/02 00:00:00&#39;</span><span class="token punctuation">)</span>
lsr1<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>lsr2<span class="token punctuation">,</span> <span class="token string">&#39;ms&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 86400000 </span>
lsr1<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>lsr2<span class="token punctuation">)</span> <span class="token comment">// 86400000 默认以毫秒为单位</span>
lsr1<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>lsr2<span class="token punctuation">,</span> <span class="token string">&#39;s&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 86400</span>
lsr1<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span><span class="token string">&#39;2020/02/01 00:00:00&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;M&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 1 第一个参数可接受字符串</span>

<span class="token keyword">const</span> lsr3 <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token string">&#39;2018/01/01&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> lsr4 <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token string">&#39;2022/02/02&#39;</span><span class="token punctuation">)</span>
lsr3<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>lsr4<span class="token punctuation">,</span> <span class="token string">&#39;lY&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 5 相差5个阴历年</span>
lsr3<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>lsr4<span class="token punctuation">,</span> <span class="token string">&#39;lM&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 51 相差51个阴历月</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token string">&#39;2018/02/10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span><span class="token string">&#39;2022/02/02&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lM&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 49.233333 相差约49.233个阴历月</span>
<span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token string">&#39;2018/02/10 00:00:00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span><span class="token string">&#39;2018/02/10 00:00:00&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lM&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 49.233333 相差约49.233个阴历月</span>

<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">&#39;2020/01/02 00:00:00&#39;</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token string">&#39;2020/01/01 00:00:00&#39;</span>
a<span class="token punctuation">.</span><span class="token function">diff</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// -86400000 a比b大的话将返回负数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>阴历的时间差计算，如 2018/02/10 （二〇一七年十二月廿五）和 2018/02/16（二〇一八年正月初一）这两个日期，实际只相差五天，但因为两个所在的阴历年不同，所以<code>date1.diff(date1,&#39;lY&#39;)</code> 计出的结果是1年，如果采用小数<code>date1.diff(date1,&#39;lY&#39;, true)</code>，会算得 0.016 年。</p><p>而公历的diff会与<code>dayjs.diff</code>的计算方式一致，两个时间天数不足一年, 其取整数是不会按一年算的。如果你想农历也按此方式取整，可以先取浮点数再取整<code>parseInt(date1.diff(date1,&#39;lY&#39;, true))</code></p></blockquote>`,9),e=[o];function c(l,i){return s(),a("div",null,e)}const u=n(p,[["render",c],["__file","diff.html.vue"]]);export{u as default};
