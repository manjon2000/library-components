import { NgModule } from "@angular/core";
import { UITreeComponent } from "./tree.component";
import { UITreeViewComponent } from "./tree-view.component";
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
export class UITreeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: UITreeModule, declarations: [UITreeComponent,
            UITreeViewComponent], imports: [CommonModule], exports: [CommonModule,
            UITreeComponent,
            UITreeViewComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeModule, imports: [CommonModule, CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        UITreeComponent,
                        UITreeViewComponent
                    ],
                    exports: [
                        CommonModule,
                        UITreeComponent,
                        UITreeViewComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYW5qb24tdWkvc3JjL2xpYi9jb21wb25lbnRzL3RyZWUvdHJlZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQWlCL0MsTUFBTSxPQUFPLFlBQVk7K0dBQVosWUFBWTtnSEFBWixZQUFZLGlCQVZqQixlQUFlO1lBQ2YsbUJBQW1CLGFBSm5CLFlBQVksYUFPWixZQUFZO1lBQ1osZUFBZTtZQUNmLG1CQUFtQjtnSEFJZCxZQUFZLFlBYmpCLFlBQVksRUFPWixZQUFZOzs0RkFNUCxZQUFZO2tCQWZ4QixRQUFRO21CQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3FCQUNmO29CQUNELFlBQVksRUFBRTt3QkFDVixlQUFlO3dCQUNmLG1CQUFtQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixtQkFBbUI7cUJBQ3RCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVUlUcmVlQ29tcG9uZW50IH0gZnJvbSBcIi4vdHJlZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVJVHJlZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi90cmVlLXZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBVSVRyZWVDb21wb25lbnQsXG4gICAgICAgIFVJVHJlZVZpZXdDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBVSVRyZWVDb21wb25lbnQsXG4gICAgICAgIFVJVHJlZVZpZXdDb21wb25lbnRcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgVUlUcmVlTW9kdWxlIHt9Il19