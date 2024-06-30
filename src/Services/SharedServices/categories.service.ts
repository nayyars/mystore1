import { Injectable } from '@angular/core';
import { Products } from '../Models/Products';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
//------- veriable section ---------------
private categoryList :string[]=[];
  constructor() { }
  getCategory():string[]{
    return this.categoryList=["Communication","Home Appliance","Educational"];
  }
}
