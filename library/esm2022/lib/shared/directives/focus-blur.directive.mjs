import { Directive, EventEmitter, HostListener, Output } from "@angular/core";
import * as i0 from "@angular/core";
export class FocusBlurDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtYmx1ci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYW5qb24tdWkvc3JjL2xpYi9zaGFyZWQvZGlyZWN0aXZlcy9mb2N1cy1ibHVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0xRixNQUFNLE9BQU8sa0JBQWtCO0lBSTNCLFlBQ1ksRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFKaEIsWUFBTyxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3ZELFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUk3RCxDQUFDO0lBRW1CLEtBQUs7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRXFCLElBQUk7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOytHQWRNLGtCQUFrQjttR0FBbEIsa0JBQWtCOzs0RkFBbEIsa0JBQWtCO2tCQUo5QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixVQUFVLEVBQUUsSUFBSTtpQkFDbkI7K0VBRWEsT0FBTztzQkFBaEIsTUFBTTtnQkFDRyxNQUFNO3NCQUFmLE1BQU07Z0JBTWdCLEtBQUs7c0JBQTNCLFlBQVk7dUJBQUMsT0FBTztnQkFJQyxJQUFJO3NCQUF6QixZQUFZO3VCQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tmb2N1c0JsdXJdJyxcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBGb2N1c0JsdXJEaXJlY3RpdmUge1xuICAgIEBPdXRwdXQoKSBvbkZvY3VzOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gICAgQE91dHB1dCgpIG9uQmx1cjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcbiAgICApIHt9XG5cbiAgICBASG9zdExpc3RlbmVyKCdmb2N1cycpIGZvY3VzKCkge1xuICAgICAgICB0aGlzLm9uRm9jdXMuZW1pdCgpXG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicpIGJsdXIoKSB7XG4gICAgICAgIHRoaXMub25CbHVyLmVtaXQoKTtcbiAgICAgIH1cbn0iXX0=