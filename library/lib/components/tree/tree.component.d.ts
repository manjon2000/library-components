import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ITreeView, ITreeViewConfiguration, ITreeViewNodes } from './tree.interface';
import * as i0 from "@angular/core";
export declare class UITreeComponent implements OnInit {
    private readonly cdr;
    config: ITreeViewConfiguration;
    items: ITreeView[];
    nodes: ITreeViewNodes[][];
    withItemsSelected: boolean;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    private buildNodes;
    private processBuildNodes;
    static ɵfac: i0.ɵɵFactoryDeclaration<UITreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UITreeComponent, "ui-tree", never, { "config": { "alias": "config"; "required": false; }; "items": { "alias": "items"; "required": false; }; }, {}, never, never, false, never>;
}
