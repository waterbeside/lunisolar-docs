import{_ as t,V as d,W as e,Z as r}from"./framework-54e49b68.js";const o={},a=r('<h1 id="god-神煞类" tabindex="-1"><a class="header-anchor" href="#god-神煞类" aria-hidden="true">#</a> God 神煞类</h1><p>（theGods插件）</p><p>通过theGods对象所取得的神煞，都是一个God对象，其包含以下属性：</p><table><thead><tr><th>属性或方法</th><th>描述</th><th>参数</th><th>返回类型</th></tr></thead><tbody><tr><td>key</td><td>取得神煞key，一般為其繁体中文名称</td><td></td><td>string</td></tr><tr><td>name</td><td>取得神煞国际化翻译后的名称，</td><td></td><td>string</td></tr><tr><td>good</td><td>神煞所宜</td><td></td><td>string[]</td></tr><tr><td>bad</td><td>神煞所忌</td><td></td><td>string[]</td></tr><tr><td>cate</td><td>神煞分类</td><td></td><td>&#39;year&#39; | &#39;month&#39; | &#39;day&#39; | &#39;hour&#39; | null</td></tr><tr><td>luckLevel</td><td>神煞吉凶, 大于0为吉，小于0为凶</td><td></td><td>number</td></tr></tbody></table>',4),h=[a];function n(s,c){return d(),e("div",null,h)}const l=t(o,[["render",n],["__file","god.html.vue"]]);export{l as default};