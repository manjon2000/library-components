import { CommonModule } from "@angular/common";
import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { CalendarPeriodService } from "../calendar-period.service";
import { catchError, filter, of, Subscription } from "rxjs";

@Component({
  selector: 'ui-period-content-display',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './period-content-display.component.html',
  styleUrl: 'period-content-display.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class UIPeriodContentDisplayComponent implements OnInit, AfterViewChecked, OnChanges, OnDestroy {

  @ViewChild('periodContentElement', { static: true }) periodContentElement!: ElementRef;

  @Input() options!: unknown[];
  @Input() elementRef!: ElementRef;
  @Input() content!: TemplateRef<any>;
  @Input() isHidden: boolean = true

  private _parentRect!: DOMRect;
  private _subscriptioncalendarPeriod!: Subscription;


  constructor(
    private renderer: Renderer2,
    private elementRefOrig: ElementRef,
    private calendarPeriodService: CalendarPeriodService
  ) { }

  ngOnInit(): void {
    this._subscriptioncalendarPeriod = this.calendarPeriodService.boundingRect$
      .pipe(
        filter((rect: DOMRect | null) => rect !== null),
        catchError(() => of({} as DOMRect))
      )
      .subscribe(
        (positions) => {
          this._parentRect = positions as DOMRect;
        }
      );
  }

  ngAfterViewChecked(): void {
    this.contentShowOrHidden();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isHidden'] && (changes['isHidden'].previousValue !== changes['isHidden'].currentValue)) {
      this.contentShowOrHidden();
    }
  }

  ngOnDestroy(): void {
    if (this._subscriptioncalendarPeriod) {
      this._subscriptioncalendarPeriod.unsubscribe();
    }
  }

  private contentShowOrHidden(): void {
    if (this.isHidden) {
      this.hiddentContent();
    } else {
      this.adjustContent();
    }
  }

  private adjustContent(): void {

    if (this._parentRect) {
      const { x, y, width, height } = this._parentRect;

      this.renderer.removeClass(this.periodContentElement.nativeElement, 'visually-hidden');
      this.renderer.setStyle(this.elementRefOrig.nativeElement, 'position', 'fixed');
      this.renderer.setStyle(this.elementRefOrig.nativeElement, 'top', `${y}px`);
      this.renderer.setStyle(this.elementRefOrig.nativeElement, 'left', `${x}px`);
      this.renderer.setStyle(this.elementRefOrig.nativeElement, 'width', `${width}px`);
      this.renderer.setStyle(this.elementRefOrig.nativeElement, 'height', `${height}px`);
    }
  }

  private hiddentContent(): void {
    if (this._parentRect) {
      if (!this.periodContentElement.nativeElement.classList.contains('visually-hidden')) {
        this.renderer.removeStyle(this.elementRefOrig.nativeElement, 'position');
        this.renderer.removeStyle(this.elementRefOrig.nativeElement, 'top');
        this.renderer.removeStyle(this.elementRefOrig.nativeElement, 'left');
        this.renderer.removeStyle(this.elementRefOrig.nativeElement, 'width');
        this.renderer.removeStyle(this.elementRefOrig.nativeElement, 'height');
        this.renderer.addClass(this.periodContentElement.nativeElement, 'visually-hidden');
      }
    }
  }
}
