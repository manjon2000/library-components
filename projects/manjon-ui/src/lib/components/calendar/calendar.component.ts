import { booleanAttribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { IDatesRange, IWeeks, TTypeCalendar } from './calendar.interface';
import { CommonModule } from '@angular/common';
import { CalendarService } from './calendar.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ui-calendar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UICalendarComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  set startDate(start: Date) {
    const startDate = new Date(start);
    startDate.setHours(0,0,0,0);

    this._startDate = startDate;
    this.cdr.markForCheck();
  };
  @Input()
  set endDate(end: Date) {
    const endDate = new Date(end);
    endDate.setHours(0, 0, 0, 0);

    console.log(endDate)

    this._endDate = endDate;
    this.cdr.markForCheck();
  }
  @Input() type: TTypeCalendar = 'single';
  @Input() limitYearsPreview!: number;
  @Input() cellAspectRatio: number = 1;
  @Input({ transform: booleanAttribute }) isShowDaysOtherMonth: boolean = true;
  @Input({ transform: booleanAttribute }) isResponsive!: boolean;
  @Input({ transform: booleanAttribute }) isSelectable!: boolean;
  @Input({ transform: booleanAttribute }) isSelectCurrentDay!: boolean;

  @Output() dateSelect: EventEmitter<Date> = new EventEmitter<Date>();
  @Output() dateRangeSelect: EventEmitter<IDatesRange> = new EventEmitter<IDatesRange>();
  @Output() dateMultipleSelect: EventEmitter<Array<Date>> = new EventEmitter<Array<Date>>();

  public _startDate!: Date;
  public _endDate!: Date | undefined;
  public currentDate: Date = new Date();
  public currentYear!: number;
  public currentMonth!: number;
  public weeks!: Observable<IWeeks[][]>;
  public _cellPadding!: string;
  public _cellWidth!: string;
  private _currentOptionDate: 'start' | 'end' = 'start';
  private _subscriptionWeeks!: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    private calendarService: CalendarService
  ) { }

  ngOnInit(): void {
    const date = this._startDate || new Date()
    this.setYearMonth(date);
    this.initWeeks();
    this.weeks = this.calendarService.initWeeks$;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['type'] && (changes['type'].previousValue !== changes['type'].currentValue)) {
      this.initWeeks();
    }
    if (changes['endDate'] && (changes['endDate'].previousValue !== changes['endDate'].currentValue)) {
      const endDate = new Date(changes['endDate'].currentValue);
      endDate.setHours(0, 0, 0, 0);

      this._endDate = endDate;
      this.setYearMonth(endDate);
      this.initWeeks();
    }
    if (changes['startDate'] && (changes['startDate'].previousValue !== changes['startDate'].currentValue)) {
      const startDate = new Date(changes['startDate'].currentValue);
      startDate.setHours(0, 0, 0, 0);

      this._startDate = startDate;
      this.setYearMonth(startDate);
      this.initWeeks();
    }
  }

  ngOnDestroy(): void {
    if(this._subscriptionWeeks) {
      this._subscriptionWeeks.unsubscribe();
    }
  }

  public initWeeks(): void {
    this.calendarService
      .decomposeMonthIntoWeeks(
        this.currentYear,
        this.currentMonth,
        this.type,
        this.isShowDaysOtherMonth,
        this._startDate,
        this._endDate
      );
  }

  public setCellAspectRatio(numCols: number): void {
    const padding = (100 * this.cellAspectRatio) / numCols / 2;
    this._cellPadding = `${padding.toFixed(2)}%`;
    this._cellWidth = `${100 / numCols}%`;

    this.cdr.markForCheck();
  }

  public onPrevMonth(): void {
    if (this.currentMonth === 1) {
      this.currentMonth = 12;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }

    this.initWeeks();
    this.cdr.markForCheck();
  }

  public onNextMonth(): void {
    if ((this.currentMonth + 1) === 12) {
      this.currentMonth = 1;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }

    this.initWeeks();
    this.cdr.markForCheck();
  }

  public isDateSelected(dateUnix: number | undefined): boolean {
    const initialDate = this.calendarService.formatToUnix(this._startDate);

    return dateUnix === initialDate;
  }

  public isCurrentDate(dateUnix: number | undefined): boolean {
    const currentDateToUnix = this.calendarService.formatToUnix(new Date());

    return (dateUnix ? dateUnix === currentDateToUnix : false);
  }

  public onSelectedDate(option: IWeeks): void {

    switch(this.type) {
      case 'single':
        const startDate = this.calendarService.onSelectedDateSingle(option?.ISO8601);
        this._startDate = startDate;
        this.dateSelect.emit(startDate);
        break;
      case 'range':
        this.onSelectedDateRange(option?.ISO8601);
        this.toggleOptionDate();
        break;
    }

    this.cdr.markForCheck();
  }

  public onSelectedDateRange(ISO8601: string | undefined): void {
    switch(this._currentOptionDate) {
      case 'start':
        const startDate = this.calendarService.onSelectedDateSingle(ISO8601);
        this._startDate = startDate;
        this.initWeeks();
        break;
      case 'end':
        const endDate = this.calendarService.onSelectedDateSingle(ISO8601);
        this._endDate = endDate;
        this.initWeeks();

        if(this.verifyDateRange()) {
          this.dateRangeSelect.emit({start: this._startDate, end: this._endDate});
        }

        break;
    }
  }

  public isEndDateRange(dateUnix: number | undefined): boolean {
    return (
      this._endDate ?
        dateUnix === this.calendarService.formatToUnix(this._endDate) :
        false
    );
  }

  private setYearMonth(date: Date): void {
    const currentDate = new Date(date);

    this.currentYear = currentDate.getFullYear();
    this.currentMonth = (currentDate.getMonth() + 1);
  }

  private toggleOptionDate(): void {
    if(this._currentOptionDate === 'start') {
      if(this._endDate) {
        this._endDate = undefined;
      }
      this._currentOptionDate = 'end';
    }else {
      this.initWeeks();
      this._currentOptionDate = 'start';
    }
  }

  private verifyDateRange(): boolean {
    if(!this._endDate) return false;
    const startDateToUnix = this.calendarService
      .formatToUnix(this._startDate);
    const endDateToUnix = this.calendarService
      .formatToUnix(this._endDate);

    return !!(endDateToUnix >= startDateToUnix);
  }
}
