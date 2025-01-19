import * as i0 from '@angular/core';
import { Injectable, EventEmitter, booleanAttribute, Component, ChangeDetectionStrategy, Input, Output, Directive, HostListener, forwardRef, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject, filter, takeUntil } from 'rxjs';
import * as i1$1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

class CalendarService {
    constructor() {
        this._initWeeks = new BehaviorSubject([]);
        this.initWeeks$ = this._initWeeks.asObservable();
    }
    decomposeMonthIntoWeeks(year, month, type, isShowDaysOtherMonth, startDate, endDate) {
        const getTotalDaysInMonth = (year, month) => {
            const daysInMonth = [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            return daysInMonth[month - 1];
        };
        const diffDaysOfFirstWeek = this.getDiffDaysOfWeek(year, month);
        const totalDaysInMonth = getTotalDaysInMonth(year, month);
        const weeks = [];
        let currentWeek = [];
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
        }
        else {
            for (let i = 0; i < diffDaysOfFirstWeek; i++) {
                currentWeek.push({ day: -1 });
            }
        }
        for (let day = 1; day <= totalDaysInMonth; day++) {
            const currentDate = new Date(year, month - 1, day);
            let buildCurrentWeek = {
                isAnotherMonth: false,
                day: currentDate.getDate(),
                month: currentDate.getMonth() + 1,
                year: currentDate.getFullYear(),
                unix: Math.floor(currentDate.getTime() / 1000),
                ISO8601: `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`,
            };
            if (type === 'range' && endDate !== undefined) {
                const startDateToUnix = this.formatToUnix(startDate);
                const endDateToUnix = this.formatToUnix(endDate);
                const currentDateToUnix = this.formatToUnix(currentDate);
                if (currentDateToUnix >= startDateToUnix &&
                    currentDateToUnix <= endDateToUnix) {
                    buildCurrentWeek.isSelected = true;
                }
            }
            else {
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
    onSelectedDateSingle(ISO8601) {
        const newDate = new Date(ISO8601);
        newDate.setHours(0, 0, 0, 0);
        return newDate;
    }
    getDayOfWeek(date) {
        return date.getDay();
    }
    getDaysFromAnotherMonth(event, date, index) {
        switch (event) {
            case 'prev':
                return new Date(new Date(date).setDate(date.getDate() - (index + 1)));
            case 'next':
                return new Date(new Date(date).setDate(date.getDate() + (index + 1)));
        }
    }
    getDiffDaysOfWeek(year, month) {
        const m = month < 3 ? month + 12 : month;
        const y = month < 3 ? year - 1 : year;
        const k = Math.floor(y / 100);
        const j = y % 100;
        const dayOfWeek = (1 +
            Math.floor((13 * (m + 1)) / 5) +
            j +
            Math.floor(j / 4) +
            Math.floor(k / 4) -
            2 * k) %
            7;
        return (dayOfWeek + 5) % 7;
    }
    getFirstDayOfMonth(year, month) {
        return new Date(year, (month - 1), 1);
    }
    getLastDayOfMonth(year, month) {
        const firstDayMonth = new Date(year, month + 1, 1);
        return new Date(new Date(firstDayMonth).setDate(firstDayMonth.getDate() - 1));
    }
    getDaysInMonth(date, index) {
        const prevDate = new Date(date).setDate(date.getDate() - index);
        console.log('Date:', prevDate);
        const day = this.getDay(new Date(prevDate));
        const month = this.getMonth(new Date(prevDate));
        const year = this.getYear(new Date(prevDate));
        return parseInt(new Date(prevDate).toLocaleString('es-ES', { day: '2-digit' }));
    }
    formatToUnix(date) {
        const newDate = new Date(date);
        newDate.setHours(0, 0, 0, 0);
        return Math.floor(newDate.getTime() / 1000);
    }
    getTotalDaysInMonth(year, month) {
        // El mes siguiente al actual, y el día 0 del mes siguiente devuelve el último día del mes actual.
        return new Date(year, month + 1, 0).getDate();
    }
    getDay(date) {
        return parseInt(date.toLocaleString('es-ES', { day: '2-digit' }));
    }
    getDayToString(date) {
        return date.toLocaleString('es-ES', { day: '2-digit' });
    }
    getMonth(date) {
        return parseInt(date.toLocaleString('es-ES', { month: '2-digit' }));
    }
    getMonthToString(date) {
        return date.toLocaleString('es-ES', { month: '2-digit' });
    }
    getYear(date) {
        return date.getFullYear();
    }
    isLeapYear(year) {
        return (year % 4 === 0 &&
            (year % 100 !== 0 || year % 400 === 0));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CalendarService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CalendarService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CalendarService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class UICalendarComponent {
    set startDate(start) {
        const startDate = new Date(start);
        startDate.setHours(0, 0, 0, 0);
        this._startDate = startDate;
        this.cdr.markForCheck();
    }
    ;
    set endDate(end) {
        const endDate = new Date(end);
        endDate.setHours(0, 0, 0, 0);
        console.log(endDate);
        this._endDate = endDate;
        this.cdr.markForCheck();
    }
    constructor(cdr, calendarService) {
        this.cdr = cdr;
        this.calendarService = calendarService;
        this.type = 'single';
        this.cellAspectRatio = 1;
        this.isShowDaysOtherMonth = true;
        this.dateSelect = new EventEmitter();
        this.dateRangeSelect = new EventEmitter();
        this.dateMultipleSelect = new EventEmitter();
        this.currentDate = new Date();
        this._currentOptionDate = 'start';
    }
    ngOnInit() {
        const date = this._startDate || new Date();
        this.setYearMonth(date);
        this.initWeeks();
        this.weeks = this.calendarService.initWeeks$;
    }
    ngOnChanges(changes) {
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
    ngOnDestroy() {
        if (this._subscriptionWeeks) {
            this._subscriptionWeeks.unsubscribe();
        }
    }
    initWeeks() {
        this.calendarService
            .decomposeMonthIntoWeeks(this.currentYear, this.currentMonth, this.type, this.isShowDaysOtherMonth, this._startDate, this._endDate);
    }
    trackByIndex(index, item) {
        return index; // Rastrea por índice
    }
    setCellAspectRatio(numCols) {
        const padding = (100 * this.cellAspectRatio) / numCols / 2;
        this._cellPadding = `${padding.toFixed(2)}%`;
        this._cellWidth = `${100 / numCols}%`;
        this.cdr.markForCheck();
    }
    onPrevMonth() {
        if (this.currentMonth === 1) {
            this.currentMonth = 12;
            this.currentYear--;
        }
        else {
            this.currentMonth--;
        }
        this.initWeeks();
        this.cdr.markForCheck();
    }
    onNextMonth() {
        if ((this.currentMonth + 1) === 12) {
            this.currentMonth = 1;
            this.currentYear++;
        }
        else {
            this.currentMonth++;
        }
        this.initWeeks();
        this.cdr.markForCheck();
    }
    isDateSelected(dateUnix) {
        const initialDate = this.calendarService.formatToUnix(this._startDate);
        return dateUnix === initialDate;
    }
    isCurrentDate(dateUnix) {
        const currentDateToUnix = this.calendarService.formatToUnix(new Date());
        return (dateUnix ? dateUnix === currentDateToUnix : false);
    }
    onSelectedDate(option) {
        switch (this.type) {
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
    onSelectedDateRange(ISO8601) {
        switch (this._currentOptionDate) {
            case 'start':
                const startDate = this.calendarService.onSelectedDateSingle(ISO8601);
                this._startDate = startDate;
                this.initWeeks();
                break;
            case 'end':
                const endDate = this.calendarService.onSelectedDateSingle(ISO8601);
                this._endDate = endDate;
                this.initWeeks();
                if (this.verifyDateRange()) {
                    this.dateRangeSelect.emit({ start: this._startDate, end: this._endDate });
                }
                break;
        }
    }
    isEndDateRange(dateUnix) {
        return (this._endDate ?
            dateUnix === this.calendarService.formatToUnix(this._endDate) :
            false);
    }
    setYearMonth(date) {
        const currentDate = new Date(date);
        this.currentYear = currentDate.getFullYear();
        this.currentMonth = (currentDate.getMonth() + 1);
    }
    toggleOptionDate() {
        if (this._currentOptionDate === 'start') {
            if (this._endDate) {
                this._endDate = undefined;
            }
            this._currentOptionDate = 'end';
        }
        else {
            this.initWeeks();
            this._currentOptionDate = 'start';
        }
    }
    verifyDateRange() {
        if (!this._endDate)
            return false;
        const startDateToUnix = this.calendarService
            .formatToUnix(this._startDate);
        const endDateToUnix = this.calendarService
            .formatToUnix(this._endDate);
        return !!(endDateToUnix >= startDateToUnix);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UICalendarComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: CalendarService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.12", type: UICalendarComponent, isStandalone: true, selector: "ui-calendar", inputs: { startDate: "startDate", endDate: "endDate", type: "type", limitYearsPreview: "limitYearsPreview", cellAspectRatio: "cellAspectRatio", isShowDaysOtherMonth: ["isShowDaysOtherMonth", "isShowDaysOtherMonth", booleanAttribute], isResponsive: ["isResponsive", "isResponsive", booleanAttribute], isSelectable: ["isSelectable", "isSelectable", booleanAttribute], isSelectCurrentDay: ["isSelectCurrentDay", "isSelectCurrentDay", booleanAttribute] }, outputs: { dateSelect: "dateSelect", dateRangeSelect: "dateRangeSelect", dateMultipleSelect: "dateMultipleSelect" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"ui-calendar\">\n  <div class=\"ui-calendar-controls\">\n    <button aria-label=\"Preview Month\" (click)=\"onPrevMonth()\">\n      <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.8326 4.18024C16.0558 4.42056 16.0558 4.8102 15.8326 5.05053L9.37955 12L15.8326 18.9495C16.0558 19.1898 16.0558 19.5794 15.8326 19.8198C15.6095 20.0601 15.2477 20.0601 15.0245 19.8198L8.16737 12.4351C7.94421 12.1948 7.94421 11.8052 8.16737 11.5649L15.0245 4.18024C15.2477 3.93992 15.6095 3.93992 15.8326 4.18024Z\" fill=\"black\"/>\n      </svg>\n    </button>\n    <div class=\"ui-calendar-controls-others\">\n      <button>Enero</button>\n      <button>2025</button>\n    </div>\n    <button aria-label=\"Next Month\" (click)=\"onNextMonth()\">\n      <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.16737 4.18024C8.39052 3.93992 8.75233 3.93992 8.97549 4.18024L15.8326 11.5649C15.9398 11.6803 16 11.8368 16 12C16 12.1632 15.9398 12.3197 15.8326 12.4351L8.97549 19.8198C8.75233 20.0601 8.39052 20.0601 8.16737 19.8198C7.94421 19.5794 7.94421 19.1898 8.16737 18.9495L14.6204 12L8.16737 5.05053C7.94421 4.8102 7.94421 4.42056 8.16737 4.18024Z\" fill=\"black\"/>\n      </svg>\n    </button>\n  </div>\n  <table role=\"grid\" class=\"ui-calendar-table\">\n    <thead class=\"ui-calendar-table-head\">\n      <tr>\n        <th scope=\"col\">\n          <span>L</span>\n        </th>\n        <th scope=\"col\">\n          <span>M</span>\n        </th>\n        <th scope=\"col\">\n          <span>X</span>\n        </th>\n        <th scope=\"col\">\n          <span>J</span>\n        </th>\n        <th scope=\"col\">\n          <span>V</span>\n        </th>\n        <th scope=\"col\">\n          <span>S</span>\n        </th>\n        <th scope=\"col\">\n          <span>D</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody class=\"ui-calendar-table-body\">\n      @for (week of weeks | async; let idx = $index; track trackByIndex;) {\n      <tr role=\"row\">\n        @for (day of week; track day.ISO8601) {\n          <td\n            role=\"gridcell\"\n            [style.width]=\"_cellWidth\"\n            [style.paddingTop]=\"_cellPadding\"\n            [style.paddingBottom]=\"_cellPadding\"\n            >\n            <button\n              role=\"option\"\n              [class.readonly]=\"day.isAnotherMonth\"\n              [attr.disabled]=\"day.isAnotherMonth || null\"\n              [class.range]=\"day.isSelected && _endDate && type === 'range'\"\n              [class.end-date]=\"isEndDateRange(day.unix)\"\n              [attr.tabIndex]=\"day.isAnotherMonth ? -1 : 0\"\n              [attr.aria-current]=\"isSelectCurrentDay && type === 'single' ? (isCurrentDate(day.unix) ? 'date' : null) : null\"\n              [attr.aria-selected]=\"isDateSelected(day.unix)\"\n              [attr.data-date]=\"day.ISO8601 || null\"\n              (click)=\"onSelectedDate(day)\">\n              {{ day.day }}\n            </button>\n          </td>\n        }\n      </tr>\n      }\n    </tbody>\n  </table>\n</div>\n", styles: [".ui-calendar{width:280px;border:1px solid #DEDEDE;padding:4px 0;border-radius:4px}.ui-calendar-controls{display:flex;align-items:center;justify-content:space-between;padding:.24rem .75rem}.ui-calendar-controls button{height:max-content;display:flex;align-items:center;justify-content:center}.ui-calendar-controls button:focus{border-radius:8px;outline-offset:2px;outline:1px solid red}.ui-calendar-controls-others{display:flex;gap:.25rem}.ui-calendar-controls-others button{font:inherit;font-size:14px;line-height:16px}.ui-calendar-table{width:100%;border-collapse:collapse;table-layout:fixed}.ui-calendar-table-head{margin-bottom:1rem;border-bottom:1px solid #DEDEDE}.ui-calendar-table-head th{-webkit-user-select:none;user-select:none}.ui-calendar-table-head th:hover{cursor:default}.ui-calendar-table-head th span{font-weight:500;font-size:14px;line-height:16px}.ui-calendar-table-body tr{margin:0;padding:0;height:0;position:relative;text-align:center}.ui-calendar-table-body tr td button{width:100%;height:auto;display:flex;align-items:center;justify-content:center;margin:0;padding:0;aspect-ratio:1;font-weight:500;font-size:14px;line-height:16px;margin:.15rem 0;color:var(--grayscale-black)}.ui-calendar-table-body tr td button:focus{border-radius:999px;outline:1px solid var(--corporate-purple)}.ui-calendar-table-body tr td button.range{background-color:var(--corporate-purple);color:var(--grayscale-white)}.ui-calendar-table-body tr td button.range:is([aria-selected=true]){border-radius:999px 0 0 999px}.ui-calendar-table-body tr td button.range:is(.ui-calendar-table-body tr td button.end-date){border-radius:0 999px 999px 0}.ui-calendar-table-body tr td button[aria-selected=true]:has(.ui-calendar-table-body tr td button.range){border-radius:999px 0 0 999px}.ui-calendar-table-body tr td button:not(.ui-calendar-table-body tr td button[disabled]):not(.ui-calendar-table-body tr td button[aria-current]):not(.ui-calendar-table-body tr td button.range):hover{border-radius:999px;border:1px solid var(--corporate-purple);background-color:#9e3fe731;cursor:pointer}.ui-calendar-table-body tr td button[aria-current]{background-color:var(--corporate-purple);color:var(--grayscale-white);border-radius:999px}.ui-calendar-table-body tr td button:not(.ui-calendar-table-body tr td button[disabled]):not(.ui-calendar-table-body tr td button.range):is(.ui-calendar-table-body tr td button[aria-selected=true]){border-radius:999px;border:1px solid var(--corporate-purple);background-color:#9e3fe731;cursor:pointer}.ui-calendar-table-body tr td button.readonly{font-weight:400;color:#707070;pointer-events:none}.ui-calendar-table-body tr td button.readonly:hover{cursor:default}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UICalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-calendar', standalone: true, imports: [
                        CommonModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"ui-calendar\">\n  <div class=\"ui-calendar-controls\">\n    <button aria-label=\"Preview Month\" (click)=\"onPrevMonth()\">\n      <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M15.8326 4.18024C16.0558 4.42056 16.0558 4.8102 15.8326 5.05053L9.37955 12L15.8326 18.9495C16.0558 19.1898 16.0558 19.5794 15.8326 19.8198C15.6095 20.0601 15.2477 20.0601 15.0245 19.8198L8.16737 12.4351C7.94421 12.1948 7.94421 11.8052 8.16737 11.5649L15.0245 4.18024C15.2477 3.93992 15.6095 3.93992 15.8326 4.18024Z\" fill=\"black\"/>\n      </svg>\n    </button>\n    <div class=\"ui-calendar-controls-others\">\n      <button>Enero</button>\n      <button>2025</button>\n    </div>\n    <button aria-label=\"Next Month\" (click)=\"onNextMonth()\">\n      <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.16737 4.18024C8.39052 3.93992 8.75233 3.93992 8.97549 4.18024L15.8326 11.5649C15.9398 11.6803 16 11.8368 16 12C16 12.1632 15.9398 12.3197 15.8326 12.4351L8.97549 19.8198C8.75233 20.0601 8.39052 20.0601 8.16737 19.8198C7.94421 19.5794 7.94421 19.1898 8.16737 18.9495L14.6204 12L8.16737 5.05053C7.94421 4.8102 7.94421 4.42056 8.16737 4.18024Z\" fill=\"black\"/>\n      </svg>\n    </button>\n  </div>\n  <table role=\"grid\" class=\"ui-calendar-table\">\n    <thead class=\"ui-calendar-table-head\">\n      <tr>\n        <th scope=\"col\">\n          <span>L</span>\n        </th>\n        <th scope=\"col\">\n          <span>M</span>\n        </th>\n        <th scope=\"col\">\n          <span>X</span>\n        </th>\n        <th scope=\"col\">\n          <span>J</span>\n        </th>\n        <th scope=\"col\">\n          <span>V</span>\n        </th>\n        <th scope=\"col\">\n          <span>S</span>\n        </th>\n        <th scope=\"col\">\n          <span>D</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody class=\"ui-calendar-table-body\">\n      @for (week of weeks | async; let idx = $index; track trackByIndex;) {\n      <tr role=\"row\">\n        @for (day of week; track day.ISO8601) {\n          <td\n            role=\"gridcell\"\n            [style.width]=\"_cellWidth\"\n            [style.paddingTop]=\"_cellPadding\"\n            [style.paddingBottom]=\"_cellPadding\"\n            >\n            <button\n              role=\"option\"\n              [class.readonly]=\"day.isAnotherMonth\"\n              [attr.disabled]=\"day.isAnotherMonth || null\"\n              [class.range]=\"day.isSelected && _endDate && type === 'range'\"\n              [class.end-date]=\"isEndDateRange(day.unix)\"\n              [attr.tabIndex]=\"day.isAnotherMonth ? -1 : 0\"\n              [attr.aria-current]=\"isSelectCurrentDay && type === 'single' ? (isCurrentDate(day.unix) ? 'date' : null) : null\"\n              [attr.aria-selected]=\"isDateSelected(day.unix)\"\n              [attr.data-date]=\"day.ISO8601 || null\"\n              (click)=\"onSelectedDate(day)\">\n              {{ day.day }}\n            </button>\n          </td>\n        }\n      </tr>\n      }\n    </tbody>\n  </table>\n</div>\n", styles: [".ui-calendar{width:280px;border:1px solid #DEDEDE;padding:4px 0;border-radius:4px}.ui-calendar-controls{display:flex;align-items:center;justify-content:space-between;padding:.24rem .75rem}.ui-calendar-controls button{height:max-content;display:flex;align-items:center;justify-content:center}.ui-calendar-controls button:focus{border-radius:8px;outline-offset:2px;outline:1px solid red}.ui-calendar-controls-others{display:flex;gap:.25rem}.ui-calendar-controls-others button{font:inherit;font-size:14px;line-height:16px}.ui-calendar-table{width:100%;border-collapse:collapse;table-layout:fixed}.ui-calendar-table-head{margin-bottom:1rem;border-bottom:1px solid #DEDEDE}.ui-calendar-table-head th{-webkit-user-select:none;user-select:none}.ui-calendar-table-head th:hover{cursor:default}.ui-calendar-table-head th span{font-weight:500;font-size:14px;line-height:16px}.ui-calendar-table-body tr{margin:0;padding:0;height:0;position:relative;text-align:center}.ui-calendar-table-body tr td button{width:100%;height:auto;display:flex;align-items:center;justify-content:center;margin:0;padding:0;aspect-ratio:1;font-weight:500;font-size:14px;line-height:16px;margin:.15rem 0;color:var(--grayscale-black)}.ui-calendar-table-body tr td button:focus{border-radius:999px;outline:1px solid var(--corporate-purple)}.ui-calendar-table-body tr td button.range{background-color:var(--corporate-purple);color:var(--grayscale-white)}.ui-calendar-table-body tr td button.range:is([aria-selected=true]){border-radius:999px 0 0 999px}.ui-calendar-table-body tr td button.range:is(.ui-calendar-table-body tr td button.end-date){border-radius:0 999px 999px 0}.ui-calendar-table-body tr td button[aria-selected=true]:has(.ui-calendar-table-body tr td button.range){border-radius:999px 0 0 999px}.ui-calendar-table-body tr td button:not(.ui-calendar-table-body tr td button[disabled]):not(.ui-calendar-table-body tr td button[aria-current]):not(.ui-calendar-table-body tr td button.range):hover{border-radius:999px;border:1px solid var(--corporate-purple);background-color:#9e3fe731;cursor:pointer}.ui-calendar-table-body tr td button[aria-current]{background-color:var(--corporate-purple);color:var(--grayscale-white);border-radius:999px}.ui-calendar-table-body tr td button:not(.ui-calendar-table-body tr td button[disabled]):not(.ui-calendar-table-body tr td button.range):is(.ui-calendar-table-body tr td button[aria-selected=true]){border-radius:999px;border:1px solid var(--corporate-purple);background-color:#9e3fe731;cursor:pointer}.ui-calendar-table-body tr td button.readonly{font-weight:400;color:#707070;pointer-events:none}.ui-calendar-table-body tr td button.readonly:hover{cursor:default}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: CalendarService }], propDecorators: { startDate: [{
                type: Input
            }], endDate: [{
                type: Input
            }], type: [{
                type: Input
            }], limitYearsPreview: [{
                type: Input
            }], cellAspectRatio: [{
                type: Input
            }], isShowDaysOtherMonth: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], isResponsive: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], isSelectable: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], isSelectCurrentDay: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], dateSelect: [{
                type: Output
            }], dateRangeSelect: [{
                type: Output
            }], dateMultipleSelect: [{
                type: Output
            }] } });

class FocusBlurDirective {
    constructor(el) {
        this.el = el;
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    focus() {
        this.onFocus.emit();
    }
    blur() {
        this.onBlur.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FocusBlurDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: FocusBlurDirective, isStandalone: true, selector: "[focusBlur]", outputs: { onFocus: "onFocus", onBlur: "onBlur" }, host: { listeners: { "focus": "focus()", "blur": "blur()" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FocusBlurDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[focusBlur]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { onFocus: [{
                type: Output
            }], onBlur: [{
                type: Output
            }], focus: [{
                type: HostListener,
                args: ['focus']
            }], blur: [{
                type: HostListener,
                args: ['blur']
            }] } });

class UIRadiobuttonComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    onInput(event) {
        const { checked } = (event.currentTarget);
        this._value = checked;
        this.onChangeCallback?.(checked);
        this.cdr.markForCheck();
    }
    writeValue(checked) {
        this._value = checked;
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        throw new Error('Method not implemented.');
    }
    onFocus() {
        console.log('FOCUS!!!');
    }
    onBlur() {
        console.log('BLUR!!!');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIRadiobuttonComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UIRadiobuttonComponent, isStandalone: true, selector: "ui-radiobutton", inputs: { label: "label", isChecked: "isChecked", isDisabled: "isDisabled", isError: "isError", ariaLabel: "ariaLabel" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UIRadiobuttonComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "inputRadio", first: true, predicate: ["input"], descendants: true, static: true }], ngImport: i0, template: "<div class=\"ui-radiobutton\">\n    <input\n        #input\n        focusBlur\n        id=\"radio1\"\n        class=\"ui-radiobutton-input\"\n        type=\"radio\"\n        [checked]=\"isChecked\"\n        [disabled]=\"isDisabled\"\n        [attr.aria-invalid]=\"isError\"\n        [attr.aria-label]=\"ariaLabel\"\n        (input)=\"onInput($event)\"\n        (onFocus)=\"onFocus()\"\n        (onBlur)=\"onBlur()\"\n    />\n    <label for=\"radio1\" class=\"ui-radiobutton-label\">{{label}}</label>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-radiobutton-border-default: var( --ui-custom-radiobutton-border-default, var(--grayscale-black) );--ui-radiobutton-border-focus: var( --ui-custom-radiobutton-border-focus, var(--grayscale-black) );--ui-radiobutton-border-checked: var( --ui-custom-radiobutton-border-checked, var(--corporate-purple) );--ui-radiobutton-border-error: var( --ui-custom-radiobutton-border-error, var(--informing-error) );--ui-radiobutton-shadow-bg-default: var( --ui-custom-radiobutton-shadow-bg-default, transparent );--ui-radiobutton-shadow-bg-checked: var( --ui-custom-radiobutton-shadow-bg-checked, var(--corporate-purple) );--ui-radiobutton-shadow-bg-error: var( --ui-custom-radiobutton-shadow-bg-error, var(--informing-error) );--ui-radiobutton-shadow-bg-disabled: var( --ui-custom-radiobutton-shadow-bg-disabled, transparent );--ui-radiobutton-shadow-width-default: var( --ui-custom-radiobutton-shadow-width-default, 0em );--ui-radiobutton-shadow-width-checked: var( --ui-custom-radiobutton-shadow-width-checked, .25em );--ui-radiobutton-focus-outline-width: var( --ui-custom-radiobutton-focus-outline-width, .0625em );--ui-radiobutton-focus-outline-style: var( --ui-custom-radiobutton-focus-outline-style, solid );--ui-radiobutton-focus-outline-color: var( --ui-custom-radiobutton-focus-outline-color, var(--grayscale-black) );--ui-radiobutton-focus-outline-offset: var( --ui-custom-radiobutton-focus-outline-offset, .125em )}.ui-radiobutton{--radiobutton-bg: var(--ui-radiobutton-shadow-bg-default);--radiobutton-border: var(--ui-radiobutton-border-default);--radiobutton-shadow: var(--ui-radiobutton-shadow-bg-default);--radiobutton-shadow-width: var(--ui-radiobutton-shadow-width-default);--radiobutton-outline-width: 0em;--radiobutton-outline-style: none;--radiobutton-outline-color: transparent;--radiobutton-outline-offset: 0em;font-family:var(--font-family)}.ui-radiobutton-input{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.ui-radiobutton-input:focus+label:before{--radiobutton-border: var(--ui-radiobutton-border-focus);--radiobutton-outline-width: var( --ui-radiobutton-focus-outline-width );--radiobutton-outline-style: var( --ui-radiobutton-focus-outline-style );--radiobutton-outline-color: var( --ui-radiobutton-focus-outline-color );--radiobutton-outline-offset: var( --ui-radiobutton-focus-outline-offset )}.ui-radiobutton-input:checked:not([aria-invalid=true])+label:before{--radiobutton-shadow: var(--grayscale-white);--radiobutton-shadow-width: var( --ui-radiobutton-shadow-width-checked );--radiobutton-bg: var(--ui-radiobutton-shadow-bg-checked);--radiobutton-border: var(--ui-radiobutton-border-checked)}.ui-radiobutton-input[aria-invalid=true]:checked+label{--radiobutton-shadow: var(--grayscale-white);--radiobutton-bg: var(--ui-radiobutton-shadow-bg-error);--radiobutton-shadow-width: var( --ui-radiobutton-shadow-width-checked )}.ui-radiobutton-input[aria-invalid=true]+label:before{--radiobutton-border: var(--ui-radiobutton-border-error)}.ui-radiobutton-label{position:relative;padding-left:1.5em;font-weight:400;font-size:1em;line-height:148%;color:var(--grayscale-black)}.ui-radiobutton-label:before{content:\"\";width:1.125em;height:1.125em;border:1px solid var(--radiobutton-border, var(--grayscale-spacer));border-radius:999px;position:absolute;left:0;top:0;bottom:0;margin-top:.125em;transition:background ease-in-out .25s;background-color:var(--radiobutton-bg);box-shadow:inset 0 0 0 var(--radiobutton-shadow-width) var(--radiobutton-shadow, transparent);outline-width:var(--radiobutton-outline-width);outline-style:var(--radiobutton-outline-style);outline-color:var(--radiobutton-outline-color);outline-offset:var(--radiobutton-outline-offset)}\n"], dependencies: [{ kind: "directive", type: FocusBlurDirective, selector: "[focusBlur]", outputs: ["onFocus", "onBlur"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIRadiobuttonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-radiobutton', standalone: true, imports: [
                        FocusBlurDirective
                    ], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UIRadiobuttonComponent),
                            multi: true
                        }
                    ], encapsulation: ViewEncapsulation.None, template: "<div class=\"ui-radiobutton\">\n    <input\n        #input\n        focusBlur\n        id=\"radio1\"\n        class=\"ui-radiobutton-input\"\n        type=\"radio\"\n        [checked]=\"isChecked\"\n        [disabled]=\"isDisabled\"\n        [attr.aria-invalid]=\"isError\"\n        [attr.aria-label]=\"ariaLabel\"\n        (input)=\"onInput($event)\"\n        (onFocus)=\"onFocus()\"\n        (onBlur)=\"onBlur()\"\n    />\n    <label for=\"radio1\" class=\"ui-radiobutton-label\">{{label}}</label>\n</div>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-radiobutton-border-default: var( --ui-custom-radiobutton-border-default, var(--grayscale-black) );--ui-radiobutton-border-focus: var( --ui-custom-radiobutton-border-focus, var(--grayscale-black) );--ui-radiobutton-border-checked: var( --ui-custom-radiobutton-border-checked, var(--corporate-purple) );--ui-radiobutton-border-error: var( --ui-custom-radiobutton-border-error, var(--informing-error) );--ui-radiobutton-shadow-bg-default: var( --ui-custom-radiobutton-shadow-bg-default, transparent );--ui-radiobutton-shadow-bg-checked: var( --ui-custom-radiobutton-shadow-bg-checked, var(--corporate-purple) );--ui-radiobutton-shadow-bg-error: var( --ui-custom-radiobutton-shadow-bg-error, var(--informing-error) );--ui-radiobutton-shadow-bg-disabled: var( --ui-custom-radiobutton-shadow-bg-disabled, transparent );--ui-radiobutton-shadow-width-default: var( --ui-custom-radiobutton-shadow-width-default, 0em );--ui-radiobutton-shadow-width-checked: var( --ui-custom-radiobutton-shadow-width-checked, .25em );--ui-radiobutton-focus-outline-width: var( --ui-custom-radiobutton-focus-outline-width, .0625em );--ui-radiobutton-focus-outline-style: var( --ui-custom-radiobutton-focus-outline-style, solid );--ui-radiobutton-focus-outline-color: var( --ui-custom-radiobutton-focus-outline-color, var(--grayscale-black) );--ui-radiobutton-focus-outline-offset: var( --ui-custom-radiobutton-focus-outline-offset, .125em )}.ui-radiobutton{--radiobutton-bg: var(--ui-radiobutton-shadow-bg-default);--radiobutton-border: var(--ui-radiobutton-border-default);--radiobutton-shadow: var(--ui-radiobutton-shadow-bg-default);--radiobutton-shadow-width: var(--ui-radiobutton-shadow-width-default);--radiobutton-outline-width: 0em;--radiobutton-outline-style: none;--radiobutton-outline-color: transparent;--radiobutton-outline-offset: 0em;font-family:var(--font-family)}.ui-radiobutton-input{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.ui-radiobutton-input:focus+label:before{--radiobutton-border: var(--ui-radiobutton-border-focus);--radiobutton-outline-width: var( --ui-radiobutton-focus-outline-width );--radiobutton-outline-style: var( --ui-radiobutton-focus-outline-style );--radiobutton-outline-color: var( --ui-radiobutton-focus-outline-color );--radiobutton-outline-offset: var( --ui-radiobutton-focus-outline-offset )}.ui-radiobutton-input:checked:not([aria-invalid=true])+label:before{--radiobutton-shadow: var(--grayscale-white);--radiobutton-shadow-width: var( --ui-radiobutton-shadow-width-checked );--radiobutton-bg: var(--ui-radiobutton-shadow-bg-checked);--radiobutton-border: var(--ui-radiobutton-border-checked)}.ui-radiobutton-input[aria-invalid=true]:checked+label{--radiobutton-shadow: var(--grayscale-white);--radiobutton-bg: var(--ui-radiobutton-shadow-bg-error);--radiobutton-shadow-width: var( --ui-radiobutton-shadow-width-checked )}.ui-radiobutton-input[aria-invalid=true]+label:before{--radiobutton-border: var(--ui-radiobutton-border-error)}.ui-radiobutton-label{position:relative;padding-left:1.5em;font-weight:400;font-size:1em;line-height:148%;color:var(--grayscale-black)}.ui-radiobutton-label:before{content:\"\";width:1.125em;height:1.125em;border:1px solid var(--radiobutton-border, var(--grayscale-spacer));border-radius:999px;position:absolute;left:0;top:0;bottom:0;margin-top:.125em;transition:background ease-in-out .25s;background-color:var(--radiobutton-bg);box-shadow:inset 0 0 0 var(--radiobutton-shadow-width) var(--radiobutton-shadow, transparent);outline-width:var(--radiobutton-outline-width);outline-style:var(--radiobutton-outline-style);outline-color:var(--radiobutton-outline-color);outline-offset:var(--radiobutton-outline-offset)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { inputRadio: [{
                type: ViewChild,
                args: ['input', { static: true }]
            }], label: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isError: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }] } });

class UITogglerComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.outputEvent = new EventEmitter();
    }
    onToggle() {
        this.isActived = !this.isActived;
        this.outputEvent.emit(this.isActived);
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITogglerComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UITogglerComponent, isStandalone: true, selector: "ui-toggler", inputs: { isActived: "isActived", isDisabled: "isDisabled", ariaLabel: "ariaLabel", ariaLabelledby: "ariaLabelledby" }, outputs: { outputEvent: "outputEvent" }, ngImport: i0, template: "<button \n    type=\"button\" \n    class=\"ui-toggler\" \n    [class.ui-toggler--active]=\"isActived\"\n    [disabled]=\"isDisabled\"\n    [attr.aria-label]=\"ariaLabel\"\n    [attr.aria-labelledby]=\"ariaLabelledby\"\n    [attr.aria-disabled]=\"isDisabled\"\n    (click)=\"onToggle()\"\n></button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-toggler-bg-default: var(--ui-custom-toggler-bg-default, var(--grayscale-bg-light-grey) ) ;--ui-toggler-bg-active: var(--ui-custom-toggler-bg-active, var(--corporate-purple) ) ;--ui-toggler-bg-disabled: var(--ui-custom-toggler-bg-disabled, var(--grayscale-disabled) ) ;--ui-toggler-circle-bg-default: var(--ui-custom-toggler-circle-bg-default, var(--grayscale-white) ) ;--ui-toggler-circle-bg-active: var(--ui-custom-toggler-circle-bg-active, var(--grayscale-white) ) ;--ui-toggler-circle-bg-disabled: var(--ui-custom-toggler-circle-bg-disabled, var(--grayscale-border) ) }.ui-toggler{--toggler-bg: var(--ui-toggler-bg-default);--toggler-circle-bg: var(--ui-toggler-circle-bg-default);--toggler-text-color: var(--ui-toggler-text-color-off);width:3.1875em;height:2em;display:flex;justify-content:flex-start;border-radius:62.4375em;background-color:var(--toggler-bg);position:relative;transition:all ease-in-out .25s;cursor:pointer}.ui-toggler:before{content:\"\";width:1.75em;height:1.75em;background-color:var(--toggler-circle-bg);box-shadow:0 0 4px #0000002b;position:absolute;top:0;bottom:0;margin:auto .125em;border-radius:62.4375em}.ui-toggler:disabled{--toggler-bg: var(--ui-toggler-bg-disabled);--toggler-circle-bg: var(--ui-toggler-circle-bg-disabled);cursor:not-allowed}.ui-toggler--active{--toggler-bg: var(--ui-toggler-bg-active);--toggler-circle-bg: var(--ui-toggler-circle-bg-active);justify-content:flex-end}\n"], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITogglerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-toggler', standalone: true, imports: [], encapsulation: ViewEncapsulation.None, template: "<button \n    type=\"button\" \n    class=\"ui-toggler\" \n    [class.ui-toggler--active]=\"isActived\"\n    [disabled]=\"isDisabled\"\n    [attr.aria-label]=\"ariaLabel\"\n    [attr.aria-labelledby]=\"ariaLabelledby\"\n    [attr.aria-disabled]=\"isDisabled\"\n    (click)=\"onToggle()\"\n></button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-toggler-bg-default: var(--ui-custom-toggler-bg-default, var(--grayscale-bg-light-grey) ) ;--ui-toggler-bg-active: var(--ui-custom-toggler-bg-active, var(--corporate-purple) ) ;--ui-toggler-bg-disabled: var(--ui-custom-toggler-bg-disabled, var(--grayscale-disabled) ) ;--ui-toggler-circle-bg-default: var(--ui-custom-toggler-circle-bg-default, var(--grayscale-white) ) ;--ui-toggler-circle-bg-active: var(--ui-custom-toggler-circle-bg-active, var(--grayscale-white) ) ;--ui-toggler-circle-bg-disabled: var(--ui-custom-toggler-circle-bg-disabled, var(--grayscale-border) ) }.ui-toggler{--toggler-bg: var(--ui-toggler-bg-default);--toggler-circle-bg: var(--ui-toggler-circle-bg-default);--toggler-text-color: var(--ui-toggler-text-color-off);width:3.1875em;height:2em;display:flex;justify-content:flex-start;border-radius:62.4375em;background-color:var(--toggler-bg);position:relative;transition:all ease-in-out .25s;cursor:pointer}.ui-toggler:before{content:\"\";width:1.75em;height:1.75em;background-color:var(--toggler-circle-bg);box-shadow:0 0 4px #0000002b;position:absolute;top:0;bottom:0;margin:auto .125em;border-radius:62.4375em}.ui-toggler:disabled{--toggler-bg: var(--ui-toggler-bg-disabled);--toggler-circle-bg: var(--ui-toggler-circle-bg-disabled);cursor:not-allowed}.ui-toggler--active{--toggler-bg: var(--ui-toggler-bg-active);--toggler-circle-bg: var(--ui-toggler-circle-bg-active);justify-content:flex-end}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { isActived: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], ariaLabelledby: [{
                type: Input
            }], outputEvent: [{
                type: Output
            }] } });

