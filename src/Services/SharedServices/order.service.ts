import { Injectable } from '@angular/core';
import { Products } from '../Models/Products';
import { OrderDetails, OrderMaster } from '../Models/order-master';
import { LoginService } from './login.service';
import { Users } from '../Models/users';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { map } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private _LoginService:LoginService, private _http:HttpClient){}
  private orderApiUrl="http://localhost:3000/Orders";
  private _NewOrderDetails=new OrderDetails('','','',0,0,'',0);

  CreateOderPayload(_OrderDetails?:OrderDetails[]) : Observable<any> { 
     
    const token= this._LoginService.getToken();
    if(token){
       const username=this._LoginService.GetUserName();
       const GenOrderID=this.generateId();
       const COrderID=this.generateOrderId();
          if(_OrderDetails){
            _OrderDetails.forEach(item => {
              item.orderidd =COrderID
            });
       }
      
        
       const OrderPayload =
        { 
          orderid:COrderID,
          CustomerName: username,
          OrderDate:new Date(),
          OrderDetails : _OrderDetails
        };
      //alert(JSON.stringify(OrderPayload));
      return this._http.post(this.orderApiUrl, OrderPayload);
    }
    return of(...'ok');
  }

  

  MapOdertoOrderDetails(product:Products):OrderDetails{
    // orderdetailsid:string,orderid:string,productid:string,productname:string , price:number,
    //quantity:number,productcategory:string
    const prodid= product.id;
    const orderdetails=new OrderDetails('','',product.name,product.price,1,product.category,0);
    orderdetails.OrderDetailID=this.generateId();
    orderdetails.ProductID=product.id;
    orderdetails.ProductName=product.name;
    orderdetails.price=product.price;
    orderdetails.Quantity=1;
    orderdetails.ProductCategory=product.category;
    orderdetails.TotalAmount=1*product.price;
    return orderdetails;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  private generateOrderId(): string {
    return Math.random().toString(36).substr(2, 9);
  }


  // -------------------  Get Previous orders ------- ---- 
     getOrdersByUserName():Observable<OrderMaster[]>{
      const getApiUrl="http://localhost:3000/Orders";    // Get User   , geturl and object
      return this._http.get<OrderMaster[]>(getApiUrl); 
    }
  //  -----------------  
  

  deleteOrderDetail(orderId: string, orderDetailId: string): Observable<any> {
    //return this._http.delete<any>(`${this.orderApiUrl}/Orders/${orderId}/OrderDetails/${orderDetailId}`);
    return this._http.delete<any>(this.orderApiUrl+"/"+orderId) ; //(`${this.orderApiUrl}/?orderid=${orderId}/OrderDetails/${orderDetailId}`);

  }

}
