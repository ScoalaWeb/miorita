(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{393:function(t,e,o){"use strict";o(23),o(77);var n=o(111),r=o(0),c=o(425),d="workCode",l=Object(n.c)("lesson",(function(){var t=Object(r.ref)({size:{x:4,y:4},start:{position:{x:0,y:0},orientation:"E",picked:{}},objects:[{type:"grass",position:{x:1,y:0}}],timeout:1e3,title:"",details:[]}),e=function(title){return title.replace(/[^a-z0-9]/g,"")},code=Object(r.ref)(""),o=Object(r.ref)(null);return{lessons:c,options:t,setOptions:function(e){t.value=JSON.parse(JSON.stringify(e))},code:code,setCode:function(o){code.value=o,function(o){if(!t.value.title)return sessionStorage.setItem(d,o);try{sessionStorage.setItem(d+e(t.value.title),o)}catch(t){return""}}(o)},initCode:function(o){code.value=function(){if(!t.value.title)return sessionStorage.getItem(d);try{return sessionStorage.getItem(d+e(t.value.title))}catch(t){return""}}()||o||""},editor:o,setEditor:function(t){o.value=t}}}));e.a=l},395:function(t,e,o){"use strict";var n=o(111),r=o(0),c=Object(n.c)("scheme",(function(){var t=Object(r.ref)(""),e={light:"light-mode",dark:"dark-mode"};Object(r.onMounted)((function(){var o=e.dark;window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&(o=e.light),t.value=localStorage.scheme||o})),Object(r.watch)(t,(function(){var o=document.documentElement.classList;o.remove(e.light,e.dark),o.add(t.value)}));var o=Object(r.computed)((function(){return t.value===e.light}));return{scheme:t,schemes:e,changeScheme:function(){t.value=t.value===e.light?e.dark:e.light,localStorage.scheme=t.value},isLightScheme:o}}));e.a=c},402:function(t,e,o){var content=o(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(110).default)("1abac975",content,!0,{sourceMap:!1})},425:function(t){t.exports=JSON.parse('[{"title":"Meet Miorița","description":"take a look at what Miorița can do","link":"lessons/1-intro","background":"1-bg"},{"title":"Conditional statements","description":"learn to run different sets of instructions depending on a condition.","link":"lessons/2-if","background":"2-bg"},{"title":"Loops & variables","description":"find ways to run the same commands multiple times in succesion.","link":"lessons/3-while","background":"3-bg"},{"title":"Functions","description":"create your own insructions that you can reuse whenever you want.","link":"lessons/4-function","background":"4-bg"}]')},444:function(t,e,o){"use strict";var n,r=o(20),c=(o(50),o(13),o(79),o(33),o(473),o(434),n=function(t,b){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(t[p]=b[p])},n(t,b)},function(t,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isRunnerError=!0,e}return c(e,t),e}(Error),l=d,f=function(){return f=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},f.apply(this,arguments)},h=function(t,e,o,desc){var n,c=arguments.length,d=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(d=(c<3?n(d):c>3?n(e,o,d):n(e,o))||d);return c>3&&d&&Object.defineProperty(e,o,d),d},m=function(t,e){for(var i=0,o=e.length,n=t.length;i<o;i++,n++)t[n]=e[i];return t},v="NESW",y=[];function k(t){var e=(void 0===t?{}:t).speed,o=void 0===e?1:e;return function(t,e,n){var r=n.value;y.push(e),n.value=function(){for(var t=this,n=[],c=0;c<arguments.length;c++)n[c]=arguments[c];return new Promise((function(c,d){try{t.addMove.apply(t,m(["next-"+e],n)),t.addToQueue((function(){if(t.ended)d(new l("stop"));else{var e=r.apply(t,n);t.debug?c(e):setTimeout((function(){c(e)}),t.options.timeout*o)}}))}catch(e){t.ended=!0,d(e)}}))}}}var w=function(){function t(t,e,o){var n=this;void 0===o&&(o=!1),this.options=t,this.current=e,this.debug=o,this.queue=[],this.ended=!1,this.objects={},this.lineNumber=0,this.moveWatchers=[],t.objects.forEach((function(t){var e=t.position,o=e.x,r=e.y,c=t.type,d=t.fixed,l=t.count,f=o+"x"+r;void 0===n.objects[f]&&(n.objects[f]={}),n.objects[f][c]={fixed:d,type:c,position:{x:o,y:r},count:l||1}}))}return t.GetActions=function(){return y},t.prototype.turnLeft=function(){var t=this.current.orientation,e=v.indexOf(t)-1;e<0&&(e=v.length-1),this.current.orientation=v[e],this.addMove("rotate-left")},t.prototype.turnRight=function(){var t=this.current.orientation,e=v.indexOf(t)+1;e>=v.length&&(e=0),this.current.orientation=v[e],this.addMove("rotate-right")},t.prototype.move=function(){try{var t=this.nextPosition().position;return this.current.position=t,this.addMove("forward"),Promise.resolve()}catch(t){return Promise.reject(t)}},t.prototype.canMove=function(){try{return this.nextPosition(),this.addMove("move-possible"),!0}catch(t){return this.addMove("move-blocked"),!1}},t.prototype.found=function(t){return this.pickPossible(t)?(this.addMove("found",t),!0):(this.addMove("not-found",t),!1)},t.prototype.pick=function(t){if(!this.pickPossible(t))throw new l("pick-"+t);var e=this.current,o=e.position,n=o.x,r=o.y,c=e.picked,d=this.objects,h=n+"x"+r;void 0===c[t]&&(c[t]=0),c[t]+=1,delete d[h],this.objects=f({},d),this.current.picked=f({},c),this.addMove("pick",t)},t.prototype.drop=function(t){var e,o=this.current,n=o.position,r=n.x,c=n.y,d=o.picked,h=this.objects,m=r+"x"+c;if(!d[t])throw new l("drop"+t);d[t]-=1,void 0===h[m]&&(h[m]={}),h[m][t]={type:t,position:{x:r,y:c},fixed:!1,count:((null===(e=h[m][t])||void 0===e?void 0:e.count)||0)+1},this.objects=f({},h),this.current.picked=f({},d),this.addMove("drop",t)},t.prototype.reset=function(){this.current.position=f({},this.options.start.position),this.current.orientation=this.options.start.orientation,this.addMove("reset")},t.prototype.nextPosition=function(){var t,e,o,n=this.current,r=n.orientation,c=n.position,d=this.options,h=d.size,m=d.walls;switch(r){case"N":e="y",o=-1;break;case"S":e="y",o=1;break;case"W":e="x",o=-1;break;case"E":e="x",o=1;break;default:throw new l("orientation")}var v=c[e]+o;if(v<0||v>=h[e])throw new l("map-overflow");var y=f(f({},c),((t={})[e]=v,t)),k=o<0?y:c;if(m[e]&&m[e].some((function(t){return t.x===k.x&&t.y===k.y})))throw new l("wall-hit");return{axis:e,sign:o,position:y}},t.prototype.pickPossible=function(t){var e,o=this.current.position,n=o.x,r=o.y,c=null===(e=this.objects[n+"x"+r])||void 0===e?void 0:e[t];return c&&!c.fixed&&c.type===String(t).toLowerCase()},t.prototype.addMove=function(t){for(var e=this,o=[],n=1;n<arguments.length;n++)o[n-1]=arguments[n];this.moveWatchers.forEach((function(n){n.apply(void 0,m([t,e.lineNumber],o))}))},t.prototype.onMove=function(t){this.moveWatchers.push(t)},t.prototype.addToQueue=function(t){this.queue.push(t),this.debug||this.stepOver()},t.prototype.stepOver=function(){var t=this.queue.shift();"function"==typeof t&&t()},t.prototype.stop=function(){this.ended=!0,this.stepOver()},t.prototype.onLine=function(t){return this.lineNumber=t,this},h([k()],t.prototype,"turnLeft",null),h([k()],t.prototype,"turnRight",null),h([k()],t.prototype,"move",null),h([k({speed:.1})],t.prototype,"canMove",null),h([k({speed:.1})],t.prototype,"found",null),h([k()],t.prototype,"pick",null),h([k()],t.prototype,"drop",null),h([k({speed:.01})],t.prototype,"reset",null),t}();e.a=w},474:function(t,e,o){"use strict";var n=o(402),r=o.n(n);o.d(e,"default",(function(){return r.a}))},475:function(t,e,o){var n=o(109)(!1);n.push([t.i,"\n.editor_zfriF {\n    width: 100%;\n    height: 100%;\n    grid-column: 2/4;\n    overflow: hidden;\n    position: absolute;\n}\n",""]),n.locals={editor:"editor_zfriF"},t.exports=n},523:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o(513),c={keywords:["break","case","catch","continue","const","default","else","false","finally","for","function","if","in","let","null","return","switch","throw","true","try","undefined","var","while","of"],operators:["<=",">=","==","!=","===","!==","=>","+","-","**","*","/","%","++","--","|","^","!","&&","||","??","?",":","=","+=","-="],miorita:o(444).a.GetActions(),symbols:/[=><!~?:&|+\-*/^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,digits:/\d+(_+\d+)*/,tokenizer:{root:[[/[{}]/,"delimiter.bracket"],{include:"common"}],common:[[/[a-z_$][\w$]*/,{cases:{"@keywords":"keyword","@miorita":"miorita","@default":"identifier"}}],[/[A-Z][\w$]*/,"type.identifier"],{include:"@whitespace"},[/[()[\]]/,"@brackets"],[/[<>](?!symbols)/,"@brackets"],[/!(?=([^=]|$))/,"delimiter"],[/symbols/,{cases:{operators:"delimiter",default:""}}],[/(@digits)[eE]([-+]?(@digits))?/,"number.float"],[/(@digits)\.(@digits)([eE][-+]?(@digits))?/,"number.float"],[/(@digits)n?/,"number"],[/[;,.]/,"delimiter"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/'([^'\\]|\\.)*$/,"string.invalid"],[/"/,"string","@string_double"],[/'/,"string","@string_single"],[/`/,"string","@string_backtick"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*\*(?!\/)/,"comment.doc","@jsdoc"],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"]],comment:[[/[^/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[/*]/,"comment"]],jsdoc:[[/[^/*]+/,"comment.doc"],[/\*\//,"comment.doc","@pop"],[/[/*]/,"comment.doc"]],string_double:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],string_single:[[/[^\\']+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/'/,"string","@pop"]],string_backtick:[[/\$\{/,{token:"delimiter.bracket",next:"@bracketCounting"}],[/[^\\`$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/`/,"string","@pop"]],bracketCounting:[[/\{/,"delimiter.bracket","@bracketCounting"],[/\}/,"delimiter.bracket","@pop"],{include:"common"}]}},d={wordWrap:!0,minimap:{enabled:!1},overviewRulerBorder:!1,automaticLayout:!0,fontFamily:"var(--font-default)"};function l(t){t.editor.defineTheme("miorita-light",{base:"vs",inherit:!0,rules:[{token:"miorita",foreground:"000000",fontStyle:"bold"},{token:"keyword",fontStyle:"bold"}],colors:{"editor.background":"#fff"}}),t.editor.defineTheme("miorita-dark",{base:"vs-dark",inherit:!0,rules:[{token:"miorita",foreground:"ffffff",fontStyle:"bold"},{token:"keyword",fontStyle:"bold"}],colors:{"editor.background":"#252525"}}),t.languages.register({id:"mioritajs"}),t.languages.setMonarchTokensProvider("mioritajs",c)}var f=o(393),h=o(395),m={__name:"TheEditor",props:{code:{type:String,default:""}},setup:function(t){var e=t,o=Object(f.a)(),c=Object(h.a)(),m=Object(n.computed)({get:function(){return o.code},set:function(t){o.setCode(t)}});return Object(n.onMounted)((function(){localStorage.workCodeUrl===window.location.href?o.code=localStorage.workCode:localStorage.workCodeUrl=window.location.href,o.initCode(e.code)})),{__sfc:!0,lessonStore:o,schemeStore:c,props:e,workCode:m,editorDidMount:function(t){o.setEditor(t)},MonacoEditor:r.a,monacoSetup:l,monacoOptions:d}}},v=o(474),y=o(76);var component=Object(y.a)(m,(function(){var t=this,e=t._self._c,o=t._self._setupProxy;return e(o.MonacoEditor,{class:t.$style.editor,attrs:{options:o.monacoOptions,theme:o.schemeStore.isLightScheme?"miorita-light":"miorita-dark",language:"mioritajs"},on:{editorWillMount:o.monacoSetup,editorDidMount:o.editorDidMount},model:{value:o.workCode,callback:function(t){o.workCode=t},expression:"workCode"}})}),[],!1,(function(t){this.$style=v.default.locals||v.default}),null,null);e.default=component.exports}}]);