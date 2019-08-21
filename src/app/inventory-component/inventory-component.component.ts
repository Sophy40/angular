import { Component, OnInit } from '@angular/core';
import { Product } from '../product-entry/product';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inventory-component',
  templateUrl: './inventory-component.component.html',
  styleUrls: ['./inventory-component.component.css']
})
export class InventoryComponentComponent implements OnInit {
prodId:string
stock:string
  constructor() { }

  ngOnInit() {
  }
  saveForm(product)
  {
    console.log('product:template',Product)
    Object.keys(Product.controls).forEach((e)=>{
      console.log('ctrl',product.controls[e])
      product.controls[e].disabled()
    })
  }
}
// pValue(obj)
// {
//   console.log(obj)
// }
