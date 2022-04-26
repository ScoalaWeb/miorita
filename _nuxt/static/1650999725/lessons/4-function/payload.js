__NUXT_JSONP__("/lessons/4-function", (function(a,b,c,d,e,f,g,h,i,j,k,l){return {data:[{slug:"4-function",title:"Functions",description:"Learn how to",worldOptions:{size:{x:7,y:f},start:{position:{x:g,y:c},orientation:"W"},walls:{x:[],y:[{x:c,y:c},{x:g,y:c},{x:f,y:c},{x:3,y:c},{x:4,y:c},{x:5,y:c}]},objects:[{type:"hatchet",position:{x:f,y:g},fixed:h},{type:"vitoria",position:{x:c,y:c},fixed:true}],timeout:1000},workCode:"\u002F*\n    Functions\n    ===================\n\n    Repeating code is highly inefficient.\n    We started the previous lesson with the same phrase because it is very important.\n    We learned how to *repeat* code with \"while\" and \"for\", but there are times that's not enough.\n    All programming languages allow you to *reuse* snippets of code, usually called functions.\n    The primary benefit, just like with loops, is that changing it once will change it everywhere.\n    More, using functions allows the same code to be executed anywhere we need to.\n*\u002F\n\n\u002F\u002F Functions are declared with the \"function\" keyword, followed by the name of the function\n\u002F\u002F The name of the function follows the same rules as variables\nfunction turnAround() \u002F\u002F After the name, we always need a set of parenthesis.\n\u002F\u002F The instructions that a function does are grouped in a block, so we use {curly braces}\n{\n    turnRight()\n    turnRight()\n}\n\n\u002F\u002F Those parenthesis allow us to define parameters, which will act like variables inside the function block\nfunction superMove(times = 1)\n{\n    \u002F\u002F Parameters can have a default value. If they are not provided, they hold that value\n\n    \u002F\u002F Inside a functions, we can use absolutely any instructions we learned.\n    for(var i = 0; i \u003C times; i = i+1) {\n        move()\n    }\n}\n\n\u002F\u002F Now let's use those functions\n\nturnAround() \u002F\u002F This will cause Miorița to turn right twice, because that's what we defined in the function\n\u002F\u002F Note we always need paranthesis when we use a function\n\u002F\u002F \"using a function\" is also refered to as \"calling a function\"\n\nsuperMove(5) \u002F\u002F Miorița will move forward 5 times\n\nturnRight() \u002F\u002F Fun fact: The instructions we learned so far are themselves functions\n\nsuperMove() \u002F\u002F When no value is provided for a parameter, the value we set as default will be used\n\nturnRight()\n\nsuperMove(4) \u002F\u002F Using different parameters may cause a function to behave differently\n\u002F\u002F This time, we're only moving 4 times.\n\npick(\"hatchet\") \u002F\u002F Parameters passed to a function can be more than just numbers\n\n\u002F\u002F Let's get Miorița back to Vitoria\nturnAround()\nsuperMove(4)\nturnAround()\nturnRight()\nmove()\nturnAround()\nturnRight()\nsuperMove(5)\n\n\u002F\u002F And finally, we can give Vitoria the hatchet\ndrop(\"hatchet\")",dir:"\u002Flessons",path:"\u002Flessons\u002F4-function",extension:".yaml",createdAt:e,updatedAt:e}],fetch:{"0":{aboutOpen:h,aboutContent:{slug:"about",toc:[],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Miorița"}]},{type:a,value:" is a little sheep who can help you take the first steps toward your programming"},{type:b,tag:j,props:{},children:[{type:a,value:"1"}]},{type:a,value:" career."}]},{type:a,value:d},{type:b,tag:i,props:{},children:[{type:a,value:"You control her by writing code"},{type:b,tag:j,props:{},children:[{type:a,value:"2"}]}]},{type:a,value:d},{type:b,tag:"hr",props:{},children:[]},{type:a,value:d},{type:b,tag:"ol",props:{},children:[{type:a,value:d},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Programming"}]},{type:a,value:" is the process of making computers work."}]},{type:a,value:d},{type:b,tag:k,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"Code"}]},{type:a,value:" is the text you write for programming. It must be in a particular syntax, or else the computer may refuse to run."}]},{type:a,value:d}]}]},dir:"\u002F",path:"\u002Fabout",extension:".md",createdAt:e,updatedAt:e}}},mutations:[]}}("text","element",0,"\n","2022-04-26T19:00:26.104Z",2,1,false,"p","sup","li","em")));