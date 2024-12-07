import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';


export interface ITreeViewConfiguration { }

export interface ITreeViewSelected {
  parent?: ITreeView;
  selected: ITreeView;
}

export interface ITreeView {
  id: string;
  label: string;
  children?: ITreeView[]
}

@Component({
  selector: 'ui-tree-view',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UITreeViewComponent implements AfterViewInit {

  @ViewChildren('item') item!: QueryList<ElementRef>;

  @Input() items: ITreeView[] = [
    {
      id: '1',
      label: 'Tree 1',
      children: [
        {
          id: '2',
          label: 'Tree 1.1',
          children: [
            {
              id: '5',
              label: 'Tree 1.2'
            },
          ]
        }
      ]
    },
    {
      id: '5',
      label: 'Tree 2'
    },
    {
      id: '3',
      label: 'Tree 3',
      children: [
        {
          id: '4',
          label: 'Tree 3.1',
          children: [
            {
              id: '8',
              label: 'Tree 3.2'
            }
          ]
        }
      ]
    }
  ]

  @Input() set nodesSelected(nodes: ITreeViewSelected[]) {
    if(nodes) {
      this.itemSelected = nodes;

      this.cdr.markForCheck();
    }
  }

  public itemSelected: ITreeViewSelected[] = [];

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.item.forEach((i) => {
      //console.log(i.nativeElement)
    });
  }

  public isExpanded(node: ITreeView): void {
    this.findNode(node);
    this.cdr.markForCheck();
  }

  public isNodeSelected(idNode: string): ITreeViewSelected | undefined {
    return this.itemSelected.find(
      (node: ITreeViewSelected) => node.selected.id === idNode
    );
  }

  /**
   * 
   * @return ITreeViewSelected
  */

  private findNode(node: ITreeView){
    const visited = new Set<string>();
    for(const currentNode of this.items) {
      if(this.processNode(node, currentNode, visited)) {
        break;
      }
    }

    this.cdr.detectChanges();
  }

  private processNode(
    node: ITreeView, 
    currentNode: ITreeView,
    visited: Set<string>
  ): boolean {

    if (visited.has(currentNode.id)) {
      return false;
    }

    visited.add(currentNode.id);

    if(currentNode.id === node.id) {
      if(
        this.verifyThisExistElementSelected(currentNode.id)
      ) {
        console.log('Repeat Element')
        this.deletedNode(currentNode.id);
      }else {

        if(!this.itemSelected) {
          this.itemSelected = [{selected: currentNode}];
        }else {
          this.itemSelected.push({selected: currentNode});
        }
      }

      this.cdr.markForCheck();
      return true;

    }

    // Process Childrens

    if(currentNode.children) {
      for(const child of currentNode.children) {
        if(this.processNode(node, currentNode, visited)) {
          return true;
        }
      }
    }

    return false;
  }

  private verifyThisExistElementSelected(
    nodeId: string
  ) {
    return !!this.itemSelected.find(
      (node: ITreeViewSelected) => node.selected.id === nodeId
    );
  }

  private deletedNode(nodeId: String): void {
    this.itemSelected = this.itemSelected?.filter(
      (node: ITreeViewSelected) => node.selected.id !== nodeId
    );

    this.cdr.detectChanges();
  }
}
