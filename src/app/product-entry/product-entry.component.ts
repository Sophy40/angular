import { Component, OnInit } from '@angular/core';
import { Product } from './product'
import { ProductService } from '../product.service';
import { FormGroup ,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {
  productArray: Product[] = <any><Product[]>[]
  done = false
  disabled = true

  condition=true
  text = "welcome"
  myColor = 'red'
  myFont = 'bold'
  blueBold = 'blueBold'
  blueBolddisabled = 'blueBolddisabled'
  myStyle = { 'color': this.myColor, 'font-weight': this.myFont }
  // obj={'greenBold':true,'blueBold':false}
  obj={greenBold:false, blueBold:false}
  as1=''
_prodServices:ProductService
pList:any[]
productList:any
error_message:any[]



product:Product
prdForm:FormGroup

  constructor(prodServices:ProductService) { 
   this._prodServices =prodServices
  //  this.product= new Product()
  
   
  }

  ngOnInit() {
//  this.pList= this._prodServices.getProdlist().subscribe({
//     next(x){
//       console.log('data',x)
//       this.productList
//     }
//   }
//  )
// this._prodServices.getProdlist()
// .subscribe(
//   res =>{
//     this.productList=res
//   },
//   err => {
//     this.error_message.push(err)
//     this.error_message.push('server Error: plz retry again')
//   },
//   () =>{
//     console.log('stream completed')
//   }
// )
  this.prdForm=new FormGroup({
prodId:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
  prodName:new FormControl(),
  SkuId:new FormControl(),
  SkuName:new FormControl()
})
this.prdForm.patchValue({

})
}
//   }

  saveProduct() 
{
  console.log(this.prdForm.value)
  this.product=new Product(this.prdForm.value)
    // let product = new Product(pid, pname)

    // console.log(pid, pname)
    // this.productArray.push(product)
    
  }
//   updateStyle() {
//     // this.myStyle = { 'color': this.myColor, 'font-weight': this.myFont }
// if(this.as1=='green')
//   {
//     this.obj.greenBold=true
//     this.obj.blueBold=false
//   }else{
//     this.obj.greenBold=false
//     this.obj.blueBold=true
//   }
}
