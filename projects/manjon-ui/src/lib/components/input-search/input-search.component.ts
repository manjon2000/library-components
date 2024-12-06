import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component , ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FocusBlurDirective } from '../../shared/directives/focus-blur.directive';
import { CommonModule } from '@angular/common';
import { IUIOptionGroupOptionConfiguration, UIOptionGroupComponent } from '../option-group/option-group.component';
import { distinctUntilChanged, filter, Subject, takeUntil } from 'rxjs';

// Añadir NGvalue_ACCESSOR y al componente UIOptionGroupComponent

@Component({
  selector: 'ui-input-search',
  standalone: true,
  imports: [
    FocusBlurDirective,
    CommonModule
  ],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UIInputSearchComponent implements AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {

  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('panel', { static: false }) panel!: ElementRef;

  @Input() panelSuggestions!: UIOptionGroupComponent | null;

  @Input() placeholder!: string;
  @Input() isShowSuggestions: boolean = true;

  @Output() outputWriteInput: EventEmitter<string> = new EventEmitter<string>();
  @Output() outputSuggestions: EventEmitter<IUIOptionGroupOptionConfiguration> = new EventEmitter<IUIOptionGroupOptionConfiguration>(); 

  public isFocusin: boolean = false;
  public isShowPanel: boolean = false;
  public value: string = '';

  private _unsubcribes$: Subject<void> = new Subject<void>();

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) { }


  @HostListener('window:resize', ['$event'])
  onResize() {
    if (
      this.container?.nativeElement &&
      this.panel?.nativeElement &&
      this.isShowSuggestions
    ) {
      this.adjustPositionPanel(
        this.container.nativeElement,
        this.panel?.nativeElement
      );
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.container?.nativeElement.contains(event.target)) {
      if (this.isShowSuggestions) {
        this.isShowPanel = false;
      }

      this.isFocusin = false;
      this.cdr.markForCheck();
    }
  }

  ngAfterViewInit(): void {
    if(this.panelSuggestions) {
      this.panelSuggestions.outputSelected
      .pipe(
        filter((value) => value !== undefined),
        //distinctUntilChanged(),
        takeUntil(this._unsubcribes$)
      )
      .subscribe((options: IUIOptionGroupOptionConfiguration) => {
        this.value = options?.value;
        this.isFocusin = false;
        this.isShowPanel = false;
        this.outputSuggestions.emit(options);
      });
    }
  }

  ngAfterContentInit(): void {
    if (
      this.container?.nativeElement &&
      this.panel?.nativeElement &&
      this.isShowSuggestions
    ) {
      this.adjustPositionPanel(
        this.container.nativeElement,
        this.panel?.nativeElement
      );
    }
    this.cdr.markForCheck();
  }

  ngAfterViewChecked(): void {
    if (
      this.container?.nativeElement &&
      this.panel?.nativeElement &&
      this.isShowSuggestions
    ) {
      this.adjustPositionPanel(
        this.container.nativeElement,
        this.panel?.nativeElement
      );
    }
  }

  ngOnDestroy(): void {
    this._unsubcribes$.next();
    this._unsubcribes$.complete();
  }

  public onInput(event: Event) {
    const { value } = (event.currentTarget) as HTMLInputElement;

    this.value = value;
    this.outputWriteInput.emit(this.value);

    this.cdr.markForCheck();

  }

  public onFocus() {
    this.isFocusin = true;
  }

  public onBlur() {
    this.isFocusin = false;
  }

  private adjustPositionPanel(container: HTMLElement, panel: HTMLElement) {
    if (!container || !panel) {
      console.warn('Container or panel is not available');
      return;
    }

    const { width, top, left, height } = container.getBoundingClientRect();

    panel.style.position = 'fixed';
    panel.style.width = `${width}px`;
    panel.style.top = `${top + height}px`;
    panel.style.left = `${left}px`;

    this.cdr.markForCheck();
  }

}
