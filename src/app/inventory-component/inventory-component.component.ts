import { Component, OnInit } from '@angular/core';

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

}
