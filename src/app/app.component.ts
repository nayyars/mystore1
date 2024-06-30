import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationServiceService } from '../Services/SharedServices/notification-service.service';
import { NotificationComponent } from './mysale/notification/notification.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NotificationComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MyStore';
  showNotification: boolean = false;
  notificationMessage: string = '';
  constructor( private receiveNotification:NotificationServiceService){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
      this.receiveNotification.getNotification().subscribe(message => {
        this.notificationMessage = message;
        this.showNotification = true;
      });
  }

}
