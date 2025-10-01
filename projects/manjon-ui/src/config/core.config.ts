import { Injectable } from "@angular/core";
import { ITranslation, TPrefixLanguage } from "../api/translation";

@Injectable( { providedIn: 'root'} )
export class CoreManjonUI {

  public translation: Record<TPrefixLanguage, ITranslation> = {
    'es-ES': {
      dayNames: ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'],
      dayNamesShort: ['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom'],
      dayNamesMin: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      monthNames: [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
      ],
      monthNamesShort: [
        'ene', 'feb', 'mar', 'abr', 'may', 'jun',
        'jul', 'ago', 'sep', 'oct', 'nov', 'dic',
      ],
      prevMonth: 'Mes anterior',
      nextMonth: 'Mes siguiente',
    },
    'en-US': {
      dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      dayNamesShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      dayNamesMin: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      monthNames: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
      ],
      monthNamesShort: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
    },
    'ca-CA': {
      dayNames: ['dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte', 'diumenge'],
      dayNamesShort: ['dil', 'dim', 'dix', 'dij', 'div', 'dis', 'diu'],
      dayNamesMin: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
      monthNames: [
        'gener', 'febrer', 'març', 'abril', 'maig', 'juny',
        'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre',
      ],
      monthNamesShort: [
        'gen', 'feb', 'mar', 'abr', 'mai', 'jun',
        'jul', 'ago', 'set', 'oct', 'nov', 'des',
      ],
      prevMonth: 'Mes anterior',
      nextMonth: 'Mes següent',
    },
  }

  public getTranslation(locale: TPrefixLanguage = 'en-US', key: keyof ITranslation) {
    if (!this.translation[locale][key]) {
      console.warn(`Translation not found for locale: ${locale}, key: ${key}`);
    }
    return this.translation[locale][key];
  }
}
