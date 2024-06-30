import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from '../../../Services/Models/Products';

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  //  id:string , imageUrl:string ,name:string , category : string , price:number ,quantity :number
   product :Products=new Products('','','','',0,0)

   addToCart(product : Products){
    
   }
}
