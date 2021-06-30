import { Component, OnInit } from '@angular/core';
import {Product} from "../Models/Product";
import {Comment} from "../Models/Comment";
import {DRFService} from "../Services/drf.service";
import {ActivatedRoute, Params} from "@angular/router";
import {identity} from "rxjs";
import {HttpParams} from "@angular/common/http";
import { faStar, faStarHalf, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = Product.newProduct();
  stars: any[] = [];
  avgRating: number = 0;
  id: string = '';
  sum: number = 0;
  comments= Array<Comment>();

  faStar = faStar;
  faStarHalf = faStarHalf;
  faCart = faShoppingCart;
  constructor(private route: ActivatedRoute, private service: DRFService ) {

  }

  ngOnInit(): void {
    this.id = window.location.href.split("details/")[1];

    this.getProduct(this.id);
    this.getComments(this.id)

  }

  getProduct(id:string|null): void{
    this.service.getProduct(Number(id)).subscribe((pr: Product)=>
    {
      this.product = pr;
    })
  }

  getComments(id: string|null): void{
    this.service.getComments(Number(id)).subscribe((c:Comment[]) =>{
      this.comments = c;
      this.comments.forEach((value) =>{
          this.sum += value.rating;
      })
      if (this.sum>0)
        this.avgRating = this.sum / this.comments.length;
      for(let i=0; i < this.avgRating ; i++){
        this.stars.push(1);
      }
      if (this.stars.length<this.avgRating){
        this.stars.push(0);
      }
    })
  }

}
