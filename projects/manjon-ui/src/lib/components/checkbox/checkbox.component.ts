import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class UICheckboxComponent {
  @Input() label!: string;
  @Input() ariaLabel: string = '';
  @Input() set isChecked(value: boolean) {
    if(value !== null) {
      this.checked = value;
    }
  };
  @Input() isDisabled: boolean = false;

  @Output() outputChecked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public checked!: boolean;
  public tabIndex: number = 0;


  public onChange(event: Event): void {
    const { checked } = (event.currentTarget) as HTMLInputElement
    this.checked = checked;

    this.outputChecked.emit(checked);
  }
}
