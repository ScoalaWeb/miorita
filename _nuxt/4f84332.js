(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{393:function(e,t,n){"use strict";n(23),n(77);var o=n(111),r=n(0),l=n(425),c="workCode",d=Object(o.c)("lesson",(function(){var e=Object(r.ref)({size:{x:4,y:4},start:{position:{x:0,y:0},orientation:"E",picked:{}},objects:[{type:"grass",position:{x:1,y:0}}],timeout:1e3,title:"",details:[]}),t=function(title){return title.replace(/[^a-z0-9]/g,"")},code=Object(r.ref)(""),n=Object(r.ref)(null);return{lessons:l,options:e,setOptions:function(t){e.value=JSON.parse(JSON.stringify(t))},code:code,setCode:function(n){code.value=n,function(n){if(!e.value.title)return sessionStorage.setItem(c,n);try{sessionStorage.setItem(c+t(e.value.title),n)}catch(e){return""}}(n)},initCode:function(n){code.value=function(){if(!e.value.title)return sessionStorage.getItem(c);try{return sessionStorage.getItem(c+t(e.value.title))}catch(e){return""}}()||n||""},editor:n,setEditor:function(e){n.value=e}}}));t.a=d},401:function(e,t,n){var content=n(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(110).default)("442e59f8",content,!0,{sourceMap:!1})},425:function(e){e.exports=JSON.parse('[{"title":"Meet Miorița","description":"take a look at what Miorița can do","link":"lessons/1-intro","background":"1-bg"},{"title":"Conditional statements","description":"learn to run different sets of instructions depending on a condition.","link":"lessons/2-if","background":"2-bg"},{"title":"Loops & variables","description":"find ways to run the same commands multiple times in succesion.","link":"lessons/3-while","background":"3-bg"},{"title":"Functions","description":"create your own insructions that you can reuse whenever you want.","link":"lessons/4-function","background":"4-bg"}]')},471:function(e,t,n){"use strict";var o=n(401),r=n.n(o);n.d(t,"default",(function(){return r.a}))},472:function(e,t,n){var o=n(109)(!1);o.push([e.i,'.panel_U9kuM{width:33.5vw;height:100%;max-height:100%;overflow:hidden;position:relative;display:flex;flex-direction:column;padding-block:.4rem;background-color:var(--panel-background-color);border-right:1.5px solid var(--panel-border-color);transition:width .2s linear}.panel_U9kuM.closed_2KILL{grid-template-columns:1fr;width:2.8rem;padding-inline-end:.4rem;user-select:none}.panel_U9kuM.closed_2KILL .toggle_zrwdz .line_29at3{background-color:var(--panel-border-color)}.panel_U9kuM.closed_2KILL .toggle_zrwdz .line_29at3::before,.panel_U9kuM.closed_2KILL .toggle_zrwdz .line_29at3::after{background-color:var(--panel-border-color)}.panel_U9kuM.closed_2KILL .toggle_zrwdz .line_29at3::before{transform:translateY(-0.5rem)}.panel_U9kuM.closed_2KILL .toggle_zrwdz .line_29at3::after{transform:translateY(0.5rem)}.panel_U9kuM.closed_2KILL .section_Edp1b{opacity:0;animation:slide-out_csOMZ .5s linear}.toggle_zrwdz{width:2rem;height:2rem;position:absolute;top:.5rem;right:.33rem;z-index:100;display:grid;justify-self:center;justify-content:center;align-items:center;cursor:pointer;transition:all .3s linear}.toggle_zrwdz .line_29at3{width:1.5rem;height:2px;background-color:rgba(0,0,0,0)}.toggle_zrwdz .line_29at3::before,.toggle_zrwdz .line_29at3::after{content:"";position:absolute;width:1.5rem;height:2px;background-color:var(--panel-border-color);transition:transform .5s linear}.toggle_zrwdz .line_29at3::before{transform:rotate(45deg)}.toggle_zrwdz .line_29at3::after{transform:rotate(-45deg)}.section_Edp1b{display:block;border-block-end:1px solid var(--panel-border-color);color:var(--text-color);transition:opacity .2s linear;opacity:1;overflow-y:auto;overflow-x:hidden;flex-grow:1}.section_Edp1b>*{padding:.5rem 1rem}.section_Edp1b:last-child{border-block-end:0}.title_Z2jJm{font-family:var(--font-highlight);font-size:2rem;font-weight:700;padding-block:.3rem;white-space:nowrap;width:31vw}.text_t1\\+Ef{width:31vw;margin:0;font-size:1.25rem;display:flex;flex-direction:column}.section--paragraph_IkimJ{font-family:var(--font-basic)}.section--paragraph_IkimJ .text_t1\\+Ef{gap:.7rem}.section--code_M2nm\\+{font-family:var(--font-default)}.section--code_M2nm\\+ .text_t1\\+Ef p{user-select:all}@keyframes slide-out_csOMZ{from{display:block;transform:translateX(0)}to{display:none;transform:translateX(-10rem)}}@keyframes slide-in_QS77T{from{transform:translateX(-2rem)}to{transform:translateX(0)}}',""]),o.locals={panel:"panel_U9kuM",closed:"closed_2KILL",toggle:"toggle_zrwdz",line:"line_29at3",section:"section_Edp1b","slide-out":"slide-out_csOMZ",title:"title_Z2jJm",text:"text_t1+Ef","section--paragraph":"section--paragraph_IkimJ","section--code":"section--code_M2nm+","slide-in":"slide-in_QS77T"},e.exports=o},528:function(e,t,n){"use strict";n.r(t);n(47);var o=n(0),r=n(393),l=function(){return l=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e},l.apply(this,arguments)},c=Object(o.defineComponent)({__name:"TheDescription",props:{value:{type:Boolean},lesson:null},emits:["input"],setup:function(e,t){var n=t.emit,c=e,d=Object(r.a)(),details=Object(o.computed)((function(){return c.lesson.details.map((function(e){return l(l({},e),{text:e.text.split("\n")})}))}));return{__sfc:!0,props:c,emit:n,store:d,details:details,handleClick:function(){n("input",!c.value)},resizeEditor:function(){d.editor&&d.editor.layout()}}}}),d=n(471),f=n(76);var component=Object(f.a)(c,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{class:[e.$style.panel,e.value?"":e.$style.closed],on:{transitionend:n.resizeEditor}},[t("div",{class:e.$style.toggle,on:{click:n.handleClick}},[t("div",{class:e.$style.line})]),e._v(" "),e._l(n.details,(function(n){return t("div",{key:n.title,class:[e.$style.section,e.$style["section--".concat(n.class)]]},[t("p",{class:e.$style.title},[e._v(e._s(n.title))]),e._v(" "),t("div",{class:e.$style.text},e._l(n.text,(function(n){return t("p",{key:n},[e._v("\n                "+e._s(n)+"\n            ")])})),0)])}))],2)}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null);t.default=component.exports}}]);