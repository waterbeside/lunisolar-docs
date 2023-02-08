import{_ as n,V as a,W as s,Z as t}from"./framework-b070b9df.js";const e={},i=t(`<h1 id="胎神占方" tabindex="-1"><a class="header-anchor" href="#胎神占方" aria-hidden="true">#</a> 胎神占方</h1><p>古人认为怀孕以及孕期胎儿的好坏都与胎神有关。所以民间传统习俗里，家里一旦有孕妇，便有各种禁忌，以免惊动胎神。</p><p>胎神每日都会出现在不同的位置，参考《胎神逐日所占游方定局》。</p><p>其中天干地支与胎神位置的规律可用以下口诀记忆：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  ----天干六甲胎神歌----
  甲己之日占在門，乙庚碓磨休移动。
  丙辛廚灶莫相干，丁壬倉庫忌修弄。
  戊癸房床若移整，犯之孕妇堕孩童。

  ----地支六甲胎神歌----
  子午二日碓须忌，丑未廁道莫修移。
  寅申火爐休要动，卯酉大門修当避。
  辰戌雞棲巳亥床，犯着六甲身堕胎。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h2><p>查询胎神要先导入 fetalGod 插件，</p><p>之后可使用lunisolar().fetalGod 取得胎神描述，</p><p>也可以使用lunisolar().fetalGodData 取得胎神数据。</p><p>示例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> fetalGod <span class="token keyword">from</span> <span class="token string">&#39;lunisolar/plugins/fetalGod&#39;</span>
<span class="token keyword">import</span> lunisolar <span class="token keyword">from</span> <span class="token string">&#39;lunisolar&#39;</span>

lunisolar<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>fetalGod<span class="token punctuation">)</span>

<span class="token keyword">const</span> lsr <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token string">&#39;2022-07-08&#39;</span><span class="token punctuation">)</span>
lsr<span class="token punctuation">.</span>fetalGod <span class="token comment">// 倉庫棲外東南</span>
lsr<span class="token punctuation">.</span>fetalGodData<span class="token punctuation">.</span>stemPlace <span class="token comment">// 倉庫</span>
lsr<span class="token punctuation">.</span>fetalGodData<span class="token punctuation">.</span>branchPlace <span class="token comment">// 雞棲</span>
lsr<span class="token punctuation">.</span>fetalGodData<span class="token punctuation">.</span>direction <span class="token comment">// 外東南</span>
lsr<span class="token punctuation">.</span>fetalGodData<span class="token punctuation">.</span>description <span class="token comment">// 倉庫棲外東南</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fetalgoddata-属性" tabindex="-1"><a class="header-anchor" href="#fetalgoddata-属性" aria-hidden="true">#</a> fetalGodData 属性</h2><table><thead><tr><th>属性</th><th>描述</th><th>返回类型</th></tr></thead><tbody><tr><td>stemPlace</td><td>根据天干推算的胎神位置，有以下五种： [&#39;門&#39;, &#39;碓磨&#39;, &#39;廚灶&#39;, &#39;倉庫&#39;, &#39;房床&#39;]</td><td>string</td></tr><tr><td>branchPlace</td><td>根据地支推算的胎神位置，有以下六种：[&#39;碓&#39;, &#39;廁&#39;, &#39;爐&#39;, &#39;門&#39;, &#39;雞棲&#39;, &#39;床&#39;]</td><td>string</td></tr><tr><td>direction</td><td>胎神的方向，如&#39;外东南&#39;、&#39;外西&#39;、&#39;内中&#39; 等</td><td>string</td></tr><tr><td>description</td><td>胎神占方的完整描述，如：&quot;占門碓外東南&quot;</td><td>string</td></tr></tbody></table>`,13),l=[i];function d(o,c){return a(),s("div",null,l)}const p=n(e,[["render",d],["__file","fetalGod.html.vue"]]);export{p as default};
