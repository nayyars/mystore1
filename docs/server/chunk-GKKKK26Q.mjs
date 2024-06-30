import './polyfills.server.mjs';
import{c as G}from"./chunk-OYRDBF33.mjs";import{a as B}from"./chunk-QRWQY24P.mjs";import{b as y,c as x,d as w,e as V,f as H,g as C,h as q,i as J,m as K,n as Z,o as z,p as Q,q as X,r as E,s as N}from"./chunk-XRF5VEMI.mjs";import{$ as a,Fa as L,K as g,Ka as b,L as d,Ma as R,Na as U,S as j,Sa as T,Ta as A,U as i,V as t,Va as W,W as m,Xa as S,Y as v,Ya as _,Za as O,da as F,ea as P,fa as I,ha as c,j as h,m as u,p as s,qa as k,xa as D}from"./chunk-MUB4C7OA.mjs";var Y=(()=>{let e=class e{constructor(n){this.receiveNotification=n,this.title="MyStore",this.showNotification=!1,this.notificationMessage=""}ngOnInit(){this.receiveNotification.getNotification().subscribe(n=>{this.notificationMessage=n,this.showNotification=!0})}};e.\u0275fac=function(o){return new(o||e)(d(B))},e.\u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[c],decls:1,vars:0,template:function(o,l){o&1&&m(0,"router-outlet")},dependencies:[W,L]});let r=e;return r})();var $=(()=>{let e=class e{constructor(n){this.http=n}ngOnInit(){}};e.\u0275fac=function(o){return new(o||e)(d(b))},e.\u0275cmp=s({type:e,selectors:[["app-test"]],standalone:!0,features:[c],decls:2,vars:0,template:function(o,l){o&1&&(i(0,"p"),a(1,"test works!"),t())}});let r=e;return r})();var ee=(()=>{let e=class e{constructor(n,o,l){this.service=n,this.route=o,this._LoginService=l,this.txtPassword="",this.txtUserName="",this.loginSuccess=!1}login(n,o){console.log("login comp ."),this._LoginService.login(n,o),console.log(this._LoginService.IsLoggedIn())}};e.\u0275fac=function(o){return new(o||e)(d(E),d(S),d(N))},e.\u0275cmp=s({type:e,selectors:[["app-login"]],standalone:!0,features:[c],decls:46,vars:2,consts:[[1,"bg-light","p-3","p-md-4","p-xl-5"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12","col-xxl-11"],[1,"card","border-light-subtle","shadow-sm"],[1,"row","g-0"],[1,"col-12","col-md-6"],["src","loginpic.jpeg",1,"img-fluid",2,"min-height","100%"],[1,"col-12","col-md-6","d-flex","align-items-center","justify-content-center"],[1,"col-12","col-lg-11","col-xl-10"],[1,"card-body","p-3","p-md-4","p-xl-5"],[1,"row"],[1,"col-12"],[1,"mb-5"],[1,"text-center"],["routerLink","/all",1,"btn","btn-info","form-control"],["action","#!"],[1,"row","gy-3","overflow-hidden"],[1,"form-floating","mb-3"],["type","text","name","nUserName","id","UserName ","placeholder","name@example.com","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","UserName",1,"form-label"],["type","password","name","password","id","password","value","","placeholder","Password","required","",1,"form-control",3,"ngModelChange","ngModel"],["for","password",1,"form-label"],[1,"form-check"],["type","checkbox","value","","name","remember_me","id","remember_me",1,"form-check-input"],["for","remember_me",1,"form-check-label","text-secondary"],[1,"d-grid"],["type","submit",1,"btn","btn-dark","btn-lg",3,"click"],[1,"d-flex","gap-2","gap-md-4","flex-column","flex-md-row","justify-content-md-center","mt-5"],["routerLink","/register",1,"link-secondary","text-decoration-none"],["href","#!",1,"link-secondary","text-decoration-none"]],template:function(o,l){o&1&&(i(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),m(7,"img",7),t(),i(8,"div",8)(9,"div",9)(10,"div",10)(11,"div",11)(12,"div",12)(13,"div",13)(14,"h4",14),a(15,"Welcome back you've been missed!"),t(),i(16,"a",15),a(17,"Ge to Purchase"),t()()()(),i(18,"form",16)(19,"div",17)(20,"div",12)(21,"div",18)(22,"input",19),I("ngModelChange",function(p){return P(l.txtUserName,p)||(l.txtUserName=p),p}),t(),i(23,"label",20),a(24,"User Name"),t()()(),i(25,"div",12)(26,"div",18)(27,"input",21),I("ngModelChange",function(p){return P(l.txtPassword,p)||(l.txtPassword=p),p}),t(),i(28,"label",22),a(29,"Password"),t()()(),i(30,"div",12)(31,"div",23),m(32,"input",24),i(33,"label",25),a(34," Keep me logged in "),t()()(),i(35,"div",12)(36,"div",26)(37,"button",27),v("click",function(){return l.login(l.txtUserName,l.txtPassword)}),a(38,"Log in now"),t()()()()(),i(39,"div",11)(40,"div",12)(41,"div",28)(42,"a",29),a(43,"Create new account"),t(),i(44,"a",30),a(45,"Forgot password"),t()()()()()()()()()()()()()),o&2&&(g(22),F("ngModel",l.txtUserName),g(5),F("ngModel",l.txtPassword))},dependencies:[z,C,y,x,w,K,H,V,_]});let r=e;return r})();var te=(()=>{let e=class e{constructor(n){this.http=n,this.baseApi="http://localhost:3000/users",this.baseApi="https://6681d80c04acc3545a07b615.mockapi.io/users"}InitialiseUser(){return new X("0","","","","",!1,"")}RegisterUser(n){return alert("register"),this.http.post(this.baseApi+"/",n.value)}};e.\u0275fac=function(o){return new(o||e)(u(b))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var ie=(()=>{let e=class e{constructor(n,o,l){this._router=n,this.fb=o,this.registrationServices=l,this.userRegistrationFormGroup=this.fb.group({fullname:"",username:"",email:"",password:"",confirmPassword:"",phone:"",address:""}),this.registeredUser=this.registrationServices.InitialiseUser()}ngOnInit(){}onSubmit(n){n.valid&&this.registrationServices.RegisterUser(n).subscribe(o=>{this.registeredUser=o,alert(JSON.stringify(o)),this._router.navigate(["login"])})}};e.\u0275fac=function(o){return new(o||e)(d(S),d(Z),d(te))},e.\u0275cmp=s({type:e,selectors:[["app-registration"]],standalone:!0,features:[c],decls:55,vars:1,consts:[[1,"container","mt-1"],[1,"text-center"],[3,"submit","formGroup"],[1,"mb-3"],["for","fullname",1,"form-label"],[1,"input-group"],[1,"input-group-text"],[1,"fas","fa-user"],["type","text","formControlName","fullname","id","fullname","placeholder","Enter your fullname",1,"form-control"],["for","username",1,"form-label"],["type","text","formControlName","username","id","username","placeholder","Enter your username",1,"form-control"],["for","email",1,"form-label"],[1,"fas","fa-envelope"],["type","email","formControlName","email","id","email","placeholder","Enter your email",1,"form-control"],["for","password",1,"form-label"],[1,"fas","fa-lock"],["type","password","formControlName","password","id","password","placeholder","Enter your password",1,"form-control"],["for","confirmPassword",1,"form-label"],["type","password","formControlName","confirmPassword","id","confirmPassword","placeholder","Confirm your password",1,"form-control"],["for","phone",1,"form-label"],[1,"fas","fa-phone"],["type","tel","formControlName","phone","id","phone","placeholder","Enter your phone number",1,"form-control"],["for","address",1,"form-label"],[1,"fas","fa-home"],["type","text","formControlName","address","id","address","placeholder","Enter your address",1,"form-control"],["type","submit",1,"btn","btn-primary","w-100"]],template:function(o,l){o&1&&(i(0,"div",0)(1,"h5",1),a(2,"Registration Form"),t(),i(3,"form",2),v("submit",function(){return l.onSubmit(l.userRegistrationFormGroup)}),i(4,"div",3)(5,"label",4),a(6,"FullName"),t(),i(7,"div",5)(8,"span",6),m(9,"i",7),t(),m(10,"input",8),t()(),i(11,"div",3)(12,"label",9),a(13,"Username"),t(),i(14,"div",5)(15,"span",6),m(16,"i",7),t(),m(17,"input",10),t()(),i(18,"div",3)(19,"label",11),a(20,"Email address"),t(),i(21,"div",5)(22,"span",6),m(23,"i",12),t(),m(24,"input",13),t()(),i(25,"div",3)(26,"label",14),a(27,"Password"),t(),i(28,"div",5)(29,"span",6),m(30,"i",15),t(),m(31,"input",16),t()(),i(32,"div",3)(33,"label",17),a(34,"Confirm Password"),t(),i(35,"div",5)(36,"span",6),m(37,"i",15),t(),m(38,"input",18),t()(),i(39,"div",3)(40,"label",19),a(41,"Phone Number"),t(),i(42,"div",5)(43,"span",6),m(44,"i",20),t(),m(45,"input",21),t()(),i(46,"div",3)(47,"label",22),a(48,"Address"),t(),i(49,"div",5)(50,"span",6),m(51,"i",23),t(),m(52,"input",24),t()(),i(53,"button",25),a(54,"Register"),t()()()),o&2&&(g(3),j("formGroup",l.userRegistrationFormGroup))},dependencies:[Q,C,y,x,w,q,J],styles:[".container[_ngcontent-%COMP%]{width:40%;background-color:#f6f6f6}"]});let r=e;return r})();var oe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-dashboard"]],standalone:!0,features:[c],decls:34,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-sm-3"],[1,"card"],["src","...","alt","Product Image",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"fas","fa-dollar-sign"],[1,"fas","fa-star"],["href","#",1,"btn","btn-primary"]],template:function(o,l){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),m(4,"img",4),i(5,"div",5)(6,"h5",6),a(7,"Product Title"),t(),i(8,"p",7),a(9,"Product Description"),t(),i(10,"div"),m(11,"i",8),a(12," Price: $99.99 "),m(13,"br")(14,"i",9),a(15," Rating: 4.5 "),t(),i(16,"a",10),a(17,"Buy Now"),t()()()(),i(18,"div",2)(19,"div",3),m(20,"img",4),i(21,"div",5)(22,"h5",6),a(23,"Product Title"),t(),i(24,"p",7),a(25,"Product Description"),t(),i(26,"div"),m(27,"i",8),a(28," Price: $99.99 "),m(29,"br")(30,"i",9),a(31," Rating: 4.5 "),t(),i(32,"a",10),a(33,"Buy Now"),t()()()()()())}});let r=e;return r})();var re=(()=>{let e=class e{constructor(n,o){this.loginservice=n,this._LoginService=o}canActivate(n,o){let l=!0;return l=this._LoginService.IsLoggedIn(),l||!1}};e.\u0275fac=function(o){return new(o||e)(u(E),u(N))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var ne=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-page-not-found"]],standalone:!0,features:[c],decls:2,vars:0,template:function(o,l){o&1&&(i(0,"p"),a(1,"page-not-found works!"),t())}});let r=e;return r})();var ae=[{path:"test",component:$},{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",component:ee},{path:"all",loadChildren:()=>import("./chunk-7LQHNBB5.mjs").then(r=>r.MysaleModule)},{path:"register",component:ie},{path:"dashboard",component:oe},{path:"home",loadChildren:()=>import("./chunk-5F5QMDRD.mjs").then(r=>r.AdminModule),canActivate:[re]},{path:"**",component:ne}];var me={providers:[k({eventCoalescing:!0}),O(ae),A(),R(U())]};var ge={providers:[G()]},le=D(me,ge);var he=()=>T(Y,le),$e=he;export{$e as a};
