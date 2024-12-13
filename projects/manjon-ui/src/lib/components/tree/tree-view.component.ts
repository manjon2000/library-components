import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { ITreeView, ITreeViewConfiguration, ITreeViewNodes, ITreeViewSelected } from './tree.interface';

@Component({
  selector: 'ui-tree-view',
  standalone: false,
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class UITreeViewComponent implements OnInit {

  @Input() config!: ITreeViewConfiguration;
  @Input() nodes!: ITreeViewNodes[][];
  @Input() items: ITreeView[] = [
    {
      id: '1',
      label: 'Frutas',
      children: [
        {
          id: '2',
          label: 'Tropicales',
          children: [
            {
              id: '3',
              label: 'Piña'
            },
            {
              id: '3',
              label: 'Melocoton'
            },
          ]
        },
        {
          id: '4',
          label: 'Nacionales',
          children: [
            {
              id: '5',
              label: 'Naranjas'
            },
            {
              id: '6',
              label: 'Sandias'
            },
          ]
        },
      ]
    },
    {
      id: '313',
      label: 'Countries',
      children: [
        {
          id: '411',
          label: 'Spain'
        },
        {
          id: '111',
          label: 'Franch'
        },
        {
          id: '311',
          label: 'Italy'
        }
      ]
    }
  ];

  @Output() outputSelectItem: EventEmitter<ITreeView> = new EventEmitter<ITreeView>();

  public itemSelected: ITreeViewSelected[] = [];
  public withItemsSelected: boolean = false;

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if (this.config) {
      this.withItemsSelected = (
        this.config.withSelected ?
          true :
          false
      );
    }
  }

  public selectItem(node: ITreeView) {
    this.outputSelectItem.emit(node);
  }


  public isExpanded(node: ITreeViewNodes): void {
    //this.findNode(node);
    this.cdr.markForCheck();
  }

  public isNodeSelected(idNode: string): ITreeViewSelected | undefined {
    return this.itemSelected.find(
      (node: ITreeViewSelected) => node.selected.id === idNode
    );
  }

  private findNode(node: ITreeView) {
    const visited = new Set<string>();

    for (const currentNode of this.items) {
      if (this.processNode(node, currentNode, visited)) {
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

    if (currentNode.id === node.id) {
      if (
        this.verifyThisExistElementSelected(currentNode.id)
      ) {
        this.deletedNode(currentNode.id);
      } else {
        if (!this.itemSelected) {
          this.itemSelected = [{ selected: currentNode }];
        } else {
          this.itemSelected.push({ selected: currentNode });
        }
      }

      this.cdr.markForCheck();
      return true;

    }

    // Process Childrens
    if (currentNode.children) {
      for (const child of currentNode.children) {
        if (this.processNode(node, child, visited)) {
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