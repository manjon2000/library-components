import * as i0 from '@angular/core';
import { EventEmitter, Directive, Output, HostListener, forwardRef, Component, ViewEncapsulation, ViewChild, Input, ChangeDetectionStrategy, ViewChildren } from '@angular/core';
import * as i1$1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { Subject, filter, takeUntil } from 'rxjs';

class FocusBlurDirective {
    constructor(el) {
        this.el = el;
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    focus() {
        this.onFocus.emit();
    }
    blur() {
        this.onBlur.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FocusBlurDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: FocusBlurDirective, isStandalone: true, selector: "[focusBlur]", outputs: { onFocus: "onFocus", onBlur: "onBlur" }, host: { listeners: { "focus": "focus()", "blur": "blur()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FocusBlurDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[focusBlur]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], focus: [{
                type: HostListener,
                args: ['focus']
            }], blur: [{
                type: HostListener,
                args: ['blur']
            }] } });

class UIRadiobuttonComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    onInput(event) {
        const { checked } = (event.currentTarget);
        this._value = checked;
        this.onChangeCallback?.(checked);
        this.cdr.markForCheck();
    }
    writeValue(checked) {
        this._value = checked;
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        throw new Error('Method not implemented.');
    }
    onFocus() {
        console.log('FOCUS!!!');
    }
    onBlur() {
        console.log('BLUR!!!');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIRadiobuttonComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UIRadiobuttonComponent, isStandalone: true, selector: "ui-radiobutton", inputs: { label: "label", isChecked: "isChecked", isDisabled: "isDisabled", isError: "isError", ariaLabel: "ariaLabel" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UIRadiobuttonComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "inputRadio", first: true, predicate: ["input"], descendants: true, static: true }], ngImport: i0, template: "<div class=\"ui-radiobutton\">\n    <input \n        #input\n        focusBlur\n        id=\"radio1\"\n        class=\"ui-radiobutton-input\"\n        type=\"radio\"\n        [checked]=\"isChecked\"\n        [disabled]=\"isDisabled\"\n        [attr.aria-invalid]=\"isError\"\n        [attr.aria-label]=\"ariaLabel\"\n        (input)=\"onInput($event)\"\n        (onFocus)=\"onFocus()\"\n        (onBlur)=\"onBlur()\"s\n    />\n    <label for=\"radio1\" class=\"ui-radiobutton-label\">{{label}}</label>\n</div>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-radiobutton-border-default: var( --ui-custom-radiobutton-border-default, var(--grayscale-spacer) );--ui-radiobutton-border-focus: var( --ui-custom-radiobutton-border-focus, var(--grayscale-black) );--ui-radiobutton-border-checked: var( --ui-custom-radiobutton-border-checked, var(--corporate-purple) );--ui-radiobutton-border-error: var( --ui-custom-radiobutton-border-error, var(--informing-error) );--ui-radiobutton-shadow-bg-default: var( --ui-custom-radiobutton-shadow-bg-default, transparent );--ui-radiobutton-shadow-bg-checked: var( --ui-custom-radiobutton-shadow-bg-checked, var(--corporate-purple) );--ui-radiobutton-shadow-bg-error: var( --ui-custom-radiobutton-shadow-bg-error, var(--informing-error) );--ui-radiobutton-shadow-bg-disabled: var( --ui-custom-radiobutton-shadow-bg-disabled, transparent );--ui-radiobutton-shadow-width-default: var( --ui-custom-radiobutton-shadow-width-default, 0em );--ui-radiobutton-shadow-width-checked: var( --ui-custom-radiobutton-shadow-width-checked, .25em )}.ui-radiobutton{--radiobutton-bg: var(--ui-radiobutton-shadow-bg-default);--radiobutton-border: var(--ui-radiobutton-border-default);--radiobutton-shadow: var(--ui-radiobutton-shadow-bg-default);--radiobutton-shadow-width: var(--ui-radiobutton-shadow-width-default);font-family:var(--font-family)}.ui-radiobutton-input{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.ui-radiobutton-input:focus+label:before{--radiobutton-border: var(--ui-radiobutton-border-focus)}.ui-radiobutton-input:checked:not([aria-invalid=true])+label:before{--radiobutton-shadow: var(--grayscale-white);--radiobutton-shadow-width: var( --ui-radiobutton-shadow-width-checked );--radiobutton-bg: var(--ui-radiobutton-shadow-bg-checked);--radiobutton-border: var(--ui-radiobutton-border-checked)}.ui-radiobutton-input[aria-invalid=true]:checked+label{--radiobutton-shadow: var(--grayscale-white);--radiobutton-bg: var(--ui-radiobutton-shadow-bg-error);--radiobutton-shadow-width: var(--ui-radiobutton-shadow-width-checked)}.ui-radiobutton-input[aria-invalid=true]+label:before{--radiobutton-border: var(--ui-radiobutton-border-error)}.ui-radiobutton-label{position:relative;padding-left:1.5em;font-weight:400;font-size:1em;line-height:148%;color:var(--grayscale-black)}.ui-radiobutton-label:before{content:\"\";width:1.125em;height:1.125em;border:1px solid var(--radiobutton-border, var(--grayscale-spacer));border-radius:999px;position:absolute;left:0;top:0;bottom:0;margin-top:.125em;transition:background ease-in-out .25s;background-color:var(--radiobutton-bg);box-shadow:inset 0 0 0 var(--radiobutton-shadow-width) var(--radiobutton-shadow, transparent)}\n"], dependencies: [{ kind: "directive", type: FocusBlurDirective, selector: "[focusBlur]", outputs: ["onFocus", "onBlur"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIRadiobuttonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-radiobutton', standalone: true, imports: [
                        FocusBlurDirective
                    ], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UIRadiobuttonComponent),
                            multi: true
                        }
                    ], encapsulation: ViewEncapsulation.None, template: "<div class=\"ui-radiobutton\">\n    <input \n        #input\n        focusBlur\n        id=\"radio1\"\n        class=\"ui-radiobutton-input\"\n        type=\"radio\"\n        [checked]=\"isChecked\"\n        [disabled]=\"isDisabled\"\n        [attr.aria-invalid]=\"isError\"\n        [attr.aria-label]=\"ariaLabel\"\n        (input)=\"onInput($event)\"\n        (onFocus)=\"onFocus()\"\n        (onBlur)=\"onBlur()\"s\n    />\n    <label for=\"radio1\" class=\"ui-radiobutton-label\">{{label}}</label>\n</div>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-radiobutton-border-default: var( --ui-custom-radiobutton-border-default, var(--grayscale-spacer) );--ui-radiobutton-border-focus: var( --ui-custom-radiobutton-border-focus, var(--grayscale-black) );--ui-radiobutton-border-checked: var( --ui-custom-radiobutton-border-checked, var(--corporate-purple) );--ui-radiobutton-border-error: var( --ui-custom-radiobutton-border-error, var(--informing-error) );--ui-radiobutton-shadow-bg-default: var( --ui-custom-radiobutton-shadow-bg-default, transparent );--ui-radiobutton-shadow-bg-checked: var( --ui-custom-radiobutton-shadow-bg-checked, var(--corporate-purple) );--ui-radiobutton-shadow-bg-error: var( --ui-custom-radiobutton-shadow-bg-error, var(--informing-error) );--ui-radiobutton-shadow-bg-disabled: var( --ui-custom-radiobutton-shadow-bg-disabled, transparent );--ui-radiobutton-shadow-width-default: var( --ui-custom-radiobutton-shadow-width-default, 0em );--ui-radiobutton-shadow-width-checked: var( --ui-custom-radiobutton-shadow-width-checked, .25em )}.ui-radiobutton{--radiobutton-bg: var(--ui-radiobutton-shadow-bg-default);--radiobutton-border: var(--ui-radiobutton-border-default);--radiobutton-shadow: var(--ui-radiobutton-shadow-bg-default);--radiobutton-shadow-width: var(--ui-radiobutton-shadow-width-default);font-family:var(--font-family)}.ui-radiobutton-input{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.ui-radiobutton-input:focus+label:before{--radiobutton-border: var(--ui-radiobutton-border-focus)}.ui-radiobutton-input:checked:not([aria-invalid=true])+label:before{--radiobutton-shadow: var(--grayscale-white);--radiobutton-shadow-width: var( --ui-radiobutton-shadow-width-checked );--radiobutton-bg: var(--ui-radiobutton-shadow-bg-checked);--radiobutton-border: var(--ui-radiobutton-border-checked)}.ui-radiobutton-input[aria-invalid=true]:checked+label{--radiobutton-shadow: var(--grayscale-white);--radiobutton-bg: var(--ui-radiobutton-shadow-bg-error);--radiobutton-shadow-width: var(--ui-radiobutton-shadow-width-checked)}.ui-radiobutton-input[aria-invalid=true]+label:before{--radiobutton-border: var(--ui-radiobutton-border-error)}.ui-radiobutton-label{position:relative;padding-left:1.5em;font-weight:400;font-size:1em;line-height:148%;color:var(--grayscale-black)}.ui-radiobutton-label:before{content:\"\";width:1.125em;height:1.125em;border:1px solid var(--radiobutton-border, var(--grayscale-spacer));border-radius:999px;position:absolute;left:0;top:0;bottom:0;margin-top:.125em;transition:background ease-in-out .25s;background-color:var(--radiobutton-bg);box-shadow:inset 0 0 0 var(--radiobutton-shadow-width) var(--radiobutton-shadow, transparent)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { inputRadio: [{
                type: ViewChild,
                args: ['input', { static: true }]
            }], label: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isError: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });

class UITogglerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.outputEvent = new EventEmitter();
    }
    onToggle() {
        this.isActived = !this.isActived;
        this.outputEvent.emit(this.isActived);
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITogglerComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UITogglerComponent, isStandalone: true, selector: "ui-toggler", inputs: { isActived: "isActived", isDisabled: "isDisabled", ariaLabel: "ariaLabel", ariaLabelledby: "ariaLabelledby" }, outputs: { outputEvent: "outputEvent" }, ngImport: i0, template: "<button \n    type=\"button\" \n    class=\"ui-toggler\" \n    [class.ui-toggler--active]=\"isActived\"\n    [disabled]=\"isDisabled\"\n    [attr.aria-label]=\"ariaLabel\"\n    [attr.aria-labelledby]=\"ariaLabelledby\"\n    [attr.aria-disabled]=\"isDisabled\"\n    (click)=\"onToggle()\"\n></button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-toggler-bg-default: var(--ui-custom-toggler-bg-default, var(--grayscale-bg-light-grey) ) ;--ui-toggler-bg-active: var(--ui-custom-toggler-bg-active, var(--corporate-purple) ) ;--ui-toggler-bg-disabled: var(--ui-custom-toggler-bg-disabled, var(--grayscale-disabled) ) ;--ui-toggler-circle-bg-default: var(--ui-custom-toggler-circle-bg-default, var(--grayscale-white) ) ;--ui-toggler-circle-bg-active: var(--ui-custom-toggler-circle-bg-active, var(--grayscale-white) ) ;--ui-toggler-circle-bg-disabled: var(--ui-custom-toggler-circle-bg-disabled, var(--grayscale-border) ) }.ui-toggler{--toggler-bg: var(--ui-toggler-bg-default);--toggler-circle-bg: var(--ui-toggler-circle-bg-default);--toggler-text-color: var(--ui-toggler-text-color-off);width:3.1875em;height:2em;display:flex;justify-content:flex-start;border-radius:62.4375em;background-color:var(--toggler-bg);position:relative;transition:all ease-in-out .25s;cursor:pointer}.ui-toggler:before{content:\"\";width:1.75em;height:1.75em;background-color:var(--toggler-circle-bg);box-shadow:0 0 4px #0000002b;position:absolute;top:0;bottom:0;margin:auto .125em;border-radius:62.4375em}.ui-toggler:disabled{--toggler-bg: var(--ui-toggler-bg-disabled);--toggler-circle-bg: var(--ui-toggler-circle-bg-disabled);cursor:not-allowed}.ui-toggler--active{--toggler-bg: var(--ui-toggler-bg-active);--toggler-circle-bg: var(--ui-toggler-circle-bg-active);justify-content:flex-end}\n"], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITogglerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-toggler', standalone: true, imports: [], encapsulation: ViewEncapsulation.None, template: "<button \n    type=\"button\" \n    class=\"ui-toggler\" \n    [class.ui-toggler--active]=\"isActived\"\n    [disabled]=\"isDisabled\"\n    [attr.aria-label]=\"ariaLabel\"\n    [attr.aria-labelledby]=\"ariaLabelledby\"\n    [attr.aria-disabled]=\"isDisabled\"\n    (click)=\"onToggle()\"\n></button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-toggler-bg-default: var(--ui-custom-toggler-bg-default, var(--grayscale-bg-light-grey) ) ;--ui-toggler-bg-active: var(--ui-custom-toggler-bg-active, var(--corporate-purple) ) ;--ui-toggler-bg-disabled: var(--ui-custom-toggler-bg-disabled, var(--grayscale-disabled) ) ;--ui-toggler-circle-bg-default: var(--ui-custom-toggler-circle-bg-default, var(--grayscale-white) ) ;--ui-toggler-circle-bg-active: var(--ui-custom-toggler-circle-bg-active, var(--grayscale-white) ) ;--ui-toggler-circle-bg-disabled: var(--ui-custom-toggler-circle-bg-disabled, var(--grayscale-border) ) }.ui-toggler{--toggler-bg: var(--ui-toggler-bg-default);--toggler-circle-bg: var(--ui-toggler-circle-bg-default);--toggler-text-color: var(--ui-toggler-text-color-off);width:3.1875em;height:2em;display:flex;justify-content:flex-start;border-radius:62.4375em;background-color:var(--toggler-bg);position:relative;transition:all ease-in-out .25s;cursor:pointer}.ui-toggler:before{content:\"\";width:1.75em;height:1.75em;background-color:var(--toggler-circle-bg);box-shadow:0 0 4px #0000002b;position:absolute;top:0;bottom:0;margin:auto .125em;border-radius:62.4375em}.ui-toggler:disabled{--toggler-bg: var(--ui-toggler-bg-disabled);--toggler-circle-bg: var(--ui-toggler-circle-bg-disabled);cursor:not-allowed}.ui-toggler--active{--toggler-bg: var(--ui-toggler-bg-active);--toggler-circle-bg: var(--ui-toggler-circle-bg-active);justify-content:flex-end}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { isActived: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], outputEvent: [{
                type: Output
            }] } });

