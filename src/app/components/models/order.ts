import { Iorder } from "../order/Iorder";


export class Order implements Iorder {

  id: number;
  category: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  quantity: number;

  constructor(id: number, category: string,name : string, price: number, description: string, imageUrl: string, quantity: number) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
  }

}
