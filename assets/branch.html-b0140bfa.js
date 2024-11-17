import{_ as e,V as i,W as t,X as n,$ as a,Y as c,Z as d,a0 as p,F as l}from"./framework-c4e96bdb.js";const r={},o=n("h1",{id:"地支",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#地支","aria-hidden":"true"},"#"),a(" 地支")],-1),u=n("h2",{id:"取得地支实例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#取得地支实例","aria-hidden":"true"},"#"),a(" 取得地支实例")],-1),v=n("strong",null,"Branch",-1),m=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 例如，取得年柱的地支</span>
<span class="token keyword">const</span> branch <span class="token operator">=</span> <span class="token function">lunisolar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>char8<span class="token punctuation">.</span>year<span class="token punctuation">.</span>branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者可以直接创建地支实例</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 创建方法</span>
lunisolar<span class="token punctuation">.</span>Branch<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 例，创建地支为‘子’的实例，传入子的地支序号0即可</span>
<span class="token keyword">const</span> branch <span class="token operator">=</span> lunisolar<span class="token punctuation">.</span>Branch<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="地支名" tabindex="-1"><a class="header-anchor" href="#地支名" aria-hidden="true">#</a> 地支名</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function h(b,k){const s=l("RouterLink");return i(),t("div",null,[o,u,n("p",null,[a("通过SB实例的branch属性可取得天干对象"),c(s,{to:"/api/branch.html"},{default:d(()=>[v]),_:1})]),m])}const y=e(r,[["render",h],["__file","branch.html.vue"]]);export{y as default};
