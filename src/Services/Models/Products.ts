export class Products {
    id?:string =''           //     ProductID?:string;
    imageUrl : string ='';
    name : string ='';
    category:string ='';
    price:number =0;
    quantity:number =0;
    constructor( id:string , imageUrl:string ,name:string , category : string , price:number ,quantity :number ){
       this.id=id;
       this.imageUrl=imageUrl;
       this.name=name;
       this.category=category;
       this.price=price;
       this.quantity=quantity;
    }
}

// note : model property in model need to be same as  in service (in api)  
// and form control name should be same as service data or model property

/* "id": "4",
"imageUrl": "",
"name": "Laptop",
"category": "Communication",
"price": "4538.99",
"quantity": "290" */


