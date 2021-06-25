import { Injectable } from '@angular/core';
import {Product} from "../Models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ITEMS = new Map<Product, number>();
  constructor() { }


  addItem(product: Product, quantity: number):void{
    this.ITEMS.set(product, quantity);
  }
  removeItem(product: Product): void{
    this.ITEMS.delete(product);
  }


}
