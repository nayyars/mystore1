import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductComponent } from './allproduct/allproduct.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',component:AllproductComponent},
  {path:'all',component:AllproductComponent},
  {path:'cart',component:CartComponent},
  { path: 'all/cart', component: CartComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MysaleRoutingModule { }