// Añadir NGvalue_ACCESSOR y al componente UIOptionGroupComponent
class UIInputSearchComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.isShowSuggestions = true;
        this.outputWriteInput = new EventEmitter();
        this.outputSuggestions = new EventEmitter();
        this.isFocusin = false;
        this.isShowPanel = false;
        this.value = '';
        this._unsubcribes$ = new Subject();
    }
    onResize() {
        if (this.container?.nativeElement &&
            this.panel?.nativeElement &&
            this.isShowSuggestions) {
            this.adjustPositionPanel(this.container.nativeElement, this.panel?.nativeElement);
        }
    }
    onDocumentClick(event) {
        if (!this.container?.nativeElement.contains(event.target)) {
            if (this.isShowSuggestions) {
                this.isShowPanel = false;
            }
            this.isFocusin = false;
            this.cdr.markForCheck();
        }
    }
    ngAfterViewInit() {
        if (this.panelSuggestions) {
            this.panelSuggestions.outputSelected
                .pipe(filter((value) => value !== undefined), 
            //distinctUntilChanged(),
            takeUntil(this._unsubcribes$))
                .subscribe((options) => {
                this.value = options?.value;
                this.isFocusin = false;
                this.isShowPanel = false;
                this.outputSuggestions.emit(options);
            });
        }
    }
    ngAfterContentInit() {
        if (this.container?.nativeElement &&
            this.panel?.nativeElement &&
            this.isShowSuggestions) {
            this.adjustPositionPanel(this.container.nativeElement, this.panel?.nativeElement);
        }
        this.cdr.markForCheck();
    }
    ngAfterViewChecked() {
        if (this.container?.nativeElement &&
            this.panel?.nativeElement &&
            this.isShowSuggestions) {
            this.adjustPositionPanel(this.container.nativeElement, this.panel?.nativeElement);
        }
    }
    ngOnDestroy() {
        this._unsubcribes$.next();
        this._unsubcribes$.complete();
    }
    onInput(event) {
        const { value } = (event.currentTarget);
        this.value = value;
        this.outputWriteInput.emit(this.value);
        this.cdr.markForCheck();
    }
    onFocus() {
        this.isFocusin = true;
    }
    onBlur() {
        this.isFocusin = false;
    }
    adjustPositionPanel(container, panel) {
        if (!container || !panel) {
            console.warn('Container or panel is not available');
            return;
        }
        const { width, top, left, height } = container.getBoundingClientRect();
        panel.style.position = 'fixed';
        panel.style.width = `${width}px`;
        panel.style.top = `${top + height}px`;
        panel.style.left = `${left}px`;
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIInputSearchComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UIInputSearchComponent, isStandalone: true, selector: "ui-input-search", inputs: { panelSuggestions: "panelSuggestions", placeholder: "placeholder", isShowSuggestions: "isShowSuggestions" }, outputs: { outputWriteInput: "outputWriteInput", outputSuggestions: "outputSuggestions" }, host: { listeners: { "window:resize": "onResize($event)", "document:click": "onDocumentClick($event)" } }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, static: true }, { propertyName: "panel", first: true, predicate: ["panel"], descendants: true }], ngImport: i0, template: "<div \n    #container \n    class=\"ui-input-search\" \n    [class.ui-input-search--expand]=\"(isShowSuggestions && value.length !== 0) && (isShowPanel || isFocusin)\">\n    <input \n        #input \n        focusBlur\n        [value]=\"value\"\n        (input)=\"onInput($event)\"\n        (onFocus)=\"onFocus()\"\n        (onBlur)=\"onBlur()\" \n        type=\"search\"\n        placeholder=\"Buscar modelos\"\n    />\n    <div class=\"ui-input-search__wrapper\">\n        <svg class=\"ui-input-search-icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M10.8424 17.684C12.3605 17.6837 13.8349 17.1755 15.0307 16.2403L18.7906 20L20 18.7907L16.2401 15.031C17.1758 13.8351 17.6844 12.3604 17.6847 10.842C17.6847 7.06949 14.6151 4 10.8424 4C7.06965 4 4 7.06949 4 10.842C4 14.6145 7.06965 17.684 10.8424 17.684ZM10.8424 5.7105C13.6725 5.7105 15.9741 8.01197 15.9741 10.842C15.9741 13.672 13.6725 15.9735 10.8424 15.9735C8.01219 15.9735 5.71059 13.672 5.71059 10.842C5.71059 8.01197 8.01219 5.7105 10.8424 5.7105Z\" fill=\"currentColor\"/>\n            <path d=\"M12.05 9.6327C12.3742 9.95769 12.5529 10.387 12.5529 10.842H14.2635C14.2643 10.3925 14.1759 9.94734 14.0036 9.53219C13.8312 9.11705 13.5783 8.74018 13.2594 8.42337C11.9645 7.13024 9.71935 7.13024 8.42529 8.42337L9.63297 9.63441C10.283 8.98613 11.4034 8.98784 12.05 9.6327Z\" fill=\"currentColor\"/>\n        </svg>\n    </div>\n    <ng-container *ngIf=\"isShowSuggestions\">\n        <div \n            #panel \n            class=\"ui-input-search__panel\" \n            [class.ui-input-search__panel--expand]=\"value.length !== 0 && (isShowPanel || isFocusin)\" \n            role=\"listbox\">\n            <ng-content></ng-content>\n        </div>\n    </ng-container>\n</div>  ", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-input-search{height:2.75em;position:relative;display:flex;align-items:center;justify-content:space-between;gap:.5em;padding:0 .75em;border:.0625em solid var(--grayscale-spacer-light);border-radius:.125em}.ui-input-search--expand{border-bottom:none}.ui-input-search input{width:100%;height:100%;outline:none;border:none}.ui-input-search input:focus{outline:none}.ui-input-search__wrapper{height:100%;display:flex;align-items:center}.ui-input-search__panel{width:100%;height:fit-content;position:fixed;bottom:0;border:.0625em solid var(--grayscale-spacer-light);display:flex;flex-direction:column;animation:collapseAnimation ease-in-out .25s forwards}.ui-input-search__panel--expand{animation:expandAnimation ease-in-out .25s forwards}\n"], dependencies: [{ kind: "directive", type: FocusBlurDirective, selector: "[focusBlur]", outputs: ["onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIInputSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-input-search', standalone: true, imports: [
                        FocusBlurDirective,
                        CommonModule
                    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \n    #container \n    class=\"ui-input-search\" \n    [class.ui-input-search--expand]=\"(isShowSuggestions && value.length !== 0) && (isShowPanel || isFocusin)\">\n    <input \n        #input \n        focusBlur\n        [value]=\"value\"\n        (input)=\"onInput($event)\"\n        (onFocus)=\"onFocus()\"\n        (onBlur)=\"onBlur()\" \n        type=\"search\"\n        placeholder=\"Buscar modelos\"\n    />\n    <div class=\"ui-input-search__wrapper\">\n        <svg class=\"ui-input-search-icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M10.8424 17.684C12.3605 17.6837 13.8349 17.1755 15.0307 16.2403L18.7906 20L20 18.7907L16.2401 15.031C17.1758 13.8351 17.6844 12.3604 17.6847 10.842C17.6847 7.06949 14.6151 4 10.8424 4C7.06965 4 4 7.06949 4 10.842C4 14.6145 7.06965 17.684 10.8424 17.684ZM10.8424 5.7105C13.6725 5.7105 15.9741 8.01197 15.9741 10.842C15.9741 13.672 13.6725 15.9735 10.8424 15.9735C8.01219 15.9735 5.71059 13.672 5.71059 10.842C5.71059 8.01197 8.01219 5.7105 10.8424 5.7105Z\" fill=\"currentColor\"/>\n            <path d=\"M12.05 9.6327C12.3742 9.95769 12.5529 10.387 12.5529 10.842H14.2635C14.2643 10.3925 14.1759 9.94734 14.0036 9.53219C13.8312 9.11705 13.5783 8.74018 13.2594 8.42337C11.9645 7.13024 9.71935 7.13024 8.42529 8.42337L9.63297 9.63441C10.283 8.98613 11.4034 8.98784 12.05 9.6327Z\" fill=\"currentColor\"/>\n        </svg>\n    </div>\n    <ng-container *ngIf=\"isShowSuggestions\">\n        <div \n            #panel \n            class=\"ui-input-search__panel\" \n            [class.ui-input-search__panel--expand]=\"value.length !== 0 && (isShowPanel || isFocusin)\" \n            role=\"listbox\">\n            <ng-content></ng-content>\n        </div>\n    </ng-container>\n</div>  ", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-input-search{height:2.75em;position:relative;display:flex;align-items:center;justify-content:space-between;gap:.5em;padding:0 .75em;border:.0625em solid var(--grayscale-spacer-light);border-radius:.125em}.ui-input-search--expand{border-bottom:none}.ui-input-search input{width:100%;height:100%;outline:none;border:none}.ui-input-search input:focus{outline:none}.ui-input-search__wrapper{height:100%;display:flex;align-items:center}.ui-input-search__panel{width:100%;height:fit-content;position:fixed;bottom:0;border:.0625em solid var(--grayscale-spacer-light);display:flex;flex-direction:column;animation:collapseAnimation ease-in-out .25s forwards}.ui-input-search__panel--expand{animation:expandAnimation ease-in-out .25s forwards}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { container: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], panel: [{
                type: ViewChild,
                args: ['panel', { static: false }]
            }], panelSuggestions: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], isShowSuggestions: [{
                type: Input
            }], outputWriteInput: [{
                type: Output
            }], outputSuggestions: [{
                type: Output
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class UIOptionComponent {
    constructor() {
        this.isActive = false;
        this.isDisabled = false;
        this.outputemit = new EventEmitter();
    }
    onClick() {
        this.outputemit.emit(this.title);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIOptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UIOptionComponent, isStandalone: true, selector: "ui-option", inputs: { title: "title", isActive: "isActive", isDisabled: "isDisabled" }, outputs: { outputemit: "outputemit" }, ngImport: i0, template: "<button \n    class=\"ui-option\" \n    type=\"button\" \n    [class.ui-option--active]=\"isActive\"\n    [disabled]=\"isDisabled\"\n    [attr.aria-disabled]=\"isDisabled\"\n    (click)=\"onClick()\"\n>\n    {{title}}\n</button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-option{width:100%;display:block;text-align:left;padding:.75em;font-size:.875em;line-height:140%}.ui-option:not(.ui-option:disabled){cursor:pointer}.ui-option:disabled{background-color:var(--grayscale-disabled);color:var(--grayscale-border);cursor:not-allowed}.ui-option:focus{border:.0625em solid var(--grayscale-black)}.ui-option--active{background-color:var(--corporate-purple);color:var(--grayscale-white)}\n"], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIOptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-option', standalone: true, imports: [], encapsulation: ViewEncapsulation.None, template: "<button \n    class=\"ui-option\" \n    type=\"button\" \n    [class.ui-option--active]=\"isActive\"\n    [disabled]=\"isDisabled\"\n    [attr.aria-disabled]=\"isDisabled\"\n    (click)=\"onClick()\"\n>\n    {{title}}\n</button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-option{width:100%;display:block;text-align:left;padding:.75em;font-size:.875em;line-height:140%}.ui-option:not(.ui-option:disabled){cursor:pointer}.ui-option:disabled{background-color:var(--grayscale-disabled);color:var(--grayscale-border);cursor:not-allowed}.ui-option:focus{border:.0625em solid var(--grayscale-black)}.ui-option--active{background-color:var(--corporate-purple);color:var(--grayscale-white)}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], isActive: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], outputemit: [{
                type: Output
            }] } });

