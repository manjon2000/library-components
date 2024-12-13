import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class UITreeComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.items = [
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
        this.nodes = [];
        this.withItemsSelected = false;
    }
    ngOnInit() {
        if (this.config) {
            this.withItemsSelected = (this.config.withSelected ?
                true :
                false);
        }
        this.buildNodes(this.items);
        console.log(this.nodes);
    }
    buildNodes(nodes) {
        const levelIndexes = {};
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
            });
            if (children) {
                this.processBuildNodes(level, levelIndexes, children);
            }
        }
    }
    processBuildNodes(level, levelIndexes, node) {
        if (!levelIndexes[level]) {
            levelIndexes[level] = 1;
        }
        node.map((eL, index) => {
            this.nodes[level].push({
                ...eL,
                children: true,
                level,
                index: levelIndexes[level]++,
                isFather: false,
                contentChildren: (eL?.children ? true : false),
            });
            if (eL?.children) {
                this.processBuildNodes(level, levelIndexes, eL.children);
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UITreeComponent, selector: "ui-tree", inputs: { config: "config", items: "items" }, ngImport: i0, template: "<!-- <ui-tree-view\n    [config]=\"config\"\n    [nodes]=\"nodes\"\n/> -->\n", styles: [""], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-tree', standalone: false, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- <ui-tree-view\n    [config]=\"config\"\n    [nodes]=\"nodes\"\n/> -->\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { config: [{
                type: Input
            }], items: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYW5qb24tdWkvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUvdHJlZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYW5qb24tdWkvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUvdHJlZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBVXJHLE1BQU0sT0FBTyxlQUFlO0lBNEQxQixZQUNtQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTNEaEMsVUFBSyxHQUFnQjtZQUM1QjtnQkFDRSxFQUFFLEVBQUUsR0FBRztnQkFDUCxLQUFLLEVBQUUsUUFBUTtnQkFDZixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsRUFBRSxFQUFFLEdBQUc7d0JBQ1AsS0FBSyxFQUFFLFlBQVk7d0JBQ25CLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxFQUFFLEVBQUUsR0FBRztnQ0FDUCxLQUFLLEVBQUUsTUFBTTs2QkFDZDs0QkFDRDtnQ0FDRSxFQUFFLEVBQUUsR0FBRztnQ0FDUCxLQUFLLEVBQUUsV0FBVzs2QkFDbkI7eUJBQ0Y7cUJBQ0Y7b0JBQ0Q7d0JBQ0UsRUFBRSxFQUFFLEdBQUc7d0JBQ1AsS0FBSyxFQUFFLFlBQVk7d0JBQ25CLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxFQUFFLEVBQUUsR0FBRztnQ0FDUCxLQUFLLEVBQUUsVUFBVTs2QkFDbEI7NEJBQ0Q7Z0NBQ0UsRUFBRSxFQUFFLEdBQUc7Z0NBQ1AsS0FBSyxFQUFFLFNBQVM7NkJBQ2pCO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7WUFDRDtnQkFDRSxFQUFFLEVBQUUsS0FBSztnQkFDVCxLQUFLLEVBQUUsV0FBVztn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S0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzsrR0EvSFUsZUFBZTttR0FBZixlQUFlLDZGQ1Y1Qiw4RUFJQTs7NEZETWEsZUFBZTtrQkFQM0IsU0FBUzsrQkFDRSxTQUFTLGNBQ1AsS0FBSyxtQkFHQSx1QkFBdUIsQ0FBQyxNQUFNO3NGQUd0QyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElUcmVlVmlldywgSVRyZWVWaWV3Q29uZmlndXJhdGlvbiwgSVRyZWVWaWV3Tm9kZXMgfSBmcm9tICcuL3RyZWUuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktdHJlZScsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi90cmVlLmNvbXBvbmVudC5zY3NzJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFVJVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZyE6IElUcmVlVmlld0NvbmZpZ3VyYXRpb247XG4gIEBJbnB1dCgpIGl0ZW1zOiBJVHJlZVZpZXdbXSA9IFtcbiAgICB7XG4gICAgICBpZDogJzEnLFxuICAgICAgbGFiZWw6ICdGcnV0YXMnLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnMicsXG4gICAgICAgICAgbGFiZWw6ICdUcm9waWNhbGVzJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgICBsYWJlbDogJ1Bpw7FhJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdNZWxvY290b24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgbGFiZWw6ICdOYWNpb25hbGVzJyxcbiAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogJzUnLFxuICAgICAgICAgICAgICBsYWJlbDogJ05hcmFuamFzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6ICc2JyxcbiAgICAgICAgICAgICAgbGFiZWw6ICdTYW5kaWFzJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzMxMycsXG4gICAgICBsYWJlbDogJ0NvdW50cmllcycsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICc0MTEnLFxuICAgICAgICAgIGxhYmVsOiAnU3BhaW4nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJzExMScsXG4gICAgICAgICAgbGFiZWw6ICdGcmFuY2gnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJzMxMScsXG4gICAgICAgICAgbGFiZWw6ICdJdGFseSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxuXG4gIHB1YmxpYyBub2RlczogSVRyZWVWaWV3Tm9kZXNbXVtdID0gW107XG4gIHB1YmxpYyB3aXRoSXRlbXNTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy53aXRoSXRlbXNTZWxlY3RlZCA9IChcbiAgICAgICAgdGhpcy5jb25maWcud2l0aFNlbGVjdGVkID9cbiAgICAgICAgICB0cnVlIDpcbiAgICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmJ1aWxkTm9kZXModGhpcy5pdGVtcyk7XG4gICAgY29uc29sZS5sb2codGhpcy5ub2RlcylcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGROb2Rlcyhub2RlczogSVRyZWVWaWV3W10pIHtcbiAgICBjb25zdCBsZXZlbEluZGV4ZXM6IHsgW2xldmVsOiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xuXG4gICAgZm9yIChsZXQgbGV2ZWwgPSAwOyBsZXZlbCA8IG5vZGVzLmxlbmd0aDsgbGV2ZWwrKykge1xuICAgICAgaWYgKCF0aGlzLm5vZGVzW2xldmVsXSkge1xuICAgICAgICB0aGlzLm5vZGVzW2xldmVsXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBsZXZlbEluZGV4ZXNbbGV2ZWxdID0gMDtcbiAgICAgIFxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2Rlc1tsZXZlbF0/LmNoaWxkcmVuO1xuXG4gICAgICB0aGlzLm5vZGVzW2xldmVsXS5wdXNoKHtcbiAgICAgICAgLi4ubm9kZXNbbGV2ZWxdLFxuICAgICAgICBjaGlsZHJlbjogZmFsc2UsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBpbmRleDogbGV2ZWxJbmRleGVzW2xldmVsXSxcbiAgICAgICAgaXNGYXRoZXI6IHRydWUsXG4gICAgICAgIGNvbnRlbnRDaGlsZHJlbjogKGNoaWxkcmVuID8gdHJ1ZSA6IGZhbHNlKSxcbiAgICAgIH0pXG5cbiAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICB0aGlzLnByb2Nlc3NCdWlsZE5vZGVzKGxldmVsLCBsZXZlbEluZGV4ZXMsIGNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NCdWlsZE5vZGVzKFxuICAgIGxldmVsOiBudW1iZXIsIFxuICAgIGxldmVsSW5kZXhlczogeyBbbGV2ZWw6IG51bWJlcl06IG51bWJlciB9LFxuICAgIG5vZGU6IElUcmVlVmlld1tdXG4gICkge1xuICAgIGlmICghbGV2ZWxJbmRleGVzW2xldmVsXSkge1xuICAgICAgbGV2ZWxJbmRleGVzW2xldmVsXSA9IDE7XG4gICAgfVxuXG4gICAgbm9kZS5tYXAoKGVMOiBJVHJlZVZpZXcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMubm9kZXNbbGV2ZWxdLnB1c2goe1xuICAgICAgICAuLi5lTCxcbiAgICAgICAgY2hpbGRyZW46IHRydWUsXG4gICAgICAgIGxldmVsLFxuICAgICAgICBpbmRleDogbGV2ZWxJbmRleGVzW2xldmVsXSsrLCAgICAgICAgXG4gICAgICAgIGlzRmF0aGVyOiBmYWxzZSxcbiAgICAgICAgY29udGVudENoaWxkcmVuOiAoZUw/LmNoaWxkcmVuID8gdHJ1ZSA6IGZhbHNlKSxcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlTD8uY2hpbGRyZW4pIHtcbiAgICAgICAgdGhpcy5wcm9jZXNzQnVpbGROb2RlcyhsZXZlbCwgbGV2ZWxJbmRleGVzLCBlTC5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG59IiwiPCEtLSA8dWktdHJlZS12aWV3XG4gICAgW2NvbmZpZ109XCJjb25maWdcIlxuICAgIFtub2Rlc109XCJub2Rlc1wiXG4vPiAtLT5cbiJdfQ==