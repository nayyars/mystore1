import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Users } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService  implements OnInit{
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';
   private baseLoginPostApi: string ='http://localhost:3000/users';
   
  constructor(private http:HttpClient, private router : Router) {
    //this.baseLoginPostApi="https://6681d80c04acc3545a07b615.mockapi.io/users";
    //this.baseLoginPostApi="https://api.jsonbin.io/v3/b/6681f52dacd3cb34a85f94c5";
   }
  ngOnInit(): void {

  }

   // ---------  login method to check login in angular ------- 
   login(username:string ,password:string ){

      //   username and pasword is  indivisual so we need to create json data 
      const loginData = {username , password };
      
      return this.http.get<Users[]>(this.baseLoginPostApi).subscribe({
        next:userslist=>{ 
                const isexist=userslist.find(aUser=>aUser.username==username && aUser.password==password);

                if(isexist){
                  console.log(isexist);
                  // ---- convert userdata in  json string because localstorage only support string ---
                  const jsonUserData=JSON.stringify(loginData);
                  this.setToken(jsonUserData);
                  this.router.navigate(['all']);
                }
                else{
                  console.log(this.IsLoggedIn());
                  alert('Invalid credentials.');
                  this.router.navigate(['login']);
                  console.log('user dont exists . check your username and password that provided.');
                }
        },
        error:error=>{
          console.log('login service error .');
        }
      });
   }
   

   // ---------Create a local storange ------ 
   setToken(user:any){
    if(this.isLocalStorageAvailable){
        localStorage.setItem('logintoken',user);}
   }
   getToken(){
    if(this.isLocalStorageAvailable){
    return localStorage.getItem("logintoken");}
    else{
       return localStorage.getItem('');
    }
   }
   clearToken(){
    if(this.isLocalStorageAvailable){
    localStorage.removeItem('logintoken');}
    else{
      return localStorage.removeItem('');
    }
   }
   IsLoggedIn():boolean{
    if(this.isLocalStorageAvailable){
      if(this.getToken())
      {return true; }
      else 
      {return false;}
}  else{ return false; }
   }
   Logout(){
     this.clearToken();
   }

   // ------ Get User Name-----
   GetUserName():string{
      var username  =''
      if(this.IsLoggedIn()){
        var myToken= this.getToken();
        var myTokenParsed=JSON.parse(myToken? myToken: '');
        const userNam=myTokenParsed.username;
        username=userNam;
        return username;
      }
    return username;
   }
}
