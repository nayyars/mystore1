import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Users } from '../Models/users';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseApi="http://localhost:3000/users";    // Get User   , geturl and object

  constructor(private http:HttpClient) { 
    //this.baseApi="https://6681d80c04acc3545a07b615.mockapi.io/users";

  }
  InitialiseUser():Users{
     return new Users('0','','','','',false,'');
  }
  RegisterUser(form: FormGroup):Observable<any>{
     return this.http.post(this.baseApi+"/",form.value);
  }

}
