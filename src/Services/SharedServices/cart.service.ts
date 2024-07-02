import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Products } from '../Models/Products';
import { OrderDetails } from '../Models/order-master';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // -------  veriable section ----------------
  private myproductsList: OrderDetails[] = [];
  private certSubject: BehaviorSubject<OrderDetails[]> = new BehaviorSubject<OrderDetails[]>([]);
  private searchSubject: BehaviorSubject<string>;
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';

  constructor(  ) { 
    this.searchSubject=new BehaviorSubject<string>('');
  }
  // -------------  search item -----
      setSearchQuesry(searchText:string){
        if(this.isLocalStorageAvailable){
          const searchtext=  localStorage.setItem('search',searchText);}
      }
      getSearchQuesry(){
        if(this.isLocalStorageAvailable){
        const searchText=localStorage.getItem('search');
        return searchText} 
        else{
          return '';
        }
      }
      setSearchBehaviourForSearch(searhText:string):void{
         const searchtect=this.getSearchQuesry()
         this.searchSubject.next(...[searhText]);
      }
      getSearchBehaviourForSearch():Observable<string>{
        return  this.searchSubject.asObservable();
      }
  // --------------------------------
  getCertForAllItems(item :OrderDetails){
         this.myproductsList= this. getCartFromLocalStorage();
          const existingProduct= this.myproductsList.find(p=>p.ProductID==item.ProductID);
        if(existingProduct){
          existingProduct.Quantity=existingProduct.Quantity+1;
          //this.myproductsList.push(existingProduct);
          existingProduct.TotalAmount= existingProduct.Quantity* existingProduct.price;

        }
        else{
           this.myproductsList.push(item);
        }
         this. updateCartInLocalStorage(this.myproductsList);

        this.certSubject.next(...[this.myproductsList]);
  }

  // ---------------remove item from cart -------------
  RemoveCertForItem(item :OrderDetails){
    this.myproductsList= this. getCartFromLocalStorage();
     const existingProduct= this.myproductsList.find(p=>p.ProductID==item.ProductID);
   if(existingProduct){
     existingProduct.Quantity=existingProduct.Quantity-1;
     //this.myproductsList.push(existingProduct);
     if (existingProduct.Quantity > 0) {
      existingProduct.TotalAmount = existingProduct.Quantity * existingProduct.price;
    } else {
      // Remove product if quantity is zero or less
      this.myproductsList = this.myproductsList.filter(p => p.ProductID !== item.ProductID);
    }
   }
  
    this. updateCartInLocalStorage(this.myproductsList);

   this.certSubject.next(...[this.myproductsList]);
}
    // CartService getCertForAllItems
    getCertForAllItemsObservable():Observable<OrderDetails[]>{
      this.myproductsList= this. getCartFromLocalStorage();
      this.certSubject.next(...[this.myproductsList]);

      return this.certSubject.asObservable();
    }

    private getCartFromLocalStorage(): OrderDetails[] {
      if(this.isLocalStorageAvailable)
        {
              const cart = localStorage.getItem('cart');
      return cart ? JSON.parse(cart) : [];
      } 
      else{
        return [];
      }
    }
  
    private updateCartInLocalStorage(myproductsList: OrderDetails[]): void {
      if(this.isLocalStorageAvailable){
      localStorage.setItem('cart', JSON.stringify(myproductsList));}
    }
     ClearCartInLocalStorage(): void 
     {
      if(this.isLocalStorageAvailable)
        {
      this.updateCartInLocalStorage([]);
      this.certSubject.next([]); 
        }
      }
    // -----------------------------------------  
}
