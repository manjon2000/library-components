import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class UICheckboxComponent implements ControlValueAccessor {
    id: string;
    name: string;
    label: string;
    ariaLabel: string;
    set isChecked(value: boolean);
    isDisabled: boolean;
    outputChecked: EventEmitter<boolean>;
    isCheckated: boolean;
    tabIndex: number;
    onChangeCallback?: (checked: boolean) => void;
    onTouch: () => void;
    writeValue(checked: boolean): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    modelChangeFn(checked: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UICheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UICheckboxComponent, "ui-checkbox", never, { "id": { "alias": "id"; "required": false; }; "name": { "alias": "name"; "required": false; }; "label": { "alias": "label"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "isChecked": { "alias": "isChecked"; "required": false; }; "isDisabled": { "alias": "isDisabled"; "required": false; }; }, { "outputChecked": "outputChecked"; }, never, never, true, never>;
}
