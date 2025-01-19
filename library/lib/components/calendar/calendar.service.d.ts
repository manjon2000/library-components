import { IWeeks, TDaysFromAnotherMonthEvent, TTypeCalendar } from './calendar.interface';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CalendarService {
    private _initWeeks;
    initWeeks$: Observable<IWeeks[][]>;
    constructor();
    decomposeMonthIntoWeeks(year: number, month: number, type: TTypeCalendar, isShowDaysOtherMonth: boolean, startDate: Date, endDate?: Date): void;
    onSelectedDateSingle(ISO8601: string | undefined): Date;
    getDayOfWeek(date: Date): number;
    getDaysFromAnotherMonth(event: TDaysFromAnotherMonthEvent, date: Date, index: number): Date;
    getDiffDaysOfWeek(year: number, month: number): number;
    getFirstDayOfMonth(year: number, month: number): Date;
    getLastDayOfMonth(year: number, month: number): Date;
    getDaysInMonth(date: Date, index: number): number;
    formatToUnix(date: Date): number;
    getTotalDaysInMonth(year: number, month: number): number;
    getDay(date: Date): number;
    getDayToString(date: Date): string;
    getMonth(date: Date): number;
    getMonthToString(date: Date): string;
    getYear(date: Date): number;
    private isLeapYear;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalendarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CalendarService>;
}
