import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[focusBlur]',
    standalone: true,
})
export class FocusBlurDirective {
    @Output() onFocus: EventEmitter<void> = new EventEmitter<void>();
    @Output() onBlur: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private el: ElementRef
    ) {}

    @HostListener('focus') focus() {
        this.onFocus.emit()
    }

    @HostListener('blur') blur() {
        this.onBlur.emit();
      }
}