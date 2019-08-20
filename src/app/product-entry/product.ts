//import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
//import { PLATFORM_ID } from '@angular/core';
import { Sku } from './sku';

export class Product{
    pid
    pname
    skuList: Sku[]
    csku
    

    constructor(FormData: {prodId:'',prodName:'',SkuId:'',SkuName:''}){
        this.pid=FormData.prodId
        this.pname=FormData.prodName
        this.csku=new Sku ()
        this.csku=FormData.SkuId
        this.csku=FormData.SkuName
        this.skuList.push(this.csku)
}}