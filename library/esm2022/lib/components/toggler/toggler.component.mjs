import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class UITogglerComponent {
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UITogglerComponent, isStandalone: true, selector: "ui-toggler", inputs: { isActived: "isActived", isDisabled: "isDisabled", ariaLabel: "ariaLabel", ariaLabelledby: "ariaLabelledby" }, outputs: { outputEvent: "outputEvent" }, ngImport: i0, template: "<button \n    type=\"button\" \n    class=\"ui-toggler\" \n    [class.ui-toggler--active]=\"isActived\"\n    [disabled]=\"isDisabled\"\n    [attr.aria-label]=\"ariaLabel\"\n    [attr.aria-labelledby]=\"ariaLabelledby\"\n    [attr.aria-disabled]=\"isDisabled\"\n    (click)=\"onToggle()\"\n></button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;left:0}:root{--ui-toggler-bg-default: var(--ui-custom-toggler-bg-default, var(--grayscale-bg-light-grey) ) ;--ui-toggler-bg-active: var(--ui-custom-toggler-bg-active, var(--corporate-purple) ) ;--ui-toggler-bg-disabled: var(--ui-custom-toggler-bg-disabled, var(--grayscale-disabled) ) ;--ui-toggler-circle-bg-default: var(--ui-custom-toggler-circle-bg-default, var(--grayscale-white) ) ;--ui-toggler-circle-bg-active: var(--ui-custom-toggler-circle-bg-active, var(--grayscale-white) ) ;--ui-toggler-circle-bg-disabled: var(--ui-custom-toggler-circle-bg-disabled, var(--grayscale-border) ) }.ui-toggler{--toggler-bg: var(--ui-toggler-bg-default);--toggler-circle-bg: var(--ui-toggler-circle-bg-default);--toggler-text-color: var(--ui-toggler-text-color-off);width:3.1875em;height:2em;display:flex;justify-content:flex-start;border-radius:62.4375em;background-color:var(--toggler-bg);position:relative;transition:all ease-in-out .25s;cursor:pointer}.ui-toggler:before{content:\"\";width:1.75em;height:1.75em;background-color:var(--toggler-circle-bg);box-shadow:0 0 4px #0000002b;position:absolute;top:0;bottom:0;margin:auto .125em;border-radius:62.4375em}.ui-toggler:disabled{--toggler-bg: var(--ui-toggler-bg-disabled);--toggler-circle-bg: var(--ui-toggler-circle-bg-disabled);cursor:not-allowed}.ui-toggler--active{--toggler-bg: var(--ui-toggler-bg-active);--toggler-circle-bg: var(--ui-toggler-circle-bg-active);justify-content:flex-end}\n"], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITogglerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-toggler', standalone: true, imports: [], encapsulation: ViewEncapsulation.None, template: "<button \n    type=\"button\" \n    class=\"ui-toggler\" \n    [class.ui-toggler--active]=\"isActived\"\n    [disabled]=\"isDisabled\"\n    [attr.aria-label]=\"ariaLabel\"\n    [attr.aria-labelledby]=\"ariaLabelledby\"\n    [attr.aria-disabled]=\"isDisabled\"\n    (click)=\"onToggle()\"\n></button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;left:0}:root{--ui-toggler-bg-default: var(--ui-custom-toggler-bg-default, var(--grayscale-bg-light-grey) ) ;--ui-toggler-bg-active: var(--ui-custom-toggler-bg-active, var(--corporate-purple) ) ;--ui-toggler-bg-disabled: var(--ui-custom-toggler-bg-disabled, var(--grayscale-disabled) ) ;--ui-toggler-circle-bg-default: var(--ui-custom-toggler-circle-bg-default, var(--grayscale-white) ) ;--ui-toggler-circle-bg-active: var(--ui-custom-toggler-circle-bg-active, var(--grayscale-white) ) ;--ui-toggler-circle-bg-disabled: var(--ui-custom-toggler-circle-bg-disabled, var(--grayscale-border) ) }.ui-toggler{--toggler-bg: var(--ui-toggler-bg-default);--toggler-circle-bg: var(--ui-toggler-circle-bg-default);--toggler-text-color: var(--ui-toggler-text-color-off);width:3.1875em;height:2em;display:flex;justify-content:flex-start;border-radius:62.4375em;background-color:var(--toggler-bg);position:relative;transition:all ease-in-out .25s;cursor:pointer}.ui-toggler:before{content:\"\";width:1.75em;height:1.75em;background-color:var(--toggler-circle-bg);box-shadow:0 0 4px #0000002b;position:absolute;top:0;bottom:0;margin:auto .125em;border-radius:62.4375em}.ui-toggler:disabled{--toggler-bg: var(--ui-toggler-bg-disabled);--toggler-circle-bg: var(--ui-toggler-circle-bg-disabled);cursor:not-allowed}.ui-toggler--active{--toggler-bg: var(--ui-toggler-bg-active);--toggler-circle-bg: var(--ui-toggler-circle-bg-active);justify-content:flex-end}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYW5qb24tdWkvc3JjL2xpYi9jb21wb25lbnRzL3RvZ2dsZXIvdG9nZ2xlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYW5qb24tdWkvc3JjL2xpYi9jb21wb25lbnRzL3RvZ2dsZXIvdG9nZ2xlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFVN0csTUFBTSxPQUFPLGtCQUFrQjtJQVM3QixZQUNVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBSHRCLGdCQUFXLEdBQTBCLElBQUssWUFBWSxFQUFXLENBQUM7SUFJekUsQ0FBQztJQUVHLFFBQVE7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOytHQWpCVSxrQkFBa0I7bUdBQWxCLGtCQUFrQix1T0NWL0IsK1NBVUE7OzRGREFhLGtCQUFrQjtrQkFSOUIsU0FBUzsrQkFDRSxZQUFZLGNBQ1YsSUFBSSxXQUNQLEVBQUUsaUJBR0ksaUJBQWlCLENBQUMsSUFBSTtzRkFJNUIsU0FBUztzQkFBakIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFFSSxXQUFXO3NCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS10b2dnbGVyJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW10sXG4gIHRlbXBsYXRlVXJsOiAnLi90b2dnbGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3RvZ2dsZXIuY29tcG9uZW50LnNjc3MnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBVSVRvZ2dsZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGlzQWN0aXZlZCE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQhOiBib29sZWFuO1xuICBASW5wdXQoKSBhcmlhTGFiZWwhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFyaWFMYWJlbGxlZGJ5ITogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvdXRwdXRFdmVudDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3ICBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHB1YmxpYyBvblRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWN0aXZlZCA9ICF0aGlzLmlzQWN0aXZlZDtcbiAgICB0aGlzLm91dHB1dEV2ZW50LmVtaXQodGhpcy5pc0FjdGl2ZWQpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbn1cbiIsIjxidXR0b24gXG4gICAgdHlwZT1cImJ1dHRvblwiIFxuICAgIGNsYXNzPVwidWktdG9nZ2xlclwiIFxuICAgIFtjbGFzcy51aS10b2dnbGVyLS1hY3RpdmVdPVwiaXNBY3RpdmVkXCJcbiAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxuICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJhcmlhTGFiZWxsZWRieVwiXG4gICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAoY2xpY2spPVwib25Ub2dnbGUoKVwiXG4+PC9idXR0b24+XG4iXX0=