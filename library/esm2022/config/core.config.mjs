import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export class CoreManjonUI {
    constructor() {
        this.translationSource = new Subject();
        this.translationObserver = this.translationSource.asObservable();
        this.translation = {
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
                dayNamesShort: ['dil', 'dit', 'dic', 'dij', 'div', 'dis', 'dig'],
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
        };
    }
    getTranslation(locale = 'en-US', key) {
        if (!this.translation[locale][key]) {
            console.warn(`Translation not found for locale: ${locale}, key: ${key}`);
        }
        return this.translation[locale][key];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CoreManjonUI, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CoreManjonUI, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: CoreManjonUI, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYW5qb24tdWkvc3JjL2NvbmZpZy9jb3JlLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRy9CLE1BQU0sT0FBTyxZQUFZO0lBRHpCO1FBR1Usc0JBQWlCLEdBQUcsSUFBSSxPQUFPLEVBQWdCLENBQUM7UUFDeEQsd0JBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXJELGdCQUFXLEdBQTBDO1lBQzFELE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUM7Z0JBQ3BGLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDaEUsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNoRCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPO29CQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVc7aUJBQ3JFO2dCQUNELGVBQWUsRUFBRTtvQkFDZixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0JBQ3hDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztpQkFDekM7Z0JBQ0QsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFNBQVMsRUFBRSxlQUFlO2FBQzNCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztnQkFDeEYsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO2dCQUNoRSxXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQ2hELFVBQVUsRUFBRTtvQkFDVixTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU07b0JBQ3RELE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVTtpQkFDakU7Z0JBQ0QsZUFBZSxFQUFFO29CQUNmLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztvQkFDeEMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO2lCQUN6QztnQkFDRCxTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixTQUFTLEVBQUUsWUFBWTthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDUCxRQUFRLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7Z0JBQzNGLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztnQkFDaEUsV0FBVyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUNoRCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNO29CQUNsRCxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVU7aUJBQ2pFO2dCQUNELGVBQWUsRUFBRTtvQkFDZixLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7b0JBQ3hDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztpQkFDekM7Z0JBQ0QsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLFNBQVMsRUFBRSxhQUFhO2FBQ3pCO1NBQ0YsQ0FBQTtLQVFGO0lBTlEsY0FBYyxDQUFDLFNBQTBCLE9BQU8sRUFBRSxHQUF1QjtRQUM5RSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxJQUFJLENBQUMscUNBQXFDLE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzNFLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQzsrR0ExRFUsWUFBWTttSEFBWixZQUFZLGNBREUsTUFBTTs7NEZBQ3BCLFlBQVk7a0JBRHhCLFVBQVU7bUJBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJVHJhbnNsYXRpb24sIFRQcmVmaXhMYW5ndWFnZSB9IGZyb20gXCIuLi9hcGkvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSggeyBwcm92aWRlZEluOiAncm9vdCd9IClcbmV4cG9ydCBjbGFzcyBDb3JlTWFuam9uVUkge1xuXG4gIHByaXZhdGUgdHJhbnNsYXRpb25Tb3VyY2UgPSBuZXcgU3ViamVjdDxJVHJhbnNsYXRpb24+KCk7XG4gIHRyYW5zbGF0aW9uT2JzZXJ2ZXIgPSB0aGlzLnRyYW5zbGF0aW9uU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIHB1YmxpYyB0cmFuc2xhdGlvbjogUmVjb3JkPFRQcmVmaXhMYW5ndWFnZSwgSVRyYW5zbGF0aW9uPiA9IHtcbiAgICAnZXMtRVMnOiB7XG4gICAgICBkYXlOYW1lczogWydsdW5lcycsICdtYXJ0ZXMnLCAnbWnDqXJjb2xlcycsICdqdWV2ZXMnLCAndmllcm5lcycsICdzw6FiYWRvJywgJ2RvbWluZ28nXSxcbiAgICAgIGRheU5hbWVzU2hvcnQ6IFsnbHVuJywgJ21hcicsICdtacOpJywgJ2p1ZScsICd2aWUnLCAnc8OhYicsICdkb20nXSxcbiAgICAgIGRheU5hbWVzTWluOiBbJ0wnLCAnTScsICdYJywgJ0onLCAnVicsICdTJywgJ0QnXSxcbiAgICAgIG1vbnRoTmFtZXM6IFtcbiAgICAgICAgJ2VuZXJvJywgJ2ZlYnJlcm8nLCAnbWFyem8nLCAnYWJyaWwnLCAnbWF5bycsICdqdW5pbycsXG4gICAgICAgICdqdWxpbycsICdhZ29zdG8nLCAnc2VwdGllbWJyZScsICdvY3R1YnJlJywgJ25vdmllbWJyZScsICdkaWNpZW1icmUnLFxuICAgICAgXSxcbiAgICAgIG1vbnRoTmFtZXNTaG9ydDogW1xuICAgICAgICAnZW5lJywgJ2ZlYicsICdtYXInLCAnYWJyJywgJ21heScsICdqdW4nLFxuICAgICAgICAnanVsJywgJ2FnbycsICdzZXAnLCAnb2N0JywgJ25vdicsICdkaWMnLFxuICAgICAgXSxcbiAgICAgIHByZXZNb250aDogJ01lcyBhbnRlcmlvcicsXG4gICAgICBuZXh0TW9udGg6ICdNZXMgc2lndWllbnRlJyxcbiAgICB9LFxuICAgICdlbi1VUyc6IHtcbiAgICAgIGRheU5hbWVzOiBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J10sXG4gICAgICBkYXlOYW1lc1Nob3J0OiBbJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0JywgJ1N1biddLFxuICAgICAgZGF5TmFtZXNNaW46IFsnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnLCAnUyddLFxuICAgICAgbW9udGhOYW1lczogW1xuICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXG4gICAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcicsXG4gICAgICBdLFxuICAgICAgbW9udGhOYW1lc1Nob3J0OiBbXG4gICAgICAgICdKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsXG4gICAgICAgICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYycsXG4gICAgICBdLFxuICAgICAgcHJldk1vbnRoOiAnUHJldmlvdXMgTW9udGgnLFxuICAgICAgbmV4dE1vbnRoOiAnTmV4dCBNb250aCcsXG4gICAgfSxcbiAgICAnY2EtQ0EnOiB7XG4gICAgICBkYXlOYW1lczogWydkaWxsdW5zJywgJ2RpbWFydHMnLCAnZGltZWNyZXMnLCAnZGlqb3VzJywgJ2RpdmVuZHJlcycsICdkaXNzYWJ0ZScsICdkaXVtZW5nZSddLFxuICAgICAgZGF5TmFtZXNTaG9ydDogWydkaWwnLCAnZGl0JywgJ2RpYycsICdkaWonLCAnZGl2JywgJ2RpcycsICdkaWcnXSxcbiAgICAgIGRheU5hbWVzTWluOiBbJ0wnLCAnTScsICdYJywgJ0onLCAnVicsICdTJywgJ0QnXSxcbiAgICAgIG1vbnRoTmFtZXM6IFtcbiAgICAgICAgJ2dlbmVyJywgJ2ZlYnJlcicsICdtYXLDpycsICdhYnJpbCcsICdtYWlnJywgJ2p1bnknLFxuICAgICAgICAnanVsaW9sJywgJ2Fnb3N0JywgJ3NldGVtYnJlJywgJ29jdHVicmUnLCAnbm92ZW1icmUnLCAnZGVzZW1icmUnLFxuICAgICAgXSxcbiAgICAgIG1vbnRoTmFtZXNTaG9ydDogW1xuICAgICAgICAnZ2VuJywgJ2ZlYicsICdtYXInLCAnYWJyJywgJ21haScsICdqdW4nLFxuICAgICAgICAnanVsJywgJ2FnbycsICdzZXQnLCAnb2N0JywgJ25vdicsICdkZXMnLFxuICAgICAgXSxcbiAgICAgIHByZXZNb250aDogJ01lcyBhbnRlcmlvcicsXG4gICAgICBuZXh0TW9udGg6ICdNZXMgc2Vnw7xlbnQnLFxuICAgIH0sXG4gIH1cblxuICBwdWJsaWMgZ2V0VHJhbnNsYXRpb24obG9jYWxlOiBUUHJlZml4TGFuZ3VhZ2UgPSAnZW4tVVMnLCBrZXk6IGtleW9mIElUcmFuc2xhdGlvbikge1xuICAgIGlmICghdGhpcy50cmFuc2xhdGlvbltsb2NhbGVdW2tleV0pIHtcbiAgICAgIGNvbnNvbGUud2FybihgVHJhbnNsYXRpb24gbm90IGZvdW5kIGZvciBsb2NhbGU6ICR7bG9jYWxlfSwga2V5OiAke2tleX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25bbG9jYWxlXVtrZXldO1xuICB9XG59XG4iXX0=