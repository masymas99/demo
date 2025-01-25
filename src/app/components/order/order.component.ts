import { Component, OnInit } from '@angular/core';
import { Iorder } from './Iorder';
import { ShadowDirective } from '../directive/shadow.directive';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  imports: [ ShadowDirective,CurrencyPipe ]
})
export class OrderComponent {

  prolist:Iorder[]=[];
  totalprice:number;
  count
  buyit( p:Iorder, count:any){
    this.totalprice += p.price*count;
    p.quantity -= count;
  }


  constructor() {
    this.count = 0;
    this.totalprice = 0;
    this.prolist=[
      {
        "id": 1,
        "category": "Electronics",
        "name": "Smartphone",
        "price": 299.99,
        "description": "High-performance smartphone with 128GB storage.",
        "imageUrl": "https://picsum.photos/200/300?random=1",
        "quantity": 0
      },
      {
        "id": 2,
        "category": "Electronics",
        "name": "Wireless Headphones",
        "price": 79.99,
        "description": "Noise-canceling wireless headphones.",
        "imageUrl": "https://picsum.photos/200/300?random=2",
        "quantity": 30
      },
      {
        "id": 3,
        "category": "Electronics",
        "name": "Smartwatch",
        "price": 149.99,
        "description": "Fitness-focused smartwatch with heart rate monitor.",
        "imageUrl": "https://picsum.photos/200/300?random=3",
        "quantity": 20
      },
      {
        "id": 4,
        "category": "Electronics",
        "name": "Laptop",
        "price": 899.99,
        "description": "Lightweight laptop with 16GB RAM and 512GB SSD.",
        "imageUrl": "https://picsum.photos/200/300?random=4",
        "quantity": 15
      },
      {
        "id": 5,
        "category": "Electronics",
        "name": "Tablet",
        "price": 399.99,
        "description": "10-inch screen tablet with stylus support.",
        "imageUrl": "https://picsum.photos/200/300?random=5",
        "quantity": 25
      },
      {
        "id": 6,
        "category": "Clothing",
        "name": "T-Shirt",
        "price": 19.99,
        "description": "Comfortable cotton T-shirt available in various sizes.",
        "imageUrl": "https://picsum.photos/200/300?random=6",
        "quantity": 100
      },
      {
        "id": 7,
        "category": "Clothing",
        "name": "Jeans",
        "price": 49.99,
        "description": "Classic denim jeans with a slim fit design.",
        "imageUrl": "https://picsum.photos/200/300?random=7",
        "quantity": 60
      },
      {
        "id": 8,
        "category": "Clothing",
        "name": "Jacket",
        "price": 79.99,
        "description": "Waterproof jacket ideal for outdoor activities.",
        "imageUrl": "https://picsum.photos/200/300?random=8",
        "quantity": 40
      },
      {
        "id": 9,
        "category": "Clothing",
        "name": "Sneakers",
        "price": 59.99,
        "description": "Stylish sneakers for everyday wear.",
        "imageUrl": "https://picsum.photos/200/300?random=9",
        "quantity": 70
      },
      {
        "id": 10,
        "category": "Clothing",
        "name": "Cap",
        "price": 14.99,
        "description": "Adjustable cap with breathable fabric.",
        "imageUrl": "https://picsum.photos/200/300?random=10",
        "quantity": 80
      },
      {
        "id": 11,
        "category": "Home Appliances",
        "name": "Vacuum Cleaner",
        "price": 199.99,
        "description": "Powerful vacuum cleaner with HEPA filter.",
        "imageUrl": "https://picsum.photos/200/300?random=11",
        "quantity": 30
      },
      {
        "id": 12,
        "category": "Home Appliances",
        "name": "Microwave",
        "price": 149.99,
        "description": "Compact microwave oven with multiple presets.",
        "imageUrl": "https://picsum.photos/200/300?random=12",
        "quantity": 25
      },
      {
        "id": 13,
        "category": "Home Appliances",
        "name": "Air Conditioner",
        "price": 499.99,
        "description": "Energy-efficient air conditioner with remote control.",
        "imageUrl": "https://picsum.photos/200/300?random=13",
        "quantity": 10
      },
      {
        "id": 14,
        "category": "Home Appliances",
        "name": "Blender",
        "price": 49.99,
        "description": "High-speed blender with multiple blades.",
        "imageUrl": "https://picsum.photos/200/300?random=14",
        "quantity": 40
      },
      {
        "id": 15,
        "category": "Home Appliances",
        "name": "Toaster",
        "price": 29.99,
        "description": "Two-slice toaster with adjustable browning settings.",
        "imageUrl": "https://picsum.photos/200/300?random=15",
        "quantity": 50
      },
      {
        "id": 16,
        "category": "Home Appliances",
        "name": "Dishwasher",
        "price": 599.99,
        "description": "Spacious dishwasher with quick wash feature.",
        "imageUrl": "https://picsum.photos/200/300?random=16",
        "quantity": 8
      },



    ]


  }



}
