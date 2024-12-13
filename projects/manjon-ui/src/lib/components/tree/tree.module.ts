import { NgModule } from "@angular/core";
import { UITreeComponent } from "./tree.component";
import { UITreeViewComponent } from "./tree-view.component";
import { CommonModule } from "@angular/common";

@NgModule({
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
})

export class UITreeModule {}