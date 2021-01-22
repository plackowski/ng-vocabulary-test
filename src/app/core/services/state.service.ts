import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private isTestReady = new BehaviorSubject<boolean>(false);

  public isTestReadyToStart(): Observable<boolean> {
    return this.isTestReady.asObservable();
  }

  public markTestAsReady(): void {
    this.isTestReady.next(true);
  }
}
