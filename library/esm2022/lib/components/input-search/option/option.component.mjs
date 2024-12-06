import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class UIOptionComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hbmpvbi11aS9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQtc2VhcmNoL29wdGlvbi9vcHRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWFuam9uLXVpL3NyYy9saWIvY29tcG9uZW50cy9pbnB1dC1zZWFyY2gvb3B0aW9uL29wdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVUxRixNQUFNLE9BQU8saUJBQWlCO0lBUjlCO1FBV1csYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTNCLGVBQVUsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztLQUt6RTtJQUhRLE9BQU87UUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzsrR0FWVSxpQkFBaUI7bUdBQWpCLGlCQUFpQix3TENWOUIsd09BVUE7OzRGREFhLGlCQUFpQjtrQkFSN0IsU0FBUzsrQkFDRSxXQUFXLGNBQ1QsSUFBSSxXQUNQLEVBQUUsaUJBR0ksaUJBQWlCLENBQUMsSUFBSTs4QkFJNUIsS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFFSSxVQUFVO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpLW9wdGlvbicsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtdLFxuICB0ZW1wbGF0ZVVybDogJy4vb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL29wdGlvbi5jb21wb25lbnQuc2NzcycsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFVJT3B0aW9uQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB0aXRsZSE6IHN0cmluZztcbiAgQElucHV0KCkgaXNBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBcbiAgQE91dHB1dCgpIG91dHB1dGVtaXQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgcHVibGljIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5vdXRwdXRlbWl0LmVtaXQodGhpcy50aXRsZSk7XG4gIH1cbn1cbiIsIjxidXR0b24gXG4gICAgY2xhc3M9XCJ1aS1vcHRpb25cIiBcbiAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgW2NsYXNzLnVpLW9wdGlvbi0tYWN0aXZlXT1cImlzQWN0aXZlXCJcbiAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAoY2xpY2spPVwib25DbGljaygpXCJcbj5cbiAgICB7e3RpdGxlfX1cbjwvYnV0dG9uPlxuIl19