// Añadir NGvalue_ACCESSOR y al componente UIOptionGroupComponent
class UIInputSearchComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.isShowSuggestions = true;
        this.outputWriteInput = new EventEmitter();
        this.outputSuggestions = new EventEmitter();
        this.isFocusin = false;
        this.isShowPanel = false;
        this.value = '';
        this._unsubcribes$ = new Subject();
    }
    onResize() {
        if (this.container?.nativeElement &&
            this.panel?.nativeElement &&
            this.isShowSuggestions) {
            this.adjustPositionPanel(this.container.nativeElement, this.panel?.nativeElement);
        }
    }
    onDocumentClick(event) {
        if (!this.container?.nativeElement.contains(event.target)) {
            if (this.isShowSuggestions) {
                this.isShowPanel = false;
            }
            this.isFocusin = false;
            this.cdr.markForCheck();
        }
    }
    ngAfterViewInit() {
        if (this.panelSuggestions) {
            this.panelSuggestions.outputSelected
                .pipe(filter((value) => value !== undefined), 
            //distinctUntilChanged(),
            takeUntil(this._unsubcribes$))
                .subscribe((options) => {
                this.value = options?.value;
                this.isFocusin = false;
                this.isShowPanel = false;
                this.outputSuggestions.emit(options);
            });
        }
    }
    ngAfterContentInit() {
        if (this.container?.nativeElement &&
            this.panel?.nativeElement &&
            this.isShowSuggestions) {
            this.adjustPositionPanel(this.container.nativeElement, this.panel?.nativeElement);
        }
        this.cdr.markForCheck();
    }
    ngAfterViewChecked() {
        if (this.container?.nativeElement &&
            this.panel?.nativeElement &&
            this.isShowSuggestions) {
            this.adjustPositionPanel(this.container.nativeElement, this.panel?.nativeElement);
        }
    }
    ngOnDestroy() {
        this._unsubcribes$.next();
        this._unsubcribes$.complete();
    }
    onInput(event) {
        const { value } = (event.currentTarget);
        this.value = value;
        this.outputWriteInput.emit(this.value);
        this.cdr.markForCheck();
    }
    onFocus() {
        this.isFocusin = true;
    }
    onBlur() {
        this.isFocusin = false;
    }
    adjustPositionPanel(container, panel) {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIInputSearchComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UIInputSearchComponent, isStandalone: true, selector: "ui-input-search", inputs: { panelSuggestions: "panelSuggestions", placeholder: "placeholder", isShowSuggestions: "isShowSuggestions" }, outputs: { outputWriteInput: "outputWriteInput", outputSuggestions: "outputSuggestions" }, host: { listeners: { "window:resize": "onResize($event)", "document:click": "onDocumentClick($event)" } }, viewQueries: [{ propertyName: "container", first: true, predicate: ["container"], descendants: true, static: true }, { propertyName: "panel", first: true, predicate: ["panel"], descendants: true }], ngImport: i0, template: "<div \n    #container \n    class=\"ui-input-search\" \n    [class.ui-input-search--expand]=\"(isShowSuggestions && value.length !== 0) && (isShowPanel || isFocusin)\">\n    <input \n        #input \n        focusBlur\n        [value]=\"value\"\n        (input)=\"onInput($event)\"\n        (onFocus)=\"onFocus()\"\n        (onBlur)=\"onBlur()\" \n        type=\"search\"\n        placeholder=\"Buscar modelos\"\n    />\n    <div class=\"ui-input-search__wrapper\">\n        <svg class=\"ui-input-search-icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M10.8424 17.684C12.3605 17.6837 13.8349 17.1755 15.0307 16.2403L18.7906 20L20 18.7907L16.2401 15.031C17.1758 13.8351 17.6844 12.3604 17.6847 10.842C17.6847 7.06949 14.6151 4 10.8424 4C7.06965 4 4 7.06949 4 10.842C4 14.6145 7.06965 17.684 10.8424 17.684ZM10.8424 5.7105C13.6725 5.7105 15.9741 8.01197 15.9741 10.842C15.9741 13.672 13.6725 15.9735 10.8424 15.9735C8.01219 15.9735 5.71059 13.672 5.71059 10.842C5.71059 8.01197 8.01219 5.7105 10.8424 5.7105Z\" fill=\"currentColor\"/>\n            <path d=\"M12.05 9.6327C12.3742 9.95769 12.5529 10.387 12.5529 10.842H14.2635C14.2643 10.3925 14.1759 9.94734 14.0036 9.53219C13.8312 9.11705 13.5783 8.74018 13.2594 8.42337C11.9645 7.13024 9.71935 7.13024 8.42529 8.42337L9.63297 9.63441C10.283 8.98613 11.4034 8.98784 12.05 9.6327Z\" fill=\"currentColor\"/>\n        </svg>\n    </div>\n    <ng-container *ngIf=\"isShowSuggestions\">\n        <div \n            #panel \n            class=\"ui-input-search__panel\" \n            [class.ui-input-search__panel--expand]=\"value.length !== 0 && (isShowPanel || isFocusin)\" \n            role=\"listbox\">\n            <ng-content></ng-content>\n        </div>\n    </ng-container>\n</div>  ", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-input-search{height:2.75em;position:relative;display:flex;align-items:center;justify-content:space-between;gap:.5em;padding:0 .75em;border:.0625em solid var(--grayscale-spacer-light);border-radius:.125em}.ui-input-search--expand{border-bottom:none}.ui-input-search input{width:100%;height:100%;outline:none;border:none}.ui-input-search input:focus{outline:none}.ui-input-search__wrapper{height:100%;display:flex;align-items:center}.ui-input-search__panel{width:100%;height:fit-content;position:fixed;bottom:0;border:.0625em solid var(--grayscale-spacer-light);display:flex;flex-direction:column;animation:collapseAnimation ease-in-out .25s forwards}.ui-input-search__panel--expand{animation:expandAnimation ease-in-out .25s forwards}\n"], dependencies: [{ kind: "directive", type: FocusBlurDirective, selector: "[focusBlur]", outputs: ["onFocus", "onBlur"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIInputSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-input-search', standalone: true, imports: [
                        FocusBlurDirective,
                        CommonModule
                    ], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div \n    #container \n    class=\"ui-input-search\" \n    [class.ui-input-search--expand]=\"(isShowSuggestions && value.length !== 0) && (isShowPanel || isFocusin)\">\n    <input \n        #input \n        focusBlur\n        [value]=\"value\"\n        (input)=\"onInput($event)\"\n        (onFocus)=\"onFocus()\"\n        (onBlur)=\"onBlur()\" \n        type=\"search\"\n        placeholder=\"Buscar modelos\"\n    />\n    <div class=\"ui-input-search__wrapper\">\n        <svg class=\"ui-input-search-icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"M10.8424 17.684C12.3605 17.6837 13.8349 17.1755 15.0307 16.2403L18.7906 20L20 18.7907L16.2401 15.031C17.1758 13.8351 17.6844 12.3604 17.6847 10.842C17.6847 7.06949 14.6151 4 10.8424 4C7.06965 4 4 7.06949 4 10.842C4 14.6145 7.06965 17.684 10.8424 17.684ZM10.8424 5.7105C13.6725 5.7105 15.9741 8.01197 15.9741 10.842C15.9741 13.672 13.6725 15.9735 10.8424 15.9735C8.01219 15.9735 5.71059 13.672 5.71059 10.842C5.71059 8.01197 8.01219 5.7105 10.8424 5.7105Z\" fill=\"currentColor\"/>\n            <path d=\"M12.05 9.6327C12.3742 9.95769 12.5529 10.387 12.5529 10.842H14.2635C14.2643 10.3925 14.1759 9.94734 14.0036 9.53219C13.8312 9.11705 13.5783 8.74018 13.2594 8.42337C11.9645 7.13024 9.71935 7.13024 8.42529 8.42337L9.63297 9.63441C10.283 8.98613 11.4034 8.98784 12.05 9.6327Z\" fill=\"currentColor\"/>\n        </svg>\n    </div>\n    <ng-container *ngIf=\"isShowSuggestions\">\n        <div \n            #panel \n            class=\"ui-input-search__panel\" \n            [class.ui-input-search__panel--expand]=\"value.length !== 0 && (isShowPanel || isFocusin)\" \n            role=\"listbox\">\n            <ng-content></ng-content>\n        </div>\n    </ng-container>\n</div>  ", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-input-search{height:2.75em;position:relative;display:flex;align-items:center;justify-content:space-between;gap:.5em;padding:0 .75em;border:.0625em solid var(--grayscale-spacer-light);border-radius:.125em}.ui-input-search--expand{border-bottom:none}.ui-input-search input{width:100%;height:100%;outline:none;border:none}.ui-input-search input:focus{outline:none}.ui-input-search__wrapper{height:100%;display:flex;align-items:center}.ui-input-search__panel{width:100%;height:fit-content;position:fixed;bottom:0;border:.0625em solid var(--grayscale-spacer-light);display:flex;flex-direction:column;animation:collapseAnimation ease-in-out .25s forwards}.ui-input-search__panel--expand{animation:expandAnimation ease-in-out .25s forwards}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { container: [{
                type: ViewChild,
                args: ['container', { static: true }]
            }], panel: [{
                type: ViewChild,
                args: ['panel', { static: false }]
            }], panelSuggestions: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], isShowSuggestions: [{
                type: Input
            }], outputWriteInput: [{
                type: Output
            }], outputSuggestions: [{
                type: Output
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', ['$event']]
            }], onDocumentClick: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class UIOptionComponent {
    constructor() {
        this.isActive = false;
        this.isDisabled = false;
        this.outputemit = new EventEmitter();
    }
    onClick() {
        this.outputemit.emit(this.title);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIOptionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UIOptionComponent, isStandalone: true, selector: "ui-option", inputs: { title: "title", isActive: "isActive", isDisabled: "isDisabled" }, outputs: { outputemit: "outputemit" }, ngImport: i0, template: "<button \n    class=\"ui-option\" \n    type=\"button\" \n    [class.ui-option--active]=\"isActive\"\n    [disabled]=\"isDisabled\"\n    [attr.aria-disabled]=\"isDisabled\"\n    (click)=\"onClick()\"\n>\n    {{title}}\n</button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-option{width:100%;display:block;text-align:left;padding:.75em;font-size:.875em;line-height:140%}.ui-option:not(.ui-option:disabled){cursor:pointer}.ui-option:disabled{background-color:var(--grayscale-disabled);color:var(--grayscale-border);cursor:not-allowed}.ui-option:focus{border:.0625em solid var(--grayscale-black)}.ui-option--active{background-color:var(--corporate-purple);color:var(--grayscale-white)}\n"], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIOptionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-option', standalone: true, imports: [], encapsulation: ViewEncapsulation.None, template: "<button \n    class=\"ui-option\" \n    type=\"button\" \n    [class.ui-option--active]=\"isActive\"\n    [disabled]=\"isDisabled\"\n    [attr.aria-disabled]=\"isDisabled\"\n    (click)=\"onClick()\"\n>\n    {{title}}\n</button>\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-option{width:100%;display:block;text-align:left;padding:.75em;font-size:.875em;line-height:140%}.ui-option:not(.ui-option:disabled){cursor:pointer}.ui-option:disabled{background-color:var(--grayscale-disabled);color:var(--grayscale-border);cursor:not-allowed}.ui-option:focus{border:.0625em solid var(--grayscale-black)}.ui-option--active{background-color:var(--corporate-purple);color:var(--grayscale-white)}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], isActive: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], outputemit: [{
                type: Output
            }] } });

