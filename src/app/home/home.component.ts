import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {Product} from "../Models/Product";
import {DRFService} from "../Services/drf.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  allProducts = Array<Product>();
  products = Array<Product>();

  constructor(private service: DRFService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void{
    this.service.getProducts().subscribe((pr: Product[])=>
    {
      this.products = pr;
      for (let i = 0; i < 5; i++) {
          this.allProducts.push(this.products[i])
      }

    })
  }

  addToCart(product: Product): void{
    if (product.id != null) {
      this.service.addToCart(product.id, 1).subscribe(()=>{
        alert("Added 1 " +product.name +" to Cart")
      })
    }
  }



}
