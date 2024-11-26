import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FocusBlurDirective } from '../../shared/directives/focus-blur.directive';

@Component({
  selector: 'ui-radiobutton',
  standalone: true,
  imports: [
    FocusBlurDirective
  ],
  templateUrl: './radiobutton.component.html',
  styleUrl: './radiobutton.component.scss',
})
export class UIRadiobuttonComponent {

  @Input() label!: string;
  @Input() isChecked!: boolean;
  @Input() isDisabled!: boolean;
  @Input() isError!: boolean;

  public onFocus(): void {
    console.log('FOCUS!!!')
  }

  public onBlur(): void {
    console.log('BLUR!!!')
  }
}
