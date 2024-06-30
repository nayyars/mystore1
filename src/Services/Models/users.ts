export class Users {
    id:string =''
    fullname : string ='';
    username : string ='';
    password:string ='';
    department:string ='';
    IsActive:boolean=false;
    profile:string ='';
    constructor( id:string ,
         fullname:string ,
         username:string ,
          password : string ,
         department:string ,
         isactive:boolean,
           profile :string 
        ){
       this.id=id;
       this.fullname=fullname;
       this.username=username;
       this.password=password;
       this.department=department;
       this.IsActive=isactive;
       this.profile=profile;
    }
}
