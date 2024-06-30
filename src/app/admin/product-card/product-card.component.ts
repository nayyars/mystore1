import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Products } from '../../../Services/Models/Products';
import { ProductsService } from '../../../Services/SharedServices/products.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent  implements OnInit  {
    // ------------ veriable Section ------------
  product :Products=new Products('','','','',0,0);
  productList:Products[]=[];
  countProducts:number=0;

 constructor(private service:ProductsService){}

 // ---------ngOnInit ------------------------
 ngOnInit(): void {
   this.service.GetProductListService().subscribe(DataRec=>{
      this.productList=DataRec;
       this.countProducts= this.productList.length;
       console.log(JSON.stringify(DataRec));
   })
 }

 // --------- Add product to CART ---------------
 addToCart(product : Products){
      console.log("Products :"+ product);
 }


}
