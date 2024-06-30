import { Component, OnInit } from '@angular/core';
import {  NavigationEnd, Router, RouterLink } from '@angular/router';
import { CartService } from '../../../Services/SharedServices/cart.service';
import { NotificationComponent } from '../notification/notification.component';
import { event } from 'jquery';
import { LoginService } from '../../../Services/SharedServices/login.service';

@Component({
  selector: 'app-mysaleheader',
  standalone: true,
  imports: [RouterLink,NotificationComponent],
  templateUrl: './mysaleheader.component.html',
  styleUrl: './mysaleheader.component.css'
})
export class MysaleheaderComponent implements OnInit{
  target:string='/home/user';
  CurrentUser:string='Unknown'
constructor(private myrouter : Router, private _LoginService:LoginService){
  this.CurrentUser=  this._LoginService.GetUserName();
}



  ngOnInit(): void {
  }


  // -------------- logout -------
  Logout(){
    this._LoginService.Logout();
    this.myrouter.navigate(['login']);
 }
}
