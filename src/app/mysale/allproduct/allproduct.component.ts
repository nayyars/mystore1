import { Component, OnInit } from '@angular/core';
import { MysaleheaderComponent } from '../mysaleheader/mysaleheader.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Products } from '../../../Services/Models/Products';
import { ProductsService } from '../../../Services/SharedServices/products.service';
import { CartService } from '../../../Services/SharedServices/cart.service';
import { NotificationServiceService } from '../../../Services/SharedServices/notification-service.service';
import { NotificationComponent } from '../notification/notification.component';
import { OrderDetails } from '../../../Services/Models/order-master';
import { OrderService } from '../../../Services/SharedServices/order.service';
import { LoginService } from '../../../Services/SharedServices/login.service';

@Component({
  selector: 'app-allproduct',
  standalone: true,
  imports: [MysaleheaderComponent,ReactiveFormsModule,CommonModule,RouterLink,NotificationComponent],
  templateUrl: './allproduct.component.html',
  styleUrl: './allproduct.component.css'
})

export class AllproductComponent  implements OnInit  {
  // ------------ veriable Section ------------
product :Products=new Products('','','','',0,0);
productList:Products[]=[];
countProducts:number=0;
target:string='';
NumberOfItemsInCart:number=0;
constructor(private service:ProductsService, private _cartService:CartService,
  private ro:ActivatedRoute, private NotificationServic: NotificationServiceService,
  private orderService:OrderService,
  private serviceCart: CartService,
  private _LoginService:LoginService
){
  this.target='cart';
 }

// ---------ngOnInit ------------------------
ngOnInit(): void {
 this.service.GetProductListService().subscribe(DataRec=>{
    this.productList=DataRec;
     this.countProducts= this.productList.length;
     // ---- clear CART local storage --- remove items list from local storage 
     
    // this._cartService.ClearCartInLocalStorage();
 })
this. itemSelected();
}

// --------- Item In Cart --local function to load selected item-------------------------
   itemSelected(){
    this.serviceCart.getCertForAllItemsObservable().subscribe(respo=>{
       var items=respo;
       const username=this._LoginService.GetUserName();
       items= items.filter(t=>t.customername===username);
       let numofitem= items.reduce((sum, item) => sum + item.Quantity, 0);
      this.NumberOfItemsInCart=numofitem;
      
    },error=>{
      console.log("error is cert service at CartComponent");
    });
   }



  // --------- Add product to CART ---------------
 ListcartByProductsObject :Products[]=[];
addToCart(product : Products){
   // this. ListcartByProductsObject.push(product);
   const myMessage = `ITEM: ${product.name} \nPRICE :  SR.${product.price}`;
   this.NotificationServic.showNotification(myMessage);
   //   ------- map product to orderdetails ------
    const username=this._LoginService.GetUserName();

   const Mapped_orderdetails= this.orderService.MapOdertoOrderDetails(product);
   Mapped_orderdetails.customername=username;

   this._cartService.getCertForAllItems(Mapped_orderdetails);
}



//---------------Search Item --------------
Search(Search : HTMLInputElement){
        const v=Search.value;
        this.service.GetProductListService().subscribe(DataRec=>{
          this.productList=DataRec;
           this.countProducts= this.productList.length;
           this.productList= this.productList.filter(t=>t.name.toLowerCase().includes(v));

           // ---- clear CART local storage --- remove items list from local storage -------
         
           //this._cartService.ClearCartInLocalStorage();
       })
 }

 // --------------------------- Oncheck---------------------

  fullList(){
    this.service.GetProductListService().subscribe(DataRec=>{
      this.productList=DataRec;
       this.countProducts= this.productList.length;
       // ---- clear CART local storage --- remove items list from local storage 
       
      // this._cartService.ClearCartInLocalStorage();
   })
  this. itemSelected();
  }
  onCommunicationCheckboxChange(event:any){
   const val = event.target.checked;
   if(val){
    this.productList= this.productList.filter(item=>item.category==='Communication');
   } else{
     this .fullList();
   }
 }
 onEducationalCheckboxChange(event:any){
  const val = event.target.checked;
  if(val){
   this.productList= this.productList.filter(item=>item.category==='Educational');
  } else{
    this .fullList();
  }
 }
 onHomeApplianceCheckboxChange(event:any){
  const val = event.target.checked;
  if(val){
   this.productList= this.productList.filter(item=>item.category==='Home Appliance');
  } else{
    this .fullList();
  }
 }

 onAllItemCheckboxChange(event:any){
  const val = event.target.checked;
  if(val){
   this.productList= this.productList.filter(item=>item.category==='Home Appliance');
  } else{
    this .fullList();
  }
 }
}


