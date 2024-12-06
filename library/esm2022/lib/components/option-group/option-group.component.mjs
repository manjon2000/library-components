import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UIOptionComponent } from '../input-search/option/option.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class UIOptionGroupComponent {
    constructor() {
        this.outputSelected = new EventEmitter();
        this.outputMultiSelected = new EventEmitter();
        this.isEmpty = false;
        this._multiOptionsSelected = [];
        this._optionSelected = {};
    }
    trackByOptionId(index, option) {
        return option.id;
    }
    ngOnChanges(changes) {
        if (changes['options'] && (changes['options'].previousValue !== changes['options'].currentValue)) {
            this.isEmpty = this.options.length > 0 ? false : true;
        }
    }
    onSendOptionSelected(option) {
        if (this.config && this.config.multiSelected === true) {
            if (this.verifyDuplicateOptionSelected(option)) {
                this._multiOptionsSelected = this._multiOptionsSelected.filter(({ id }) => option.id !== id);
                this.outputMultiSelected.emit(this._multiOptionsSelected);
                return;
            }
            this._multiOptionsSelected.push(option);
            this.outputMultiSelected.emit(this._multiOptionsSelected);
        }
        else {
            if (this._optionSelected.id === option.id) {
                this._optionSelected = {};
            }
            else {
                Object.assign(this._optionSelected, option);
            }
            this.outputSelected.emit(this._optionSelected);
        }
    }
    verifyThisElementIsSelected(option) {
        if (this.config && this.config.multiSelected) {
            if (this.verifyDuplicateOptionSelected(option)) {
                return true;
            }
        }
        else {
            if (this._optionSelected.id === option.id) {
                return true;
            }
        }
        return false;
    }
    verifyDuplicateOptionSelected(option) {
        return this._multiOptionsSelected.find(({ id, value }) => {
            return id === option.id && value === option.value;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIOptionGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UIOptionGroupComponent, isStandalone: true, selector: "ui-option-group", inputs: { config: "config", options: "options" }, outputs: { outputSelected: "outputSelected", outputMultiSelected: "outputMultiSelected" }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"options\">\n    <ul role=\"listbox\">\n        <ng-container *ngIf=\"isEmpty; then emptyData;\"></ng-container>\n        <li *ngFor=\"let option of options; trackBy: trackByOptionId\">\n            <ui-option\n                [title]=\"option.value\" \n                [isActive]=\"verifyThisElementIsSelected(option)\"\n                [isDisabled]=\"option.disabled\"\n                (outputemit)=\"onSendOptionSelected(option)\" \n            />\n        </li>\n    </ul>\n</ng-container>\n\n\n<ng-template #emptyData>\n    <li>Empty Data</li>\n</ng-template>", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: UIOptionComponent, selector: "ui-option", inputs: ["title", "isActive", "isDisabled"], outputs: ["outputemit"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIOptionGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-option-group', standalone: true, imports: [
                        CommonModule,
                        UIOptionComponent
                    ], template: "<ng-container *ngIf=\"options\">\n    <ul role=\"listbox\">\n        <ng-container *ngIf=\"isEmpty; then emptyData;\"></ng-container>\n        <li *ngFor=\"let option of options; trackBy: trackByOptionId\">\n            <ui-option\n                [title]=\"option.value\" \n                [isActive]=\"verifyThisElementIsSelected(option)\"\n                [isDisabled]=\"option.disabled\"\n                (outputemit)=\"onSendOptionSelected(option)\" \n            />\n        </li>\n    </ul>\n</ng-container>\n\n\n<ng-template #emptyData>\n    <li>Empty Data</li>\n</ng-template>" }]
        }], propDecorators: { config: [{
                type: Input
            }], options: [{
                type: Input
            }], outputSelected: [{
                type: Output
            }], outputMultiSelected: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hbmpvbi11aS9zcmMvbGliL2NvbXBvbmVudHMvb3B0aW9uLWdyb3VwL29wdGlvbi1ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYW5qb24tdWkvc3JjL2xpYi9jb21wb25lbnRzL29wdGlvbi1ncm91cC9vcHRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7QUEyQjVFLE1BQU0sT0FBTyxzQkFBc0I7SUFWbkM7UUFlWSxtQkFBYyxHQUFvRCxJQUFJLFlBQVksRUFBcUMsQ0FBQTtRQUN2SCx3QkFBbUIsR0FBc0QsSUFBSSxZQUFZLEVBQXVDLENBQUM7UUFFcEksWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN4QiwwQkFBcUIsR0FBd0MsRUFBRSxDQUFBO1FBQy9ELG9CQUFlLEdBQStDLEVBQUUsQ0FBQTtLQThEekU7SUE1RFEsZUFBZSxDQUNwQixLQUFhLEVBQ2IsTUFBeUM7UUFFekMsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1lBQ2hHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4RCxDQUFDO0lBQ0gsQ0FBQztJQUVNLG9CQUFvQixDQUFDLE1BQXlDO1FBQ25FLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN0RCxJQUFJLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUMvQyxJQUFJLENBQUMscUJBQXFCLEdBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFvQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUMvSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUMxRCxPQUFPO1lBQ1QsQ0FBQztZQUVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUM1RCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUM1QixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQzdDLENBQUM7WUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDdEIsSUFBSSxDQUFDLGVBQW9ELENBQzFELENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVNLDJCQUEyQixDQUFDLE1BQXlDO1FBQzFFLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzdDLElBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQzlDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztRQUNILENBQUM7YUFBSyxDQUFDO1lBQ0wsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzFDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyw2QkFBNkIsQ0FDakMsTUFBeUM7UUFFM0MsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUNwQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBcUMsRUFBRSxFQUFFO1lBQ25ELE9BQU8sRUFBRSxLQUFLLE1BQU0sQ0FBQyxFQUFFLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEQsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOytHQXRFVSxzQkFBc0I7bUdBQXRCLHNCQUFzQiw2T0M3Qm5DLDJrQkFpQmMseURETVYsWUFBWSxnUUFDWixpQkFBaUI7OzRGQUtSLHNCQUFzQjtrQkFWbEMsU0FBUzsrQkFDRSxpQkFBaUIsY0FDZixJQUFJLFdBQ1A7d0JBQ1AsWUFBWTt3QkFDWixpQkFBaUI7cUJBQ2xCOzhCQU1RLE1BQU07c0JBQWQsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBRUksY0FBYztzQkFBdkIsTUFBTTtnQkFDRyxtQkFBbUI7c0JBQTVCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVUlPcHRpb25Db21wb25lbnQgfSBmcm9tICcuLi9pbnB1dC1zZWFyY2gvb3B0aW9uL29wdGlvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVSU9wdGlvbkdyb3VwQ29uZmlndXJhdGlvbiB7XG4gIC8vIEBUT0RPIGFkZCBjaGVja2JveFxuICBtdWx0aVNlbGVjdGVkPzogYm9vbGVhblxuICBpdGVtc0Fib3ZlU2Nyb2xsPzogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVJT3B0aW9uR3JvdXBPcHRpb25Db25maWd1cmF0aW9uIHtcbiAgLy8gQFRPRE8gQWRkIGljb25zXG4gIGlkOiBzdHJpbmcgfCBudW1iZXI7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBpY29uPzogc3RyaW5nO1xuICBpY29uQWxpZ25tZW50PzogJ2xlZnQnIHwgJ3JpZ2h0J1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aS1vcHRpb24tZ3JvdXAnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFVJT3B0aW9uQ29tcG9uZW50XG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9vcHRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBVSU9wdGlvbkdyb3VwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBjb25maWchOiBJVUlPcHRpb25Hcm91cENvbmZpZ3VyYXRpb247XG4gIEBJbnB1dCgpIG9wdGlvbnMhOiBJVUlPcHRpb25Hcm91cE9wdGlvbkNvbmZpZ3VyYXRpb25bXTtcbiAgXG4gIEBPdXRwdXQoKSBvdXRwdXRTZWxlY3RlZDogRXZlbnRFbWl0dGVyPElVSU9wdGlvbkdyb3VwT3B0aW9uQ29uZmlndXJhdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPElVSU9wdGlvbkdyb3VwT3B0aW9uQ29uZmlndXJhdGlvbj4oKVxuICBAT3V0cHV0KCkgb3V0cHV0TXVsdGlTZWxlY3RlZDogRXZlbnRFbWl0dGVyPElVSU9wdGlvbkdyb3VwT3B0aW9uQ29uZmlndXJhdGlvbltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8SVVJT3B0aW9uR3JvdXBPcHRpb25Db25maWd1cmF0aW9uW10+KCk7XG4gIFxuICBwdWJsaWMgaXNFbXB0eTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9tdWx0aU9wdGlvbnNTZWxlY3RlZDogSVVJT3B0aW9uR3JvdXBPcHRpb25Db25maWd1cmF0aW9uW10gPSBbXVxuICBwcml2YXRlIF9vcHRpb25TZWxlY3RlZDogUGFydGlhbDxJVUlPcHRpb25Hcm91cE9wdGlvbkNvbmZpZ3VyYXRpb24+ID0ge31cblxuICBwdWJsaWMgdHJhY2tCeU9wdGlvbklkKFxuICAgIGluZGV4OiBudW1iZXIsIFxuICAgIG9wdGlvbjogSVVJT3B0aW9uR3JvdXBPcHRpb25Db25maWd1cmF0aW9uXG4gICk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgcmV0dXJuIG9wdGlvbi5pZDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZihjaGFuZ2VzWydvcHRpb25zJ10gJiYgKGNoYW5nZXNbJ29wdGlvbnMnXS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzWydvcHRpb25zJ10uY3VycmVudFZhbHVlKSkge1xuICAgICAgdGhpcy5pc0VtcHR5ID0gdGhpcy5vcHRpb25zLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU2VuZE9wdGlvblNlbGVjdGVkKG9wdGlvbjogSVVJT3B0aW9uR3JvdXBPcHRpb25Db25maWd1cmF0aW9uKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm11bHRpU2VsZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgIGlmICh0aGlzLnZlcmlmeUR1cGxpY2F0ZU9wdGlvblNlbGVjdGVkKG9wdGlvbikpIHtcbiAgICAgICAgdGhpcy5fbXVsdGlPcHRpb25zU2VsZWN0ZWQgPSAgdGhpcy5fbXVsdGlPcHRpb25zU2VsZWN0ZWQuZmlsdGVyKCh7aWR9OiBJVUlPcHRpb25Hcm91cE9wdGlvbkNvbmZpZ3VyYXRpb24pID0+IG9wdGlvbi5pZCAhPT0gaWQpO1xuICAgICAgICB0aGlzLm91dHB1dE11bHRpU2VsZWN0ZWQuZW1pdCh0aGlzLl9tdWx0aU9wdGlvbnNTZWxlY3RlZCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbXVsdGlPcHRpb25zU2VsZWN0ZWQucHVzaChvcHRpb24pO1xuICAgICAgdGhpcy5vdXRwdXRNdWx0aVNlbGVjdGVkLmVtaXQodGhpcy5fbXVsdGlPcHRpb25zU2VsZWN0ZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fb3B0aW9uU2VsZWN0ZWQuaWQgPT09IG9wdGlvbi5pZCkge1xuICAgICAgICB0aGlzLl9vcHRpb25TZWxlY3RlZCA9IHt9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRpb25TZWxlY3RlZCwgb3B0aW9uKVxuICAgICAgfVxuXG4gICAgICB0aGlzLm91dHB1dFNlbGVjdGVkLmVtaXQoXG4gICAgICAgIHRoaXMuX29wdGlvblNlbGVjdGVkIGFzIElVSU9wdGlvbkdyb3VwT3B0aW9uQ29uZmlndXJhdGlvblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdmVyaWZ5VGhpc0VsZW1lbnRJc1NlbGVjdGVkKG9wdGlvbjogSVVJT3B0aW9uR3JvdXBPcHRpb25Db25maWd1cmF0aW9uKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm11bHRpU2VsZWN0ZWQpIHtcbiAgICAgIGlmKHRoaXMudmVyaWZ5RHVwbGljYXRlT3B0aW9uU2VsZWN0ZWQob3B0aW9uKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9ZWxzZSB7XG4gICAgICBpZiAodGhpcy5fb3B0aW9uU2VsZWN0ZWQuaWQgPT09IG9wdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHZlcmlmeUR1cGxpY2F0ZU9wdGlvblNlbGVjdGVkKFxuICAgICAgb3B0aW9uOiBJVUlPcHRpb25Hcm91cE9wdGlvbkNvbmZpZ3VyYXRpb25cbiAgKTogSVVJT3B0aW9uR3JvdXBPcHRpb25Db25maWd1cmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlPcHRpb25zU2VsZWN0ZWQuZmluZChcbiAgICAgICh7IGlkLCB2YWx1ZSB9OiBJVUlPcHRpb25Hcm91cE9wdGlvbkNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGlkID09PSBvcHRpb24uaWQgJiYgdmFsdWUgPT09IG9wdGlvbi52YWx1ZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJvcHRpb25zXCI+XG4gICAgPHVsIHJvbGU9XCJsaXN0Ym94XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0VtcHR5OyB0aGVuIGVtcHR5RGF0YTtcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uczsgdHJhY2tCeTogdHJhY2tCeU9wdGlvbklkXCI+XG4gICAgICAgICAgICA8dWktb3B0aW9uXG4gICAgICAgICAgICAgICAgW3RpdGxlXT1cIm9wdGlvbi52YWx1ZVwiIFxuICAgICAgICAgICAgICAgIFtpc0FjdGl2ZV09XCJ2ZXJpZnlUaGlzRWxlbWVudElzU2VsZWN0ZWQob3B0aW9uKVwiXG4gICAgICAgICAgICAgICAgW2lzRGlzYWJsZWRdPVwib3B0aW9uLmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAob3V0cHV0ZW1pdCk9XCJvblNlbmRPcHRpb25TZWxlY3RlZChvcHRpb24pXCIgXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG48L25nLWNvbnRhaW5lcj5cblxuXG48bmctdGVtcGxhdGUgI2VtcHR5RGF0YT5cbiAgICA8bGk+RW1wdHkgRGF0YTwvbGk+XG48L25nLXRlbXBsYXRlPiJdfQ==