(window.webpackJsonp=window.webpackJsonp||[]).push([[43,30,33],{370:function(o,r,e){var content=e(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(103).default)("732d75d1",content,!0,{sourceMap:!1})},378:function(o,r,e){var content=e(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(103).default)("7b46fe38",content,!0,{sourceMap:!1})},380:function(o,r,e){var content=e(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(103).default)("058a8da1",content,!0,{sourceMap:!1})},381:function(o,r,e){var content=e(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(103).default)("0d3a870a",content,!0,{sourceMap:!1})},412:function(o,r,e){"use strict";var t=e(370),n=e.n(t);e.d(r,"default",(function(){return n.a}))},413:function(o,r,e){var t=e(102)(!1);t.push([o.i,'.card_PAcjw{display:grid;grid-template-rows:min-content 1fr 1fr;row-gap:1rem;align-items:start;padding:1.56rem 2.75rem 2.93rem 2.68rem;color:var(--text-color);background-color:var(--background-color);border:2px solid var(--element-accent-color);border-radius:1.25rem;position:relative}.title_P4HmL{font-family:var(--font-highlight);font-size:2.5rem}.description_qEu-8{font-size:1.25rem;font-weight:400}.playButton_NpDVq{justify-self:end;align-self:end}.playButton_NpDVq::before{content:"";position:absolute;inset:0}',""]),t.locals={card:"card_PAcjw",title:"title_P4HmL",description:"description_qEu-8",playButton:"playButton_NpDVq"},o.exports=t},435:function(o,r,e){"use strict";e.r(r);e(30),e(36),e(377);var t=e(0),n=Object(t.defineComponent)({__name:"PlaygroundCard",props:{title:null,description:null,link:null,color:null},setup:function(o){return{__sfc:!0}}}),l=e(412),c=e(69);var component=Object(c.a)(n,(function(){var o=this,r=o._self._c;o._self._setupProxy;return r("div",{class:o.$style.card},[o.title?r("h2",{class:o.$style.title},[o._v("\n        "+o._s(o.title)+"\n    ")]):o._e(),o._v(" "),o.description?r("p",{class:o.$style.description},[o._v("\n        "+o._s(o.description)+"\n    ")]):o._e(),o._v(" "),r("BasePlayButton",{class:o.$style.playButton,attrs:{color:o.color,link:o.link}})],1)}),[],!1,(function(o){this.$style=l.default.locals||l.default}),null,null);r.default=component.exports;installComponents(component,{BasePlayButton:e(410).default})},439:function(o,r,e){"use strict";var t=e(378),n=e.n(t);e.d(r,"default",(function(){return n.a}))},440:function(o,r,e){var t=e(102)(!1);t.push([o.i,"\n.footer_pVAUK {\n    background: transparent;\n    justify-self: end;\n    margin-right: 4.18rem;\n    font-family: var(--font-highlight);\n    font-weight: 700;\n    font-size: 2rem;\n    gap: 0.3rem;\n    white-space: nowrap;\n}\n",""]),t.locals={footer:"footer_pVAUK"},o.exports=t},443:function(o,r,e){"use strict";var t=e(380),n=e.n(t);e.d(r,"default",(function(){return n.a}))},444:function(o,r,e){var t=e(102)(!1);t.push([o.i,"\n.about_hbwq7 {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5rem;\n    text-align: center;\n}\n.about_hbwq7 h1 {\n    color: var(--text-color);\n    width: 66.25rem;\n    font-weight: 400;\n    font-size: 3rem;\n    z-index: 1;\n}\n.button_CvaoM {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    padding: 0.75rem 2rem 1rem;\n    margin-block-end: 4rem;\n    font-size: 1.75rem;\n    text-decoration: none;\n    border-radius: 3.12rem;\n    color: var(--secondary-button-color);\n    background-color: var(--secondary-button);\n    z-index: 1;\n    transition: all .2s;\n}\n.button_CvaoM:hover {\n    color: var(--secondary-button-color);\n    background-color: var(--secondary-button-hover);\n}\n.arrows_1YxCT {\n    font-size: 1rem;\n    padding-top: 0.25rem;\n}\n.miorita_BZ5d0 {\n    height: 44vh;\n    width: auto;\n    position: absolute;\n    bottom: 0;\n    left: 2%;\n    z-index: 0;\n}\n",""]),t.locals={about:"about_hbwq7",button:"button_CvaoM",arrows:"arrows_1YxCT",miorita:"miorita_BZ5d0"},o.exports=t},450:function(o,r,e){"use strict";var t=e(381),n=e.n(t);e.d(r,"default",(function(){return n.a}))},451:function(o,r,e){var t=e(102)(!1);t.push([o.i,".cards_q9ExZ{--grid-columns: 2;--grid-rows: calc(var(--grid-cards-count) / var(--grid-columns));display:grid;grid-template-rows:repeat(var(--grid-rows), 1fr);grid-template-columns:repeat(var(--grid-columns), 1fr);column-gap:4rem;align-items:start}.card_DawwO{width:calc(100% - 3rem);max-width:35rem;height:calc(100% - 3rem);justify-self:end}.card_DawwO:nth-child(2n){justify-self:start}",""]),t.locals={cards:"cards_q9ExZ",card:"card_DawwO"},o.exports=t},489:function(o,r,e){"use strict";e.r(r);var t=e(439),n=e(69);var component=Object(n.a)({},(function(){var o=this,r=o._self._c;return r("span",{class:o.$style.footer},[r("a",{attrs:{href:"https://scoalaweb.ro",target:"_blank"}},[o._v(o._s(o.$t("texts.main-labels.labels.credits")))])])}),[],!1,(function(o){this.$style=t.default.locals||t.default}),null,null);r.default=component.exports},491:function(o,r,e){var content=e(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(103).default)("a2caa7f8",content,!0,{sourceMap:!1})},505:function(o,r,e){"use strict";e.r(r);var t=e(519),n={__name:"AboutScreen",setup:function(o){return{__sfc:!0,TheSheep:t.default}}},l=e(443),c=e(69);var component=Object(c.a)(n,(function(){var o=this,r=o._self._c,e=o._self._setupProxy;return r("header",{class:o.$style.about,attrs:{id:"About"}},[r("h1",[o._v(o._s(o.$t("texts.main-labels.labels.heading")))]),o._v(" "),r("a",{class:o.$style.button,attrs:{href:"#lessons"}},[o._v("\n        "+o._s(o.$t("texts.main-labels.labels.button"))+"\n        "),r("span",{staticClass:"micon mi-caret",class:o.$style.arrows})]),o._v(" "),r(e.TheSheep,{class:o.$style.miorita})],1)}),[],!1,(function(o){this.$style=l.default.locals||l.default}),null,null);r.default=component.exports},506:function(o,r,e){"use strict";e.r(r);e(30),e(36);var t=e(435),n={__name:"PlaygroundScreen",setup:function(o){var r="playgrounds";return{__sfc:!0,prefix:r,scenarioLink:function(o){return"/".concat(r,"/").concat(o.slug)},BaseCard:t.default}}},l=e(450),c=e(69);var component=Object(c.a)(n,(function(){var o=this,r=o._self._c,e=o._self._setupProxy;return r("nav",[r("article",{class:o.$style.cards,style:{"--grid-cards-count":o.$t("playgrounds").length}},o._l(o.$t("playgrounds"),(function(t){return r(e.BaseCard,{key:t.title,class:o.$style.card,attrs:{description:t.description,link:e.scenarioLink(t),title:t.title,color:"green"}})})),1)])}),[],!1,(function(o){this.$style=l.default.locals||l.default}),null,null);r.default=component.exports},528:function(o,r,e){"use strict";e(491)},529:function(o,r,e){var t=e(102),n=e(530),l=e(531),c=e(364),d=e(540),f=e(541),v=e(542),m=e(543),h=t(!1);h.i(n),h.i(l),h.i(n);var y=c(d),k=c(f),_=c(v),w=c(m,{hash:"#Mioritza-Icons"});h.push([o.i,':root{--color-white: #FFFFFF;--color-black: #000000;--color-gray-900: #252525;--color-gray-800: #2F2F2F;--color-gray-500: #555555;--color-gray-300: #959595;--color-gray-200: #E1E1E1;--color-gray-100: #EEEEEE;--color-red: #CF0909;--color-red-lighter: #FF4444;--color-green: #338946;--color-green-lighter: #44AE5B;--color-green-checkmark: #00D400}:root{--background-color: var(--color-gray-900);--background-accent: var(--color-gray-800);--text-color: var(--color-white);--menu-color: var(--color-gray-300);--menu-color-hover: var(--color-white);--link-color: var(--color-gray-100);--link-color-hover: var(--color-green-lighter);--primary-button: var(--color-red);--primary-button-hover: var(--color-red-lighter);--secondary-button: var(--color-green);--secondary-button-color: var(--color-white);--secondary-button-hover: var(--color-green-lighter);--panel-border-color: var(--color-gray-500);--panel-background-color: var(--color-gray-800);--color-mode: var(--color-gray-300);--color-mode-hover: var(--color-white);--element-accent-color: var(--color-gray-300);--language-background-primary: var(--color-gray-300);--language-color-primary: var(--color-black);--language-background-secondary: var(--color-gray-500);--language-color-secondary: var(--color-gray-300);--border-color: var(--color-gray-300);--checkmark-color: var(--color-green-checkmark);--sheepfold-background-color: var(--color-gray-800)}@media(prefers-color-scheme: light){:root{--background-color: var(--color-gray-100);--background-accent: var(--color-gray-200);--text-color: var(--color-gray-900);--menu-color: var(--color-black);--menu-color-hover: var(--color-gray-800);--link-color: var(--color-black);--link-color-hover: var(--color-gray-500);--primary-button: var(--color-red);--primary-button-hover: var(--color-red-lighter);--secondary-button: var(--color-green-lighter);--secondary-button-color: var(--color-white);--secondary-button-hover: var(--color-green);--panel-border-color: var(--color-gray-500);--panel-background-color: var(--color-gray-100);--color-mode: var(--color-gray-500);--color-mode-hover: var(--color-green);--element-accent-color: var(--color-gray-500);--language-background-primary: var(--color-gray-500);--language-color-primary: var(--color-white);--language-background-secondary: var(--color-gray-300);--language-color-secondary: var(--color-gray-500);--border-color: var(--color-gray-500);--checkmark-color: var(--color-red);--sheepfold-background-color: var(--color-white)}}.light-mode{--background-color: var(--color-gray-100);--background-accent: var(--color-gray-200);--text-color: var(--color-gray-900);--menu-color: var(--color-black);--menu-color-hover: var(--color-gray-800);--link-color: var(--color-black);--link-color-hover: var(--color-gray-500);--primary-button: var(--color-red);--primary-button-hover: var(--color-red-lighter);--secondary-button: var(--color-green-lighter);--secondary-button-color: var(--color-white);--secondary-button-hover: var(--color-green);--panel-border-color: var(--color-gray-500);--panel-background-color: var(--color-gray-100);--color-mode: var(--color-gray-500);--color-mode-hover: var(--color-green);--element-accent-color: var(--color-gray-500);--language-background-primary: var(--color-gray-500);--language-color-primary: var(--color-white);--language-background-secondary: var(--color-gray-300);--language-color-secondary: var(--color-gray-500);--border-color: var(--color-gray-500);--checkmark-color: var(--color-red);--sheepfold-background-color: var(--color-white)}.dark-mode{--background-color: var(--color-gray-900);--background-accent: var(--color-gray-800);--text-color: var(--color-white);--menu-color: var(--color-gray-300);--menu-color-hover: var(--color-white);--link-color: var(--color-gray-100);--link-color-hover: var(--color-green-lighter);--primary-button: var(--color-red);--primary-button-hover: var(--color-red-lighter);--secondary-button: var(--color-green);--secondary-button-color: var(--color-white);--secondary-button-hover: var(--color-green-lighter);--panel-border-color: var(--color-gray-500);--panel-background-color: var(--color-gray-800);--color-mode: var(--color-gray-300);--color-mode-hover: var(--color-white);--element-accent-color: var(--color-gray-300);--language-background-primary: var(--color-gray-300);--language-color-primary: var(--color-black);--language-background-secondary: var(--color-gray-500);--language-color-secondary: var(--color-gray-300);--border-color: var(--color-gray-300);--checkmark-color: var(--color-green-checkmark);--sheepfold-background-color: var(--color-gray-800)}:root{--font-default: "RobotoMono", monospace;--font-highlight: "CabinSketch", fantasy, sans-serif;--font-basic: Arial, sans-serif}:root{--editor-border: 2px solid var(--color-gray-500)}body{font-family:var(--font-default);color:var(--text-color)}a{color:var(--link-color);text-decoration:none;transition:color .2s}a:hover,a:focus,a:active{color:var(--link-color-hover)}textarea{width:100%;line-height:1.21rem;resize:none;background-color:rgba(0,0,0,0);border:none;color:inherit;font-family:inherit;font-size:1rem}textarea:focus-visible{outline:none}.button{display:flex;align-items:center;justify-content:center;gap:1rem;padding:0 1rem .25rem;font-size:1.5rem;font-weight:400;text-decoration:none;color:var(--color-white);background-color:var(--background-color);border-radius:1.25rem;transition:all .2s}.button:hover,.button:active,.button:focus{background-color:var(--hover-color);color:var(--color-white)}.editor_button{display:flex;align-items:center;gap:.93rem;background-color:var(--color-green);padding:.5rem 1.25rem;border:none;border-radius:.5rem;font-family:var(--font-editor);font-weight:500;font-size:1rem;color:var(--color-white);cursor:pointer}.editor_button:hover{background-color:var(--color-green-lighter);color:var(--color-white)}.invisible{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border:0 !important}@font-face{font-family:"Mioritza-Icons";src:url('+y+') format("woff2"),url('+k+') format("truetype"),url('+_+') format("woff"),url('+w+') format("svg");font-weight:normal;font-style:normal;font-display:block}.micon{font-family:"Mioritza-Icons" !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.mi-caret::before{content:""}.mi-plus::before{content:""}.mi-check::before{content:""}.mi-offlight::before{content:""}.mi-onlight::before{content:""}.mi-miorita::before{content:""}.mi-sheep::before{content:""}.mi-pause::before{content:""}.mi-play::before{content:""}.mi-stop::before{content:""}.mi-undo::before{content:""}.mi-stepover::before{content:""}.mi-bug::before{content:""}.mi-previous::before{content:""}.content{position:relative;grid-row:2/3;grid-column:1;z-index:0}.footer{grid-row:3;grid-column:1;z-index:1}.layout{--item-width: 12.5rem;width:100vw;height:100vh;overflow:hidden;display:grid;grid-template-rows:2fr 10fr 1fr;background-size:5vmin 5vmin;background-image:linear-gradient(90deg, var(--background-accent) 2px, transparent 0),linear-gradient(var(--background-accent) 2px, transparent 0);background-position:calc(var(--background-position, 0)*var(--item-width));background-repeat:repeat;transition:background-position .5s}.screen{position:absolute;top:3rem;bottom:0;left:calc((var(--background-position) + var(--page-index))*100%);width:100%;min-height:100%;opacity:0;transition:opacity .4s,left .5s;overflow:auto}.active{opacity:1;left:0}',""]),o.exports=h},530:function(o,r,e){var t=e(102),n=e(364),l=e(394),c=e(395),d=t(!1),f=n(l),v=n(c);d.push([o.i,"@font-face {\n    font-family: RobotoMono;\n    font-style: normal;\n    font-weight: 700;\n    src:\n        url("+f+")\n}\n@font-face {\n    font-family: RobotoMono;\n    font-style: normal;\n    font-weight: 400;\n    src:\n        url("+v+")\n}\n",""]),o.exports=d},531:function(o,r,e){var t=e(102),n=e(364),l=e(532),c=e(533),d=e(534),f=e(535),v=e(536),m=e(537),h=e(538),y=e(539),k=t(!1),_=n(l),w=n(c),x=n(d),C=n(f,{hash:"#RoCabinSketch-Bold"}),z=n(v),M=n(m),B=n(h),$=n(y,{hash:"#RoCabinSketch-Regular"});k.push([o.i,"@font-face {\n    font-family: CabinSketch;\n    font-style: normal;\n    font-weight: 700;\n    src:\n        url("+_+"),\n        url("+w+"),\n        url("+x+"),\n        url("+C+");\n}\n@font-face {\n    font-family: CabinSketch;\n    font-style: normal;\n    font-weight: 400;\n    src:\n        url("+z+"),\n        url("+M+"),\n        url("+B+"),\n        url("+$+");\n}\n",""]),o.exports=k},532:function(o,r,e){o.exports=e.p+"fonts/RoCabinSketch-Bold.e060354.woff2"},533:function(o,r,e){o.exports=e.p+"fonts/RoCabinSketch-Bold.bd5b73f.woff"},534:function(o,r,e){o.exports=e.p+"fonts/RoCabinSketch-Bold.6d97886.ttf"},535:function(o,r,e){o.exports=e.p+"img/RoCabinSketch-Bold.72779d4.svg"},536:function(o,r,e){o.exports=e.p+"fonts/RoCabinSketch-Regular.7c0fa76.woff2"},537:function(o,r,e){o.exports=e.p+"fonts/RoCabinSketch-Regular.5abce6b.woff"},538:function(o,r,e){o.exports=e.p+"fonts/RoCabinSketch-Regular.981dfcc.ttf"},539:function(o,r,e){o.exports=e.p+"img/RoCabinSketch-Regular.cc7d170.svg"},540:function(o,r,e){o.exports=e.p+"fonts/Mioritza-Icons.9ba0493.woff2"},541:function(o,r,e){o.exports=e.p+"fonts/Mioritza-Icons.e43eeaa.ttf"},542:function(o,r,e){o.exports=e.p+"fonts/Mioritza-Icons.85c32b1.woff"},543:function(o,r,e){o.exports=e.p+"img/Mioritza-Icons.8a2675e.svg"},803:function(o,r,e){"use strict";e.r(r);var t=e(0),n=e(489),l=e(503),c=e(505),d=e(734),f=e(506),menu=e(426),v={__name:"index",setup:function(o){var r=Object(menu.a)(),e=[c.default,d.default,f.default];return Object(t.onMounted)((function(){r.init()})),{__sfc:!0,store:r,screenArr:e,HomeFooter:n.default,HomeHeadBar:l.default}}},m=(e(528),e(69)),component=Object(m.a)(v,(function(){var o=this,r=o._self._c,e=o._self._setupProxy;return r("div",{staticClass:"layout",style:{"--background-position":-e.store.selectedIndex}},[r(e.HomeHeadBar),o._v(" "),r("main",{staticClass:"content"},o._l(e.screenArr,(function(o,t){return r(o,{key:t,tag:"component",staticClass:"screen",class:{active:t===e.store.selectedIndex},style:{"--page-index":t}})})),1),o._v(" "),r(e.HomeFooter,{staticClass:"footer"})],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{HomeHeadBar:e(503).default,HomeFooter:e(489).default})}}]);