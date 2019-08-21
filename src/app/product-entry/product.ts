//import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
//import { PLATFORM_ID } from '@angular/core';
import { Sku } from './sku';

export class Product{
    pid
    pname
    skuList: Sku[]=[]
    csku
  static controls: {};
    

    constructor(FormData: {prodId:'',prodName:'',skills:{SkuId:'',SkuName:''}}){
        this.pid=FormData.prodId
        this.pname=FormData.prodName
        this.csku=new Sku ()
        this.csku.id=FormData.skills['SkuId']
        this.csku.name=FormData.skills['SkuName']
        this.skuList.push(this.csku)
}}