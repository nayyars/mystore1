import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { useAnimation } from '@angular/animations';
import { UserComponent } from './user/user.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserEditPopupComponent } from './user-edit-popup/user-edit-popup.component';
import { producerAccessed } from '@angular/core/primitives/signals';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PreviousOrdersComponent } from './previous-orders/previous-orders.component';

 const routes: Routes = [
    {
      path:'',component:HomeComponent,children:
      [
        {path:'user',component:UserComponent},
        {path:'gallery',component:GallaryComponent},
        {path:'edituser',component:UserEditPopupComponent},
        {path:'product',component:ProductComponent},
        {path:'card',component:ProductCardComponent},
        {path:'lastorders',component:PreviousOrdersComponent},


         /* {path:'head',component:HeaderComponent},
          {path:'foot',component:FooterComponent}, */
      ]
    }
  ]
/* const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
       {path:'user',component:UserComponent},
       {path:'gal',component:GallaryComponent},
       {path:'head',component:HeaderComponent},
       {path:'foot',component:FooterComponent},
    ]
  }
]; */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
