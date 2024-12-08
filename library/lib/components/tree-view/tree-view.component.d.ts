import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, QueryList } from '@angular/core';
import * as i0 from "@angular/core";
export interface ITreeViewConfiguration {
    withCheckbox?: boolean;
    withSelected?: boolean;
}
export interface ITreeViewSelected {
    parent?: ITreeView | null;
    selected: ITreeView;
}
export interface ITreeView {
    id: string;
    label: string;
    children?: ITreeView[];
}
export declare class UITreeViewComponent implements OnInit, AfterViewInit {
    private readonly cdr;
    item: QueryList<ElementRef>;
    config: ITreeViewConfiguration;
    items: ITreeView[];
    outputSelectItem: EventEmitter<ITreeView>;
    itemSelected: ITreeViewSelected[];
    withItemsSelected: boolean;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    selectItem(node: ITreeView): void;
    isExpanded(node: ITreeView): void;
    isNodeSelected(idNode: string): ITreeViewSelected | undefined;
    /**
     *
     * @return ITreeViewSelected
    */
    private findNode;
    private processNode;
    private verifyThisExistElementSelected;
    private verifyParent;
    private deletedNode;
    static ɵfac: i0.ɵɵFactoryDeclaration<UITreeViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UITreeViewComponent, "ui-tree-view", never, { "config": { "alias": "config"; "required": false; }; "items": { "alias": "items"; "required": false; }; }, { "outputSelectItem": "outputSelectItem"; }, never, never, true, never>;
}
