import { Component, forwardRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FocusBlurDirective } from '../../shared/directives/focus-blur.directive';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class UIRadiobuttonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWFuam9uLXVpL3NyYy9saWIvY29tcG9uZW50cy9yYWRpb2J1dHRvbi9yYWRpb2J1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYW5qb24tdWkvc3JjL2xpYi9jb21wb25lbnRzL3JhZGlvYnV0dG9uL3JhZGlvYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBcUIsU0FBUyxFQUFjLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFtQnpFLE1BQU0sT0FBTyxzQkFBc0I7SUFhakMsWUFDVSxHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtJQUM3QixDQUFDO0lBRUosT0FBTyxDQUFDLEtBQVk7UUFDbEIsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBcUIsQ0FBQTtRQUU3RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUNELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBTztRQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLE9BQU87UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFFTSxNQUFNO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN4QixDQUFDOytHQTFDVSxzQkFBc0I7bUdBQXRCLHNCQUFzQix1TEFUdEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUNyRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsNklDbEJILCtmQWdCTSwrdUlEUkYsa0JBQWtCOzs0RkFhVCxzQkFBc0I7a0JBakJsQyxTQUFTOytCQUNFLGdCQUFnQixjQUNkLElBQUksV0FDUDt3QkFDUCxrQkFBa0I7cUJBQ25CLGFBR1U7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsdUJBQXVCLENBQUM7NEJBQ3JELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGLGlCQUNjLGlCQUFpQixDQUFDLElBQUk7c0ZBSUMsVUFBVTtzQkFBL0MsU0FBUzt1QkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUUzQixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvY3VzQmx1ckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9kaXJlY3RpdmVzL2ZvY3VzLWJsdXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktcmFkaW9idXR0b24nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9jdXNCbHVyRGlyZWN0aXZlXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpb2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9yYWRpb2J1dHRvbi5jb21wb25lbnQuc2NzcycsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVUlSYWRpb2J1dHRvbkNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVUlSYWRpb2J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0UmFkaW8hOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIGxhYmVsITogc3RyaW5nO1xuICBASW5wdXQoKSBpc0NoZWNrZWQhOiBib29sZWFuO1xuICBASW5wdXQoKSBpc0Rpc2FibGVkITogYm9vbGVhbjtcbiAgQElucHV0KCkgaXNFcnJvciE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFyaWFMYWJlbCE6IHN0cmluZztcblxuICBwdWJsaWMgb25DaGFuZ2VDYWxsYmFjaz86IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xuICBwcml2YXRlIF92YWx1ZSE6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBvbklucHV0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gKGV2ZW50LmN1cnJlbnRUYXJnZXQpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgIFxuICAgIHRoaXMuX3ZhbHVlID0gY2hlY2tlZDtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2s/LihjaGVja2VkKTtcblxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fdmFsdWUgPSBjaGVja2VkO1xuICB9XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XG4gIH1cblxuICBwdWJsaWMgb25Gb2N1cygpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnRk9DVVMhISEnKVxuICB9XG5cbiAgcHVibGljIG9uQmx1cigpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnQkxVUiEhIScpXG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ1aS1yYWRpb2J1dHRvblwiPlxuICAgIDxpbnB1dCBcbiAgICAgICAgI2lucHV0XG4gICAgICAgIGZvY3VzQmx1clxuICAgICAgICBpZD1cInJhZGlvMVwiXG4gICAgICAgIGNsYXNzPVwidWktcmFkaW9idXR0b24taW5wdXRcIlxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBbY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICAgIFthdHRyLmFyaWEtaW52YWxpZF09XCJpc0Vycm9yXCJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxuICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcbiAgICAgICAgKG9uRm9jdXMpPVwib25Gb2N1cygpXCJcbiAgICAgICAgKG9uQmx1cik9XCJvbkJsdXIoKVwic1xuICAgIC8+XG4gICAgPGxhYmVsIGZvcj1cInJhZGlvMVwiIGNsYXNzPVwidWktcmFkaW9idXR0b24tbGFiZWxcIj57e2xhYmVsfX08L2xhYmVsPlxuPC9kaXY+Il19