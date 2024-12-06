import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class UIRadiobuttonComponent implements ControlValueAccessor {
    private cdr;
    inputRadio: ElementRef;
    label: string;
    isChecked: boolean;
    isDisabled: boolean;
    isError: boolean;
    ariaLabel: string;
    onChangeCallback?: (checked: boolean) => void;
    private _value;
    constructor(cdr: ChangeDetectorRef);
    onInput(event: Event): void;
    writeValue(checked: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onFocus(): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UIRadiobuttonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UIRadiobuttonComponent, "ui-radiobutton", never, { "label": { "alias": "label"; "required": false; }; "isChecked": { "alias": "isChecked"; "required": false; }; "isDisabled": { "alias": "isDisabled"; "required": false; }; "isError": { "alias": "isError"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, never, true, never>;
}
