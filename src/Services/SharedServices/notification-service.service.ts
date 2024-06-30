import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor() { }
  private notificationSubject = new BehaviorSubject<string>('');

  getNotification() {
    return this.notificationSubject.asObservable();
  }

  showNotification(message: string) {
    this.notificationSubject.next(...[message]);
  }

  hideNotification() {
    this.notificationSubject.next('');
  }
}
