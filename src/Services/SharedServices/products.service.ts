import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { Products } from '../Models/Products';
import { response } from 'express';
import { error } from 'console';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   private BaseUrl='http://localhost:3000/Products';

  constructor(private http:HttpClient) { 
   //this.BaseUrl="https://6681d80c04acc3545a07b615.mockapi.io/Products";
  }

  // --------Veriables section-----------------------------------
  ProductList:Products[]=[];    // This is our local list which need to be filled by the data recieved by GET API 

  private ProjectSubject=new Subject<Products[]>();
  private ProjectSubjectBehav=new BehaviorSubject<Products[]>([]);

    
  // ---------------- Fetch data from db-json -------------------
  GetProductListService():Observable<Products[]>
  {

     return this.http.get<Products[]>(this.BaseUrl).pipe(tap(
      (data)=> {
              this. ProductList =data as Products[];
              this.ProjectSubject.next(this.ProductList);
              //  this.ProjectSubject.asObservable();
              this.ProjectSubjectBehav.next(this.ProductList);
      },
      (error)=>{
         console.log("Error druing fetch data from GET api");
      }
     ));
  }
  GetProductListServiceAsObservable():Observable<Products[]>
   {
    // We will retrn Product Beha

      return  this.ProjectSubjectBehav.asObservable();
   }


   // -------------------Add a new product and uddate list and update subject behaviour--------------------------
   private addedProductSubject=new Subject<Products[]>();
   addProductService(productObject: Products):Observable<Products>{
      let obj=this.http.post<Products>(this.BaseUrl,productObject).pipe(tap(
         proddata=>{
               let pro=proddata as Products;
               this. ProductList.push(pro);
               this.ProductList.reverse();
               this.addedProductSubject.next(...[this. ProductList]);
         },
         error=>{
            console.log('Error during add product API');
         }
      ));
      return obj;
   }


   // -------------------Edit Item or Product values - PUT --------------------
   updateProductService(productObject:Products):Observable<Products>{
          return this.http.put<Products>(this.BaseUrl+'/'+productObject.id,productObject).pipe(tap(ProductObjData=>{
            let pro=ProductObjData as Products;
            this. ProductList.push(pro);
            this.ProductList.reverse();
            this.addedProductSubject.next(...[this. ProductList]);
            console.log('Updated during update product API');


          },erro=>{
            console.log('Error during update product API');

          }));
   }
}
