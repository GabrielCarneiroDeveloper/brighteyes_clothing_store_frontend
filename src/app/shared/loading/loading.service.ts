import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingSubject = new Subject<boolean>();

  getLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable().pipe(startWith(true));
  }

  start(): void {
    setTimeout(() => this.loadingSubject.next(true), 1000);
  }

  stop(): void {
    setTimeout(() => this.loadingSubject.next(false), 1000);
  }
}
