import { ChangeDetectorRef, EventEmitter, OnInit } from '@angular/core';
import { ITreeView, ITreeViewConfiguration, ITreeViewNodes, ITreeViewSelected } from './tree.interface';
import * as i0 from "@angular/core";
export declare class UITreeViewComponent implements OnInit {
    private readonly cdr;
    config: ITreeViewConfiguration;
    nodes: ITreeViewNodes[][];
    items: ITreeView[];
    outputSelectItem: EventEmitter<ITreeView>;
    itemSelected: ITreeViewSelected[];
    withItemsSelected: boolean;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    selectItem(node: ITreeView): void;
    isExpanded(node: ITreeViewNodes): void;
    isNodeSelected(idNode: string): ITreeViewSelected | undefined;
    private findNode;
    private processNode;
    private verifyThisExistElementSelected;
    private deletedNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<UITreeViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UITreeViewComponent, "ui-tree-view", never, { "config": { "alias": "config"; "required": false; }; "nodes": { "alias": "nodes"; "required": false; }; "items": { "alias": "items"; "required": false; }; }, { "outputSelectItem": "outputSelectItem"; }, never, never, false, never>;
}
