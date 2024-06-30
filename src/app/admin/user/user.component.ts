import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../../../Services/SharedServices/auth.service';
import { Users } from '../../../Services/Models/users';
import { CommonModule } from '@angular/common';
import { UserPopupsComponent } from '../user-popups/user-popups.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { error } from 'console';
import * as $ from 'jquery'; // Import jQuery
import { UserEditPopupComponent } from '../user-edit-popup/user-edit-popup.component';
declare var jQuery:any;

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,UserPopupsComponent,UserEditPopupComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 UserList: Users[]=[];
 userListSubscription?: Subscription; // Subscription to manage

  constructor( private _service:AuthService,private route:Router){

  }
   ngOnInit(){

        this._service.Initial_Users().subscribe(usrlist=>{
         this.UserList=usrlist as Users[];
         console.log("user list",usrlist);
        },error=>{

        });
     // this.getUserData();
     // this.getUserListFromSubject();
      // this._service.AuthenticateUser().subscribe(response=>
      //   {
      //     let users= response as Users[];
      //     this.UserList=users;
      //     this.UserList.reverse();
      //   }
      //   ,error=>{});
   }
        // -----------Delete user --------IOHawk---------
   getUserListFromSubject(){
      this.userListSubscription= this._service.getUserListObservable().subscribe(respo=>{
         this.UserList=respo;
      })
   }     
   getUserData():void{
      this._service.userList$.subscribe(user=>{
         this.UserList= user;
         this.UserList.reverse();
      });
     
      this._service.fetchUsers();  // Fetch users when component initializes
   }     
    DeleteUser(id:string){

              this._service.deleteUser(id).subscribe(res=>{
                 this.UserList = this.UserList.filter(e => e.id !== id);
              },error=>{})
      }
      
      // ---------------Edit user ------------
      UserObject:Users=new Users('','','','','',false,'');
     
      Edit(id:string):void{
             this._service.get_UserByID(id).subscribe(response=>{
               console.log(response);
             });
             jQuery('#userEditModelID').modal('show');
            // jQuery('.modal-backdrop').remove();

      }  
}
