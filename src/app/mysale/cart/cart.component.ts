import { Component, Inject, OnInit } from '@angular/core';
import { MysaleheaderComponent } from '../mysaleheader/mysaleheader.component';
import { CartService } from '../../../Services/SharedServices/cart.service';

import { Products } from '../../../Services/Models/Products';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';
import { OrderDetails } from '../../../Services/Models/order-master';
import { AuthService } from '../../../Services/SharedServices/auth.service';
import * as $ from 'jquery'; // Import jQuery
import { LoginService } from '../../../Services/SharedServices/login.service';
import { OrderService } from '../../../Services/SharedServices/order.service';
import { error } from 'console';
declare var jQuery:any;


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MysaleheaderComponent,CommonModule,RouterLink,NotificationComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
   // // CartService getCertForAllItems
    disProductList: OrderDetails[]=[];
    showDiv : boolean=true;
    totalAmount:number=0
   constructor(private serviceCart: CartService,@Inject(DOCUMENT) document: Document,
   private rout:Router , private _AuthService:AuthService , private _LoginService: LoginService, 
   private _OrderService:OrderService){

   }
  ngOnInit(): void {
    product:Products;
    this.serviceCart.getCertForAllItemsObservable().subscribe(respo=>{
      //this.disProductList=respo;
       var username=this._LoginService.GetUserName();
       this.disProductList= respo.filter(t=>t.customername===username);
      this.calculateTotalAmount();
      const  count = this.disProductList.length;
      if(count>0){
        this.showDiv = false;

      }
    },error=>{
      console.log("error is cert service at CartComponent");
    });
  }

  //----------- gross amount -----
  calculateTotalAmount() {
    this.totalAmount = this.disProductList.reduce((sum, item) => sum + item.TotalAmount, 0);
  }
  print( orderDetails : OrderDetails[] )
   {
    if(this._LoginService.IsLoggedIn()){
      // ------- submit order ----
      //order
      this._OrderService.CreateOderPayload(orderDetails).subscribe(
        data=>{
          const da=data;
          console.log('order submitted' + da);
        },
        error=>{
          console.log('error in post resquest');
        }
      );
      const _orderDetails=orderDetails;

    } 
    else{
      alert('User is UNAUTHORISED , No delivery address is found associated .  Please login to place an order');
      jQuery('#staticBackdrop').modal('toggle');
      jQuery('.modal-backdrop').remove();
       this.rout.navigate(['login']);
       return;
    }
    const table = document.getElementById('orderTable');
  if (table != null) {
    const printWindow = window.open('', '', 'height=600,width=800');
     if(printWindow !=null){
      printWindow.document.write('<html><head><title>Print Order</title>');
    printWindow.document.write('<style>');
    printWindow.document.write('table { width: 100%; border-collapse: collapse; }');
    printWindow.document.write('table, th, td { border: 1px solid black; padding: 10px; }');
    printWindow.document.write('th, td { text-align: left; }');
    printWindow.document.write('</style>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(table.outerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();

    


    printWindow.onafterprint = () => {
    printWindow.close();
    // ------ clear CART -----
    };
    this.serviceCart.ClearCartInLocalStorage();
    this.disProductList=[];
         
     }
     }
      
     jQuery('#staticBackdrop').modal('toggle');
     jQuery('.modal-backdrop').remove();

     this.rout.navigate(['all']);

   }
  
  decrementQuantity(product:OrderDetails){
    this.serviceCart.RemoveCertForItem(product);

  }
  incrementQuantity(product:OrderDetails){
     this.serviceCart.getCertForAllItems(product);
  }
}
