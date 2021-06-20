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

  categories = ["All"];
  sellers = ["All"];
  condition = ["All", "New", "Used"];
  query = '';
  brands = ["All"];
  priceRange =[0,20000];
  inStock = "";
  inPromotion="";
  currentSelected = '-----------';
  constructor(private service: DRFService, private fb: FormBuilder) {
    this.filteredValues.set('query',this.query);
    this.filteredValues.set('condition', this.condition)
    this.filteredValues.set('categories', this.categories)
    this.filteredValues.set('brands', this.brands)
    this.filteredValues.set('sellers', this.sellers)
    this.filteredValues.set('price', this.priceRange)
    this.filteredValues.set('inStock', this.inStock)
    this.filteredValues.set('inPromotion', this.inPromotion)

    this.categoryForm = this.fb.group({
      category: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  searchRemoveAll(): void {
    let filters = this.filteredValues;
    filters.set("category",  (<[]>this.filteredValues.get('categories')).filter(obj => obj !== "All"))
    filters.set("sellers",  (<[]>this.filteredValues.get('sellers')).filter(obj => obj !== "All"))
    filters.set("condition",  (<[]>this.filteredValues.get('condition')).filter(obj => obj !== "All"))
    filters.set("brands",  (<[]>this.filteredValues.get('brands')).filter(obj => obj !== "All"))
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
        if (!this.sellers.includes(value.seller)) {this.sellers.push(value.seller)}
        if (!this.categories.includes(value.category)) {this.categories.push(value.category)}
        if (!this.brands.includes(value.brand)) {this.brands.push(value.brand)}

    })
    this.priceRange = [0, minPrice];

  }

}
