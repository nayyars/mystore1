export class OrderMaster {
    id:string='';
    orderid:string;
    CustomerName:string;
    OrderDate:Date;
    OrderDetails: OrderDetails[]=[];


    constructor( orderidd: string,customerName:string){
        this.orderid=orderidd;
        this.CustomerName=customerName;
        this.OrderDate= new Date(); 
    }
}


export class OrderDetails{
    OrderDetailID:string='';
    orderidd:string =''
    ProductID?:string='';
    ProductName:string='';
    price:number=0;
    Quantity:number=0;
    ProductCategory:string='';
    TotalAmount:number=0;
    customername:string='';


    constructor(orderdetailsid:string,productid:string,productname:string , price:number,
        quantity:number,productcategory:string,totalamount:number){
     this.ProductID=productid;
     this.ProductName=productname;
     this.price=price;
     this.Quantity=quantity;
     this.ProductCategory=productcategory;
     this.TotalAmount=totalamount;
    }
}
