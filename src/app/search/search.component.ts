import { Component, OnInit } from '@angular/core';
import {Product} from "../Models/Product";
import {DRFService} from "../Services/drf.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  products = Array<Product>();
  promotions = Array<String>();

  constructor(private service: DRFService ) {
  }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void{
    this.service.getProducts().subscribe((pr: Product[])=>
    {
      this.products = pr;
      for (let i = 0; i < this.products.length; i++) {
        if(this.products[i].promotion){

          this.promotions.push(this.products[i].promotion.name)
        }
      }
    })


  }


}
