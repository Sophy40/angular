// import { Component, OnInit } from '@angular/core';
// import { Product } from './product'
// import { ProductService } from '../product.service';
// import { FormGroup ,FormControl, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-product-entry',
//   templateUrl: './product-entry.component.html',
//   styleUrls: ['./product-entry.component.css']
// })
// export class ProductEntryComponent implements OnInit {
//   productArray: Product[] = <any><Product[]>[]
//   done = false
//   disabled = true

//   condition=true
//   text = "welcome"
//   myColor = 'red'
//   myFont = 'bold'
//   blueBold = 'blueBold'
//   blueBolddisabled = 'blueBolddisabled'
//   myStyle = { 'color': this.myColor, 'font-weight': this.myFont }
//   // obj={'greenBold':true,'blueBold':false}
//   obj={greenBold:false, blueBold:false}
//   as1=''
// _prodServices:ProductService
// pList:any[]
// productList:any
// error_message:any[]



// product:Product
// prdForm:FormGroup

//   constructor(prodServices:ProductService) { 
//    this._prodServices =prodServices
//   //  this.product= new Product()
  
   
//   }

//   ngOnInit() {
// //  this.pList= this._prodServices.getProdlist().subscribe({
// //     next(x){
// //       console.log('data',x)
// //       this.productList
// //     }
// //   }
// //  )
// // this._prodServices.getProdlist()
// // .subscribe(
// //   res =>{
// //     this.productList=res
// //   },
// //   err => {
// //     this.error_message.push(err)
// //     this.error_message.push('server Error: plz retry again')
// //   },
// //   () =>{
// //     console.log('stream completed')
// //   }
// // )
//   this.prdForm=new FormGroup({
// prodId:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
//   prodName:new FormControl(),
//   SkuId:new FormControl(),
//   SkuName:new FormControl()
// })
// this.prdForm.patchValue({

// })
// }
// //   }

//   saveProduct() 
// {
//   console.log(this.prdForm.value)
//   this.product=new Product(this.prdForm.value)
//     // let product = new Product(pid, pname)

//     // console.log(pid, pname)
//     // this.productArray.push(product)
    
//   }
// //   updateStyle() {
// //     // this.myStyle = { 'color': this.myColor, 'font-weight': this.myFont }
// // if(this.as1=='green')
// //   {
// //     this.obj.greenBold=true
// //     this.obj.blueBold=false
// //   }else{
// //     this.obj.greenBold=false
// //     this.obj.blueBold=true
// //   }
// }

import { Component, OnInit } from '@angular/core';
import {Product} from './product'
import { ProductService } from '../product.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-product-entry',
  templateUrl: './product-entry.component.html',
  styleUrls: ['./product-entry.component.css']
})
export class ProductEntryComponent implements OnInit {

  product: Product
  _prodService: ProductService

  prdForm: FormGroup

  constructor(prodService:ProductService) { 
    this._prodService = prodService
  }

  ngOnInit() {
      this.prdForm = new FormGroup({
        prdId : new FormControl('',Validators.compose([Validators.required, Validators.minLength(5)])),
        prdName: new FormControl(),
        skills: new FormGroup({
        skuId : new FormControl(),
        skuName: new FormControl()
        })
      })
      /*
      this.prdForm.patchValue({
        prdId: '12',
        prdName: 'Book Omega',
        skuId: '001',
        skuName : 'Register 11'
      })
      */
  }

  saveProduct(){
    console.log('valid:'+this.prdForm.valid)
    this.product = new Product(this.prdForm.value)
    console.log(this.product)
    console.log('prdForm:', this.prdForm)
  }

  logKeyValues(){
    this.loopCtrls(this.prdForm)
  }

  loopCtrls(grp: FormGroup){
    Object.keys(grp.controls).forEach((x) => {
      const actrl  = grp.get(x)
      if(actrl instanceof FormControl){
        console.log('key:',x,' value:', actrl.value)
      } else {
        this.loopCtrls(<FormGroup>actrl)
      }
      
    })
  }
}