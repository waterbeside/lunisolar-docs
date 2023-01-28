import{_ as n,V as a,W as s,Z as e}from"./framework-54e49b68.js";const i={},c=e(`<h1 id="地支" tabindex="-1"><a class="header-anchor" href="#地支" aria-hidden="true">#</a> 地支</h1><p>通过SB实例的branch属性可取得天干对象Branch</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> branch <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>char8<span class="token punctuation">.</span>year<span class="token punctuation">.</span>branch <span class="token comment">// 取得年柱的SB实例</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="地支名" tabindex="-1"><a class="header-anchor" href="#地支名" aria-hidden="true">#</a> 地支名</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="地支索引" tabindex="-1"><a class="header-anchor" href="#地支索引" aria-hidden="true">#</a> 地支索引</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="地支五行" tabindex="-1"><a class="header-anchor" href="#地支五行" aria-hidden="true">#</a> 地支五行</h2><p>返回五行对象实例 Element5</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Element5<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>e5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="地支藏干" tabindex="-1"><a class="header-anchor" href="#地支藏干" aria-hidden="true">#</a> 地支藏干</h2><p>取得地支所藏的天干对象列表，长度最多3个，分别为 <code>[本气, 中 气, 余气]</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Stem[]<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>hiddenStems
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三合地支" tabindex="-1"><a class="header-anchor" href="#三合地支" aria-hidden="true">#</a> 三合地支</h2><p>三合地支, 返回当前地支的另外两个与之三合的地支</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>[Branch, Branch]<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>triad
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三合地支五行" tabindex="-1"><a class="header-anchor" href="#三合地支五行" aria-hidden="true">#</a> 三合地支五行</h2><p>三合的五行属性</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Element5<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>triadE5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六合地支" tabindex="-1"><a class="header-anchor" href="#六合地支" aria-hidden="true">#</a> 六合地支</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Branch<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>group6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六合地支五行" tabindex="-1"><a class="header-anchor" href="#六合地支五行" aria-hidden="true">#</a> 六合地支五行</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Elment5<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>group6E5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相刑" tabindex="-1"><a class="header-anchor" href="#相刑" aria-hidden="true">#</a> 相刑</h2><p>取得所刑的地支</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Branch<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>punishing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取得被什么地支所刑</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Branch<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>punishBy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相冲" tabindex="-1"><a class="header-anchor" href="#相冲" aria-hidden="true">#</a> 相冲</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Branch<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>conflict
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相破" tabindex="-1"><a class="header-anchor" href="#相破" aria-hidden="true">#</a> 相破</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Branch<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>destroying
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相害" tabindex="-1"><a class="header-anchor" href="#相害" aria-hidden="true">#</a> 相害</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Branch<span class="token punctuation">}</span>
 */</span>
branch<span class="token punctuation">.</span>harming
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十二地支列表" tabindex="-1"><a class="header-anchor" href="#十二地支列表" aria-hidden="true">#</a> 十二地支列表</h2><p>此为静态方法， 取得十二地支名称列表</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span>
 */</span>
lunisolar<span class="token punctuation">.</span>Branch<span class="token punctuation">.</span><span class="token function">getNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),t=[c];function d(r,l){return a(),s("div",null,t)}const o=n(i,[["render",d],["__file","branch.html.vue"]]);export{o as default};
