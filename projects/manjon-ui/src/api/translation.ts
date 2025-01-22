export type TPrefixLanguage = 'es-ES' | 'en-US' | 'ca-CA';
export interface ITranslation {
  dayNames?: string[],
  dayNamesShort?: string[],
  dayNamesMin?: string[],
  monthNames?: string[],
  monthNamesShort?: string[],
  prevMonth?: string,
  nextMonth?: string,
}
