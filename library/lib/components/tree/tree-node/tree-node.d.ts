export declare class TreeNode {
    value: string;
    level: number;
    children: TreeNode[];
    parentNode: TreeNode | null;
    expanded: boolean;
    constructor(value: string, level?: number, parentNode?: TreeNode | null);
    addChild(childNode: TreeNode): void;
    isLeaf(): boolean;
    getPath(): any;
    getName(): string;
    getLevel(): number;
}
