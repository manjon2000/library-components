import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalendarPeriodService {

  private _boundingRect: BehaviorSubject<DOMRect | null> = new BehaviorSubject<DOMRect | null>(null);
  public boundingRect$: Observable<DOMRect | null> = this._boundingRect.asObservable();

  setBoundingRect(rect: DOMRect) {
    this._boundingRect.next(rect);
  }
}
