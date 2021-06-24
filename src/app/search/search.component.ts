import { Component, OnInit } from '@angular/core';
import {Product} from "../Models/Product";
import {DRFService} from "../Services/drf.service";
import {min} from "rxjs/operators";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  allProducts = Array<Product>();
  promotions = Array<string>();
  products = Array<Product>()
  //Filters

  filteredValues = new Map<String, any>();

  categoryForm= new FormGroup({});

  CATEGORIES = Array<string>("All");
  SELLERS = Array<string>("All");
  CONDITIONS = ["All","New", "Used"];
  BRANDS = Array<string>("All");
  STOCK = ["True", "False", "All"]
  PROMO = ["True", "False", "All"]

  condition="All";
  category = "All";
  brand="All";
  seller="All";
  query = "All";
  priceRange =[0,20000];
  inStock = "All";
  inPromotion="All";


  constructor(private service: DRFService) {
  }

  ngOnInit(): void {
    this.getProducts();


  }
  search(value: string){
    this.category = value;
    this.searchRemoveAll();
  }



  searchRemoveAll(): void {
    let filters = new Map();
    filters.set('query',this.query);
    filters.set('brands', this.brand)
    filters.set('price', this.priceRange)
    filters.set('categories', this.category)
    filters.set('sellers', this.seller)
    filters.set('condition', this.condition)
    filters.set('inStock', this.inStock)
    filters.set('inPromotion', this.inPromotion)
    this.service.search(filters).subscribe((pr: Product[])=>
    {
      this.products = pr;
    });
  }

  getProducts(): void{
    this.service.getProducts().subscribe((pr: Product[])=>
    {
      this.allProducts = pr;
      this.products = pr;
      for (let i = 0; i < this.products.length; i++) {
        if(this.products[i].promotion){
          this.promotions.push(this.products[i].promotion.name)
        }
      }

      this.getFilters();
    })
  }


  getFilters(): void{
    let minPrice = 0
    this.allProducts.forEach((value) =>{
        if (value.price>minPrice) minPrice = value.price;
        if (!this.SELLERS.includes(value.seller)) {this.SELLERS.push(value.seller)}
        if (!this.CATEGORIES.includes(value.category)) {this.CATEGORIES.push(value.category)}
        if (!this.BRANDS.includes(value.brand)) {this.BRANDS.push(value.brand)}
    })
    this.priceRange = [0, minPrice];
  }

}
