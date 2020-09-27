import { Component, OnInit } from '@angular/core';
import { Products } from '../invoice/product';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  
  products:Products[];
  proCode : String;
  proSelected: any = {};
  modifideName : String;
  modifiedPrice : Number;
  constructor() { }

  ngOnInit(): void {
    this.products = [
          {code:"prd01", name:"Apple MacBook Pro ", price:112990},
          {code:"prd02", name:"Bluetooth Speaker ", price:1099},
          {code:"prd03", name:"Mobile", price:15000},
    ];
    this.proCode="prd01";
  }
  onCodeSelected(val:Products){
    this.customFunction(val);
  }
  customFunction(val:Products){
    this.modifideName = val.name;
    this.modifiedPrice = val.price;
  }

}

