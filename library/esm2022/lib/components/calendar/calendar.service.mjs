import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class CalendarService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hbmpvbi11aS9zcmMvbGliL2NvbXBvbmVudHMvY2FsZW5kYXIvY2FsZW5kYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQXVCLE1BQU0sTUFBTSxDQUFDOztBQUs1RCxNQUFNLE9BQU8sZUFBZTtJQUsxQjtRQUhRLGVBQVUsR0FBZ0MsSUFBSSxlQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7UUFDL0UsZUFBVSxHQUEyQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRTNELENBQUM7SUFFVix1QkFBdUIsQ0FDNUIsSUFBWSxFQUNaLEtBQWEsRUFDYixJQUFtQixFQUNuQixvQkFBNkIsRUFDN0IsU0FBZSxFQUNmLE9BQWM7UUFHZCxNQUFNLG1CQUFtQixHQUFHLENBQUMsSUFBWSxFQUFFLEtBQWEsRUFBVSxFQUFFO1lBQ2xFLE1BQU0sV0FBVyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xHLE9BQU8sV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7UUFDRixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEUsTUFBTSxnQkFBZ0IsR0FBRyxt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QUFJLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQ3ZDLENBQUM7SUFDSixDQUFDOytHQTFOVSxlQUFlO21IQUFmLGVBQWUsY0FGZCxNQUFNOzs0RkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElXZWVrcywgVERheXNGcm9tQW5vdGhlck1vbnRoRXZlbnQsIFRUeXBlQ2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyLmludGVyZmFjZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9pbml0V2Vla3M6IEJlaGF2aW9yU3ViamVjdDxJV2Vla3NbXVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVdlZWtzW11bXT4oW10pO1xuICBwdWJsaWMgaW5pdFdlZWtzJDogT2JzZXJ2YWJsZTxJV2Vla3NbXVtdPiA9IHRoaXMuX2luaXRXZWVrcy5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyBkZWNvbXBvc2VNb250aEludG9XZWVrcyhcbiAgICB5ZWFyOiBudW1iZXIsXG4gICAgbW9udGg6IG51bWJlcixcbiAgICB0eXBlOiBUVHlwZUNhbGVuZGFyLFxuICAgIGlzU2hvd0RheXNPdGhlck1vbnRoOiBib29sZWFuLFxuICAgIHN0YXJ0RGF0ZTogRGF0ZSxcbiAgICBlbmREYXRlPzogRGF0ZVxuICApOiB2b2lkIHtcblxuICAgIGNvbnN0IGdldFRvdGFsRGF5c0luTW9udGggPSAoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICAgIGNvbnN0IGRheXNJbk1vbnRoID0gWzMxLCB0aGlzLmlzTGVhcFllYXIoeWVhcikgPyAyOSA6IDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG4gICAgICByZXR1cm4gZGF5c0luTW9udGhbbW9udGggLSAxXTtcbiAgICB9O1xuICAgIGNvbnN0IGRpZmZEYXlzT2ZGaXJzdFdlZWsgPSB0aGlzLmdldERpZmZEYXlzT2ZXZWVrKHllYXIsIG1vbnRoKTtcbiAgICBjb25zdCB0b3RhbERheXNJbk1vbnRoID0gZ2V0VG90YWxEYXlzSW5Nb250aCh5ZWFyLCBtb250aCk7XG5cbiAgICBjb25zdCB3ZWVrczogSVdlZWtzW11bXSA9IFtdO1xuICAgIGxldCBjdXJyZW50V2VlazogSVdlZWtzW10gPSBbXTtcblxuICAgIGlmIChpc1Nob3dEYXlzT3RoZXJNb250aCkge1xuICAgICAgY29uc3QgcHJldk1vbnRoID0gbW9udGggLSAxIDwgMSA/IDEyIDogbW9udGggLSAxO1xuICAgICAgY29uc3QgcHJldlllYXIgPSBtb250aCAtIDEgPCAxID8geWVhciAtIDEgOiB5ZWFyO1xuICAgICAgY29uc3QgdG90YWxEYXlzSW5QcmV2TW9udGggPSBnZXRUb3RhbERheXNJbk1vbnRoKHByZXZZZWFyLCBwcmV2TW9udGgpO1xuXG4gICAgICBmb3IgKGxldCBpID0gZGlmZkRheXNPZkZpcnN0V2VlazsgaSA+IDA7IGktLSkge1xuICAgICAgICBjb25zdCBwcmV2RGF0ZSA9IG5ldyBEYXRlKHByZXZZZWFyLCBwcmV2TW9udGggLSAxLCB0b3RhbERheXNJblByZXZNb250aCAtIGkgKyAxKTtcbiAgICAgICAgY3VycmVudFdlZWsucHVzaCh7XG4gICAgICAgICAgaXNBbm90aGVyTW9udGg6IHRydWUsXG4gICAgICAgICAgZGF5OiBwcmV2RGF0ZS5nZXREYXRlKCksXG4gICAgICAgICAgbW9udGg6IHByZXZEYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgICAgICAgIHllYXI6IHByZXZEYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgdW5peDogTWF0aC5mbG9vcihwcmV2RGF0ZS5nZXRUaW1lKCkgLyAxMDAwKSxcbiAgICAgICAgICBJU084NjAxOiBgJHtwcmV2RGF0ZS5nZXRGdWxsWWVhcigpfS0ke3ByZXZEYXRlLmdldE1vbnRoKCkgKyAxfS0ke3ByZXZEYXRlLmdldERhdGUoKX1gLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmRGF5c09mRmlyc3RXZWVrOyBpKyspIHtcbiAgICAgICAgY3VycmVudFdlZWsucHVzaCh7IGRheTogLTEgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgZGF5ID0gMTsgZGF5IDw9IHRvdGFsRGF5c0luTW9udGg7IGRheSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcbiAgICAgIGxldCBidWlsZEN1cnJlbnRXZWVrOiBJV2Vla3MgPSB7XG4gICAgICAgIGlzQW5vdGhlck1vbnRoOiBmYWxzZSxcbiAgICAgICAgZGF5OiBjdXJyZW50RGF0ZS5nZXREYXRlKCksXG4gICAgICAgIG1vbnRoOiBjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSxcbiAgICAgICAgeWVhcjogY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgdW5peDogTWF0aC5mbG9vcihjdXJyZW50RGF0ZS5nZXRUaW1lKCkgLyAxMDAwKSxcbiAgICAgICAgSVNPODYwMTogYCR7Y3VycmVudERhdGUuZ2V0RnVsbFllYXIoKX0tJHtjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMX0tJHtjdXJyZW50RGF0ZS5nZXREYXRlKCl9YCxcbiAgICAgIH1cbiAgICAgIGlmKHR5cGUgPT09ICdyYW5nZScgJiYgZW5kRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0RGF0ZVRvVW5peCA9IHRoaXMuZm9ybWF0VG9Vbml4KHN0YXJ0RGF0ZSk7XG4gICAgICAgIGNvbnN0IGVuZERhdGVUb1VuaXggPSB0aGlzLmZvcm1hdFRvVW5peChlbmREYXRlKTtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGVUb1VuaXggPSB0aGlzLmZvcm1hdFRvVW5peChjdXJyZW50RGF0ZSlcblxuICAgICAgICBpZihcbiAgICAgICAgICBjdXJyZW50RGF0ZVRvVW5peCA+PSBzdGFydERhdGVUb1VuaXggJiZcbiAgICAgICAgICBjdXJyZW50RGF0ZVRvVW5peCA8PSBlbmREYXRlVG9Vbml4XG4gICAgICAgICkge1xuICAgICAgICAgIGJ1aWxkQ3VycmVudFdlZWsuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgfWVsc2Uge1xuICAgICAgICBidWlsZEN1cnJlbnRXZWVrLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudFdlZWsucHVzaChidWlsZEN1cnJlbnRXZWVrKTtcblxuICAgICAgaWYgKGN1cnJlbnRXZWVrLmxlbmd0aCA9PT0gNykge1xuICAgICAgICB3ZWVrcy5wdXNoKGN1cnJlbnRXZWVrKTtcbiAgICAgICAgY3VycmVudFdlZWsgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFdlZWsubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgbmV4dE1vbnRoID0gbW9udGggKyAxID4gMTIgPyAxIDogbW9udGggKyAxO1xuICAgICAgY29uc3QgbmV4dFllYXIgPSBtb250aCArIDEgPiAxMiA/IHllYXIgKyAxIDogeWVhcjtcbiAgICAgIGxldCBuZXh0RGF5ID0gMTtcblxuICAgICAgd2hpbGUgKGN1cnJlbnRXZWVrLmxlbmd0aCA8IDcpIHtcbiAgICAgICAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZShuZXh0WWVhciwgbmV4dE1vbnRoIC0gMSwgbmV4dERheSk7XG4gICAgICAgIGN1cnJlbnRXZWVrLnB1c2goe1xuICAgICAgICAgIGlzQW5vdGhlck1vbnRoOiB0cnVlLFxuICAgICAgICAgIGRheTogbmV4dERhdGUuZ2V0RGF0ZSgpLFxuICAgICAgICAgIG1vbnRoOiBuZXh0RGF0ZS5nZXRNb250aCgpICsgMSxcbiAgICAgICAgICB5ZWFyOiBuZXh0RGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgIHVuaXg6IE1hdGguZmxvb3IobmV4dERhdGUuZ2V0VGltZSgpIC8gMTAwMCksXG4gICAgICAgICAgSVNPODYwMTogYCR7bmV4dERhdGUuZ2V0RnVsbFllYXIoKX0tJHtuZXh0RGF0ZS5nZXRNb250aCgpICsgMX0tJHtuZXh0RGF0ZS5nZXREYXRlKCl9YCxcbiAgICAgICAgfSk7XG4gICAgICAgIG5leHREYXkrKztcbiAgICAgIH1cbiAgICAgIHdlZWtzLnB1c2goY3VycmVudFdlZWspO1xuICAgIH1cblxuICAgIHRoaXMuX2luaXRXZWVrcy5uZXh0KHdlZWtzKTtcbiAgfVxuXG4gIHB1YmxpYyBvblNlbGVjdGVkRGF0ZVNpbmdsZShJU084NjAxOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBEYXRlIHtcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoSVNPODYwMSBhcyBzdHJpbmcpO1xuICAgIG5ld0RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICByZXR1cm4gbmV3RGF0ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXlPZldlZWsoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF5KCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF5c0Zyb21Bbm90aGVyTW9udGgoXG4gICAgZXZlbnQ6IFREYXlzRnJvbUFub3RoZXJNb250aEV2ZW50LFxuICAgIGRhdGU6IERhdGUsXG4gICAgaW5kZXg6IG51bWJlclxuICApOiBEYXRlIHtcbiAgICBzd2l0Y2goZXZlbnQpIHtcbiAgICAgIGNhc2UgJ3ByZXYnOlxuICAgICAgICByZXR1cm4gbmV3IERhdGUoXG4gICAgICAgICAgbmV3IERhdGUoZGF0ZSkuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIChpbmRleCArIDEpKVxuICAgICAgICApO1xuICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShcbiAgICAgICAgICBuZXcgRGF0ZShkYXRlKS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgKGluZGV4ICsgMSkpXG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldERpZmZEYXlzT2ZXZWVrKFxuICAgIHllYXI6IG51bWJlcixcbiAgICBtb250aDogbnVtYmVyXG4gICk6IG51bWJlciB7XG5cbiAgICBjb25zdCBtID0gbW9udGggPCAzID8gbW9udGggKyAxMiA6IG1vbnRoO1xuICAgIGNvbnN0IHkgPSBtb250aCA8IDMgPyB5ZWFyIC0gMSA6IHllYXI7XG4gICAgY29uc3QgayA9IE1hdGguZmxvb3IoeSAvIDEwMCk7XG4gICAgY29uc3QgaiA9IHkgJSAxMDA7XG4gICAgY29uc3QgZGF5T2ZXZWVrID1cbiAgICAoMSArXG4gICAgICBNYXRoLmZsb29yKCgxMyAqIChtICsgMSkpIC8gNSkgK1xuICAgICAgaiArXG4gICAgICBNYXRoLmZsb29yKGogLyA0KSArXG4gICAgICBNYXRoLmZsb29yKGsgLyA0KSAtXG4gICAgICAyICogaykgJVxuICAgIDc7XG5cbiAgICByZXR1cm4gKGRheU9mV2VlayArIDUpICUgNztcbiAgfVxuXG4gIHB1YmxpYyBnZXRGaXJzdERheU9mTW9udGgoXG4gICAgeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyXG4gICk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCAobW9udGggLSAxKSwgMSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TGFzdERheU9mTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogRGF0ZSB7XG4gICAgY29uc3QgZmlyc3REYXlNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMSk7XG5cbiAgICByZXR1cm4gbmV3IERhdGUobmV3IERhdGUoZmlyc3REYXlNb250aCkuc2V0RGF0ZShmaXJzdERheU1vbnRoLmdldERhdGUoKSAtIDEpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXlzSW5Nb250aChkYXRlOiBEYXRlLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBwcmV2RGF0ZSA9IG5ldyBEYXRlKGRhdGUpLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBpbmRleCk7XG4gICAgY29uc29sZS5sb2coJ0RhdGU6JywgcHJldkRhdGUpXG4gICAgY29uc3QgZGF5ID0gdGhpcy5nZXREYXkobmV3IERhdGUocHJldkRhdGUpKTtcbiAgICBjb25zdCBtb250aCA9IHRoaXMuZ2V0TW9udGgobmV3IERhdGUocHJldkRhdGUpKTtcbiAgICBjb25zdCB5ZWFyID0gdGhpcy5nZXRZZWFyKG5ldyBEYXRlKHByZXZEYXRlKSk7XG5cbiAgICByZXR1cm4gcGFyc2VJbnQoXG4gICAgICBuZXcgRGF0ZShwcmV2RGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VzLUVTJywge2RheTogJzItZGlnaXQnfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdFRvVW5peChkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgbmV3RGF0ZS5zZXRIb3VycygwLDAsMCwwKVxuICAgIHJldHVybiBNYXRoLmZsb29yKG5ld0RhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0VG90YWxEYXlzSW5Nb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vIEVsIG1lcyBzaWd1aWVudGUgYWwgYWN0dWFsLCB5IGVsIGTDrWEgMCBkZWwgbWVzIHNpZ3VpZW50ZSBkZXZ1ZWx2ZSBlbCDDumx0aW1vIGTDrWEgZGVsIG1lcyBhY3R1YWwuXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIGdldERheShkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoXG4gICAgICBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlcy1FUycsIHtkYXk6ICcyLWRpZ2l0J30pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXlUb1N0cmluZyhkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygnZXMtRVMnLCB7ZGF5OiAnMi1kaWdpdCd9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb250aChkYXRlOiBEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoXG4gICAgICBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlcy1FUycsIHttb250aDogJzItZGlnaXQnfSlcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldE1vbnRoVG9TdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VzLUVTJywge21vbnRoOiAnMi1kaWdpdCd9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRZZWFyKGRhdGU6IERhdGUpOiBudW1iZXIge1xuICAgIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIGlzTGVhcFllYXIoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHllYXIgJSA0ID09PSAwICYmXG4gICAgICAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==