import { Component, OnInit } from '@angular/core';
import {Product} from "../Models/Product";
import {CartService} from "../Services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart=new Map<Product,number>();
  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    alert(this.cart.size)
  }

}
