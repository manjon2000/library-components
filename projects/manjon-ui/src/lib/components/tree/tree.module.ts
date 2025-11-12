import { NgModule } from "@angular/core";
import { UITreeViewComponent } from "./tree-view.component";
import { CommonModule } from "@angular/common";
import { ɵEmptyOutletComponent } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ɵEmptyOutletComponent
],
  declarations: [
    UITreeViewComponent
  ],
  exports: [
    CommonModule,
    UITreeViewComponent
  ]
})

export class UITreeModule { }
