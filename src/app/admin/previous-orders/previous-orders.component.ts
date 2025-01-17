import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/SharedServices/login.service';
import { OrderService } from '../../../Services/SharedServices/order.service';
import { OrderMaster } from '../../../Services/Models/order-master';
import { count, error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-previous-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './previous-orders.component.html',
  styleUrl: './previous-orders.component.css'
})
export class PreviousOrdersComponent implements OnInit{
    OrdersForCurrentUserList :OrderMaster[]=[];
  constructor(private http:HttpClient, private _LoginService:LoginService, private _OrderService:OrderService){
    
  }
  ngOnInit(): void {
    this. PageList();
       // ------ create a service -------
  }
    PageList(){
      const username=this._LoginService.GetUserName();
      this._OrderService.getOrdersByUserName().subscribe(
       order=>{
            this.OrdersForCurrentUserList=order;
            const connt=this.OrdersForCurrentUserList.length;
            this.OrdersForCurrentUserList=  this.OrdersForCurrentUserList.filter(order=>order.CustomerName===username);
       },
       error=>{
       }
      );
    }

  retrunOrder(orderid:string , orderdetalsID :string){
    alert("Full Order will be deleted as per imcomplete functionality");
    this._OrderService.deleteOrderDetail(orderid,orderdetalsID).subscribe(data=>{
       const order= data;

       this. PageList();

    })
  }
    

}
