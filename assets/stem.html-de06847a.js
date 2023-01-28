import{_ as n,V as s,W as a,Z as e}from"./framework-54e49b68.js";const t={},i=e(`<h1 id="天干" tabindex="-1"><a class="header-anchor" href="#天干" aria-hidden="true">#</a> 天干</h1><p>通过SB实例的stem属性可取得天干对象Stem</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 例如，取得年柱的天干</span>
<span class="token keyword">const</span> stem <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>char8<span class="token punctuation">.</span>year<span class="token punctuation">.</span>stem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="天干名" tabindex="-1"><a class="header-anchor" href="#天干名" aria-hidden="true">#</a> 天干名</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
stem<span class="token punctuation">.</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="天干索引" tabindex="-1"><a class="header-anchor" href="#天干索引" aria-hidden="true">#</a> 天干索引</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
stem<span class="token punctuation">.</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="天干五行" tabindex="-1"><a class="header-anchor" href="#天干五行" aria-hidden="true">#</a> 天干五行</h2><p>返回五行对象实例 Element5</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Element5<span class="token punctuation">}</span>
 */</span>
stem<span class="token punctuation">.</span>e5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="天干纳甲" tabindex="-1"><a class="header-anchor" href="#天干纳甲" aria-hidden="true">#</a> 天干纳甲</h2><p>取得天干所纳八卦，返回 Trigram8 八卦实例</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Trigram8<span class="token punctuation">}</span>
 */</span>
stem<span class="token punctuation">.</span>trigram8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十天干列表" tabindex="-1"><a class="header-anchor" href="#十天干列表" aria-hidden="true">#</a> 十天干列表</h2><p>此为静态方法， 取得十天干名称列表</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span>
 */</span>
lunisolar<span class="token punctuation">.</span>Stem<span class="token punctuation">.</span><span class="token function">getNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[i];function d(p,l){return s(),a("div",null,c)}const o=n(t,[["render",d],["__file","stem.html.vue"]]);export{o as default};