class UIOptionGroupComponent {
    constructor() {
        this.outputSelected = new EventEmitter();
        this.outputMultiSelected = new EventEmitter();
        this.isEmpty = false;
        this._multiOptionsSelected = [];
        this._optionSelected = {};
    }
    trackByOptionId(index, option) {
        return option.id;
    }
    ngOnChanges(changes) {
        if (changes['options'] && (changes['options'].previousValue !== changes['options'].currentValue)) {
            this.isEmpty = this.options.length > 0 ? false : true;
        }
    }
    onSendOptionSelected(option) {
        if (this.config && this.config.multiSelected === true) {
            if (this.verifyDuplicateOptionSelected(option)) {
                this._multiOptionsSelected = this._multiOptionsSelected.filter(({ id }) => option.id !== id);
                this.outputMultiSelected.emit(this._multiOptionsSelected);
                return;
            }
            this._multiOptionsSelected.push(option);
            this.outputMultiSelected.emit(this._multiOptionsSelected);
        }
        else {
            if (this._optionSelected.id === option.id) {
                this._optionSelected = {};
            }
            else {
                Object.assign(this._optionSelected, option);
            }
            this.outputSelected.emit(this._optionSelected);
        }
    }
    verifyThisElementIsSelected(option) {
        if (this.config && this.config.multiSelected) {
            if (this.verifyDuplicateOptionSelected(option)) {
                return true;
            }
        }
        else {
            if (this._optionSelected.id === option.id) {
                return true;
            }
        }
        return false;
    }
    verifyDuplicateOptionSelected(option) {
        return this._multiOptionsSelected.find(({ id, value }) => {
            return id === option.id && value === option.value;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIOptionGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UIOptionGroupComponent, isStandalone: true, selector: "ui-option-group", inputs: { config: "config", options: "options" }, outputs: { outputSelected: "outputSelected", outputMultiSelected: "outputMultiSelected" }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"options\">\n    <ul role=\"listbox\">\n        <ng-container *ngIf=\"isEmpty; then emptyData;\"></ng-container>\n        <li *ngFor=\"let option of options; trackBy: trackByOptionId\">\n            <ui-option\n                [title]=\"option.value\" \n                [isActive]=\"verifyThisElementIsSelected(option)\"\n                [isDisabled]=\"option.disabled\"\n                (outputemit)=\"onSendOptionSelected(option)\" \n            />\n        </li>\n    </ul>\n</ng-container>\n\n\n<ng-template #emptyData>\n    <li>Empty Data</li>\n</ng-template>", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: UIOptionComponent, selector: "ui-option", inputs: ["title", "isActive", "isDisabled"], outputs: ["outputemit"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIOptionGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-option-group', standalone: true, imports: [
                        CommonModule,
                        UIOptionComponent
                    ], template: "<ng-container *ngIf=\"options\">\n    <ul role=\"listbox\">\n        <ng-container *ngIf=\"isEmpty; then emptyData;\"></ng-container>\n        <li *ngFor=\"let option of options; trackBy: trackByOptionId\">\n            <ui-option\n                [title]=\"option.value\" \n                [isActive]=\"verifyThisElementIsSelected(option)\"\n                [isDisabled]=\"option.disabled\"\n                (outputemit)=\"onSendOptionSelected(option)\" \n            />\n        </li>\n    </ul>\n</ng-container>\n\n\n<ng-template #emptyData>\n    <li>Empty Data</li>\n</ng-template>" }]
        }], propDecorators: { config: [{
                type: Input
            }], options: [{
                type: Input
            }], outputSelected: [{
                type: Output
            }], outputMultiSelected: [{
                type: Output
            }] } });

