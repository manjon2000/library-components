import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FocusBlurDirective } from '../../shared/directives/focus-blur.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-radiobutton',
  standalone: true,
  imports: [
    FocusBlurDirective
  ],
  templateUrl: './radiobutton.component.html',
  styleUrl: './radiobutton.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UIRadiobuttonComponent),
      multi: true
    }
  ],
})
export class UIRadiobuttonComponent implements ControlValueAccessor {

  @ViewChild('input', { static: true }) inputRadio!: ElementRef;

  @Input() label!: string;
  @Input() isChecked!: boolean;
  @Input() isDisabled!: boolean;
  @Input() isError!: boolean;

  public onChangeCallback?: (checked: boolean) => void;
  private _value!: boolean;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  onInput(event: Event): void {
    const { checked } = (event.currentTarget) as HTMLInputElement
   
    this._value = checked;
    this.onChangeCallback?.(checked);

    this.cdr.markForCheck();
  }

  writeValue(checked: boolean): void {
    this._value = checked;
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  public onFocus(): void {
    console.log('FOCUS!!!')
  }

  public onBlur(): void {
    console.log('BLUR!!!')
  }
}
