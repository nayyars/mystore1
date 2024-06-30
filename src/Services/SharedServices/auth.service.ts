        import { HttpClient } from '@angular/common/http';
        import { Injectable } from '@angular/core';
        import { Users } from '../Models/users';
        import { Observable, map,BehaviorSubject, tap, of, Subject } from 'rxjs';
        import {  Router } from '@angular/router';
        import { error } from 'console';
        import { FormGroup } from '@angular/forms';

        @Injectable({
          providedIn: 'root'
        })
        export class AuthService {
          private isLocalStorageAvailable = typeof localStorage !== 'undefined';
          getApiUrl:string="http://localhost:3000/users";    // Get User   , geturl and object
          
          private userListSubject: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>([]);
          public userList$: Observable<Users[]> = this.userListSubject.asObservable();
          private localUserslist:Users[]=[];
          constructor(private http:HttpClient,private _routeMe:Router) {
                 // ------ Initial_Users method fill all users in UserSubject from api ----- 
           }

          
          fetchUsers() {
            this.http.get<Users[]>(this.getApiUrl).subscribe(users => {
              this.userListSubject.next(users);
            });
          }

          addUser(user: Users): Observable<Users> {
            return this.http.post<Users>(this.getApiUrl, user).pipe(
                  tap(() => {
                this.fetchUsers();  // Refresh the list after adding a user
              })
            );
          }

          getUsers(): Observable<Users[]> {
            return this.http.get<Users[]>(this.getApiUrl);
          }

          authenticateUser(username: string, password: string): Observable<boolean> {
            return this.getUsers().pipe(
              map(users => {

                // Trim inputs to avoid issues with leading/trailing spaces
                username = username.trim();
                password = password.trim();
                const userExists = users.some(user => {
                  const isMatch = user.username === username && user.password === password;
                  return isMatch;
                });
                return userExists;
              })
            );

            this.getUsers().pipe(map(user=>{}))
          }

          

          // ---------------- create user -------

          createUserAPi(nay :FormGroup):Observable<any>{
              return this.http.post(this.getApiUrl,nay.value); ;
          }
          // ------------ Delete users -------
          deleteUser(id:string){
            return this.http.delete(this.getApiUrl+"/"+id);

            //return this.http.delete(this.getApiUrl+"/"+userid);
          }
        // --------------logic for authentcation -------------
          //  -------set token --
          setToken(token:string):void
          {
              if(this.isLocalStorageAvailable){
              localStorage.setItem('token',token);
              }
            }
            getToken():string|null
            {
              if(this.isLocalStorageAvailable){
                return localStorage.getItem('token');
            }
            return null;
            }
            isLoggedIn():boolean
            {
              return this.getToken() !=null;
            }

              logout()
              {
                if(this.isLocalStorageAvailable){
                    localStorage.removeItem('token');
                    this._routeMe.navigate(['login']);}
              }


          login(username: string, password: string)
            {
                this.authenticateUser(username, password).subscribe(res=>{
                  if (res) {
                    this.setToken("jfgjfj7878978789gffjffjfhfj")
                    this._routeMe.navigate(['home']);
              
                  } else {
                  this.logout();
                  }
                },error=>{
                  this.logout();
                });
            }

            // ----------------  Suject is to share or to update multiple component at same time ----
            // ----broad cast update is done by subject ---
            // ---- if an item is added from a comp . this update should be seen by other comp also .
            // here , subject is of Users List ---- that need to be shown to list comp 
            private usersSubject= new Subject<Users[]>();
            private users: any[] = []; // Assuming your users are stored here

            updateUserList(newUserData:Users[]): void {
              this.getUsers().subscribe(respo=>{
                this.users=respo as Users[];
              });
              this.users = newUserData;
              this.usersSubject.next([...this.users]); // Emit the updated user list
            }
           
             // --------- create list observable --------------
             getUserListObservable(): Observable<any[]> {
              return this.usersSubject.asObservable();
            }
                 // -------- we will create users list array who contain the list of users from get api 
                 userlist: Users[]=[]     // assuimg this array will contain the users 
                 private UserSubject=new Subject<Users[]>();

                 // ---- get users list initially ----
                 
                 // call Initial_Users method in service constructor 
                 Initial_Users():Observable<Users[]>{
                     this.http.get<Users[]>(this.getApiUrl).subscribe(apiusers=>{
                       this.userlist=apiusers;
                       this.userlist.reverse();
                       this.UserSubject.next(this.userlist);
                    });
                   return this.UserSubject.asObservable();

                 }

                  // -----  subject user is not observable , we need to create it as observable 
                  // not used ..
                   GetUserFromObservable():Observable<Users[]>{
                      return this.UserSubject.asObservable();
                   }

                   // ----- Add new user via api -------

                   Add_aNewUser(form : FormGroup):Observable<Users>{
                       return this.http.post<Users>(this.getApiUrl,form.value).pipe(tap(
                        (newuser=>{
                          this.userlist.push(newuser);
                          this.userlist.reverse();
                          this.UserSubject.next(...[this.userlist]);
                           
                        })
                       ));
                   }

                   //--------updated -----
                   Updat_User(form:FormGroup,id:string):Observable<Users>{
                     return this.http.put<Users>(this.getApiUrl+"/"+id,form.value).pipe(
                      tap(updatedUser=>{
                        const index=this.userlist.findIndex(t=>t.id==updatedUser.id);
                        if(index !=-1){
                           this.userlist[index]=updatedUser;
                           this.UserSubject.next([...this.userlist]);
                        }
                      })
                     )
                 }
        // ---------------- Edit User ---------
        private subjUser=new Subject<Users>();
        isactive:boolean=false;
        private localUser:Users=new Users('','','','','',this.isactive,'');
           get_UserByID(id:string):Observable<Users>
           {
              return  this.http.get<Users>(this.getApiUrl+"/"+id).pipe(tap((locUser=>{
                this.localUser=locUser;
                this.subjUser.next( this.localUser);
              })));
           }        
           
            // Getter for accessing subjUser as an observable
  getUserSubject(): Observable<Users> {
    return this.subjUser.asObservable();
  }

}