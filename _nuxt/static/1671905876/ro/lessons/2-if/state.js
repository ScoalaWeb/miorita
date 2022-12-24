window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1671905876",layout:"default",error:b,serverRendered:c,routePath:"\u002Fro\u002Flessons\u002F2-if",config:{_app:{basePath:"\u002F",assetsPath:"\u002F_nuxt\u002F",cdnURL:b},content:{dbHash:"6269707a"}},globalRefs:{},pinia:{lesson:{lessons:[{title:"Meet Miorița",description:"take a look at what Miorița can do",link:"lessons\u002F1-intro",background:"1-bg"},{title:"Conditional statements",description:"learn to run different sets of instructions depending on a condition.",link:e,background:f},{title:"Loops & variables",description:"find ways to run the same commands multiple times in succesion.",link:"lessons\u002F3-while",background:"3-bg"},{title:"Functions",description:"create your own insructions that you can reuse whenever you want.",link:"lessons\u002F4-function",background:"4-bg"}],options:{slug:"2-if",size:{x:g,y:2},start:{position:{x:d,y:a},orientation:"E",picked:{}},walls:{x:[{x:d,y:a}]},objects:[{type:h,position:{x:i,y:d},fixed:c},{type:h,position:{x:i,y:a},fixed:c}],timeout:1000,dir:"\u002Flessons",path:"\u002Flessons\u002F2-if",extension:".json",createdAt:j,updatedAt:j,title:"Expresii condiționate",link:e,description:"învață să rulezi diferite seturi de instrucțiuni în funcție de o condiție.",background:f,details:[{title:"instrucțiuni",text:"Aici avem o mioriță foarte înfometată.\nVrea să ajungă la iarbă, dar poate are un gard în față. \nVa trebui să îi dăm instrucțiuni care funcționează și când există gardul, și când nu există.\nPoți folosi bifa pentru a vizualiza și testa ambele scenarii.",class:k},{title:"chestii noi",text:"if() && else\ncanMove()\n!canMove()",class:"code"},{title:"provocare",text:"Ajută Miorița să ajungă mereu la cel mai apropiat pătrat cu iarbă.",class:k}],workCode:"\u002F*\nif() \n    este o instrucțiune specială care face ca instrucțiunea imediat de după să se execute sau nu,\n    în funcție de condiția dată între paranteze\n\ncanMove() \n    face Miorița să ne spună dacă poate merge în față. Dacă poate, va spune „true”. Dacă nu, va spune „false”\n    Miorița nu va putea trece de garduri, și nu va putea ieși din stână.\n*\u002F\n\nif ( canMove() ) {\n    \u002F*\n        Folosind { acolade } putem să grupăm mai multe instrucțiuni, care se execută împreună.\n    *\u002F\n\n    move()\n\n} else {\n\n    \u002F*\n        „instrucțiunea” else nu are paranteze, și poate apărea doar după un if()\n        Instrucțiunea (sau blocul) imediat după else va fi executată dacă este falsă condiția de la if()\n    *\u002F\n\n    turnRight()\n    turnRight()\n    turnRight()\n\n}\n\n\u002F\u002F După if și else, putem face alte lucruri\n\n\u002F\u002F Următoarea instrucțiune întoarce Miorița de unde a plecat prima dată. \nreset()\n\n\u002F*\nCând punem semnul exclamării (!) în stânga unei condiții, rezultatul acesteia se inversează.\nAșadar !canMove() va fi:\n  - true dacă Miorița NU poate merge în față\n  - false dacă Miorița are cale liberă\n\nFolosind această informație, ai putea să scrii un program care nu folosește „else”?\n*\u002F\n\nif ( ! canMove() ) {\n    \u002F\u002F \n}\n\n\u002F*\n    P.S. #1\n    -------------\nDupă cum vezi, if și else sunt colorate diferit în codul ne-comentat.\nȘi când se execută nu apare ceva în consolă. \nDe fapt fac parte din limbajul pe care îl folosim aici, și nu sunt specifice doar Mioriței.\nMajoritatea limbajelor de programare au instrucțiuni if și else.\n\n    P.S. #2\n    -------------\nInstrucțiunile dintr-un bloc sunt indentate (mai la dreapta). \nAcest lucru nu este cerut de limbajul pe care îl folosim, \nci este doar un mod de a face codul puțin mai ușor de citit.\n*\u002F",lessonIndex:a,lessonCount:g,nextLesson:"3-while",previousLesson:"1-intro"},code:l,editor:b},scheme:{scheme:l,isLightScheme:false}}}}(1,null,true,0,"lessons\u002F2-if","2-bg",4,"grass",3,"2022-12-24T18:16:18.538Z","paragraph",""));