class UIOptionGroupComponent {
    constructor() {
        this.outputSelected = new EventEmitter();
        this.outputMultiSelected = new EventEmitter();
        this.isEmpty = false;
        this._multiOptionsSelected = [];
        this._optionSelected = {};
    }
    trackByOptionId(index, option) {
        return option.id;
    }
    ngOnChanges(changes) {
        if (changes['options'] && (changes['options'].previousValue !== changes['options'].currentValue)) {
            this.isEmpty = this.options.length > 0 ? false : true;
        }
    }
    onSendOptionSelected(option) {
        if (this.config && this.config.multiSelected === true) {
            if (this.verifyDuplicateOptionSelected(option)) {
                this._multiOptionsSelected = this._multiOptionsSelected.filter(({ id }) => option.id !== id);
                this.outputMultiSelected.emit(this._multiOptionsSelected);
                return;
            }
            this._multiOptionsSelected.push(option);
            this.outputMultiSelected.emit(this._multiOptionsSelected);
        }
        else {
            if (this._optionSelected.id === option.id) {
                this._optionSelected = {};
            }
            else {
                Object.assign(this._optionSelected, option);
            }
            this.outputSelected.emit(this._optionSelected);
        }
    }
    verifyThisElementIsSelected(option) {
        if (this.config && this.config.multiSelected) {
            if (this.verifyDuplicateOptionSelected(option)) {
                return true;
            }
        }
        else {
            if (this._optionSelected.id === option.id) {
                return true;
            }
        }
        return false;
    }
    verifyDuplicateOptionSelected(option) {
        return this._multiOptionsSelected.find(({ id, value }) => {
            return id === option.id && value === option.value;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIOptionGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UIOptionGroupComponent, isStandalone: true, selector: "ui-option-group", inputs: { config: "config", options: "options" }, outputs: { outputSelected: "outputSelected", outputMultiSelected: "outputMultiSelected" }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"options\">\n    <ul role=\"listbox\">\n        <ng-container *ngIf=\"isEmpty; then emptyData;\"></ng-container>\n        <li *ngFor=\"let option of options; trackBy: trackByOptionId\">\n            <ui-option\n                [title]=\"option.value\" \n                [isActive]=\"verifyThisElementIsSelected(option)\"\n                [isDisabled]=\"option.disabled\"\n                (outputemit)=\"onSendOptionSelected(option)\" \n            />\n        </li>\n    </ul>\n</ng-container>\n\n\n<ng-template #emptyData>\n    <li>Empty Data</li>\n</ng-template>", styles: [""], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: UIOptionComponent, selector: "ui-option", inputs: ["title", "isActive", "isDisabled"], outputs: ["outputemit"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UIOptionGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-option-group', standalone: true, imports: [
                        CommonModule,
                        UIOptionComponent
                    ], template: "<ng-container *ngIf=\"options\">\n    <ul role=\"listbox\">\n        <ng-container *ngIf=\"isEmpty; then emptyData;\"></ng-container>\n        <li *ngFor=\"let option of options; trackBy: trackByOptionId\">\n            <ui-option\n                [title]=\"option.value\" \n                [isActive]=\"verifyThisElementIsSelected(option)\"\n                [isDisabled]=\"option.disabled\"\n                (outputemit)=\"onSendOptionSelected(option)\" \n            />\n        </li>\n    </ul>\n</ng-container>\n\n\n<ng-template #emptyData>\n    <li>Empty Data</li>\n</ng-template>" }]
        }], propDecorators: { config: [{
                type: Input
            }], options: [{
                type: Input
            }], outputSelected: [{
                type: Output
            }], outputMultiSelected: [{
                type: Output
            }] } });

