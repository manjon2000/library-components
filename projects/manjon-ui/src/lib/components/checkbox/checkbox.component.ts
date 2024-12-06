import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UICheckboxComponent),
      multi: true
    }
  ]

})
export class UICheckboxComponent implements ControlValueAccessor {

  @Input() id!: string;
  @Input() name!: string;
  @Input() label!: string;
  @Input() ariaLabel!: string
  @Input() 
  set isChecked(value: boolean) {
    this.isCheckated = value;
  };
  @Input() isDisabled!: boolean;

  @Output() outputChecked: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isCheckated!: boolean;
  public tabIndex: number = 0;
  public onChangeCallback?: (checked: boolean) => void;
  public onTouch = () => {};

  writeValue(checked: boolean): void {
    this.isChecked = checked;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  
  modelChangeFn(checked: boolean) {
    this.onChangeCallback?.(checked);
    this.outputChecked.emit(checked);
  }

}
