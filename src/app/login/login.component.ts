import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/SharedServices/auth.service';
import { error } from 'console';
import { Users } from '../../Services/Models/users';
import { LoginService } from '../../Services/SharedServices/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  txtPassword:string =''; txtUserName:string=''; 
  loginSuccess : boolean=false;
  constructor(private service: AuthService,private route : Router, private _LoginService:LoginService){
  }
  login(useranme:string , password:string){
    /*  this.service.login(useranme,password)
     {
            
     } */
     console.log('login comp .');
     
     this._LoginService.login(useranme, password);
     console.log(this._LoginService.IsLoggedIn());

  }
}
