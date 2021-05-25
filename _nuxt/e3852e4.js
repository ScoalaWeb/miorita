(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{258:function(t,e,r){"use strict";r.r(e);var o,n=r(13),c=(r(253),r(53),r(39),r(272),r(36),r(256)),l=r(273),f=(r(8),r(58),r(31),r(274),o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(t[p]=b[p])})(t,b)},function(t,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function e(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),h=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isRunnerError=!0,e}return f(e,t),e}(Error),d=function(){return(d=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},y=function(t,e,r,desc){var o,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(c<3?o(l):c>3?o(e,r,l):o(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},_=function(t,e){for(var i=0,r=e.length,o=t.length;i<r;i++,o++)t[o]=e[i];return t},v="NESW",w=[];function m(t){var e=(void 0===t?{}:t).speed,r=void 0===e?1:e;return function(t,e,o){var n=o.value;w.push(e),o.value=function(){for(var t=this,o=[],c=0;c<arguments.length;c++)o[c]=arguments[c];return new Promise((function(c,l){try{t.addMove.apply(t,_(["next-"+e],o)),t.addToQueue((function(){if(t.ended)l(new h("stop"));else{var e=n.apply(t,o);t.debug?c(e):setTimeout((function(){c(e)}),t.options.timeout*r)}}))}catch(e){t.ended=!0,l(e)}}))}}}var x=function(){function t(t,e,r){var o=this;void 0===r&&(r=!1),this.options=t,this.current=e,this.debug=r,this.queue=[],this.ended=!1,this.objects={},this.moveWatchers=[],t.objects.forEach((function(t){var e=t.position,r=e.x,n=e.y,c=t.type,l=t.fixed,f=t.count,h=r+"x"+n;void 0===o.objects[h]&&(o.objects[h]={}),o.objects[h][c]={fixed:l,type:c,position:{x:r,y:n},count:f||1}}))}return t.GetActions=function(){return w},t.prototype.turnLeft=function(){var t=this.current.orientation,e=v.indexOf(t)-1;e<0&&(e=v.length-1),this.current.orientation=v[e],this.addMove("rotate-left")},t.prototype.turnRight=function(){var t=this.current.orientation,e=v.indexOf(t)+1;e>=v.length&&(e=0),this.current.orientation=v[e],this.addMove("rotate-right")},t.prototype.move=function(){try{var t=this.nextPosition().position;return this.current.position=t,this.addMove("forward"),Promise.resolve()}catch(t){return Promise.reject(t)}},t.prototype.canMove=function(){try{return this.nextPosition(),this.addMove("move-possible"),!0}catch(t){return this.addMove("move-blocked"),!1}},t.prototype.found=function(t){return this.pickPossible(t)?(this.addMove("found",t),!0):(this.addMove("not-found",t),!1)},t.prototype.pick=function(t){if(!this.pickPossible(t))throw new h("pick-"+t);var e=this.current,r=e.position,o=r.x,n=r.y,c=e.picked,l=this.objects,f=o+"x"+n;void 0===c[t]&&(c[t]=0),c[t]+=1,delete l[f],this.objects=d({},l),this.current.picked=d({},c),this.addMove("pick",t)},t.prototype.drop=function(t){var e,r=this.current,o=r.position,n=o.x,c=o.y,l=r.picked,f=this.objects,y=n+"x"+c;if(!l[t])throw new h("drop"+t);l[t]-=1,void 0===f[y]&&(f[y]={}),f[y][t]={type:t,position:{x:n,y:c},fixed:!1,count:((null===(e=f[y][t])||void 0===e?void 0:e.count)||0)+1},this.objects=d({},f),this.current.picked=d({},l),this.addMove("drop",t)},t.prototype.reset=function(){this.current.position=d({},this.options.start.position),this.current.orientation=this.options.start.orientation,this.addMove("reset")},t.prototype.nextPosition=function(){var t,e,r,o=this.current,n=o.orientation,c=o.position,l=this.options,f=l.size,y=l.walls;switch(n){case"N":e="y",r=-1;break;case"S":e="y",r=1;break;case"W":e="x",r=-1;break;case"E":e="x",r=1;break;default:throw new h("orientation")}var _=c[e]+r;if(_<0||_>=f[e])throw new h("map-overflow");var v=d(d({},c),((t={})[e]=_,t)),w=new h("wall-hit"),m=r<0?v:c;if(y[e]&&y[e].some((function(t){return t.x===m.x&&t.y===m.y})))throw w;return{axis:e,sign:r,position:v}},t.prototype.pickPossible=function(t){var e,r=this.current.position,o=r.x,n=r.y,c=null===(e=this.objects[o+"x"+n])||void 0===e?void 0:e[t];return c&&!c.fixed&&c.type===String(t).toLowerCase()},t.prototype.addMove=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.moveWatchers.forEach((function(r){r.apply(void 0,_([t],e))}))},t.prototype.onMove=function(t){this.moveWatchers.push(t)},t.prototype.addToQueue=function(t){this.queue.push(t),this.debug||this.stepOver()},t.prototype.stepOver=function(){var t=this.queue.shift();"function"==typeof t&&t()},t.prototype.stop=function(){this.ended=!0,this.stepOver()},y([m()],t.prototype,"turnLeft",null),y([m()],t.prototype,"turnRight",null),y([m()],t.prototype,"move",null),y([m({speed:.1})],t.prototype,"canMove",null),y([m({speed:.1})],t.prototype,"found",null),y([m()],t.prototype,"pick",null),y([m()],t.prototype,"drop",null),y([m({speed:.01})],t.prototype,"reset",null),t}();r(181),r(46),r(90),r(277),r(56),r(45),r(55);var j=[{regex:/(?<!async\s+)function/gi,replacer:"async function"}];function O(code){var script=code,t=x.GetActions(),e="_"+(1e3*Math.random()).toFixed(0);return t.forEach((function(t){var r="await "+e+"."+t;script=script.replace(function(t){return new RegExp("(?<![a-z_\\$])"+t+"(?=\\s*\\()","ig")}(t),r)})),j.forEach((function(t){script=script.replace(t.regex,t.replacer)})),script.includes("await")||(script+="; return Promise.resolve();"),new Function(e,"return Promise.resolve().then(async function(){\n    "+script+"\n    });")}var M=r(279),k=r.n(M),z=r(281),E=r.n(z),P=r(282),C=r.n(P),S=(r(283),function(){var t=function(e,b){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(t[p]=b[p])})(e,b)};return function(e,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function r(){this.constructor=e}t(e,b),e.prototype=null===b?Object.create(b):(r.prototype=b.prototype,new r)}}()),$=function(){return($=Object.assign||function(t){for(var s,i=1,e=arguments.length;i<e;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)},D=function(t,e,r,desc){var o,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(n.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(c<3?o(l):c>3?o(e,r,l):o(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},R=function(t,e){for(var i=0,r=e.length,o=t.length;i<r;i++,o++)t[o]=e[i];return t},W=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.current={position:{x:0,y:0},orientation:"E",picked:{}},e.actions=null,e.moves=[],e.cellWidth="10%",e}return S(e,t),e.prototype.range=function(t){return R([],new Array(t)).map((function(t,e){return e}))},e.prototype.isCurrent=function(t,col){var e=this.current.position,r=e.x;return t===e.y&&col===r},e.prototype.objectsAt=function(t,col){return this.actions?Object.values(this.actions.objects[col+"x"+t]||{}):this.options.objects.filter((function(e){var r=e.position,o=r.x,n=r.y;return t===n&&col===o}))},Object.defineProperty(e.prototype,"canReset",{get:function(){var t=this.current,e=this.options.start;return t.orientation!==e.orientation||t.position.x!==e.position.x||t.position.y!==e.position.y},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRunning",{get:function(){return this.actions&&!this.actions.ended},enumerable:!1,configurable:!0}),e.prototype.hasWallRight=function(t,col){return this.options.walls.x&&this.options.walls.x.some((function(e){return t===e.y&&col===e.x}))},e.prototype.hasWallLeft=function(t,col){return this.hasWallRight(t,col-1)},e.prototype.hasWallBottom=function(t,col){return this.options.walls.y&&this.options.walls.y.some((function(e){return t===e.y&&col===e.x}))},e.prototype.hasWallTop=function(t,col){return this.hasWallBottom(t-1,col)},e.prototype.onMovedUpdated=function(){var t=this;this.$nextTick((function(){t.$refs.console.scrollTop=t.$refs.console.scrollHeight}))},e.prototype.run=function(t){var e,r=this;void 0===t&&(t=!1),this.moves=[],this.actions=new x(this.options,this.current,t),this.actions.onMove((function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];r.moves.push({message:t,args:e})}));try{e=O(this.$store.state.code)}catch(t){return this.moves.push({message:"error-build-"+t.message}),void(this.actions=null)}e(this.actions).then((function(){r.moves.push({message:"end"})})).catch((function(t){new l.Howl({src:r.$nuxt.context.base+"sounds/bleating.mp3"}).play(),t.isRunnerError?r.moves.push({message:"error-"+t.message}):(r.moves.push({message:"error-generic-"+t.message}),console.error(t))})).then((function(){r.actions.ended=!0})),t&&this.$nextTick((function(){r.actions&&r.actions.stepOver()}))},e.prototype.debug=function(){this.run(!0)},e.prototype.stepOver=function(){this.actions&&this.actions.stepOver()},e.prototype.stop=function(){this.actions&&this.actions.stop()},Object.defineProperty(e.prototype,"cellWidthStyle",{get:function(){return{"--cell-width":""+this.cellWidth}},enumerable:!1,configurable:!0}),e.prototype.resizeCell=function(){var t=this.$refs.tableWrapper;if(t){t.querySelector("table").attributes.style.value="--cell-width: 1px";var e=Math.floor(.95*Math.min(t.clientWidth/this.options.size.y,t.clientHeight/this.options.size.x));this.cellWidth=e+"px",t.querySelector("table").attributes.style.value="--cell-width: "+e+"px"}},e.prototype.reset=function(){this.actions&&this.actions.stop();var t=this.options.start;this.current={position:$({},t.position),orientation:"E",picked:{}},this.moves=[]},e.prototype.created=function(){this.reset()},e.prototype.mounted=function(){this.resizeCell(),this.resizeCellListener=this.resizeCell.bind(this),window.addEventListener("resize",this.resizeCellListener)},e.prototype.destroyed=function(){window.removeEventListener("resize",this.resizeCellListener)},D([Object(c.b)({default:function(){return{size:{x:4,y:4},start:{position:{x:0,y:0},orientation:"E"},walls:{},objects:[{type:"grass",position:{x:1,y:0}}],timeout:1e3}}})],e.prototype,"options",void 0),D([Object(c.d)("moves",{deep:!0})],e.prototype,"onMovedUpdated",null),e=D([Object(c.a)({components:{GrassObject:k.a,HatchetObject:E.a,VitoriaObject:C.a}})],e)}(c.c),L=r(288),A=r(30);var component=Object(A.a)(W,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.world},[o("div",[t.isRunning?t._e():o("button",{class:t.$style.button,attrs:{type:"button"},on:{click:function(e){return t.run()}}},[o("i",{staticClass:"micon mi-run"}),t._v("\n            Run\n        ")]),t._v(" "),!t.isRunning&&t.canReset?o("button",{class:t.$style.button,attrs:{type:"button"},on:{click:t.reset}},[o("i",{staticClass:"micon mi-reset"}),t._v("\n            Reset\n        ")]):t._e(),t._v(" "),t.isRunning?t._e():o("button",{class:t.$style.button,attrs:{type:"button"},on:{click:t.debug}},[o("i",{staticClass:"micon mi-debug"}),t._v("\n            Debug\n        ")]),t._v(" "),t.isRunning&&t.actions.debug?o("button",{class:t.$style.button,attrs:{type:"button"},on:{click:t.stepOver}},[o("i",{staticClass:"micon mi-step-over"}),t._v("\n            Step over\n        ")]):t._e(),t._v(" "),t.isRunning?o("button",{class:t.$style.button,attrs:{type:"button"},on:{click:t.stop}},[o("i",{staticClass:"micon mi-stop"}),t._v("\n            Stop\n        ")]):t._e()]),t._v(" "),o("div",{ref:"tableWrapper",class:t.$style.table_wrapper},[o("table",{class:t.$style.table,style:t.cellWidthStyle},[o("tbody",t._l(t.range(t.options.size.y),(function(e){return o("tr",{key:e},t._l(t.range(t.options.size.x),(function(col){var n;return o("td",{key:col,class:t.$style.cell},[o("div",{class:(n={},n[t.$style.cell__inner]=!0,n[t.$style.cell_current]=t.isCurrent(e,col),n[t.$style.wall_right]=t.hasWallRight(e,col),n[t.$style.wall_left]=t.hasWallLeft(e,col),n[t.$style.wall_top]=t.hasWallTop(e,col),n[t.$style.wall_bottom]=t.hasWallBottom(e,col),n[t.$style.facing_up]="N"===t.current.orientation,n[t.$style.facing_down]="S"===t.current.orientation,n[t.$style.facing_left]="W"===t.current.orientation,n[t.$style.facing_right]="E"===t.current.orientation,n)},[t._l(t.objectsAt(e,col),(function(e,r){return o("div",{key:r+e.type},["grass"===e.type?[o("GrassObject",{class:[t.$style.cell__object,t.$style.obj_grass],staticStyle:{fill:"green"}})]:t._e(),t._v(" "),"hatchet"===e.type?[o("HatchetObject",{class:[t.$style.cell__object,t.$style.obj_hatchet]})]:t._e(),t._v(" "),"vitoria"===e.type?[o("VitoriaObject",{class:[t.$style.cell__object,t.$style.obj_vitoria]})]:t._e()],2)})),t._v(" "),t.isCurrent(e,col)?o("img",{class:t.$style.cell__img,attrs:{src:r(271),alt:"Miorița"}}):t._e()],2)])})),0)})),0)])]),t._v(" "),o("div",{ref:"console",class:t.$style.console},t._l(t.moves,(function(e,r){var n=e.message,c=e.args;return o("div",{key:n+r},["reset"===n?[t._v("\n                Miorița teleported to the start position\n            ")]:"rotate-left"===n?[t._v("\n                Miorița turned left (counter-clockwise)\n            ")]:"rotate-right"===n?[t._v("\n                Miorița turned right (clockwise)\n            ")]:"forward"===n?[t._v("\n                Miorița moved forward\n            ")]:"move-possible"===n?[t._v("\n                Miorița realized she can move forward\n            ")]:"move-blocked"===n?[t._v("\n                Miorița realized she cannot move forward\n            ")]:"found"===n?[t._v('\n                Miorița has found "'+t._s(c[0])+'"\n            ')]:"not-found"===n?[t._v('\n                Miorița has not found "'+t._s(c[0])+'"\n            ')]:"pick"===n?[t._v('\n                Miorița has picked "'+t._s(c[0])+'"\n            ')]:"drop"===n?[t._v('\n                Miorița has dropped "'+t._s(c[0])+'"\n            ')]:"next-turnLeft"===n?[t._v("\n                Miorița will turn left\n            ")]:"next-turnRight"===n?[t._v("\n                Miorița will turn right\n            ")]:"next-canMove"===n?[t._v("\n                Miorița is analyzing if she can move forward\n            ")]:"next-move"===n?[t._v("\n                Miorița will try to move forward\n            ")]:"next-found"===n?[t._v('\n                Miorița is trying to find "'+t._s(c[0])+'"\n            ')]:"next-pick"===n?[t._v('\n                Miorița is trying to pick "'+t._s(c[0])+'"\n            ')]:"next-drop"===n?[t._v('\n                Miorița is trying to drop "'+t._s(c[0])+'"\n            ')]:"end"===n?[t._v("\n                Miorița has ended her programming\n            ")]:"error-orientation"===n?o("span",{class:t.$style.error},[t._v("\n                Miorița is a little dizzy\n            ")]):"error-map-overflow"===n?o("span",{class:t.$style.error},[t._v("\n                Miorița cannot get out of her sheepfold\n            ")]):"error-wall-hit"===n?o("span",{class:t.$style.error},[t._v("\n                Miorița cannot get over the fence\n            ")]):"error-stop"===n?o("span",{class:t.$style.error},[t._v("\n                Miorița has stopped\n            ")]):n.startsWith("error-build")?o("span",{class:t.$style.error},[t._v("\n                Miorița cannot understand . Here's why:\n                "+t._s(n.substring("error-build-".length))+"\n            ")]):n.startsWith("error-generic")?o("span",{class:t.$style.error},[t._v("\n                "+t._s(n.substring("error-generic-".length))+"\n            ")]):t._e()],2)})),0)])}),[],!1,(function(t){this.$style=L.default.locals||L.default}),null,null);e.default=component.exports},263:function(t,e,r){var content=r(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("4a06c652",content,!0,{sourceMap:!1})},271:function(t,e,r){t.exports=r.p+"d4bc271bf9567111a99d985fbcce2c3e.svg"},279:function(t,e,r){r(37),r(26),r(36),r(53),r(31),r(54);var o=r(261),n=r(267);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(66),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,h=data.class,d=data.staticClass,style=data.style,y=data.staticStyle,_=data.attrs,v=void 0===_?{}:_,w=n(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,d],style:[{"enable-background":"new 0 0 573.75 573.75"},style,y],attrs:Object.assign({version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"573.75px",height:"573.75px",viewBox:"0 0 573.75 573.75",style:"enable-background:new 0 0 573.75 573.75;","xml:space":"preserve"},v)},w),f.concat([r("g",[r("g",[r("path",{attrs:{d:"M541.496,170.872c24.279,93.636-2.229,195.572-2.602,197.141c0.067-0.497,0.66-7.822,0.66-7.822\r\n\t\t\tc7.784-62.902-11.188-98.379-11.188-98.379c12.805,54.42-10.824,85.45-24.681,98.379c-5.192,4.839-9.056,8.97-9.056,8.97\r\n\t\t\tc-0.401,0-0.755-6.531-1.052-8.97c-9.313-76.806,34.779-174.64,34.779-174.64c-28.21,25.073-45.298,106.669-52.814,151.565\r\n\t\t\tc8.961-75.659-5.852-110.504-5.852-110.504c5.852,63.275-8.846,115.209-15.014,133.579c-1.549,4.628-2.582,8.97-2.582,8.97\r\n\t\t\tc-0.717,0-1.357-6.34-1.97-8.97c-10.595-45.737-5.364-158.518-5.364-158.518c-10.519,26.307-16.85,80.363-20.234,119.599\r\n\t\t\tc0.02-66.517-20.837-106.402-20.837-106.402c22.004,85.068-7.334,140.798-7.334,140.798c5.861-76.261-14.669-95.328-14.669-95.328\r\n\t\t\tc15.166,31.565-19.067,93.875-19.067,93.875c-13.196-82.132,19.067-198.011,19.067-198.011\r\n\t\t\tc-19.536,27.53-31.002,96.438-37.007,146.536c-0.641-63.639-27.215-87.87-27.215-87.87c26.708,64.537-0.307,143.734-0.307,143.734\r\n\t\t\tc2.937-76.262-16.141-112.943-16.141-112.943c2.399,33.67-24.739,93.885-34.607,114.521c-2.171,4.523-3.529,8.97-3.529,8.97\r\n\t\t\tc-0.564,0-1.042-6.436-1.482-8.97c-9.859-56.648,10.28-177.585,10.28-177.585c-23.084,17.958-37.198,145.675-40.383,177.595\r\n\t\t\tc-0.459,4.6-0.688,8.97-0.688,8.97c-0.134,0-0.287-6.541-0.43-8.97c-3.041-49.581-2.706-104.595-2.706-104.595\r\n\t\t\tc-9.706,10.653-17.356,113.555-17.404,113.555l0.258-8.97c6.311-128.128-16.39-170.241-16.39-170.241\r\n\t\t\tc11.111,62.95-8.951,145.637-15.568,170.241c-1.243,4.638-2.027,8.97-2.027,8.97c-1.454,0-2.697-6.302-3.787-8.97\r\n\t\t\tc-15.405-37.771,3.787-124.781,3.787-124.781c-17.71,22.759-23.763,62.94-25.733,93.014\r\n\t\t\tc1.626-154.119-10.939-204.484-10.939-204.484c9.037,55.577-10.375,202.151-15.118,236.251c-0.277,2.009-0.249,1.798,0,0h-0.382\r\n\t\t\tc3.509-51.886-13.837-145.312-13.837-145.312c0,40.727-9.352,120.918-12.307,145.312c-0.555,4.59-0.889,8.97-0.889,8.97\r\n\t\t\tc-1.501-2.993-2.228-6.502-3.223-8.97c-22.348-66.393,3.223-177.585,3.223-177.585C63.075,228.018,59.393,332,59.039,360.181\r\n\t\t\tc-0.029,2.171-0.038,2.764,0,0c0,0,1.74,10.787-3.031,0c-16.361-35.353,3.93-145.312,3.93-145.312\r\n\t\t\tc-20.101,21.363-28.276,118.068-30.083,145.312c-0.296,4.542-0.669,8.97-0.669,8.97c-0.498,0-1.042-6.55-1.454-8.97\r\n\t\t\tc-15.96-93.588,31.336-197.246,31.336-197.246C12.145,192.273,0,369.141,0,369.141v80.68h573.75v-89.64l0,0\r\n\t\t\tC573.836,196.012,541.496,170.872,541.496,170.872z"}})])]),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g")]))}}},281:function(t,e,r){r(37),r(26),r(36),r(53),r(31),r(54);var o=r(261),n=r(267);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(66),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,h=data.class,d=data.staticClass,style=data.style,y=data.staticStyle,_=data.attrs,v=void 0===_?{}:_,w=n(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,d],style:[{"enable-background":"new 0 0 511.981 511.981"},style,y],attrs:Object.assign({version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 511.981 511.981",style:"enable-background:new 0 0 511.981 511.981;","xml:space":"preserve"},v)},w),f.concat([r("path",{staticStyle:{fill:"#965353"},attrs:{d:"M377.799,104.535c-0.219-0.266-0.453-0.523-0.703-0.773l-45.248-45.249c-2-2-4.719-3.125-7.547-3.125  l0,0c-2.828,0-5.547,1.125-7.547,3.132L251.6,123.807c-16.218,15.953-23.609,31.25-30.749,46.046  c-8.188,16.953-15.921,32.96-37.108,51.865c-42.577,37.991-85.685,81.287-118.293,118.77C25.217,386.736,3.234,421.187,0.109,442.89  c-0.578,4.016,1.172,8,4.516,10.312l50.279,34.561c1.797,1.234,3.906,1.875,6.031,1.875c0.984,0,1.984-0.141,2.953-0.422  c3.062-0.875,5.578-3.078,6.844-6c17.812-41.107,36.827-74.185,59.857-104.121c23.64-30.718,49.936-55.623,72.545-75.935  c57.81-51.944,102.246-99.528,129.339-130.3c15.375-17.453,26.92-31.483,33.92-40.179c3.969-4.945,6.938-8.742,8.719-11.054  c0.984-1.281,1.734-2.258,2.234-2.922l0.562-0.758C381.502,113.152,380.439,107.754,377.799,104.535z"}}),r("path",{staticStyle:{opacity:"0.1",fill:"#FFFFFF","enable-background":"new"},attrs:{d:"M362.017,88.676c0.25,0.25,0.484,0.508,0.703,0.773  c2.641,3.218,3.703,8.617,0.109,13.414l-0.578,0.758c-0.5,0.664-1.234,1.641-2.234,2.922c-1.781,2.312-4.734,6.109-8.717,11.054  c-6.984,8.695-18.547,22.726-33.906,40.178c-27.092,30.773-71.529,78.357-129.339,130.292  c-22.609,20.312-48.905,45.233-72.545,75.95c-23.03,29.937-42.06,63.014-59.872,104.107c-1.266,2.938-3.766,5.141-6.844,6.016  c-0.969,0.281-1.953,0.422-2.938,0.422c-2.141,0-4.25-0.641-6.046-1.891L0.046,445.328c0.266,3.141,1.922,6.047,4.578,7.875  l50.279,34.561c1.797,1.234,3.906,1.875,6.031,1.875c0.984,0,1.984-0.141,2.953-0.422c3.062-0.875,5.578-3.078,6.844-6  c17.812-41.107,36.827-74.185,59.857-104.121c23.64-30.718,49.936-55.623,72.545-75.935c57.81-51.944,102.246-99.528,129.339-130.3  c15.375-17.453,26.92-31.483,33.92-40.179c3.969-4.945,6.938-8.742,8.719-11.054c0.984-1.281,1.734-2.258,2.234-2.922l0.562-0.758  c3.594-4.796,2.531-10.194-0.109-13.413c-0.219-0.266-0.453-0.523-0.703-0.773l-45.248-45.249v-0.008L362.017,88.676z"}}),r("path",{staticStyle:{fill:"#CCD1D9"},attrs:{d:"M509.045,199.414c3.984-4.188,3.906-10.796-0.188-14.89L349.801,25.467  c-4.156-4.164-10.922-4.164-15.078,0l-45.248,45.257c-2.016,2-3.125,4.711-3.125,7.539s1.109,5.546,3.125,7.546l67.871,67.88  c1.406,1.406,2.984,2.344,4.922,2.796c1.859,0.484,7.469,2.516,11.031,6.078c2.266,2.266,3.219,4.57,3.125,7.477  c-0.156,5.008-3.734,16.304-25.826,35.678c-2.844,2.5-4.156,6.336-3.438,10.062l14.795,75.708c0.422,2.109,1.453,4.016,2.938,5.5  c0.719,0.719,1.562,1.344,2.484,1.844c2.812,1.516,6.156,1.688,9.109,0.484C437.375,274.303,506.154,202.461,509.045,199.414z"}}),r("g",[r("path",{staticStyle:{fill:"#E6E9ED"},attrs:{d:"M417.687,93.347L349.8,25.466c-4.156-4.164-10.922-4.164-15.078,0l-45.248,45.257   c-2.016,2-3.125,4.711-3.125,7.539s1.109,5.539,3.109,7.539l67.887,67.888l0,0l0,0L417.687,93.347z"}}),r("path",{staticStyle:{fill:"#E6E9ED"},attrs:{d:"M508.857,184.524l-19.25-19.257c-18.264,20.109-62.936,65.248-131.121,108.442l3.469,17.78   c0.422,2.109,1.453,4.016,2.938,5.5c0.719,0.719,1.562,1.344,2.484,1.844c2.812,1.516,6.156,1.688,9.109,0.484   c60.889-25.015,129.668-96.856,132.559-99.903C513.029,195.227,512.951,188.618,508.857,184.524z"}})]),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g")]))}}},282:function(t,e,r){r(37),r(26),r(36),r(53),r(31),r(54);var o=r(261),n=r(267);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(66),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),l=e.children,f=void 0===l?[]:l,h=data.class,d=data.staticClass,style=data.style,y=data.staticStyle,_=data.attrs,v=void 0===_?{}:_,w=n(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,d],style:[{"enable-background":"new 0 0 318.543 318.543"},style,y],attrs:Object.assign({version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 318.543 318.543",style:"enable-background:new 0 0 318.543 318.543;","xml:space":"preserve"},v)},w),f.concat([r("g",[r("g",[r("path",{staticStyle:{fill:"#2F3233"},attrs:{d:"M159.195,207.749c-65.536,0-85.928-10.376-85.928-10.376c25.939-33.263,2.765-61.737-1.512-89.789\r\n\t\t\tC65.095,63.923,77.697,0,157.948,0c51.918,0,71.112,22.898,78.273,32.875c16.395,22.837,16.238,68.881,3.091,103.92\r\n\t\t\tc-11.702,31.183,4.159,58.213,4.159,58.213S224.732,207.749,159.195,207.749z"}}),r("path",{staticStyle:{fill:"#E8C59E"},attrs:{d:"M295.389,253.096c-10.522-37.754-63.361-33.566-86.164-44.408\r\n\t\t\tc-22.803-10.842-19.245-47.219-22.134-53.548h-55.638c-2.889,6.329,0.674,42.711-22.134,53.548\r\n\t\t\tc-22.803,10.842-75.642,6.655-86.164,44.408c-5.806,20.824-5.525,27.187-7.133,50.26c0,0,72.5,15.187,141.611,15.187\r\n\t\t\ts144.888-15.187,144.888-15.187C300.919,280.283,301.195,273.921,295.389,253.096z"}}),r("path",{staticStyle:{fill:"#DDB58E"},attrs:{d:"M179.761,217.001c22.803,10.842,75.642,6.655,86.164,44.408c5.531,19.83,5.542,26.552,6.913,47.073\r\n\t\t\tc18.155-2.816,29.682-5.126,29.682-5.126c-1.602-23.067-1.326-29.435-7.133-50.26c-10.522-37.754-63.361-33.566-86.164-44.408\r\n\t\t\tc-22.803-10.842-19.245-47.219-22.134-53.548h-29.458C157.633,155.14,156.953,206.164,179.761,217.001z"}}),r("path",{staticStyle:{fill:"#D15852"},attrs:{d:"M61.661,311.056c26.675,3.76,61.737,7.487,95.972,7.487c35.326,0,72.388-3.968,100.187-7.846\r\n\t\t\tc13.383-11.792,33.156-14.361,44.201-14.81c-1.124-17.283-1.506-24.405-6.632-42.79c-9.724-34.887-55.582-33.96-80.482-42.171\r\n\t\t\tc3.058,17.874,12.36,95.14-55.363,95.14c-67.97,0-58.359-77.829-55.335-95.331c-24.764,8.42-71.253,7.211-81.049,42.363\r\n\t\t\tc-5.12,18.374-5.508,25.495-6.632,42.767C27.566,296.257,48.065,298.758,61.661,311.056z"}}),r("path",{staticStyle:{fill:"#C65044"},attrs:{d:"M295.389,253.096c-9.724-34.887-55.582-33.96-80.482-42.171c0.573,3.361,1.371,8.83,1.832,15.485\r\n\t\t\tc21.207,4.761,42.852,12.292,49.186,35.005c4.89,17.536,5.463,24.821,6.481,40.452c10.747-4.407,22.168-5.677,29.615-5.98\r\n\t\t\tC300.897,278.597,300.515,271.476,295.389,253.096z"}}),r("path",{staticStyle:{fill:"#CCA281"},attrs:{d:"M123.971,192.737c9.229,7.959,20.054,15.85,35.241,18.132\r\n\t\t\tc15.237-2.288,26.023-10.342,35.269-18.334c-7.689-14.973-5.311-32.83-7.391-37.4h-55.638\r\n\t\t\tC129.367,159.71,131.694,177.758,123.971,192.737z"}}),r("g",[r("ellipse",{staticStyle:{fill:"#DDB58E"},attrs:{transform:"matrix(-0.177 0.9842 -0.9842 -0.177 380.1026 -81.5687)",cx:"224.155",cy:"118.137",rx:"21.386",ry:"11.629"}}),r("ellipse",{staticStyle:{fill:"#E8C59E"},attrs:{transform:"matrix(-0.9842 0.177 -0.177 -0.9842 207.8556 217.7438)",cx:"94.216",cy:"118.143",rx:"11.629",ry:"21.386"}}),r("path",{staticStyle:{fill:"#E8C59E"},attrs:{d:"M159.735,56.161c0,0-65.874-7.487-66.683,11.927c-0.793,19.02,0.124,21.712-0.028,26.181\r\n\t\t\t\tc-1.551,44.156,7.464,104.645,66.171,113.48c62.979-9.476,68.808-77.969,65.727-122.456\r\n\t\t\t\tC223.389,63.142,159.735,56.161,159.735,56.161z"}}),r("path",{staticStyle:{fill:"#DDB58E"},attrs:{d:"M159.195,207.749c94.331-14.192,60.45-160.806,60.45-160.806h-14.141\r\n\t\t\t\tc3.873,61.242,9.229,93.774-13.006,129.24C174.883,204.287,159.195,207.749,159.195,207.749z"}}),r("path",{staticStyle:{fill:"#DDB58E"},attrs:{d:"M91.709,96.989c0,0,37.248,10.123,67.565-19.009c0,0,19.408,26.209,66.216,19.133V60.905H91.709\r\n\t\t\t\tV96.989z"}}),r("path",{staticStyle:{fill:"#2F3233"},attrs:{d:"M228.076,52.266c-8.538-26.355-68.869-31.925-68.881-31.925l0,0l0,0l0,0l0,0\r\n\t\t\t\tc-0.011,0-60.343,5.57-68.881,31.925c-8.538,26.361,1.394,44.723,1.394,44.723c20.234,2.383,48.354-4.817,67.487-24.304\r\n\t\t\t\tc19.138,19.492,46.055,26.816,66.29,24.433C225.485,97.119,236.614,78.627,228.076,52.266z"}}),r("path",{staticStyle:{fill:"#E0605C"},attrs:{d:"M91.709,76.395c0,0,23.517-20.234,67.492-20.234s67.391,20.234,67.391,20.234\r\n\t\t\t\ts-16.727-38.979-67.391-38.979S91.709,76.395,91.709,76.395z"}})])])]),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g")]))}}},283:function(t,e,r){var content=r(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("7bb74ca8",content,!0,{sourceMap:!1})},284:function(t,e,r){var o=r(43),n=r(182),c=r(285),l=r(286),f=r(287),h=o(!1),d=n(c),y=n(l),_=n(f,{hash:"#Mioritza-Icons"});h.push([t.i,'@font-face{font-family:"Mioritza-Icons";src:url('+d+') format("truetype"),url('+y+') format("woff"),url('+_+') format("svg");font-weight:400;font-style:normal;font-display:block}.micon{font-family:"Mioritza-Icons"!important;speak:never;font-style:normal;font-weight:400;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.mi-reset:before{content:"\\23ee"}.mi-run:before{content:"\\2bc8"}.mi-debug:before{content:"\\1f47e"}.mi-step-over:before{content:"\\2b92"}.mi-stop:before{content:"\\23f9"}',""]),t.exports=h},285:function(t,e,r){t.exports=r.p+"fonts/Mioritza-Icons.0008410.ttf"},286:function(t,e,r){t.exports=r.p+"fonts/Mioritza-Icons.8cf080a.woff"},287:function(t,e,r){t.exports=r.p+"82c7a79dfed594e5c5fb9ce110d058b9.svg"},288:function(t,e,r){"use strict";var o=r(263),n=r.n(o);r.d(e,"default",(function(){return n.a}))},289:function(t,e,r){var o=r(43)(!1);o.push([t.i,'.world_3rP_s{display:flex;flex-direction:column}.button_3Ek0U{padding:.2em .7em;background:#fff;border:1px solid;border-radius:.3em;margin:.5em;cursor:pointer}.button_3Ek0U:focus,.button_3Ek0U:hover{background:#333;color:#fff}.table_13ujH,.table_wrapper_1w5Tj{flex-grow:1}.table_13ujH{--cell-width:1rem;--wall-color:#c9c9c9;--wall-warning-color:rgba(255,156,156,0.44);border-collapse:separate;table-layout:fixed;margin-left:auto;margin-right:auto}.cell_KVzIN{width:var(--cell-width);padding-bottom:var(--cell-width);position:relative}.cell_KVzIN:before{content:"+";display:grid;font-weight:700;font-size:calc(var(--cell-width)/3);color:#eee}.cell_KVzIN:before,.cell__inner_Qt8KI{position:absolute;top:0;bottom:0;left:0;right:0;justify-content:center;align-items:center}.cell__inner_Qt8KI{border:2px solid transparent;overflow:hidden}.cell__img_3z7fk{max-width:100%;max-height:100%}.cell__img_3z7fk,.cell__object_1zBRE{position:absolute;z-index:2}.cell__object_1zBRE{width:100%;height:100%;margin-left:auto;margin-right:auto}.obj_grass_2i4gK,.obj_hatchet_2Jco9,.obj_vitoria_2K1pn{transform:scale(.95) translateY(20%)}.wall_right_3y8ZV{border-right-color:var(--wall-color)}.cell_current_EqhGO.wall_right_3y8ZV.facing_right_2GANQ{border-right-color:var(--wall-warning-color)}.wall_left_3ed0W{border-left-color:var(--wall-color)}.cell_current_EqhGO.wall_left_3ed0W.facing_left_2lA7c{border-left-color:var(--wall-warning-color)}.wall_top_334ZH{border-top-color:var(--wall-color)}.cell_current_EqhGO.wall_top_334ZH.facing_up_gjsjv{border-top-color:var(--wall-warning-color)}.wall_bottom_vDrqZ{border-bottom-color:var(--wall-color)}.cell_current_EqhGO.wall_bottom_vDrqZ.facing_down_12JOQ{border-bottom-color:var(--wall-warning-color)}.facing_up_gjsjv .cell__img_3z7fk{transform:rotate(-90deg)}.facing_down_12JOQ .cell__img_3z7fk{transform:rotate(90deg)}.facing_left_2lA7c .cell__img_3z7fk{transform:scaleX(-1)}.console_26Y5P{display:flex;flex-direction:column;overflow:auto;grid-gap:.5em;gap:.5em;background:#000;color:#fff;padding:1rem;height:7.5rem}.error_2OoOC{color:red}',""]),o.locals={world:"world_3rP_s",button:"button_3Ek0U",table:"table_13ujH",table_wrapper:"table_wrapper_1w5Tj",cell:"cell_KVzIN",cell__inner:"cell__inner_Qt8KI",cell__img:"cell__img_3z7fk",cell__object:"cell__object_1zBRE",obj_grass:"obj_grass_2i4gK",obj_hatchet:"obj_hatchet_2Jco9",obj_vitoria:"obj_vitoria_2K1pn",wall_right:"wall_right_3y8ZV",cell_current:"cell_current_EqhGO",facing_right:"facing_right_2GANQ",wall_left:"wall_left_3ed0W",facing_left:"facing_left_2lA7c",wall_top:"wall_top_334ZH",facing_up:"facing_up_gjsjv",wall_bottom:"wall_bottom_vDrqZ",facing_down:"facing_down_12JOQ",console:"console_26Y5P",error:"error_2OoOC"},t.exports=o}}]);