class UICheckboxComponent {
    constructor() {
        this.outputChecked = new EventEmitter();
        this.tabIndex = 0;
        this.onTouch = () => { };
    }
    set isChecked(value) {
        this.isCheckated = value;
    }
    ;
    writeValue(checked) {
        this.isChecked = checked;
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    modelChangeFn(checked) {
        this.onChangeCallback?.(checked);
        this.outputChecked.emit(checked);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UICheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UICheckboxComponent, isStandalone: true, selector: "ui-checkbox", inputs: { id: "id", name: "name", label: "label", ariaLabel: "ariaLabel", isChecked: "isChecked", isDisabled: "isDisabled" }, outputs: { outputChecked: "outputChecked" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UICheckboxComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"ui-checkbox\">\n    <input \n        [id]=\"id\" \n        class=\"ui-checkbox-input\" \n        type=\"checkbox\" \n        role=\"checkbox\"\n        [attr.aria-disabled]=\"isDisabled\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-checked]=\"isCheckated\"\n        [checked]=\"isCheckated\" \n        [disabled]=\"isDisabled\"\n        [tabIndex]=\"isDisabled ? -1 : tabIndex\"\n        [(ngModel)]=\"isCheckated\"\n        (ngModelChange)=\"modelChangeFn($event)\"\n    />\n    <label \n        class=\"ui-checkbox-label\" \n        [class.ui-checkbox-label--not-text]=\"!label\" \n        [for]=\"id\">\n        <svg viewBox=\"0 0 100 100\">\n            <path fill=\"none\" stroke=\"#000\" stroke-width=\"13\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                stroke-miterlimit=\"10\" d=\"M12.1 52.1l24.4 24.4 53-53\" />\n        </svg>\n        {{ label }}\n    </label>\n</div>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-checkbox-border-default: var(--ui-custom-checkbox-border-default, var(--grayscale-spacer));--ui-checkbox-border-checked: var(--ui-custom-checkbox-border-checked, var(--corporate-purple));--ui-checkbox-border-disabled: var(--ui-custom-checkbox-border-disabled, var(--grayscale-spacer-light));--ui-checkbox-bg-default: var(--ui-custom-checkbox-bg-default, var(--grayscale-white));--ui-checkbox-bg-checked: var(--ui-custom-checkbox-bg-checked, var(--corporate-purple));--ui-checkbox-bg-disabled: var(--ui-custom-checkbox-bg-disabled, var(--grayscale-disabled));--ui-checkbox-svg-stroke: var(--ui-custom-checkbox-svg-stroke, var(--grayscale-white));--ui-checkbox-outline-width-default: var(--ui-custom-checkbox-outline-width-default, .0625em);--ui-checkbox-outline-style: var(--ui-custom-checkbox-outline-style, solid);--ui-checkbox-outline-color-default: var(--ui-custom-checkbox-outline-color, transparent);--ui-checkbox-outline-color-active: var(--ui-custom-checkbox-outline-color-active, var(--corporate-purple));--ui-checkbox-outline-offset: var(--ui-custom-checkbox-outline-offset, .125em);--ui-checkbox-label-color: var(--ui-custom-checkbox-label-color, var(--grayscale-black));--ui-checkbox-label-color-disabled: var(--ui-custom-checkbox-label-color-disabled, var(--grayscale-disabled));--ui-checkbox-label-font-weight: var(--ui-custom-checkbox-label-font-weight, 400);--ui-checkbox-label-font-size: var(--ui-custom-checkbox-label-font-size, 1em);--ui-checkbox-label-line-height: var(--ui-custom-checkbox-label-line-height, 148%);--ui-checkbox-spacing-left: var(--ui-custom-checkbox-spacing-left, 1.5em)}.ui-checkbox{--checkbox-border-color: var(--ui-checkbox-border-default);--checkbox-bg: var(--ui-checkbox-bg-default);--checkbox-label-color: var(--ui-checkbox-label-color);--checkbox-label-font-weight: var(--ui-checkbox-label-font-weight);--checkbox-label-font-size: var(--ui-checkbox-label-font-size);--checkbox-label-line-height: var(--ui-checkbox-label-line-height);--checkbox-svg-stroke: var(--ui-checkbox-svg-stroke);--checkbox-outline-width: var(--ui-checkbox-outline-width-default);--checkbox-outline-style: var(--ui-checkbox-outline-style);--checkbox-outline-color: var(--ui-checkbox-outline-color-default);--checkbox-outline-offset: var(--ui-checkbox-outline-offset);--checkbox-spacing-left: var(--ui-checkbox-spacing-left)}.ui-checkbox-input{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.ui-checkbox-input:focus+label{--checkbox-outline-color: var(--ui-checkbox-outline-color-active)}.ui-checkbox-input:disabled+label{--checkbox-label-color: var(--ui-checkbox-label-color-disabled);--checkbox-border-color: var(--ui-checkbox-border-disabled)}.ui-checkbox-input:is(.ui-checkbox-input:disabled):is(.ui-checkbox-input:checked)+label:before{--checkbox-bg: var(--ui-checkbox-bg-disabled);--checkbox-border-color: var(--ui-checkbox-border-disabled)}.ui-checkbox-input:checked+label{--checkbox-border-color: var(--corporate-purple);--checkbox-bg: var(--ui-checkbox-bg-checked)}.ui-checkbox-input:checked+label svg path{stroke-dashoffset:0}.ui-checkbox-label{position:relative;padding-left:var(--checkbox-spacing-left);font-weight:var(--checkbox-label-font-weight);font-size:var(--checkbox-label-font-size);line-height:var(--checkbox-label-line-height);color:var(--checkbox-label-color);-webkit-user-select:none;user-select:none;cursor:pointer}.ui-checkbox-label--not-text{padding-left:0}.ui-checkbox-label svg{position:absolute;left:.15625em;top:.3125em;width:.75em;height:.75em;pointer-events:none}.ui-checkbox-label svg path{stroke-dashoffset:6.9375em;stroke-dasharray:6.9375em;stroke:var(--checkbox-svg-stroke);transition:all .25s ease-out}@media (prefers-reduced-motion: reduce){.ui-checkbox-label svg path{transition:none}}.ui-checkbox-label:before{content:\"\";width:1.125em;height:1.125em;position:absolute;left:0;bottom:0;margin:auto;top:0;border:.0625em solid var(--checkbox-border-color);background-color:var(--checkbox-bg);border-radius:.25em;transition:all .25s ease-out;outline-width:var(--checkbox-outline-width);outline-style:var(--checkbox-outline-style);outline-color:var(--checkbox-outline-color);outline-offset:var(--checkbox-outline-offset)}@media (prefers-reduced-motion: reduce){.ui-checkbox-label:before{transition:none}}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UICheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-checkbox', standalone: true, imports: [
                        FormsModule
                    ], encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UICheckboxComponent),
                            multi: true
                        }
                    ], template: "<div class=\"ui-checkbox\">\n    <input \n        [id]=\"id\" \n        class=\"ui-checkbox-input\" \n        type=\"checkbox\" \n        role=\"checkbox\"\n        [attr.aria-disabled]=\"isDisabled\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-checked]=\"isCheckated\"\n        [checked]=\"isCheckated\" \n        [disabled]=\"isDisabled\"\n        [tabIndex]=\"isDisabled ? -1 : tabIndex\"\n        [(ngModel)]=\"isCheckated\"\n        (ngModelChange)=\"modelChangeFn($event)\"\n    />\n    <label \n        class=\"ui-checkbox-label\" \n        [class.ui-checkbox-label--not-text]=\"!label\" \n        [for]=\"id\">\n        <svg viewBox=\"0 0 100 100\">\n            <path fill=\"none\" stroke=\"#000\" stroke-width=\"13\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                stroke-miterlimit=\"10\" d=\"M12.1 52.1l24.4 24.4 53-53\" />\n        </svg>\n        {{ label }}\n    </label>\n</div>", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}:root{--ui-checkbox-border-default: var(--ui-custom-checkbox-border-default, var(--grayscale-spacer));--ui-checkbox-border-checked: var(--ui-custom-checkbox-border-checked, var(--corporate-purple));--ui-checkbox-border-disabled: var(--ui-custom-checkbox-border-disabled, var(--grayscale-spacer-light));--ui-checkbox-bg-default: var(--ui-custom-checkbox-bg-default, var(--grayscale-white));--ui-checkbox-bg-checked: var(--ui-custom-checkbox-bg-checked, var(--corporate-purple));--ui-checkbox-bg-disabled: var(--ui-custom-checkbox-bg-disabled, var(--grayscale-disabled));--ui-checkbox-svg-stroke: var(--ui-custom-checkbox-svg-stroke, var(--grayscale-white));--ui-checkbox-outline-width-default: var(--ui-custom-checkbox-outline-width-default, .0625em);--ui-checkbox-outline-style: var(--ui-custom-checkbox-outline-style, solid);--ui-checkbox-outline-color-default: var(--ui-custom-checkbox-outline-color, transparent);--ui-checkbox-outline-color-active: var(--ui-custom-checkbox-outline-color-active, var(--corporate-purple));--ui-checkbox-outline-offset: var(--ui-custom-checkbox-outline-offset, .125em);--ui-checkbox-label-color: var(--ui-custom-checkbox-label-color, var(--grayscale-black));--ui-checkbox-label-color-disabled: var(--ui-custom-checkbox-label-color-disabled, var(--grayscale-disabled));--ui-checkbox-label-font-weight: var(--ui-custom-checkbox-label-font-weight, 400);--ui-checkbox-label-font-size: var(--ui-custom-checkbox-label-font-size, 1em);--ui-checkbox-label-line-height: var(--ui-custom-checkbox-label-line-height, 148%);--ui-checkbox-spacing-left: var(--ui-custom-checkbox-spacing-left, 1.5em)}.ui-checkbox{--checkbox-border-color: var(--ui-checkbox-border-default);--checkbox-bg: var(--ui-checkbox-bg-default);--checkbox-label-color: var(--ui-checkbox-label-color);--checkbox-label-font-weight: var(--ui-checkbox-label-font-weight);--checkbox-label-font-size: var(--ui-checkbox-label-font-size);--checkbox-label-line-height: var(--ui-checkbox-label-line-height);--checkbox-svg-stroke: var(--ui-checkbox-svg-stroke);--checkbox-outline-width: var(--ui-checkbox-outline-width-default);--checkbox-outline-style: var(--ui-checkbox-outline-style);--checkbox-outline-color: var(--ui-checkbox-outline-color-default);--checkbox-outline-offset: var(--ui-checkbox-outline-offset);--checkbox-spacing-left: var(--ui-checkbox-spacing-left)}.ui-checkbox-input{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;-webkit-clip-path:inset(50%);clip-path:inset(50%);border:0}.ui-checkbox-input:focus+label{--checkbox-outline-color: var(--ui-checkbox-outline-color-active)}.ui-checkbox-input:disabled+label{--checkbox-label-color: var(--ui-checkbox-label-color-disabled);--checkbox-border-color: var(--ui-checkbox-border-disabled)}.ui-checkbox-input:is(.ui-checkbox-input:disabled):is(.ui-checkbox-input:checked)+label:before{--checkbox-bg: var(--ui-checkbox-bg-disabled);--checkbox-border-color: var(--ui-checkbox-border-disabled)}.ui-checkbox-input:checked+label{--checkbox-border-color: var(--corporate-purple);--checkbox-bg: var(--ui-checkbox-bg-checked)}.ui-checkbox-input:checked+label svg path{stroke-dashoffset:0}.ui-checkbox-label{position:relative;padding-left:var(--checkbox-spacing-left);font-weight:var(--checkbox-label-font-weight);font-size:var(--checkbox-label-font-size);line-height:var(--checkbox-label-line-height);color:var(--checkbox-label-color);-webkit-user-select:none;user-select:none;cursor:pointer}.ui-checkbox-label--not-text{padding-left:0}.ui-checkbox-label svg{position:absolute;left:.15625em;top:.3125em;width:.75em;height:.75em;pointer-events:none}.ui-checkbox-label svg path{stroke-dashoffset:6.9375em;stroke-dasharray:6.9375em;stroke:var(--checkbox-svg-stroke);transition:all .25s ease-out}@media (prefers-reduced-motion: reduce){.ui-checkbox-label svg path{transition:none}}.ui-checkbox-label:before{content:\"\";width:1.125em;height:1.125em;position:absolute;left:0;bottom:0;margin:auto;top:0;border:.0625em solid var(--checkbox-border-color);background-color:var(--checkbox-bg);border-radius:.25em;transition:all .25s ease-out;outline-width:var(--checkbox-outline-width);outline-style:var(--checkbox-outline-style);outline-color:var(--checkbox-outline-color);outline-offset:var(--checkbox-outline-offset)}@media (prefers-reduced-motion: reduce){.ui-checkbox-label:before{transition:none}}\n"] }]
        }], propDecorators: { id: [{
                type: Input
            }], name: [{
                type: Input
            }], label: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], isChecked: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], outputChecked: [{
                type: Output
            }] } });

class UITreeViewComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.items = [
            {
                id: '1',
                label: 'Frutas',
                children: [
                    {
                        id: '2',
                        label: 'Tropicales',
                        children: [
                            {
                                id: '3',
                                label: 'Piña'
                            },
                            {
                                id: '3',
                                label: 'Melocoton'
                            },
                        ]
                    },
                    {
                        id: '4',
                        label: 'Nacionales',
                        children: [
                            {
                                id: '5',
                                label: 'Naranjas'
                            },
                            {
                                id: '6',
                                label: 'Sandias'
                            },
                        ]
                    },
                ]
            },
            {
                id: '313',
                label: 'Countries',
                children: [
                    {
                        id: '411',
                        label: 'Spain'
                    },
                    {
                        id: '111',
                        label: 'Franch'
                    },
                    {
                        id: '311',
                        label: 'Italy'
                    }
                ]
            }
        ];
        this.outputSelectItem = new EventEmitter();
        this.itemSelected = [];
        this.withItemsSelected = false;
    }
    ngOnInit() {
        if (this.config) {
            this.withItemsSelected = (this.config.withSelected ?
                true :
                false);
        }
    }
    selectItem(node) {
        this.outputSelectItem.emit(node);
    }
    isExpanded(node) {
        //this.findNode(node);
        this.cdr.markForCheck();
    }
    isNodeSelected(idNode) {
        return this.itemSelected.find((node) => node.selected.id === idNode);
    }
    findNode(node) {
        const visited = new Set();
        for (const currentNode of this.items) {
            if (this.processNode(node, currentNode, visited)) {
                break;
            }
        }
        this.cdr.detectChanges();
    }
    processNode(node, currentNode, visited) {
        if (visited.has(currentNode.id)) {
            return false;
        }
        visited.add(currentNode.id);
        if (currentNode.id === node.id) {
            if (this.verifyThisExistElementSelected(currentNode.id)) {
                this.deletedNode(currentNode.id);
            }
            else {
                if (!this.itemSelected) {
                    this.itemSelected = [{ selected: currentNode }];
                }
                else {
                    this.itemSelected.push({ selected: currentNode });
                }
            }
            this.cdr.markForCheck();
            return true;
        }
        // Process Childrens
        if (currentNode.children) {
            for (const child of currentNode.children) {
                if (this.processNode(node, child, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
    verifyThisExistElementSelected(nodeId) {
        return !!this.itemSelected.find((node) => node.selected.id === nodeId);
    }
    deletedNode(nodeId) {
        this.itemSelected = this.itemSelected?.filter((node) => node.selected.id !== nodeId);
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeViewComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UITreeViewComponent, selector: "ui-tree-view", inputs: { config: "config", nodes: "nodes", items: "items" }, outputs: { outputSelectItem: "outputSelectItem" }, ngImport: i0, template: "<!-- <ul class=\"ui-tree-view\">\n        <li\n        *ngFor=\"let item of items\"\n        class=\"ui-tree-view-item\"\n        [class.ui-tree-view-item--expanded]=\"isNodeSelected(item.id)\"\n        [class.ui-tree-view-item--child]=\"!item.children\"\n        >\n        <p class=\"ui-tree-view-item-group\">\n            <button\n                *ngIf=\"item.children\"\n                class=\"ui-tree-view-item-btn\"\n                type=\"button\"\n                [attr.aria-label]=\"item.label\"\n                (click)=\"isExpanded(item)\">\n                <svg\n                    aria-hidden=\"true\"\n                    width=\"16\"\n                    height=\"16\"\n                    viewBox=\"0 0 16 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    class=\"ui-tree-view-icon\"\n                    [class.ui-tree-view-icon--rotate]=\"isNodeSelected(item.id)\">\n                    <path\n                        d=\"M4.74666 14.08C5.07333 14.4067 5.6 14.4067 5.92666 14.08L11.5333 8.47333C11.5951 8.41165 11.6442 8.33839 11.6776 8.25774C11.7111 8.17709 11.7283 8.09064 11.7283 8.00333C11.7283 7.91601 11.7111 7.82956 11.6776 7.74891C11.6442 7.66826 11.5951 7.595 11.5333 7.53333L5.92 1.91999C5.6 1.59999 5.06666 1.59999 4.74666 1.91999C4.66906 1.9974 4.60749 2.08936 4.56548 2.1906C4.52347 2.29185 4.50184 2.40038 4.50184 2.50999C4.50184 2.6196 4.52347 2.72814 4.56548 2.82938C4.60749 2.93062 4.66906 3.02258 4.74666 3.09999L9.64 7.99999L4.74 12.9C4.42 13.2267 4.42 13.7533 4.74666 14.08Z\"\n                        fill=\"#9D3FE7\" />\n                </svg>\n            </button>\n            <span *ngIf=\"item.children\">\n                {{ item.label }}\n            </span>\n            <button\n                *ngIf=\"!item.children && withItemsSelected\"\n                class=\"ui-tree-view-item-select\"\n                [attr.aria-label]=\"item.label\"\n                (click)=\"selectItem(item)\">\n                {{ item.label }}\n            </button>\n            <span >\n\n            </span>\n        </p>\n        <ui-tree-view\n            *ngIf=\"item.children && isNodeSelected(item.id)\"\n            [class.ui-tree-view--collapse]=\"!isNodeSelected(item.id)\"\n            [config]=\"config\"\n            [items]=\"item.children\"\n            (outputSelectItem)=\"selectItem($event)\"\n        />\n    </li>\n</ul>\n\n<ng-container *ngFor=\"let item of nodes\">\n    <ul *ngFor=\"let node of item\" class=\"ui-tree-view\">\n        <li>\n            <p class=\"ui-tree-view-item-group\">\n                <button\n                    *ngIf=\"node.children\"\n                    class=\"ui-tree-view-item-btn\"\n                    type=\"button\"\n                    [attr.aria-label]=\"node.label\"\n                    (click)=\"isExpanded(node)\">\n                    <svg\n                        aria-hidden=\"true\"\n                        width=\"16\"\n                        height=\"16\"\n                        viewBox=\"0 0 16 16\"\n                        fill=\"none\"\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ui-tree-view-icon\"\n                        [class.ui-tree-view-icon--rotate]=\"isNodeSelected(item.id)\">\n                        <path\n                            d=\"M4.74666 14.08C5.07333 14.4067 5.6 14.4067 5.92666 14.08L11.5333 8.47333C11.5951 8.41165 11.6442 8.33839 11.6776 8.25774C11.7111 8.17709 11.7283 8.09064 11.7283 8.00333C11.7283 7.91601 11.7111 7.82956 11.6776 7.74891C11.6442 7.66826 11.5951 7.595 11.5333 7.53333L5.92 1.91999C5.6 1.59999 5.06666 1.59999 4.74666 1.91999C4.66906 1.9974 4.60749 2.08936 4.56548 2.1906C4.52347 2.29185 4.50184 2.40038 4.50184 2.50999C4.50184 2.6196 4.52347 2.72814 4.56548 2.82938C4.60749 2.93062 4.66906 3.02258 4.74666 3.09999L9.64 7.99999L4.74 12.9C4.42 13.2267 4.42 13.7533 4.74666 14.08Z\"\n                            fill=\"#9D3FE7\" />\n                    </svg>\n                </button>\n            </p>\n        </li>\n    </ul>\n</ng-container> -->\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-tree-view{width:fit-content;display:flex;flex-direction:column;padding-left:1rem}.ui-tree-view-item{font-weight:400;font-size:1em;line-height:148%;color:var(--grayscale-black)}.ui-tree-view-item-group{display:flex;align-items:center;gap:.5em}.ui-tree-view-item-group svg{cursor:pointer}.ui-tree-view-item-btn{display:flex;align-items:center;justify-content:center;padding:0}.ui-tree-view-item-btn:focus-within{outline-width:2px;outline-style:solid;outline-color:var(--corporate-purple);outline-offset:2px}.ui-tree-view-item-select{font:inherit}.ui-tree-view-item-select:focus-within{outline-width:2px;outline-style:solid;outline-color:var(--corporate-purple);outline-offset:1px}.ui-tree-view-item ul{overflow:hidden;height:0;animation:collapseAnimation .25s ease-in-out forwards}@media (prefers-reduced-motion: reduce){.ui-tree-view-item ul{animation:collapseAnimation forwards}}.ui-tree-view-item--expanded ul{height:auto;animation:expandAnimation .25s ease-in-out forwards}@media (prefers-reduced-motion: reduce){.ui-tree-view-item--expanded ul{animation:expandAnimation forwards}}.ui-tree-view-item--child{padding-left:calc(1rem - 8px);padding-top:.25rem;padding-bottom:.25rem}.ui-tree-view-icon{transition:transform ease-in-out .25s}@media (prefers-reduced-motion: reduce){.ui-tree-view-icon{transition:none}}.ui-tree-view-icon--rotate{transform:rotate(90deg)}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-tree-view', standalone: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<!-- <ul class=\"ui-tree-view\">\n        <li\n        *ngFor=\"let item of items\"\n        class=\"ui-tree-view-item\"\n        [class.ui-tree-view-item--expanded]=\"isNodeSelected(item.id)\"\n        [class.ui-tree-view-item--child]=\"!item.children\"\n        >\n        <p class=\"ui-tree-view-item-group\">\n            <button\n                *ngIf=\"item.children\"\n                class=\"ui-tree-view-item-btn\"\n                type=\"button\"\n                [attr.aria-label]=\"item.label\"\n                (click)=\"isExpanded(item)\">\n                <svg\n                    aria-hidden=\"true\"\n                    width=\"16\"\n                    height=\"16\"\n                    viewBox=\"0 0 16 16\"\n                    fill=\"none\"\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    class=\"ui-tree-view-icon\"\n                    [class.ui-tree-view-icon--rotate]=\"isNodeSelected(item.id)\">\n                    <path\n                        d=\"M4.74666 14.08C5.07333 14.4067 5.6 14.4067 5.92666 14.08L11.5333 8.47333C11.5951 8.41165 11.6442 8.33839 11.6776 8.25774C11.7111 8.17709 11.7283 8.09064 11.7283 8.00333C11.7283 7.91601 11.7111 7.82956 11.6776 7.74891C11.6442 7.66826 11.5951 7.595 11.5333 7.53333L5.92 1.91999C5.6 1.59999 5.06666 1.59999 4.74666 1.91999C4.66906 1.9974 4.60749 2.08936 4.56548 2.1906C4.52347 2.29185 4.50184 2.40038 4.50184 2.50999C4.50184 2.6196 4.52347 2.72814 4.56548 2.82938C4.60749 2.93062 4.66906 3.02258 4.74666 3.09999L9.64 7.99999L4.74 12.9C4.42 13.2267 4.42 13.7533 4.74666 14.08Z\"\n                        fill=\"#9D3FE7\" />\n                </svg>\n            </button>\n            <span *ngIf=\"item.children\">\n                {{ item.label }}\n            </span>\n            <button\n                *ngIf=\"!item.children && withItemsSelected\"\n                class=\"ui-tree-view-item-select\"\n                [attr.aria-label]=\"item.label\"\n                (click)=\"selectItem(item)\">\n                {{ item.label }}\n            </button>\n            <span >\n\n            </span>\n        </p>\n        <ui-tree-view\n            *ngIf=\"item.children && isNodeSelected(item.id)\"\n            [class.ui-tree-view--collapse]=\"!isNodeSelected(item.id)\"\n            [config]=\"config\"\n            [items]=\"item.children\"\n            (outputSelectItem)=\"selectItem($event)\"\n        />\n    </li>\n</ul>\n\n<ng-container *ngFor=\"let item of nodes\">\n    <ul *ngFor=\"let node of item\" class=\"ui-tree-view\">\n        <li>\n            <p class=\"ui-tree-view-item-group\">\n                <button\n                    *ngIf=\"node.children\"\n                    class=\"ui-tree-view-item-btn\"\n                    type=\"button\"\n                    [attr.aria-label]=\"node.label\"\n                    (click)=\"isExpanded(node)\">\n                    <svg\n                        aria-hidden=\"true\"\n                        width=\"16\"\n                        height=\"16\"\n                        viewBox=\"0 0 16 16\"\n                        fill=\"none\"\n                        xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ui-tree-view-icon\"\n                        [class.ui-tree-view-icon--rotate]=\"isNodeSelected(item.id)\">\n                        <path\n                            d=\"M4.74666 14.08C5.07333 14.4067 5.6 14.4067 5.92666 14.08L11.5333 8.47333C11.5951 8.41165 11.6442 8.33839 11.6776 8.25774C11.7111 8.17709 11.7283 8.09064 11.7283 8.00333C11.7283 7.91601 11.7111 7.82956 11.6776 7.74891C11.6442 7.66826 11.5951 7.595 11.5333 7.53333L5.92 1.91999C5.6 1.59999 5.06666 1.59999 4.74666 1.91999C4.66906 1.9974 4.60749 2.08936 4.56548 2.1906C4.52347 2.29185 4.50184 2.40038 4.50184 2.50999C4.50184 2.6196 4.52347 2.72814 4.56548 2.82938C4.60749 2.93062 4.66906 3.02258 4.74666 3.09999L9.64 7.99999L4.74 12.9C4.42 13.2267 4.42 13.7533 4.74666 14.08Z\"\n                            fill=\"#9D3FE7\" />\n                    </svg>\n                </button>\n            </p>\n        </li>\n    </ul>\n</ng-container> -->\n", styles: ["@import\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\";:root{--font-family: \"Poppins\", sans-serif;--font-size: 16px;--line-height: 1.5;--corporate-purple: #9D3FE7;--corporate-gradient: 159.13deg, #9D3FE7 -24.13%, #602093 132.21%;--grayscale-black: #1A141F;--grayscale-white: #FFFFFF;--grayscale-hint-text: #4B3A5A;--grayscale-border: #ABA7AF;--grayscale-disabled: #D4D2D5;--grayscale-spacer: #D9D1E0;--grayscale-spacer-light: #E5E0EB;--grayscale-bg-light-grey: #F5F3F7;--informing-error: #D51A52;--informing-attention: #FF9500;--informing-approval: #00B998;--informing-link: #0F0BAB}*,*:before,*:after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}main{height:max-content}body{font-family:var(--font-family);font-size:var(--font-size);line-height:var(--line-height);min-height:100vh;vertical-align:middle}a{text-decoration:none}ul{padding:0;list-style:none}input[type=\"*\"]{outline:none;border:none;font-family:inherit;font-size:inherit}img{display:inline-block;max-width:100%}button{border:none;outline:none;background-color:transparent}@keyframes collapseAnimation{0%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}99%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}to{clip-path:polygon(0 0,100% 0,100% 0,0 0)}}@keyframes expandAnimation{0%{clip-path:polygon(0 0,100% 0,100% 0,0 0)}99%{clip-path:polygon(0 0,100% 0,100% 100%,0% 100%)}to{clip-path:none}}.ui-tree-view{width:fit-content;display:flex;flex-direction:column;padding-left:1rem}.ui-tree-view-item{font-weight:400;font-size:1em;line-height:148%;color:var(--grayscale-black)}.ui-tree-view-item-group{display:flex;align-items:center;gap:.5em}.ui-tree-view-item-group svg{cursor:pointer}.ui-tree-view-item-btn{display:flex;align-items:center;justify-content:center;padding:0}.ui-tree-view-item-btn:focus-within{outline-width:2px;outline-style:solid;outline-color:var(--corporate-purple);outline-offset:2px}.ui-tree-view-item-select{font:inherit}.ui-tree-view-item-select:focus-within{outline-width:2px;outline-style:solid;outline-color:var(--corporate-purple);outline-offset:1px}.ui-tree-view-item ul{overflow:hidden;height:0;animation:collapseAnimation .25s ease-in-out forwards}@media (prefers-reduced-motion: reduce){.ui-tree-view-item ul{animation:collapseAnimation forwards}}.ui-tree-view-item--expanded ul{height:auto;animation:expandAnimation .25s ease-in-out forwards}@media (prefers-reduced-motion: reduce){.ui-tree-view-item--expanded ul{animation:expandAnimation forwards}}.ui-tree-view-item--child{padding-left:calc(1rem - 8px);padding-top:.25rem;padding-bottom:.25rem}.ui-tree-view-icon{transition:transform ease-in-out .25s}@media (prefers-reduced-motion: reduce){.ui-tree-view-icon{transition:none}}.ui-tree-view-icon--rotate{transform:rotate(90deg)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { config: [{
                type: Input
            }], nodes: [{
                type: Input
            }], items: [{
                type: Input
            }], outputSelectItem: [{
                type: Output
            }] } });

class UITreeComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.items = [
            {
                id: '1',
                label: 'Frutas',
                children: [
                    {
                        id: '2',
                        label: 'Tropicales',
                        children: [
                            {
                                id: '3',
                                label: 'Piña'
                            },
                            {
                                id: '3',
                                label: 'Melocoton'
                            },
                        ]
                    },
                    {
                        id: '4',
                        label: 'Nacionales',
                        children: [
                            {
                                id: '5',
                                label: 'Naranjas'
                            },
                            {
                                id: '6',
                                label: 'Sandias'
                            },
                        ]
                    },
                ]
            },
            {
                id: '313',
                label: 'Countries',
                children: [
                    {
                        id: '411',
                        label: 'Spain'
                    },
                    {
                        id: '111',
                        label: 'Franch'
                    },
                    {
                        id: '311',
                        label: 'Italy'
                    }
                ]
            }
        ];
        this.nodes = [];
        this.withItemsSelected = false;
    }
    ngOnInit() {
        if (this.config) {
            this.withItemsSelected = (this.config.withSelected ?
                true :
                false);
        }
        this.buildNodes(this.items);
        console.log(this.nodes);
    }
    buildNodes(nodes) {
        const levelIndexes = {};
        for (let level = 0; level < nodes.length; level++) {
            if (!this.nodes[level]) {
                this.nodes[level] = [];
            }
            levelIndexes[level] = 0;
            const children = nodes[level]?.children;
            this.nodes[level].push({
                ...nodes[level],
                children: false,
                level,
                index: levelIndexes[level],
                isFather: true,
                contentChildren: (children ? true : false),
            });
            if (children) {
                this.processBuildNodes(level, levelIndexes, children);
            }
        }
    }
    processBuildNodes(level, levelIndexes, node) {
        if (!levelIndexes[level]) {
            levelIndexes[level] = 1;
        }
        node.map((eL, index) => {
            this.nodes[level].push({
                ...eL,
                children: true,
                level,
                index: levelIndexes[level]++,
                isFather: false,
                contentChildren: (eL?.children ? true : false),
            });
            if (eL?.children) {
                this.processBuildNodes(level, levelIndexes, eL.children);
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: UITreeComponent, selector: "ui-tree", inputs: { config: "config", items: "items" }, ngImport: i0, template: "<!-- <ui-tree-view\n    [config]=\"config\"\n    [nodes]=\"nodes\"\n/> -->\n", styles: [""], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ui-tree', standalone: false, changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- <ui-tree-view\n    [config]=\"config\"\n    [nodes]=\"nodes\"\n/> -->\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { config: [{
                type: Input
            }], items: [{
                type: Input
            }] } });

class UITreeModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: UITreeModule, declarations: [UITreeComponent,
            UITreeViewComponent], imports: [CommonModule], exports: [CommonModule,
            UITreeComponent,
            UITreeViewComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeModule, imports: [CommonModule, CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: UITreeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        UITreeComponent,
                        UITreeViewComponent
                    ],
                    exports: [
                        CommonModule,
                        UITreeComponent,
                        UITreeViewComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of manjon-ui
 */
// Calendar

/**
 * Generated bundle index. Do not edit.
 */

export { UICalendarComponent, UICheckboxComponent, UIInputSearchComponent, UIOptionComponent, UIOptionGroupComponent, UIRadiobuttonComponent, UITogglerComponent, UITreeComponent, UITreeModule, UITreeViewComponent };
//# sourceMappingURL=manjon-ui.mjs.map
