import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';


export interface ITreeViewConfiguration {
  withCheckbox?: boolean,
  withSelected?: boolean
}

export interface ITreeViewSelected {
  parent?: ITreeView | null;
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class UITreeViewComponent implements OnInit, AfterViewInit {

  @ViewChildren('item') item!: QueryList<ElementRef>;

  @Input() config!: ITreeViewConfiguration;
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
  ]
  @Output() outputSelectItem: EventEmitter<ITreeView> = new EventEmitter<ITreeView>();

  public itemSelected: ITreeViewSelected[] = [];
  public withItemsSelected: boolean = false;

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if(this.config) {
      this.withItemsSelected = (
        this.config.withSelected ? 
        true : 
        false
      );
    }

    console.log(this.withItemsSelected)
  }

  ngAfterViewInit(): void {
    this.item.forEach((i) => {
      //console.log(i.nativeElement)
    });
  }

  public selectItem(node: ITreeView) {
    this.outputSelectItem.emit(node);
  }

  public isExpanded(node: ITreeView): void {
    console.log(node);
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
        console.log('Repeat Element')
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
        console.log(child)
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

  private verifyParent(node: ITreeView): void {

  }

  private deletedNode(nodeId: String): void {
    this.itemSelected = this.itemSelected?.filter(
      (node: ITreeViewSelected) => node.selected.id !== nodeId
    );

    this.cdr.detectChanges();
  }
}
