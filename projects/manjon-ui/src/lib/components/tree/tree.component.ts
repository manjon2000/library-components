import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ITreeView, ITreeViewConfiguration, ITreeViewNodes } from './tree.interface';

@Component({
  selector: 'ui-tree',
  standalone: false,
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UITreeComponent implements OnInit {
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
  ]

  public nodes: ITreeViewNodes[][] = [];
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

    this.buildNodes(this.items);
  }

  private buildNodes(nodes: ITreeView[]) {
    const levelIndexes: { [level: number]: number } = {};

    for (let level = 0; level < nodes.length; level++) {
      if (!this.nodes[level]) {
        this.nodes[level] = [];
      }

      levelIndexes[level] = 0;

      const children = nodes[level]?.children;

      this.nodes[level].push({
        ...nodes[level],
        children: false,
        level,
        index: levelIndexes[level],
        isFather: true,
        contentChildren: (children ? true : false),
      })

      if (children) {
        this.processBuildNodes(level, levelIndexes, children);
      }
    }
  }

  private processBuildNodes(
    level: number,
    levelIndexes: { [level: number]: number },
    node: ITreeView[]
  ) {
    if (!levelIndexes[level]) {
      levelIndexes[level] = 1;
    }

    node.map((eL: ITreeView, index: number) => {
      this.nodes[level].push({
        ...eL,
        children: true,
        level,
        index: levelIndexes[level]++,
        isFather: false,
        contentChildren: (eL?.children ? true : false),
      })

      if (eL?.children) {
        this.processBuildNodes(level, levelIndexes, eL.children);
      }
    })
  }

}
