import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InactivityService {

  userActivity;
  userInactive: Subject<any> = new Subject();

  constructor() {

  }

  setUserTimeOut() {
    this.userActivity = setInterval (()=>{
      this.userInactive.next(true)
    },30000);
  }

  clearUserTimeout() {
    clearInterval(this.userActivity);
  }
}
