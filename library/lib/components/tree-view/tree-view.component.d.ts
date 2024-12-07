import { AfterViewInit, ChangeDetectorRef, ElementRef, QueryList } from '@angular/core';
import * as i0 from "@angular/core";
export interface ITreeViewConfiguration {
}
export interface ITreeViewSelected {
    parent?: ITreeView;
    selected: ITreeView;
}
export interface ITreeView {
    id: string;
    label: string;
    children?: ITreeView[];
}
export declare class UITreeViewComponent implements AfterViewInit {
    private readonly cdr;
    item: QueryList<ElementRef>;
    items: ITreeView[];
    set nodesSelected(nodes: ITreeViewSelected[]);
    itemSelected: ITreeViewSelected[];
    constructor(cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    isExpanded(node: ITreeView): void;
    isNodeSelected(idNode: string): ITreeViewSelected | undefined;
    /**
     *
     * @return ITreeViewSelected
    */
    private findNode;
    private processNode;
    private verifyThisExistElementSelected;
    private deletedNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<UITreeViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UITreeViewComponent, "ui-tree-view", never, { "items": { "alias": "items"; "required": false; }; "nodesSelected": { "alias": "nodesSelected"; "required": false; }; }, {}, never, never, true, never>;
}
