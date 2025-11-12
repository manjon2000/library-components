import { ChangeDetectorRef, OnInit } from '@angular/core';
import { TreeNode } from './tree-node/tree-node';
import { NodeUI } from './tree.model';
import * as i0 from "@angular/core";
export declare class UITreeViewComponent implements OnInit {
    private readonly cdr;
    set data(nodes: NodeUI[]);
    get data(): NodeUI[];
    treeRoots: TreeNode[];
    private _nodes;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    toggle(node: TreeNode): void;
    onKeydown(event: KeyboardEvent): void;
    private flattenVisibleNodes;
    private mountNodes;
    private recursiveNodes;
    static ɵfac: i0.ɵɵFactoryDeclaration<UITreeViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UITreeViewComponent, "ui-tree-view", never, { "data": { "alias": "data"; "required": true; }; }, {}, never, never, false, never>;
}
