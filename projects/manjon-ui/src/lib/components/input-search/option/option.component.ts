import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-option',
  standalone: true,
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss'
})
export class UIOptionComponent {

  @Input() title!: string;
  @Input() isActive: boolean = false;
  @Input() isDisabled: boolean = false;
  
  @Output() outputemit: EventEmitter<string> = new EventEmitter<string>();

  public onClick() {
    this.outputemit.emit(this.title);
  }
}
