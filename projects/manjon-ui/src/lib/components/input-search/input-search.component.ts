import { Component } from '@angular/core';
import { FocusBlurDirective } from '../../shared/directives/focus-blur.directive';

@Component({
  selector: 'ui-input-search',
  standalone: true,
  imports: [
    FocusBlurDirective
  ],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss'
})
export class UIInputSearchComponent {

}
