import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Init } from 'v8';
import { AuthService } from '../../../Services/SharedServices/auth.service';
import { LoginService } from '../../../Services/SharedServices/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  ImageDP=''
  goForBuy:string='../all';
  oldOrders:string ='lastorders'
  isVisible:boolean=false;
  username:string='';
 constructor(private service : AuthService , private _LoginService: LoginService , private _Router: Router){
      const currenyusername=this._LoginService.GetUserName();
      this.username=currenyusername;
      if(currenyusername==='nayyar'){

       this.isVisible=true;
      }
      else{

        this. isVisible=false;
 
      }
 }
ngOnInit(): void {
  this.ImageDP='logos.jpg';
}
  // ----------- logout ----------
  Logout(){
     this._LoginService.Logout();
     this._Router.navigate(['login']);
  }
}
