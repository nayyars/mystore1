import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import test from 'node:test';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './admin/home/home.component';
import { authGuard } from '../Services/SharedServices/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllproductComponent } from './mysale/allproduct/allproduct.component';

export const routes: Routes = [
  {path:'test',component:TestComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'all',loadChildren:()=> import('./mysale/mysale.module').then(m=>m.MysaleModule)},
  {path:'register',component:RegistrationComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'home',
   loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule), canActivate:[authGuard]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
