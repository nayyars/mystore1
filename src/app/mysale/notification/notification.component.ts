import { Component, Input, OnInit } from '@angular/core';
import { NotificationServiceService } from '../../../Services/SharedServices/notification-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  @Input() message:string ='';
  showNotification :boolean =true;
  isClassApplied:boolean=true;
     constructor(private NotificationServiceServi: NotificationServiceService){}
  ngOnInit(): void {
     this.NotificationServiceServi.getNotification().subscribe(recMessage=>{
         this.message =recMessage;
         this.showNotification = true;

        
        setTimeout(() => {
          this.hideNotification();

        }, 3000);

     })
    // ----------------
     // Hide notification after 3 seconds
    
  }
  hideNotification(): void {
    this.showNotification = false;
  }
}
