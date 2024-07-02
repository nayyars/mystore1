import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginService } from '../../../Services/SharedServices/login.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor( private _LoginService:LoginService, private _router:Router){
       const username=this._LoginService.GetUserName();
       if(username=='nayyar'){
          
       } else{
        this._router.navigate(['home/lastorders']);
       }
    }
}
