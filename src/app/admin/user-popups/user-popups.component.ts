        import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
        import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
        import { Users } from '../../../Services/Models/users';
        import { AuthService } from '../../../Services/SharedServices/auth.service';
        import { Console, error } from 'console';
        import { CommonModule } from '@angular/common';
        import { blob, buffer } from 'stream/consumers';
        import * as $ from 'jquery'; // Import jQuery
        declare var jQuery:any;


        @Component
        ({
          selector: 'app-user-popups',
          standalone: true,
          imports:[ReactiveFormsModule,CommonModule],
          templateUrl: './user-popups.component.html',
          styleUrl: './user-popups.component.css'
        })
        export class UserPopupsComponent {

           titleUserAdd:string='Add a New User';
          // ----- Departments --------------
          Departments: string[]=['IT', 'HR','Mathametics','Physics']
          UserFormGroup:FormGroup ;
          user :Users |null=null;

              constructor(private fb:FormBuilder, private _service:AuthService )
              {
                // this.UserFormGroup=this.fb.group({  /* here form control will go separated by commas */ });
                //this.UserFormGroup=this.fb.group("");
                // ----  
                this.UserFormGroup=this.fb.group({  
                  fullname:'',
                  username:'',
                  password:'',
                  department:'',
                  IsActive:''

                });
              }
              // ----- submit user form ------

              SubmitUserForm()
              {
                   this._service.Add_aNewUser(this.UserFormGroup).subscribe(respo=>{
                           let p=respo;
                          console.log("new user added successfully .");
                          jQuery('#staticBackdrop').modal('toggle');
                          jQuery('.modal-backdrop').remove();


                   }, error=>{
                    console.log("new user is not added , some error found");
                   });

                      /*   this._service.createUserAPi(this.UserFormGroup).subscribe(res=>{
                          let response = res as Users;
                          let newuser=res as Users;
                          let u:Users[]=[newuser];
                          // ---- update user using subject object in rxgx ---
                          this._service.updateUserList(u);
                          // -----Refersg form ------
                          this.UserFormGroup.reset();
                          // ----------- close the model ---- 
                          this.closeModal();
                          //---------- close the model 
                        },error=>{   
                        
                        }); */

              }
            
            
              // ----- upload image ---- 
              Image:any='';
              private userToPass=new Users('','','','','',false,'');
              SaveImage(event:any)
              {    
                // let file=event.target.files[0];
                const file = (event.target as HTMLInputElement).files?.[0] ;
                this.userToPass= this.UserFormGroup.value as Users;
                if (file) {
                  this.convertFileToBase64(file).then((base64: string) => {
                    // Optionally, update the form control if needed
                
                  this. userToPass.profile=base64;
                    
                  });
                }
              }
              convertFileToBase64(file: File): Promise<string>
              {
                    return new Promise<string>((resolve, reject) => {
                      const reader = new FileReader();
                      reader.readAsDataURL(file);
                      reader.onload = () => resolve(reader.result as string);
                      reader.onerror = error => reject(error);
                    });
                }
        }
