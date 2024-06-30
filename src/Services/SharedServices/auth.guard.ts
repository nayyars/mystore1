import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginService } from './login.service';
import e from 'express';

@Injectable({
  providedIn: 'root'
})

export class authGuard implements CanActivate{
  constructor(private loginservice:AuthService, private _LoginService:LoginService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean
  {
    // if auth gaurd is false then , user can not log in into the system . if ture , yes can 
    let islogin=true;
    islogin= this._LoginService.IsLoggedIn();
     
    if(islogin){
       return islogin;
    }
    else{
       return false;
    }

   /*  if(islogin){
                  if(this.loginservice.getToken())
                    {
                        return true;
                    } 
                  else
                    {
                          return false;
                    }
               }
           else
              {
                   return false;
               } */
  }
  
}
