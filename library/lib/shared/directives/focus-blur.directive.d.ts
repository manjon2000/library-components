import { ElementRef, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export declare class FocusBlurDirective {
    private el;
    onFocus: EventEmitter<void>;
    onBlur: EventEmitter<void>;
    constructor(el: ElementRef);
    focus(): void;
    blur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FocusBlurDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FocusBlurDirective, "[focusBlur]", never, {}, { "onFocus": "onFocus"; "onBlur": "onBlur"; }, never, never, true, never>;
}
