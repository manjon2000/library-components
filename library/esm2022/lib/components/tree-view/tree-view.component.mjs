import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewChildren } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class UITreeViewComponent {
    set nodesSelected(nodes) {
        if (nodes) {
            this.itemSelected = nodes;
            this.cdr.markForCheck();
        }
    }
    constructor(cdr) {
        this.cdr = cdr;
        this.items = [
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
        ];
        this.itemSelected = [];
    }
    ngAfterViewInit() {
        this.item.forEach((i) => {
            //console.log(i.nativeElement)
        });
    }
    isExpanded(node) {
        this.findNode(node);
        this.cdr.markForCheck();
    }
    isNodeSelected(idNode) {
        return this.itemSelected.find((node) => node.selected.id === idNode);
    }
    /**
     *
     * @return ITreeViewSelected
    */
    findNode(node) {
        const visited = new Set();
        for (const currentNode of this.items) {
            if (this.processNode(node, currentNode, visited)) {
                break;
            }
        }
        this.cdr.detectChanges();
    }
    processNode(node, currentNode, visited) {
        if (visited.has(currentNode.id)) {
            return false;
        }
        visited.add(currentNode.id);
        if (currentNode.id === node.id) {
            if (this.verifyThisExistElementSelected(currentNode.id)) {
                console.log('Repeat Element');
                this.deletedNode(currentNode.id);
            }
            else {
                if (!this.itemSelected) {
                    this.itemSelected = [{ selected: currentNode }];
                }
                else {
                    this.itemSelected.push({ selected: currentNode });
                }
            }
            this.cdr.markForCheck();
            return true;
        }
        // Process Childrens
        if (currentNode.children) {
            for (const child of currentNode.children) {
                if (this.processNode(node, currentNode, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
    verifyThisExistElementSelected(nodeId) {
        return !!this.itemSelected.find((node) => node.selected.id === nodeId);
    }
    deletedNode(nodeId) {
        this.itemSelected = this.itemSelected?.filter((node) => node.selected.id !== nodeId);
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeViewComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UITreeViewComponent, isStandalone: true, selector: "ui-tree-view", inputs: { items: "items", nodesSelected: "nodesSelected" }, viewQueries: [{ propertyName: "item", predicate: ["item"], descendants: true }], ngImport: i0, template: "<ul class=\"ui-tree-view\">\n        <li \n        *ngFor=\"let item of items\"\n        #item \n        class=\"ui-tree-view-item\"\n        [class.ui-tree-view-item--expanded]=\"isNodeSelected(item.id)\" \n        [class.ui-tree-view-item--child]=\"!item.children\"\n        >\n        <p class=\"ui-tree-view-item-group\">\n            <button \n                *ngIf=\"item.children\" \n                class=\"ui-tree-view-item-btn\" \n                type=\"button\"\n                (click)=\"isExpanded(item)\">\n                <svg \n                    aria-hidden=\"true\" \n                    width=\"16\" \n                    height=\"16\" \n                    viewBox=\"0 0 16 16\" \n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    class=\"ui-tree-view-icon\"\n                    [class.ui-tree-view-icon--rotate]=\"isNodeSelected(item.id)\">\n                    <path\n                        d=\"M4.74666 14.08C5.07333 14.4067 5.6 14.4067 5.92666 14.08L11.5333 8.47333C11.5951 8.41165 11.6442 8.33839 11.6776 8.25774C11.7111 8.17709 11.7283 8.09064 11.7283 8.00333C11.7283 7.91601 11.7111 7.82956 11.6776 7.74891C11.6442 7.66826 11.5951 7.595 11.5333 7.53333L5.92 1.91999C5.6 1.59999 5.06666 1.59999 4.74666 1.91999C4.66906 1.9974 4.60749 2.08936 4.56548 2.1906C4.52347 2.29185 4.50184 2.40038 4.50184 2.50999C4.50184 2.6196 4.52347 2.72814 4.56548 2.82938C4.60749 2.93062 4.66906 3.02258 4.74666 3.09999L9.64 7.99999L4.74 12.9C4.42 13.2267 4.42 13.7533 4.74666 14.08Z\"\n                        fill=\"#9D3FE7\" />\n                </svg>\n            </button>\n            {{ item.label }}\n        </p>\n        <ui-tree-view\n            *ngIf=\"item.children\" \n            [nodesSelected]=\"itemSelected\"\n            [items]=\"item.children\" \n        />\n    </li>\n</ul>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-tree-view{width:fit-content;display:flex;flex-direction:column;padding-left:1rem}.ui-tree-view-item{font-weight:400;font-size:1em;line-height:148%;color:var(--grayscale-black)}.ui-tree-view-item-group{display:flex;align-items:center;gap:.5em}.ui-tree-view-item-group svg{cursor:pointer}.ui-tree-view-item-btn{display:flex;align-items:center;justify-content:center;padding:0}.ui-tree-view-item ul{max-height:0;animation:collapseAnimation .25s ease-in-out forwards}.ui-tree-view-item--expanded ul{min-height:50px;animation:expandAnimation .25s ease-in-out forwards}.ui-tree-view-item--child{padding-left:calc(1rem + 8px)}.ui-tree-view-icon{transition:transform ease-in-out .25s}.ui-tree-view-icon--rotate{transform:rotate(90deg)}\n"], dependencies: [{ kind: "component", type: UITreeViewComponent, selector: "ui-tree-view", inputs: ["items", "nodesSelected"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-tree-view', standalone: true, imports: [
                        CommonModule
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<ul class=\"ui-tree-view\">\n        <li \n        *ngFor=\"let item of items\"\n        #item \n        class=\"ui-tree-view-item\"\n        [class.ui-tree-view-item--expanded]=\"isNodeSelected(item.id)\" \n        [class.ui-tree-view-item--child]=\"!item.children\"\n        >\n        <p class=\"ui-tree-view-item-group\">\n            <button \n                *ngIf=\"item.children\" \n                class=\"ui-tree-view-item-btn\" \n                type=\"button\"\n                (click)=\"isExpanded(item)\">\n                <svg \n                    aria-hidden=\"true\" \n                    width=\"16\" \n                    height=\"16\" \n                    viewBox=\"0 0 16 16\" \n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    class=\"ui-tree-view-icon\"\n                    [class.ui-tree-view-icon--rotate]=\"isNodeSelected(item.id)\">\n                    <path\n                        d=\"M4.74666 14.08C5.07333 14.4067 5.6 14.4067 5.92666 14.08L11.5333 8.47333C11.5951 8.41165 11.6442 8.33839 11.6776 8.25774C11.7111 8.17709 11.7283 8.09064 11.7283 8.00333C11.7283 7.91601 11.7111 7.82956 11.6776 7.74891C11.6442 7.66826 11.5951 7.595 11.5333 7.53333L5.92 1.91999C5.6 1.59999 5.06666 1.59999 4.74666 1.91999C4.66906 1.9974 4.60749 2.08936 4.56548 2.1906C4.52347 2.29185 4.50184 2.40038 4.50184 2.50999C4.50184 2.6196 4.52347 2.72814 4.56548 2.82938C4.60749 2.93062 4.66906 3.02258 4.74666 3.09999L9.64 7.99999L4.74 12.9C4.42 13.2267 4.42 13.7533 4.74666 14.08Z\"\n                        fill=\"#9D3FE7\" />\n                </svg>\n            </button>\n            {{ item.label }}\n        </p>\n        <ui-tree-view\n            *ngIf=\"item.children\" \n            [nodesSelected]=\"itemSelected\"\n            [items]=\"item.children\" \n        />\n    </li>\n</ul>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-tree-view{width:fit-content;display:flex;flex-direction:column;padding-left:1rem}.ui-tree-view-item{font-weight:400;font-size:1em;line-height:148%;color:var(--grayscale-black)}.ui-tree-view-item-group{display:flex;align-items:center;gap:.5em}.ui-tree-view-item-group svg{cursor:pointer}.ui-tree-view-item-btn{display:flex;align-items:center;justify-content:center;padding:0}.ui-tree-view-item ul{max-height:0;animation:collapseAnimation .25s ease-in-out forwards}.ui-tree-view-item--expanded ul{min-height:50px;animation:expandAnimation .25s ease-in-out forwards}.ui-tree-view-item--child{padding-left:calc(1rem + 8px)}.ui-tree-view-icon{transition:transform ease-in-out .25s}.ui-tree-view-icon--rotate{transform:rotate(90deg)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { item: [{
                type: ViewChildren,
                args: ['item']
            }], items: [{
                type: Input
            }], nodesSelected: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hbmpvbi11aS9zcmMvbGliL2NvbXBvbmVudHMvdHJlZS12aWV3L3RyZWUtdmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYW5qb24tdWkvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUtdmlldy90cmVlLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBaUIsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQWEsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7O0FBMEJwSyxNQUFNLE9BQU8sbUJBQW1CO0lBMkM5QixJQUFhLGFBQWEsQ0FBQyxLQUEwQjtRQUNuRCxJQUFHLEtBQUssRUFBRSxDQUFDO1lBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFFMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUlELFlBQ21CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBbERoQyxVQUFLLEdBQWdCO1lBQzVCO2dCQUNFLEVBQUUsRUFBRSxHQUFHO2dCQUNQLEtBQUssRUFBRSxRQUFRO2dCQUNmLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxFQUFFLEVBQUUsR0FBRzt3QkFDUCxLQUFLLEVBQUUsVUFBVTt3QkFDakIsUUFBUSxFQUFFOzRCQUNSO2dDQUNFLEVBQUUsRUFBRSxHQUFHO2dDQUNQLEtBQUssRUFBRSxVQUFVOzZCQUNsQjt5QkFDRjtxQkFDRjtpQkFDRjthQUNGO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDRSxFQUFFLEVBQUUsR0FBRztnQkFDUCxLQUFLLEVBQUUsUUFBUTtnQkFDZixRQUFRLEVBQUU7b0JBQ1I7d0JBQ0UsRUFBRSxFQUFFLEdBQUc7d0JBQ1AsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLFFBQVEsRUFBRTs0QkFDUjtnQ0FDRSxFQUFFLEVBQUUsR0FBRztnQ0FDUCxLQUFLLEVBQUUsVUFBVTs2QkFDbEI7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUE7UUFVTSxpQkFBWSxHQUF3QixFQUFFLENBQUM7SUFJM0MsQ0FBQztJQUVKLGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3RCLDhCQUE4QjtRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxVQUFVLENBQUMsSUFBZTtRQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLGNBQWMsQ0FBQyxNQUFjO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQzNCLENBQUMsSUFBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7TUFHRTtJQUVNLFFBQVEsQ0FBQyxJQUFlO1FBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDbEMsS0FBSSxNQUFNLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEMsSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDaEQsTUFBTTtZQUNSLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sV0FBVyxDQUNqQixJQUFlLEVBQ2YsV0FBc0IsRUFDdEIsT0FBb0I7UUFHcEIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2hDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTVCLElBQUcsV0FBVyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUIsSUFDRSxJQUFJLENBQUMsOEJBQThCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUNuRCxDQUFDO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtnQkFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkMsQ0FBQztpQkFBSyxDQUFDO2dCQUVMLElBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO3FCQUFLLENBQUM7b0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztZQUNILENBQUM7WUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1FBRWQsQ0FBQztRQUVELG9CQUFvQjtRQUVwQixJQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QixLQUFJLE1BQU0sS0FBSyxJQUFJLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEMsSUFBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDaEQsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU8sOEJBQThCLENBQ3BDLE1BQWM7UUFFZCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDN0IsQ0FBQyxJQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQ3pELENBQUM7SUFDSixDQUFDO0lBRU8sV0FBVyxDQUFDLE1BQWM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FDM0MsQ0FBQyxJQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQ3pELENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7K0dBckpVLG1CQUFtQjttR0FBbkIsbUJBQW1CLHFOQzNCaEMsZzFEQW9DSywrdkVEVFEsbUJBQW1CLDRGQU41QixZQUFZOzs0RkFNSCxtQkFBbUI7a0JBVi9CLFNBQVM7K0JBQ0UsY0FBYyxjQUNaLElBQUksV0FDUDt3QkFDUCxZQUFZO3FCQUNiLG1CQUdnQix1QkFBdUIsQ0FBQyxNQUFNO3NGQUl6QixJQUFJO3NCQUF6QixZQUFZO3VCQUFDLE1BQU07Z0JBRVgsS0FBSztzQkFBYixLQUFLO2dCQXVDTyxhQUFhO3NCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4sIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBJVHJlZVZpZXdDb25maWd1cmF0aW9uIHsgfVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlVmlld1NlbGVjdGVkIHtcbiAgcGFyZW50PzogSVRyZWVWaWV3O1xuICBzZWxlY3RlZDogSVRyZWVWaWV3O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUcmVlVmlldyB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogSVRyZWVWaWV3W11cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWktdHJlZS12aWV3JyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlZS12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3RyZWUtdmlldy5jb21wb25lbnQuc2NzcycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFVJVHJlZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBAVmlld0NoaWxkcmVuKCdpdGVtJykgaXRlbSE6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPjtcblxuICBASW5wdXQoKSBpdGVtczogSVRyZWVWaWV3W10gPSBbXG4gICAge1xuICAgICAgaWQ6ICcxJyxcbiAgICAgIGxhYmVsOiAnVHJlZSAxJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJzInLFxuICAgICAgICAgIGxhYmVsOiAnVHJlZSAxLjEnLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnNScsXG4gICAgICAgICAgICAgIGxhYmVsOiAnVHJlZSAxLjInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICc1JyxcbiAgICAgIGxhYmVsOiAnVHJlZSAyJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICczJyxcbiAgICAgIGxhYmVsOiAnVHJlZSAzJyxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJzQnLFxuICAgICAgICAgIGxhYmVsOiAnVHJlZSAzLjEnLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiAnOCcsXG4gICAgICAgICAgICAgIGxhYmVsOiAnVHJlZSAzLjInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG5cbiAgQElucHV0KCkgc2V0IG5vZGVzU2VsZWN0ZWQobm9kZXM6IElUcmVlVmlld1NlbGVjdGVkW10pIHtcbiAgICBpZihub2Rlcykge1xuICAgICAgdGhpcy5pdGVtU2VsZWN0ZWQgPSBub2RlcztcblxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGl0ZW1TZWxlY3RlZDogSVRyZWVWaWV3U2VsZWN0ZWRbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbS5mb3JFYWNoKChpKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKGkubmF0aXZlRWxlbWVudClcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBpc0V4cGFuZGVkKG5vZGU6IElUcmVlVmlldyk6IHZvaWQge1xuICAgIHRoaXMuZmluZE5vZGUobm9kZSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgaXNOb2RlU2VsZWN0ZWQoaWROb2RlOiBzdHJpbmcpOiBJVHJlZVZpZXdTZWxlY3RlZCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbVNlbGVjdGVkLmZpbmQoXG4gICAgICAobm9kZTogSVRyZWVWaWV3U2VsZWN0ZWQpID0+IG5vZGUuc2VsZWN0ZWQuaWQgPT09IGlkTm9kZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEByZXR1cm4gSVRyZWVWaWV3U2VsZWN0ZWRcbiAgKi9cblxuICBwcml2YXRlIGZpbmROb2RlKG5vZGU6IElUcmVlVmlldyl7XG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvcihjb25zdCBjdXJyZW50Tm9kZSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBpZih0aGlzLnByb2Nlc3NOb2RlKG5vZGUsIGN1cnJlbnROb2RlLCB2aXNpdGVkKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NOb2RlKFxuICAgIG5vZGU6IElUcmVlVmlldywgXG4gICAgY3VycmVudE5vZGU6IElUcmVlVmlldyxcbiAgICB2aXNpdGVkOiBTZXQ8c3RyaW5nPlxuICApOiBib29sZWFuIHtcblxuICAgIGlmICh2aXNpdGVkLmhhcyhjdXJyZW50Tm9kZS5pZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2aXNpdGVkLmFkZChjdXJyZW50Tm9kZS5pZCk7XG5cbiAgICBpZihjdXJyZW50Tm9kZS5pZCA9PT0gbm9kZS5pZCkge1xuICAgICAgaWYoXG4gICAgICAgIHRoaXMudmVyaWZ5VGhpc0V4aXN0RWxlbWVudFNlbGVjdGVkKGN1cnJlbnROb2RlLmlkKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXBlYXQgRWxlbWVudCcpXG4gICAgICAgIHRoaXMuZGVsZXRlZE5vZGUoY3VycmVudE5vZGUuaWQpO1xuICAgICAgfWVsc2Uge1xuXG4gICAgICAgIGlmKCF0aGlzLml0ZW1TZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuaXRlbVNlbGVjdGVkID0gW3tzZWxlY3RlZDogY3VycmVudE5vZGV9XTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIHRoaXMuaXRlbVNlbGVjdGVkLnB1c2goe3NlbGVjdGVkOiBjdXJyZW50Tm9kZX0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9XG5cbiAgICAvLyBQcm9jZXNzIENoaWxkcmVuc1xuXG4gICAgaWYoY3VycmVudE5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGZvcihjb25zdCBjaGlsZCBvZiBjdXJyZW50Tm9kZS5jaGlsZHJlbikge1xuICAgICAgICBpZih0aGlzLnByb2Nlc3NOb2RlKG5vZGUsIGN1cnJlbnROb2RlLCB2aXNpdGVkKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB2ZXJpZnlUaGlzRXhpc3RFbGVtZW50U2VsZWN0ZWQoXG4gICAgbm9kZUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgcmV0dXJuICEhdGhpcy5pdGVtU2VsZWN0ZWQuZmluZChcbiAgICAgIChub2RlOiBJVHJlZVZpZXdTZWxlY3RlZCkgPT4gbm9kZS5zZWxlY3RlZC5pZCA9PT0gbm9kZUlkXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlZE5vZGUobm9kZUlkOiBTdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1TZWxlY3RlZCA9IHRoaXMuaXRlbVNlbGVjdGVkPy5maWx0ZXIoXG4gICAgICAobm9kZTogSVRyZWVWaWV3U2VsZWN0ZWQpID0+IG5vZGUuc2VsZWN0ZWQuaWQgIT09IG5vZGVJZFxuICAgICk7XG5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiIsIjx1bCBjbGFzcz1cInVpLXRyZWUtdmlld1wiPlxuICAgICAgICA8bGkgXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCJcbiAgICAgICAgI2l0ZW0gXG4gICAgICAgIGNsYXNzPVwidWktdHJlZS12aWV3LWl0ZW1cIlxuICAgICAgICBbY2xhc3MudWktdHJlZS12aWV3LWl0ZW0tLWV4cGFuZGVkXT1cImlzTm9kZVNlbGVjdGVkKGl0ZW0uaWQpXCIgXG4gICAgICAgIFtjbGFzcy51aS10cmVlLXZpZXctaXRlbS0tY2hpbGRdPVwiIWl0ZW0uY2hpbGRyZW5cIlxuICAgICAgICA+XG4gICAgICAgIDxwIGNsYXNzPVwidWktdHJlZS12aWV3LWl0ZW0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLmNoaWxkcmVuXCIgXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ1aS10cmVlLXZpZXctaXRlbS1idG5cIiBcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiaXNFeHBhbmRlZChpdGVtKVwiPlxuICAgICAgICAgICAgICAgIDxzdmcgXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCIgXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCIgXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ1aS10cmVlLXZpZXctaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy51aS10cmVlLXZpZXctaWNvbi0tcm90YXRlXT1cImlzTm9kZVNlbGVjdGVkKGl0ZW0uaWQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQuNzQ2NjYgMTQuMDhDNS4wNzMzMyAxNC40MDY3IDUuNiAxNC40MDY3IDUuOTI2NjYgMTQuMDhMMTEuNTMzMyA4LjQ3MzMzQzExLjU5NTEgOC40MTE2NSAxMS42NDQyIDguMzM4MzkgMTEuNjc3NiA4LjI1Nzc0QzExLjcxMTEgOC4xNzcwOSAxMS43MjgzIDguMDkwNjQgMTEuNzI4MyA4LjAwMzMzQzExLjcyODMgNy45MTYwMSAxMS43MTExIDcuODI5NTYgMTEuNjc3NiA3Ljc0ODkxQzExLjY0NDIgNy42NjgyNiAxMS41OTUxIDcuNTk1IDExLjUzMzMgNy41MzMzM0w1LjkyIDEuOTE5OTlDNS42IDEuNTk5OTkgNS4wNjY2NiAxLjU5OTk5IDQuNzQ2NjYgMS45MTk5OUM0LjY2OTA2IDEuOTk3NCA0LjYwNzQ5IDIuMDg5MzYgNC41NjU0OCAyLjE5MDZDNC41MjM0NyAyLjI5MTg1IDQuNTAxODQgMi40MDAzOCA0LjUwMTg0IDIuNTA5OTlDNC41MDE4NCAyLjYxOTYgNC41MjM0NyAyLjcyODE0IDQuNTY1NDggMi44MjkzOEM0LjYwNzQ5IDIuOTMwNjIgNC42NjkwNiAzLjAyMjU4IDQuNzQ2NjYgMy4wOTk5OUw5LjY0IDcuOTk5OTlMNC43NCAxMi45QzQuNDIgMTMuMjI2NyA0LjQyIDEzLjc1MzMgNC43NDY2NiAxNC4wOFpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM5RDNGRTdcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB7eyBpdGVtLmxhYmVsIH19XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHVpLXRyZWUtdmlld1xuICAgICAgICAgICAgKm5nSWY9XCJpdGVtLmNoaWxkcmVuXCIgXG4gICAgICAgICAgICBbbm9kZXNTZWxlY3RlZF09XCJpdGVtU2VsZWN0ZWRcIlxuICAgICAgICAgICAgW2l0ZW1zXT1cIml0ZW0uY2hpbGRyZW5cIiBcbiAgICAgICAgLz5cbiAgICA8L2xpPlxuPC91bD4iXX0=