(window.webpackJsonp=window.webpackJsonp||[]).push([[3,13,39],{384:function(e,t,o){var content=o(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(110).default)("17a26d7e",content,!0,{sourceMap:!1})},385:function(e,t,o){var content=o(421);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(110).default)("cba13f60",content,!0,{sourceMap:!1})},395:function(e,t,o){"use strict";var n=o(111),r=o(0),l=Object(n.c)("scheme",(function(){var e=Object(r.ref)(""),t={light:"light-mode",dark:"dark-mode"};Object(r.onMounted)((function(){var o=t.dark;window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(o=t.light),e.value=localStorage.scheme||o})),Object(r.watch)(e,(function(){var o=document.documentElement.classList;o.remove(t.light,t.dark),o.add(e.value)}));var o=Object(r.computed)((function(){return e.value===t.light}));return{scheme:e,schemes:t,changeScheme:function(){e.value=e.value===t.light?t.dark:t.light,localStorage.scheme=e.value},isLightScheme:o}}));t.a=l},401:function(e,t,o){var content=o(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(110).default)("5d29317e",content,!0,{sourceMap:!1})},402:function(e,t,o){var content=o(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(110).default)("1abac975",content,!0,{sourceMap:!1})},403:function(e,t,o){var content=o(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(110).default)("87261774",content,!0,{sourceMap:!1})},404:function(e,t,o){var content=o(479);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(110).default)("84e30c9a",content,!0,{sourceMap:!1})},405:function(e,t,o){var content=o(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(110).default)("4ce199ce",content,!0,{sourceMap:!1})},412:function(e,t,o){"use strict";o.r(t);var n=o(395),r={__name:"ColorModeSwitcher",setup:function(e){return{__sfc:!0,store:Object(n.a)()}}},l=o(418),c=o(76);var component=Object(c.a)(r,(function(){var e=this,t=e._self._c,o=e._self._setupProxy;return t("i",{staticClass:"micon",class:[e.$style.colorScheme,o.store.isLightScheme?"mi-onlight":"mi-offlight"],on:{click:o.store.changeScheme}})}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports},413:function(e,t,o){"use strict";o.r(t);var n=o(18),r=(o(91),o(13),{data:function(){return{active:!1}},computed:{currentLocale:function(){return this.$i18n.locale},otherLocale:function(){var e=this;return this.$i18n.locales.find((function(t){return t!==e.currentLocale}))}},methods:{setActive:function(){this.active=!this.active}}}),l=o(420),c=o(76);var component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.languageSelector,on:{click:e.setActive}},[t("button",{class:[e.$style.selectedLanguage,Object(n.a)({},e.$style.menuActive,e.active)],attrs:{type:"button"}},[e._v("\n        "+e._s(e.currentLocale.toUpperCase())+"\n        "),t("svg",{class:Object(n.a)({},e.$style.arrowsActive,e.active),attrs:{width:"12",height:"10",viewBox:"0 0 12 10",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M-3.43155e-08 0.785046L1.05 -4.7864e-07L6 3.70093L10.95 -4.5897e-08L12 0.785047L6 5.27103L-3.43155e-08 0.785046ZM-2.41025e-07 5.51402L1.05 4.72897L6 8.42991L10.95 4.72897L12 5.51402L6 10L-2.41025e-07 5.51402Z",fill:"currentColor"}})])]),e._v(" "),t("nuxt-link",{class:[e.$style.otherLanguage,Object(n.a)({},e.$style.active,e.active)],attrs:{to:e.switchLocalePath(e.otherLocale),lang:e.otherLocale,title:e.$t("texts.main-labels.labels.switch-to",e.otherLocale)}},[e._v("\n        "+e._s(e.otherLocale.toUpperCase())+"\n    ")])],1)}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports},414:function(e,t,o){e.exports=o.p+"fonts/RobotoMono-Bold.5563ce5.ttf"},415:function(e,t,o){e.exports=o.p+"fonts/RobotoMono-Regular.c3c88e6.ttf"},418:function(e,t,o){"use strict";var n=o(384),r=o.n(n);o.d(t,"default",(function(){return r.a}))},419:function(e,t,o){var n=o(109)(!1);n.push([e.i,"\n.colorScheme_Fyp-b {\n    display: flex;\n    justify-content: center;\n    width: 2rem;\n    cursor: pointer;\n    color: var(--color-mode);\n    transition: color .5s;\n    font-size: 1.9rem;\n}\n.colorScheme_Fyp-b:hover {\n    color: var(--color-mode-hover);\n}\n",""]),n.locals={colorScheme:"colorScheme_Fyp-b"},e.exports=n},420:function(e,t,o){"use strict";var n=o(385),r=o.n(n);o.d(t,"default",(function(){return r.a}))},421:function(e,t,o){var n=o(109),r=o(422),l=n(!1);l.i(r),l.push([e.i,".languageSelector_qIF3P{position:relative;display:flex;align-items:center;gap:.3rem;z-index:1}.selectedLanguage_BLi3H{border:none;background-color:rgba(0,0,0,0);font-size:1.37rem;font-family:RobotoMono,monospace;cursor:pointer;display:flex;gap:.5rem;padding:.25rem 1rem;border-radius:.62rem;color:var(--language-background-primary);z-index:1}.menuActive_a3Jgr,.selectedLanguage_BLi3H:hover{background-color:var(--language-background-primary);color:var(--language-color-primary)}.languageSelector_qIF3P svg{align-self:flex-end;margin-bottom:.7rem}.otherLanguage_E-uPe{cursor:pointer;position:absolute;display:flex;align-items:flex-end;justify-content:center;padding:2rem 2.31rem .31rem .93rem;font-size:1.37rem;font-family:RobotoMono,monospace;top:.5rem;left:0;border-radius:.62rem;background-color:var(--language-background-secondary);color:var(--language-color-secondary);opacity:0;visibility:hidden;z-index:0;transition:opacity .5s}.otherLanguage_E-uPe:hover{color:var(--language-color-secondary)}.arrowsActive_x4jj3{transition:transform .5s;transform:rotate(180deg)}.active_c3kVQ{visibility:visible;opacity:100}",""]),l.locals={languageSelector:"languageSelector_qIF3P",selectedLanguage:"selectedLanguage_BLi3H",menuActive:"menuActive_a3Jgr",otherLanguage:"otherLanguage_E-uPe",arrowsActive:"arrowsActive_x4jj3",active:"active_c3kVQ"},e.exports=l},422:function(e,t,o){var n=o(109),r=o(382),l=o(414),c=o(415),d=n(!1),f=r(l),m=r(c);d.push([e.i,"@font-face {\n    font-family: RobotoMono;\n    font-style: normal;\n    font-weight: 700;\n    src:\n        url("+f+")\n}\n@font-face {\n    font-family: RobotoMono;\n    font-style: normal;\n    font-weight: 400;\n    src:\n        url("+m+")\n}\n",""]),e.exports=d},450:function(e,t,o){var content=o(722);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(110).default)("75490846",content,!0,{sourceMap:!1})},455:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(528),l=o(523),c=o(529),d=o(530),f=o(531),m=o(757),_=o(393),v=function(){return v=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e},v.apply(this,arguments)},h=Object(n.defineComponent)({__name:"TheLesson",props:{lesson:null,options:null},setup:function(e){var t=e,o=Object(_.a)();o.setOptions(v(v({},t.options),t.lesson));var h=Object(n.ref)(),y=Object(n.ref)(!0),w=Object(n.ref)(0),k=Object(n.ref)(!1),x=Object(n.ref)(0),L=Object(n.ref)(0),z=Object(n.computed)((function(){return(w.value||(x.value+L.value)/2)+"px"})),j=function(){x.value=window.innerWidth*t.options.size.x*.05,L.value=window.innerWidth*(y.value?.4:.5)},$=function(){w.value<x.value?w.value=x.value:w.value>L.value&&(w.value=L.value)},O=function(){j(),$()},S=function(e){var t=w.value-e;return!(t<=x.value)&&t<L.value};return Object(n.watch)(y,(function(){j(),$()})),Object(n.onMounted)((function(){j(),Object(n.nextTick)((function(){var e=h.value.$el.getBoundingClientRect().width;w.value=e})),window.addEventListener("resize",O)})),Object(n.onUnmounted)((function(){window.removeEventListener("resize",O)})),{__sfc:!0,props:t,store:o,sheepfold:h,isDescriptionOpen:y,sheepfoldWidth:w,dragging:k,minWidth:x,maxWidth:L,sheepfoldWidthCss:z,calculateConstraints:j,applyConstraints:$,onResize:O,canResize:S,dragStart:function(){k.value=!0},dragStop:function(){k.value=!1,o.editor.layout()},drag:function(e){if(k.value){var t=e.movementX;S(t)&&(w.value-=t,o.editor.layout())}},TheDescription:r.default,TheEditor:l.default,TheLessonFooter:c.default,TheLessonHeader:d.default,TheResetButton:f.default,TheWorld:m.default}}}),y=o(721),w=o(76);var component=Object(w.a)(h,(function(){var e=this,t=e._self._c,o=e._self._setupProxy;return t("div",{class:e.$style.mainContainer,on:{mousemove:o.drag,mouseup:o.dragStop}},[t(o.TheLessonHeader,{class:e.$style.header}),e._v(" "),t("div",{class:e.$style.container,style:{"--sheepfold-width":"".concat(o.sheepfoldWidthCss)}},[t(o.TheDescription,{attrs:{lesson:e.lesson},model:{value:o.isDescriptionOpen,callback:function(e){o.isDescriptionOpen=e},expression:"isDescriptionOpen"}}),e._v(" "),t(o.TheEditor,{class:e.$style.editor,attrs:{code:e.lesson.workCode}}),e._v(" "),t(o.TheResetButton),e._v(" "),t("button",{class:[e.$style.resize,o.dragging&&e.$style.dragging],attrs:{title:e.$t("texts.screen-reader.lesson.drag-to-resize")},on:{mousedown:o.dragStart}},[t("span",{staticClass:"invisible"},[e._v(e._s(e.$t("texts.screen-reader.lesson.drag-to-resize")))])]),e._v(" "),t(o.TheWorld,{ref:"sheepfold",class:e.$style.world,attrs:{options:e.options,width:o.sheepfoldWidth},scopedSlots:e._u([{key:"options",fn:function(){return[e._t("options")]},proxy:!0}],null,!0)})],1),e._v(" "),t(o.TheLessonFooter,{attrs:{lesson:e.lesson}})],1)}),[],!1,(function(e){this.$style=y.default.locals||y.default}),null,null);t.default=component.exports},471:function(e,t,o){"use strict";var n=o(401),r=o.n(n);o.d(t,"default",(function(){return r.a}))},472:function(e,t,o){var n=o(109)(!1);n.push([e.i,'.panel_U9kuM{width:33.5vw;height:100%;max-height:100%;overflow:hidden;position:relative;display:flex;flex-direction:column;padding-block:.4rem;background-color:var(--panel-background-color);border-right:1.5px solid var(--panel-border-color);transition:width .2s linear}.panel_U9kuM.closed_2KILL{grid-template-columns:1fr;width:2.8rem;padding-inline-end:.4rem;user-select:none}.panel_U9kuM.closed_2KILL .toggle_zrwdz .line_29at3{background-color:var(--panel-border-color)}.panel_U9kuM.closed_2KILL .toggle_zrwdz .line_29at3::before,.panel_U9kuM.closed_2KILL .toggle_zrwdz .line_29at3::after{background-color:var(--panel-border-color)}.panel_U9kuM.closed_2KILL .toggle_zrwdz .line_29at3::before{transform:translateY(-0.5rem)}.panel_U9kuM.closed_2KILL .toggle_zrwdz .line_29at3::after{transform:translateY(0.5rem)}.panel_U9kuM.closed_2KILL .section_Edp1b{opacity:0;animation:slide-out_csOMZ .5s linear}.toggle_zrwdz{width:2rem;height:2rem;position:absolute;top:.5rem;right:.33rem;z-index:100;display:grid;justify-self:center;justify-content:center;align-items:center;cursor:pointer;transition:all .3s linear}.toggle_zrwdz .line_29at3{width:1.5rem;height:2px;background-color:rgba(0,0,0,0)}.toggle_zrwdz .line_29at3::before,.toggle_zrwdz .line_29at3::after{content:"";position:absolute;width:1.5rem;height:2px;background-color:var(--panel-border-color);transition:transform .5s linear}.toggle_zrwdz .line_29at3::before{transform:rotate(45deg)}.toggle_zrwdz .line_29at3::after{transform:rotate(-45deg)}.section_Edp1b{display:block;border-block-end:1px solid var(--panel-border-color);color:var(--text-color);transition:opacity .2s linear;opacity:1;overflow-y:auto;overflow-x:hidden;flex-grow:1}.section_Edp1b>*{padding:.5rem 1rem}.section_Edp1b:last-child{border-block-end:0}.title_Z2jJm{font-family:var(--font-highlight);font-size:2rem;font-weight:700;padding-block:.3rem;white-space:nowrap;width:31vw}.text_t1\\+Ef{width:31vw;margin:0;font-size:1.25rem;display:flex;flex-direction:column}.section--paragraph_IkimJ{font-family:var(--font-basic)}.section--paragraph_IkimJ .text_t1\\+Ef{gap:.7rem}.section--code_M2nm\\+{font-family:var(--font-default)}.section--code_M2nm\\+ .text_t1\\+Ef p{user-select:all}@keyframes slide-out_csOMZ{from{display:block;transform:translateX(0)}to{display:none;transform:translateX(-10rem)}}@keyframes slide-in_QS77T{from{transform:translateX(-2rem)}to{transform:translateX(0)}}',""]),n.locals={panel:"panel_U9kuM",closed:"closed_2KILL",toggle:"toggle_zrwdz",line:"line_29at3",section:"section_Edp1b","slide-out":"slide-out_csOMZ",title:"title_Z2jJm",text:"text_t1+Ef","section--paragraph":"section--paragraph_IkimJ","section--code":"section--code_M2nm+","slide-in":"slide-in_QS77T"},e.exports=n},474:function(e,t,o){"use strict";var n=o(402),r=o.n(n);o.d(t,"default",(function(){return r.a}))},475:function(e,t,o){var n=o(109)(!1);n.push([e.i,"\n.editor_zfriF {\n    width: 100%;\n    height: 100%;\n    grid-column: 2/4;\n    overflow: hidden;\n    position: absolute;\n}\n",""]),n.locals={editor:"editor_zfriF"},e.exports=n},476:function(e,t,o){"use strict";var n=o(403),r=o.n(n);o.d(t,"default",(function(){return r.a}))},477:function(e,t,o){var n=o(109)(!1);n.push([e.i,".bottom_4eGJS{width:100%;padding:.5rem 1rem;display:flex;align-items:center;justify-content:space-between;background-color:var(--background-color);border-top:var(--editor-border)}.side_9q5XS{display:flex;align-items:center;gap:.5rem;color:var(--text-color);pointer-events:none}.side_9q5XS .button_1zWFY{pointer-events:auto}.slides_iWY5L{font-size:1.5rem;color:var(--color-gray-300)}.lesson_c8HlH{font-family:var(--font-highlight);font-size:1.25rem}.button_1zWFY{padding:.25rem 1.56rem;background-color:var(--background-color);border:2px solid var(--color-gray-300);border-radius:1.25rem;font-size:1.25rem;color:var(--text-color);cursor:pointer;transition:all .2s}.button_1zWFY:hover{background-color:var(--color-gray-500);color:var(--color-white);border:2px solid var(--color-gray-500)}",""]),n.locals={bottom:"bottom_4eGJS",side:"side_9q5XS",button:"button_1zWFY",slides:"slides_iWY5L",lesson:"lesson_c8HlH"},e.exports=n},478:function(e,t,o){"use strict";var n=o(404),r=o.n(n);o.d(t,"default",(function(){return r.a}))},479:function(e,t,o){var n=o(109)(!1);n.push([e.i,"\n.bar_3lHi1 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.62rem 1rem 0.81rem;\n    border-bottom: var(--editor-border);\n    background: var(--background-color);\n    color: var(--text-color);\n}\n.brand_4IQOx {\n    display: flex;\n    gap: 0.5rem;\n    align-items: baseline;\n}\n.options_CDUzU {\n    display: flex;\n    gap:  2.56rem;\n}\n.main_vPQHN {\n    font-family: var(--font-highlight);\n    font-size: 3rem;\n    padding: 0.5rem;\n    text-decoration: none;\n}\n.secondary_FlQtj {\n    font-family: var(--font-highlight);\n    font-size: 1.5rem;\n    white-space: nowrap;\n}\n",""]),n.locals={bar:"bar_3lHi1",brand:"brand_4IQOx",options:"options_CDUzU",main:"main_vPQHN",secondary:"secondary_FlQtj"},e.exports=n},480:function(e,t,o){"use strict";var n=o(405),r=o.n(n);o.d(t,"default",(function(){return r.a}))},481:function(e,t,o){var n=o(109)(!1);n.push([e.i,".resetButton_W2PSC{position:absolute;display:flex;inset-block-end:1.62rem;inset-inline-end:1.37rem;grid-column:2/4;padding:.5rem;border:none;border-radius:4rem;background-color:var(--reset-button);color:var(--color-white);transition:all .2s}.resetButton_W2PSC:hover{background-color:var(--reset-button-hover)}.animate_2vTOP{animation:rotate_\\+UXLJ;animation-duration:.5s}@keyframes rotate_\\+UXLJ{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",""]),n.locals={resetButton:"resetButton_W2PSC",animate:"animate_2vTOP",rotate:"rotate_+UXLJ"},e.exports=n},523:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(513),l={keywords:["break","case","catch","continue","const","default","else","false","finally","for","function","if","in","let","null","return","switch","throw","true","try","undefined","var","while","of"],operators:["<=",">=","==","!=","===","!==","=>","+","-","**","*","/","%","++","--","|","^","!","&&","||","??","?",":","=","+=","-="],miorita:o(444).a.GetActions(),symbols:/[=><!~?:&|+\-*/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,tokenizer:{root:[[/[{}]/,"delimiter.bracket"],{include:"common"}],common:[[/[a-z_$][\w$]*/,{cases:{"@keywords":"keyword","@miorita":"miorita","@default":"identifier"}}],[/[A-Z][\w$]*/,"type.identifier"],{include:"@whitespace"},[/[()[\]]/,"@brackets"],[/[<>](?!symbols)/,"@brackets"],[/!(?=([^=]|$))/,"delimiter"],[/symbols/,{cases:{operators:"delimiter",default:""}}],[/(@digits)[eE]([-+]?(@digits))?/,"number.float"],[/(@digits)\.(@digits)([eE][-+]?(@digits))?/,"number.float"],[/(@digits)n?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@jsdoc"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[/*]/,"comment"]],jsdoc:[[/[^/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[/*]/,"comment.doc"]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\$\{/,{token:"delimiter.bracket",next:"@bracketCounting"}],[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],bracketCounting:[[/\{/,"delimiter.bracket","@bracketCounting"],[/\}/,"delimiter.bracket","@pop"],{include:"common"}]}},c={wordWrap:!0,minimap:{enabled:!1},overviewRulerBorder:!1,automaticLayout:!0,fontFamily:"var(--font-default)"};function d(e){e.editor.defineTheme("miorita-light",{base:"vs",inherit:!0,rules:[{token:"miorita",foreground:"000000",fontStyle:"bold"},{token:"keyword",fontStyle:"bold"}],colors:{"editor.background":"#fff"}}),e.editor.defineTheme("miorita-dark",{base:"vs-dark",inherit:!0,rules:[{token:"miorita",foreground:"ffffff",fontStyle:"bold"},{token:"keyword",fontStyle:"bold"}],colors:{"editor.background":"#252525"}}),e.languages.register({id:"mioritajs"}),e.languages.setMonarchTokensProvider("mioritajs",l)}var f=o(393),m=o(395),_={__name:"TheEditor",props:{code:{type:String,default:""}},setup:function(e){var t=e,o=Object(f.a)(),l=Object(m.a)(),_=Object(n.computed)({get:function(){return o.code},set:function(e){o.setCode(e)}});return Object(n.onMounted)((function(){localStorage.workCodeUrl===window.location.href?o.code=localStorage.workCode:localStorage.workCodeUrl=window.location.href,o.initCode(t.code)})),{__sfc:!0,lessonStore:o,schemeStore:l,props:t,workCode:_,editorDidMount:function(e){o.setEditor(e)},MonacoEditor:r.a,monacoSetup:d,monacoOptions:c}}},v=o(474),h=o(76);var component=Object(h.a)(_,(function(){var e=this,t=e._self._c,o=e._self._setupProxy;return t(o.MonacoEditor,{class:e.$style.editor,attrs:{options:o.monacoOptions,theme:o.schemeStore.isLightScheme?"miorita-light":"miorita-dark",language:"mioritajs"},on:{editorWillMount:o.monacoSetup,editorDidMount:o.editorDidMount},model:{value:o.workCode,callback:function(e){o.workCode=e},expression:"workCode"}})}),[],!1,(function(e){this.$style=v.default.locals||v.default}),null,null);t.default=component.exports},528:function(e,t,o){"use strict";o.r(t);o(47);var n=o(0),r=o(393),l=function(){return l=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e},l.apply(this,arguments)},c=Object(n.defineComponent)({__name:"TheDescription",props:{value:{type:Boolean},lesson:null},emits:["input"],setup:function(e,t){var o=t.emit,c=e,d=Object(r.a)(),details=Object(n.computed)((function(){return c.lesson.details.map((function(e){return l(l({},e),{text:e.text.split("\n")})}))}));return{__sfc:!0,props:c,emit:o,store:d,details:details,handleClick:function(){o("input",!c.value)},resizeEditor:function(){return d.editor.layout()}}}}),d=o(471),f=o(76);var component=Object(f.a)(c,(function(){var e=this,t=e._self._c,o=e._self._setupProxy;return t("div",{class:[e.$style.panel,e.value?"":e.$style.closed],on:{transitionend:o.resizeEditor}},[t("div",{class:e.$style.toggle,on:{click:o.handleClick}},[t("div",{class:e.$style.line})]),e._v(" "),e._l(o.details,(function(o){return t("div",{key:o.title,class:[e.$style.section,e.$style["section--".concat(o.class)]]},[t("p",{class:e.$style.title},[e._v(e._s(o.title))]),e._v(" "),t("div",{class:e.$style.text},e._l(o.text,(function(o){return t("p",{key:o},[e._v("\n                "+e._s(o)+"\n            ")])})),0)])}))],2)}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null);t.default=component.exports},529:function(e,t,o){"use strict";o.r(t);var n=o(0),r=Object(n.defineComponent)({__name:"TheLessonFooter",props:{lesson:null},setup:function(e){return{__sfc:!0}}}),l=o(476),c=o(76);var component=Object(c.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{class:e.$style.bottom},[t("div",{class:e.$style.side},[e.lesson.lessonCount?t("p",{class:e.$style.slides,attrs:{"data-cypress":"lesson__number"}},[e._v("\n            "+e._s(e.lesson.lessonIndex+1)+"/"+e._s(e.lesson.lessonCount)+"\n        ")]):e._e(),e._v(" "),e.lesson.title?t("h3",{class:e.$style.lesson,attrs:{"data-cypress":"lesson__title"}},[e._v("\n            "+e._s(e.lesson.title)+"\n        ")]):e._e()]),e._v(" "),t("div",{class:e.$style.side},[e.lesson.previousLesson?t("NuxtLink",{class:e.$style.button,attrs:{to:e.localePath("/lessons/".concat(e.lesson.previousLesson)),"data-cypress":"back__button"}},[e._v("\n            "+e._s(e.$t("texts.button-text.navigation.back"))+"\n        ")]):e._e(),e._v(" "),e.lesson.nextLesson?t("NuxtLink",{class:e.$style.button,attrs:{to:e.localePath("/lessons/".concat(e.lesson.nextLesson)),"data-cypress":"next__button"}},[e._v("\n            "+e._s(e.$t("texts.button-text.navigation.next"))+"\n        ")]):t("NuxtLink",{class:e.$style.button,attrs:{to:e.localePath("/#playground"),"data-cypress":"more__button"}},[e._v("\n            "+e._s(e.$t("texts.button-text.navigation.more"))+"\n        ")])],1)])}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports},530:function(e,t,o){"use strict";o.r(t);var n=o(412),r=o(413),l={__name:"TheLessonHeader",setup:function(e){return{__sfc:!0,ColorModeSwitcher:n.default,LanguageSelector:r.default}}},c=o(478),d=o(76);var component=Object(d.a)(l,(function(){var e=this,t=e._self._c,o=e._self._setupProxy;return t("div",{class:e.$style.bar},[t("h1",{class:e.$style.brand},[t("nuxt-link",{class:e.$style.main,attrs:{to:"/"}},[e._v(e._s(e.$t("texts.main-labels.labels.brand")))]),e._v(" "),t("a",{class:e.$style.secondary,attrs:{href:"https://scoalaweb.ro",target:"_blank"}},[e._v("\n            "+e._s(e.$t("texts.main-labels.labels.credits"))+"\n        ")])],1),e._v(" "),t("span",{class:e.$style.options},[t(o.LanguageSelector),e._v(" "),t(o.ColorModeSwitcher)],1)])}),[],!1,(function(e){this.$style=c.default.locals||c.default}),null,null);t.default=component.exports;installComponents(component,{LanguageSelector:o(413).default,ColorModeSwitcher:o(412).default})},531:function(e,t,o){"use strict";o.r(t);var n=o(18),r=o(0),l=o(393),c=Object(r.defineComponent)({__name:"TheResetButton",setup:function(e){var t=Object(r.ref)(!1),o=Object(l.a)();return{__sfc:!0,clicked:t,lessonStore:o,resetCode:function(){o.setCode(o.options.workCode),t.value=!0}}}}),d=o(480),f=o(76);var component=Object(f.a)(c,(function(){var e=this,t=e._self._c,o=e._self._setupProxy;return o.clicked||o.lessonStore.options.workCode!==o.lessonStore.code?t("button",{class:e.$style.resetButton,attrs:{type:"button",title:e.$t("texts.button-text.buttons.reset-code")},on:{click:o.resetCode}},[t("i",{staticClass:"micon mi-reset",class:Object(n.a)({},e.$style.animate,o.clicked),on:{animationend:function(e){o.clicked=!1}}})]):e._e()}),[],!1,(function(e){this.$style=d.default.locals||d.default}),null,null);t.default=component.exports},721:function(e,t,o){"use strict";var n=o(450),r=o.n(n);o.d(t,"default",(function(){return r.a}))},722:function(e,t,o){var n=o(109)(!1);n.push([e.i,".mainContainer_c\\+Nws{height:100vh;display:grid;grid:5rem auto 3rem/auto}.container_NWs6P{position:relative;display:grid;grid-template-columns:min-content 5fr min-content min-content var(--sheepfold-width)}.resize_9qmg8{--hitbox-width: 1rem;background:rgba(0,0,0,0);border:0;grid-column:4/5;position:absolute;width:var(--hitbox-width);height:100%;left:calc(var(--hitbox-width)*-0.5);cursor:ew-resize}.resize_9qmg8.dragging_\\+mGzy,.resize_9qmg8:hover,.resize_9qmg8:active{--hitbox-width: 2rem}.world_WWku1{grid-column:5/6;border-left:1.5px solid var(--color-gray-500)}@media(orientation: portrait){.container_NWs6P{flex-direction:column-reverse}.editor_zjfhS{height:50%}.world_WWku1{height:50%}}",""]),n.locals={mainContainer:"mainContainer_c+Nws",container:"container_NWs6P",resize:"resize_9qmg8",dragging:"dragging_+mGzy",world:"world_WWku1",editor:"editor_zjfhS"},e.exports=n}}]);