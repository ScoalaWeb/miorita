(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{568:function(e,t,n){"use strict";n.r(t),n.d(t,"setupTypeScript",(function(){return B})),n.d(t,"setupJavaScript",(function(){return j})),n.d(t,"getJavaScriptWorker",(function(){return H})),n.d(t,"getTypeScriptWorker",(function(){return U}));var r,o,c=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function l(e){try{d(r.next(e))}catch(e){c(e)}}function f(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,f)}d((r=r.apply(e,t||[])).next())}))},l=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},f=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return c(this,void 0,void 0,(function(){var e,t;return l(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var p=this._worker.getProxy();this._defaults.getEagerModelSync()&&(p=p.then((function(t){return e._worker?e._worker.withSyncedResources(monaco.editor.getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=p}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),d=(r=function(e,b){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)b.hasOwnProperty(p)&&(e[p]=b[p])},r(e,b)},function(e,b){function t(){this.constructor=e}r(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),m=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function l(e){try{d(r.next(e))}catch(e){c(e)}}function f(e){try{d(r.throw(e))}catch(e){c(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,f)}d((r=r.apply(e,t||[])).next())}))},h=function(e,body){var t,n,r,g,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,n=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){o.label=c[1];break}if(6===c[0]&&o.label<r[1]){o.label=r[1],r=c;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(c);break}r[2]&&o.ops.pop(),o.trys.pop();continue}c=body.call(e,o)}catch(e){c=[6,e],n=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},v=monaco.Uri,y=monaco.Range;function S(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var i=0;i<n;i++)r+="  "}if(r+=e.messageText,n++,e.next)for(var o=0,c=e.next;o<c.length;o++){r+=S(c[o],t,n)}return r}function _(e){return e?e.map((function(e){return e.text})).join(""):""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(o||(o={}));var w,k=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,span){var t=e.getPositionAt(span.start),n=e.getPositionAt(span.start+span.length);return{startLineNumber:t.lineNumber,startColumn:t.column,endLineNumber:n.lineNumber,endColumn:n.column}},e}();!function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(w||(w={}));var x=function(e){function t(t,n,r){var o=e.call(this,r)||this;o._defaults=t,o._selector=n,o._disposables=[],o._listener=Object.create(null);var c=function(e){if(e.getModeId()===n){var t,r=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return o._doValidate(e)}),500)}));o._listener[e.uri.toString()]={dispose:function(){r.dispose(),clearTimeout(t)}},o._doValidate(e)}},l=function(e){monaco.editor.setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};o._disposables.push(monaco.editor.onDidCreateModel(c)),o._disposables.push(monaco.editor.onWillDisposeModel(l)),o._disposables.push(monaco.editor.onDidChangeModelLanguage((function(e){l(e.model),c(e.model)}))),o._disposables.push({dispose:function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];l(n)}}});var f=function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];l(n),c(n)}};return o._disposables.push(o._defaults.onDidChange(f)),o._disposables.push(o._defaults.onDidExtraLibsChange(f)),monaco.editor.getModels().forEach(c),o}return d(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){return m(this,void 0,void 0,(function(){var t,n,r,o,c,l,f,d,m=this;return h(this,(function(h){switch(h.label){case 0:return[4,this._worker(e.uri)];case 1:return t=h.sent(),e.isDisposed()?[2]:(n=[],r=this._defaults.getDiagnosticsOptions(),o=r.noSyntaxValidation,c=r.noSemanticValidation,l=r.noSuggestionDiagnostics,o||n.push(t.getSyntacticDiagnostics(e.uri.toString())),c||n.push(t.getSemanticDiagnostics(e.uri.toString())),l||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return!(f=h.sent())||e.isDisposed()||(d=f.reduce((function(p,e){return e.concat(p)}),[]).filter((function(e){return-1===(m._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})).map((function(t){return m._convertDiagnostics(e,t)})),monaco.editor.setModelMarkers(e,this._selector,d)),[2]}}))}))},t.prototype._convertDiagnostics=function(e,t){var n=t.start||0,r=t.length||1,o=e.getPositionAt(n),c=o.lineNumber,l=o.column,f=e.getPositionAt(n+r),d=f.lineNumber,m=f.column;return{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:c,startColumn:l,endLineNumber:d,endColumn:m,message:S(t.messageText,"\n"),code:t.code.toString(),tags:t.reportsUnnecessary?[monaco.MarkerTag.Unnecessary]:[],relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){if(t){var n=[];return t.forEach((function(t){var r=e;if(t.file){var o=monaco.Uri.parse(t.file.fileName);r=monaco.editor.getModel(o)}if(r){var c=t.start||0,l=t.length||1,f=r.getPositionAt(c),d=f.lineNumber,m=f.column,h=r.getPositionAt(c+l),v=h.lineNumber,y=h.column;n.push({resource:r.uri,startLineNumber:d,startColumn:m,endLineNumber:v,endColumn:y,message:S(t.messageText,"\n")})}})),n}},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case w.Error:return monaco.MarkerSeverity.Error;case w.Message:return monaco.MarkerSeverity.Info;case w.Warning:return monaco.MarkerSeverity.Warning;case w.Suggestion:return monaco.MarkerSeverity.Hint}return monaco.MarkerSeverity.Info},t}(k),C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,o){return m(this,void 0,void 0,(function(){var r,o,c,l,f;return h(this,(function(d){switch(d.label){case 0:return r=e.getWordUntilPosition(n),o=new y(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),c=e.uri,l=e.getOffsetAt(n),[4,this._worker(c)];case 1:return[4,d.sent().getCompletionsAtPosition(c.toString(),l)];case 2:return!(f=d.sent())||e.isDisposed()?[2]:[2,{suggestions:f.entries.map((function(r){var l=o;if(r.replacementSpan){var f=e.getPositionAt(r.replacementSpan.start),d=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);l=new y(f.lineNumber,f.column,d.lineNumber,d.column)}return{uri:c,position:n,range:l,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind)}}))}]}}))}))},t.prototype.resolveCompletionItem=function(e,n,r,o){return m(this,void 0,void 0,(function(){var n,o,c,l,details;return h(this,(function(f){switch(f.label){case 0:return o=(n=r).uri,c=n.position,l=e.getOffsetAt(c),[4,this._worker(o)];case 1:return[4,f.sent().getCompletionEntryDetails(o.toString(),l,n.label)];case 2:return!(details=f.sent())||e.isDisposed()?[2,n]:[2,{uri:o,position:c,label:details.name,kind:t.convertKind(details.kind),detail:_(details.displayParts),documentation:{value:_(details.documentation)}}]}}))}))},t.convertKind=function(e){switch(e){case N.primitiveType:case N.keyword:return monaco.languages.CompletionItemKind.Keyword;case N.variable:case N.localVariable:return monaco.languages.CompletionItemKind.Variable;case N.memberVariable:case N.memberGetAccessor:case N.memberSetAccessor:return monaco.languages.CompletionItemKind.Field;case N.function:case N.memberFunction:case N.constructSignature:case N.callSignature:case N.indexSignature:return monaco.languages.CompletionItemKind.Function;case N.enum:return monaco.languages.CompletionItemKind.Enum;case N.module:return monaco.languages.CompletionItemKind.Module;case N.class:return monaco.languages.CompletionItemKind.Class;case N.interface:return monaco.languages.CompletionItemKind.Interface;case N.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},t}(k),A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return d(t,e),t.prototype.provideSignatureHelp=function(e,t,n){return m(this,void 0,void 0,(function(){var n,r,o,c;return h(this,(function(l){switch(l.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,l.sent().getSignatureHelpItems(n.toString(),r)];case 2:return!(o=l.sent())||e.isDisposed()?[2]:(c={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]},o.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation=_(e.documentation),t.label+=_(e.prefixDisplayParts),e.parameters.forEach((function(p,i,a){var label=_(p.displayParts),n={label:label,documentation:_(p.documentation)};t.label+=label,t.parameters.push(n),i<a.length-1&&(t.label+=_(e.separatorDisplayParts))})),t.label+=_(e.suffixDisplayParts),c.signatures.push(t)})),[2,{value:c,dispose:function(){}}])}}))}))},t}(k),I=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideHover=function(e,t,n){return m(this,void 0,void 0,(function(){var n,r,o,c,l,f;return h(this,(function(d){switch(d.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,d.sent().getQuickInfoAtPosition(n.toString(),r)];case 2:return!(o=d.sent())||e.isDisposed()?[2]:(c=_(o.documentation),l=o.tags?o.tags.map((function(e){var label="*@"+e.name+"*";return e.text?label+(e.text.match(/\r\n|\n/g)?" \n"+e.text:" - "+e.text):label})).join("  \n\n"):"",f=_(o.displayParts),[2,{range:this._textSpanToRange(e,o.textSpan),contents:[{value:"```js\n"+f+"\n```\n"},{value:c+(l?"\n\n"+l:"")}]}])}}))}))},t}(k),P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return m(this,void 0,void 0,(function(){var n,r,o,c=this;return h(this,(function(l){switch(l.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,l.sent().getOccurrencesAtPosition(n.toString(),r)];case 2:return!(o=l.sent())||e.isDisposed()?[2]:[2,o.map((function(t){return{range:c._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}}))]}}))}))},t}(k),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideDefinition=function(e,t,n){return m(this,void 0,void 0,(function(){var n,r,o,c,l,f,d,m,y;return h(this,(function(h){switch(h.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,h.sent().getDefinitionAtPosition(n.toString(),r)];case 2:if(!(o=h.sent())||e.isDisposed())return[2];for(c=[],l=0,f=o;l<f.length;l++)d=f[l],m=v.parse(d.fileName),(y=monaco.editor.getModel(m))&&c.push({uri:m,range:this._textSpanToRange(y,d.textSpan)});return[2,c]}}))}))},t}(k),D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideReferences=function(e,t,n,r){return m(this,void 0,void 0,(function(){var n,r,o,c,l,f,d,m,y;return h(this,(function(h){switch(h.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,h.sent().getReferencesAtPosition(n.toString(),r)];case 2:if(!(o=h.sent())||e.isDisposed())return[2];for(c=[],l=0,f=o;l<f.length;l++)d=f[l],m=v.parse(d.fileName),(y=monaco.editor.getModel(m))&&c.push({uri:m,range:this._textSpanToRange(y,d.textSpan)});return[2,c]}}))}))},t}(k),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideDocumentSymbols=function(e,t){return m(this,void 0,void 0,(function(){var t,n,r,o,c=this;return h(this,(function(l){switch(l.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return[4,l.sent().getNavigationBarItems(t.toString())];case 2:return!(n=l.sent())||e.isDisposed()?[2]:(r=function(t,n,o){var l={name:n.text,detail:"",kind:E[n.kind]||monaco.languages.SymbolKind.Variable,range:c._textSpanToRange(e,n.spans[0]),selectionRange:c._textSpanToRange(e,n.spans[0]),tags:[],containerName:o};if(n.childItems&&n.childItems.length>0)for(var f=0,d=n.childItems;f<d.length;f++){var m=d[f];r(t,m,l.name)}t.push(l)},o=[],n.forEach((function(e){return r(o,e)})),[2,o])}}))}))},t}(k),N=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),E=Object.create(null);E[N.module]=monaco.languages.SymbolKind.Module,E[N.class]=monaco.languages.SymbolKind.Class,E[N.enum]=monaco.languages.SymbolKind.Enum,E[N.interface]=monaco.languages.SymbolKind.Interface,E[N.memberFunction]=monaco.languages.SymbolKind.Method,E[N.memberVariable]=monaco.languages.SymbolKind.Property,E[N.memberGetAccessor]=monaco.languages.SymbolKind.Property,E[N.memberSetAccessor]=monaco.languages.SymbolKind.Property,E[N.variable]=monaco.languages.SymbolKind.Variable,E[N.const]=monaco.languages.SymbolKind.Variable,E[N.localVariable]=monaco.languages.SymbolKind.Variable,E[N.variable]=monaco.languages.SymbolKind.Variable,E[N.function]=monaco.languages.SymbolKind.Function,E[N.localFunction]=monaco.languages.SymbolKind.Function;var M,K,L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:o.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(k),R=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return m(this,void 0,void 0,(function(){var r,o,c,l,f=this;return h(this,(function(d){switch(d.label){case 0:return r=e.uri,o=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return[4,d.sent().getFormattingEditsForRange(r.toString(),o,c,L._convertOptions(n))];case 2:return!(l=d.sent())||e.isDisposed()?[2]:[2,l.map((function(t){return f._convertTextChanges(e,t)}))]}}))}))},t}(L),F=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,o){return m(this,void 0,void 0,(function(){var o,c,l,f=this;return h(this,(function(d){switch(d.label){case 0:return o=e.uri,c=e.getOffsetAt(t),[4,this._worker(o)];case 1:return[4,d.sent().getFormattingEditsAfterKeystroke(o.toString(),c,n,L._convertOptions(r))];case 2:return!(l=d.sent())||e.isDisposed()?[2]:[2,l.map((function(t){return f._convertTextChanges(e,t)}))]}}))}))},t}(L),W=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return m(this,void 0,void 0,(function(){var r,o,c,l,f,d,m=this;return h(this,(function(h){switch(h.label){case 0:return r=e.uri,o=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),c=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),l=L._convertOptions(e.getOptions()),f=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return[4,h.sent().getCodeFixesAtPosition(r.toString(),o,c,f,l)];case 2:return!(d=h.sent())||e.isDisposed()?[2]:[2,{actions:d.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return m._tsCodeFixActionToMonacoCodeAction(e,n,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],o=0,c=n.changes;o<c.length;o++)for(var l=0,f=c[o].textChanges;l<f.length;l++){var d=f[l];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,d.span),text:d.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},t}(L),V=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t.prototype.provideRenameEdits=function(e,t,n,r){return m(this,void 0,void 0,(function(){var r,o,c,l,f,d,m,v,y,S;return h(this,(function(h){switch(h.label){case 0:return r=e.uri,o=r.toString(),c=e.getOffsetAt(t),[4,this._worker(r)];case 1:return[4,(l=h.sent()).getRenameInfo(o,c,{allowRenameOfImportPath:!1})];case 2:if(!1===(f=h.sent()).canRename)return[2,{edits:[],rejectReason:f.localizedErrorMessage}];if(void 0!==f.fileToRename)throw new Error("Renaming files is not supported.");return[4,l.findRenameLocations(o,c,!1,!1,!1)];case 3:if(!(d=h.sent())||e.isDisposed())return[2];for(m=[],v=0,y=d;v<y.length;v++)S=y[v],m.push({resource:monaco.Uri.parse(S.fileName),edit:{range:this._textSpanToRange(e,S.textSpan),text:n}});return[2,{edits:m}]}}))}))},t}(k);function B(e){K=z(e,"typescript")}function j(e){M=z(e,"javascript")}function H(){return new Promise((function(e,t){if(!M)return t("JavaScript not registered!");e(M)}))}function U(){return new Promise((function(e,t){if(!K)return t("TypeScript not registered!");e(K)}))}function z(e,t){var n=new f(t,e),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)};return monaco.languages.registerCompletionItemProvider(t,new C(r)),monaco.languages.registerSignatureHelpProvider(t,new A(r)),monaco.languages.registerHoverProvider(t,new I(r)),monaco.languages.registerDocumentHighlightProvider(t,new P(r)),monaco.languages.registerDefinitionProvider(t,new T(r)),monaco.languages.registerReferenceProvider(t,new D(r)),monaco.languages.registerDocumentSymbolProvider(t,new O(r)),monaco.languages.registerDocumentRangeFormattingEditProvider(t,new R(r)),monaco.languages.registerOnTypeFormattingEditProvider(t,new F(r)),monaco.languages.registerCodeActionProvider(t,new W(r)),monaco.languages.registerRenameProvider(t,new V(r)),new x(e,t,r),r}}}]);