class UICheckboxComponent {
    constructor() {
        this.outputChecked = new EventEmitter();
        this.tabIndex = 0;
        this.onTouch = () => { };
    }
    set isChecked(value) {
        this.isCheckated = value;
    }
    ;
    writeValue(checked) {
        this.isChecked = checked;
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    modelChangeFn(checked) {
        this.onChangeCallback?.(checked);
        this.outputChecked.emit(checked);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UICheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UICheckboxComponent, isStandalone: true, selector: "ui-checkbox", inputs: { id: "id", name: "name", label: "label", ariaLabel: "ariaLabel", isChecked: "isChecked", isDisabled: "isDisabled" }, outputs: { outputChecked: "outputChecked" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UICheckboxComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"ui-checkbox\">\n    <input \n        [id]=\"id\" \n        class=\"ui-checkbox-input\" \n        type=\"checkbox\" \n        role=\"checkbox\"\n        [attr.aria-disabled]=\"isDisabled\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-checked]=\"isCheckated\"\n        [checked]=\"isCheckated\" \n        [disabled]=\"isDisabled\"\n        [tabIndex]=\"isDisabled ? -1 : tabIndex\"\n        [(ngModel)]=\"isCheckated\"\n        (ngModelChange)=\"modelChangeFn($event)\"\n    />\n    <label \n        class=\"ui-checkbox-label\" \n        [class.ui-checkbox-label--not-text]=\"!label\" \n        [for]=\"id\">\n        <svg viewBox=\"0 0 100 100\">\n            <path fill=\"none\" stroke=\"#000\" stroke-width=\"13\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                stroke-miterlimit=\"10\" d=\"M12.1 52.1l24.4 24.4 53-53\" />\n        </svg>\n        {{ label }}\n    </label>\n</div>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-checkbox-border-default: var(--ui-custom-checkbox-border-default, var(--grayscale-spacer));--ui-checkbox-border-checked: var(--ui-custom-checkbox-border-checked, var(--corporate-purple));--ui-checkbox-border-disabled: var(--ui-custom-checkbox-border-disabled, var(--grayscale-spacer-light));--ui-checkbox-bg-default: var(--ui-custom-checkbox-bg-default, var(--grayscale-white));--ui-checkbox-bg-checked: var(--ui-custom-checkbox-bg-checked, var(--corporate-purple));--ui-checkbox-bg-disabled: var(--ui-custom-checkbox-bg-disabled, var(--grayscale-disabled));--ui-checkbox-svg-stroke: var(--ui-custom-checkbox-svg-stroke, var(--grayscale-white));--ui-checkbox-outline-width-default: var(--ui-custom-checkbox-outline-width-default, .0625em);--ui-checkbox-outline-style: var(--ui-custom-checkbox-outline-style, solid);--ui-checkbox-outline-color-default: var(--ui-custom-checkbox-outline-color, transparent);--ui-checkbox-outline-color-active: var(--ui-custom-checkbox-outline-color-active, var(--corporate-purple));--ui-checkbox-outline-offset: var(--ui-custom-checkbox-outline-offset, .125em);--ui-checkbox-label-color: var(--ui-custom-checkbox-label-color, var(--grayscale-black));--ui-checkbox-label-color-disabled: var(--ui-custom-checkbox-label-color-disabled, var(--grayscale-disabled));--ui-checkbox-label-font-weight: var(--ui-custom-checkbox-label-font-weight, 400);--ui-checkbox-label-font-size: var(--ui-custom-checkbox-label-font-size, 1em);--ui-checkbox-label-line-height: var(--ui-custom-checkbox-label-line-height, 148%);--ui-checkbox-spacing-left: var(--ui-custom-checkbox-spacing-left, 1.5em)}.ui-checkbox{--checkbox-border-color: var(--ui-checkbox-border-default);--checkbox-bg: var(--ui-checkbox-bg-default);--checkbox-label-color: var(--ui-checkbox-label-color);--checkbox-label-font-weight: var(--ui-checkbox-label-font-weight);--checkbox-label-font-size: var(--ui-checkbox-label-font-size);--checkbox-label-line-height: var(--ui-checkbox-label-line-height);--checkbox-svg-stroke: var(--ui-checkbox-svg-stroke);--checkbox-outline-width: var(--ui-checkbox-outline-width-default);--checkbox-outline-style: var(--ui-checkbox-outline-style);--checkbox-outline-color: var(--ui-checkbox-outline-color-default);--checkbox-outline-offset: var(--ui-checkbox-outline-offset);--checkbox-spacing-left: var(--ui-checkbox-spacing-left)}.ui-checkbox-input{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.ui-checkbox-input:focus+label{--checkbox-outline-color: var(--ui-checkbox-outline-color-active)}.ui-checkbox-input:disabled+label{--checkbox-label-color: var(--ui-checkbox-label-color-disabled);--checkbox-border-color: var(--ui-checkbox-border-disabled)}.ui-checkbox-input:is(.ui-checkbox-input:disabled):is(.ui-checkbox-input:checked)+label:before{--checkbox-bg: var(--ui-checkbox-bg-disabled);--checkbox-border-color: var(--ui-checkbox-border-disabled)}.ui-checkbox-input:checked+label{--checkbox-border-color: var(--corporate-purple);--checkbox-bg: var(--ui-checkbox-bg-checked)}.ui-checkbox-input:checked+label svg path{stroke-dashoffset:0}.ui-checkbox-label{position:relative;padding-left:var(--checkbox-spacing-left);font-weight:var(--checkbox-label-font-weight);font-size:var(--checkbox-label-font-size);line-height:var(--checkbox-label-line-height);color:var(--checkbox-label-color);-webkit-user-select:none;user-select:none;cursor:pointer}.ui-checkbox-label--not-text{padding-left:0}.ui-checkbox-label svg{position:absolute;left:.15625em;top:.3125em;width:.75em;height:.75em;pointer-events:none}.ui-checkbox-label svg path{stroke-dashoffset:6.9375em;stroke-dasharray:6.9375em;stroke:var(--checkbox-svg-stroke);transition:all .25s ease-out}@media (prefers-reduced-motion: reduce){.ui-checkbox-label svg path{transition:none}}.ui-checkbox-label:before{content:\"\";width:1.125em;height:1.125em;position:absolute;left:0;bottom:0;margin:auto;top:0;border:.0625em solid var(--checkbox-border-color);background-color:var(--checkbox-bg);border-radius:.25em;transition:all .25s ease-out;outline-width:var(--checkbox-outline-width);outline-style:var(--checkbox-outline-style);outline-color:var(--checkbox-outline-color);outline-offset:var(--checkbox-outline-offset)}@media (prefers-reduced-motion: reduce){.ui-checkbox-label:before{transition:none}}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UICheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-checkbox', standalone: true, imports: [
                        FormsModule
                    ], encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UICheckboxComponent),
                            multi: true
                        }
                    ], template: "<div class=\"ui-checkbox\">\n    <input \n        [id]=\"id\" \n        class=\"ui-checkbox-input\" \n        type=\"checkbox\" \n        role=\"checkbox\"\n        [attr.aria-disabled]=\"isDisabled\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-checked]=\"isCheckated\"\n        [checked]=\"isCheckated\" \n        [disabled]=\"isDisabled\"\n        [tabIndex]=\"isDisabled ? -1 : tabIndex\"\n        [(ngModel)]=\"isCheckated\"\n        (ngModelChange)=\"modelChangeFn($event)\"\n    />\n    <label \n        class=\"ui-checkbox-label\" \n        [class.ui-checkbox-label--not-text]=\"!label\" \n        [for]=\"id\">\n        <svg viewBox=\"0 0 100 100\">\n            <path fill=\"none\" stroke=\"#000\" stroke-width=\"13\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                stroke-miterlimit=\"10\" d=\"M12.1 52.1l24.4 24.4 53-53\" />\n        </svg>\n        {{ label }}\n    </label>\n</div>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-checkbox-border-default: var(--ui-custom-checkbox-border-default, var(--grayscale-spacer));--ui-checkbox-border-checked: var(--ui-custom-checkbox-border-checked, var(--corporate-purple));--ui-checkbox-border-disabled: var(--ui-custom-checkbox-border-disabled, var(--grayscale-spacer-light));--ui-checkbox-bg-default: var(--ui-custom-checkbox-bg-default, var(--grayscale-white));--ui-checkbox-bg-checked: var(--ui-custom-checkbox-bg-checked, var(--corporate-purple));--ui-checkbox-bg-disabled: var(--ui-custom-checkbox-bg-disabled, var(--grayscale-disabled));--ui-checkbox-svg-stroke: var(--ui-custom-checkbox-svg-stroke, var(--grayscale-white));--ui-checkbox-outline-width-default: var(--ui-custom-checkbox-outline-width-default, .0625em);--ui-checkbox-outline-style: var(--ui-custom-checkbox-outline-style, solid);--ui-checkbox-outline-color-default: var(--ui-custom-checkbox-outline-color, transparent);--ui-checkbox-outline-color-active: var(--ui-custom-checkbox-outline-color-active, var(--corporate-purple));--ui-checkbox-outline-offset: var(--ui-custom-checkbox-outline-offset, .125em);--ui-checkbox-label-color: var(--ui-custom-checkbox-label-color, var(--grayscale-black));--ui-checkbox-label-color-disabled: var(--ui-custom-checkbox-label-color-disabled, var(--grayscale-disabled));--ui-checkbox-label-font-weight: var(--ui-custom-checkbox-label-font-weight, 400);--ui-checkbox-label-font-size: var(--ui-custom-checkbox-label-font-size, 1em);--ui-checkbox-label-line-height: var(--ui-custom-checkbox-label-line-height, 148%);--ui-checkbox-spacing-left: var(--ui-custom-checkbox-spacing-left, 1.5em)}.ui-checkbox{--checkbox-border-color: var(--ui-checkbox-border-default);--checkbox-bg: var(--ui-checkbox-bg-default);--checkbox-label-color: var(--ui-checkbox-label-color);--checkbox-label-font-weight: var(--ui-checkbox-label-font-weight);--checkbox-label-font-size: var(--ui-checkbox-label-font-size);--checkbox-label-line-height: var(--ui-checkbox-label-line-height);--checkbox-svg-stroke: var(--ui-checkbox-svg-stroke);--checkbox-outline-width: var(--ui-checkbox-outline-width-default);--checkbox-outline-style: var(--ui-checkbox-outline-style);--checkbox-outline-color: var(--ui-checkbox-outline-color-default);--checkbox-outline-offset: var(--ui-checkbox-outline-offset);--checkbox-spacing-left: var(--ui-checkbox-spacing-left)}.ui-checkbox-input{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.ui-checkbox-input:focus+label{--checkbox-outline-color: var(--ui-checkbox-outline-color-active)}.ui-checkbox-input:disabled+label{--checkbox-label-color: var(--ui-checkbox-label-color-disabled);--checkbox-border-color: var(--ui-checkbox-border-disabled)}.ui-checkbox-input:is(.ui-checkbox-input:disabled):is(.ui-checkbox-input:checked)+label:before{--checkbox-bg: var(--ui-checkbox-bg-disabled);--checkbox-border-color: var(--ui-checkbox-border-disabled)}.ui-checkbox-input:checked+label{--checkbox-border-color: var(--corporate-purple);--checkbox-bg: var(--ui-checkbox-bg-checked)}.ui-checkbox-input:checked+label svg path{stroke-dashoffset:0}.ui-checkbox-label{position:relative;padding-left:var(--checkbox-spacing-left);font-weight:var(--checkbox-label-font-weight);font-size:var(--checkbox-label-font-size);line-height:var(--checkbox-label-line-height);color:var(--checkbox-label-color);-webkit-user-select:none;user-select:none;cursor:pointer}.ui-checkbox-label--not-text{padding-left:0}.ui-checkbox-label svg{position:absolute;left:.15625em;top:.3125em;width:.75em;height:.75em;pointer-events:none}.ui-checkbox-label svg path{stroke-dashoffset:6.9375em;stroke-dasharray:6.9375em;stroke:var(--checkbox-svg-stroke);transition:all .25s ease-out}@media (prefers-reduced-motion: reduce){.ui-checkbox-label svg path{transition:none}}.ui-checkbox-label:before{content:\"\";width:1.125em;height:1.125em;position:absolute;left:0;bottom:0;margin:auto;top:0;border:.0625em solid var(--checkbox-border-color);background-color:var(--checkbox-bg);border-radius:.25em;transition:all .25s ease-out;outline-width:var(--checkbox-outline-width);outline-style:var(--checkbox-outline-style);outline-color:var(--checkbox-outline-color);outline-offset:var(--checkbox-outline-offset)}@media (prefers-reduced-motion: reduce){.ui-checkbox-label:before{transition:none}}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], name: [{
                type: Input
            }], label: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], outputChecked: [{
                type: Output
            }] } });

class UITreeViewComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.items = [
            {
                id: '1',
                label: 'Frutas',
                children: [
                    {
                        id: '2',
                        label: 'Tropicales',
                        children: [
                            {
                                id: '3',
                                label: 'Piña'
                            },
                            {
                                id: '3',
                                label: 'Melocoton'
                            },
                        ]
                    },
                    {
                        id: '4',
                        label: 'Nacionales',
                        children: [
                            {
                                id: '5',
                                label: 'Naranjas'
                            },
                            {
                                id: '6',
                                label: 'Sandias'
                            },
                        ]
                    },
                ]
            },
        ];
        this.outputSelectItem = new EventEmitter();
        this.itemSelected = [];
        this.withItemsSelected = false;
    }
    ngOnInit() {
        if (this.config) {
            this.withItemsSelected = (this.config.withSelected ?
                true :
                false);
        }
        console.log(this.withItemsSelected);
    }
    ngAfterViewInit() {
        this.item.forEach((i) => {
            //console.log(i.nativeElement)
        });
    }
    selectItem(node) {
        this.outputSelectItem.emit(node);
    }
    isExpanded(node) {
        console.log(node);
        this.findNode(node);
        this.cdr.markForCheck();
    }
    isNodeSelected(idNode) {
        return this.itemSelected.find((node) => node.selected.id === idNode);
    }
    /**
     *
     * @return ITreeViewSelected
    */
    findNode(node) {
        const visited = new Set();
        for (const currentNode of this.items) {
            if (this.processNode(node, currentNode, visited)) {
                break;
            }
        }
        this.cdr.detectChanges();
    }
    processNode(node, currentNode, visited) {
        if (visited.has(currentNode.id)) {
            return false;
        }
        visited.add(currentNode.id);
        if (currentNode.id === node.id) {
            if (this.verifyThisExistElementSelected(currentNode.id)) {
                console.log('Repeat Element');
                this.deletedNode(currentNode.id);
            }
            else {
                if (!this.itemSelected) {
                    this.itemSelected = [{ selected: currentNode }];
                }
                else {
                    this.itemSelected.push({ selected: currentNode });
                }
            }
            this.cdr.markForCheck();
            return true;
        }
        // Process Childrens
        if (currentNode.children) {
            for (const child of currentNode.children) {
                console.log(child);
                if (this.processNode(node, child, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
    verifyThisExistElementSelected(nodeId) {
        return !!this.itemSelected.find((node) => node.selected.id === nodeId);
    }
    verifyParent(node) {
    }
    deletedNode(nodeId) {
        this.itemSelected = this.itemSelected?.filter((node) => node.selected.id !== nodeId);
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeViewComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UITreeViewComponent, isStandalone: true, selector: "ui-tree-view", inputs: { config: "config", items: "items" }, outputs: { outputSelectItem: "outputSelectItem" }, viewQueries: [{ propertyName: "item", predicate: ["item"], descendants: true }], ngImport: i0, template: "<ul class=\"ui-tree-view\">\n        <li \n        *ngFor=\"let item of items\"\n        #item \n        class=\"ui-tree-view-item\"\n        [class.ui-tree-view-item--expanded]=\"isNodeSelected(item.id)\" \n        [class.ui-tree-view-item--child]=\"!item.children\"\n        >\n        <p class=\"ui-tree-view-item-group\">\n            <button \n                *ngIf=\"item.children\" \n                class=\"ui-tree-view-item-btn\" \n                type=\"button\"\n                [attr.aria-label]=\"item.label\"\n                (click)=\"isExpanded(item)\">\n                <svg \n                    aria-hidden=\"true\" \n                    width=\"16\" \n                    height=\"16\" \n                    viewBox=\"0 0 16 16\" \n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    class=\"ui-tree-view-icon\"\n                    [class.ui-tree-view-icon--rotate]=\"isNodeSelected(item.id)\">\n                    <path\n                        d=\"M4.74666 14.08C5.07333 14.4067 5.6 14.4067 5.92666 14.08L11.5333 8.47333C11.5951 8.41165 11.6442 8.33839 11.6776 8.25774C11.7111 8.17709 11.7283 8.09064 11.7283 8.00333C11.7283 7.91601 11.7111 7.82956 11.6776 7.74891C11.6442 7.66826 11.5951 7.595 11.5333 7.53333L5.92 1.91999C5.6 1.59999 5.06666 1.59999 4.74666 1.91999C4.66906 1.9974 4.60749 2.08936 4.56548 2.1906C4.52347 2.29185 4.50184 2.40038 4.50184 2.50999C4.50184 2.6196 4.52347 2.72814 4.56548 2.82938C4.60749 2.93062 4.66906 3.02258 4.74666 3.09999L9.64 7.99999L4.74 12.9C4.42 13.2267 4.42 13.7533 4.74666 14.08Z\"\n                        fill=\"#9D3FE7\" />\n                </svg>\n            </button>\n            <span *ngIf=\"item.children\">\n                {{ item.label }}\n            </span>\n            <button \n                *ngIf=\"!item.children && withItemsSelected\" \n                class=\"ui-tree-view-item-select\"\n                [attr.aria-label]=\"item.label\"\n                (click)=\"selectItem(item)\">\n                {{ item.label }}\n            </button>\n            <span >\n                \n            </span>\n        </p>\n        <ui-tree-view\n            *ngIf=\"item.children && isNodeSelected(item.id)\"\n            [class.ui-tree-view--collapse]=\"!isNodeSelected(item.id)\"\n            [config]=\"config\"\n            [items]=\"item.children\"\n            (outputSelectItem)=\"selectItem($event)\"\n        />\n    </li>\n</ul>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-tree-view{width:fit-content;display:flex;flex-direction:column;padding-left:1rem}.ui-tree-view-item{font-weight:400;font-size:1em;line-height:148%;color:var(--grayscale-black)}.ui-tree-view-item-group{display:flex;align-items:center;gap:.5em}.ui-tree-view-item-group svg{cursor:pointer}.ui-tree-view-item-btn{display:flex;align-items:center;justify-content:center;padding:0}.ui-tree-view-item-btn:focus-within{outline-width:2px;outline-style:solid;outline-color:var(--corporate-purple);outline-offset:2px}.ui-tree-view-item-select{font:inherit}.ui-tree-view-item-select:focus-within{outline-width:2px;outline-style:solid;outline-color:var(--corporate-purple);outline-offset:1px}.ui-tree-view-item ul{overflow:hidden;height:0;animation:collapseAnimation .25s ease-in-out forwards}@media (prefers-reduced-motion: reduce){.ui-tree-view-item ul{animation:collapseAnimation forwards}}.ui-tree-view-item--expanded ul{height:auto;animation:expandAnimation .25s ease-in-out forwards}@media (prefers-reduced-motion: reduce){.ui-tree-view-item--expanded ul{animation:expandAnimation forwards}}.ui-tree-view-item--child{padding-left:calc(1rem - 8px);padding-top:.25rem;padding-bottom:.25rem}.ui-tree-view-icon{transition:transform ease-in-out .25s}@media (prefers-reduced-motion: reduce){.ui-tree-view-icon{transition:none}}.ui-tree-view-icon--rotate{transform:rotate(90deg)}\n"], dependencies: [{ kind: "component", type: UITreeViewComponent, selector: "ui-tree-view", inputs: ["config", "items"], outputs: ["outputSelectItem"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-tree-view', standalone: true, imports: [
                        CommonModule
                    ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ul class=\"ui-tree-view\">\n        <li \n        *ngFor=\"let item of items\"\n        #item \n        class=\"ui-tree-view-item\"\n        [class.ui-tree-view-item--expanded]=\"isNodeSelected(item.id)\" \n        [class.ui-tree-view-item--child]=\"!item.children\"\n        >\n        <p class=\"ui-tree-view-item-group\">\n            <button \n                *ngIf=\"item.children\" \n                class=\"ui-tree-view-item-btn\" \n                type=\"button\"\n                [attr.aria-label]=\"item.label\"\n                (click)=\"isExpanded(item)\">\n                <svg \n                    aria-hidden=\"true\" \n                    width=\"16\" \n                    height=\"16\" \n                    viewBox=\"0 0 16 16\" \n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    class=\"ui-tree-view-icon\"\n                    [class.ui-tree-view-icon--rotate]=\"isNodeSelected(item.id)\">\n                    <path\n                        d=\"M4.74666 14.08C5.07333 14.4067 5.6 14.4067 5.92666 14.08L11.5333 8.47333C11.5951 8.41165 11.6442 8.33839 11.6776 8.25774C11.7111 8.17709 11.7283 8.09064 11.7283 8.00333C11.7283 7.91601 11.7111 7.82956 11.6776 7.74891C11.6442 7.66826 11.5951 7.595 11.5333 7.53333L5.92 1.91999C5.6 1.59999 5.06666 1.59999 4.74666 1.91999C4.66906 1.9974 4.60749 2.08936 4.56548 2.1906C4.52347 2.29185 4.50184 2.40038 4.50184 2.50999C4.50184 2.6196 4.52347 2.72814 4.56548 2.82938C4.60749 2.93062 4.66906 3.02258 4.74666 3.09999L9.64 7.99999L4.74 12.9C4.42 13.2267 4.42 13.7533 4.74666 14.08Z\"\n                        fill=\"#9D3FE7\" />\n                </svg>\n            </button>\n            <span *ngIf=\"item.children\">\n                {{ item.label }}\n            </span>\n            <button \n                *ngIf=\"!item.children && withItemsSelected\" \n                class=\"ui-tree-view-item-select\"\n                [attr.aria-label]=\"item.label\"\n                (click)=\"selectItem(item)\">\n                {{ item.label }}\n            </button>\n            <span >\n                \n            </span>\n        </p>\n        <ui-tree-view\n            *ngIf=\"item.children && isNodeSelected(item.id)\"\n            [class.ui-tree-view--collapse]=\"!isNodeSelected(item.id)\"\n            [config]=\"config\"\n            [items]=\"item.children\"\n            (outputSelectItem)=\"selectItem($event)\"\n        />\n    </li>\n</ul>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-tree-view{width:fit-content;display:flex;flex-direction:column;padding-left:1rem}.ui-tree-view-item{font-weight:400;font-size:1em;line-height:148%;color:var(--grayscale-black)}.ui-tree-view-item-group{display:flex;align-items:center;gap:.5em}.ui-tree-view-item-group svg{cursor:pointer}.ui-tree-view-item-btn{display:flex;align-items:center;justify-content:center;padding:0}.ui-tree-view-item-btn:focus-within{outline-width:2px;outline-style:solid;outline-color:var(--corporate-purple);outline-offset:2px}.ui-tree-view-item-select{font:inherit}.ui-tree-view-item-select:focus-within{outline-width:2px;outline-style:solid;outline-color:var(--corporate-purple);outline-offset:1px}.ui-tree-view-item ul{overflow:hidden;height:0;animation:collapseAnimation .25s ease-in-out forwards}@media (prefers-reduced-motion: reduce){.ui-tree-view-item ul{animation:collapseAnimation forwards}}.ui-tree-view-item--expanded ul{height:auto;animation:expandAnimation .25s ease-in-out forwards}@media (prefers-reduced-motion: reduce){.ui-tree-view-item--expanded ul{animation:expandAnimation forwards}}.ui-tree-view-item--child{padding-left:calc(1rem - 8px);padding-top:.25rem;padding-bottom:.25rem}.ui-tree-view-icon{transition:transform ease-in-out .25s}@media (prefers-reduced-motion: reduce){.ui-tree-view-icon{transition:none}}.ui-tree-view-icon--rotate{transform:rotate(90deg)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { item: [{
                type: ViewChildren,
                args: ['item']
            }], config: [{
                type: Input
            }], items: [{
                type: Input
            }], outputSelectItem: [{
                type: Output
            }] } });

/*
 * Public API Surface of manjon-ui
 */
// Radiobutton

/**
 * Generated bundle index. Do not edit.
 */

export { UICheckboxComponent, UIInputSearchComponent, UIOptionComponent, UIOptionGroupComponent, UIRadiobuttonComponent, UITogglerComponent, UITreeViewComponent };
//# sourceMappingURL=manjon-ui.mjs.map
