(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{389:function(t,e,n){"use strict";var o=n(1),r=n(78).findIndex,l=n(145),d="findIndex",c=!0;d in[]&&Array(1).findIndex((function(){c=!1})),o({target:"Array",proto:!0,forced:c},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(d)},398:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(110).default)("6f65ed1b",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n(389);var o=n(111),r=n(0),l=[{label:"texts.main-labels.menu.about-us",slug:"about"},{label:"texts.main-labels.menu.lessons",slug:"lessons"},{label:"texts.main-labels.menu.playgrounds",slug:"playground"}],d=Object(o.c)("menu",(function(){var t=Object(r.ref)("about"),e=Object(r.ref)(0),n=function(n){void 0!==n&&(t.value=l[n].slug,e.value=n)},o=function(){if(window){var t=window.location.hash.substring(1);if(t){var e=l.findIndex((function(e){return e.slug===t}));e>=0&&n(e)}else n(0)}};return Object(r.onMounted)((function(){o(),window&&window.addEventListener("hashchange",o,!1)})),{buttons:l,selected:t,selectedIndex:e,setSelected:n,init:o}}));e.a=d},460:function(t,e,n){"use strict";var o=n(398),r=n.n(o);n.d(e,"default",(function(){return r.a}))},461:function(t,e,n){var o=n(109)(!1);o.push([t.i,".menu_-JZwH{--transition-duration: 0.5s;--item-width: 12.5rem;position:relative}.menuButtons_hthdd{height:2.31rem;display:flex;align-items:center}.menuButtons_hthdd a{text-align:center;width:var(--item-width);color:var(--menu-color);font-size:1.38rem;background-color:rgba(0,0,0,0);transition:all .2s}.menuButtons_hthdd a:hover{color:var(--menu-color-hover)}.menuButtons_hthdd .selected_VOwTB{color:var(--menu-color-hover);font-size:1.75rem}.underlines_gEp3e>div{position:absolute;bottom:0;left:0;transform:translate3d(calc(var(--line-position, 0) * var(--item-width)), 0, 0);background-color:var(--menu-color);height:2px;width:var(--item-width);mix-blend-mode:initial;transition:transform var(--transition-duration)}.underlines_gEp3e>div:nth-child(2){transition:transform calc(var(--transition-duration)*.8)}.underlines_gEp3e>div:nth-child(3){transition:transform calc(var(--transition-duration)*1.2)}",""]),o.locals={menu:"menu_-JZwH",menuButtons:"menuButtons_hthdd",selected:"selected_VOwTB",underlines:"underlines_gEp3e"},t.exports=o},525:function(t,e,n){"use strict";n.r(e);var o=n(18),menu=n(445),r={__name:"MainMenu",setup:function(t){return{__sfc:!0,store:Object(menu.a)()}}},l=n(460),d=n(76);var component=Object(d.a)(r,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{class:t.$style.menu},[e("span",{class:t.$style.menuButtons},t._l(n.store.buttons,(function(button){return e("a",{key:button.slug,class:Object(o.a)({},t.$style.selected,n.store.selected===button.slug),attrs:{href:"#".concat(button.slug)}},[t._v("\n            "+t._s(t.$t(button.label))+"\n        ")])})),0),t._v(" "),e("div",{class:t.$style.underlines,style:"--line-position: ".concat(n.store.selectedIndex)},[e("div"),t._v(" "),e("div"),t._v(" "),e("div")])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports}}]);