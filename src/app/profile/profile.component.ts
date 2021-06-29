import { Component, OnInit } from '@angular/core';
import {DRFService} from "../Services/drf.service";
import {Router} from "@angular/router";
import {User} from "../Models/User";
import {Product} from "../Models/Product";
import {ShoppingCart} from "../Models/ShoppingCart";
import {Payment} from "../Models/Payment";
import {ShoppingCartItem} from "../Models/ShoppingCartItem";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  credits = 0;
  scarts = new Map<Payment, Array<ShoppingCartItem>>();
  constructor(private service: DRFService, private router: Router) {


  }

  ngOnInit(): void {
    if (!localStorage.getItem("TOKEN")){
      this.router.navigate(['/login']);
    }else{
      this.getUser();

    }

  }
  getUser(): void{
    this.service.profile().subscribe((pr: User)=>
    {
      this.user = pr;
      this.service.credits().subscribe((cr: number)=>{
        this.credits = cr;
      })
      this.getBought()
    })
  }

  getBought(): void{
    if (this.user){
      alert()
      this.service.getShoppingCarts(this.user.username).subscribe((scarts : Payment[])=>{
        for (let c of scarts){
          if (c.shopping_cart.id != null) {
            this.service.getShoppingCartItems(c.shopping_cart.id).subscribe((products: ShoppingCartItem[])=>{
              alert(c.id)
              this.scarts.set(c, products);
            });
          }
        }

      })
    }

  }
}
