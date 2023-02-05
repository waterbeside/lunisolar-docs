import{_ as n,V as s,W as a,Z as e}from"./framework-ad9ccf37.js";const t={},o=e(`<h1 id="五行纳音" tabindex="-1"><a class="header-anchor" href="#五行纳音" aria-hidden="true">#</a> 五行纳音</h1><p>查询胎神要先导入 takeSound 插件， 加载takeSound后，会在SB原型上添加两个属性<code>takeSound</code>和<code>takeSoundE5</code></p><ul><li><code>sb.takeSound</code> 属性返回纳音描述字符串</li><li><code>sb.takeSoundE5</code> 属性返回<strong>纳音五行</strong>的Element5实例</li></ul><p>示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> takeSound <span class="token keyword">from</span> <span class="token string">&#39;lunisolar/plugins/takeSound&#39;</span>
<span class="token keyword">import</span> lunisolar <span class="token keyword">from</span> <span class="token string">&#39;lunisolar&#39;</span>

lunisolar<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>takeSound<span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
  加载advance插件后，
  SB对象（天干地支对象）会添加一个takeSound属性，
 */</span>
<span class="token keyword">const</span> lsr <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token string">&#39;2022-07-08&#39;</span><span class="token punctuation">)</span>
lsr<span class="token punctuation">.</span>char8<span class="token punctuation">.</span>year<span class="token punctuation">.</span>takeSound <span class="token comment">// 金箔金 （取得年干支的纳音）</span>
lsr<span class="token punctuation">.</span>char8<span class="token punctuation">.</span>year<span class="token punctuation">.</span>takeSoundE5<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 金 （取得年干支的纳音五行）</span>
<span class="token comment">// ...</span>
lsr<span class="token punctuation">.</span>char8<span class="token punctuation">.</span>day<span class="token punctuation">.</span>takeSound <span class="token comment">// 大海水 （取得日干支的纳音）</span>
lsr<span class="token punctuation">.</span>takeSound <span class="token comment">// 大海水 （取得日干支的纳音 等同于 lsr.char8.day.takeSound）</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[o];function l(p,i){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","takeSound.html.vue"]]);export{d as default};
