import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Users } from '../../../Services/Models/users';
import { AuthService } from '../../../Services/SharedServices/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-edit-popup',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './user-edit-popup.component.html',
  styleUrl: './user-edit-popup.component.css'
})
export class UserEditPopupComponent implements OnInit  {
  EditFormGroup : FormGroup;
  private usermodel=new Users('-2','','','','',false,'');
  DepartmentsList: string[]=['IT', 'HR','Mathametics','Physics']

   constructor(private fb:FormBuilder,private serviceUser:AuthService){
    this.EditFormGroup=this.fb.group({
      id:[this.usermodel.id],
      fullname:[this.usermodel.fullname],
      username:[this.usermodel.username],
      password:[this.usermodel.password],
      department:[this.usermodel.department],
    });
   }
  ngOnInit(): void { 
    this.serviceUser.getUserSubject().subscribe(recUserData=>{
      this.usermodel=recUserData;
      // Not : patch value propert is used to initialise form group controls 
      this.EditFormGroup.patchValue(this.usermodel);
      console.log("Edit popup model shown ");
    })
  }
  EditUser(){
        this.serviceUser.get_UserByID
  }
}
