export class TreeNode {

  value!:       string;
  level!:       number;
  children!:    TreeNode[];
  parentNode!:  TreeNode | null;
  expanded = false;

  constructor(
    value: string,
    level: number = 0,
    parentNode: TreeNode | null = null
  ) {

    this.value      = value;
    this.level      = level;
    this.parentNode = parentNode;
    this.children   = [];

  }

  addChild(childNode: TreeNode): void {
    childNode.parentNode = this;
    childNode.level = (this.level + 1);

    this.children.push(childNode);
  }

  isLeaf(): boolean {
    return this.children.length === 0;
  }

  getPath(): any {
    if (this.parentNode == null) {
      return [
        this.value
      ];
    }

    return [
      ...this.parentNode.getPath(),
      this.value
    ];
  }

  getName(): string {
    return this.value;
  }

  getLevel(): number {
    return this.level;
  }
}
