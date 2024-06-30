import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Products } from '../../../Services/Models/Products';
import { ProductsService } from '../../../Services/SharedServices/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CategoriesService } from '../../../Services/SharedServices/categories.service';

// -----------Jquesry -----------
import * as $ from 'jquery'; // Import jQuery
import { error } from 'console';
declare var jQuery:any;

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  // ------------ veriable Section ------------
  product :Products=new Products('','','','',0,0);
   productList:Products[]=[];
   countProducts:number=0;

   categoryList: string[]=[];
   productformGroup :FormGroup;
   productEditformGroup :FormGroup;  // <= Edit popup form 
  constructor(private service:ProductsService, private categoryService: CategoriesService,private fb:FormBuilder){
     // -----------------
     this.productformGroup=this.fb.group({
      id:'0',
      imageUrl:'',
      name:'',
      category:'',
      price:'',
      quantity:''
    });

    this.productEditformGroup=this.fb.group({
      id:'0',
      imageUrl:'',
      name:'',
      category:'',
      price:'',
      quantity:''
    });
  }
  
  // ---------ngOnInit ------------------------
  ngOnInit(): void {
    this.service.GetProductListService().subscribe(DataRec=>{
       this.productList=DataRec;
       this.productList.reverse();
        this.countProducts= this.productList.length;
        console.log(DataRec);
    });
    
      // ------- Initialise categoires during add product -----------
      this.categoryList= this.categoryService.getCategory();
    
  }

  // --------- Add product to CART ---------------
  addToCart(product : Products){
       console.log("Products :"+ product);
  }

  
   // ------------ Edir item --------------
    getProductBeUpdated(product:Products){

        this.productEditformGroup.setValue(product) ;
        //alert('form values has been set '+ JSON.stringify( this.productformGroup.value));
        jQuery('#staticBackdropEdit').modal('show');
       
   }
   SubmitProductUpdate(updateform:FormGroup){
    if(updateform.valid){
      const formval= updateform.value as Products;  
      this.service.updateProductService(formval).subscribe(data=>{
      this.productEditformGroup.reset();
      jQuery('#staticBackdropEdit').modal('toggle');
      jQuery('.modal-backdrop').remove();
    }, error=>{
      console.log('Error during update item values');
    });
     }
   }
   // ------------ Add Product -------------
   addProduct(productformGroup:FormGroup){
    if(productformGroup.valid){
      console.log(productformGroup.value);
      const formval= productformGroup.value as Products;
      // ---- remove id values from product object because serve will create it .
      delete formval.id;  //    id?:string  <= id will be created like this in Product Model class ,  Remove the id property
      this.service.addProductService(formval).subscribe(data=>{
       console.log('Added Product '+ data);
       jQuery('#staticBackdrop').modal('toggle');
       jQuery('.modal-backdrop').remove();
       productformGroup.reset();
      },error=>{
        console.log(' Product addition is fail with error  ');
      });
    }
   }






   // ------------Delete item ----------------
   deleteUser(productbeDeleted: Products){
           alert("Delete product  :"+ productbeDeleted.id);
   }

   // ------------opem add edit model popup ----------------------------
   openAddModal(){

   }
}
