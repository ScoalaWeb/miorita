(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{403:function(t,o,e){var content=e(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(110).default)("87261774",content,!0,{sourceMap:!1})},476:function(t,o,e){"use strict";var n=e(403),l=e.n(n);e.d(o,"default",(function(){return l.a}))},477:function(t,o,e){var n=e(109)(!1);n.push([t.i,".bottom_4eGJS{width:100%;padding:.5rem 1rem;display:flex;align-items:center;justify-content:space-between;background-color:var(--background-color);border-top:var(--editor-border)}.side_9q5XS{display:flex;align-items:center;gap:.5rem;color:var(--text-color);pointer-events:none}.side_9q5XS .button_1zWFY{pointer-events:auto}.slides_iWY5L{font-size:1.5rem;color:var(--color-gray-300)}.lesson_c8HlH{font-family:var(--font-highlight);font-size:1.25rem}.button_1zWFY{padding:.25rem 1.56rem;background-color:var(--background-color);border:2px solid var(--color-gray-300);border-radius:1.25rem;font-size:1.25rem;color:var(--text-color);cursor:pointer;transition:all .2s}.button_1zWFY:hover{background-color:var(--color-gray-500);color:var(--color-white);border:2px solid var(--color-gray-500)}",""]),n.locals={bottom:"bottom_4eGJS",side:"side_9q5XS",button:"button_1zWFY",slides:"slides_iWY5L",lesson:"lesson_c8HlH"},t.exports=n},529:function(t,o,e){"use strict";e.r(o);var n=e(0),l=Object(n.defineComponent)({__name:"TheLessonFooter",props:{lesson:null},setup:function(t){return{__sfc:!0}}}),r=e(476),c=e(76);var component=Object(c.a)(l,(function(){var t=this,o=t._self._c;t._self._setupProxy;return o("div",{class:t.$style.bottom},[o("div",{class:t.$style.side},[t.lesson.lessonCount?o("p",{class:t.$style.slides,attrs:{"data-cypress":"lesson__number"}},[t._v("\n            "+t._s(t.lesson.lessonIndex+1)+"/"+t._s(t.lesson.lessonCount)+"\n        ")]):t._e(),t._v(" "),t.lesson.title?o("h3",{class:t.$style.lesson,attrs:{"data-cypress":"lesson__title"}},[t._v("\n            "+t._s(t.lesson.title)+"\n        ")]):t._e()]),t._v(" "),o("div",{class:t.$style.side},[t.lesson.previousLesson?o("NuxtLink",{class:t.$style.button,attrs:{to:t.localePath("/lessons/".concat(t.lesson.previousLesson)),"data-cypress":"back__button"}},[t._v("\n            "+t._s(t.$t("texts.button-text.navigation.back"))+"\n        ")]):t._e(),t._v(" "),t.lesson.nextLesson?o("NuxtLink",{class:t.$style.button,attrs:{to:t.localePath("/lessons/".concat(t.lesson.nextLesson)),"data-cypress":"next__button"}},[t._v("\n            "+t._s(t.$t("texts.button-text.navigation.next"))+"\n        ")]):o("NuxtLink",{class:t.$style.button,attrs:{to:t.localePath("/#playground"),"data-cypress":"more__button"}},[t._v("\n            "+t._s(t.$t("texts.button-text.navigation.more"))+"\n        ")])],1)])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);o.default=component.exports}}]);