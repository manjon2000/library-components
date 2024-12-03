import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { UIOptionComponent } from '../input-search/option/option.component';

export interface IUIOptionGroupConfiguration {
  // @TODO add checkbox
  multiSelected?: boolean
  itemsAboveScroll?: number
}

export interface IUIOptionGroupOptionConfiguration {
  // @TODO Add icons
  id: string | number;
  value: string;
  disabled: boolean;
  icon?: string;
  iconAlignment?: 'left' | 'right'
}

@Component({
  selector: 'ui-option-group',
  standalone: true,
  imports: [
    CommonModule,
    UIOptionComponent
  ],
  templateUrl: './option-group.component.html',
  styleUrl: './option-group.component.scss'
})
export class UIOptionGroupComponent implements OnChanges {

  @Input() config!: IUIOptionGroupConfiguration;
  @Input() options!: IUIOptionGroupOptionConfiguration[];
  
  @Output() outputSelected: EventEmitter<IUIOptionGroupOptionConfiguration> = new EventEmitter<IUIOptionGroupOptionConfiguration>()
  @Output() outputMultiSelected: EventEmitter<IUIOptionGroupOptionConfiguration[]> = new EventEmitter<IUIOptionGroupOptionConfiguration[]>();
  
  public isEmpty: boolean = false;
  private _multiOptionsSelected: IUIOptionGroupOptionConfiguration[] = []
  private _optionSelected: Partial<IUIOptionGroupOptionConfiguration> = {}

  public trackByOptionId(
    index: number, 
    option: IUIOptionGroupOptionConfiguration
  ): number | string {
    return option.id;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['options'] && (changes['options'].previousValue !== changes['options'].currentValue)) {
      this.isEmpty = this.options.length > 0 ? false : true;
    }
  }

  public onSendOptionSelected(option: IUIOptionGroupOptionConfiguration) {
    if (this.config && this.config.multiSelected === true) {
      if (this.verifyDuplicateOptionSelected(option)) {
        this._multiOptionsSelected =  this._multiOptionsSelected.filter(({id}: IUIOptionGroupOptionConfiguration) => option.id !== id);
        this.outputMultiSelected.emit(this._multiOptionsSelected);
        return;
      }

      this._multiOptionsSelected.push(option);
      this.outputMultiSelected.emit(this._multiOptionsSelected);
    } else {
      if (this._optionSelected.id === option.id) {
        this._optionSelected = {};
      } else {
        Object.assign(this._optionSelected, option)
      }

      this.outputSelected.emit(
        this._optionSelected as IUIOptionGroupOptionConfiguration
      );
    }
  }

  public verifyThisElementIsSelected(option: IUIOptionGroupOptionConfiguration) {
    if (this.config && this.config.multiSelected) {
      if(this.verifyDuplicateOptionSelected(option)) {
        return true;
      }
    }else {
      if (this._optionSelected.id === option.id) {
        return true;
      }
    }

    return false;
  }

  private verifyDuplicateOptionSelected(
      option: IUIOptionGroupOptionConfiguration
  ): IUIOptionGroupOptionConfiguration | undefined {
    return this._multiOptionsSelected.find(
      ({ id, value }: IUIOptionGroupOptionConfiguration) => {
        return id === option.id && value === option.value;
      }
    );
  }

}
