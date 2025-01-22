(self.webpackChunkmanjon_ui=self.webpackChunkmanjon_ui||[]).push([[222],{"./projects/manjon-ui/src/lib/components/toggler/toggler.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,':root {\n  --font-family: "Poppins", sans-serif;\n  --font-size: 16px;\n  --line-height: 1.5;\n  --corporate-purple: #9D3FE7;\n  --corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;\n  --grayscale-black: #1A141F;\n  --grayscale-white: #FFFFFF;\n  --grayscale-hint-text: #4B3A5A;\n  --grayscale-border: #ABA7AF;\n  --grayscale-disabled: #D4D2D5;\n  --grayscale-spacer: #D9D1E0;\n  --grayscale-spacer-light: #E5E0EB;\n  --grayscale-bg-light-grey: #F5F3F7;\n  --informing-error: #D51A52;\n  --informing-attention: #FF9500;\n  --informing-approval: #00B998;\n  --informing-link: #0F0BAB;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nmain {\n  height: max-content;\n}\n\nbody {\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: var(--line-height);\n  min-height: 100vh;\n  vertical-align: middle;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\ninput[type="*"] {\n  outline: none;\n  border: none;\n  font-family: inherit;\n  font-size: inherit;\n}\n\nimg {\n  display: inline-block;\n  max-width: 100%;\n}\n\nbutton {\n  border: none;\n  outline: none;\n  background-color: transparent;\n}\n\n@keyframes collapseAnimation {\n  0% {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n  }\n  99% {\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n  }\n  100% {\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n  }\n}\n@keyframes expandAnimation {\n  0% {\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n  }\n  99% {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n  }\n  100% {\n    clip-path: none;\n  }\n}\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  left: 0;\n}\n\n:root {\n  --ui-toggler-bg-default:\n      var(--ui-custom-toggler-bg-default,\n          var(--grayscale-bg-light-grey)\n      ) ;\n  --ui-toggler-bg-active:\n      var(--ui-custom-toggler-bg-active,\n          var(--corporate-purple)\n      ) ;\n  --ui-toggler-bg-disabled:\n      var(--ui-custom-toggler-bg-disabled,\n          var(--grayscale-disabled)\n      ) ;\n  --ui-toggler-circle-bg-default:\n      var(--ui-custom-toggler-circle-bg-default,\n          var(--grayscale-white)\n      ) ;\n  --ui-toggler-circle-bg-active:\n      var(--ui-custom-toggler-circle-bg-active,\n          var(--grayscale-white)\n      ) ;\n  --ui-toggler-circle-bg-disabled:\n      var(--ui-custom-toggler-circle-bg-disabled,\n          var(--grayscale-border)\n      ) ;\n}\n\n.ui-toggler {\n  --toggler-bg: var(--ui-toggler-bg-default);\n  --toggler-circle-bg: var(--ui-toggler-circle-bg-default);\n  --toggler-text-color: var(--ui-toggler-text-color-off);\n  width: 3.1875em;\n  height: 2em;\n  display: flex;\n  justify-content: flex-start;\n  border-radius: 62.4375em;\n  background-color: var(--toggler-bg);\n  position: relative;\n  transition: all ease-in-out 0.25s;\n  cursor: pointer;\n}\n.ui-toggler::before {\n  content: "";\n  width: 1.75em;\n  height: 1.75em;\n  background-color: var(--toggler-circle-bg);\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.168627451);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: 0.125em;\n  margin-right: 0.125em;\n  border-radius: 62.4375em;\n}\n.ui-toggler:disabled {\n  --toggler-bg: var(--ui-toggler-bg-disabled);\n  --toggler-circle-bg: var(--ui-toggler-circle-bg-disabled);\n  cursor: not-allowed;\n}\n.ui-toggler--active {\n  --toggler-bg: var(--ui-toggler-bg-active);\n  --toggler-circle-bg: var(--ui-toggler-circle-bg-active);\n  justify-content: flex-end;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js");exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${(0,ComputesTemplateFromComponent_1.formatPropInTemplate)(key)}($event)"`:`[${key}]="${(0,ComputesTemplateFromComponent_1.formatPropInTemplate)(key)}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/portable-stories.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/portable-stories.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.setProjectAnnotations=void 0;const preview_api_1=__webpack_require__("storybook/internal/preview-api"),INTERNAL_DEFAULT_PROJECT_ANNOTATIONS=__importStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"));exports.setProjectAnnotations=function setProjectAnnotations(projectAnnotations){return(0,preview_api_1.setDefaultProjectAnnotations)(INTERNAL_DEFAULT_PROJECT_ANNOTATIONS),(0,preview_api_1.setProjectAnnotations)(projectAnnotations)}},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./src/stories/toggler/toggler.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>toggler_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),addon_actions_dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var toggler_componentngResource=__webpack_require__("./projects/manjon-ui/src/lib/components/toggler/toggler.component.scss?ngResource"),toggler_componentngResource_default=__webpack_require__.n(toggler_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let UITogglerComponent=class UITogglerComponent{constructor(cdr){this.cdr=cdr,this.outputEvent=new core.EventEmitter}onToggle(){this.isActived=!this.isActived,this.outputEvent.emit(this.isActived),this.cdr.markForCheck()}static{this.ctorParameters=()=>[{type:core.ChangeDetectorRef}]}static{this.propDecorators={isActived:[{type:core.Input}],isDisabled:[{type:core.Input}],ariaLabel:[{type:core.Input}],ariaLabelledby:[{type:core.Input}],outputEvent:[{type:core.Output}]}}};UITogglerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-toggler",standalone:!0,imports:[],template:'<button \n    type="button" \n    class="ui-toggler" \n    [class.ui-toggler--active]="isActived"\n    [disabled]="isDisabled"\n    [attr.aria-label]="ariaLabel"\n    [attr.aria-labelledby]="ariaLabelledby"\n    [attr.aria-disabled]="isDisabled"\n    (click)="onToggle()"\n></button>\n',encapsulation:core.ViewEncapsulation.None,styles:[toggler_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ChangeDetectorRef])],UITogglerComponent);const toggler_stories={title:"Components/Toggler",args:{isActived:!1,isDisabled:!1,ariaLabel:"Cambiar de tema",ariaLabelledby:"",outputEvent:(0,addon_actions_dist.XI)("output-action")},argTypes:{isActived:{type:"boolean"},isDisabled:{type:"boolean"},ariaLabel:{type:"string",description:"Se usa para proporcionar un texto descriptivo accesible cuando el botón no tiene contenido textual visible "},ariaLabelledby:{type:"string",description:"Se usa cuando el botón tiene un texto visible o está asociado con otro elemento que contiene la descripción. El valor de este atributo es el id del elemento que contiene la descripción."}},decorators:[(0,dist.moduleMetadata)({imports:[UITogglerComponent]})],parameters:{component:UITogglerComponent}},Default={render:args=>({template:'\n            <style>\n              .aaas {\n                --ui-custom-toggler-bg-default: red;\n              }\n            </style>\n                        <ui-toggler\n                            class="aaas"\n                            [isActived]="isActived"\n                            [isDisabled]="isDisabled"\n                            [ariaLabel]="ariaLabel"\n                            [ariaLabelledby]="ariaLabelledby"\n                            (outputEvent)="outputEvent($event)"\n                        />',props:{...args,outputEvent:(0,addon_actions_dist.XI)("output-event")}})},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render(args) {\n    return {\n      template: `\n            <style>\n              .aaas {\n                --ui-custom-toggler-bg-default: red;\n              }\n            </style>\n                        <ui-toggler\n                            class="aaas"\n                            [isActived]="isActived"\n                            [isDisabled]="isDisabled"\n                            [ariaLabel]="ariaLabel"\n                            [ariaLabelledby]="ariaLabelledby"\n                            (outputEvent)="outputEvent($event)"\n                        />`,\n      props: {\n        ...args,\n        outputEvent: action(\'output-event\')\n      }\n    };\n  }\n}',...Default.parameters?.docs?.source}}}}}]);