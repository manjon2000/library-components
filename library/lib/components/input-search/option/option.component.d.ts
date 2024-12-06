import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class UIOptionComponent {
    title: string;
    isActive: boolean;
    isDisabled: boolean;
    outputemit: EventEmitter<string>;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UIOptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UIOptionComponent, "ui-option", never, { "title": { "alias": "title"; "required": false; }; "isActive": { "alias": "isActive"; "required": false; }; "isDisabled": { "alias": "isDisabled"; "required": false; }; }, { "outputemit": "outputemit"; }, never, never, true, never>;
}
