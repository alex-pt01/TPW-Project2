import { Component, OnInit } from '@angular/core';
import {Product} from "../Models/Product";
import {DRFService} from "../Services/drf.service";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart=new Map<Product,any>();
  total = 0;
  subtotal=0;
  discount = 0;
  constructor(private service: DRFService) {

  }

  ngOnInit(): void {
    this.getCart()
    this.getTotal();
  }
  getCart(): void{
    this.cart=new Map<Product,any>();
    this.discount=0;
    this.total=0;
    this.subtotal=0;
    this.service.getCart().subscribe((cart: string)=>
    {
      cart = (JSON.stringify(cart))
      let minus = cart.replace("{","").replace("}","")
      let cartItems = minus.split(",")

      for (let c of cartItems) {
        var re = /"/gi;
        c = c.replace(re, "")
        var key = String(c.split(":")[0])
        var value = c.split(":")[1]
        this.service.getProduct(Number(key)).subscribe((product: Product)=>
        {
          this.cart.set(product, Number(value))
          if(product.promotion){
            this.discount+=product.price * product.promotion.discount
          }
          this.subtotal+=product.price;
        });
      }
    });
  }

  getTotal():void{
    this.service.getCartTotal().subscribe((cartTotal: number)=>
    {
     this.total=cartTotal
    });
  }
  addToCart(product: Product): void{
    if (product.id != null) {
      this.service.addToCart(product.id, 0).subscribe(() => {
        alert("Removed From Cart")
        this.getCart()
        this.getTotal()
      })
    }
  }
}
