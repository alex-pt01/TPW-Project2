import { Component, OnInit } from '@angular/core';
import {Product} from "../Models/Product";
import {DRFService} from "../Services/drf.service";
import {ActivatedRoute, Params} from "@angular/router";
import {identity} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = Product.newProduct();
  id: string = '------------';
  constructor(private route: ActivatedRoute, private service: DRFService ) {

  }

  ngOnInit(): void {
    this.id = window.location.href.split("details/")[1];

    this.getProduct(this.id);
  }

  getProduct(id:string|null): void{
    this.service.getProduct(Number(id)).subscribe((pr: Product)=>
    {

      this.product = pr;
    })
  }

}
