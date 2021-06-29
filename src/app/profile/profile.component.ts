import { Component, OnInit } from '@angular/core';
import {DRFService} from "../Services/drf.service";
import {Router} from "@angular/router";
import {User} from "../Models/User";
import {Product} from "../Models/Product";
import {ShoppingCart} from "../Models/ShoppingCart";
import {Payment} from "../Models/Payment";
import {ShoppingCartItem} from "../Models/ShoppingCartItem";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  credits = 0;
  scarts = new Map<Payment, Array<ShoppingCartItem>>();
  profileForm: FormGroup | null = null;
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
        this.createForm();
      })

      this.getBought()
    })
  }
  save(): void{

  }
  createForm(): void{
      this.profileForm = new FormGroup({
        username: new FormControl('', [
          Validators.required,
        ]),
        email: new FormControl('', [
          Validators.required,
        ]),
        password: new FormControl('', [
          Validators.required,
        ]),
      });
  }
  getBought(): void{
    if (this.user){
      this.service.getShoppingCarts(this.user.username).subscribe((scarts : Payment[])=>{
        for (let c of scarts){
          if (c.shopping_cart.id != null) {
            this.service.getShoppingCartItems(c.shopping_cart.id).subscribe((products: ShoppingCartItem[])=>{
              this.scarts.set(c, products);
            });
          }
        }

      })
    }

  }
}
