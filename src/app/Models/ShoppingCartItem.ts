import {ShoppingCart} from "./ShoppingCart";
import {Product} from "./Product";

export class ShoppingCartItem{
  quantity: number;
  cart_id: ShoppingCart;
  product: Product;

  constructor(quantity: number, cart_id: ShoppingCart, product: Product) {
    this.quantity = quantity;
    this.cart_id = cart_id;
    this.product = product;
  }
}
