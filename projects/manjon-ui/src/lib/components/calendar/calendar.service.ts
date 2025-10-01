import { Injectable } from '@angular/core';
import { IWeeks, TDaysFromAnotherMonthEvent, TTypeCalendar } from './calendar.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private _initWeeks: BehaviorSubject<IWeeks[][]> = new BehaviorSubject<IWeeks[][]>([]);
  public initWeeks$: Observable<IWeeks[][]> = this._initWeeks.asObservable();

  constructor() { }

  public decomposeMonthIntoWeeks(
    year: number,
    month: number,
    type: TTypeCalendar,
    isShowDaysOtherMonth: boolean,
    startDate: Date,
    endDate?: Date
  ): void {

    const getTotalDaysInMonth = (year: number, month: number): number => {
      const daysInMonth = [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return daysInMonth[month - 1];
    };
    const diffDaysOfFirstWeek = this.getDiffDaysOfWeek(year, month);
    const totalDaysInMonth = getTotalDaysInMonth(year, month);

    const weeks: IWeeks[][] = [];
    let currentWeek: IWeeks[] = [];

    if (isShowDaysOtherMonth) {
      const prevMonth = month - 1 < 1 ? 12 : month - 1;
      const prevYear = month - 1 < 1 ? year - 1 : year;
      const totalDaysInPrevMonth = getTotalDaysInMonth(prevYear, prevMonth);

      for (let i = diffDaysOfFirstWeek; i > 0; i--) {
        const prevDate = new Date(prevYear, prevMonth - 1, totalDaysInPrevMonth - i + 1);
        currentWeek.push({
          isAnotherMonth: true,
          day: prevDate.getDate(),
          month: prevDate.getMonth() + 1,
          year: prevDate.getFullYear(),
          unix: Math.floor(prevDate.getTime() / 1000),
          ISO8601: `${prevDate.getFullYear()}-${prevDate.getMonth() + 1}-${prevDate.getDate()}`,
        });
      }
    } else {
      for (let i = 0; i < diffDaysOfFirstWeek; i++) {
        currentWeek.push({ day: -1 });
      }
    }

    for (let day = 1; day <= totalDaysInMonth; day++) {
      const currentDate = new Date(year, month - 1, day);
      let buildCurrentWeek: IWeeks = {
        isAnotherMonth: false,
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
        unix: Math.floor(currentDate.getTime() / 1000),
        ISO8601: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
      }
      if(type === 'range' && endDate !== undefined) {
        const startDateToUnix = this.formatToUnix(startDate);
        const endDateToUnix = this.formatToUnix(endDate);
        const currentDateToUnix = this.formatToUnix(currentDate)

        if(
          currentDateToUnix >= startDateToUnix &&
          currentDateToUnix <= endDateToUnix
        ) {
          buildCurrentWeek.isSelected = true;
        }

      }else {
        buildCurrentWeek.isSelected = false;
      }

      currentWeek.push(buildCurrentWeek);

      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    if (currentWeek.length > 0) {
      const nextMonth = month + 1 > 12 ? 1 : month + 1;
      const nextYear = month + 1 > 12 ? year + 1 : year;
      let nextDay = 1;

      while (currentWeek.length < 7) {
        const nextDate = new Date(nextYear, nextMonth - 1, nextDay);
        currentWeek.push({
          isAnotherMonth: true,
          day: nextDate.getDate(),
          month: nextDate.getMonth() + 1,
          year: nextDate.getFullYear(),
          unix: Math.floor(nextDate.getTime() / 1000),
          ISO8601: `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}`,
        });
        nextDay++;
      }
      weeks.push(currentWeek);
    }

    this._initWeeks.next(weeks);
  }

  public onSelectedDateSingle(ISO8601: string | undefined): Date {
    const newDate = new Date(ISO8601 as string);
    newDate.setHours(0, 0, 0, 0);

    return newDate;
  }

  public getDayOfWeek(date: Date): number {
    return date.getDay();
  }

  public getDaysFromAnotherMonth(
    event: TDaysFromAnotherMonthEvent,
    date: Date,
    index: number
  ): Date {
    switch(event) {
      case 'prev':
        return new Date(
          new Date(date).setDate(date.getDate() - (index + 1))
        );
      case 'next':
        return new Date(
          new Date(date).setDate(date.getDate() + (index + 1))
        );
    }
  }

  public getDiffDaysOfWeek(
    year: number,
    month: number
  ): number {

    const m = month < 3 ? month + 12 : month;
    const y = month < 3 ? year - 1 : year;
    const k = Math.floor(y / 100);
    const j = y % 100;
    const dayOfWeek =
    (1 +
      Math.floor((13 * (m + 1)) / 5) +
      j +
      Math.floor(j / 4) +
      Math.floor(k / 4) -
      2 * k) %
    7;

    return (dayOfWeek + 5) % 7;
  }

  public getFirstDayOfMonth(
    year: number, month: number
  ): Date {
    return new Date(year, (month - 1), 1);
  }

  public getLastDayOfMonth(year: number, month: number): Date {
    const firstDayMonth = new Date(year, month + 1, 1);

    return new Date(new Date(firstDayMonth).setDate(firstDayMonth.getDate() - 1));
  }

  public getDaysInMonth(date: Date, index: number): number {
    const prevDate = new Date(date).setDate(date.getDate() - index);
    const day = this.getDay(new Date(prevDate));
    const month = this.getMonth(new Date(prevDate));
    const year = this.getYear(new Date(prevDate));

    return parseInt(
      new Date(prevDate).toLocaleString('es-ES', {day: '2-digit'})
    );
  }

  public formatToUnix(date: Date): number {
    const newDate = new Date(date);
    newDate.setHours(0,0,0,0)
    return Math.floor(newDate.getTime() / 1000);
  }

  public getTotalDaysInMonth(year: number, month: number): number {
    // El mes siguiente al actual, y el día 0 del mes siguiente devuelve el último día del mes actual.
    return new Date(year, month + 1, 0).getDate();
  }

  public getDay(date: Date): number {
    return parseInt(
      date.toLocaleString('es-ES', {day: '2-digit'})
    );
  }

  public getDayToString(date: Date): string {
    return date.toLocaleString('es-ES', {day: '2-digit'});
  }

  public getMonth(date: Date): number {
    return parseInt(
      date.toLocaleString('es-ES', {month: '2-digit'})
    );
  }

  public getMonthToString(date: Date): string {
    return date.toLocaleString('es-ES', {month: '2-digit'});
  }

  public getYear(date: Date): number {
    return date.getFullYear();
  }

  private isLeapYear(year: number): boolean {
    return (
      year % 4 === 0 &&
      (year % 100 !== 0 || year % 400 === 0)
    );
  }
}
