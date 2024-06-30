import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../Services/SharedServices/registration.service';
import { Users } from '../../Services/Models/users';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  userRegistrationFormGroup:FormGroup
   registeredUser:Users;
  constructor (private _router:Router,private fb:FormBuilder, private registrationServices : RegistrationService){
      this.userRegistrationFormGroup=this.fb.group({
          fullname : '',
          username :'',
          email:'',
          password :'',
          confirmPassword:'',
          phone :'',
          address :'',
      });
      // ---- initialise the user object using service ----
      this.registeredUser=this.registrationServices.InitialiseUser();
  }
  ngOnInit(): void {
  }
 
    onSubmit(form:FormGroup){

       if(form.valid)
        {
            // ------------------------- Create a service ---------------------

            this.registrationServices.RegisterUser(form).subscribe(result=>{
            this.registeredUser=result;
            this._router.navigate(['login']);
            });
        }
    }
}
