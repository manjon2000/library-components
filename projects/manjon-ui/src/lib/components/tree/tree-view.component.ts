import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeNode } from './tree-node/tree-node';
import { NodeUI } from './tree.model';

@Component({
  selector: 'ui-tree-view',
  standalone: false,
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class UITreeViewComponent implements OnInit {

  @Input({ required: true })
  set data(nodes: NodeUI[]) {
    this._nodes = nodes;
  }

  get data(): NodeUI[] {
    return this._nodes;
  }

  public treeRoots: TreeNode[] = [];
  private _nodes: NodeUI[] = [];

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.mountNodes();
  }

  toggle(node: TreeNode) {
    (node as any).expanded = !(node as any).expanded;
    this.cdr.markForCheck();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    const flatNodes = this.flattenVisibleNodes(this.treeRoots);
    const active = document.activeElement as HTMLElement;
    const index = flatNodes.findIndex(n => n.el === active);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        flatNodes[index + 1]?.el.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        flatNodes[index - 1]?.el.focus();
        break;
      case 'ArrowRight':
        if (!flatNodes[index].node.isLeaf() && !flatNodes[index].node.expanded) {
          this.toggle(flatNodes[index].node);
        }
        break;
      case 'ArrowLeft':
        if (flatNodes[index].node.expanded) {
          this.toggle(flatNodes[index].node);
        } else if (flatNodes[index].node.parentNode) {
          flatNodes[index - 1]?.el.focus();
        }
        break;
    }
  }

  private flattenVisibleNodes(nodes: TreeNode[], result: any[] = []): any[] {
    for (const node of nodes) {
      const el = document.querySelector(`[aria-label="${node.getName()}"]`);
      result.push({ node, el });
      if (node.expanded && node.children.length) {
        this.flattenVisibleNodes(node.children, result);
      }
    }
    return result;
  }


  private mountNodes() {
    this.treeRoots = this._nodes.map(
      node => this.recursiveNodes(node, 0, null)
    );
  }

  private recursiveNodes(node: NodeUI, level = 0, parent: TreeNode | null = null): TreeNode {
    const createNode = new TreeNode(node.value, level, parent);

    if (node.children && node.children.length > 0) {
      for (const n of node.children) {
        const childNode = this.recursiveNodes(n, (level + 1), createNode);
        createNode.addChild(childNode);
      }
    }

    return createNode;
  }
}
