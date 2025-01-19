## Validaciones
- Años Bisiestos:
  - Un año es bisiesto si:
    - Es divisible entre 4.
    - Pero no es divisible entre 100, a menos que también sea divisible entre 400.
    - Impacto: Los años bisiestos tienen 29 días en febrero.
- Obtener el primer dia del mes/año
  - Algoritmo de Tomohiko Sakamoto

**Fórmula:**
   \[
   h = (y + \left\lfloor \frac{y}{4} \right\rfloor - \left\lfloor \frac{y}{100} \right\rfloor + \left\lfloor \frac{y}{400} \right\rfloor + \left\lfloor \frac{31m}{12} \right\rfloor + d) \mod 7\]

   **Donde:**
   - \( h \): Día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado).
   - \( d \): Día del mes.
   - \( m \): Mes (marzo = 3, ..., enero = 13, febrero = 14).
   - \( y \): Año.

- Determinar la semana del año según el estándar ISO 8601.
- Aunque no afecta directamente la lógica del calendario, considera la hora local para calcular el inicio y fin de los días.

## Funcionalidades
- [ ] Revisar Ticks1970
- [ ] Algoritmo de descomposición mensual en semanas
- [ ] Selección de una fecha única.
- [ ] Rango de fechas (opcional).
- [ ] Define fechas mínimas y máximas.
- [ ] Soporte para [ISO 8601](https://es.wikipedia.org/wiki/ISO_8601)
- [ ] Traducción de nombres de días y meses.
- [ ] Adaptación al primer día de la semana (domingo o lunes).
- [ ] Fechas Inválidas: Bloquear días no permitidos, como días pasados o festivos.
- [ ] Traducción de nombres de días y meses.
- [ ] Generar la fecha en formato unix


## Entradas

- initDate: `Date`
- type: `'single' | 'range' | 'multiple'`
- isShowDaysOtherMonth: `boolean`
- limitYearsPreview: `number`
- isResponsive: `boolean`
- isSelectable: `boolean`
- isSelectCurrentDay: `boolean`

## Salidas
- dateSelect: `EventEmmiter<Date>`
- dateRangeSelect: `EventEmmiter<IDatesRange>`
- dateMultipleSelect: `EventEmmiter<Array<Date>>`

## Parametros

## Methodos
- `getDaysOfWeek(): void`


```ts
import { EventEmitter } from 'events';

// Definición de un rango de fechas
interface IDatesRange {
  startDate: Date;
  endDate: Date;
}

// Interfaz principal
interface ICalendar {
  // Entradas
  initDate: Date; // Fecha inicial
  type: 'single' | 'range' | 'multiple'; // Tipo de selección
  isShowDaysOtherMonth: boolean; // Mostrar días de otros meses
  limitYearsPreview: number; // Límite de años para previsualizar
  isResponsive: boolean; // Soporte para diseño responsivo
  isSelectable: boolean; // Permitir selección de fechas
  isSelectCurrentDay: boolean; // Seleccionar automáticamente el día actual

  // Validaciones
  isLeapYear(year: number): boolean; // Validar si un año es bisiesto
  getFirstDayOfMonth(year: number, month: number): number; // Obtener el primer día del mes
  getWeekOfYear(date: Date): number; // Determinar la semana del año según ISO 8601
  isDateValid(date: Date): boolean; // Validar si una fecha es válida (bloqueo de días pasados o festivos)

  // Funcionalidades
  decomposeMonthIntoWeeks(year: number, month: number): Array<Array<Date | null>>; // Algoritmo de descomposición mensual en semanas
  selectDate(date: Date): void; // Selección de una fecha única
  selectDateRange(range: IDatesRange): void; // Selección de un rango de fechas
  setMinMaxDates(minDate: Date, maxDate: Date): void; // Definir fechas mínimas y máximas
  formatToUnix(date: Date): number; // Generar fecha en formato Unix
  translateDayNames(language: string): Array<string>; // Traducción de nombres de días
  translateMonthNames(language: string): Array<string>; // Traducción de nombres de meses
  adaptToFirstDayOfWeek(startWithMonday: boolean): void; // Adaptar al primer día de la semana (domingo o lunes)

  // Salidas
  dateSelect: EventEmitter; // Emite el evento al seleccionar una fecha única
  dateRangeSelect: EventEmitter; // Emite el evento al seleccionar un rango de fechas
  dateMultipleSelect: EventEmitter; // Emite el evento al seleccionar múltiples fechas
}
```
