import { Injectable } from '@angular/core';
import {Product} from "../Models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ITEMS = Array<Product>();
  constructor() { }
}
