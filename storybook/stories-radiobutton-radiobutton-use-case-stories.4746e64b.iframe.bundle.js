(self.webpackChunkmanjon_ui=self.webpackChunkmanjon_ui||[]).push([[577],{"./projects/manjon-ui/src/lib/components/radiobutton/radiobutton.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,':root {\n  --font-family: "Poppins", sans-serif;\n  --font-size: 16px;\n  --line-height: 1.5;\n  --corporate-purple: #9D3FE7;\n  --corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;\n  --grayscale-black: #1A141F;\n  --grayscale-white: #FFFFFF;\n  --grayscale-hint-text: #4B3A5A;\n  --grayscale-border: #ABA7AF;\n  --grayscale-disabled: #D4D2D5;\n  --grayscale-spacer: #D9D1E0;\n  --grayscale-spacer-light: #E5E0EB;\n  --grayscale-bg-light-grey: #F5F3F7;\n  --informing-error: #D51A52;\n  --informing-attention: #FF9500;\n  --informing-approval: #00B998;\n  --informing-link: #0F0BAB;\n}\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nmain {\n  height: max-content;\n}\n\nbody {\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: var(--line-height);\n  min-height: 100vh;\n  vertical-align: middle;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\ninput[type="*"] {\n  outline: none;\n  border: none;\n  font-family: inherit;\n  font-size: inherit;\n}\n\nimg {\n  display: inline-block;\n  max-width: 100%;\n}\n\nbutton {\n  border: none;\n  outline: none;\n  background-color: transparent;\n}\n\n@keyframes collapseAnimation {\n  0% {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n  }\n  99% {\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n  }\n  100% {\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n  }\n}\n@keyframes expandAnimation {\n  0% {\n    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n  }\n  99% {\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n  }\n  100% {\n    clip-path: none;\n  }\n}\n.visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  left: 0;\n}\n\n:root {\n  --ui-radiobutton-border-default: var(\n    --ui-custom-radiobutton-border-default,\n    var(--grayscale-black)\n  );\n  --ui-radiobutton-border-focus: var(\n    --ui-custom-radiobutton-border-focus,\n    var(--grayscale-black)\n  );\n  --ui-radiobutton-border-checked: var(\n    --ui-custom-radiobutton-border-checked,\n    var(--corporate-purple)\n  );\n  --ui-radiobutton-border-error: var(\n    --ui-custom-radiobutton-border-error,\n    var(--informing-error)\n  );\n  --ui-radiobutton-shadow-bg-default: var(\n    --ui-custom-radiobutton-shadow-bg-default,\n    transparent\n  );\n  --ui-radiobutton-shadow-bg-checked: var(\n    --ui-custom-radiobutton-shadow-bg-checked,\n    var(--corporate-purple)\n  );\n  --ui-radiobutton-shadow-bg-error: var(\n    --ui-custom-radiobutton-shadow-bg-error,\n    var(--informing-error)\n  );\n  --ui-radiobutton-shadow-bg-disabled: var(\n    --ui-custom-radiobutton-shadow-bg-disabled,\n    transparent\n  );\n  --ui-radiobutton-shadow-width-default: var(\n    --ui-custom-radiobutton-shadow-width-default,\n    0em\n  );\n  --ui-radiobutton-shadow-width-checked: var(\n    --ui-custom-radiobutton-shadow-width-checked,\n    0.25em\n  );\n  --ui-radiobutton-focus-outline-width: var(\n    --ui-custom-radiobutton-focus-outline-width,\n    0.0625em\n  );\n  --ui-radiobutton-focus-outline-style: var(\n    --ui-custom-radiobutton-focus-outline-style,\n    solid\n  );\n  --ui-radiobutton-focus-outline-color: var(\n    --ui-custom-radiobutton-focus-outline-color,\n    var(--grayscale-black)\n  );\n  --ui-radiobutton-focus-outline-offset: var(\n    --ui-custom-radiobutton-focus-outline-offset,\n    0.125em\n  );\n}\n\n.ui-radiobutton {\n  --radiobutton-bg: var(--ui-radiobutton-shadow-bg-default);\n  --radiobutton-border: var(--ui-radiobutton-border-default);\n  --radiobutton-shadow: var(--ui-radiobutton-shadow-bg-default);\n  --radiobutton-shadow-width: var(--ui-radiobutton-shadow-width-default);\n  --radiobutton-outline-width: 0em;\n  --radiobutton-outline-style: none;\n  --radiobutton-outline-color: transparent;\n  --radiobutton-outline-offset: 0em;\n  font-family: var(--font-family);\n}\n.ui-radiobutton-input {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n}\n.ui-radiobutton-input:focus + label::before {\n  --radiobutton-border: var(--ui-radiobutton-border-focus);\n  --radiobutton-outline-width: var(\n    --ui-radiobutton-focus-outline-width\n  );\n  --radiobutton-outline-style: var(\n    --ui-radiobutton-focus-outline-style\n  );\n  --radiobutton-outline-color: var(\n    --ui-radiobutton-focus-outline-color\n  );\n  --radiobutton-outline-offset: var(\n    --ui-radiobutton-focus-outline-offset\n  );\n}\n.ui-radiobutton-input:checked:not([aria-invalid=true]) + label::before {\n  --radiobutton-shadow: var(--grayscale-white);\n  --radiobutton-shadow-width: var(\n    --ui-radiobutton-shadow-width-checked\n  );\n  --radiobutton-bg: var(--ui-radiobutton-shadow-bg-checked);\n  --radiobutton-border: var(--ui-radiobutton-border-checked);\n}\n.ui-radiobutton-input[aria-invalid=true]:checked + label {\n  --radiobutton-shadow: var(--grayscale-white);\n  --radiobutton-bg: var(--ui-radiobutton-shadow-bg-error);\n  --radiobutton-shadow-width: var(\n    --ui-radiobutton-shadow-width-checked\n  );\n}\n.ui-radiobutton-input[aria-invalid=true] + label::before {\n  --radiobutton-border: var(--ui-radiobutton-border-error);\n}\n.ui-radiobutton-label {\n  position: relative;\n  padding-left: 1.5em;\n  font-weight: 400;\n  font-size: 1em;\n  line-height: 148%;\n  color: var(--grayscale-black);\n}\n.ui-radiobutton-label::before {\n  content: "";\n  width: 1.125em;\n  height: 1.125em;\n  border: 1px solid var(--radiobutton-border, var(--grayscale-spacer));\n  border-radius: 999px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin-top: 0.125em;\n  transition: background ease-in-out 0.25s;\n  background-color: var(--radiobutton-bg);\n  box-shadow: inset 0 0 0 var(--radiobutton-shadow-width) var(--radiobutton-shadow, transparent);\n  outline-width: var(--radiobutton-outline-width);\n  outline-style: var(--radiobutton-outline-style);\n  outline-color: var(--radiobutton-outline-color);\n  outline-offset: var(--radiobutton-outline-offset);\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/manjon-ui/src/lib/components/radiobutton/radiobutton.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>UIRadiobuttonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var radiobutton_componentngResource=__webpack_require__("./projects/manjon-ui/src/lib/components/radiobutton/radiobutton.component.scss?ngResource"),radiobutton_componentngResource_default=__webpack_require__.n(radiobutton_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),focus_blur_directive=__webpack_require__("./projects/manjon-ui/src/lib/shared/directives/focus-blur.directive.ts"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");let UIRadiobuttonComponent=class UIRadiobuttonComponent{constructor(cdr){this.cdr=cdr}onInput(event){const{checked}=event.currentTarget;this._value=checked,this.onChangeCallback?.(checked),this.cdr.markForCheck()}writeValue(checked){this._value=checked}registerOnChange(fn){this.onChangeCallback=fn}registerOnTouched(fn){throw new Error("Method not implemented.")}onFocus(){console.log("FOCUS!!!")}onBlur(){console.log("BLUR!!!")}static{this.ctorParameters=()=>[{type:core.ChangeDetectorRef}]}static{this.propDecorators={inputRadio:[{type:core.ViewChild,args:["input",{static:!0}]}],label:[{type:core.Input}],isChecked:[{type:core.Input}],isDisabled:[{type:core.Input}],isError:[{type:core.Input}],ariaLabel:[{type:core.Input}]}}};UIRadiobuttonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ui-radiobutton",standalone:!0,imports:[focus_blur_directive.x],template:'<div class="ui-radiobutton">\n    <input\n        #input\n        focusBlur\n        id="radio1"\n        class="ui-radiobutton-input"\n        type="radio"\n        [checked]="isChecked"\n        [disabled]="isDisabled"\n        [attr.aria-invalid]="isError"\n        [attr.aria-label]="ariaLabel"\n        (input)="onInput($event)"\n        (onFocus)="onFocus()"\n        (onBlur)="onBlur()"\n    />\n    <label for="radio1" class="ui-radiobutton-label">{{label}}</label>\n</div>\n',providers:[{provide:fesm2022_forms.kq,useExisting:(0,core.forwardRef)((()=>UIRadiobuttonComponent)),multi:!0}],encapsulation:core.ViewEncapsulation.None,styles:[radiobutton_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ChangeDetectorRef])],UIRadiobuttonComponent)},"./projects/manjon-ui/src/lib/shared/directives/focus-blur.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>FocusBlurDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FocusBlurDirective=class FocusBlurDirective{constructor(el){this.el=el,this.onFocus=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,this.onBlur=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter}focus(){this.onFocus.emit()}blur(){this.onBlur.emit()}static{this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef}]}static{this.propDecorators={onFocus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],onBlur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output}],focus:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,args:["focus"]}],blur:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,args:["blur"]}]}}};FocusBlurDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[focusBlur]",standalone:!0}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Sn)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef])],FocusBlurDirective)},"./src/stories/radiobutton/radiobutton-use-case.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomStyles:()=>CustomStyles,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_projects_manjon_ui_src_public_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/manjon-ui/src/lib/components/radiobutton/radiobutton.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Forms/Radiobutton",args:{label:"Option 1",isChecked:!1,isDisabled:!1},argTypes:{label:{type:"string"},isChecked:{type:"boolean"},isDisabled:{type:"boolean"},isError:{type:"boolean"}},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_projects_manjon_ui_src_public_api__WEBPACK_IMPORTED_MODULE_1__.T]})],parameters:{component:_projects_manjon_ui_src_public_api__WEBPACK_IMPORTED_MODULE_1__.T},tags:["!autodocs"]},CustomStyles={render:args=>({template:'\n            <ui-radiobutton\n                class="custom-radiobutton"\n                [label]="label"\n                [isChecked]="isChecked"\n                [isDisabled]="isDisabled"\n                [isError]="isError"\n            />\n            ',props:{...args}}),parameters:{docs:!1}},__namedExportsOrder=["CustomStyles"];CustomStyles.parameters={...CustomStyles.parameters,docs:{...CustomStyles.parameters?.docs,source:{originalSource:'{\n  render(args) {\n    return {\n      template: `\n            <ui-radiobutton\n                class="custom-radiobutton"\n                [label]="label"\n                [isChecked]="isChecked"\n                [isDisabled]="isDisabled"\n                [isError]="isError"\n            />\n            `,\n      props: {\n        ...args\n      }\n    };\n  }\n}',...CustomStyles.parameters?.docs?.source}}}}}]);