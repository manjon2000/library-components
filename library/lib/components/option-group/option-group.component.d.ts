import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export interface IUIOptionGroupConfiguration {
    multiSelected?: boolean;
    itemsAboveScroll?: number;
}
export interface IUIOptionGroupOptionConfiguration {
    id: string | number;
    value: string;
    disabled: boolean;
    icon?: string;
    iconAlignment?: 'left' | 'right';
}
export declare class UIOptionGroupComponent implements OnChanges {
    config: IUIOptionGroupConfiguration;
    options: IUIOptionGroupOptionConfiguration[];
    outputSelected: EventEmitter<IUIOptionGroupOptionConfiguration>;
    outputMultiSelected: EventEmitter<IUIOptionGroupOptionConfiguration[]>;
    isEmpty: boolean;
    private _multiOptionsSelected;
    private _optionSelected;
    trackByOptionId(index: number, option: IUIOptionGroupOptionConfiguration): number | string;
    ngOnChanges(changes: SimpleChanges): void;
    onSendOptionSelected(option: IUIOptionGroupOptionConfiguration): void;
    verifyThisElementIsSelected(option: IUIOptionGroupOptionConfiguration): boolean;
    private verifyDuplicateOptionSelected;
    static ɵfac: i0.ɵɵFactoryDeclaration<UIOptionGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UIOptionGroupComponent, "ui-option-group", never, { "config": { "alias": "config"; "required": false; }; "options": { "alias": "options"; "required": false; }; }, { "outputSelected": "outputSelected"; "outputMultiSelected": "outputMultiSelected"; }, never, never, true, never>;
}
