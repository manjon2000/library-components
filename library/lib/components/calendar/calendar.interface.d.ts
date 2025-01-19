export type TTypeCalendar = 'single' | 'range';
export interface IDatesRange {
    start: Date;
    end: Date;
}
export interface IWeeks {
    unix?: number;
    ISO8601?: string;
    day?: number;
    month?: number;
    year?: number;
    isAnotherMonth?: boolean;
    isSelected?: boolean;
}
export type TDaysFromAnotherMonthEvent = 'prev' | 'next';
