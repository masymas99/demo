import { Component, OnInit } from '@angular/core';
import { OrderComponent } from "../order/order.component";
import { FormsModule } from '@angular/forms';
import { ICategory } from '../models/Icategory';

@Component({
  selector: 'app-master-order',
  templateUrl: './master-order.component.html',
  styleUrls: ['./master-order.component.css'],
  imports: [OrderComponent,FormsModule]
})
export class MasterOrderComponent implements OnInit {
SelectedCatID:string;
catlist:ICategory[];
price:number;
  constructor() {
  this.SelectedCatID = "Clothing";
  this.price = 0;

  this.catlist = [
    {
      id: 1, name: 'Electronics'
    },
    {
      id: 2, name: 'Clothing'
    },
    {
      id: 3, name: "Home Appliances"
    }
  ]



  }

  ngOnInit() {
  }

  ShowPrice(data:any){
    this.price = data
  }

}
