import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-toggler',
  standalone: true,
  imports: [],
  templateUrl: './toggler.component.html',
  styleUrl: './toggler.component.scss'
})
export class UITogglerComponent {

  @Input() isActived!: boolean;
  @Input() isDisabled!: boolean;
  @Input() ariaLabel!: string;
  @Input() ariaLabelledby!: string;

  @Output() outputEvent: EventEmitter<boolean> = new  EventEmitter<boolean>();

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  public onToggle() {
    this.isActived = !this.isActived;
    this.outputEvent.emit(this.isActived);
    this.cdr.markForCheck();
  }

}
