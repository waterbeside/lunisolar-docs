import{_ as u,V as e,W as s,X as l,$ as d,a0 as o,Y as t,F as _}from"./framework-54e49b68.js";const r={},a=l("h1",{id:"char8ex-八字类-增强",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#char8ex-八字类-增强","aria-hidden":"true"},"#"),t(" Char8Ex 八字类（增强）")],-1),i=l("thead",null,[l("tr",null,[l("th",null,"属性或方法"),l("th",null,"描述"),l("th",null,"参数"),l("th",null,"返回类型")])],-1),h=l("tr",null,[l("td",null,"me"),l("td",null,"取得日主"),l("td"),l("td",null,"Stem")],-1),c=l("tr",null,[l("td",null,"sexValue"),l("td",null,"取得性别值"),l("td"),l("td",null,"0 | 1")],-1),m=l("tr",null,[l("td",null,"sex"),l("td",null,"取得性别 如'乾造' 或 '坤造'"),l("td",null,"string"),l("td")],-1),x=l("td",null,"year",-1),f=l("td",null,"取得年柱对象",-1),p=l("td",null,null,-1),P=l("tr",null,[l("td",null,"month"),l("td",null,"取得月柱对象"),l("td"),l("td",null,"Pillar")],-1),S=l("tr",null,[l("td",null,"day"),l("td",null,"取得日柱对象"),l("td"),l("td",null,"Pillar")],-1),y=l("tr",null,[l("td",null,"hour"),l("td",null,"取得时柱对象"),l("td"),l("td",null,"Pillar")],-1),B=l("td",null,"gods",-1),C=l("td",null,"取得各柱所有神煞",-1),b=l("td",null,null,-1),g=l("tr",null,[l("td",null,"list"),l("td",null,"四柱列表"),l("td",null,"[Pillar, Pillar, Pillar, Pillar]"),l("td")],-1),G=l("td",null,"embryo()",-1),V=l("td",null,"胎元, 返回一个天干地支对象",-1),k=l("td",null,null,-1),v=l("tr",null,[l("td",null,"ownSign()"),l("td",null,"命宫, 返回一个天干地支对象"),l("td",null,"SB"),l("td")],-1),N=l("tr",null,[l("td",null,"bodySign()"),l("td",null,"身宫, 返回一个天干地支对象"),l("td",null,"SB"),l("td")],-1),w=l("tr",null,[l("td",null,"toString()"),l("td",null,"返回八字的基本信息描述"),l("td",null,"SB"),l("td")],-1);function E(L,R){const n=_("RouterLink");return e(),s("div",null,[a,l("table",null,[i,l("tbody",null,[h,c,m,l("tr",null,[x,f,p,l("td",null,[d(n,{to:"/api/pillar.html"},{default:o(()=>[t("Pillar")]),_:1})])]),P,S,y,l("tr",null,[B,C,b,l("td",null,[t("{year: "),d(n,{to:"/api/c8God.html"},{default:o(()=>[t("C8God")]),_:1}),t("[], month: C8God[], day: C8God[], hour: C8God[]}")])]),g,l("tr",null,[G,V,l("td",null,[d(n,{to:"/api/sb.html"},{default:o(()=>[t("SB")]),_:1})]),k]),v,N,w])])])}const T=u(r,[["render",E],["__file","char8ex.html.vue"]]);export{T as default};