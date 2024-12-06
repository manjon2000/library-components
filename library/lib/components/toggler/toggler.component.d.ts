import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UITogglerComponent {
    private cdr;
    isActived: boolean;
    isDisabled: boolean;
    ariaLabel: string;
    ariaLabelledby: string;
    outputEvent: EventEmitter<boolean>;
    constructor(cdr: ChangeDetectorRef);
    onToggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UITogglerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UITogglerComponent, "ui-toggler", never, { "isActived": { "alias": "isActived"; "required": false; }; "isDisabled": { "alias": "isDisabled"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "ariaLabelledby": { "alias": "ariaLabelledby"; "required": false; }; }, { "outputEvent": "outputEvent"; }, never, never, true, never>;
}
