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
- [x] Algoritmo de descomposición mensual en semanas
- [x] Selección de una fecha única.
- [x] Rango de fechas (opcional).
- [ ] Define fechas mínimas y máximas.
- [x] Soporte para [ISO 8601](https://es.wikipedia.org/wiki/ISO_8601)
- [x] Traducción de nombres de días.
- [ ] Traducción de nombres de meses.
- [ ] Adaptación al primer día de la semana (domingo o lunes).
- [ ] Fechas Inválidas: Bloquear días no permitidos, como días pasados o festivos.
- [x] Generar la fecha en formato unix
